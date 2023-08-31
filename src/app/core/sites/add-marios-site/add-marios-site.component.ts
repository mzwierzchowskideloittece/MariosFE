import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MariosType } from "../../interfaces/marios-type-interface/marios-type";
import { MariosService } from "../../services/marios-service/marios.service";
import { User } from "../../interfaces/user-interface/user";
import {Router} from "@angular/router";
import {Marios} from "../../interfaces/marios-interface/marios";

@Component({
  selector: 'app-add-marios-site',
  templateUrl: './add-marios-site.component.html',
  styleUrls: ['./add-marios-site.component.scss']
})

export class AddMariosSiteComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  personCtrl = new FormControl('');
  filteredPeople: Observable<User[]> = new Observable<User[]>();
  selectedPeople: User[] = [];
  notSelectedPeople: User[] = [];
  allPeople: User[] = [];

  mariosTypes: MariosType[] = [];
  selectedMariosType: string = "";

  formData: FormGroup = new FormGroup<any>({});
  disableSendButton: boolean = false;

  title: string = "";
  comment: string = "";

  errorSendingMarios: boolean = false;


  @ViewChild('personInput') personInput: ElementRef<HTMLInputElement> = {} as ElementRef;


  constructor(private mariosService: MariosService, private router: Router) {}

  ngOnInit() {

    this.mariosService.getMariosTypes().subscribe( mariosTypes => {

      if (mariosTypes != undefined) {
        this.mariosTypes = mariosTypes;
      }

    });


    this.mariosService.getUsers().subscribe( users => {

      if (users != undefined) {

        for(let user of users) {

          if(user.externalId == this.mariosService.id)
          {
            const userIndex = users.indexOf(user);

            if (userIndex >= 0) {
              users.splice(userIndex, 1);
              break
            }
          }

        }

        this.allPeople = [...users];
        this.notSelectedPeople = [...users];
        this.filteredPeople = this.personCtrl.valueChanges.pipe(
          startWith(null),
          map((person: string | null) => (person ? this._filter(person) : this.notSelectedPeople.slice()))
        );
      }
    });

    this.formData = new FormGroup({
      receivers: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      comment: new FormControl(null, [Validators.required])
    });

  }



  async onClickSubmit(data: any) {
    this.errorSendingMarios = false;
    if(this.formData.invalid) return;
    this.disableSendButton = true;
    let subscribtion = this.mariosService.addMarios({
      typeExternalId: this.selectedMariosType,
      title: data.title,
      comment: data.comment,
      externalIdOfSender: this.mariosService.id,
      externalIdsOfReceivers: [...this.selectedPeople.map<string>(person => person.externalId)]
    }).subscribe((data: Marios) => {this.router.navigate([""]);});

    await this.delay(5000);

    subscribtion.unsubscribe();
    this.disableSendButton = false;
    this.errorSendingMarios = true;
  }

  remove(user: User): void {
    const index = this.selectedPeople.indexOf(user);

    if (index >= 0) {
      this.selectedPeople.splice(index, 1);

      this.notSelectedPeople.push(user);

      this.personCtrl.setValue(this.personCtrl.value);

    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    const index = this.notSelectedPeople.indexOf(event.option.value);

    this.selectedPeople.push(event.option.value);

    if (index >= 0) {
      this.notSelectedPeople.splice(index, 1);
    }

    this.personInput.nativeElement.value = '';
    this.personCtrl.setValue(null);
  }

  private _filter(value: string): User[] {
    const filterValue = String(value).toLowerCase();

    return this.notSelectedPeople.filter(person => String(person.userName).toLowerCase().includes(filterValue));
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}

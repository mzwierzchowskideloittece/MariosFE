import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import {FormControl, FormGroup} from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MariosType } from "../../interfaces/marios-type-interface/marios-type";
import { MariosService } from "../../services/marios-service/marios.service";
import { User } from "../../interfaces/user-interface/user";

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

  title: string = "";
  comment: string = "";


  @ViewChild('personInput') personInput: ElementRef<HTMLInputElement> = {} as ElementRef;


  constructor(private mariosService: MariosService) {}

  ngOnInit() {

    this.mariosService.getMariosTypes().subscribe( mariosTypes => {

      if (mariosTypes != undefined) {
        this.mariosTypes = mariosTypes;
      }

    });


    this.mariosService.getUsers().subscribe( Users => {

      if (Users != undefined) {
        this.allPeople = Users;
        this.notSelectedPeople = Users;
        this.filteredPeople = this.personCtrl.valueChanges.pipe(
          startWith(null),
          map((person: string | null) => (person ? this._filter(person) : this.notSelectedPeople.slice())),
        );
      }
    });

    this.formData = new FormGroup({
      title: new FormControl(),
      comment: new FormControl()
    });

  }

  onClickSubmit(data: any) {
    this.mariosService.addMarios({
      typeExternalId: this.selectedMariosType,
      title: data.title,
      comment: data.comment,
      fromExternalId: this.mariosService.id,
      toExternalIds: [...this.selectedPeople.map<string>(person => person.externalId)]
    });
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

    return this.notSelectedPeople.filter(person => String(person.firstAndLastName).toLowerCase().includes(filterValue));
  }

}

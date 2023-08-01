import {Component, ElementRef, inject, ViewChild} from "@angular/core";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-add-marios-site',
  templateUrl: './add-marios-site.component.html',
  styleUrls: ['./add-marios-site.component.scss']
})

export class AddMariosSiteComponent {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  personCtrl = new FormControl('');
  filteredPeople: Observable<string[]>;
  selectedPeople: string[] = [];
  allPeople: string[] = ['Adam Adamski', 'Alex Aleski', 'Marta Martowska'];

  @ViewChild('personInput') personInput: ElementRef<HTMLInputElement> = {} as ElementRef;

  announcer = inject(LiveAnnouncer);

  constructor() {
    this.filteredPeople = this.personCtrl.valueChanges.pipe(
      startWith(null),
      map((person: string | null) => (person ? this._filter(person) : this.allPeople.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.selectedPeople.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.personCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.selectedPeople.indexOf(fruit);

    if (index >= 0) {
      this.selectedPeople.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedPeople.push(event.option.viewValue);
    this.personInput.nativeElement.value = '';
    this.personCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allPeople.filter(person => person.toLowerCase().includes(filterValue));
  }
}

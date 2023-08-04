import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-pop-up-marios',
  templateUrl: './pop-up-marios.component.html',
  styleUrls: ['./pop-up-marios.component.scss']
})
export class PopUpMariosComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {sentOrReceived: string, name: string, type: string, title: string, comment: string}) { }

}

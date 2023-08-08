import { Component, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { PopUpMariosComponent } from "../pop-up-marios/pop-up-marios.component";
import { MariosService } from "../../../core/services/marios-service/marios.service";
import {Marios} from "../../../core/interfaces/marios-interface/marios";

@Component({
  selector: 'app-marios-grid',
  templateUrl: './marios-grid.component.html',
  styleUrls: ['./marios-grid.component.scss']
})
export class MariosGridComponent {

  @Input()
  public mariosList: Marios[]=[];


  constructor(public dialog: MatDialog, public mariosService: MariosService) {}


  popUpMarios(tile: Marios) {
    if(tile.sentOrReceived == "received"){
      this.dialog.open(PopUpMariosComponent,{
        data: {
          sentOrReceived: tile.sentOrReceived,
          name: [tile.firstAndLastNameOfSender],
          type: tile.type,
          title: tile.title,
          comment: tile.comment
        }});
    } else {
      this.dialog.open(PopUpMariosComponent,{
        data: {
          sentOrReceived: tile.sentOrReceived,
          name: [...tile.firstAndLastNamesOfReceivers],
          type: tile.type,
          title: tile.title,
          comment: tile.comment
        }});
    }

  }

}

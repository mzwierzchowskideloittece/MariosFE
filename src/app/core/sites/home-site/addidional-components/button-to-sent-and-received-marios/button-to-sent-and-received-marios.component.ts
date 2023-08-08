import {Component, Input, OnInit} from '@angular/core';
import {MariosService} from "../../../../services/marios-service/marios.service";

@Component({
  selector: 'app-button-to-sent-and-received-marios',
  templateUrl: './button-to-sent-and-received-marios.component.html',
  styleUrls: ['./button-to-sent-and-received-marios.component.scss']
})
export class ButtonToSentAndReceivedMariosComponent implements OnInit{

  @Input()
  public link: string = "";

  public buttonLabel:string = "";

  public numberOfMarios: number = 0;


  constructor(private mariosService: MariosService) {}

  ngOnInit() {

    if(this.link == "/sent") {
    this.buttonLabel = "SENT MARIOS:";
      this.mariosService.getSentMarios().subscribe( sentMarios => {

        if (sentMarios != undefined) {
          this.numberOfMarios = sentMarios.length;
        }
      });
    } else {
      if(this.link == "/received") {
        this.buttonLabel = "RECEIVED MARIOS:";
        this.mariosService.getReceivedMarios().subscribe( receivedMarios => {

          if (receivedMarios != undefined) {
            this.numberOfMarios = receivedMarios.length;
          }
        });
      }
    }
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-to-sent-and-received-marios',
  templateUrl: './button-to-sent-and-received-marios.component.html',
  styleUrls: ['./button-to-sent-and-received-marios.component.scss']
})
export class ButtonToSentAndReceivedMariosComponent {

  @Input()
  public link: string = "";

  public buttonLabel:string = "";

  ngOnInit() {

    if(this.link == "/sent") {
    this.buttonLabel = "SENT MARIOS:";
    } else {
      if(this.link == "/received") {
        this.buttonLabel = "RECEIVED MARIOS:";
      }
    }
  }
}

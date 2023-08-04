import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {MariosService} from "../../services/marios-service/marios.service";
import {Subject} from "rxjs";
import {Marios} from "../../interfaces/marios-interface/marios";


@Component({
  selector: 'app-display-marios',
  templateUrl: './display-marios.component.html',
  styleUrls: ['./display-marios.component.scss']
})
export class DisplayMariosComponent {

  public href: string = "";

  public label: string = "";

  public mariosList: Marios[] =[];

  constructor(private router: Router, private mariosService: MariosService) {}

  ngOnInit() {
    this.href = this.router.url;

    if(this.href == "/sent") {
      this.label = "SENT MARIOS:";
      this.mariosService.getSentMarios().subscribe( sentMarios => {

        if (sentMarios != undefined) {
          this.mariosList = sentMarios as Marios[];
        }
        console.log(this.mariosList);
      });
    } else {
      if(this.href == "/received") {
        this.label = "RECEIVED MARIOS:";
        this.mariosService.getReceivedMarios().subscribe( sentMarios => {

          if (sentMarios != undefined) {
            this.mariosList = sentMarios as Marios[];
          }
          console.log(this.mariosList);
        });

      }
    }
  }

}

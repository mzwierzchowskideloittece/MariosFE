import {Component, OnInit} from '@angular/core';
import { MariosService } from "../../services/marios-service/marios.service";
import {Marios} from "../../interfaces/marios-interface/marios";

@Component({
  selector: 'app-home-site',
  templateUrl: './home-site.component.html',
  styleUrls: ['./home-site.component.scss']
})
export class HomeSiteComponent implements OnInit {

  public mariosList: Marios[] = [];

  constructor(private mariosService: MariosService) {

  }


  ngOnInit() {

    this.mariosService.getLatestMarios().subscribe( sentMarios => {

      if (sentMarios != undefined) {
        this.mariosList = sentMarios;
      }
    });

  }

}

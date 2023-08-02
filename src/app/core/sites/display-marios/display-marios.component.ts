import {Component} from "@angular/core";
import {Router} from "@angular/router";


@Component({
  selector: 'app-display-marios',
  templateUrl: './display-marios.component.html',
  styleUrls: ['./display-marios.component.scss']
})
export class DisplayMariosComponent {

  public href: string = "";

  constructor(private router: Router) {}
  ngOnInit() {
    this.href = this.router.url;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-marios-grid',
  templateUrl: './marios-grid.component.html',
  styleUrls: ['./marios-grid.component.scss']
})
export class MariosGridComponent {
  tiles = [
    {text: 'One'},
    {text: 'Two'},
    {text: 'Three'},
    {text: 'Four'},
    {text: 'Four'}

  ];
}

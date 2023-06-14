import { Component, Input } from '@angular/core';
import { Card } from 'src/model/Card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() cards!: Card[]

  constructor() {

  }

}

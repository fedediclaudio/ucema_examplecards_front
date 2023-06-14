import { Component } from '@angular/core';
import { Card } from 'src/model/Card';
import { Owner } from 'src/model/Owner';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  owner: Owner;

  constructor() {
    this.owner = new Owner("Jhon Doe", 30, "12/09/2015")
    let card1: Card = new Card("Tajeta 1", "1111 1222 1333 4444", "Debito", "Santander", "06/26")
    let card2: Card = new Card("Tajeta 2", "5555 6666 7777 8888", "Debito", "Nacion", "08/29")
    let card3: Card = new Card("Tajeta 3", "2222 2333 2444 9999", "Debito", "BBVA", "02/24")
    this.owner.addCard(card1);
    this.owner.addCard(card2);
    this.owner.addCard(card3);
  }

}

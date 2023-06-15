import { Component } from '@angular/core';
import { Bank } from 'src/model/Bank';
import { Card } from 'src/model/Card';
import { Owner } from 'src/model/Owner';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  banks: Bank[];
  owner: Owner;

  constructor() {
    let santander: Bank = new Bank("Santander", "Bartolomé Mitre 480")
    let nacion: Bank = new Bank("Nacion", "Bartolomé Mitre 480")
    let ciudad: Bank = new Bank("Ciudad", "Av. Cabildo 3061")
    this.banks = [];
    this.banks.push(santander, nacion, ciudad);
    this.owner = new Owner("Jhon Doe", 30, "12/09/2015")
    let card1: Card = new Card("Tajeta 1", "1111 1222 1333 4444", "Debito", santander, "06/26")
    let card2: Card = new Card("Tajeta 2", "5555 6666 7777 8888", "Debito", nacion, "08/29")
    let card3: Card = new Card("Tajeta 3", "2222 2333 2444 9999", "Debito", ciudad, "02/24")
    this.owner.addCard(card1);
    this.owner.addCard(card2);
    this.owner.addCard(card3);
  }

}

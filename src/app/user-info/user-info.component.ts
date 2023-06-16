import { Component } from '@angular/core';
import { Bank } from 'src/model/Bank';
import { Card } from 'src/model/Card';
import { Owner } from 'src/model/Owner';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  banks: Bank[];
  owner: Owner;

  newBankForm = new FormGroup({
    name:  new FormControl(),
    number: new FormControl(),
    type: new FormControl(),
    bank: new FormControl(),
    expireDate: new FormControl()
  })
  

  constructor() {
    let santander: Bank = new Bank("Santander", "Bartolomé Mitre 480")
    let nacion: Bank = new Bank("Nacion", "Bartolomé Mitre 480")
    let ciudad: Bank = new Bank("Ciudad", "Av. Cabildo 3061")
    this.banks = [];
    this.banks.push(santander, nacion, ciudad);
    this.owner = new Owner("Jhon Doe", 30, "12/09/2015")
    let card1: Card = new Card("Tarjeta 1", "1111 1222 1333 4444", "Debito", santander, "06/26")
    let card2: Card = new Card("Tarjeta 2", "5555 6666 7777 8888", "Debito", nacion, "08/29")
    let card3: Card = new Card("Tarjeta 3", "2222 2333 2444 9999", "Debito", ciudad, "02/24")
    this.owner.addCard(card1);
    this.owner.addCard(card2);
    this.owner.addCard(card3);
  }

  onSubmit() {
    let name = this.newBankForm.get('name')?.value
    let number = this.newBankForm.get('number')?.value
    let type = this.newBankForm.get('type')?.value
    let bank = this.newBankForm.get('bank')?.value
    let expireDate = this.newBankForm.get('expireDate')?.value
    console.log(bank);

    let card: Card = new Card(name, number, type, bank, expireDate);

    this.owner.addCard(card);
  }

}

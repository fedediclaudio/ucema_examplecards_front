import { Component } from '@angular/core';
import { Bank } from 'src/model/Bank';
import { Card } from 'src/model/Card';
import { Owner } from 'src/model/Owner';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  banks: Bank[];
  owner: Owner;
  
  nextId: number = 1;

  newCardForm = new FormGroup({
    name:  new FormControl('', [Validators.required, Validators.maxLength(20)]),
    number: new FormControl('', [Validators.required, Validators.pattern("^\\d{16}$")]),
    type: new FormControl('', [Validators.required]),
    bank: new FormControl(new Bank('',''), [Validators.required]),
    expireDate: new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\\/\\d{2}$')])
  })
  

  constructor() {
    let santander: Bank = new Bank("Santander", "Bartolomé Mitre 480")
    let nacion: Bank = new Bank("Nacion", "Bartolomé Mitre 480")
    let ciudad: Bank = new Bank("Ciudad", "Av. Cabildo 3061")
    this.banks = [];
    this.banks.push(santander, nacion, ciudad);
    this.owner = new Owner("Jhon Doe", 30, "12/09/2015")
    let card1: Card = new Card(this.nextId++, "Tarjeta 1", "1111 1222 1333 4444", "Debito", santander, "06/26")
    let card2: Card = new Card(this.nextId++, "Tarjeta 2", "5555 6666 7777 8888", "Debito", nacion, "08/29")
    let card3: Card = new Card(this.nextId++, "Tarjeta 3", "2222 2333 2444 9999", "Debito", ciudad, "02/24")
    this.owner.addCard(card1);
    this.owner.addCard(card2);
    this.owner.addCard(card3);
  }

  onSubmit() : void {
    let name = this.newCardForm.value.name!
    let number = this.newCardForm.value.number!
    let type = this.newCardForm.value.type!
    let bank = this.newCardForm.value.bank!
    let expireDate = this.newCardForm.value.expireDate!

    let card: Card = new Card(this.nextId++, name, number, type, bank, expireDate);

    this.owner.addCard(card);

    this.newCardForm.reset();
  }

  get name() : FormControl { return this.newCardForm.controls['name'] }
  get number() : FormControl { return this.newCardForm.controls['number'] }
  get type() : FormControl { return this.newCardForm.controls['type']; }
  get bank() : FormControl { return this.newCardForm.controls['bank']; }
  get expireDate () : FormControl { return this.newCardForm.controls['expireDate']; }

}

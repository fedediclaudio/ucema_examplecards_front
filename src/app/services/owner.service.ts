import { Injectable } from '@angular/core';
import { Bank } from '../model/Bank';
import { Card } from '../model/Card';
import { Owner } from '../model/Owner';
import { BankService } from './bank.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  owner: Owner;

  constructor(private bankService: BankService) {
    let banks
    bankService.getBanks().subscribe((data) => banks = data);
    this.owner = new Owner("Jhon Doe", 30, "12/09/2015")
    let card1: Card = new Card("Tarjeta 1", "1111 1222 1333 4444", "Debito", bankService.getBankByName("Santander")!, "06/26")
    let card2: Card = new Card("Tarjeta 2", "5555 6666 7777 8888", "Debito", bankService.getBankByName("Nacion")!, "08/29")
    let card3: Card = new Card("Tarjeta 3", "2222 2333 2444 9999", "Debito", bankService.getBankByName("Ciudad")!, "02/24")
    this.owner.addCard(card1);
    this.owner.addCard(card2);
    this.owner.addCard(card3);
  }

  getOwner() : Owner {
    return this.owner
  }
}

import { Injectable } from '@angular/core';
import { Bank } from '../model/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  banks: Bank[] = []

  constructor() {
    let santander: Bank = new Bank("Santander", "Bartolomé Mitre 480")
    let nacion: Bank = new Bank("Nacion", "Bartolomé Mitre 480")
    let ciudad: Bank = new Bank("Ciudad", "Av. Cabildo 3061")
    this.banks = [];
    this.banks.push(santander, nacion, ciudad);
   }

   getBanks(): Bank[] {
    return this.banks
   }

   getBankByName(name: string): Bank | undefined {
    return this.banks.find(bank => bank.name === name);
  }
}

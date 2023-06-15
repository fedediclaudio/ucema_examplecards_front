import { Bank } from "./Bank";

export class Card {
    name: string;
    number: string;
    type: string;
    bank: Bank;
    expiredDate: string;
  
    constructor(name: string, number: string, type: string, bank: Bank, expiredDate: string) {
      this.name = name;
      this.number = number;
      this.type = type;
      this.bank = bank;
      this.expiredDate = expiredDate;
    }

  }
  
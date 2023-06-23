import { Bank } from "./Bank";

export class Card {
    id?: number
    name: string;
    number: string;
    type: string;
    bank: Bank;
    expiredDate: string;
  
    constructor(id: number, name: string, number: string, type: string, bank: Bank, expiredDate: string) {
      this.id = id;
      this.name = name;
      this.number = number;
      this.type = type;
      this.bank = bank;
      this.expiredDate = expiredDate;
    }

  }
  
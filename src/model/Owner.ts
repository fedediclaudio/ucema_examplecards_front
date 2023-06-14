import { Card } from "./Card";

export class Owner {
    name: string;
    age: number;
    dateOfRegister: string;
    cards: Card[];
  
    constructor(name: string, age: number, dateOfRegister: string) {
      this.name = name;
      this.age = age;
      this.dateOfRegister = dateOfRegister;
      this.cards = []; 
    }

    addCard(card:Card) {
        this.cards.push(card);
    }
  }
  
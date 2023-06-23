import { Injectable } from '@angular/core';
import { Bank } from '../model/Bank';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  banks: Bank[] = []

  constructor(private api:ApiService) {
   }

   getBanks(): Observable<Bank[]> {
    return this.api.getAllBanks();
   }

   getBankByName(name: string): Bank | undefined {
    return this.banks.find(bank => bank.name === name);
  }
}

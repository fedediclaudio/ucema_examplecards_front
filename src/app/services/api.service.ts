import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Bank } from '../model/Bank';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  _url : string = 'http://localhost:8081/api/'

  constructor(private http:HttpClient) { }

  getAllBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this._url + 'bank')
  }

  getBankByName(name: string): Bank | undefined {
    throw new Error('Method not implemented.');
  }

  createBank(newBank: Bank): Observable<Bank> {
    return this.http.post(this._url + 'bank', newBank)
  }

  deleteBank(bank: Bank): Observable<any> {
    return this.http.delete(this._url + 'bank/' + bank.id)
  }

}

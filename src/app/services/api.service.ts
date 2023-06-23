import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Bank } from '../model/Bank';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  _url : string = 'http://localhost:8081/'

  constructor(private http:HttpClient) { }

  getAllBanks(): Observable<Bank[]> {
    this.http.get<Bank[]>(this._url + '/')
  }
}

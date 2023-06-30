import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Bank } from '../model/Bank';
import { ResponseLoginDTO } from '../dto/ResponseLoginDTO';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _url : string = 'http://localhost:8081/api/'

  constructor(private http:HttpClient) { }

  getToken() : string | null {
    return localStorage.getItem('token') || null
  }

  login(username: string, password: string): Observable<ResponseLoginDTO> {
    return this.http.post<ResponseLoginDTO>(this._url + 'auth/login', {username: username, password: password})
  }

  getAllBanks(): Observable<Bank[]> {
    const headers = { 'Authorization': 'Bearer ' + this.getToken()}
    return this.http.get<Bank[]>(this._url + 'bank', {headers})
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

  getUserInfo(): Observable<User> {
    const headers = { 'Authorization': 'Bearer ' + this.getToken()}
    return this.http.get<User>(this._url + 'user', {headers})
  }

}

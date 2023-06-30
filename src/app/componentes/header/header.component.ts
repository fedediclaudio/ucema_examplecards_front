import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLoggedIn:boolean = false;

  constructor(private loginService:LoginService) {}

  ngOnInit(): void {
    this.loginService.isUserLogin().subscribe(
      (res) => {
        this.isLoggedIn = res
      }
    )
  }

  logout() {
    this.loginService.logout()
    this.isLoggedIn = false;
  }



}

import { Component, Input, OnInit } from '@angular/core';
import { Owner } from 'src/app/model/Owner';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() owner!: Owner;
  habilitado!: boolean

  constructor() {
    
  }
  ngOnInit(): void {
    if(this.owner.age > 18) {
      this.habilitado = false;
    } else {
      this.habilitado = true;
    }
  }

}

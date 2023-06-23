import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/model/Bank';
import { Card } from 'src/app/model/Card';
import { Owner } from 'src/app/model/Owner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwnerService } from '../services/owner.service';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  banks!: Bank[]
  owner!: Owner

  newCardForm = new FormGroup({
    name:  new FormControl('', [Validators.required, Validators.maxLength(20)]),
    number: new FormControl('', [Validators.required, Validators.pattern("^\\d{16}$")]),
    type: new FormControl('', [Validators.required]),
    bank: new FormControl(new Bank('',''), [Validators.required]),
    expireDate: new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\\/\\d{2}$')])
  })
  

  constructor(private ownerService:OwnerService, private bankService: BankService) {
    
  }

  ngOnInit(): void {
    this.banks = this.bankService.getBanks()
    this.owner = this.ownerService.getOwner()
  }

  onSubmit() : void {
    let name = this.newCardForm.value.name!
    let number = this.newCardForm.value.number!
    let type = this.newCardForm.value.type!
    let bank = this.newCardForm.value.bank!
    let expireDate = this.newCardForm.value.expireDate!

    let card: Card = new Card(name, number, type, bank, expireDate);

    this.owner.addCard(card);

    this.newCardForm.reset();
  }

  get name() : FormControl { return this.newCardForm.controls['name'] }
  get number() : FormControl { return this.newCardForm.controls['number'] }
  get type() : FormControl { return this.newCardForm.controls['type']; }
  get bank() : FormControl { return this.newCardForm.controls['bank']; }
  get expireDate () : FormControl { return this.newCardForm.controls['expireDate']; }

}

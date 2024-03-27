import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
 
  constructor(private _accountservice:AccountService){}
  public accountForm:FormGroup= new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profie_picture: new FormControl(),
      id: new FormControl()
    }

  )
  Submit(){
    console.log(this.accountForm.value);
    this._accountservice.createaccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("created succesully");
        this.accountForm.reset();
      },
      (err:any)=>{
        alert("created failed");
      }
    )
    
  }

}

import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  public term: string = "";
  public pageNo: number = 0;
  public accounts: any = [];
  public column1: string = '';
  public order1: string = '';


  constructor(private _accountService: AccountService) {

    this._accountService.getAccount().subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert('internal server error');
      }

    )
  }
  filteraccount() {
    this._accountService.getfilteraccount(this.term).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal server error")
      }

    )
  }
  getPagedaccounts() {
    this._accountService.getPaged(this.pageNo).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal server error")
      }

    )
  }
  Sort() {
    this._accountService.getSortedaccounts(this.column1, this.order1).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal server down")
      }

    )
  }
  delete(id:string) {
    this._accountService.delete(id).subscribe(
      (data:any)=>{
        alert("delete successfully");
        location.reload();

      },
      (err:any)=>{
        alert("delete failed");
      }

    )
  }

}

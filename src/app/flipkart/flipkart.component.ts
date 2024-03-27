import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  public flipkart:any =[];

  constructor(private _flipkartservice:FlipkartService){

    _flipkartservice.getFlipkart().subscribe(
      (data:any)=>{
        this.flipkart = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

}

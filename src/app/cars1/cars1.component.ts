import { Component } from '@angular/core';
import { Cars1Service } from '../cars1.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cars1',
  templateUrl: './cars1.component.html',
  styleUrls: ['./cars1.component.css']
})
export class Cars1Component {

  public term: string = "";
  public pageNo: number = 0;
  public cars: any = [];
  public column: string = '';
  public order: string = '';


  public queries:any ={
    filter:"",
    limit:10,
    pageNo:0,
    sortBy:"",
    order:""

  }

  constructor(private _cars1Service: Cars1Service) { }
  getfilteredCars1() {
    this._cars1Service.getfilteredCars1(this.term).subscribe(
      (data: any) => {
        this.cars = data;

      },
      (err: any) => {
        alert("Internal server error");
      }


    )

  }
  getpagedCars() {
    this._cars1Service.getPaged(this.pageNo).subscribe(
      (data: any) => {
        this.cars = data;


      },
      (err: any) => {
        alert("Internal server error");
      }


    )

  }
  getsortedCars() {
    this._cars1Service.getsortedCars(this.column,this.order).subscribe(
      (data: any) => {
        this.cars = data;


      },
      (err: any) => {
        alert("Internal server error");
      }


    )

  }

  loadData(){
    this._cars1Service.loadData(this.queries).subscribe(
      (data:any)=>{
        this.cars = data;
      },
      (err:any)=>{
        alert("internal server error");

      }
    )
  }
  deletecar(id:string) {
    this._cars1Service.deletecars(id).subscribe(
      (data: any) => {
        alert("deleted successfully");
        location.reload();
        },
        (err:any)=>{
        alert("internal server error");
        
        } 

    )

  }
  

}


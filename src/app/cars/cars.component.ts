import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  isHonda:boolean=false;
  isBMW:boolean=false;
  isAudi:boolean=false;

  Honda(){
    this.isHonda=true;
    this.isBMW=false;
    this.isAudi=false;
  }
  BMW(){
    this.isHonda=false;
    this.isBMW=true;
    this.isAudi=false;
  }
  Audi(){
    this.isHonda=false;
    this.isBMW=false;
    this.isAudi=true;
  }


}

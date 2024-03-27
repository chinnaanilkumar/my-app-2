import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {
  public num1:number=0;
  public num2:number=0;
  public result:number=0;
  caluclate(){
    this.result=this.num2/((this.num1/100)*(this.num1/100));
  }
}

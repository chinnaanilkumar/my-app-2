import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public isEdit:boolean=false;
  public i:number=0;
  public products:any=[
   
    {name:'pen',price:10,rating:2,freeDelivery:true}, 
    {name:'phone',price:100,rating:2,freeDelivery:false},
    {name:'shirt',price:400,rating:4,freeDelivery:true},
    {name:'cap',price:200,rating:5,freeDelivery:false},
    {name:'mobile case',price:300,rating:2,freeDelivery:true},
    {name:'remote',price:400,rating:2.5,freeDelivery:false}
  ]
  pricelowtohigh(){
    this.products=this.products.sort((a:any,b:any)=>a.price-b.price)
  }
  pricehightolow(){
  this.products=this.products.sort((a:any,b:any)=>b.price-a.price)
  }
  ratinglowtohigh(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating)
  }
  ratinghightolow(){
  this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating)
  }

  delete(i:number){
    this.products.splice(i,1);

  }
  public product:any={
    name:"",
    price:0,
    rating:0,
    freedelivery:false
  }
  //TO CREATE A NEW PRODUCT
  create(){
    this.products.push({...this.product});
    alert("created successfully");
    this.product.name="";
    this.product.price=0;
    this.product.rating=0;
    this.product.freeDelivery=0;
  }

  update(selectedProduct:any,i:number)
  {
    this.isEdit=true;
    this.i=i;
    this.product={...selectedProduct};

  }
  // delete(i:number){
  //   this.products.splice(i,1)

  // }
  edit()
  {
    this.products.splice(this.i,1,{...this.product});
  }


  }





import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { TableComponent } from './table/table.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarsComponent } from './cars/cars.component';
import { MyntraComponent } from './myntra/myntra.component';
import { Cars1Component } from './cars1/cars1.component';


import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateformsComponent } from './createforms/createforms.component';
import { FormtaskComponent } from './formtask/formtask.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    DasboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    TableComponent,
    VehiclesComponent,
    CarsComponent,
    MyntraComponent,
    Cars1Component,
    AccountComponent,
    FlipkartComponent,
    CreateCarComponent,
    CreateaccountComponent,
    CreateformsComponent,
    FormtaskComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

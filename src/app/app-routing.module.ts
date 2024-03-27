import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
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
import { AuthenticationGuard } from './authentication.guard';
import { CreateformsComponent } from './createforms/createforms.component';
import { FormtaskComponent } from './formtask/formtask.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'dasboard', component: DasboardComponent,canActivate:[AuthenticationGuard] ,children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      {path : 'data-binding', component:DataBindingComponent},
      {path : 'calculator', component:CalculatorComponent},
      {path:'rectangle',component:RectangleComponent},
      {path:'circle',component:CircleComponent},
      {path:'bmi',component:BMIComponent},
      {path:'table',component:TableComponent},
      {path:'vehicles',component:VehiclesComponent},
      {path:'cars',component:CarsComponent},
      {path:'myntra',component:MyntraComponent},
      {path:'cars1',component:Cars1Component},
      {path:'account',component:AccountComponent},
      {path:'flipkart',component:FlipkartComponent},
      {path:'create-car',component:CreateCarComponent},
      {path:'create-account',component:CreateaccountComponent},
      {path:'create-forms',component:CreateformsComponent},
      {path:'formtask',component:FormtaskComponent}
    
    ]
  },
 
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {

  constructor(private _router:Router){}

  logout(){
    // removing token
    localStorage.removeItem("my-app-token");
    this._router.navigateByUrl("/login");
  }

}

import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'main',
  template: `
  <header-component [LoggedIn]=is_loggedin></header-component>
  <register-main></register-main>
  `
})
export class RegisterComponent {
  is_loggedin: boolean = false;
  constructor(private _router: Router){
    let LoggedIn = localStorage.getItem("LoggedIn")
    if(LoggedIn=="false"){
      this._router.navigate(['/login']);
      this.is_loggedin = false
    }else if(LoggedIn=="true"){
    this.is_loggedin = true
    }
    else{
      this._router.navigate(['/login']);
      this.is_loggedin = false
    }
  }
}

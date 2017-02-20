import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './app/components/views/header.html'
})
export class HeaderComponent implements OnInit {
  @Input() LoggedIn;
 constructor(private _router: Router){

 }
 close(){
   localStorage.setItem("LoggedIn", false)
   this._router.navigate(['login']);
 }
 ngOnInit(){
 }
}

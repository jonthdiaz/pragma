import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  template: `<header-component></header-component>
  <login></login>
  `
})
export class LoginComponent implements OnInit {
  constructor(){
    localStorage.setItem('username', 'pragma')
    localStorage.setItem('password', '123456')
    localStorage.setItem('LoggedIn', false)
  }
  ngOnInit(){
    $(document).ready(()=>{
     $(".button-collapse").sideNav();
    })
  }
}

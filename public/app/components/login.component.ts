import { Component } from '@angular/core';

@Component({
  selector: 'main',
  template: `<header-component></header-component>
  <login></login>
  `
})
export class LoginComponent {
  constructor(){
    localStorage.setItem('username', 'pragma')
    localStorage.setItem('password', '123456')
    localStorage.setItem('LoggedIn', false)
  }
}

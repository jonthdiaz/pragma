import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './app/components/views/login.html'
})
export class formLoginComponent implements OnInit{
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private _router: Router){}
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
     username: ['', Validators.required],
     password: ['', Validators.required],
   });
 }
submit(e){
  e.preventDefault();
  let username = localStorage.getItem('username')
  let password = localStorage.getItem('password')
  if(username == this.registerForm.value.username && password == this.registerForm.value.password){
    localStorage.setItem("LoggedIn", true)
    this._router.navigate(['']);
  }else{
    let listusers = JSON.parse(localStorage.getItem("listusers"))
    let user = listusers.filter(item=> item.username==this.registerForm.value.username
                                && item.password==this.registerForm.value.password)
    if (user.length > 0){
      localStorage.setItem("LoggedIn", true)
      this._router.navigate(['']);
    }
  }
  }
}

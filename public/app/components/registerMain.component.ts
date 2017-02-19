import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'register-main',
  templateUrl: './app/components/views/register.html',
})
export class RegisterMainComponent implements OnInit{
registerForm: FormGroup;
listusers: any;
showform: boolean = false;
  constructor(private _router: Router,
              private formBuilder: FormBuilder){
  }
  ngOnInit(){
    this.listusers = JSON.parse(localStorage.getItem("listusers"))
    this.registerForm = this.formBuilder.group({
     name: ['', Validators.required],
     lastname: ['', Validators.required],
     username: ['', Validators.required],
     password: ['', Validators.required],
   });
 }
 submit(e){
   e.preventDefault();

   let newuser =  {
     name: this.registerForm.value.name,
     lastname: this.registerForm.value.lastname,
     username: this.registerForm.value.username,
     password: this.registerForm.value.password,
   }
   if(!this.listusers)
    this.listusers = []

  this.listusers.push(newuser)
  localStorage.setItem('listusers', JSON.stringify(this.listusers))
  this.showform = false;
  this.registerForm.reset()

 }
 activeForm(){
   this.showform = !this.showform
 }
}

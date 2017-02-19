import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { filterCommit } from './filter-pipe'

@Component({
  selector: 'main',
  templateUrl: './app/components/views/commits.html',
  providers: [filterCommit]
})
export class CommitsMainComponent  implements OnInit{
  registerForm: FormGroup;
  is_loggedin: boolean = false;
  showform: boolean = false;
  InputSearch: string;
  numberCommit: string = 0;
  constructor(private _router: Router,
              private formBuilder: FormBuilder){
    let LoggedIn = localStorage.getItem("LoggedIn")
    if(LoggedIn=="false"){
      this._router.navigate(['/login']);
      this.is_loggedin = false
    }else if(LoggedIn=="true"){
    this.is_loggedin = true
    }else{
      this._router.navigate(['/login']);
      this.is_loggedin = false
    }
  }
  ngOnInit(){
    this.listcommits = JSON.parse(localStorage.getItem("listcommits"))
    this.registerForm = this.formBuilder.group({
     title: ['', Validators.required],
     detail: ['', Validators.required]
   });
 }
 activeCommit(value:string){
   if(value == this.numberCommit){
     this.numberCommit = 0
   }else{
      this.numberCommit = value
   }

 }
 submit(e){
   e.preventDefault();

   let newcommit =  {
     title: this.registerForm.value.title,
     detail: this.registerForm.value.detail
   }
   if(!this.listcommits)
    this.listcommits = []

  this.listcommits.push(newcommit)
  localStorage.setItem('listcommits', JSON.stringify(this.listcommits))
  this.showform = false;
  this.registerForm.reset()

 }
 activeForm(){
   this.showform = !this.showform
 }
}

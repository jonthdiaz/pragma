import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { appRoutes} from './app.routers'
import { AppComponent }  from './app.component';
import {HeaderComponent } from './components/header'
import { formLoginComponent } from './components/formLogin.component'
import { LoginComponent } from './components/login.component'
import { HomeComponent } from './components/home.component'
import { RegisterComponent } from './components/register.component'
import { RegisterMainComponent } from './components/registerMain.component'
import { CommitsMainComponent } from './components/commitsMain.component'
import { filterCommit } from './components/filter-pipe'


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, FormsModule],
  declarations: [ AppComponent, HeaderComponent, LoginComponent, formLoginComponent,
                  HomeComponent, RegisterComponent, RegisterMainComponent,
                  CommitsMainComponent, filterCommit],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

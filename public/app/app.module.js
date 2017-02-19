"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_routers_1 = require("./app.routers");
var app_component_1 = require("./app.component");
var header_1 = require("./components/header");
var formLogin_component_1 = require("./components/formLogin.component");
var login_component_1 = require("./components/login.component");
var home_component_1 = require("./components/home.component");
var register_component_1 = require("./components/register.component");
var registerMain_component_1 = require("./components/registerMain.component");
var commitsMain_component_1 = require("./components/commitsMain.component");
var filter_pipe_1 = require("./components/filter-pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_routers_1.appRoutes), forms_1.ReactiveFormsModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, header_1.HeaderComponent, login_component_1.LoginComponent, formLogin_component_1.formLoginComponent,
            home_component_1.HomeComponent, register_component_1.RegisterComponent, registerMain_component_1.RegisterMainComponent,
            commitsMain_component_1.CommitsMainComponent, filter_pipe_1.filterCommit],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;

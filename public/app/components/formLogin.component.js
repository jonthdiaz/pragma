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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var formLoginComponent = (function () {
    function formLoginComponent(formBuilder, _router) {
        this.formBuilder = formBuilder;
        this._router = _router;
    }
    formLoginComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
    };
    formLoginComponent.prototype.submit = function (e) {
        var _this = this;
        e.preventDefault();
        var username = localStorage.getItem('username');
        var password = localStorage.getItem('password');
        if (username == this.registerForm.value.username && password == this.registerForm.value.password) {
            localStorage.setItem("LoggedIn", true);
            this._router.navigate(['']);
        }
        else {
            var listusers = JSON.parse(localStorage.getItem("listusers"));
            var user = listusers.filter(function (item) { return item.username == _this.registerForm.value.username
                && item.password == _this.registerForm.value.password; });
            if (user.length > 0) {
                localStorage.setItem("LoggedIn", true);
                this._router.navigate(['']);
            }
        }
    };
    return formLoginComponent;
}());
formLoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './app/components/views/login.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], formLoginComponent);
exports.formLoginComponent = formLoginComponent;
var _a, _b;

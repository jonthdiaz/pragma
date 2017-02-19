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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var RegisterMainComponent = (function () {
    function RegisterMainComponent(_router, formBuilder) {
        this._router = _router;
        this.formBuilder = formBuilder;
        this.showform = false;
    }
    RegisterMainComponent.prototype.ngOnInit = function () {
        this.listusers = JSON.parse(localStorage.getItem("listusers"));
        this.registerForm = this.formBuilder.group({
            name: ['', forms_1.Validators.required],
            lastname: ['', forms_1.Validators.required],
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
    };
    RegisterMainComponent.prototype.submit = function (e) {
        e.preventDefault();
        var newuser = {
            name: this.registerForm.value.name,
            lastname: this.registerForm.value.lastname,
            username: this.registerForm.value.username,
            password: this.registerForm.value.password,
        };
        if (!this.listusers)
            this.listusers = [];
        this.listusers.push(newuser);
        localStorage.setItem('listusers', JSON.stringify(this.listusers));
        this.showform = false;
        this.registerForm.reset();
    };
    RegisterMainComponent.prototype.activeForm = function () {
        this.showform = !this.showform;
    };
    return RegisterMainComponent;
}());
RegisterMainComponent = __decorate([
    core_1.Component({
        selector: 'register-main',
        templateUrl: './app/components/views/register.html',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], RegisterMainComponent);
exports.RegisterMainComponent = RegisterMainComponent;
var _a, _b;

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
var HomeComponent = (function () {
    function HomeComponent(_router) {
        this._router = _router;
        this.is_loggedin = false;
        var LoggedIn = localStorage.getItem("LoggedIn");
        if (LoggedIn == "false") {
            this._router.navigate(['/login']);
            this.is_loggedin = false;
        }
        else if (LoggedIn == "true") {
            this.is_loggedin = true;
        }
        else {
            this._router.navigate(['/login']);
            this.is_loggedin = false;
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        $(".button-collapse").sideNav();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'main',
        template: "\n  <header-component [LoggedIn]=is_loggedin></header-component>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a;

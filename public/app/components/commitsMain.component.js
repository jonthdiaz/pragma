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
var filter_pipe_1 = require("./filter-pipe");
var CommitsMainComponent = (function () {
    function CommitsMainComponent(_router, formBuilder) {
        this._router = _router;
        this.formBuilder = formBuilder;
        this.is_loggedin = false;
        this.showform = false;
        this.numberCommit = "0";
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
    CommitsMainComponent.prototype.ngOnInit = function () {
        this.listcommits = JSON.parse(localStorage.getItem("listcommits"));
        this.registerForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            detail: ['', forms_1.Validators.required]
        });
        $(document).ready(function () {
            $(".button-collapse").sideNav();
        });
    };
    CommitsMainComponent.prototype.activeCommit = function (value) {
        if (value == this.numberCommit) {
            this.numberCommit = "0";
        }
        else {
            this.numberCommit = value;
        }
    };
    CommitsMainComponent.prototype.submit = function (e) {
        e.preventDefault();
        var newcommit = {
            title: this.registerForm.value.title,
            detail: this.registerForm.value.detail
        };
        if (!this.listcommits)
            this.listcommits = [];
        this.listcommits.push(newcommit);
        localStorage.setItem('listcommits', JSON.stringify(this.listcommits));
        this.showform = false;
        this.registerForm.reset();
    };
    CommitsMainComponent.prototype.activeForm = function () {
        this.showform = !this.showform;
    };
    return CommitsMainComponent;
}());
CommitsMainComponent = __decorate([
    core_1.Component({
        selector: 'main',
        templateUrl: './app/components/views/commits.html',
        providers: [filter_pipe_1.filterCommit]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], CommitsMainComponent);
exports.CommitsMainComponent = CommitsMainComponent;
var _a, _b;

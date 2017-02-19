"use strict";
var login_component_1 = require("./components/login.component");
var home_component_1 = require("./components/home.component");
var register_component_1 = require("./components/register.component");
var commitsMain_component_1 = require("./components/commitsMain.component");
exports.appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'registrar-empleados',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'commits',
        component: commitsMain_component_1.CommitsMainComponent
    },
];

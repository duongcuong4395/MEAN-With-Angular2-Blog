webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_blog_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_blog_delete_blog_delete_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//component: LoginComponent - Login route
//canActivate: [AuthGuard] - user must be logged in to view this route
//canActivate: [NotAuthGuard] - user must Not be logged in to view this route
//path: '**' catch-all route
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__["a" /* NotAuthGuard */]]
    },
    {
        path: 'user/:username',
        component: __WEBPACK_IMPORTED_MODULE_10__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]]
    },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_11__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: 'changepassword/:username/:email', component: __WEBPACK_IMPORTED_MODULE_12__components_change_password_change_password_component__["a" /* ChangePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_notAuth_guard__["a" /* NotAuthGuard */]] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_7__components_blog_blog_component__["a" /* BlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-blog/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_blog_edit_blog_edit_blog_component__["a" /* EditBlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'delete-blog/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        providers: [],
        bootstrap: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<div class=\"clearfix\"></div>\r\n<br>\r\n<br>\r\n<div class=\"container\">\r\n\t<flash-messages></flash-messages>\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n\t<div class=\"clearfix\"></div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_blog_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_blog_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_blog_delete_blog_delete_blog_component__ = __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_blog_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_change_password_change_password_component__["a" /* ChangePasswordComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__services_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_notAuth_guard__["a" /* NotAuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Dropdown Button */\r\n.dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n.dropdown:hover .dropbtn {\r\n    background-color: #3e8e41;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\r\n\t.imageprofile{\r\n\t\theight: 50px;\r\n\t\twidth: 50px;\r\n\t}\r\n\t.title {\r\n\t\tfont-weight: bold;\r\n\t\tcolor: blue;\r\n\t}\r\n</style>\r\n\r\n<h1 class=\"page-header\">blog</h1>\r\n\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n\t<div [ngClass]=\"messageClass\">\r\n\t\t{{ message }}\r\n\t</div>\r\n</div>\r\n\r\n<button name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newBlogForm()\">New post</button>\r\n<button name=\"button\" class=\"btn btn-default\" *ngIf=\"!newPost\" (click)=\"reloadBlogs()\" [disabled]=\"loadingBlogs\" ><span class=\"glyphicon glyphicon-refresh\r\n\"></span>&nbsp;&nbsp;Reload</button>\r\n<br>\r\n<br>\r\n\r\n<div>\r\n\t<form [formGroup]=\"form\" name=\"blogForm\" (submit)=\"onBlogSubmit()\" *ngIf=\"newPost\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"title\">Title</label>\r\n\t\t\t<div [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.dirty && form.controls.title.errors}\">\r\n\t\t\t\t<input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"Title\" autocomplete=\"off\" formControlName=\"title\">\r\n\t\t\t\t<ul class=\"help-block\">\r\n\t\t\t\t\t<li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">\r\n\t\t\t\t\t\tThis field was required\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.maxlength) || (form.controls.title.dirty && form.controls.title.errors?.minlength)\">\r\n\t\t\t\t\t\tMax length: 50, min length: 5\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">\r\n\t\t\t\t\t\tMust be a letter or number\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"body\">Title</label>\r\n\t\t\t<div [ngClass]=\"{'has-success': form.controls.body.valid, 'has-error': form.controls.body.dirty && form.controls.body.errors}\">\r\n\t\t\t\t<textarea name=\"body\" rows=\"10\" cols=\"20\" placeholder=\"body\" class=\"form-control\" formControlName=\"body\"></textarea>\r\n\t\t\t\t<!--\r\n\t\t\t\t<input type=\"text\" name=\"body\" class=\"form-control\" placeholder=\"body\" autocomplete=\"off\" formControlName=\"body\">\r\n\t\t\t\t-->\r\n\t\t\t\t<ul class=\"help-block\">\r\n\t\t\t\t\t<li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">\r\n\t\t\t\t\t\tThis field was required\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.maxlength) || (form.controls.body.dirty && form.controls.body.errors?.minlength)\">\r\n\t\t\t\t\t\tMax length: 500, min length: 5\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go back</button>\r\n\t\t<button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\r\n\t</form>\r\n</div>\r\n\r\n<div *ngIf=\"!newPost\">\r\n\t<div class=\"panel panel-primary\" *ngFor=\"let blog of blogPosts\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t<h3 class=\"panel-title title\">  \r\n\t\t\t \t\t<img src=\"{{blog.avatarPost}}\" class=\"imageprofile img-thumbnail img-responsive img-circle\" alt=\"image profile\"> \r\n\t\t\t \t\t{{ blog.createdBy }}: {{ blog.title }}\r\n\t\t\t \t</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t<span class=\"glyphicon glyphicon-chevron-down dropdown\" style=\"cursor: pointer;\" *ngIf=\"username === blog.createdBy\">\r\n\t\t\t\t\t<div class=\"dropdown-content\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['/edit-blog/', blog._id]\">\r\n\t\t\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/delete-blog/', blog._id]\">\r\n\t\t\t\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"clearfix\"></div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t{{ blog.body }}\r\n\t\t</div>\r\n\t\t<div class=\"panel-footer\">\r\n\t\t\t<p><strong>Date:</strong> {{ blog.createdAt | date: 'dd/MM/yyyy'}}</p>\r\n\t\t\t<div >\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<p [class.isDisabled]=\"blog.likedBy.indexOf(username) > -1\">\r\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-thumbs-up\" style=\"cursor: pointer;\" *ngIf=\"username !== blog.createdBy\" (click)=\"likeBlog(blog._id)\">&nbsp;</span>\r\n\t\t\t\t\t\t<span style=\"cursor: pointer;font-weight: bold;\" class=\"dropdown\">{{ blog.likes }} like\r\n\t\t\t\t\t\t\t<div class=\"dropdown-content\">\r\n\t\t\t\t\t\t\t\t<a style=\"color: blue;\" [routerLink]=\"['/user/', liker]\" *ngFor=\"let liker of blog.likedBy\">{{ liker }}</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</span> \r\n\t\t\t\t\t</p> <p [class.isDisabled]=\"blog.dislikedBy.indexOf(username) > -1\">\r\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-thumbs-down\" style=\"cursor: pointer;\"*ngIf=\"username !== blog.createdBy\" (click)=\"dislikeBlog(blog._id)\">&nbsp;</span>\r\n\t\t\t\t\t\t<span style=\"cursor: pointer;font-weight: bold;\" class=\"dropdown\">{{ blog.dislikes }} dislike\r\n\t\t\t\t\t\t\t<div class=\"dropdown-content\">\r\n\t\t\t\t\t\t\t\t<a style=\"color: blue;\" [routerLink]=\"['/user/', disliker]\" *ngFor=\"let disliker of blog.dislikedBy\">{{ disliker }}</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</span> \r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <a [routerLink]=\"['/edit-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button></a>\r\n\t\t\t<a [routerLink]=\"['/delete-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></a> -->\r\n\r\n\t\t\t<div>\r\n\t\t\t\t<button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"draftComment(blog._id)\" [disabled]=\"newComment.indexOf(blog._id) > -1\">\r\n\t\t\t\t  <span class=\"glyphicon glyphicon-edit\">&nbsp;</span> Comment\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"list-group\">\r\n\t\t\t<div class=\"list-group-item\">\r\n\t\t\t\t\r\n\t\t\t\t<div *ngIf=\"newComment.indexOf(blog._id) > -1\"> \r\n\t\t\t\t\t<form [formGroup]=\"commentForm\">\r\n\t\t\t\t\t\t<textarea name=\"comment\" row=\"8\" cols=\"30\" class=\"form-control\" formControlName=\"comment\"></textarea>\r\n\t\t\t\t\t\t<div [ngClass]=\"{'has-success': !commentForm.controls.comment.errors && commentForm.controls.comment.dirty, 'has-error': commentForm.controls.comment.dirty && commentForm.controls.comment.errors}\">\r\n\t\t\t\t\t\t\t<ul class=\"help-block\">\r\n\t\t\t\t\t\t\t\t<li *ngIf=\"commentForm.controls.comment.errors?.required && commentForm.controls.comment.dirty\">\r\n\t\t\t\t\t\t\t\t\tfield required\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li *ngIf=\"(commentForm.controls.comment.errors?.minlength && commentForm.controls.comment.dirty) || (commentForm.controls.comment.errors?.maxlength && commentForm.controls.comment.dirty)\">\r\n\t\t\t\t\t\t\t\t\tComment must be least 1 character but no more than 200\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!commentForm.valid || processing\" (click)=\"postComment(blog._id)\" class=\"btn btn-sm btn-info\">\r\n\t\t\t\t\t\t\tSend comment\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" [disabled]=\"processing\" (click)=\"cancelSubmission(blog._id)\" name=\"button\" class=\"btn btn-sm btn-danger\">\r\n\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<li *ngIf=\"enabledComments.indexOf(blog._id) === -1 && blog.comments.length > 0\" class=\"list-group-item\">\r\n\t\t\t\t\t<span (click)=\"expand(blog._id)\">\r\n\t\t\t\t\t\tShow comments\r\n\t\t\t\t\t\t<div class=\"glyphicon glyphicon-comment\"></div>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngIf=\"enabledComments.indexOf(blog._id) > -1\">\r\n\t\t\t\t\t<span (click)=\"collapse(blog._id)\">\r\n\t\t\t\t\t\tHide comments\r\n\t\t\t\t\t\t<div class=\"glyphicon glyphicon-comment\"></div>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</li>\r\n\t\t\t\t<div *ngIf=\"enabledComments.indexOf(blog._id) > -1\">\r\n\t\t\t\t\t<div *ngFor=\"let comment of blog.comments\" class=\"list-group-item\">\r\n\t\t\t\t\t\t<strong>{{ comment.commentator }} : </strong> {{ comment.comment }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogComponent = (function () {
    function BlogComponent(formBuilder, authService, blogService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
        this.newComment = [];
        this.enabledComments = [];
        this.createNewBlogForm();
        this.createCommentForm();
    }
    //function create register user form
    BlogComponent.prototype.createNewBlogForm = function () {
        this.form = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    this.alphaNumericValidation
                ])],
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(500)
                ])]
        });
    };
    BlogComponent.prototype.disableNewBlogForm = function () {
        //this.form.get('title').disable();
        //this.form.get('body').disable();
        this.form.controls['title'].disable();
        this.form.controls['body'].disable();
    };
    BlogComponent.prototype.enableNewBlogForm = function () {
        this.form.controls['title'].enable();
        this.form.controls['body'].enable();
    };
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableNewBlogForm();
        var blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username,
            avatarPost: this.avatarPost
        };
        this.blogService.newBlog(blog).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableNewBlogForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                _this.getAllBlogs();
                setTimeout(function () {
                    _this.newPost = false;
                    _this.processing = false;
                    _this.message = false;
                    _this.form.reset();
                    _this.enableNewBlogForm();
                }, 2000);
            }
        });
    };
    BlogComponent.prototype.alphaNumericValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'alphaNumericValidation': true };
        }
    };
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true;
    };
    BlogComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.loadingBlogs = true;
        //Get all blogs
        this.getAllBlogs();
        setTimeout(function () {
            _this.loadingBlogs = false;
        }, 2000);
    };
    BlogComponent.prototype.goBack = function () {
        window.location.reload();
    };
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        this.blogService.getAllBlogs().subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.blogPosts = data.blogs;
            }
        });
    };
    BlogComponent.prototype.likeBlog = function (id) {
        var _this = this;
        this.blogService.likeBlog(id).subscribe(function (data) {
            _this.getAllBlogs();
        });
    };
    BlogComponent.prototype.dislikeBlog = function (id) {
        var _this = this;
        this.blogService.dislikeBlog(id).subscribe(function (data) {
            _this.getAllBlogs();
        });
    };
    BlogComponent.prototype.createCommentForm = function () {
        this.commentForm = this.formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(200)
                ])]
        });
    };
    BlogComponent.prototype.draftComment = function (id) {
        this.commentForm.reset();
        this.newComment = [];
        this.newComment.push(id);
    };
    BlogComponent.prototype.postComment = function (id) {
        var _this = this;
        this.disableCommentForm();
        this.processing = true;
        var comment = this.commentForm.get('comment').value;
        this.blogService.postComment(id, comment).subscribe(function (data) {
            //this.messageClass = 'alert alert-danger';
            //this.message = data.message;	
            _this.getAllBlogs();
            var index = _this.newComment.indexOf(id);
            _this.newComment.splice(index, 1);
            _this.enableCommentForm();
            _this.commentForm.reset();
            _this.processing = false;
            if (_this.enabledComments.indexOf(id) < 0) {
                _this.expand(id);
            }
        });
    };
    BlogComponent.prototype.cancelSubmission = function (id) {
        var index = this.newComment.indexOf(id);
        this.newComment.splice(index, 1);
        this.commentForm.reset();
        this.enableCommentForm();
        this.processing = false;
    };
    BlogComponent.prototype.expand = function (id) {
        this.enabledComments.push(id);
    };
    BlogComponent.prototype.collapse = function (id) {
        var index = this.enabledComments.indexOf(id);
        this.enabledComments.splice(index, 1);
    };
    BlogComponent.prototype.enableCommentForm = function () {
        this.commentForm.get('comment').enable();
    };
    BlogComponent.prototype.disableCommentForm = function () {
        this.commentForm.get('comment').disable();
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
            _this.avatarPost = profile.user.image;
        });
        this.getAllBlogs();
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/components/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog/blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === "function" && _c || Object])
], BlogComponent);

var _a, _b, _c;
//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Delete blog</h1>\r\n<br>\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n\t<div [ngClass]=\"messageClass\">\r\n\t\t{{ message }}\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"col-md-6\" *ngIf=\"foundBlog\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<button type=\"button\" name=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t<h4 class=\"modal-title\">Confirm</h4>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<p>Are you sure you would like to delete this blog?</p>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteBlog()\">Yes</button>\r\n\t\t\t<a routerLink=\"/blog\">\r\n\t\t\t\t<button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\">No</button>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel panel-primary\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">{{ blog.title }}</h3>\r\n\t\t</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t{{ blog.body}}\t\r\n\t\t</div>\r\n\t\t<div class=\"panel-footer\">\r\n\t\t\t<strong>Posted by: </strong> {{ blog.createdBy }}\r\n\t\t\t<strong>Date: </strong> {{ blog.createdAt | date: 'dd/MM/yyyy'}}\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/blog/delete-blog/delete-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteBlogComponent = (function () {
    function DeleteBlogComponent(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foundBlog = false;
        this.processing = false;
    }
    DeleteBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.processing = true;
        this.blogService.deleteBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 2000);
            }
        });
    };
    DeleteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.blog = {
                    title: data.blog.title,
                    body: data.blog.body,
                    createdBy: data.blog.createdBy,
                    createdAt: data.blog.createdAt
                };
                _this.foundBlog = true;
            }
        });
    };
    return DeleteBlogComponent;
}());
DeleteBlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-blog',
        template: __webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog/delete-blog/delete-blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DeleteBlogComponent);

var _a, _b, _c;
//# sourceMappingURL=delete-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit blog</h1>\r\n\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n\t<div [ngClass]=\"messageClass\">\r\n\t\t{{ message }}\r\n\t</div>\r\n</div>\r\n<form (submit)=\"updateBlogSubmit()\" *ngIf=\"!loading\">\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"title\">title</label>\r\n\t\t<input type=\"text\" [disabled]=\"processing\" name=\"title\" class=\"form-control\" [(ngModel)]=\"blog.title\" autocomplete=\"off\">\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"body\">body</label>\r\n\t\t<textarea name=\"body\" [disabled]=\"processing\" rows=\"8\" cols=\"20\" [(ngModel)]=\"blog.body\" class=\"form-control\"></textarea>\r\n\t\t<a [routerLink]=\"['/delete-blog/', blog._id]\"><button type=\"button\" [disabled]=\"processing\" class=\"btn btn-danger\" name=\"button\">Delete</button></a>\r\n\t\t<button type=\"button\" [disabled]=\"processing\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go back</button>\r\n\t\t<button type=\"submit\" [disabled]=\"processing\" name=\"save\" class=\"btn btn-info\">Save changes</button>\r\n\t</div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/blog/edit-blog/edit-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__("../../../../../src/app/services/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditBlogComponent = (function () {
    function EditBlogComponent(formBuilder, blogService, location, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    EditBlogComponent.prototype.updateBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.blogService.editBlog(this.blog).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                console.log(data.message);
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                console.log(data.message);
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 2000);
            }
        });
    };
    EditBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.loading = true;
                _this.messageClass = 'alert alert-danger';
                _this.message = 'Blog not found';
            }
            else {
                _this.blog = data.blog;
                _this.loading = false;
            }
        });
    };
    return EditBlogComponent;
}());
EditBlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-blog',
        template: __webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog/edit-blog/edit-blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], EditBlogComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Change password</h1>\n<hr>\n<div class=\"row show-hide-message\">\n\t<div [ngClass]=\"messageClass\">\n\t\t{{ message }}\n\t</div>\n</div>\n<form [formGroup]=\"form\" (submit)=\"onChangePasswordSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label for=\"password\">Password</label>\n\t\t<div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty),'has-success': !form.controls.password.errors}\">\n\t\t\t<input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"password\" formControlName=\"password\">\n\t\t\t<ul class=\"help-block\">\n\t\t\t\t<li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\"> This field is required</li>\n\t\t\t\t<li *ngIf=\"form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength && form.controls.password.dirty\"> Minimum characters: 8 and maximum characters: 30</li>\n\t\t\t\t<li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must have at least upercase, lowercase, special character, and number</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\t\n\t<div class=\"form-group\">\n\t\t<label for=\"confirm\">Confirm password</label>\n\t\t<div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty),'has-success': !form.controls.confirm.errors}\">\n\t\t\t<input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Confirm password\" formControlName=\"confirm\">\t\n\t\t\t<ul class=\"help-block\">\n\t\t\t\t<li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\"> This field is required</li>\n\t\t\t\t<li *ngIf=\"form.controls.confirm.errors?.minlength || form.controls.confirm.errors?.maxlength && form.controls.confirm.dirty\"> Minimum characters: 8 and maximum characters: 30</li>\n\t\t\t\t<li *ngIf=\"form.controls.confirm.errors?.validatePassword && form.controls.confirm.dirty\"> Confirm password must have at least upercase, lowercase, special character, and number</li>\n\t\t\t\t<li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\t\n\t<input [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary\" value=\"submit\">\n</form>\n<!--\n<p>Username: {{ form.controls.username.value }}</p>\n<p>email: {{ form.controls.email.value }}</p>\n<p>Password: {{ form.controls.password.value }}</p>\n<p>Confirm password: {{ form.controls.confirm.value }} </p>\n-->"

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(formBuilder, authService, activatedRoute, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.processing = false;
        //create Angular 2 form when component loads
        this.createForm();
    }
    //function create register user form
    ChangePasswordComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validatePassword
                ])],
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validatePassword
                ])]
        }, {
            //validate copare password and comfirm password
            validator: this.matchingPasswords('password', 'confirm')
        });
    };
    ChangePasswordComponent.prototype.disableForm = function () {
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    ChangePasswordComponent.prototype.enableForm = function () {
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    ChangePasswordComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    ChangePasswordComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirm].value) {
                return null;
            }
            else {
                return { 'matchingPasswords': true };
            }
        };
    };
    //function to submit form register user
    ChangePasswordComponent.prototype.onChangePasswordSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            password: this.form.get('password').value
        };
        this.currentUrl = this.activatedRoute.snapshot.params;
        //data: json (exp: res.json({ success: true, message: 'User saved!'}) from authenticationjs (server))
        this.authService.changePasswordUser(this.currentUrl.username, this.currentUrl.email, user).subscribe(function (data) {
            //console.log(data); //show data on console(F12) window web
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 2000);
            }
        });
        console.log(this.form);
    };
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__("../../../../../src/app/components/change-password/change-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/change-password/change-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ChangePasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Dashboard</h1>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Forgot password</h1>\n<hr>\n<div class=\"row show-hide-message\">\n\t<div [ngClass]=\"messageClass\">\n\t\t{{ message }}\n\t</div>\n</div>\n<form [formGroup]=\"form\" (submit)=\"onForgotPasswordSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label for=\"username\">Username</label>\n\t\t<div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty),'has-success': !form.controls.username.errors && usernameValid}\">\n\t\t\t<input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"username\" formControlName=\"username\" >\t\n\t\t\t<ul class=\"help-block\">\n\t\t\t\t<li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\"> This field is required</li>\n\t\t\t\t<li *ngIf=\"form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength && form.controls.username.dirty\"> \n\t\t\t\t\tMinimum characters: 5 and maximum characters: 15\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\"> \n\t\t\t\t\tUsername must not have any special character\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"usernameMessage\">\n\t\t\t\t\t{{ usernameMessage }}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\t\n\t<div class=\"form-group\">\n\t\t<label for=\"email\">Email</label>\n\t\t<div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty),'has-success': !form.controls.email.errors && emailValid}\">\n\t\t\t<input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"email\" formControlName=\"email\" >\n\t\t\t<ul class=\"help-block\">\n\t\t\t\t<li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\"> \n\t\t\t\t\tThis field is required\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"form.controls.email.errors?.minlength || form.controls.email.errors?.maxlength && form.controls.email.dirty\"> \n\t\t\t\t\tMinimum characters: 5 and maximum characters: 30\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\"> \n\t\t\t\t\tThis must be valid email\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"emailMessage\">\n\t\t\t\t\t{{ emailMessage }}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\t\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"submit\">\n</form>\n<!--\n<p>Username: {{ form.controls.username.value }}</p>\n<p>email: {{ form.controls.email.value }}</p>\n<p>Password: {{ form.controls.password.value }}</p>\n<p>Confirm password: {{ form.controls.confirm.value }} </p>\n-->"

/***/ }),

/***/ "../../../../../src/app/components/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    //function create register user form
    ForgotPasswordComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    //validate require
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    //max and min length character
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    //custom validation
                    this.validateEmail
                ])],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(15),
                    this.validateUsername
                ])]
        });
    };
    ForgotPasswordComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
    };
    ForgotPasswordComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
    };
    ForgotPasswordComponent.prototype.validateEmail = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateEmail': true };
        }
    };
    ForgotPasswordComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    ForgotPasswordComponent.prototype.onForgotPasswordSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value
        };
        this.authService.forgotpasswordUser(user).subscribe(function (data) {
            //console.log(data); //show data on console(F12) window web
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = 'We have sent an email to ' + user.email + '.';
            }
        });
        console.log(this.form);
    };
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ForgotPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container theme-showcase\" role=\"main\">\r\n\r\n      <!-- Main jumbotron for a primary marketing message or call to action -->\r\n      <div class=\"jumbotron\">\r\n        <h1>Hello, world!</h1>\r\n        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\r\n        <p><a href=\"#\" class=\"btn btn-primary btn-lg\" role=\"button\">Learn more &raquo;</a></p>\r\n      </div>\r\n\r\n\r\n\r\n    </div> <!-- /container -->"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Login</h1>\r\n<hr>\r\n<div class=\"row show-hide-message\">\r\n\t<div [ngClass]=\"messageClass\">\r\n\t\t{{ message }}\r\n\t</div>\r\n</div>\r\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"username\">Username</label>\r\n\t\t<div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty,'has-success': form.controls.username.valid &&  form.controls.username.dirty}\">\r\n\t\t\t<input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" formControlName=\"username\">\r\n\t\t\t<ul class=\"help-block\">\r\n\t\t\t\t<li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\"> \r\n\t\t\t\t\tThis field is required\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"password\">Password</label>\r\n\t\t<div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty,'has-success': form.controls.password.valid && form.controls.password.dirty}\">\r\n\t\t\t<input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" formControlName=\"password\">\r\n\t\t\t<ul class=\"help-block\">\r\n\t\t\t\t<li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\"> \r\n\t\t\t\t\tThis field is required\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\t\r\n\t<input [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary\" value=\"submit\">\r\n</form>\r\n<!--\r\n<p>Username: {{ form.controls.username.value }}</p>\r\n<p>email: {{ form.controls.email.value }}</p>\r\n<p>Password: {{ form.controls.password.value }}</p>\r\n<p>Confirm password: {{ form.controls.confirm.value }} </p>\r\n-->"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.processing = false;
        //create Angular 2 form when component loads
        this.createForm();
    }
    //function create register user form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(15)
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30)
                ])]
        });
    };
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    };
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        //get info user input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        //send login data to api
        this.authService.login(user).subscribe(function (data) {
            //check if response was success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                //show error message
                _this.message = data.message;
                //enable submit button
                _this.processing = false;
                //enable form for edit
                _this.enableForm();
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
                //store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                //load dashboard page after 2 seccond
                setTimeout(function () {
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]);
                    }
                    else {
                        _this.router.navigate(['/dashboard']);
                    }
                }, 2000);
                //this.processing = true;
                //this.disableForm();
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        //check auth redirect
        if (this.authGuard.redirectUrl) {
            this.messageClass = 'alert alert-danger';
            this.message = 'You must be to login page';
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Fixed navbar -->\r\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" routerLink=\"/\">Bootstrap theme</a>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\">\r\n          <ul class=\"nav navbar-nav navbar-left\">\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{extract: true}\" class=\"active\"><a routerLink=\"/\">Home</a>\r\n            </li>\r\n          </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{extract: true}\">\r\n              <a routerLink=\"/dashboard\">Dashboard</a>\r\n            </li>\r\n            <li>\r\n              <a *ngIf=\"authService.loggedIn()\" routerLink=\"/profile\">Profile</a>\r\n            </li>\r\n            <li>\r\n              <a *ngIf=\"authService.loggedIn()\" routerLink=\"/blog\">Blog</a>\r\n            </li>\r\n            <li>\r\n              <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\">Login</a>\r\n            </li>\r\n            <li>\r\n              <a *ngIf=\"authService.loggedIn()\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{extract: true}\">\r\n              <a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\">Register</a>\r\n            </li>\r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      </div>\r\n    </nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
    }
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        //angular2-flash-message is intended to be used for displaying flash-messages on UI. The flash message can be 
        //customized based on the message type (alert, info, warning) which is based on Bootstrap 3 Alerts
        this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' });
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\r\n\t.imageprofile{\r\n\t\theight: 50px;\r\n\t\twidth: 50px;\r\n\t}\r\n</style>\r\n\r\n<h1 class=\"page-header\"> My profile</h1>\r\n<ul class=\"list-group\">\r\n\t<li class=\"list-group-item\">Username: {{ username }}</li>\r\n\t<li class=\"list-group-item\">Email: {{ email }}</li>\r\n\t<li class=\"list-group-item\">\r\n\t\tavatar:  <img src='{{image}}' class=\"imageprofile img-thumbnail img-responsive img-circle\" alt=\"noimage\">\r\n\t</li>\r\n</ul>\r\n<div>\r\n\t\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
            _this.email = profile.user.email;
            _this.image = 'assets/images/' + profile.user.image;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Public profile</h1>\r\n\r\n<div class=\"row show-hide-message\" *ngIf=\"message\">\r\n\t<div [ngClass]=\"messageClass\">\r\n\t\t{{ message }}\r\n\t</div>\r\n</div>\r\n\r\n<ul *ngIf=\"foundProfile\" class=\"list_group\">\r\n\t<li class=\"list_group-item\"><strong>Username:</strong> {{ username }}</li>\r\n\t<li class=\"list_group-item\"><strong>Email:</strong> {{ email }}</li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicProfileComponent = (function () {
    function PublicProfileComponent(authService, activatedRoute) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.foundProfile = false;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.authService.getPublicProfile(this.currentUrl.username).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.foundProfile = false;
            }
            else {
                _this.foundProfile = true;
                _this.username = data.user.username;
                _this.email = data.user.email;
            }
        });
    };
    return PublicProfileComponent;
}());
PublicProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-public-profile',
        template: __webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/public-profile/public-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PublicProfileComponent);

var _a, _b;
//# sourceMappingURL=public-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Register page</h1>\r\n<hr>\r\n<div class=\"row show-hide-message\">\r\n\t<div [ngClass]=\"messageClass\">\r\n\t\t{{ message }}\r\n\t</div>\r\n</div>\r\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"username\">Username</label>\r\n\t\t<div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty),'has-success': !form.controls.username.errors && usernameValid}\">\r\n\t\t\t<input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"username\" formControlName=\"username\" (blur)=\"checkUsername()\">\t\r\n\t\t\t<ul class=\"help-block\">\r\n\t\t\t\t<li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\"> This field is required</li>\r\n\t\t\t\t<li *ngIf=\"form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength && form.controls.username.dirty\"> \r\n\t\t\t\t\tMinimum characters: 5 and maximum characters: 15\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\"> \r\n\t\t\t\t\tUsername must not have any special character\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngIf=\"usernameMessage\">\r\n\t\t\t\t\t{{ usernameMessage }}\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\t\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"email\">Email</label>\r\n\t\t<div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty),'has-success': !form.controls.email.errors && emailValid}\">\r\n\t\t\t<input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"email\" formControlName=\"email\" (blur)=\"checkEmail()\">\r\n\t\t\t<ul class=\"help-block\">\r\n\t\t\t\t<li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\"> \r\n\t\t\t\t\tThis field is required\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngIf=\"form.controls.email.errors?.minlength || form.controls.email.errors?.maxlength && form.controls.email.dirty\"> \r\n\t\t\t\t\tMinimum characters: 5 and maximum characters: 30\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\"> \r\n\t\t\t\t\tThis must be valid email\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngIf=\"emailMessage\">\r\n\t\t\t\t\t{{ emailMessage }}\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\t\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"password\">Password</label>\r\n\t\t<div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty),'has-success': !form.controls.email.errors}\">\r\n\t\t\t<input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"password\" formControlName=\"password\">\r\n\t\t\t<ul class=\"help-block\">\r\n\t\t\t\t<li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\"> This field is required</li>\r\n\t\t\t\t<li *ngIf=\"form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength && form.controls.password.dirty\"> Minimum characters: 8 and maximum characters: 30</li>\r\n\t\t\t\t<li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must have at least upercase, lowercase, special character, and number</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\t\r\n\t<div class=\"form-group\">\r\n\t\t<label for=\"confirm\">Confirm password</label>\r\n\t\t<div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.email.dirty),'has-success': !form.controls.confirm.errors}\">\r\n\t\t\t<input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Confirm password\" formControlName=\"confirm\">\t\r\n\t\t\t<ul class=\"help-block\">\r\n\t\t\t\t<li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\"> This field is required</li>\r\n\t\t\t\t<li *ngIf=\"form.controls.confirm.errors?.minlength || form.controls.confirm.errors?.maxlength && form.controls.confirm.dirty\"> Minimum characters: 8 and maximum characters: 30</li>\r\n\t\t\t\t<li *ngIf=\"form.controls.confirm.errors?.validatePassword && form.controls.confirm.dirty\"> Confirm password must have at least upercase, lowercase, special character, and number</li>\r\n\t\t\t\t<li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<input id=\"cin\" name=\"cin\" class=\"form-control\" type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload a file...\" multiple />\r\n\t</div>\r\n\t<input [disabled]=\"!form.valid || processing || !emailValid || !usernameValid || !imagechooen\" type=\"submit\" class=\"btn btn-primary\" value=\"submit\">\r\n</form>\r\n<!--\r\n<p>Username: {{ form.controls.username.value }}</p>\r\n<p>email: {{ form.controls.email.value }}</p>\r\n<p>Password: {{ form.controls.password.value }}</p>\r\n<p>Confirm password: {{ form.controls.confirm.value }} </p>\r\n-->"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, authService, router, http) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.processing = false;
        this.filesToUpload = [];
        this.numfilechoose = 0;
        this.imagechooen = false;
        //create Angular 2 form when component loads
        this.createForm();
    }
    //function create register user form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    //validate require
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    //max and min length character
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    //custom validation
                    this.validateEmail
                ])],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(15),
                    this.validateUsername
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validatePassword
                ])],
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validatePassword
                ])]
        }, {
            //validate copare password and comfirm password
            validator: this.matchingPasswords('password', 'confirm')
        });
    };
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
    };
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
    };
    RegisterComponent.prototype.validateEmail = function (controls) {
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateEmail': true };
        }
    };
    RegisterComponent.prototype.validateUsername = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    RegisterComponent.prototype.validatePassword = function (controls) {
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validatePassword': true };
        }
    };
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirm].value) {
                return null;
            }
            else {
                return { 'matchingPasswords': true };
            }
        };
    };
    //function to submit form register user
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        var formData = new FormData();
        var files = this.filesToUpload;
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value,
            image: this.imageName
        };
        this.authService.uploadFile(formData).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message + data.image;
                _this.imagechooen = false;
            }
            else {
                _this.authService.registerUser(user).subscribe(function (data) {
                    //console.log(data); //show data on console(F12) window web
                    if (!data.success) {
                        _this.messageClass = 'alert alert-danger';
                        _this.message = data.message;
                        _this.processing = false;
                        _this.enableForm();
                    }
                    else {
                        _this.messageClass = 'alert alert-success';
                        _this.message = data.message;
                        setTimeout(function () {
                            _this.router.navigate(['/login']);
                        }, 2000);
                    }
                });
            }
        });
        /*
        this.http.post('/upload',formData).map(res => res.json()).subscribe(data => {
            if(!data.success) {
                this.messageClass = 'alert alert-danger';
                this.message = data.message;
                this.imagechooen = false;
            } else {
                this.messageClass = 'alert alert-success';
                this.imageName = data.namefile;
                this.message = 'Server have gotten flie:' + this.imageName;
                this.imagechooen = true;
            }
        });


        //data: json (exp: res.json({ success: true, message: 'User saved!'}) from authenticationjs (server))
        this.authService.registerUser(user).subscribe(data => {
            if(!data.success){
                this.messageClass = 'alert alert-danger';
                this.message = data.message;
                this.processing = false;
                this.enableForm();
            } else {
                this.messageClass = 'alert alert-success';
                this.message = data.message;
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 2000);
            }
        });
        */
    };
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        this.authService.checkUsername(this.form.get('username').value).subscribe(function (data) {
            if (!data.success) {
                _this.usernameValid = false;
                _this.usernameMessage = data.message;
            }
            else {
                _this.usernameValid = true;
                _this.usernameMessage = data.message;
            }
        });
    };
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            if (!data.success) {
                _this.emailValid = false;
                _this.emailMessage = data.message;
            }
            else {
                _this.emailValid = true;
                _this.emailMessage = data.message;
            }
        });
    };
    RegisterComponent.prototype.checkSelectFile = function () {
        if (this.numfilechoose > 0) {
            this.imagevalid = true;
        }
        else {
            this.imagevalid = false;
        }
    };
    //upload file
    RegisterComponent.prototype.upload = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        this.http.post('http://localhost:3000/upload', formData).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.imagechooen = false;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.imageName = data.namefile;
                _this.message = 'Server have gotten flie:' + _this.imageName;
                _this.imagechooen = true;
            }
        });
    };
    RegisterComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        var filechoose = this.filesToUpload;
        this.numfilechoose = filechoose.length;
        var file = fileInput.target.files[0];
        if (this.numfilechoose > 0) {
            this.imagevalid = true;
            this.imagechooen = true;
            this.imageName = file.name;
        }
        else {
            this.imagechooen = false;
            this.imagevalid = false;
        }
        //this.product.photo = fileInput.target.files[0]['name'];
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
//auth.guard.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (router, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NotAuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    return NotAuthGuard;
}());
NotAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NotAuthGuard);

var _a, _b;
//# sourceMappingURL=notAuth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        //domain = "http://localhost:3000";
        this.domain = "";
    }
    //connect api register User
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/authentication/register', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.forgotpasswordUser = function (user) {
        return this.http.post(this.domain + '/authentication/forgotpassword', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.changePasswordUser = function (username, email, user) {
        return this.http.put(this.domain + '/authentication/changepassword/' + username + '/' + email, user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.uploadFile = function (formData) {
        return this.http.post(this.domain + '/upload', formData).map(function (files) { return files.json(); });
    };
    AuthService.prototype.checkUsername = function (username) {
        if (!username) {
            return this.http.get(this.domain + '/authentication/').map(function (res) { return res.json(); });
        }
        else {
            return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.checkEmail = function (email) {
        if (!email) {
            return this.http.get(this.domain + '/authentication/').map(function (res) { return res.json(); });
        }
        else {
            return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + '/authentication/login', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.getPublicProfile = function (username) {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/authentication/publicProfile/' + username, this.options).map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
        //	domain = "http://localhost:3000";
        this.domain = this.authService.domain;
    }
    BlogService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    BlogService.prototype.newBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.post(this.domain + '/blogs/newBlog', blog, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getAllBlogs = function () {
        //create headers
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/blogs/allBlogs', this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getSingleBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + '/blogs/singleBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.editBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.put(this.domain + '/blogs/updateBlog/', blog, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.deleteBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.delete(this.domain + '/blogs/deleteBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.likeBlog = function (id) {
        var blogData = { id: id };
        return this.http.put(this.domain + '/blogs/likeBlog/', blogData, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.dislikeBlog = function (id) {
        var blogData = { id: id };
        return this.http.put(this.domain + '/blogs/dislikeBlog/', blogData, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.postComment = function (id, comment) {
        this.createAuthenticationHeaders();
        var blogData = {
            id: id,
            comment: comment
        };
        return this.http.post(this.domain + '/blogs/comment/', blogData, this.options).map(function (res) { return res.json(); });
    };
    return BlogService;
}());
BlogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object])
], BlogService);

var _a, _b;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
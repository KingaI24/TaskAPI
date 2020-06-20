(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <app-nav-menu></app-nav-menu>\n\n    <div class=\"container\">\n\n        <router-outlet></router-outlet>\n\n    </div>\n\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Tema 4 - Angular</h1>\n<p>Welcome to your new single-page application, built with:</p>\n<ul>\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\n</ul>\n<p>To help you get started, we've also set up:</p>\n<ul>\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\n</ul>\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header>\n        <mat-card-title>Log in</mat-card-title>\n    </mat-card-header>\n\n    <form class=\"example-form\">\n        <mat-card-content>\n            <mat-form-field class=\"example-full-width\">\n                <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"loginModel.email\">\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\">\n                <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" [(ngModel)]=\"loginModel.password\">\n            </mat-form-field>\n        </mat-card-content>\n        <button mat-stroked-button color=\"accent\" class=\"btn-block\" (click)=\"loginUser()\">Log in</button>\n    </form>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\r\n        <div class=\"container\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">NetCoreAngularApp2</a>\r\n            <button class=\"navbar-toggler\"\r\n                    type=\"button\"\r\n                    data-toggle=\"collapse\"\r\n                    data-target=\".navbar-collapse\"\r\n                    aria-label=\"Toggle navigation\"\r\n                    [attr.aria-expanded]=\"isExpanded\"\r\n                    (click)=\"toggle()\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n                 [ngClass]=\"{ show: isExpanded }\">\r\n                <ul class=\"navbar-nav flex-grow\">\r\n\r\n                    <li class=\"nav-item\"\r\n                        [routerLinkActive]=\"['link-active']\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\"\r\n                        [routerLinkActive]=\"['link-active']\"\r\n                        [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/task-list']\">Task list</a>\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\"\r\n                        [routerLinkActive]=\"['link-active']\"\r\n                        [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/login']\">Login</a>\r\n                    </li>\r\n\r\n                    <li class=\"nav-item\"\r\n                        [routerLinkActive]=\"['link-active']\"\r\n                        [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                        <a class=\"nav-link text-dark\" [routerLink]=\"['/registration']\">Registration</a>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header>\n        <mat-card-title>Register</mat-card-title>\n    </mat-card-header>\n\n    <form class=\"example-form\">\n\n        <mat-card-content>\n            <mat-form-field class=\"example-full-width\">\n                <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"registerModel.email\">\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\">\n                <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" [(ngModel)]=\"registerModel.password\">\n            </mat-form-field>\n\n        </mat-card-content>\n\n        <button mat-stroked-button color=\"accent\" class=\"btn-block\" (click)=\"registerUser()\">Register</button>\n\n    </form>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-detail/task-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-detail/task-detail.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"!task\"><em>Loading error..</em></p>\r\n<p *ngIf=\"(isClicked | async) === false \"><em>CLICKED</em></p>\r\n\r\n<div *ngIf=\"task\">\r\n    <table class='table table-striped' aria-labelledby=\"tableLabel\">\r\n        <tr>\r\n            <th>Id</th>\r\n            <td>{{ task.id }}</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Title</th>\r\n            <td>{{ task.title }}</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Description</th>\r\n            <td>{{ task.description }}</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Date added</th>\r\n            <td>{{ task.dateAdded | date:'yyyy-MM-dd HH:mm:ss' }}</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Date deadline</th>\r\n            <td>{{ task.dateDeadline | date:'yyyy-MM-dd HH:mm:ss' }}</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Importance</th>\r\n            <td>{{ task.importance }}</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Status</th>\r\n            <td>{{ task.status }}</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Date closure</th>\r\n            <td>{{ task.dateClosure | date:'yyyy-MM-dd HH:mm:ss' }}</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <h2>Comments </h2>\r\n    <table mat-table [dataSource]=\"task.comments\" class=\"mat-elevation-z8\">\r\n\r\n        <!-- Text Column -->\r\n        <\r\n        <ng-container matColumnDef=\"text\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"width:30%\"> Text </th>\r\n            <td mat-cell *matCellDef=\"let comment\"> {{comment.text}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Important Column -->\r\n        <ng-container matColumnDef=\"important\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"width:30%\"> Important </th>\r\n            <td mat-cell *matCellDef=\"let comment\"> {{ comment.important }} </td>\r\n        </ng-container>\r\n\r\n        <!-- Action Column -->\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef style=\"width:30%\"> Action </th>\r\n            <td mat-cell *matCellDef=\"let comment\">\r\n\r\n                <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n                    <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"deleteComment(comment.id);$event.stopPropagation()\">delete</mat-icon>\r\n                </button>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n    <button (click)=\"goBack()\">Back</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-list/task-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-list/task-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">List of tasks</h1>\r\n\r\n<a routerLink=\"/task-new\" routerLinkActive=\"active\"> Add Task </a>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!tasks\"><em>No existent tasks</em></p>\r\n\r\n<div *ngIf=\"tasks\">\r\n    <div>\r\n        <span>Filter by deadline </span>\r\n        <label>\r\n            from\r\n            <input #fromDate type=\"date\">\r\n            <input #fromTime type=\"time\">\r\n        </label>\r\n        <label>\r\n             to\r\n            <input #toDate type=\"date\">\r\n            <input #toTime type=\"time\">\r\n        </label>\r\n        <button (click)=\"filterDate(fromDate.value,fromTime.value,toDate.value,toTime.value)\" type=\"button\"> <i class=\"fa fa-filter\" aria-hidden=\"true\"> Filter </i></button>\r\n    </div>\r\n    <table class='table table-striped' aria-labelledby=\"tableLabel\">\r\n        <thead>\r\n            <tr>\r\n                <th>id</th>\r\n                <th>Title</th>\r\n                <th>Description</th>\r\n                <th>Date added</th>\r\n                <th>Date deadline</th>\r\n                <th>Importance</th>\r\n                <th>Status</th>\r\n                <th>Date closure</th>\r\n                <th>No of comments</th>\r\n                <div *ngIf=\"userLogged\">\r\n                    <th>Operations</th>\r\n                </div>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let task of tasks\"\r\n                [ngClass]=\"{ 'selected': task === selectedTask }\"\r\n                (click)=\"onSelect(task)\">\r\n                <td>{{ task.id }}</td>\r\n                <td>{{ task.title }}</td>\r\n                <td>{{ task.description }}</td>\r\n                <td>{{ task.dateAdded | date:'yyyy-MM-dd HH:mm:ss' }}</td>\r\n                <td>{{ task.dateDeadline | date:'yyyy-MM-dd HH:mm:ss' }}</td>\r\n                <td>{{ task.importance }}</td>\r\n                <td>{{ task.status }}</td>\r\n                <td>{{ task.dateClosure | date:'yyyy-MM-dd HH:mm:ss' }}</td>\r\n                <td>{{ task.numberOfComments }}</td>\r\n                <div *ngIf=\"userLogged\">\r\n                    <td>\r\n                        <button (click)=\"gotoDetail(task)\"><i class=\"fas fa-info\">Details</i></button>\r\n                        <button (click)=\"deleteTask(task);$event.stopPropagation()\"><i class=\"fa fa-trash\" aria-hidden=\"true\">Delete</i></button>\r\n                        <button (click)=\"updateTask(task);$event.stopPropagation()\"><i class=\"fas fa-pen\" aria-hidden=\"true\">Update</i></button>\r\n                    </td>\r\n                </div>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-new/task-new.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-new/task-new.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class='table table-striped' aria-labelledby=\"tableLabel\">\r\n\r\n    <tr>\r\n        <th>Title</th>\r\n        <td>\r\n            <input #title>\r\n            <span *ngIf=\"errorMessages.Title\" class=\"text-danger\"><small>{{errorMessages.Title}}</small></span>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <th>Description</th>\r\n        <td>\r\n            <input #description>\r\n            <span *ngIf=\"errorMessages.Description\" class=\"text-danger\"><small>{{errorMessages.Description}}</small></span>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <th>Date deadline</th>\r\n        <td>\r\n            <input #dateDeadline type=\"date\"><input #timeDeadline type=\"time\">\r\n            <span *ngIf=\"errorMessages.DateDeadline\" class=\"text-danger\"><small>{{errorMessages.DateDeadline}}</small></span>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <th>Importance</th>\r\n        <td>\r\n            <select [(ngModel)]=\"importance\">\r\n                <option value=\"low\">Low</option>\r\n                <option value=\"medium\">Medium</option>\r\n                <option value=\"high\">High</option>\r\n            </select>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <th>Status</th>\r\n        <td>\r\n            <select [(ngModel)]=\"status\">\r\n                <option value=\"open\">Open</option>\r\n                <option value=\"in_progress\">In progress</option>\r\n                <option value=\"closed\">Closed</option>\r\n            </select>\r\n        </td>\r\n    </tr>\r\n</table>\r\n<button (click)=\"save(title.value,description.value, dateDeadline.value,timeDeadline.value,importance,status)\">SAVE</button>\r\n<button (click)=\"goBack()\">BACK</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-update/addComment.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-update/addComment.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Add comment</h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field appearance=\"fill\">\r\n        <mat-label>Text</mat-label>\r\n        <input matInput placeholder=\"Add text\" #text>\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field>\r\n        <mat-label>Important</mat-label>\r\n        <mat-select #important>\r\n            <mat-option value=\"true\">Yes</mat-option>\r\n            <mat-option value=\"false\">No</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n    <button mat-button (click)=\"saveComment(text.value, important.value)\">Save</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-update/task-update.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-update/task-update.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"!task\"><em>Loading error..</em></p>\r\n\r\n<form class=\"form-horizontal\" role=\"form\" [formGroup]=\"updateForm\" *ngIf=\"this.updateForm\" (ngSubmit)=\"onFormSubmit()\">\r\n    <fieldset>\r\n        <legend>\r\n            Update:\r\n            <strong>Entry no. {{ task.id }} </strong>\r\n        </legend>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">Title</label>\r\n                <input type=\"text\"\r\n                       required name=\"title\" placeholder=\"Enter title\" class=\"form-control\" formControlName=\"title\">\r\n                <span *ngIf=\"errorMessages.title\" class=\"text-danger\"><small>{{errorMessages.title}}</small></span>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">Description</label>\r\n                <input type=\"text\"\r\n                       required name=\"description\" placeholder=\"Enter description\" class=\"form-control\" formControlName=\"description\">\r\n                <span *ngIf=\"errorMessages.description\" class=\"text-danger\"><small>{{errorMessages.description}}</small></span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">Date Deadline</label>\r\n                <input type=\"datetime-local\"\r\n                       name=\"dateDeadline\" class=\"form-control\" formControlName=\"dateDeadline\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"input-group mt-3\">\r\n            <div class=\"input-group-prepend\">\r\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">Importance</label>\r\n            </div>\r\n            <select class=\"custom-select\" name=\"importance\" formControlName=\"importance\">\r\n                <option *ngFor=\"let importance of importanceList\" [ngValue]=\"importance.value\">{{importance.name}}</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"input-group mt-3\">\r\n            <div class=\"input-group-prepend\">\r\n                <label class=\"input-group-text\" for=\"inputGroupSelect01\">Status</label>\r\n            </div>\r\n            <select class=\"form-control\" name=\"status\" formControlName=\"status\">\r\n                <option *ngFor=\"let status of statusList\" [ngValue]=\"status.value\">\r\n                    {{status.name}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-sm-offset-2 col-sm-10\">\r\n                <div class=\"pull-right\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" style=\"margin: 4px;\">UPDATE</button>\r\n                    <button class=\"btn btn-secondary\" (click)=\"goBack()\" style=\"margin: 4px;\">BACK</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </fieldset>\r\n</form>\r\n\r\n<button mat-raised-button (click)=\"openDialog()\">Add comment</button>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");
/* harmony import */ var _task_new_task_new_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./task-new/task-new.component */ "./src/app/task-new/task-new.component.ts");
/* harmony import */ var _task_update_task_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./task-update/task-update.component */ "./src/app/task-update/task-update.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _service_comment_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./service/comment.service */ "./src/app/service/comment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_11__["TaskListComponent"],
            _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_13__["TaskDetailComponent"],
            _task_new_task_new_component__WEBPACK_IMPORTED_MODULE_14__["TaskNewComponent"],
            _task_update_task_update_component__WEBPACK_IMPORTED_MODULE_15__["TaskUpdateComponent"],
            _task_update_task_update_component__WEBPACK_IMPORTED_MODULE_15__["AddcommentComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__["BrowserAnimationsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], pathMatch: 'full' },
                { path: 'task-list', component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_11__["TaskListComponent"] },
                { path: 'task-detail/:id', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_13__["TaskDetailComponent"] },
                { path: 'task-new', component: _task_new_task_new_component__WEBPACK_IMPORTED_MODULE_14__["TaskNewComponent"] },
                {
                    path: 'task-update/:id', component: _task_update_task_update_component__WEBPACK_IMPORTED_MODULE_15__["TaskUpdateComponent"],
                    children: [
                        { path: '', component: _task_update_task_update_component__WEBPACK_IMPORTED_MODULE_15__["AddcommentComponent"] }
                    ]
                },
                //{ path: 'task-update/:id', component: AddcommentComponent },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] }
            ]),
        ],
        exports: [_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"]],
        providers: [_service_task_service__WEBPACK_IMPORTED_MODULE_12__["TaskService"], _service_comment_service__WEBPACK_IMPORTED_MODULE_31__["CommentService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/core/guards/authentication.guard.ts");
/* harmony import */ var _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http-request-interceptor */ "./src/app/core/services/http-request-interceptor.ts");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/security.service */ "./src/app/core/services/security.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/token.service */ "./src/app/core/services/token.service.ts");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [],
        providers: [
            _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"],
            _services_security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _services_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_3__["HttpRequestInterceptor"],
                multi: true
            }
        ],
        exports: []
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/guards/authentication.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/guards/authentication.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AuthenticationGuard = class AuthenticationGuard {
    constructor() { }
    canActivate() {
        return true;
    }
};
AuthenticationGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthenticationGuard);



/***/ }),

/***/ "./src/app/core/services/application.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/application.service.ts ***!
  \******************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/core/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ApplicationService = class ApplicationService {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.baseUrl = document.getElementsByTagName('base')[0].href;
    }
    isLoggedIn() {
        return this.tokenService.getToken() != null;
    }
    userEmail() {
        var token = this.tokenService.getToken();
        if (token != null)
            return token.email;
        return "";
    }
};
ApplicationService.ctorParameters = () => [
    { type: _token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }
];
ApplicationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
], ApplicationService);



/***/ }),

/***/ "./src/app/core/services/http-request-interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/http-request-interceptor.ts ***!
  \***********************************************************/
/*! exports provided: HttpRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/core/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let HttpRequestInterceptor = class HttpRequestInterceptor {
    constructor(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    intercept(request, next) {
        var token = this.tokenService.getToken();
        request = token ? request.clone({
            headers: request.headers.set("Authorization", "Bearer " + token.value)
        }) : request;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error, caught) => {
            if (error.error instanceof ErrorEvent) {
                if (error.status === 401) {
                    this.router.navigate(['/login']);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
                }
                if (error.status === 403) {
                    this.router.navigate(['/forbidden']);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
                }
            }
            console.log(error.error.errors);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error.errors);
        }));
    }
};
HttpRequestInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
HttpRequestInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
], HttpRequestInterceptor);



/***/ }),

/***/ "./src/app/core/services/security.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/security.service.ts ***!
  \***************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/core/services/token.service.ts");
/* harmony import */ var _application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let SecurityService = class SecurityService {
    constructor(httpClient, tokenService, applicationService) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
        this.applicationService = applicationService;
    }
    register(registerModel) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((obs) => {
            this.httpClient.post(`${this.applicationService.baseUrl}Account/Register`, registerModel).subscribe(token => {
                this.tokenService.saveToken(token);
                obs.next(token);
                obs.complete();
            });
        });
    }
    login(loginModel) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((obs) => {
            this.httpClient.post(`${this.applicationService.baseUrl}Account/Login`, loginModel).subscribe(token => {
                this.tokenService.saveToken(token);
                obs.next(token);
                obs.complete();
            });
        });
    }
    logout() {
        this.tokenService.deleteToken();
    }
};
SecurityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }
];
SecurityService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
        _application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]])
], SecurityService);



/***/ }),

/***/ "./src/app/core/services/token.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/token.service.ts ***!
  \************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TokenService = class TokenService {
    constructor() { }
    saveToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    }
    getToken() {
        return this.validate(JSON.parse(localStorage.getItem("token")));
    }
    validate(token) {
        if (token) {
            if (new Date(token.expiry) > new Date())
                return token;
        }
        return null;
    }
    deleteToken() {
        localStorage.removeItem("token");
    }
};
TokenService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TokenService);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/security.service */ "./src/app/core/services/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let LoginComponent = class LoginComponent {
    constructor(securityService, router) {
        this.securityService = securityService;
        this.router = router;
        this.loginModel = {};
    }
    ngOnInit() {
    }
    loginUser() {
        this.securityService.login(this.loginModel).subscribe(token => {
            this.router.navigate(['/fetch-data']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_core_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\nhtml {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.box-shadow {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/security.service */ "./src/app/core/services/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let RegistrationComponent = class RegistrationComponent {
    constructor(securityService, router) {
        this.securityService = securityService;
        this.router = router;
        this.registerModel = {};
    }
    ngOnInit() {
    }
    registerUser() {
        this.securityService.register(this.registerModel).subscribe(token => {
            this.router.navigate(['/task-list']);
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _core_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
RegistrationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-registration',
        template: __importDefault(__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")).default]
    }),
    __metadata("design:paramtypes", [_core_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], RegistrationComponent);



/***/ }),

/***/ "./src/app/service/comment.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/comment.service.ts ***!
  \********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let CommentService = class CommentService {
    constructor(httpClient, baseUrl) {
        this.httpClient = httpClient;
        this.baseUrl = baseUrl;
    }
    getComments() {
        return this.httpClient
            .get(this.baseUrl + 'api/comments');
    }
    getComment(id) {
        return this.httpClient
            .get(`${this.baseUrl}api/comments/${id}`);
    }
    saveComment(comment) {
        //console.log(task);
        return this.httpClient
            .post(`${this.baseUrl}api/comments`, comment);
    }
    updateComment(comment) {
        return this.httpClient
            .put(`${this.baseUrl}api/comments/${comment.id}`, comment);
    }
    deleteComment(id) {
        return this.httpClient
            .delete(`${this.baseUrl}api/comments/${id}`);
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
CommentService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], CommentService);



/***/ }),

/***/ "./src/app/service/task.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/task.service.ts ***!
  \*****************************************/
/*! exports provided: TaskService, ImportanceList, StatusList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportanceList", function() { return ImportanceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusList", function() { return StatusList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs-compat */ "./node_modules/rxjs-compat/Rx.js");
/* harmony import */ var rxjs_compat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let TaskService = class TaskService {
    constructor(httpClient, baseUrl) {
        this.httpClient = httpClient;
        this.baseUrl = baseUrl;
    }
    getTasks() {
        return this.httpClient
            .get(this.baseUrl + 'api/taskitems');
    }
    getTask(id) {
        return this.httpClient
            .get(`${this.baseUrl}api/taskitems/${id}`);
    }
    save(task) {
        return this.httpClient
            .post(`${this.baseUrl}api/taskitems`, task);
    }
    update(task) {
        return this.httpClient
            .put(`${this.baseUrl}api/taskitems/${task.id}`, task);
    }
    delete(id) {
        return this.httpClient
            .delete(`${this.baseUrl}api/taskitems/${id}`);
    }
    filter(fromDate, toDate) {
        if (!fromDate)
            fromDate = "";
        if (!toDate)
            toDate = "";
        return this.httpClient.get(`${this.baseUrl}api/taskitems?from=${fromDate}&to=${toDate}`);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
TaskService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], TaskService);

var ImportanceList;
(function (ImportanceList) {
    ImportanceList[ImportanceList["low"] = 0] = "low";
    ImportanceList[ImportanceList["medium"] = 1] = "medium";
    ImportanceList[ImportanceList["high"] = 2] = "high";
})(ImportanceList || (ImportanceList = {}));
var StatusList;
(function (StatusList) {
    StatusList[StatusList["open"] = 0] = "open";
    StatusList[StatusList["in_progress"] = 1] = "in_progress";
    StatusList[StatusList["closed"] = 2] = "closed";
})(StatusList || (StatusList = {}));


/***/ }),

/***/ "./src/app/task-detail/task-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _service_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/comment.service */ "./src/app/service/comment.service.ts");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/compiler */ "./node_modules/@angular/compiler/fesm2015/compiler.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let TaskDetailComponent = 
/** task-detail component*/
class TaskDetailComponent {
    constructor(service, commentService, route, location) {
        this.service = service;
        this.commentService = commentService;
        this.route = route;
        this.location = location;
        this.displayedColumns = ['text', 'important', 'action'];
    }
    ngOnInit() {
        this.route.params
            .switchMap((params) => this.service.getTask(+params['id']))
            .subscribe(task => this.task = task);
    }
    goBack() {
        this.location.back();
    }
    deleteComment(id) {
        this.commentService.deleteComment(id).subscribe(x => {
            this.goBack();
        });
    }
};
TaskDetailComponent.ctorParameters = () => [
    { type: _service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] },
    { type: _service_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], TaskDetailComponent.prototype, "task", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _angular_compiler__WEBPACK_IMPORTED_MODULE_5__["Comment"])
], TaskDetailComponent.prototype, "comment", void 0);
TaskDetailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-task-detail',
        template: __importDefault(__webpack_require__(/*! raw-loader!./task-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-detail/task-detail.component.html")).default
    })
    /** task-detail component*/
    ,
    __metadata("design:paramtypes", [_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"],
        _service_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], TaskDetailComponent);



/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-list/task-list.component.ts ***!
  \**************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let TaskListComponent = class TaskListComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.userLogged = false;
        this.isClicked = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    ngOnInit() {
        this.getTasks();
        this.userLogged = !!localStorage.getItem('token');
        console.log(this.userLogged);
    }
    getTasks() {
        this.service.getTasks()
            .subscribe(tasks => this.tasks = tasks, error => this.errorMessage = error);
    }
    onSelect(task) {
        this.selectedTask = task;
    }
    gotoDetail(task) {
        console.log(this.isClicked);
        this.router.navigate(['task-detail', task.id]);
    }
    updateTask(task) {
        //this.updateSelected();
        //console.log(this.isClicked);
        //this.router.navigate(['task-detail', task.id]);
        this.router.navigate(['task-update', task.id]);
    }
    updateSelected() {
        this.isClicked.next(true);
    }
    deleteTask(task) {
        this.service.delete(task.id)
            .subscribe(_ => {
            this.getTasks(),
                console.log("Task deleted"),
                error => this.errorMessage = error;
        });
    }
    filterDate(fromDate, fromTime, toDate, toTime) {
        var fromDateTime, toDateTime;
        if (fromDate) {
            fromDateTime = fromDate;
            if (fromTime) {
                fromDateTime = `${fromDateTime}T${fromTime}`;
            }
        }
        if (toDate) {
            toDateTime = toDate;
            if (toTime) {
                toDateTime = `${toDateTime}T${toTime}`;
            }
        }
        this.service.filter(fromDateTime, toDateTime)
            .subscribe(tasks => this.tasks = tasks);
    }
};
TaskListComponent.ctorParameters = () => [
    { type: _service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TaskListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-task-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./task-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-list/task-list.component.html")).default
    }),
    __metadata("design:paramtypes", [_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TaskListComponent);



/***/ }),

/***/ "./src/app/task-new/task-new.component.ts":
/*!************************************************!*\
  !*** ./src/app/task-new/task-new.component.ts ***!
  \************************************************/
/*! exports provided: TaskNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskNewComponent", function() { return TaskNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let TaskNewComponent = class TaskNewComponent {
    constructor(service, location) {
        this.service = service;
        this.location = location;
        this.errorMessages = [];
    }
    ngOnInit() {
    }
    save(title, description, datedDeadline, timeDeadline, importance, status) {
        const id = 0;
        const dateAdded = null;
        const dateClosure = null;
        var comments = new Array();
        var dateDeadline;
        if (datedDeadline) {
            dateDeadline = datedDeadline;
            if (timeDeadline) {
                dateDeadline = `${datedDeadline}T${timeDeadline}`;
            }
        }
        this.service.save({
            id, title, description, dateAdded, dateDeadline, importance, status, dateClosure, comments
        }).subscribe((err) => {
            console.log("Err in saving client: ", err);
            console.log(err);
            //this.errorMessages.push(err);
        }, () => console.log("completed"));
    }
    goBack() {
        this.location.back();
    }
};
TaskNewComponent.ctorParameters = () => [
    { type: _service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], TaskNewComponent.prototype, "task", void 0);
TaskNewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-task-new',
        template: __importDefault(__webpack_require__(/*! raw-loader!./task-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-new/task-new.component.html")).default
    }),
    __metadata("design:paramtypes", [_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], TaskNewComponent);



/***/ }),

/***/ "./src/app/task-update/task-update.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-update/task-update.component.ts ***!
  \******************************************************/
/*! exports provided: TaskUpdateComponent, AddcommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskUpdateComponent", function() { return TaskUpdateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcommentComponent", function() { return AddcommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _service_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/comment.service */ "./src/app/service/comment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let TaskUpdateComponent = 
/** task-update component*/
class TaskUpdateComponent {
    constructor(service, route, location, dialog) {
        this.service = service;
        this.route = route;
        this.location = location;
        this.dialog = dialog;
        this.importanceList = [
            { value: 0, name: "low" },
            { value: 1, name: "medium" },
            { value: 2, name: "high" }
        ];
        this.statusList = [
            { value: 0, name: "open" },
            { value: 1, name: "in progress" },
            { value: 2, name: "closed" }
        ];
        this.errorMessages = [];
    }
    ngOnInit() {
        this.route.params
            .switchMap((params) => this.service.getTask(+params['id']))
            .subscribe(task => {
            this.task = task;
            this.initializeFormControls();
        });
    }
    initializeFormControls() {
        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.task.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.task.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.task.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            dateAdded: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.task.dateAdded),
            dateDeadline: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.task.dateDeadline),
            importance: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]((this.task.importance)),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.task.status),
            dateClosure: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.task.dateClosure),
        });
    }
    goBack() {
        this.location.back();
    }
    onFormSubmit() {
        console.log(this.updateForm.value);
        this.service.update(this.updateForm.value)
            .subscribe(err => this.errorMessages = err, () => console.log('Task update complete'));
    }
    openDialog() {
        const dialogRef = this.dialog.open(AddcommentComponent, {
            width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe();
    }
};
TaskUpdateComponent.ctorParameters = () => [
    { type: _service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], TaskUpdateComponent.prototype, "task", void 0);
TaskUpdateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-task-update',
        template: __importDefault(__webpack_require__(/*! raw-loader!./task-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-update/task-update.component.html")).default,
    })
    /** task-update component*/
    ,
    __metadata("design:paramtypes", [_service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], TaskUpdateComponent);

let AddcommentComponent = class AddcommentComponent {
    constructor(service, dialogRef, data) {
        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.task = this.task;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    saveComment(text, important) {
        const id = 0;
        console.log(this.task);
        const taskid = this.task.id;
        this.service.saveComment({
            id, text, important, taskid
        }).subscribe((err) => {
            console.log("Err in saving comment: ", err);
        }, () => console.log("completed"));
    }
};
AddcommentComponent.ctorParameters = () => [
    { type: _service_comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AddcommentComponent.prototype, "task", void 0);
AddcommentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'addComment',
        template: __importDefault(__webpack_require__(/*! raw-loader!./addComment.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-update/addComment.html")).default,
    }),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_service_comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
], AddcommentComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\.NET\TaskAPI\TaskAPI\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
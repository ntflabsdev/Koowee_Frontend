(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": function() { return /* binding */ SettingsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": function() { return /* binding */ SettingsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7162);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": function() { return /* binding */ SettingsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 14718);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 69519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let SettingsPage = class SettingsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem('user_auth_token');
        localStorage.removeItem('user_auth_id');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_firstname');
        localStorage.removeItem('user_lastname');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_phone');
        this.router.navigate(['/']);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingsPage);



/***/ }),

/***/ 69519:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --border-color:#fff;\n}\nion-header ion-back-button {\n  position: absolute;\n  left: 15px;\n  top: 5px;\n  font-size: 13px;\n}\n[tabhead] {\n  margin-top: 90px;\n  max-width: 280px;\n  padding: 0 10px;\n}\n[tabhead] ion-segment-button {\n  font-size: 14px;\n  text-transform: none;\n  color: #999;\n  letter-spacing: 0;\n  min-width: 1px;\n}\n[tabhead] ion-segment-button.segment-button-checked {\n  color: #000;\n  --indicator-color:transparent;\n}\nion-content {\n  --background: #fcfcfc;\n}\n[fileName] {\n  padding: 20px;\n  margin: 0px 0 0;\n}\n[fileName] ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n[fileName] ul li {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  border-bottom: 1px solid #eee;\n  padding: 20px 0;\n}\n[fileName] ul li h4 {\n  margin: 0;\n  font-size: 15px;\n  max-width: 60%;\n}\n[fileName] ul li h4 p {\n  margin: 6px 0 0;\n  font-size: 11px;\n  color: #999;\n  font-weight: 400;\n}\n[fileName] ul li [iconRelate] {\n  max-width: 30px;\n  min-width: 30px;\n  min-height: 30px;\n  max-height: 30px;\n  margin-right: 10px;\n  border-radius: 100px;\n  background: #777;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[fileName] ul li [iconRelate] ion-icon {\n  color: #fff;\n  font-size: 15px;\n}\n[fileName] ul li [iconRelate][red] {\n  background: #e44646;\n}\n[fileName] ul li [iconRelate][yellow] {\n  background: #d5cd00;\n}\n[fileName] ul li [iconRelate][orange] {\n  background: orange;\n}\n[fileName] ul li ion-toggle {\n  margin-left: auto;\n}\n[fileName] ul li[flexCenter] {\n  align-items: center;\n}\n[fileName] label {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #888;\n  margin: 0 15px 7px;\n  display: block;\n}\n[fileName] a {\n  background: #fff;\n  padding: 16px 15px;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #666;\n  margin-bottom: 1px;\n}\n[fileName] a ion-toggle {\n  margin-left: auto;\n}\n[fileName] a span {\n  margin-left: auto;\n  font-size: 11px;\n  color: #666;\n}\n[fileName] a ion-icon {\n  margin-left: auto;\n  color: var(--primary-color);\n  font-size: 22px;\n}\n[fileName] a:nth-child(odd) {\n  background: #fcfcfc;\n}\nion-button[btn-global] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG1CQUFBO0FBQUY7QUFFQztFQUNDLGtCQUFBO0VBQ0csVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBQUw7QUFHQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUQ7QUFDQztFQUNDLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0MsV0FBQTtFQUNBLDZCQUFBO0FBRUg7QUFFQTtFQUNDLHFCQUFBO0FBQ0Q7QUFDQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0FBRUQ7QUFEQztFQUNDLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFHRjtBQUZFO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBSUg7QUFIRztFQUNDLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtKO0FBSkk7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQU1MO0FBSEc7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUtKO0FBSkk7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQU1MO0FBSkk7RUFDQyxtQkFBQTtBQU1MO0FBSkk7RUFDQyxtQkFBQTtBQU1MO0FBSkk7RUFDQyxrQkFBQTtBQU1MO0FBSEc7RUFDQyxpQkFBQTtBQUtKO0FBSEc7RUFDQyxtQkFBQTtBQUtKO0FBREM7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR0Y7QUFEQztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdGO0FBRkU7RUFDQyxpQkFBQTtBQUlIO0FBRkU7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSUg7QUFGRTtFQUNDLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBSUg7QUFGRTtFQUNDLG1CQUFBO0FBSUg7QUFDQTtFQUNJLFdBQUE7QUFFSiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuXHRpb24tdG9vbGJhcntcblx0XHQtLWJvcmRlci1jb2xvcjojZmZmO1xuXHR9XG5cdGlvbi1iYWNrLWJ1dHRvbntcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgICBsZWZ0OiAxNXB4O1xuXHQgICAgdG9wOiA1cHg7XG5cdCAgICBmb250LXNpemU6IDEzcHg7XG5cdH1cbn1cblt0YWJoZWFkXXtcblx0bWFyZ2luLXRvcDo5MHB4O1xuXHRtYXgtd2lkdGg6IDI4MHB4O1xuXHRwYWRkaW5nOjAgMTBweDtcblx0aW9uLXNlZ21lbnQtYnV0dG9ue1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblx0XHRjb2xvcjogIzk5OTtcblx0XHRsZXR0ZXItc3BhY2luZzogMDtcblx0XHRtaW4td2lkdGg6IDFweDtcblx0XHQmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdC0taW5kaWNhdG9yLWNvbG9yOnRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuaW9uLWNvbnRlbnR7XG5cdC0tYmFja2dyb3VuZDogI2ZjZmNmYztcbn1cbltmaWxlTmFtZV17XG5cdHBhZGRpbmc6MjBweDtcblx0bWFyZ2luOjBweCAwIDA7XG5cdHVse1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0cGFkZGluZzowO1xuXHRcdG1hcmdpbjowO1xuXHRcdGxpe1xuXHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRwYWRkaW5nOjA7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcblx0XHRcdHBhZGRpbmc6MjBweCAwO1xuXHRcdFx0aDR7XG5cdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdG1heC13aWR0aDogNjAlO1xuXHRcdFx0XHRwe1xuXHRcdFx0XHRcdG1hcmdpbjo2cHggMCAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRcdFx0XHRjb2xvcjogIzk5OTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9IFxuXHRcdFx0W2ljb25SZWxhdGVde1xuXHRcdFx0XHRtYXgtd2lkdGg6MzBweDtcblx0XHRcdFx0bWluLXdpZHRoOjMwcHg7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6MzBweDtcblx0XHRcdFx0bWF4LWhlaWdodDozMHB4O1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjNzc3O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0aW9uLWljb257XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbcmVkXXtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNlNDQ2NDY7XG5cdFx0XHRcdH1cblx0XHRcdFx0Jlt5ZWxsb3dde1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNkNWNkMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0JltvcmFuZ2Vde1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IG9yYW5nZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aW9uLXRvZ2dsZXtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6YXV0bztcblx0XHRcdH1cblx0XHRcdCZbZmxleENlbnRlcl17XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGxhYmVse1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGNvbG9yOiAjODg4O1xuXHRcdG1hcmdpbjowIDE1cHggN3B4O1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cdGF7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRwYWRkaW5nOjE2cHggMTVweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGNvbG9yOiAjNjY2O1xuXHRcdG1hcmdpbi1ib3R0b206IDFweDtcblx0XHRpb24tdG9nZ2xle1xuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0fVxuXHRcdHNwYW57XG5cdFx0XHRtYXJnaW4tbGVmdDphdXRvO1xuXHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0Y29sb3I6ICM2NjY7XHRcblx0XHR9XG5cdFx0aW9uLWljb257XG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHR9XG5cdFx0JjpudGgtY2hpbGQob2RkKXtcblx0XHRcdGJhY2tncm91bmQ6ICNmY2ZjZmM7XG5cdFx0fVxuXHR9XG59XG5cbmlvbi1idXR0b25bYnRuLWdsb2JhbF0ge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ 14718:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button defaultHref=\"/tabs/profile\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\">Settings </ion-title>\n\t<!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n\t<ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \t<div fileName>\n  \t\t<ul>\n  \t\t\t<li>\n  \t\t\t\t<span iconRelate><ion-icon name=\"bulb\"></ion-icon></span>\n  \t\t\t\t<h4>Enable Millionhere Mode<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p></h4>\n    \t\t\t<ion-toggle></ion-toggle>\n    \t\t</li>\n  \t\t\t<li>\n  \t\t\t\t<span iconRelate red><ion-icon name=\"bug\"></ion-icon></span>\n  \t\t\t\t<h4>Push Notifications<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></h4>\n    \t\t\t<ion-toggle checked></ion-toggle>\n    \t\t</li>\n  \t\t\t<li>\n  \t\t\t\t<span iconRelate yellow><ion-icon name=\"notifications\"></ion-icon></span>\n  \t\t\t\t<h4>Notifications Sound<p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p></h4>\n    \t\t\t<ion-toggle checked></ion-toggle>\n    \t\t</li>\n  \t\t\t<li flexCenter>\n  \t\t\t\t<span iconRelate orange><ion-icon name=\"briefcase\"></ion-icon></span>\n  \t\t\t\t<h4>New Deals & Rewards</h4>\n    \t\t\t<ion-toggle></ion-toggle>\n    \t\t</li>\n  \t\t\t<li flexCenter>\n  \t\t\t\t<span iconRelate><ion-icon name=\"color-fill\"></ion-icon></span>\n  \t\t\t\t<h4>Occationals Promos</h4>\n    \t\t\t<ion-toggle></ion-toggle>\n    \t\t</li>\n        <li flexCenter>\n           <ion-button href=\"javascript:void(0)\" (click)=\"logout()\" btn-global>LOGOUT</ion-button>\n        </li>\n  \t\t</ul>\n    </div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts-es2015.js.map
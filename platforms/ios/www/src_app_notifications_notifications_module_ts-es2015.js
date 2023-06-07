(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_notifications_notifications_module_ts"],{

/***/ 47897:
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": function() { return /* binding */ NotificationsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 4598);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 89182:
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": function() { return /* binding */ NotificationsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 47897);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 4598);
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! time-ago-pipe */ 97620);








let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage, time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__.TimeAgoPipe]
    })
], NotificationsPageModule);



/***/ }),

/***/ 4598:
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": function() { return /* binding */ NotificationsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notifications.page.html */ 17546);
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss */ 51083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 39075);








let NotificationsPage = class NotificationsPage {
    constructor(userService, router, sanitizer) {
        this.userService = userService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.notifications = [];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
        this.IMAGES_URL_All = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL_All;
        this.errors = ['', null, undefined];
    }
    ngOnInit() {
        this.id = localStorage.getItem('user_auth_id');
    }
    ionViewDidEnter() {
        this.id = localStorage.getItem('user_auth_id');
        this.getnotificatons();
    }
    getnotificatons() {
        this.userService.postData({ _id: this.id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_notificatons').subscribe((result) => {
            console.log(result);
            if (result != undefined && result.length > 0) {
                this.notifications = result;
            }
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-notifications',
        template: _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationsPage);



/***/ }),

/***/ 51083:
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  border: 0 !important;\n}\nion-header ion-title {\n  font-weight: 500;\n}\nion-header ion-back-button {\n  font-size: 13px;\n  display: block;\n}\n.header-md:after {\n  display: none;\n}\nion-content .main-padding {\n  padding: 12px 15px;\n  float: left;\n  width: 100%;\n  background: #f7f5f5;\n  min-height: 100%;\n}\nion-content .catr-box {\n  text-align: center;\n}\nion-content .catr-box .img-bag {\n  background: #7d8d98;\n  text-align: center;\n  width: 100%;\n  height: 60px;\n  border-radius: 7px;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\nion-content .catr-box .img-bag img {\n  height: 40px;\n}\nion-content .catr-box h4 {\n  margin: 0px;\n  font-size: 11px;\n  color: #5f666b;\n  margin-top: 5px;\n}\nion-content .servic-near {\n  float: left;\n  width: 100%;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nion-content .liat-st {\n  overflow: visible;\n  background: transparent;\n}\nion-content .liat-st ion-card.detals {\n  margin: 0px;\n  padding: 10px;\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.06);\n  margin-bottom: 12px;\n  background: #fff;\n  position: relative;\n  border: none;\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 75px;\n}\nion-content .liat-st ion-card.detals .cont-alls {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\nion-content .liat-st ion-card.detals .cont-alls ion-card-subtitle {\n  font-size: 12px;\n  color: #12aaf2;\n  font-weight: 300;\n  letter-spacing: 0.5px;\n  text-transform: capitalize;\n}\nion-content .liat-st ion-card.detals .cont-alls ul.rirht-sr {\n  display: inline-block;\n  float: right;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\nion-content .liat-st ion-card.detals .cont-alls ul.rirht-sr li {\n  display: inline-block;\n  color: #f69834;\n  margin-right: 1px;\n}\nion-content .liat-st ion-card.detals .cont-alls ion-checkbox.check-desins {\n  float: right;\n  width: 15px;\n  height: 15px;\n  margin-left: 6px;\n}\nion-content .liat-st ion-card.detals .cont-alls .pric-loc {\n  color: #7d8d98;\n  font-size: 10px;\n  font-weight: 100;\n  letter-spacing: 0.5px;\n  margin-top: 5px;\n}\nion-content .liat-st ion-card.detals .cont-alls .pric-loc span {\n  display: block;\n  font-size: 10px;\n  color: #173143;\n  letter-spacing: 0px;\n  font-weight: 600;\n  margin-top: 3px;\n}\nion-content .liat-st ion-card.detals .cont-alls .mrg-n5 {\n  margin: 0 -5px;\n}\nion-content .liat-st ion-card.detals h5.name-trs {\n  margin: 0px;\n  color: #565656;\n  font-size: 14px;\n  font-weight: 500;\n  display: block;\n  line-height: 18px;\n}\nion-content .liat-st ion-card.detals p.emainb {\n  margin: 0px;\n  color: #a7a7a7;\n  font-size: 10px;\n  margin-top: 7px;\n  font-weight: 500;\n}\nion-content .liat-st ion-card.detals .img-boxda {\n  position: absolute;\n  left: 10px;\n  top: 11px;\n  text-align: center;\n}\nion-content .liat-st ion-card.detals .img-boxda img {\n  width: 53px;\n  height: 53px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  border-radius: 50%;\n  background: rgba(104, 145, 226, 0.2);\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0Msb0JBQUE7QUFBRjtBQUdDO0VBQ0MsZ0JBQUE7QUFERjtBQUlDO0VBQ0ksZUFBQTtFQUNILGNBQUE7QUFGRjtBQU1BO0VBQ0MsYUFBQTtBQUhEO0FBT0M7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUpGO0FBTUM7RUFDQyxrQkFBQTtBQUpGO0FBS0U7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUhIO0FBSUc7RUFDQyxZQUFBO0FBRko7QUFLRTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUVBLGVBQUE7QUFKSDtBQU9DO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUxGO0FBT0M7RUFDSSxpQkFBQTtFQUNILHVCQUFBO0FBTEY7QUFNRTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBRUEsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBSkg7QUFLRztFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKO0FBSUk7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQUhMO0FBS0k7RUFDQyxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSEw7QUFJSztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRk47QUFLSTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSEw7QUFLSTtFQUNDLGNBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNDLGVBQUE7QUFKTjtBQUtLO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFITjtBQU1JO0VBQVUsY0FBQTtBQUhkO0FBS0c7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUpKO0FBTUc7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU1HO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBSko7QUFLSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FBSEwiLCJmaWxlIjoibm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuXHRpb24tdG9vbGJhcntcblx0XHRib3JkZXI6MCAhaW1wb3J0YW50O1xuXHRcblx0fVxuXHRpb24tdGl0bGV7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXG5cdGlvbi1iYWNrLWJ1dHRvbntcblx0ICAgIGZvbnQtc2l6ZTogMTNweDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxufVxuXG4uaGVhZGVyLW1kOmFmdGVye1xuXHRkaXNwbGF5OiBub25lO1xufVxuaW9uLWNvbnRlbnQge1xuXHRcblx0Lm1haW4tcGFkZGluZyB7XG5cdFx0cGFkZGluZzogMTJweCAxNXB4O1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6ICNmN2Y1ZjU7XG5cdFx0bWluLWhlaWdodDogMTAwJTtcblx0fVxuXHQuY2F0ci1ib3gge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQuaW1nLWJhZyB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjN2Q4ZDk4O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA3cHg7XG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0XHRcdGltZyB7XG5cdFx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aDQge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRjb2xvcjogIzVmNjY2Yjtcblx0XHRcdCBcblx0XHRcdG1hcmdpbi10b3A6IDVweDtcblx0XHR9XG5cdH1cblx0LnNlcnZpYy1uZWFyIHtcblx0XHRmbG9hdDogbGVmdDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdH1cblx0LmxpYXQtc3Qge1xuXHQgICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0aW9uLWNhcmQuZGV0YWxzICAge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0Ym94LXNoYWRvdzogMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDc1cHg7XG5cdFx0XHQuY29udC1hbGxzIHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdGlvbi1jYXJkLXN1YnRpdGxlIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdFx0Y29sb3I6ICMxMmFhZjI7XG5cdFx0XHRcdFx0IFxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHVsLnJpcmh0LXNyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRcdGxpIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdGNvbG9yOiAjZjY5ODM0O1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlvbi1jaGVja2JveC5jaGVjay1kZXNpbnMge1xuXHRcdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0XHR3aWR0aDogMTVweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE1cHg7XG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDZweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQucHJpYy1sb2Mge1xuXHRcdFx0XHRcdGNvbG9yOiAjN2Q4ZDk4O1xuXHRcdFx0XHRcdCBcblx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdFx0IG1hcmdpbi10b3A6IDVweDtcblx0XHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxNzMxNDM7XG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMHB4O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDNweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm1yZy1uNSB7IG1hcmdpbjowIC01cHg7fVxuXHRcdFx0fVxuXHRcdFx0aDUubmFtZS10cnMge1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Y29sb3I6ICM1NjU2NTY7XG5cdFx0XHRcdCBcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0XHR9XG5cdFx0XHRwLmVtYWluYiB7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRjb2xvcjogI2E3YTdhNztcblx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA3cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHR9XG5cdFx0XHQuaW1nLWJveGRhIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiAxMHB4O1xuXHRcdFx0XHR0b3A6IDExcHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHR3aWR0aDogNTNweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDUzcHg7XG5cdFx0XHRcdFx0LW8tb2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxNDUsIDIyNiwgMC4yKTtcblx0XHRcdFx0XHRwYWRkaW5nOiAzcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iXX0= */");

/***/ }),

/***/ 17546:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button routerLink=\"/tabs/dashboard\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\">Notifications </ion-title>\n\t<!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n\t<ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"main-padding\">\n\t\t<div class=\"servic-near\">\n\t\t\t<ion-list *ngIf=\"(notifications.length != 0)\" class=\"liat-st\" lines=\"none\">\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\" *ngFor=\"let notify of notifications\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<!-- <img src=\"assets/img/img1.jpg\"> -->\n\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(notify.saloon_usr?.profile_picture) >= 0\" src=\"../assets/img/img1.jpg\" alt=\"\" >\n\t\t\t\t\t\t<img *ngIf=\"errors.indexOf(notify.saloon_usr?.profile_picture) == -1\" src=\"{{IMAGES_URL+'/'+notify.saloon_usr?.profile_picture}}\" alt=\"\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\" [innerHTML]=\"notify.notifications.message\"></h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon> {{notify.notifications.created_at | timeAgo }}   </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<!-- <ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">  \n\t\t\t\t\t\t<img src=\"assets/img/img2.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\">At vero eos et accusamus et iusto odio dignissimos ducimus   </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon> 12 Jan 2020 | 10.00am </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img3.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\">Lorem ipsum dolor sit amet, consectetur adipiscing elit  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon> 12 Jan 2020 | 10.00am </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img4.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\">Lorem Ipsum is simply dummy text of the printing  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon> 12 Jan 2020 | 10.00am </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img5.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\">At vero eos et accusamus et iusto odio dignissimos ducimus   </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon> 12 Jan 2020 | 10.00am </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img6.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\">Lorem ipsum dolor sit amet, consectetur adipiscing elit  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon> 12 Jan 2020 | 10.00am </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\">\n\t\t\t\t\t<div class=\"img-boxda\">\n\t\t\t\t\t\t<img src=\"assets/img/img7.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\">Lorem Ipsum is simply dummy text of the printing  </h5>\n\t\t\t\t\t\t<p class=\"emainb\"><ion-icon name=\"time-outline\"></ion-icon> 12 Jan 2020 | 10.00am </p>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card> -->\n\t\t\t</ion-list>\n\n\t\t\t<ion-list *ngIf=\"(notifications.length == 0)\" class=\"liat-st\" lines=\"none\">\n\t\t\t\t<ion-card class=\"detals\" lines=\"none\" >\n\t\t\t\t\t<div class=\"cont-alls\">\n\t\t\t\t\t\t<h5 class=\"name-trs\">Not any notification found!.</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-card>\n\t\t\t</ion-list>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_notifications_notifications_module_ts-es2015.js.map
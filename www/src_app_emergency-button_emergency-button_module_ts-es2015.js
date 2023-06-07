(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_emergency-button_emergency-button_module_ts"],{

/***/ 21999:
/*!*********************************************************************!*\
  !*** ./src/app/emergency-button/emergency-button-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyButtonPageRoutingModule": function() { return /* binding */ EmergencyButtonPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _emergency_button_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency-button.page */ 76966);




const routes = [
    {
        path: '',
        component: _emergency_button_page__WEBPACK_IMPORTED_MODULE_0__.EmergencyButtonPage
    }
];
let EmergencyButtonPageRoutingModule = class EmergencyButtonPageRoutingModule {
};
EmergencyButtonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmergencyButtonPageRoutingModule);



/***/ }),

/***/ 28464:
/*!*************************************************************!*\
  !*** ./src/app/emergency-button/emergency-button.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyButtonPageModule": function() { return /* binding */ EmergencyButtonPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _emergency_button_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emergency-button-routing.module */ 21999);
/* harmony import */ var _emergency_button_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency-button.page */ 76966);







let EmergencyButtonPageModule = class EmergencyButtonPageModule {
};
EmergencyButtonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _emergency_button_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmergencyButtonPageRoutingModule
        ],
        declarations: [_emergency_button_page__WEBPACK_IMPORTED_MODULE_1__.EmergencyButtonPage]
    })
], EmergencyButtonPageModule);



/***/ }),

/***/ 76966:
/*!***********************************************************!*\
  !*** ./src/app/emergency-button/emergency-button.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyButtonPage": function() { return /* binding */ EmergencyButtonPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_emergency_button_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./emergency-button.page.html */ 54575);
/* harmony import */ var _emergency_button_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emergency-button.page.scss */ 66341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);








let EmergencyButtonPage = class EmergencyButtonPage {
    constructor(alertController, userService, router) {
        this.alertController = alertController;
        this.userService = userService;
        this.router = router;
        this.emergancy_contacts = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getemergancycontatcs();
    }
    getemergancycontatcs() {
        this.userService.presentLoading();
        this.userService.postData({ _id: localStorage.getItem('user_auth_id') }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_emergancy_contacts').subscribe((result) => {
            this.userService.stopLoading();
            if (result.status == 1) {
                this.emergancy_contacts = result.data;
            }
            else {
                this.userService.presentToast('Failed to send request. Please try again', 'danger');
            }
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
        });
    }
    deletecontacts(userid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Are you sure you want to delete?',
                //  message: 'Your ad will be automatically activated after payment.',
                cssClass: 'alertfults',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            return false;
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: () => {
                            this.deletecontact(userid);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    deletecontact(id) {
        this.userService.presentLoading();
        this.userService.postData({ userId: localStorage.getItem('user_auth_id'), id: id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/delete_emergancy_contacts').subscribe((result) => {
            this.userService.stopLoading();
            if (result.status == 1) {
                this.userService.presentToast('Contact has been deleted from your emergancy contacts successfully!.', 'success');
                this.getemergancycontatcs();
            }
            else {
                this.userService.presentToast('Failed to send request. Please try again', 'danger');
            }
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
        });
    }
};
EmergencyButtonPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
EmergencyButtonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-emergency-button',
        template: _raw_loader_emergency_button_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_emergency_button_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmergencyButtonPage);



/***/ }),

/***/ 66341:
/*!*************************************************************!*\
  !*** ./src/app/emergency-button/emergency-button.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header.heder-main {\n  background: linear-gradient(to right, #315bb0, #517cd3, #6b93e4);\n  --background: linear-gradient(to right, #315bb0, #517cd3, #6b93e4);\n}\n\nion-content {\n  --background:#f9f9f9;\n  background: #f9f9f9;\n}\n\nion-content .top-bids {\n  position: relative;\n  padding: 35px;\n  margin-bottom: 45px;\n  background-image: linear-gradient(to right, #315bb0, #517cd3, #6b93e4);\n}\n\nion-content .top-bids .rsf-s {\n  width: 110px;\n  height: 110px;\n  background: #fff;\n  display: block;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  position: relative;\n  z-index: 0;\n}\n\nion-content .top-bids .rsf-s:before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  background: rgba(255, 255, 255, 0.2);\n  z-index: -1;\n  -webkit-animation: grow 3s infinite;\n          animation: grow 3s infinite;\n  border-radius: 50%;\n}\n\nion-content .top-bids .rsf-s:after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  background: rgba(255, 255, 255, 0.3);\n  z-index: -1;\n  border-radius: 50%;\n  -webkit-animation: grow 3s infinite;\n          animation: grow 3s infinite;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\nion-content .top-bids .rsf-s img {\n  width: 57px;\n}\n\nion-content .top-bids:after {\n  content: \"\";\n  position: absolute;\n  background: url('bg-2.png');\n  left: 0;\n  right: 0;\n  height: 70px;\n  background-size: cover;\n  background-position: center center;\n  z-index: -1;\n}\n\n@-webkit-keyframes grow {\n  from {\n    transform: scale(1);\n    opacity: 1;\n  }\n  to {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n\n@keyframes grow {\n  from {\n    transform: scale(1);\n    opacity: 1;\n  }\n  to {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n\n.data-conts {\n  padding: 15px 20px;\n  display: block;\n}\n\n.data-conts h4.lst-sst {\n  font-size: 16px;\n  margin: 0px;\n  font-weight: 600;\n  padding-left: 5px;\n  position: relative;\n  z-index: 0;\n  margin-bottom: 20px;\n}\n\n.data-conts h4.lst-sst:after {\n  content: \"\";\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  background: #4267B2;\n  border-radius: 50%;\n  opacity: 0.2;\n  z-index: -1;\n  left: -5px;\n  top: -6px;\n}\n\n.dats-cntsr .str-ss {\n  background: #fff;\n  margin-top: 15px;\n  padding: 10px;\n  border-radius: 50px;\n  padding-left: 65px;\n  position: relative;\n  /*box-shadow: 0px 2px 13px rgba(0 0 0 / 3%);*/\n  box-shadow: rgba 0, 0, 0, 0.3;\n}\n\n.dats-cntsr .str-ss span.icon-cnt {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background: #eff4ff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #4267B2;\n  left: 5px;\n  top: 5px;\n}\n\n.dats-cntsr .str-ss h4 {\n  margin: 0px;\n  font-size: 16px;\n}\n\n.dats-cntsr .str-ss p {\n  margin: 0px;\n  font-size: 12px;\n  margin-top: 4px;\n  color: #797979;\n}\n\n.dats-cntsr span.dekt-cnt {\n  height: 28px;\n  width: 28px;\n  position: absolute;\n  right: 15px;\n  top: 17px;\n  background: #f44336;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n}\n\na.add-str {\n  float: right;\n  font-size: 10px;\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  text-decoration: none;\n  padding: 5px 10px;\n  border-radius: 50px;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtZXJnZW5jeS1idXR0b24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0VBQUE7RUFDQSxrRUFBQTtBQUNKOztBQUNBO0VBQ0Msb0JBQUE7RUFDQSxtQkFBQTtBQUVEOztBQURDO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBQUdGOztBQUZFO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUlIOztBQUhHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUZHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUFJSjs7QUFGRztFQUNDLFdBQUE7QUFJSjs7QUFERTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUFHSDs7QUFFQTtFQUNFO0lBRVUsbUJBQUE7SUFDUixVQUFBO0VBQ0Y7RUFDQTtJQUVVLHFCQUFBO0lBQ1IsVUFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUVVLG1CQUFBO0lBQ1IsVUFBQTtFQUFGO0VBRUE7SUFFVSxxQkFBQTtJQUNSLFVBQUE7RUFBRjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBQ0M7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUVIOztBQUdDO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLDZCQUFBO0FBQUY7O0FBQ0U7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUNIOztBQUNFO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUFDSDs7QUFDRTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSDs7QUFFQztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQUoiLCJmaWxlIjoiZW1lcmdlbmN5LWJ1dHRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyLmhlZGVyLW1haW4ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzMxNWJiMCwgIzUxN2NkMywgIzZiOTNlNCk7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMTViYjAsICM1MTdjZDMsICM2YjkzZTQpO1xufVxuaW9uLWNvbnRlbnQge1xuXHQtLWJhY2tncm91bmQ6I2Y5ZjlmOTtcblx0YmFja2dyb3VuZDojZjlmOWY5O1xuXHQudG9wLWJpZHMge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRwYWRkaW5nOiAzNXB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDQ1cHg7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzE1YmIwLCAjNTE3Y2QzLCAjNmI5M2U0KTtcblx0XHQucnNmLXMge1xuXHRcdFx0d2lkdGg6IDExMHB4O1xuXHRcdFx0aGVpZ2h0OiAxMTBweDtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHotaW5kZXg6IDA7XG5cdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0XHRyaWdodDogMHB4O1xuXHRcdFx0XHR0b3A6IDBweDtcblx0XHRcdFx0Ym90dG9tOiAwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMCk7XG5cdFx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdFx0XHRhbmltYXRpb246IGdyb3cgM3MgaW5maW5pdGU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiAwcHg7XG5cdFx0XHRcdHJpZ2h0OiAwcHg7XG5cdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0XHRib3R0b206IDBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMwKTtcblx0XHRcdFx0ei1pbmRleDogLTE7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0YW5pbWF0aW9uOiBncm93IDNzIGluZmluaXRlO1xuXHRcdFx0XHRhbmltYXRpb24tZGVsYXk6IC41cztcblx0XHRcdH1cblx0XHRcdGltZyB7XG5cdFx0XHRcdHdpZHRoOiA1N3B4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQmOmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRiYWNrZ3JvdW5kOnVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYmctMi5wbmdcIik7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRoZWlnaHQ6IDcwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcblx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdFx0XG5cdFx0fVxuXHR9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZ3JvdyB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdyb3cge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5kYXRhLWNvbnRzIHtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cdGg0LmxzdC1zc3Qge1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRtYXJnaW46IDBweDtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdHBhZGRpbmctbGVmdDogNXB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR6LWluZGV4OiAwO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjNDI2N0IyO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0b3BhY2l0eTogMC4yO1xuXHRcdFx0ei1pbmRleDogLTE7XG5cdFx0XHRsZWZ0OiAtNXB4O1xuXHRcdFx0dG9wOiAtNnB4O1xuXHRcdH1cblx0fVxufVxuLmRhdHMtY250c3Ige1xuXHQuc3RyLXNzIHtcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdHBhZGRpbmctbGVmdDogNjVweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Lypib3gtc2hhZG93OiAwcHggMnB4IDEzcHggcmdiYSgwIDAgMCAvIDMlKTsqL1xuXHRcdGJveC1zaGFkb3c6IHJnYmEgKDAsMCwwLDAuMyk7XG5cdFx0c3Bhbi5pY29uLWNudCB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdGJhY2tncm91bmQ6ICNlZmY0ZmY7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0Y29sb3I6ICM0MjY3QjI7XG5cdFx0XHRsZWZ0OiA1cHg7XG5cdFx0XHR0b3A6IDVweDtcblx0XHR9XG5cdFx0aDQge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0fVxuXHRcdHAgIHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0bWFyZ2luLXRvcDogNHB4O1xuXHRcdFx0Y29sb3I6ICM3OTc5Nzk7XG5cdFx0fVxuXHR9XG5cdHNwYW4uZGVrdC1jbnQge1xuXHRcdGhlaWdodDogMjhweDtcblx0XHR3aWR0aDogMjhweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDE1cHg7XG5cdFx0dG9wOiAxN3B4O1xuXHRcdGJhY2tncm91bmQ6ICNmNDQzMzY7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdH1cbn1cbmEuYWRkLXN0ciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59Il19 */");

/***/ }),

/***/ 54575:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/emergency-button/emergency-button.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button defaultHref=\"/tabs/dashboard\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n\t\t<ion-title class=\"ion-text-center\">Emergency </ion-title>\n\t<ion-buttons slot=\"end\" routerLink=\"/discovery\"><ion-icon name=\"settings-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"top-bids\">\n\t\t<a href=\"javascript:void(0);\" class=\"rsf-s\"> \n\t\t\t<img src=\"assets/img/alert.png\">\n\t\t</a>\n\t</div>\n\t<div class=\"data-conts\">\n\t\t<h4 class=\"lst-sst\"> Emergency Contacts \n\t\t\t<a routerLink=\"/add-contact\" href=\"javascript:void(0);\" class=\"add-str\"> Add New </a>\n\t\t</h4>\n\t\t<div class=\"dats-cntsr\"  *ngIf=\"(emergancy_contacts.length != 0)\">\n\t\t\t<div class=\"str-ss\" *ngFor=\"let contacts of emergancy_contacts\">\n\t\t\t\t<span class=\"icon-cnt\"> <ion-icon name=\"person-outline\"></ion-icon> </span>\n\t\t\t<h4> {{contacts.displayName}} </h4>\n\t\t\t\t<p> {{contacts.contact_array}} </p>\n\t\t\t\t<span class=\"dekt-cnt\" (click)=\"deletecontacts(contacts._id);\"><ion-icon name=\"close-outline\"></ion-icon> </span>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"str-ss\">\n\t\t\t\t<span class=\"icon-cnt\"> <ion-icon name=\"person-outline\"></ion-icon> </span>\n\t\t\t\t<h4> Hanry James </h4>\n\t\t\t\t<p> +91 8888 777 424 </p>\n\t\t\t\t<span class=\"dekt-cnt\"><ion-icon name=\"close-outline\"></ion-icon> </span>\n\t\t\t</div>\n\t\t\t<div class=\"str-ss\">\n\t\t\t\t<span class=\"icon-cnt\"> <ion-icon name=\"person-outline\"></ion-icon> </span>\n\t\t\t\t<h4> Marry James </h4>\n\t\t\t\t<p> +91 9999 777 322 </p>\n\t\t\t\t<span class=\"dekt-cnt\"><ion-icon name=\"close-outline\"></ion-icon> </span>\n\t\t\t</div>\n\t\t\t<div class=\"str-ss\">\n\t\t\t\t<span class=\"icon-cnt\"> <ion-icon name=\"person-outline\"></ion-icon> </span>\n\t\t\t\t<h4> Dennial James </h4>\n\t\t\t\t<p> +91 7676 777 322 </p>\n\t\t\t\t<span class=\"dekt-cnt\"><ion-icon name=\"close-outline\"></ion-icon> </span>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_emergency-button_emergency-button_module_ts-es2015.js.map
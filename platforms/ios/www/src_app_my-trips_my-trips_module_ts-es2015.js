(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_my-trips_my-trips_module_ts"],{

/***/ 75880:
/*!*****************************************************!*\
  !*** ./src/app/my-trips/my-trips-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTripsPageRoutingModule": function() { return /* binding */ MyTripsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_trips_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-trips.page */ 55938);




const routes = [
    {
        path: '',
        component: _my_trips_page__WEBPACK_IMPORTED_MODULE_0__.MyTripsPage
    }
];
let MyTripsPageRoutingModule = class MyTripsPageRoutingModule {
};
MyTripsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyTripsPageRoutingModule);



/***/ }),

/***/ 94153:
/*!*********************************************!*\
  !*** ./src/app/my-trips/my-trips.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTripsPageModule": function() { return /* binding */ MyTripsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_trips_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-trips-routing.module */ 75880);
/* harmony import */ var _my_trips_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-trips.page */ 55938);







let MyTripsPageModule = class MyTripsPageModule {
};
MyTripsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_trips_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyTripsPageRoutingModule
        ],
        declarations: [_my_trips_page__WEBPACK_IMPORTED_MODULE_1__.MyTripsPage]
    })
], MyTripsPageModule);



/***/ }),

/***/ 55938:
/*!*******************************************!*\
  !*** ./src/app/my-trips/my-trips.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTripsPage": function() { return /* binding */ MyTripsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_trips_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-trips.page.html */ 57847);
/* harmony import */ var _my_trips_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-trips.page.scss */ 87634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);









let MyTripsPage = class MyTripsPage {
    constructor(userService, router, alertController) {
        this.userService = userService;
        this.router = router;
        this.alertController = alertController;
        this.errors = ['', null, undefined, 'undefined'];
        this.profile_data = [];
        this.trips = [];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
        this.IMAGES_URL_All = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL_All;
        this.pageno = 1;
        this.totaldata = 0;
        this.page = 1;
        this.count = 0;
        this.total_result = 0;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.trips = [];
        this.total_result = 0;
        this.count = 0;
        this.id = localStorage.getItem('user_auth_id');
        this.getprofiledata();
        this.gettrips();
        localStorage.setItem('back_button_url', '/my-trips');
    }
    getprofiledata() {
        this.userService.presentLoading();
        this.userService.postData({ _id: this.id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_user_profile_detail').subscribe((result) => {
            this.userService.stopLoading();
            this.profile_data = result;
            if (this.profile_data.user_imgs != undefined && this.profile_data.user_imgs.length > 0) {
            }
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
        });
    }
    gettrips() {
        this.userService.postData({ skip: this.page, _id: this.id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_my_trips').subscribe((result) => {
            var thiss = this;
            if (result.data2 != undefined && result.data2.length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_4__.each(result.data2, function (key, bl) {
                    console.log(bl.location);
                    console.log(bl.weather);
                    thiss.trips.push(bl);
                });
                this.total_result = result.data;
                this.count += this.trips.length;
                // this.page = parseInt(result.pageno);     
                //alert(this.page);   
            }
        });
    }
    loadmore() {
        this.page += 1;
        this.gettrips();
    }
};
MyTripsPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
MyTripsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-my-trips',
        template: _raw_loader_my_trips_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_trips_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyTripsPage);



/***/ }),

/***/ 87634:
/*!*********************************************!*\
  !*** ./src/app/my-trips/my-trips.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-color:#fff;\n}\nion-header ion-back-button {\n  font-size: 13px;\n}\nion-header ion-title {\n  font-weight: 500;\n}\nion-header ion-buttons {\n  font-size: 20px;\n  margin-right: 10px;\n}\n[places-sec] {\n  padding: 0px 20px 20px;\n}\n[places-sec] [topPart] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 20px;\n  z-index: 0;\n  position: relative;\n  background: #fff;\n  border-radius: 0 0 30px 30px;\n}\n[places-sec] [topPart]:after {\n  content: \"\";\n  background: url('map.png');\n  left: -20px;\n  right: -20px;\n  top: 0;\n  bottom: 0;\n  background-size: contain;\n  z-index: -1;\n  opacity: 0.1;\n  position: absolute;\n}\n[places-sec] [topPart] [msg] {\n  position: absolute;\n  top: 50px;\n  right: 60px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 35px;\n  height: 35px;\n}\n[places-sec] [topPart] [msg] ion-icon {\n  color: #fff;\n  font-size: 20px;\n}\n[places-sec] [topPart] [userImg] {\n  width: 90px;\n  height: 90px;\n  border-radius: 30px;\n  display: inline-block;\n  position: relative;\n}\n[places-sec] [topPart] [userImg] img {\n  width: 100%;\n  height: 100%;\n  border-radius: 30px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[places-sec] [topPart] [userImg] [editImage] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background: var(--ion-color-gradient1);\n  position: absolute;\n  right: -10px;\n  bottom: 5px;\n  z-index: 1;\n}\n[places-sec] [topPart] h4 {\n  font-size: 18px;\n  color: #111;\n  font-weight: 600;\n  margin: 10px 0 5px;\n}\n[places-sec] [topPart] p {\n  color: #666;\n  font-size: 12px;\n  max-width: 60%;\n  margin: 0 auto;\n  line-height: 130%;\n  text-align: center;\n}\n[places-sec] [topPart] [btn-edit] {\n  padding: 10px 30px;\n  color: #111;\n  background: #fff;\n  font-weight: 600;\n  border-radius: 50px;\n  margin: 20px 0 0;\n  text-decoration: none;\n}\n[places-sec] [slider-sec] {\n  padding: 20px 0px 0px;\n}\n[places-sec] [slider-sec] [mn-places-head] {\n  margin: 0px 0px 17px;\n  font-size: 17px;\n  padding-left: 10px;\n  position: relative;\n  z-index: 1;\n  color: #000;\n}\n[places-sec] [slider-sec] [mn-places-head]:before {\n  position: absolute;\n  content: \"\";\n  left: 0px;\n  top: -3px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: var(--ion-color-primary);\n  opacity: 0.15;\n}\n[places-sec] [slider-sec] [slides-img] {\n  margin-bottom: 20px;\n  width: 100%;\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n}\n[places-sec] [slider-sec] [slides-img] [mn-cont] {\n  position: absolute;\n  top: 10px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 10px;\n}\n[places-sec] [slider-sec] [slides-img] [mn-cont] h4 {\n  font-size: 13px;\n  color: #fff;\n  font-weight: 700;\n  margin: 0px;\n}\n[places-sec] [slider-sec] [slides-img] [mn-cont] span {\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 5px 10px;\n  border-radius: 40px;\n}\n[places-sec] [slider-sec] [slides-img] [places-date-sec] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  background: linear-gradient(0deg, #000, transparent);\n  padding: 6px 0px;\n}\n[places-sec] [slider-sec] [slides-img] [places-date-sec] [place-content] {\n  text-align: center;\n}\n[places-sec] [slider-sec] [slides-img] [places-date-sec] [place-content] h5 {\n  margin: 0px;\n  font-size: 13px;\n  color: #fff;\n}\n[places-sec] [slider-sec] [slides-img] [places-date-sec] [place-content] h5 span {\n  font-size: 10px;\n  display: block;\n  font-weight: 300;\n  /* text-transform: uppercase; */\n  margin-top: 6px;\n  letter-spacing: 1px;\n}\n[places-sec] [slider-sec] [slides-img] img {\n  width: 100%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);\n}\n[places-sec] [ad-place-btn] [save] {\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  font-size: 14px;\n  border-radius: 50px;\n  padding: 12px 22px;\n  display: inline-block;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXRyaXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUVDLGFBQUE7QUFERjtBQUdDO0VBQ0MsbUJBQUE7QUFERjtBQUdDO0VBQ0ksZUFBQTtBQURMO0FBR0M7RUFDQyxnQkFBQTtBQURGO0FBR0M7RUFFQyxlQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUtBO0VBRUksc0JBQUE7QUFISjtBQUlDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFGRjtBQUdFO0VBQ0MsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURIO0FBR0U7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESDtBQUVHO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUFBSjtBQUlFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFGSDtBQUdHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFESjtBQUdHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFESjtBQUlFO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkg7QUFJRTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRkg7QUFJRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFGSDtBQUtDO0VBRUkscUJBQUE7QUFKTDtBQUtFO0VBRUMsb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBSkg7QUFLRztFQUVDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQUpKO0FBT0U7RUFFRyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFOTDtBQU9LO0VBRUMsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBTk47QUFPTTtFQUVDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBTlA7QUFRTTtFQUVDLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVBQO0FBVUs7RUFFQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7QUFUTjtBQVVNO0VBRUssa0JBQUE7QUFUWDtBQVVPO0VBRUMsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBVFI7QUFVUTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVJUO0FBYUs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBWk47QUFrQks7RUFFRixzQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFqQkgiLCJmaWxlIjoibXktdHJpcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcblx0JjphZnRlclxuXHR7XG5cdFx0ZGlzcGxheTpub25lO1xuXHR9XG5cdGlvbi10b29sYmFye1xuXHRcdC0tYm9yZGVyLWNvbG9yOiNmZmY7XG5cdH1cblx0aW9uLWJhY2stYnV0dG9ue1xuXHQgICAgZm9udC1zaXplOiAxM3B4O1xuXHR9XG5cdGlvbi10aXRsZXtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHR9XG5cdGlvbi1idXR0b25zIFxuXHR7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0fVx0XG59XG5bcGxhY2VzLXNlY11cbntcbiAgICBwYWRkaW5nOiAwcHggMjBweCAyMHB4O1xuXHRbdG9wUGFydF17XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0cGFkZGluZy10b3A6MjBweDtcblx0XHR6LWluZGV4OiAwO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRiYWNrZ3JvdW5kOiNmZmY7XG5cdFx0Ym9yZGVyLXJhZGl1czogMCAwIDMwcHggMzBweDtcblx0XHQmOmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6XCJcIjtcblx0XHRcdGJhY2tncm91bmQ6dXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9tYXAucG5nXCIpO1xuXHRcdFx0bGVmdDogLTIwcHg7XG5cdFx0XHRyaWdodDogLTIwcHg7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0XHR6LWluZGV4OiAtMTtcblx0XHRcdG9wYWNpdHk6IDAuMTtcblx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xuXHRcdH1cblx0XHRbbXNnXXtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogNTBweDtcblx0XHRcdHJpZ2h0OiA2MHB4O1xuXHRcdFx0YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LCAuMik7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdHdpZHRoOiAzNXB4O1xuXHRcdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdFx0aW9uLWljb257XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHR9IFxuXG5cdFx0fVxuXHRcdFt1c2VySW1nXXtcblx0XHRcdHdpZHRoOiA5MHB4O1xuXHRcdFx0aGVpZ2h0OiA5MHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMzBweDtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGltZ3tcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMzBweDtcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHR9XG5cdFx0XHRbZWRpdEltYWdlXXtcblx0XHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRyaWdodDogLTEwcHg7XG5cdFx0XHRcdGJvdHRvbTogNXB4O1xuXHRcdFx0XHR6LWluZGV4OjE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGg0e1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0Y29sb3I6ICMxMTE7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0bWFyZ2luOiAxMHB4IDAgNXB4O1xuXHRcdH1cblx0XHRwe1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRtYXgtd2lkdGg6IDYwJTtcblx0XHRcdG1hcmdpbjowIGF1dG87XG5cdFx0XHRsaW5lLWhlaWdodDogMTMwJTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cdFx0W2J0bi1lZGl0XXtcblx0XHRcdHBhZGRpbmc6MTBweCAzMHB4O1xuXHRcdFx0Y29sb3I6ICMxMTE7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRtYXJnaW46MjBweCAwIDA7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuXHRcdH1cblx0fVxuXHRbc2xpZGVyLXNlY11cblx0e1xuXHQgICAgcGFkZGluZzogMjBweCAwcHggMHB4O1xuXHRcdFttbi1wbGFjZXMtaGVhZF0gXG5cdFx0e1xuXHRcdFx0bWFyZ2luOiAwcHggMHB4IDE3cHg7XG5cdFx0XHRmb250LXNpemU6IDE3cHg7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6MTBweDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdCY6YmVmb3JlIFxuXHRcdFx0e1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdFx0dG9wOiAtM3B4O1xuXHRcdFx0XHR3aWR0aDogMjVweDtcblx0XHRcdFx0aGVpZ2h0OiAyNXB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRvcGFjaXR5OjAuMTU7XG5cdFx0XHR9XHRcblx0XHR9XHRcblx0XHRbc2xpZGVzLWltZ10gXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlOyAgXG5cdFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1x0XHRcdFx0XHRcblx0XHRcdFx0XHRbbW4tY29udF0gXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMHB4IDEwcHg7XG5cdFx0XHRcdFx0XHRoNCBcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzcGFuIFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCAsIDAgLCAwICwgMC41KTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDQwcHg7XG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFtwbGFjZXMtZGF0ZS1zZWNdIFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGJvdHRvbTogMHB4O1xuXHRcdFx0XHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDAwLCB0cmFuc3BhcmVudCk7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA2cHggMHB4O1xuXHRcdFx0XHRcdFx0W3BsYWNlLWNvbnRlbnRdIFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRoNSBcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0XHRzcGFue1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0LyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDZweDtcblx0XHRcdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcblx0XHRcdFx0XHRpbWcgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE4MHB4O1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG5cdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHR9XHQgICAgICAgICAgXHRcdFx0XG4gICAgfVxuICAgIFthZC1wbGFjZS1idG5dXG4gICAge1xuXHQgICAgW3NhdmVdXG5cdFx0e1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRwYWRkaW5nOiAxMnB4IDIycHg7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHRcdFxuXHRcdH1cblx0fVx0XG59Il19 */");

/***/ }),

/***/ 57847:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-trips/my-trips.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button routerLink=\"/tabs/dashboard\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\"></ion-title>\n\t<ion-buttons slot=\"end\" routerLink=\"/places-interests\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons>\n\t<ion-buttons routerLink=\"/discovery\" slot=\"end\"><ion-icon name=\"settings-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div places-sec>\n\t\t<div topPart>\n\t\t  <span userImg><img *ngIf=\"errors.indexOf(profile_data.data?.profile_picture) >= 0\" src=\"../assets/img/img1.jpg\" alt=\"\">\n\t\t  <img *ngIf=\"errors.indexOf(profile_data.data?.profile_picture) == -1\" src=\"{{profile_data.data?.profile_picture}}\" alt=\"\"></span>\n\t\t  <h4 *ngIf=\"errors.indexOf(profile_data.data?.firstname) == -1\">{{profile_data.data?.firstname+' '+profile_data.data?.lastname}}</h4>\n\t\t  <p>{{profile_data.data?.email}}</p>\n\t\t</div>\n\t\t<div slider-sec>\n\t\t    <h2 mn-places-head>My Trips</h2>\n\t\t\t<div slides-img *ngFor=\"let trip of trips\" routerLink=\"/trip-details/{{trip._id}}\">\n\t\t\t\t<img src=\"{{trip.images[0]}}\" />\n\t\t\t\t<!--ion-button  delete-button><ion-icon name=\"trash-outline\"></ion-icon></ion-button-->\n\t\t\t\t<div mn-cont>\n\t\t\t\t   <h4>{{trip.trip_name}}</h4> <!-- <span now-trvel>Now Traveling</span> -->\n\t\t\t\t</div>\n\t\t\t\t<div places-date-sec>\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t<div place-content>\n\t\t\t\t\t\t\t\t<h5>{{trip.start_date |  date: 'dd/MM/yyyy'}} <span>Date </span></h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t<div place-content>\n\t\t\t\t\t\t\t\t<h5>{{trip.starting_point}}  <span>Starting Point </span></h5>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t<div place-content>\n\t\t\t\t\t\t\t\t<!-- <h5>04  <span>Comments </span></h5> -->\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div ad-place-btn   *ngIf=\"trip.status == 0\" >\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"12\" class=\"ion-text-center\" (click)=\"submits(trip._id);\">\n\t\t\t\t\t\t\t\t\t\t  <a href=\"javascript:void(0)\"  save>Draft</a>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\t\n\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<!-- <div slides-img>\n\t\t\t\t<img src=\"assets/img/trip2.jpg\" />\n\t\t\t\t\n\t\t\t\t<div mn-cont>\n\t\t\t\t   <h4>Greek Island </h4> <span now-trvel>Now Traveling</span>\n\t\t\t\t</div>\n\t\t\t\t<div places-date-sec>\n\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t<div place-content>\n\t\t\t\t\t\t\t\t<h5>05/03/2021 <span>Date </span></h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t<div place-content>\n\t\t\t\t\t\t\t\t<h5>Alaska  <span>Starting Point </span></h5>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t<div place-content>\n\t\t\t\t\t\t\t\t<h5>35  <span>Comments </span></h5>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</div>\n\t\t\t</div>\t -->\t\t\n\t\t</div>\n\n\t\t<div registertext  *ngIf=\"count < total_result\">\n\t\t<ion-button color=\"primary\" class=\"btn-register\" shape=\"round\" fill=\"outline\" (click)=\"loadmore();\">\n\t\tLoad More\n\t\t</ion-button>\n\t\t</div>\n\n        <div ad-place-btn>\n        <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n\t\t    <a href=\"javascript:void(0)\" routerLink=\"/places-interests\" save>Add A Trip</a>\n\t\t</ion-col>\t\t\n\t\t</ion-row>\t\t\n\t\t</div>\t\t\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_my-trips_my-trips_module_ts-es2015.js.map
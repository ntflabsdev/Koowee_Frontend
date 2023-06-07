(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 50425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 65935);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 50425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 65935);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 65935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 52836);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 38043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var _swipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../swipe.service */ 59361);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);










let DashboardPage = class DashboardPage {
    constructor(userService, swipservice, route, toastController, router) {
        this.userService = userService;
        this.swipservice = swipservice;
        this.route = route;
        this.toastController = toastController;
        this.router = router;
        this.profile_data = [];
        this.errors = ['', null, undefined, 'undefined'];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
        this.isSubscriptionActive = false;
        this.id = localStorage.getItem('user_auth_id');
    }
    ngOnInit() {
        let brand = this.route.snapshot.paramMap.get('brand');
        if (brand) {
            this.getprofiledata();
        }
        this.getprofiledata();
    }
    ionViewDidEnter() {
    }
    checkSubscriptionExpiration() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const currentDate = moment__WEBPACK_IMPORTED_MODULE_5__();
            const endDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.subscription.subcription_end_date);
            const daysRemaining = endDate.diff(currentDate, 'days');
            if (daysRemaining <= 4 && daysRemaining > 0 && this.subscription.isSubscribe) {
                const toast = yield this.toastController.create({
                    message: `Your subscription will expire in ${daysRemaining} days. Please renew your subscription to continue using our app.`,
                    duration: 5000,
                    position: 'bottom' // Position of the toast message
                });
                toast.present();
            }
            if (daysRemaining == 0) {
                if (this.subscription.isSubscribe) {
                    const toast = yield this.toastController.create({
                        message: `Your subscription is expired. Please renew your subscription to continue using our app.`,
                        duration: 5000,
                        position: 'bottom' // Position of the toast message
                    });
                    const result = yield this.userService.postData({ isSubscribe: false, _id: this.id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/update_profile').toPromise();
                    console.log("result-->", result);
                    if (result.status == "1") {
                        this.router.navigate(["/subscription"]);
                    }
                    toast.present();
                }
            }
        });
    }
    getprofiledata() {
        this.userService.postData({ _id: this.id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_user_profile_detail').subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("user detail-->", result);
            this.profile_data = result;
            this.subscription = result.data;
            this.swipservice.subscribed = result.data.isSubscribe;
            // console.log("issubccribe-->", result.data.isSubscribe)
            this.isSubscriptionActive = yield this.swipservice.checkSubscriptionStatus();
            if (this.isSubscriptionActive) {
                this.checkSubscriptionExpiration();
            }
            if (this.profile_data.user_imgs != undefined && this.profile_data.user_imgs.length > 0) {
                this.images = this.profile_data.user_imgs;
            }
        }));
    }
};
DashboardPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _swipe_service__WEBPACK_IMPORTED_MODULE_4__.SwipeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 38043:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar ion -icon {\n  right: 16px !important;\n  left: auto !important;\n}\n\n.img {\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  align-items: \"center\";\n  margin-left: 5%;\n  width: 90%;\n  height: 46px;\n  margin-top: 19px;\n}\n\n.txt {\n  margin-left: 10px;\n}\n\n.search {\n  width: 32px;\n  height: 32px;\n}\n\n.box1 {\n  width: 90%;\n  height: 63px;\n  margin-left: 5%;\n  margin-top: 20px;\n  background-color: #80A2ED;\n  display: flex;\n  border-radius: 10px;\n  background-repeat: no-repeat;\n}\n\n.img1 {\n  width: 36px;\n  height: 36px;\n  margin-left: 19px;\n  margin-top: 13px;\n}\n\n.bgwhite {\n  color: white;\n  margin-left: 10px;\n}\n\n.bgwhite1 {\n  color: white;\n  margin-left: 14px;\n}\n\n.arrow {\n  width: 23px;\n  height: 20px;\n  margin-left: 70px;\n  margin-right: 10px;\n}\n\n.box2 {\n  width: 90%;\n  height: 15%;\n  margin-top: 15px;\n  margin-left: 5%;\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n}\n\n@media screen and (max-width: 1536px) {\n  .box2 {\n    background-image: url('bgimg.png');\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n}\n\n@media screen and (min-width: 1537px) {\n  .box2 {\n    background-image: url('Frame12.png');\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 1215px;\n    height: 115px;\n  }\n}\n\n.img2 {\n  width: 72px;\n  height: 72px;\n  margin-left: 25px;\n}\n\n.right {\n  width: 32px;\n  height: 32px;\n  margin-left: 70px;\n  margin-right: 10px;\n}\n\n.innerbox {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 20px;\n}\n\n.innerbox1 {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.emer {\n  width: 90%;\n  height: 63px;\n  border: 2px solid red;\n  margin-left: 5%;\n  margin-top: 38px;\n  background-color: #EC0D0D;\n  display: flex;\n  align-items: center;\n}\n\n.bell {\n  width: 40px;\n  height: 40px;\n  margin-left: 23px;\n}\n\n.lastarrow {\n  width: 23px;\n  height: 20px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FBQ0o7O0FBQ0U7RUFFRSxpQkFBQTtBQUNKOztBQUNFO0VBR0UsV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSw0QkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0FBQUo7O0FBRUU7RUFDRSxVQUFBO0VBRUEsV0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNELGFBQUE7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBRUk7RUFWRjtJQVdNLGtDQUFBO0lBQ0EsNEJBQUE7SUFFQSxzQkFBQTtFQUFOO0FBQ0Y7O0FBRUk7RUFqQkY7SUFrQk0sb0NBQUE7SUFDQSw0QkFBQTtJQUNBLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7RUFDTjtBQUNGOztBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURKOztBQVNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0FBUEo7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBUEo7O0FBWUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFXRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFVRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUFSSiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlYXJjaGJhciBpb24gLWljb24ge1xuICAgIHJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5pbWd7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cblxuICAudGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBcImNlbnRlclwiO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNDZweDtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgbWFyZ2luLXRvcDogMTlweDtcbiAgfVxuICAudHh0e1xuICAgIC8vIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLnNlYXJjaHtcbiAgICAvLyBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cbiAgLmJveDF7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDYzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwQTJFRDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9QbmcucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cblxuICAuaW1nMXtcbiAgICB3aWR0aDozNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBtYXJnaW4tbGVmdDoxOXB4O1xuICAgIG1hcmdpbi10b3A6MTNweDtcbiAgfVxuICAuYmd3aGl0ZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLmJnd2hpdGUxe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAzM3B4O1xuICB9XG4gXG4gIC5hcnJvd3tcbiAgICB3aWR0aDogMjNweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMThweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmJveDJ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICAvLyBoZWlnaHQ6IDk5cHg7XG4gICAgaGVpZ2h0OjE1JTtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTM2cHgpIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iZ2ltZy5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MzdweCl7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvRnJhbWUxMi5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEyMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxMTVweDtcbiAgICBcbiAgICAgICAgLy8gYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XG4gICAgfVxuICAgXG4gIH1cbiAgLmltZzJ7XG4gICAgd2lkdGg6NzJweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgbWFyZ2luLWxlZnQ6MjVweDtcbiAgICAvLyBtYXJnaW4tdG9wOjglO1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDYlO1xuXG5cblxuICAgIFxuICB9XG4gIC5yaWdodHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmlubmVyYm94e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgXG5cbiAgfVxuICAuaW5uZXJib3gxe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cblxuICB9XG5cbiAgLmVtZXJ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDYzcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiAzOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQzBEMEQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5iZWxse1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjNweDtcbiAgfVxuICAubGFzdGFycm93e1xuICAgIHdpZHRoOiAyM3B4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBcbiAgfSJdfQ== */");

/***/ }),

/***/ 52836:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Hello,</ion-title>\n    <ion-icon name='search'></ion-icon> \n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content >\n  <div class=\"title\">\n    <!-- <img  *ngIf=\"errors.indexOf(profile_data.data?.profile_picture) >= 0\"  src=\"../../assets/img/img1.jpg\" class=\"img\" /> -->\n    <img *ngIf=\"(errors.indexOf(profile_data.data?.profile_picture) >= 0 ) \"   class=\"img\" src=\"../assets/img/img1.jpg\"\n      alt=\"\">\n    <img *ngIf=\"(errors.indexOf(profile_data.data?.profile_picture) == -1 ) \" class=\"img\"\n      src=\"{{profile_data.data?.profile_picture}}\" alt=\"\">\n    <!-- <img *ngIf=\"is_license_uploaded == true\"   alt=\"\" [src]=\"sanitizer.bypassSecurityTrustUrl(license_image_url)\"\n  > -->\n\n    <div class=\"innerbox1\">\n    <span class=\"txt\" *ngIf=\"profile_data?.data != undefined\">Hello, {{profile_data.data?.firstname+' '}}</span>\n    <!-- <ion-icon name=\"chatbubbles-outline\"  routerLink=\"/connections\"   size=\"large\"></ion-icon> -->\n    </div>\n  </div>\n\n  <div class=\"box1\" routerLink=\"/discovery\">\n    <!-- <img src=\"../../assets/img/Group 8.png\" class=\"img1\" /> -->\n    <div class=\"innerbox\">\n      <p class=\"bgwhite\">Search Settings</p>\n      <img src=\"../../assets/img/Vector 5.png\" class=\"arrow\" />\n    </div>\n    <!-- <img src=\"../../assets/img/Ellipse 4.png\"/> -->\n  </div>\n\n  <div class=\"box2\" routerLink=\"/tabs/profile\">\n    <!-- <img src=\"../../assets/img/Group 21.png\" class=\"img2\" /> -->\n    <div class=\"innerbox\">\n      <p class=\"bgwhite1\">My Profile</p>\n      <img src=\"../../assets/img/CaretRight.png\" class=\"right\">\n    </div>\n  </div>\n  <div class=\"box2\" routerLink=\"/connections\">\n    <!-- <img src=\"../../assets/img/Group 21.png\" class=\"img2\" /> -->\n    <div class=\"innerbox\">\n      <p class=\"bgwhite1\">Matched Profiles</p>\n      <img src=\"../../assets/img/CaretRight.png\" class=\"right\">\n    </div>\n  </div>\n\n  <div class=\"box2\" routerLink=\"/add-step-map\">\n    <!-- <img src=\"../../assets/img/Group 21.png\" class=\"img2\" /> -->\n    <div class=\"innerbox\">\n      <p class=\"bgwhite1\">All Profiles</p>\n      <img src=\"../../assets/img/CaretRight.png\" class=\"right\">\n    </div>\n </div>\n\n  <div class=\"box2\" routerLink=\"/future-connect\">\n    <!-- <img src=\"../../assets/img/Group 12.png\" class=\"img2\" /> -->\n    <div class=\"innerbox\">\n      <p class=\"bgwhite1\">Profiles That Match My Search</p>\n      <img src=\"../../assets/img/CaretRight.png\" class=\"right\">\n    </div>\n  </div>\n  <!-- <div class=\"box2\"   routerLink=\"/places-of-interests\">\n  <img src=\"../../assets/img/Group16.png\" class=\"img2\" />\n  <div class=\"innerbox\" >    \n    <p class=\"bgwhite1\">Places of interest</p>\n    <img src=\"../../assets/img/CaretRight.png\" class=\"right\" >\n  </div>\n</div> -->\n\n  <div class=\"box2\" routerLink=\"/my-trips\">\n    <!-- <img src=\"../../assets/img/Group 15.png\" class=\"img2\" /> -->\n    <div class=\"innerbox\">\n      <p class=\"bgwhite1\">Plan A Trip</p>\n      <img src=\"../../assets/img/CaretRight.png\" class=\"right\">\n    </div>\n  </div>\n\n  <div class=\"box2\"   routerLink=\"/add-step-map2\">\n    <!-- <img src=\"../../assets/img/Group 22.png\" class=\"img2\" /> -->\n    <div class=\"innerbox\">\n      <p class=\"bgwhite1\">View Members Trips</p>\n      <img src=\"../../assets/img/CaretRight.png\" class=\"right\">\n    </div>\n  </div>\n\n  <div class=\"emer\" routerLink=\"/emergency-button\">\n    <!-- <img src=\"../../assets/img/bell.png\" class=\"bell\" /> -->\n    <div class=\"innerbox\">\n      <p class=\"bgwhite\">Emergency</p>\n      <img src=\"../../assets/img/Vector 5.png\" class=\"lastarrow\" />\n    </div>\n\n  </div>\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts-es2015.js.map
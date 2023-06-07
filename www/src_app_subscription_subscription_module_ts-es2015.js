(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_subscription_subscription_module_ts"],{

/***/ 73738:
/*!*************************************************************!*\
  !*** ./src/app/subscription/subscription-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionPageRoutingModule": function() { return /* binding */ SubscriptionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscription.page */ 69888);




const routes = [
    {
        path: '',
        component: _subscription_page__WEBPACK_IMPORTED_MODULE_0__.SubscriptionPage
    }
];
let SubscriptionPageRoutingModule = class SubscriptionPageRoutingModule {
};
SubscriptionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubscriptionPageRoutingModule);



/***/ }),

/***/ 7474:
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionPageModule": function() { return /* binding */ SubscriptionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _subscription_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscription-routing.module */ 73738);
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscription.page */ 69888);







let SubscriptionPageModule = class SubscriptionPageModule {
};
SubscriptionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _subscription_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubscriptionPageRoutingModule
        ],
        declarations: [_subscription_page__WEBPACK_IMPORTED_MODULE_1__.SubscriptionPage]
    })
], SubscriptionPageModule);



/***/ }),

/***/ 69888:
/*!***************************************************!*\
  !*** ./src/app/subscription/subscription.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionPage": function() { return /* binding */ SubscriptionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_subscription_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./subscription.page.html */ 30040);
/* harmony import */ var _subscription_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscription.page.scss */ 23231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-purchase-2/ngx */ 88138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _swipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swipe.service */ 59361);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);










const MONTHLYLVL_KEY = "pro_1011";
let SubscriptionPage = class SubscriptionPage {
    // products = [];
    constructor(userService, platform, iap2, SwipeService) {
        this.userService = userService;
        this.platform = platform;
        this.iap2 = iap2;
        this.SwipeService = SwipeService;
        this.price = 19.99;
        this.month = "month";
        this.monthly = true;
        this.id = "pro_1011";
        this.productIds = ["pro_1011", "pro_1012", "pro_1013"]; // <- Add your product Ids here
        this.platform.ready().then(() => {
            console.log("PLATFORM IS READY==>");
            // this.setup()
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.platform.ready().then(() => {
            this.setup();
        });
    }
    monthlyplan() {
        this.monthly = true;
        this.yearly = false;
        this.quaterly = false;
        this.price = 19.99;
        this.month = "month";
        this.id = "pro_1011";
    }
    quaterlyplan() {
        this.price = 14.99;
        this.month = "Half Yearly";
        this.quaterly = true;
        this.monthly = false;
        this.yearly = false;
        this.id = "pro_1012";
    }
    yearlyplan() {
        this.quaterly = false;
        this.monthly = false;
        this.yearly = true;
        this.price = 9.99;
        this.month = "Year";
        this.id = "pro_1013";
    }
    setup() {
        this.iap2.verbosity = this.iap2.DEBUG;
        this.iap2.register([
            {
                id: "pro_1011",
                type: this.iap2.PAID_SUBSCRIPTION,
                alias: "Monthly Plan",
            },
            {
                id: "pro_1012",
                type: this.iap2.PAID_SUBSCRIPTION,
                alias: "Half Yearly Plan",
            },
            {
                id: "pro_1013",
                type: this.iap2.PAID_SUBSCRIPTION,
                alias: "Annual Plan",
            },
        ]);
        // Register event handlers for the specific product
        this.iap2.when("Monthly Plan").registered((product) => {
            console.log("Registered: " + JSON.stringify(product));
        });
        this.iap2.when("Half Yearly Plan").registered((product) => {
            console.log("Registered: " + JSON.stringify(product));
        });
        this.iap2.when("Annual Plan").registered((product) => {
            console.log("Registered: " + JSON.stringify(product));
        });
        // Updated
        this.iap2.when("Monthly Plan").updated((product) => {
            console.log("Updated" + JSON.stringify(product));
        });
        this.iap2.when("Half Yearly Plan").updated((product) => {
            console.log("Updated" + JSON.stringify(product));
        });
        this.iap2.when("Annual Plan").updated((product) => {
            console.log("Updated" + JSON.stringify(product));
        });
        //APPROVED
        this.iap2.when("Monthly Plan").approved((e) => {
            if (e.state === "approved") {
                // Get the current date
                const currentDate = moment__WEBPACK_IMPORTED_MODULE_6__();
                // Get the date 30 days from now
                const futureDate = moment__WEBPACK_IMPORTED_MODULE_6__().add(30, 'days');
                ;
                const transactionId = e.transaction.id;
                this.storePurchaseData(transactionId, currentDate, futureDate);
            }
        });
        this.iap2.when("Half Yearly Plan").approved((e) => {
            if (e.state === "approved") {
                // Get the current date
                const currentDate = moment__WEBPACK_IMPORTED_MODULE_6__();
                // Get the date 30 days from now
                const futureDate = moment__WEBPACK_IMPORTED_MODULE_6__().add(180, 'days');
                ;
                const transactionId = e.transaction.id;
                this.storePurchaseData(transactionId, currentDate, futureDate);
            }
        });
        this.iap2.when("Annual Plan").approved((e) => {
            if (e.state === "approved") {
                // Get the current date
                const currentDate = moment__WEBPACK_IMPORTED_MODULE_6__();
                // Get the date 30 days from now
                const futureDate = moment__WEBPACK_IMPORTED_MODULE_6__().add(365, 'days');
                ;
                const transactionId = e.transaction.id;
                this.storePurchaseData(transactionId, currentDate, futureDate);
            }
        });
        // User closed the native purchase dialog
        this.iap2.when("Monthly Plan").cancelled((product) => {
            console.error("Purchase was Cancelled");
        });
        this.iap2.when("Half Yearly Plan").cancelled((product) => {
            console.error("Purchase was Cancelled");
        });
        this.iap2.when("Annual Plan").cancelled((product) => {
            console.error("Purchase was Cancelled");
        });
        // Track all store errors
        this.iap2.error((err) => {
            console.error("Store Error " + JSON.stringify(err));
        });
        this.iap2.autoFinishTransactions = true;
        // Refresh the status of in-app products
        this.iap2.refresh();
    }
    checkout(val) {
        if (val == "pro_1011") {
            this.iap2.order("pro_1011").then((data) => {
                console.log("purchase successfull", data);
            })
                .catch((err) => {
                console.log("ERROR in ORDER--->", err);
            });
        }
        if (val == "pro_1012") {
            this.iap2.order("pro_1012").then((data) => {
                console.log("purchase successfull", data);
            })
                .catch((err) => {
                console.log("ERROR in ORDER--->", err);
            });
        }
        if (val == "pro_1013") {
            this.iap2.order("pro_1013").then((data) => {
                console.log("purchase successfull", data);
            })
                .catch((err) => {
                console.log("ERROR in ORDER--->", err);
            });
        }
    }
    storePurchaseData(transactionId, currentDate, futureDate) {
        this.userid = localStorage.getItem('user_id');
        this.detail = {
            "isSubscribe": true,
            "_id": this.userid,
            "transactionId": transactionId,
            "subcription_start_date": currentDate,
            "subcription_end_date": futureDate,
        };
        this.userService.postData(this.detail, _config__WEBPACK_IMPORTED_MODULE_5__.config.API_URL + '/update_profile').subscribe((result) => {
            console.log("results =======>", result);
        });
    }
};
SubscriptionPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _awesome_cordova_plugins_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppPurchase2 },
    { type: _swipe_service__WEBPACK_IMPORTED_MODULE_3__.SwipeService }
];
SubscriptionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-subscription",
        template: _raw_loader_subscription_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_subscription_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubscriptionPage);



/***/ }),

/***/ 23231:
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 0px;\n}\n\n.sub1 {\n  border: 2px solid #6B8EDB;\n  width: 85%;\n  height: 500px;\n  margin-left: 8%;\n  margin-top: 10px;\n  border-top: 4px solid #6B8EDB;\n}\n\n.ml {\n  margin-left: 20px;\n  margin-top: 24px;\n}\n\n.img {\n  width: 20px;\n  height: 20px;\n}\n\n.point {\n  display: flex;\n  align-items: center;\n}\n\n.btn {\n  margin-right: 5%;\n}\n\nion-button {\n  --background:#6B8EDB;\n}\n\n.dis {\n  display: flex;\n  height: 50px;\n  margin-top: 12px;\n  margin-left: 3px;\n  margin-right: 3px;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 8px 9px #aaaaaa;\n  border-radius: 10px;\n}\n\n.plan {\n  margin: 4px;\n  margin-left: 26px;\n  padding: 2px;\n}\n\n.plan1 {\n  font-size: 15px;\n  border-radius: 7px;\n  border: 2px solid #6B8EDB;\n  background-color: #6B8EDB;\n  color: #fff;\n}\n\n.box {\n  background-color: #6B8EDB;\n  border-radius: 7px;\n}\n\n.b1 {\n  border: 2px solid #d1dcf5;\n  border-radius: 7px;\n  width: 90%;\n  height: 60px;\n  margin: 22px;\n  display: flex;\n  justify-content: center;\n  background-color: #d1dcf5;\n  box-shadow: 0px 8px 9px #aaaaaa;\n}\n\n.inn {\n  width: 80px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px;\n  margin-right: 23px;\n}\n\n.inn2 {\n  width: 80px;\n  height: 43px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n  margin-right: 23px;\n  text-align: center;\n  border-radius: 7px;\n}\n\n.inn3 {\n  width: 80px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 9px;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0gsc0JBQUE7RUFDRyx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFBQTtFQUVJLG9CQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNILHVCQUFBO0VBQ0csbUJBQUE7RUFFQSwrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBR0E7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREE7O0FBT0E7RUFFSSxlQUFBO0VBR0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBRUEsV0FBQTtBQVJKOztBQVlJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQVRSOztBQWFJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0QsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUFWUDs7QUFjSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFYUjs7QUFnQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWJSOztBQWlCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBRUEsa0JBQUE7QUFoQlIiLCJmaWxlIjoic3Vic2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG4uc3ViMXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAgIzZCOEVEQjtcbiAgICB3aWR0aDogODUlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDglO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICAjNkI4RURCO1xufVxuLm1se1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG59XG4uaW1ne1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cbi5wb2ludHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYnRue1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICBcblxufVxuXG5pb24tYnV0dG9ue1xuICBcbiAgICAtLWJhY2tncm91bmQ6IzZCOEVEQjtcbn1cbi5kaXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDlweCAjYWFhYWFhO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gYmFja2dyb3VuZDogIzdFOUVFMjtcbiAgICAvLyBvcGFjaXR5OiAuMjtcblxufVxuLnBsYW57XG4vLyB3aWR0aDogOTBweDtcbm1hcmdpbjogNHB4O1xubWFyZ2luLWxlZnQ6MjZweDtcbnBhZGRpbmc6IDJweDtcbi8vIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXG4vLyBwYWRkaW5nOjVweFxufVxuXG4ucGxhbjF7XG4gICAgLy8gd2lkdGg6IDkwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC8vIG1hcmdpbjogMnB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAyNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3JkZXI6MnB4IHNvbGlkICM2QjhFREI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZCOEVEQjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6I2ZmZjtcbiAgICAvLyBoZWlnaHQ6MzBweDtcbiAgICB9XG5cbiAgICAuYm94e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkI4RURCO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIC8vIGJvcmRlcjoycHggc29saWQgcmVkXG4gICAgfVxuXG4gICAgLmIxe1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDFkY2Y1O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICBtYXJnaW46IDIycHg7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkY2Y1O1xuICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggOXB4ICNhYWFhYWE7XG4gICAgLy8gICAgb3BhY2l0eTogLjM7XG4gICAgLy8gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmlubntcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogOXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgICBcbiAgICAgIFxuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgfVxuICAgIC5pbm4ye1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgXG4gICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuXG4gICAgfVxuICAgIC5pbm4ze1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAyNnB4O1xuICAgICAgICBtYXJnaW46IDlweDtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIGJsdWVcbiAgICB9Il19 */");

/***/ }),

/***/ 30040:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscription/subscription.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>subscription</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\">\n    <ion-back-button routerLink=\"/future-connect\" slot=\"start\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-back-button>\n    <ion-title class=\"ion-text-center\">Connect To People </ion-title>\n    <!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n    <ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"header\">\n    <h1 style=\"font-weight: 600\">Our Pricing</h1>\n    <p>Choose the right pricing for you</p>\n  </div>\n\n  <div class=\"sub1\">\n    <!-- <div class=\"dis\" >\n    <div [ngClass]=\"{box : monthly == true } \" >\n      <h3 class=\"plan\"  [ngClass]=\"{plan1 : monthly == true}\" (click)=\" monthlyplan()\"  >Monthly</h3>\n    </div>\n\n    <div [ngClass]=\"{box: quaterly == true}\" >\n      <h3 class=\"plan\" [ngClass]=\"{plan1:quaterly == true }\" (click) =\"quaterlyplan()\" >HalfYearly</h3>\n    </div>\n    <div [ngClass]=\"{box: yearly == true}\" >\n      <h3 class=\"plan\" [ngClass]=\"{plan1 : yearly == true }\"  (click)=\"yearlyplan()\" >Yearly</h3>\n    </div>\n    </div> -->\n    <div class=\"b1\">\n      <div class=\"inn\"  >\n        <p   [ngClass]=\"{plan1: monthly == true}\"  (click)=\"monthlyplan()\"  >Monthly</p>\n      </div>\n      <div class=\"inn2\">\n        <p    [ngClass]=\"{plan1: quaterly == true}\" (click)=\"quaterlyplan()\" >Half Yearly</p>\n      </div>\n      <div class=\"inn3\">\n        <p   [ngClass]=\"{plan1: yearly == true}\" (click)=\"yearlyplan()\" >Yearly</p>\n      </div>\n    </div>\n\n    <div class=\"ml\">\n      <span style=\"font-size: 36px; font-weight: 600\">${{price}}</span\n      ><span   style=\"font-size: 20px; font-weight: 400\">/{{month}}</span>\n      <p style=\"color: #5f6d7e\">\n        Demonstrate empathy maps and finally improve outcomes.\n      </p>\n\n      <div class=\"point\">\n        <img src=\"../../assets/img/CheckboxBase.png\" class=\"img\" />\n        <p style=\"margin-left: 10px\">24/7 support</p>\n      </div>\n      <div class=\"point\">\n        <img src=\"../../assets/img/CheckboxBase.png\" class=\"img\" />\n        <p style=\"margin-left: 10px\">Access to all features</p>\n      </div>\n      <div class=\"point\">\n        <img src=\"../../assets/img/CheckboxBase.png\" class=\"img\" />\n        <p style=\"margin-left: 10px\">Connect to 5 -10 user daily</p>\n      </div>\n      <div>\n        <ion-button expand=\"block\" class=\"btn\" (click)=\"checkout(id)\"\n          >Buy now</ion-button\n        >\n      </div>\n    </div>\n  </div>\n\n  \n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_subscription_subscription_module_ts-es2015.js.map
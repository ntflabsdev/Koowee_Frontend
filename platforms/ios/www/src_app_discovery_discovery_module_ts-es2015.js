(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_discovery_discovery_module_ts"],{

/***/ 45878:
/*!*******************************************************!*\
  !*** ./src/app/discovery/discovery-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoveryPageRoutingModule": function() { return /* binding */ DiscoveryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _discovery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discovery.page */ 74763);




const routes = [
    {
        path: '',
        component: _discovery_page__WEBPACK_IMPORTED_MODULE_0__.DiscoveryPage
    }
];
let DiscoveryPageRoutingModule = class DiscoveryPageRoutingModule {
};
DiscoveryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DiscoveryPageRoutingModule);



/***/ }),

/***/ 66514:
/*!***********************************************!*\
  !*** ./src/app/discovery/discovery.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoveryPageModule": function() { return /* binding */ DiscoveryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _discovery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discovery-routing.module */ 45878);
/* harmony import */ var _discovery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discovery.page */ 74763);
/* harmony import */ var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-geoautocomplete */ 73070);








let DiscoveryPageModule = class DiscoveryPageModule {
};
DiscoveryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _discovery_routing_module__WEBPACK_IMPORTED_MODULE_0__.DiscoveryPageRoutingModule,
            ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()
        ],
        declarations: [_discovery_page__WEBPACK_IMPORTED_MODULE_1__.DiscoveryPage]
    })
], DiscoveryPageModule);



/***/ }),

/***/ 74763:
/*!*********************************************!*\
  !*** ./src/app/discovery/discovery.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoveryPage": function() { return /* binding */ DiscoveryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_discovery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./discovery.page.html */ 99853);
/* harmony import */ var _discovery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discovery.page.scss */ 62394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);








let DiscoveryPage = class DiscoveryPage {
    constructor(router, userService, alertController) {
        this.router = router;
        this.userService = userService;
        this.alertController = alertController;
        this.userSettings = { showCurrentLocation: true };
        this.dis = true;
        this.lower = 10;
        this.Male = false;
        this.Female = false;
        this.Both = false;
        this.greater = 100;
        this.country = localStorage.getItem("country") != undefined
            ? localStorage.getItem("country") == localStorage.getItem("country")
                ? true
                : false
            : false;
        this.show = localStorage.getItem("country") != undefined ? true : false;
        this.Town = localStorage.getItem("Town") != undefined
            ? JSON.parse(localStorage.getItem("Town"))
            : "";
        this.age = localStorage.getItem("age") != undefined
            ? JSON.parse(localStorage.getItem("age"))
            : "";
        this.discovery = localStorage.getItem("discovery") != undefined
            ? localStorage.getItem("discovery") == "true"
                ? true
                : false
            : false;
        this.distance = localStorage.getItem("distance") != undefined
            ? localStorage.getItem("distance")
            : "";
        this.gender = localStorage.getItem("gender") != undefined
            ? localStorage.getItem("gender") == "true"
                ? true
                : false
            : false;
        this.not_my_area = localStorage.getItem("area") != undefined
            ? localStorage.getItem("area") == "true"
                ? true
                : false
            : false;
        this.disablevl = localStorage.getItem("discovery") != undefined
            ? localStorage.getItem("discovery") == "true"
                ? false
                : true
            : true;
        this.countryname = localStorage.getItem("country");
        this.userSettings["inputPlaceholderText"] = "Select your country";
        this.userSettings["showRecentSearch"] = false;
        this.userSettings["inputString"] = this.countryname;
    }
    ngOnInit() {
        const data = localStorage.getItem("gender");
        if (!data) {
            this.Male = false;
            this.Female = false;
            this.Both = false;
        }
        else {
            data === "Male"
                ? (this.Male = true)
                : data === "Female"
                    ? (this.Female = true)
                    : data === "Both"
                        ? (this.Both = true)
                        : null;
        }
    }
    ionViewDidEnter() {
        const temp = localStorage.getItem('discovery');
        if (temp == 'true') {
            this.dis = false;
        }
        else {
            this.dis = true;
        }
    }
    logout() {
        localStorage.removeItem("discovery");
        localStorage.removeItem("distance");
        localStorage.removeItem("age");
        localStorage.removeItem("gender");
        localStorage.removeItem("area");
        localStorage.removeItem("country");
        localStorage.removeItem("user_auth_token");
        localStorage.removeItem("user_auth_id");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_firstname");
        localStorage.removeItem("user_lastname");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_phone");
        this.router.navigate(["/"]);
    }
    DeleteAccount() {
        this.data = localStorage.getItem('user_id');
        console.log("DATA--->", this.data);
        this.presentAlert();
        localStorage.removeItem("discovery");
        localStorage.removeItem("distance");
        localStorage.removeItem("age");
        localStorage.removeItem("gender");
        localStorage.removeItem("area");
        localStorage.removeItem("country");
        localStorage.removeItem("user_auth_token");
        localStorage.removeItem("user_auth_id");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_firstname");
        localStorage.removeItem("user_lastname");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_phone");
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                // subHeader: 'Important message',
                message: 'Are you sure you want to delete your Account!',
                buttons: [
                    {
                        text: "Cancel",
                        handler: () => {
                            this.router.navigate(["/discovery"]);
                        }
                    },
                    {
                        text: "Delete",
                        handler: () => {
                            this.userService.deleteloading();
                            setTimeout(() => {
                                this.userService.postData({}, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + `/deleteuser/${this.data}`).subscribe((result) => {
                                    this.presentAlert2();
                                    console.log("user deleted successfully");
                                    this.userService.stopLoading();
                                });
                            }, 2000);
                            // setTimeout(() => {
                            //   this.userService.stopLoading()
                            // }, 2000);
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    presentAlert2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                // subHeader: 'Important message',
                message: 'your Account account has been deleted successfully',
                buttons: [
                    {
                        text: "OK",
                        handler: () => {
                            this.router.navigate(["/"]);
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    presentAlert3() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                // subHeader: 'Important message',
                message: 'Are you sure you want to LOGOUT!',
                buttons: [
                    {
                        text: "Cancel",
                        handler: () => {
                            this.router.navigate(["/discovery"]);
                        }
                    },
                    {
                        text: "Okay",
                        handler: () => {
                            this.userService.presentLoading();
                            setTimeout(() => {
                                this.logout();
                                this.userService.stopLoading();
                            }, 2000);
                            // setTimeout(() => {
                            //   this.userService.stopLoading()
                            // }, 2000);
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    autoCompleteCallback(data) {
        this.countryname = data.data.formatted_address;
        console.log("country name-->", this.countryname);
        if (this.show === true) {
            localStorage.setItem("country", data.data.formatted_address);
        }
    }
    changeFunctionweight(events) {
        this.lower = events.detail.value.lower;
        this.greater = events.detail.value.upper;
        this.age = { upper: this.greater, lower: this.lower };
        localStorage.setItem("age", JSON.stringify(this.age));
    }
    changedistance(events) {
        console.log("distance value ----->", events.detail.value);
        localStorage.setItem("distance", events.detail.value);
    }
    changediscovery(event) {
        console.log("toggle value ------->", event.detail.checked);
        if (event.detail.checked === false) {
            this.disablevl = true;
            this.dis = true;
            localStorage.setItem("discovery", "false");
        }
        else {
            this.disablevl = false;
            this.dis = false;
            localStorage.setItem("discovery", "true");
        }
    }
    // genderchange(event) {
    //   const gender = event.detail.value;
    //   const genderValue = localStorage.getItem("gender");
    //   console.log("GENDER----->", gender);
    //   console.log("genderValue", genderValue);
    //   if (gender === "Male") {
    //     if (event.detail.checked == true) {
    //       this.Female = false;
    //       this.Both = false;
    //       console.log("2");
    //       localStorage.setItem("gender", gender);
    //     } else {
    //       console.log("3", gender);
    //       if (gender === "Male" || gender === "Both") {
    //         console.log("4");
    //         if (event.detail.checked == false) {
    //           localStorage.removeItem("gender");
    //         }
    //         null;
    //       } else {
    //         console.log("5");
    //         localStorage.removeItem("gender");
    //       }
    //     }
    //   }
    //   if (gender === "Female") {
    //     console.log("female 1");
    //     if (event.detail.checked == true) {
    //       this.Male = false;
    //       this.Both = false;
    //       console.log("female 2");
    //       localStorage.setItem("gender", gender);
    //     } else {
    //       console.log("female 3", gender);
    //       if ((gender === "Female" || gender === "Both") && event.detail.checked == true  ) {
    //           console.log("female 4");
    //         null;
    //       } else {
    //         console.log("female 5");
    //         localStorage.removeItem("gender");
    //       }
    //     }
    //   }
    //   if (gender === "Both") {
    //     console.log("Both 1");
    //     if (event.detail.checked == true) {
    //       this.Male = false;
    //       this.Female = false;
    //       console.log("Both 2");
    //       localStorage.setItem("gender", gender);
    //     } else {
    //       console.log("Both 3", gender);
    //       if ((gender === "Both" || gender === "Both") && event.detail.checked == true  ) {
    //         console.log("Both 4");
    //         null;
    //       } else {
    //         console.log("Both 5");
    //         localStorage.removeItem("gender");
    //       }
    //     }
    //   }
    //   // this.checkTogglePosition(event);
    // }
    genderchange(event) {
        const gender = event.detail.value;
        const checked = event.detail.checked;
        const genderValue = localStorage.getItem("gender");
        console.log("GENDER----->", gender);
        console.log("genderValue", genderValue);
        if (gender === "Male") {
            if (genderValue == null && checked) {
                localStorage.setItem("gender", gender);
            }
            else if (genderValue === "Male" && !checked) {
                localStorage.removeItem("gender");
            }
            else if ((genderValue === "Male" ||
                genderValue === "Female" ||
                genderValue === "Both") &&
                checked) {
                this.Female = false;
                this.Both = false;
                localStorage.setItem("gender", gender);
            }
        }
        if (gender === "Female") {
            if (genderValue == null && checked) {
                localStorage.setItem("gender", gender);
            }
            else if (genderValue === "Female" && !checked) {
                localStorage.removeItem("gender");
            }
            else if ((genderValue === "Male" ||
                genderValue === "Female" ||
                genderValue === "Both") &&
                checked) {
                this.Male = false;
                this.Both = false;
                localStorage.setItem("gender", gender);
            }
        }
        if (gender === "Both") {
            if (genderValue == null && checked) {
                localStorage.setItem("gender", gender);
            }
            else if (genderValue === "Both" && !checked) {
                localStorage.removeItem("gender");
            }
            else if ((genderValue === "Male" ||
                genderValue === "Female" ||
                genderValue === "Both") &&
                checked) {
                this.Male = false;
                this.Female = false;
                localStorage.setItem("gender", gender);
            }
        }
    }
    checkTogglePosition(event) {
        console.log("event in toggle postion", event.detail.checked, event.detail.value);
    }
    checkcountry(event) {
        console.log("COUNTRY ---->", event.detail.checked);
        if (event.detail.checked === false) {
            this.show = false;
            localStorage.removeItem("country");
        }
        else {
            this.show = true;
        }
    }
    checktown(event) {
        console.log("Town---->", event.detail.checked);
        if (event.detail.checked === false) {
            localStorage.setItem("Town", "false");
        }
        else {
            localStorage.setItem("Town", "true");
        }
    }
    arecheck(event) {
        if (event.detail.checked === false) {
            this.dis = false;
            localStorage.setItem("area", "false");
        }
        else {
            this.dis = true;
            localStorage.setItem("area", "true");
        }
    }
    alerts() {
        alert();
    }
};
DiscoveryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
DiscoveryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-discovery",
        template: _raw_loader_discovery_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_discovery_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DiscoveryPage);



/***/ }),

/***/ 62394:
/*!***********************************************!*\
  !*** ./src/app/discovery/discovery.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-color:#fff;\n}\nion-header ion-back-button {\n  font-size: 13px;\n}\nion-header ion-title {\n  font-weight: 500;\n}\nion-header ion-buttons {\n  font-size: 20px;\n  margin-right: 10px;\n}\n[tabhead] {\n  margin-top: 90px;\n  max-width: 280px;\n  padding: 0 10px;\n}\n[tabhead] ion-segment-button {\n  font-size: 14px;\n  text-transform: none;\n  color: #999;\n  letter-spacing: 0;\n  min-width: 1px;\n}\n[tabhead] ion-segment-button.segment-button-checked {\n  color: #000;\n  --indicator-color:transparent;\n}\nion-content {\n  --background: #fcfcfc;\n}\n[fileName] {\n  padding: 20px;\n  margin: 0px 0 0;\n}\n[fileName] ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n[fileName] ul li {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  border-bottom: 1px solid #eee;\n  padding: 20px 0;\n}\n[fileName] ul li h4 {\n  margin: 0;\n  font-size: 15px;\n  max-width: 60%;\n}\n[fileName] ul li h4 p {\n  margin: 6px 0 0;\n  font-size: 11px;\n  color: #999;\n  font-weight: 400;\n}\n[fileName] ul li [iconRelate] {\n  max-width: 30px;\n  min-width: 30px;\n  min-height: 30px;\n  max-height: 30px;\n  margin-right: 10px;\n  border-radius: 100px;\n  background: #777;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[fileName] ul li [iconRelate] ion-icon {\n  color: #fff;\n  font-size: 15px;\n}\n[fileName] ul li [iconRelate][red] {\n  background: #e44646;\n}\n[fileName] ul li [iconRelate][yellow] {\n  background: #d5cd00;\n}\n[fileName] ul li [iconRelate][orange] {\n  background: orange;\n}\n[fileName] ul li [iconRelate][blue] {\n  background: #3880ff;\n}\n[fileName] ul li ion-toggle {\n  margin-left: auto;\n}\n[fileName] ul li[flexCenter] {\n  align-items: center;\n}\n[fileName] label {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #888;\n  margin: 0 15px 7px;\n  display: block;\n}\n[fileName] a {\n  background: #fff;\n  padding: 16px 15px;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #666;\n  margin-bottom: 1px;\n}\n[fileName] a ion-toggle {\n  margin-left: auto;\n}\n[fileName] a span {\n  margin-left: auto;\n  font-size: 11px;\n  color: #666;\n}\n[fileName] a ion-icon {\n  margin-left: auto;\n  color: var(--primary-color);\n  font-size: 22px;\n}\n[fileName] a:nth-child(odd) {\n  background: #fcfcfc;\n}\nion-button[btn-global] {\n  width: 100%;\n}\n[right] {\n  float: right;\n  /* float: left; */\n  margin-left: 233px;\n}\nngxgeo-autocomplete {\n  flex: 1;\n}\n.del {\n  background-color: #e44646;\n}\n.demo {\n  width: 100%;\n}\n.demo #search_places {\n  width: 100%;\n  background: #fff;\n  --background: #fff;\n  padding-left: 10px;\n  --box-shadow: none;\n  --font-size: 12px;\n  padding-right: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  height: 46px;\n  margin: 0 0 2px;\n  border: 1px solid #eee;\n  border-radius: 10px;\n}\n.demo #search_places input {\n  background: #fff;\n  border: 2px solid red;\n}\n.custom-input {\n  color: #000;\n  /* Replace \"red\" with the desired color */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFFQyxhQUFBO0FBREY7QUFHQztFQUNDLG1CQUFBO0FBREY7QUFHQztFQUNJLGVBQUE7QUFETDtBQUdDO0VBQ0MsZ0JBQUE7QUFERjtBQUdDO0VBRUMsZUFBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRkQ7QUFHQztFQUNDLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFERjtBQUVFO0VBQ0MsV0FBQTtFQUNBLDZCQUFBO0FBQUg7QUFJQTtFQUNDLHFCQUFBO0FBREQ7QUFHQTtFQUNDLGFBQUE7RUFDQSxlQUFBO0FBQUQ7QUFDQztFQUNDLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjtBQUFFO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBRUg7QUFERztFQUNDLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdKO0FBRkk7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUlMO0FBREc7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUdKO0FBRkk7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQUlMO0FBRkk7RUFDQyxtQkFBQTtBQUlMO0FBRkk7RUFDQyxtQkFBQTtBQUlMO0FBRkk7RUFDQyxrQkFBQTtBQUlMO0FBRkk7RUFDQyxtQkFBQTtBQUlMO0FBREc7RUFDQyxpQkFBQTtBQUdKO0FBREc7RUFDQyxtQkFBQTtBQUdKO0FBQ0M7RUFDQyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDQztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDQyxpQkFBQTtBQUVIO0FBQUU7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRUg7QUFBRTtFQUNDLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBRUg7QUFBRTtFQUNDLG1CQUFBO0FBRUg7QUFHQTtFQUNJLFdBQUE7QUFBSjtBQUdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0MsT0FBQTtBQUFEO0FBRUE7RUFDQyx5QkFBQTtBQUNEO0FBQ0E7RUFDSSxXQUFBO0FBRUo7QUFEQztFQUNHLFdBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDSCxrQkFBQTtFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUdMO0FBRkU7RUFDQyxnQkFBQTtFQUVBLHFCQUFBO0FBR0g7QUFHQTtFQUNDLFdBQUE7RUFBYSx5Q0FBQTtBQUNkIiwiZmlsZSI6ImRpc2NvdmVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuXHQmOmFmdGVyXG5cdHtcblx0XHRkaXNwbGF5Om5vbmU7XG5cdH1cblx0aW9uLXRvb2xiYXJ7XG5cdFx0LS1ib3JkZXItY29sb3I6I2ZmZjtcblx0fVxuXHRpb24tYmFjay1idXR0b257XG5cdCAgICBmb250LXNpemU6IDEzcHg7XG5cdH1cblx0aW9uLXRpdGxle1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdH1cblx0aW9uLWJ1dHRvbnMgXG5cdHtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHR9XHRcbn1cblt0YWJoZWFkXXtcblx0bWFyZ2luLXRvcDo5MHB4O1xuXHRtYXgtd2lkdGg6IDI4MHB4O1xuXHRwYWRkaW5nOjAgMTBweDtcblx0aW9uLXNlZ21lbnQtYnV0dG9ue1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblx0XHRjb2xvcjogIzk5OTtcblx0XHRsZXR0ZXItc3BhY2luZzogMDtcblx0XHRtaW4td2lkdGg6IDFweDtcblx0XHQmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdC0taW5kaWNhdG9yLWNvbG9yOnRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuaW9uLWNvbnRlbnR7XG5cdC0tYmFja2dyb3VuZDogI2ZjZmNmYztcbn1cbltmaWxlTmFtZV17XG5cdHBhZGRpbmc6MjBweDtcblx0bWFyZ2luOjBweCAwIDA7XG5cdHVse1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0cGFkZGluZzowO1xuXHRcdG1hcmdpbjowO1xuXHRcdGxpe1xuXHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRwYWRkaW5nOjA7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcblx0XHRcdHBhZGRpbmc6MjBweCAwO1xuXHRcdFx0aDR7XG5cdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdG1heC13aWR0aDogNjAlO1xuXHRcdFx0XHRwe1xuXHRcdFx0XHRcdG1hcmdpbjo2cHggMCAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRcdFx0XHRjb2xvcjogIzk5OTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9IFxuXHRcdFx0W2ljb25SZWxhdGVde1xuXHRcdFx0XHRtYXgtd2lkdGg6MzBweDtcblx0XHRcdFx0bWluLXdpZHRoOjMwcHg7XG5cdFx0XHRcdG1pbi1oZWlnaHQ6MzBweDtcblx0XHRcdFx0bWF4LWhlaWdodDozMHB4O1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjNzc3O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0aW9uLWljb257XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdCZbcmVkXXtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNlNDQ2NDY7XG5cdFx0XHRcdH1cblx0XHRcdFx0Jlt5ZWxsb3dde1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNkNWNkMDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0JltvcmFuZ2Vde1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IG9yYW5nZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQmW2JsdWVde1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICMzODgwZmY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlvbi10b2dnbGV7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OmF1dG87XG5cdFx0XHR9XG5cdFx0XHQmW2ZsZXhDZW50ZXJde1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRsYWJlbHtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRjb2xvcjogIzg4ODtcblx0XHRtYXJnaW46MCAxNXB4IDdweDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXHRhe1xuXHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0cGFkZGluZzoxNnB4IDE1cHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRjb2xvcjogIzY2Njtcblx0XHRtYXJnaW4tYm90dG9tOiAxcHg7XG5cdFx0aW9uLXRvZ2dsZXtcblx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdH1cblx0XHRzcGFue1xuXHRcdFx0bWFyZ2luLWxlZnQ6YXV0bztcblx0XHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRcdGNvbG9yOiAjNjY2O1x0XG5cdFx0fVxuXHRcdGlvbi1pY29ue1xuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0fVxuXHRcdCY6bnRoLWNoaWxkKG9kZCl7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuXHRcdH1cblx0fVxufVxuXG5pb24tYnV0dG9uW2J0bi1nbG9iYWxdIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuW3JpZ2h0XSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAyMzNweDtcbn1cblxubmd4Z2VvLWF1dG9jb21wbGV0ZSB7XG5cdGZsZXg6IDE7XG59XG4uZGVse1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNlNDQ2NDYgO1xufVxuLmRlbW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICNzZWFyY2hfcGxhY2VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXHQgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuXHQgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdC0tYm94LXNoYWRvdzogbm9uZTtcblx0ICAgIC0tZm9udC1zaXplOiAxMnB4O1xuXHQgICAgcGFkZGluZy1yaWdodDogMjBweDtcblx0ICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsIC4wNSk7XG5cdCAgICBoZWlnaHQ6IDQ2cHg7XG5cdCAgICBtYXJnaW46IDAgMCAycHg7XG5cdCAgICBib3JkZXI6MXB4IHNvbGlkICNlZWU7XG5cdCAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdGlucHV0e1xuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xuXHRcdFx0Ly8gYmFja2dyb3VuZDogYmx1ZTtcblx0XHRcdGJvcmRlciA6MnB4IHNvbGlkIHJlZFxuXHRcdH1cbiAgfVxuIFxuICB9XG5cbi5jdXN0b20taW5wdXQge1xuXHRjb2xvcjogIzAwMDsgLyogUmVwbGFjZSBcInJlZFwiIHdpdGggdGhlIGRlc2lyZWQgY29sb3IgKi9cbiAgfSJdfQ== */");

/***/ }),

/***/ 99853:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/discovery/discovery.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button routerLink=\"/tabs/profile\" slot=\"start\" (click)=\"alerts();\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\">Discovery </ion-title>\n\n\t<ion-buttons slot=\"end\" routerLink=\"/tabs/home\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header class=\"heder-main ion-no-border\">\n\t<ion-toolbar lines=\"none\">\n\t\t<ion-back-button routerLink=\"/tabs/dashboard\" slot=\"start\"><ion-icon\n\t\t\t\tname=\"arrow-back-outline\"></ion-icon></ion-back-button>\n\t\t<ion-title class=\"ion-text-center\">Set My Search</ion-title>\n\t\t<!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n\t\t<ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div fileName>\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<!-- <span iconRelate blue><ion-icon name=\"globe-outline\"></ion-icon></span> -->\n\t\t\t\t<h4>Set To Private<p>When switched off, you wil not receive any new matches, You can still view and read - chat to\n\t\t\t\t\t\tyour existing friends/matches.</p>\n\t\t\t\t</h4>\n\t\t\t\t<ion-toggle [(ngModel)]=\"discovery\" (ionChange)=\"changediscovery($event)\"></ion-toggle>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<!-- <span iconRelate red><ion-icon name=\"pin\"></ion-icon></span> -->\n\t\t\t\t<h4>Female</h4>\n\t\t\t\t<ion-toggle  [(ngModel)]=\"Female\" [disabled]=\"dis\"\n\t\t\t\t\t(ionChange)=\"genderchange($event)\" value=\"Female\"></ion-toggle>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<!-- <span iconRelate blue><ion-icon name=\"pin\"></ion-icon></span> -->\n\t\t\t\t<h4>Male</h4>\n\t\t\t\t<ion-toggle  [(ngModel)]=\"Male\" [disabled]=\"dis\"\n\t\t\t\t\t(ionChange)=\"genderchange($event)\" value=\"Male\"></ion-toggle>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<!-- <span iconRelate yellow><ion-icon name=\"pin\"></ion-icon></span> -->\n\t\t\t\t<h4>Both</h4>\n\t\t\t\t<ion-toggle  [(ngModel)]=\"Both\"  [disabled]=\"dis\"\n\t\t\t\t\t(ionChange)=\"genderchange($event)\" value=\"Both\"></ion-toggle>\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<!-- <span iconRelate red><ion-icon name=\"pin\"></ion-icon></span> -->\n\t\t\t\t<h4>Country/Nationality</h4>\n\t\t\t\t<ion-toggle  [(ngModel)]=\"country\" [disabled]=\"dis\"\n\t\t\t\t\t(ionChange)=\"checkcountry($event)\"></ion-toggle>\n\t\t\t</li>\n\n            <li *ngIf=\"show\" >\n\t\t\t\t<div class=\"demo\"> \n\t\t\t\t<ngxgeo-autocomplete   placeholder=\"select your country\"\n\t\t\t\tclass=\"custom-input\"\n\t\t\t\t\t[userSettings]=\"userSettings\"\n\t\t\t\t\t(componentCallback)=\"autoCompleteCallback($event)\"></ngxgeo-autocomplete> </div>\n\t\t\t</li>\n\t\t\t<!-- <li>\n\t\t\t\t<span iconRelate blue><ion-icon name=\"pin\"></ion-icon></span>\n\t\t\t\t<h4>Town</h4>\n\t\t\t\t<ion-toggle [(ngmodel)]=\"Town\" (ionchange)=\"chagediscovery($event)\" [disabled]=\"disablevl\"\n\t\t\t\t\t(ionChange)=\"checktown($event)\"></ion-toggle>\n\t\t\t</li> -->\n\n\n\t\t\t<li>\n\t\t\t\t<!-- span iconRelate yellow><ion-icon name=\"notifications\"></ion-icon></span> -->\n\t\t\t\t<h4>Age</h4>\n\t\t\t\t<p>{{lower}}-{{greater}}</p>\n\n\t\t\t\t<ion-range id=\"dual-range\" min=\"10\" max=\"100\" [disabled]=\"dis\" [(ngModel)]=\"age\"\n\t\t\t\t\t(ionChange)=\"changeFunctionweight($event)\" dual-knobs>\n\t\t\t\t</ion-range>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<!-- <span iconRelate red><ion-icon name=\"pin\"></ion-icon></span> -->\n\t\t\t\t<h4>Distance <small>(Km's)</small></h4>\n\t\t\t\t<ion-range min=\"10\" max=\"200\" pin=\"true\" [disabled]=\"dis\" (ionChange)=\"changedistance($event)\"\n\t\t\t\t\t[(ngModel)]=\"distance\">\n\t\t\t\t</ion-range>\n\t\t\t</li>\n\n\n\t\t\t<!-- <li flexCenter>\n  \t\t\t\t<h4>Show</h4>\n    \t\t\t<span right red>Both<ion-icon name=\"chevron-forward\"></ion-icon></span>\n\t\t\t\t<ion-select (ionChange)=\"genderchange($event)\" right [(ngModel)]=\"gender\" okText=\"Okay\" [disabled]=\"disablevl\" cancelText=\"Dismiss\">\n\t\t\t\t\t<ion-select-option value=\"both\">Both</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"female\">Female</ion-select-option>\n\t\t\t\t\t<ion-select-option value=\"male\">Male</ion-select-option>\n\t\t\t\t</ion-select>\n    \t\t</li> -->\n\t\t\t<h6>Matched Trip Profiles Only</h6>\n\t\t\t<li flexCenter>\n\t\t\t\t<!-- <span iconRelate red><ion-icon name=\"bug\"></ion-icon></span> -->\n\t\t\t\t\n\t\t\t\t<h4>\n\t\t\t\t\t<p>Show users that are not in my area, but will be travelling to the same destination as me around\n\t\t\t\t\t\tthe same time.</p>\n\t\t\t\t</h4>\n\t\t\t\t<ion-toggle [(ngModel)]=\"not_my_area\" [disabled]=\"disablevl\"\n\t\t\t\t\t(ionChange)=\"arecheck($event)\"></ion-toggle>\n\t\t\t</li>\n\t\t\t<li flexCenter>\n\t\t\t\t<ion-button href=\"javascript:void(0)\" (click)=\"presentAlert3()\" btn-global>LOGOUT</ion-button>\n\t\t\t</li>\n\t\t\t<li   >\n\t\t\t\t<ion-button href=\"javascript:void(0)\" color=\"danger\" (click)=\"DeleteAccount()\" btn-global >Delete Account</ion-button>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_discovery_discovery_module_ts-es2015.js.map
(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 50159:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": function() { return /* binding */ SignupPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 80771);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 77648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": function() { return /* binding */ SignupPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 50159);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 80771);
/* harmony import */ var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-geoautocomplete */ 73070);








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 80771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": function() { return /* binding */ SignupPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 21355);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 74194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);












let SignupPage = class SignupPage {
    constructor(alertController, userService, router, sanitizer, menuCtrl, fb) {
        this.alertController = alertController;
        this.userService = userService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.menuCtrl = menuCtrl;
        this.fb = fb;
        this.userSettings = { showCurrentLocation: true };
        this.current_date = new Date();
        this.confirmpassworderror = false;
        this.fileupload = "";
        this.is_license_uploaded = false;
        this.license_error = false;
        this.allowedMimes = [
            "image/png",
            "image/jpg",
            "image/jpeg",
            "image/gif",
            "image/webp",
            "image/svg",
        ];
        this.all_countries = [];
        this.errors = ["", null, undefined];
        this.eye_button1 = false;
        this.eye_button2 = false;
        this.userSettings["inputPlaceholderText"] = "Select your country";
        this.userSettings["Color"] = "red";
        this.userSettings["PlaceholderTextcolor"] = "white";
        this.userSettings["showRecentSearch"] = false;
        this.userSettings["showCurrentLocation"] = true;
        this.userSettings = Object.assign({}, this.userSettings);
        /* if(localStorage.vendor_auth_token != undefined)
          {
             this.router.navigate(['/tabs-vendor/home']);
          }*/
        if (localStorage.user_auth_token != undefined) {
            this.router.navigate(["/tabs/dashboard"]);
        }
        this.reg_exp =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    ngOnInit() {
        this.initLoginForm();
        this.getcountries();
    }
    initLoginForm() {
        console.log("INIT FORM IS RUNNING----->");
        this.loginForm = this.fb.group({
            firstname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
            lastname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
            gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
            dob: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email])],
            sdcode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$"),
                ]),
            ],
            confirmpassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])],
            phone: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]+$"),
                ]),
            ],
        });
    }
    autoCompleteCallback(data) {
        this.countryName = data.data.formatted_address;
        this.lat = data.data.geometry.location.lat;
        this.long = data.data.geometry.location.lng;
        console.log("sign Up  lat lng --->", typeof (this.lat), typeof (this.long));
        console.log("sign Up country name --->", this.countryName);
    }
    register() {
        const controls = this.loginForm.controls;
        console.log("------------", controls);
        var frmdata = {
            firstname: controls["firstname"].value,
            lastname: controls["lastname"].value,
            dob: controls['dob'].value,
            gender: controls['gender'].value,
            email: controls["email"].value,
            password: controls["password"].value,
            phone: controls["phone"].value,
            sdcode: controls["sdcode"].value,
            country: this.countryName ? this.countryName : "",
            lat: this.lat ? this.lat : "",
            lon: this.long ? this.long : "",
            cords: {
                type: "Point",
                coordinates: [this.lat, this.long],
            },
        };
        console.log("date value--->", typeof (frmdata.dob));
        console.log("REGISTER FORM DATA---->", JSON.stringify(frmdata));
        if (controls["confirmpassword"].value != "" &&
            controls["confirmpassword"].value != undefined) {
            if (controls["password"].value != controls["confirmpassword"].value) {
                this.confirmpassworderror = true;
                return;
            }
            else {
                this.confirmpassworderror = false;
            }
        }
        /** check form */
        if (this.loginForm.invalid) {
            Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
            console.log("REGISTER FORM DATA---->", JSON.stringify(frmdata));
            console.log("there is an issue in this controller");
            console.log(controls);
            return;
        }
        this.userService.presentLoading();
        this.userService.postData(frmdata, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/registeruser').subscribe((result) => {
            console.log("Data  aaya ki nahi", result);
            this.userService.stopLoading();
            if (result.status == 1) {
                this.userService.presentToast('Your account has been registered successfully.', 'success');
                this.router.navigate(['/']);
            }
            else if (result.status == 2) {
                this.userService.presentToast('Your email has been already exists', 'danger');
            }
            else if (result.status == 3) {
                this.userService.presentToast('Mobile number already exists.', 'danger');
            }
            else if (result.status == 4) {
                this.userService.presentToast(result.data, 'danger');
            }
            else {
                this.userService.presentToast('Unable to send a request please try again later', 'danger');
            }
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Unable to send a request please try again later', 'danger');
        });
    }
    uploadLicense(event, type) {
        this.license_error = false;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var image_file = event.target.files[0];
            image_file.action = type;
            if (self.allowedMimes.indexOf(image_file.type) == -1) {
                this.license_error = true;
            }
            else {
                if (type == "profile") {
                    self.license_file = image_file;
                    self.license_image_url = window.URL.createObjectURL(image_file);
                    self.is_license_uploaded = true;
                }
            }
        }
    }
    isControlHasError(controlName, validationType) {
        const control = this.loginForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    getcountries() {
        // console.log("GET COUNTRY DATA --->",this.userService)
        this.userService
            .getData(_config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + "/get_countries")
            .subscribe((result) => {
            this.all_countries = result.data;
            console.log("COUNTRY DATA--==>", result.data);
        });
    }
    passwordshow(param, cl, att) {
        if (param == "true") {
            if (att == "1") {
                this.eye_button1 = true;
            }
            else {
                this.eye_button2 = true;
            }
            jquery__WEBPACK_IMPORTED_MODULE_4__("." + cl).attr("type", "text");
        }
        else {
            if (att == "1") {
                this.eye_button1 = false;
            }
            else {
                this.eye_button2 = false;
            }
            jquery__WEBPACK_IMPORTED_MODULE_4__("." + cl).attr("type", "password");
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-signup",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.None,
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 74194:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-gradient);\n}\nion-content [loginform] {\n  display: block;\n  width: 100%;\n  padding: 0px 15px;\n}\nion-content [loginform] [logo] {\n  margin-bottom: 30px;\n  margin-top: 30px;\n  width: 100%;\n}\nion-content [loginform] [logo] img {\n  height: 53px;\n}\nion-content [loginform] [login-btn] ion-button {\n  min-height: 56px;\n  --box-shadow: none;\n  font-weight: 500;\n  border-radius: 12px;\n  --border-radius: 12px;\n  overflow: hidden;\n  --background: var(--ion-color-white);\n  --color: var(--ion-color-primary);\n  text-transform: capitalize;\n  font-size: 16px;\n  margin: 15px 0px 0px;\n}\nion-content [loginform] [btn-signup] {\n  color: var(--ion-color-white);\n  font-weight: 500;\n  padding-top: 50px;\n  padding-bottom: 20px;\n  width: 100%;\n}\nion-content [loginform] [btn-signup] p {\n  font-size: 14px;\n  margin: 0px 0px;\n  letter-spacing: 1px;\n}\nion-content [loginform] [btn-signup] p a {\n  color: var(--ion-color-white);\n  font-weight: 500;\n  text-decoration: none;\n}\nion-content [loginform] [form-group] {\n  margin-bottom: 25px;\n}\nion-content [loginform] [form-group] label {\n  font-size: 15px;\n  margin-bottom: 0px;\n  display: block;\n  padding: 0px 0px;\n  color: var(--ion-color-white);\n  font-weight: 400;\n}\nion-content [loginform] [form-group] ion-item {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 0px;\n  --background: transparent;\n  --padding-start: 0px;\n  --min-height: 42px;\n  --inner-padding-end: 0px;\n}\nion-content [loginform] [form-group] ion-item ion-label {\n  margin: 0px;\n}\nion-content [loginform] [form-group] ion-item ion-label ion-icon {\n  color: var(--ion-color-white);\n  font-size: 22px;\n}\nion-content [loginform] [form-group] ion-item ion-input {\n  color: var(--ion-color-white);\n  --placeholder-opacity: 1;\n  font-size: 13px;\n  --padding-start: 0px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n}\nion-content [loginform] [search] {\n  background-color: yellow;\n  width: 100px;\n}\nspan[errormsg] {\n  color: #ffff;\n}\nion-select {\n  --placeholder-opacity: 1;\n  color: #fff;\n}\nion-label.mainevents {\n  pointer-events: all !important;\n}\nbutton.search-icon {\n  position: absolute;\n  right: 0;\n  width: 40px;\n  top: 0;\n  background-color: transparent;\n  border-bottom: 0;\n  border-top: 0;\n  border-right: 0;\n  border-left: 0px solid #ccc;\n  color: #fff;\n}\ninput#search_places {\n  color: white;\n  background: transparent;\n  padding: 0px;\n  border: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n}\n.con {\n  height: 70px;\n}\n.gender {\n  padding: 8px 3px;\n  background: transparent;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n}\nion-datetime {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx1Q0FBQTtBQUNEO0FBQ0M7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0g7QUFDRztFQUNDLFlBQUE7QUFDSjtBQUlHO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBRko7QUFNRTtFQUNDLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUpIO0FBTUc7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSko7QUFNSTtFQUNDLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUpMO0FBU0U7RUFDQyxtQkFBQTtBQVBIO0FBU0c7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBUEo7QUFVRztFQUNDLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQVJKO0FBVUk7RUFDQyxXQUFBO0FBUkw7QUFVSztFQUNDLDZCQUFBO0VBQ0EsZUFBQTtBQVJOO0FBWUk7RUFDQyw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVZMO0FBZUU7RUFDQyx3QkFBQTtFQUNBLFlBQUE7QUFiSDtBQW1CQTtFQUNDLFlBQUE7QUFoQkQ7QUFtQkE7RUFDQyx3QkFBQTtFQUNBLFdBQUE7QUFoQkQ7QUFtQkE7RUFDQyw4QkFBQTtBQWhCRDtBQTBCQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFFQSxXQUFBO0FBeEJEO0FBZ0NBO0VBQ0MsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxpREFBQTtBQTlCRDtBQXdDQTtFQUVDLFlBQUE7QUF0Q0Q7QUF5Q0E7RUFFQyxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaURBQUE7QUF2Q0Q7QUEwQ0E7RUFDSSxXQUFBO0FBdkNKIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50KTtcblxuXHRbbG9naW5mb3JtXSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMHB4IDE1cHg7XG5cblx0XHRbbG9nb10ge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0aW1nIHtcblx0XHRcdFx0aGVpZ2h0OiA1M3B4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFtsb2dpbi1idG5dIHtcblx0XHRcdGlvbi1idXR0b24ge1xuXHRcdFx0XHRtaW4taGVpZ2h0OiA1NnB4O1xuXHRcdFx0XHQtLWJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdC0tYm9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHQtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdG1hcmdpbjogMTVweCAwcHggMHB4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFtidG4tc2lnbnVwXSB7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRwYWRkaW5nLXRvcDogNTBweDtcblx0XHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdG1hcmdpbjogMHB4IDBweDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblxuXHRcdFx0XHRhIHtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFtmb3JtLWdyb3VwXSB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xuXG5cdFx0XHRsYWJlbCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0cGFkZGluZzogMHB4IDBweDtcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHR9XG5cblx0XHRcdGlvbi1pdGVtIHtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRcdFx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcblx0XHRcdFx0LS1taW4taGVpZ2h0OiA0MnB4O1xuXHRcdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cblx0XHRcdFx0aW9uLWxhYmVsIHtcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcblxuXHRcdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlvbi1pbnB1dCB7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0LS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcblx0XHRcdFx0XHQtLXBhZGRpbmctdG9wOiA4cHg7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0W3NlYXJjaF0ge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuXHRcdFx0d2lkdGg6IDEwMHB4O1xuXG5cdFx0fVxuXHR9XG59XG5cbnNwYW5bZXJyb3Jtc2ddIHtcblx0Y29sb3I6ICNmZmZmO1xufVxuXG5pb24tc2VsZWN0IHtcblx0LS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuXHRjb2xvcjogI2ZmZjtcbn1cblxuaW9uLWxhYmVsLm1haW5ldmVudHMge1xuXHRwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5zZWxlY3Rjb3VudHJ5ICB7XG4vLyBcdG5neGdlby1hdXRvY29tcGxldGUge1xuLy8gXHRcdGJhY2tncm91bmQtY29sb3I6IGFxdWEgIWltcG9ydGFudDtcbi8vIFx0fVxuLy8gfVxuLnNlbGVjdGNvdW50cnkge31cblxuYnV0dG9uLnNlYXJjaC1pY29uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMDtcblx0d2lkdGg6IDQwcHg7XG5cdHRvcDogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1ib3R0b206IDA7XG5cdGJvcmRlci10b3A6IDA7XG5cdGJvcmRlci1yaWdodDogMDtcblx0Ym9yZGVyLWxlZnQ6IDBweCBzb2xpZCAjY2NjO1xuXHQvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG4vLyBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuLy8gd2lkdGg6IDEwMHB4O1xuLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG5cbmlucHV0I3NlYXJjaF9wbGFjZXMge1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRwYWRkaW5nOiAwcHg7XG5cdGJvcmRlcjogbm9uZTtcblx0Ly8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXHQvLyBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi8vIG5neGdlby1hdXRvY29tcGxldGV7XG4vLyBcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbi8vIFx0Y29sb3I6IHJlZDtcbi8vIFx0Ym9yZGVyOiAycHggc29saWQgZ3JlZW47XG4vLyBcdHdpZHRoOiAyMDBweDtcbi8vIH1cbi5jb24ge1xuXHQvLyBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXHRoZWlnaHQ6IDcwcHg7XG59XG5cbi5nZW5kZXJ7XG5cdFxuXHRwYWRkaW5nOiA4cHggM3B4O1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ 21355:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header-->\n<ion-content class=\"ion-padding\">\n  <form class=\"kt-form form-login\" [formGroup]=\"loginForm\" autocomplete=\"off\">\n    <div loginform>\n      <div logo class=\"ion-text-center\">\n        <img src=\"assets/img/logo-white.png\" />\n      </div>\n      <div form-group>\n        <label>First Name</label>\n        <ion-item lines=\"none\">\n          <ion-input\n            type=\"text\"\n            formControlName=\"firstname\"\n            placeholder=\"Enter First Name\"\n          ></ion-input>\n          <ion-label>\n            <ion-icon name=\"person-outline\"></ion-icon>\n          </ion-label>\n        </ion-item>\n\n        <span errormsg *ngIf=\"isControlHasError('firstname','required')\">\n          <strong>Please enter your firstname</strong>\n        </span>\n      </div>\n      <div form-group>\n        <label>Last Name</label>\n        <ion-item lines=\"none\">\n          <ion-input\n            type=\"text\"\n            formControlName=\"lastname\"\n            placeholder=\"Enter Last Name\"\n          ></ion-input>\n          <ion-label>\n            <ion-icon name=\"person-outline\"></ion-icon>\n          </ion-label>\n        </ion-item>\n        <span errormsg *ngIf=\"isControlHasError('lastname','required')\">\n          <strong>Please enter your lastname</strong>\n        </span>\n      </div>\n\n      <div form-group>\n        <label>Date of Birth</label>\n        <ion-item>\n          <ion-datetime\n            formControlName=\"dob\"\n            placeholder=\"Date of Birth\"\n            displayFormat=\"YYYY-MM-DD\"\n            max=\"{{current_date| date: 'yyyy-MM-dd'}}\"\n          ></ion-datetime>\n        </ion-item>\n      </div>\n\n\t  <div form-group>\n\t\t<label  style=\"color: #fff;\">Gender</label>\n\t\n\t\t\t<ion-select  class=\"gender\" formControlName=\"gender\" placeholder=\"Select Gender\">\n      <!-- <ion-select-option value= 'select Gender' > Select Gender  </ion-select-option> -->\n\t\t\t\t<ion-select-option value=\"Male\"  >Male</ion-select-option>\n\t\t\t\t<ion-select-option value=\"Female\">Female</ion-select-option>\n\t\t\t</ion-select>\n\t\n\t\t\n\t\t<span errormsg *ngIf=\"isControlHasError('gender','required')\">\n\t\t <strong>Please select your gender</strong>\n\t\t</span>\n\t  </div>\t\n\n   <!-- <div  from-group class=\"gender\"> \n\t<ion-radio-group>\n\t\t<label style=\"color: #fff;\">Gender</label>\n\t\t<ion-item  style=\"background-color: rgb(87,129,215);\">  \n\t\t<label>Male </label>\n\t\t<ion-radio value=\"Male\"> Male </ion-radio>\n\t\t<label>Female</label>\n\t\t<ion-radio value=\"Female\"> Female </ion-radio>\n\t</ion-item>\n\t  </ion-radio-group>\n\t\n   </div> -->\n\t  \n  \n            \n\n          \n     \n\n      \n\n      <div form-group>\n        <label>Email</label>\n        <ion-item lines=\"none\">\n          <ion-input\n            type=\"email\"\n            formControlName=\"email\"\n            placeholder=\"Enter Email\"\n          ></ion-input>\n          <ion-label>\n            <ion-icon name=\"checkmark-outline\"></ion-icon>\n          </ion-label>\n        </ion-item>\n        <span errormsg *ngIf=\"isControlHasError('email','required')\">\n          <strong>Please enter your email</strong>\n        </span>\n        <span errormsg *ngIf=\"isControlHasError('email','email')\">\n          <strong>Please enter valid email address</strong>\n        </span>\n      </div>\n\n      <!-- <div form-group>\n\t<label>Country</label>\n\t<ion-item >\n\t\t<ion-select okText =\"confirm\" formcontrolName =\"country\" placeholder =\"Enter your country\">\n\t\t\t<ion-select-option *ngFor=\"let country of all_countries\" value =\"{{country.name}}\" >{{country.name}}\n\n\t\t\t</ion-select-option>\n\t\t</ion-select>\n\t</ion-item>\n\t<span errormsg *ngIf =\"isControlHasError('country','required')\" >\n      <strong>please select your country</strong>\n\t</span>\n\n</div> -->\n      <div form-group class=\"con\">\n        <label>Country</label>\n\n        <div class=\"selectcountry\">\n          <ngxgeo-autocomplete\n            id=\"search_places\"\n            placeholder=\"select your country\"\n            [userSettings]=\"userSettings\"\n            (componentCallback)=\"autoCompleteCallback($event)\"\n          ></ngxgeo-autocomplete>\n        </div>\n        <!-- <span errormsg *ngIf=\"isControlHasError('country','required')\">\n\t\t\t\t\t<strong>please select your country</strong>\n\t\t\t\t</span> -->\n      </div>\n      <div form-group>\n        <label>Phone Number</label>\n\n        <ion-row>\n          <ion-col size=\"5\">\n            <ion-item lines=\"none\">\n              <ion-select\n                okText=\"Confirm\"\n                formControlName=\"sdcode\"\n                placeholder=\"+65\"\n              >\n                <ion-select-option\n                  *ngFor=\"let country of all_countries\"\n                  value=\"{{country.phoneCode}}\"                          \n                  >{{country.sortname}}\n                  (+{{country.phoneCode}})</ion-select-option\n                >\n              </ion-select>\n            </ion-item>\n            <span errormsg *ngIf=\"isControlHasError('sdcode','required')\">\n              <strong>Please select your sdcode</strong>\n            </span>\n          </ion-col>\n\n          <ion-col size=\"7\">\n            <ion-item lines=\"none\">\n              <ion-input\n                type=\"text\"\n                formControlName=\"phone\"\n                placeholder=\"Enter Phone No.\"\n              ></ion-input>\n              <ion-label>\n                <ion-icon name=\"call-outline\"></ion-icon>\n              </ion-label>\n            </ion-item>\n            <span errormsg *ngIf=\"isControlHasError('phone','required')\">\n              <strong>Please enter your phone number</strong>\n            </span>\n\n            <span errormsg *ngIf=\"isControlHasError('phone','pattern')\">\n              <strong>Please enter correct phone number</strong>\n            </span>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div form-group>\n        <label\n          >Password\n          <p class=\"small-ts\">\n            (Note: Password must be between 8 and 12 characters with at least\n            one uppercase letter, lowercase letter and one digit.)\n          </p>\n        </label>\n        <ion-item lines=\"none\">\n          <ion-input\n            type=\"password\"\n            formControlName=\"password\"\n            class=\"password1\"\n            placeholder=\"Enter Password\"\n          ></ion-input>\n          <ion-label class=\"mainevents\">\n            <ion-icon\n              viewpwd\n              *ngIf=\"eye_button1 == false\"\n              (click)=\"passwordshow('true','password1','1');\"\n              name=\"eye-off-outline\"\n            ></ion-icon>\n            <ion-icon\n              viewpwdblue\n              *ngIf=\"eye_button1 == true\"\n              (click)=\"passwordshow('false','password1','1');\"\n              name=\"eye\"\n            ></ion-icon>\n          </ion-label>\n        </ion-item>\n        <span errormsg *ngIf=\"isControlHasError('password','required')\">\n          <strong>Please enter your password</strong>\n        </span>\n        <span errormsg *ngIf=\"isControlHasError('password','pattern')\">\n          <strong>Please enter password in proper format</strong>\n        </span>\n      </div>\n      <div form-group>\n        <label>Confirm Password</label>\n        <ion-item lines=\"none\">\n          <ion-input\n            type=\"password\"\n            formControlName=\"confirmpassword\"\n            class=\"password2\"\n            placeholder=\"Enter Confirm Password\"\n          ></ion-input>\n          <ion-label class=\"mainevents\">\n            <ion-icon\n              viewpwd\n              *ngIf=\"eye_button2 == false\"\n              (click)=\"passwordshow('true','password2','2');\"\n              name=\"eye-off-outline\"\n            ></ion-icon>\n            <ion-icon\n              viewpwdblue\n              *ngIf=\"eye_button2 == true\"\n              (click)=\"passwordshow('false','password2','2');\"\n              name=\"eye\"\n            ></ion-icon>\n          </ion-label>\n        </ion-item>\n        <span errormsg *ngIf=\"isControlHasError('confirmpassword','required')\">\n          <strong>Please enter confirmpassword</strong>\n        </span>\n        <span\n          errormsg\n          *ngIf=\"!isControlHasError('confirmpassword','required') && confirmpassworderror == true\"\n        >\n          <strong>Confirm password doesn't match with password.</strong>\n        </span>\n      </div>\n      <div login-btn>\n        <ion-row>\n          <ion-col size=\"10\" offset=\"1\">\n            <!-- <ion-button routerLink=\"/tabs/home\" expand=\"full\">\n\t\t\tSign Up\n\t\t\t</ion-button> -->\n            <ion-button (click)=\"register()\" expand=\"full\">\n              Sign Up\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div btn-signup class=\"ion-text-center\">\n        <p>\n          Already have an account?\n          <a routerLink=\"/\" href=\"javascript:void(0)\">Login</a>\n        </p>\n      </div>\n    </div>\n  </form>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts-es2015.js.map
(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);









let LoginPage = class LoginPage {
    constructor(userService, router, fb) {
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.is_submit = false;
        this.is_mobile_app = _config__WEBPACK_IMPORTED_MODULE_3__.config.IS_MOBILE_APP;
        this.errors = ['', null, undefined];
        this.eye_button = false;
        if (localStorage.user_auth_token != undefined) {
            this.router.navigate(['/tabs/dashboard']);
        }
    }
    ngOnInit() {
        this.initLoginForm();
    }
    initLoginForm() {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email,
                ])
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
                ])
            ]
        });
    }
    login() {
        this.is_submit = true;
        const controls = this.loginForm.controls;
        /** check form */
        if (this.loginForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            if ((controls.email.status == "VALID") && controls.password.status == "VALID") {
            }
            else {
                return;
            }
        }
        const dict = {
            email: controls['email'].value,
            password: controls['password'].value
        };
        this.userService.presentLoading();
        this.userService.postData(dict, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/loginuser').subscribe((result) => {
            console.log("LOGIN api ---->", result);
            this.userService.stopLoading();
            if (result.status == 1) {
                this.is_submit = false;
                this.userService.presentToast('Your account has been logged in successfully.', 'success');
                var userId = this.userService.encryptData(result.data._id, _config__WEBPACK_IMPORTED_MODULE_3__.config.ENC_SALT);
                localStorage.setItem('user_auth_token', userId.toString());
                localStorage.setItem('user_auth_id', result.data._id);
                localStorage.setItem('user_id', result.data._id);
                localStorage.setItem('user_firstname', result.data.firstname);
                localStorage.setItem('user_lastname', result.data.lastname);
                localStorage.setItem('user_email', result.data.email);
                localStorage.setItem('user_phone', result.data.phone);
                this.router.navigate(['/dashboard']);
            }
            else if (result.status == 3) {
                this.userService.presentToast('Your account has been blocked by admin', 'danger');
            }
            else if (result.status == 2) {
                this.userService.presentToast("Your credentials do not match our record.", 'danger');
            }
            else {
                this.userService.presentToast('Error logging in! Try later', 'danger');
            }
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
        });
    }
    isControlHasError(controlName, validationType) {
        const control = this.loginForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    passwordshow(param) {
        if (param == 'true') {
            this.eye_button = true;
            jquery__WEBPACK_IMPORTED_MODULE_4__('.password').attr('type', 'text');
        }
        else {
            this.eye_button = false;
            jquery__WEBPACK_IMPORTED_MODULE_4__('.password').attr('type', 'password');
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-gradient);\n}\nion-content [loginform] {\n  display: flex;\n  width: 100%;\n  padding: 0px 15px;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n}\nion-content [loginform] [logo] {\n  margin-bottom: 30px;\n  margin-top: 30px;\n  width: 100%;\n}\nion-content [loginform] [logo] img {\n  height: 53px;\n}\nion-content [loginform] [login-btn] ion-button {\n  min-height: 56px;\n  --box-shadow: none;\n  font-weight: 500;\n  border-radius: 12px;\n  --border-radius: 12px;\n  overflow: hidden;\n  --background: var(--ion-color-white);\n  --color: var(--ion-color-primary);\n  text-transform: capitalize;\n  font-size: 16px;\n  margin: 15px 0px 0px;\n}\nion-content [loginform] [btn-signup] {\n  color: var(--ion-color-white);\n  font-weight: 500;\n  padding-top: 50px;\n  padding-bottom: 20px;\n  width: 100%;\n}\nion-content [loginform] [btn-signup] p {\n  font-size: 14px;\n  margin: 0px 0px;\n  letter-spacing: 1px;\n}\nion-content [loginform] [btn-signup] p a {\n  color: var(--ion-color-white);\n  font-weight: 500;\n  text-decoration: none;\n}\nion-content [loginform] [form-login] {\n  width: 100%;\n}\nion-content [loginform] [form-login] [form-group] {\n  margin-bottom: 25px;\n}\nion-content [loginform] [form-login] [form-group][forgot] a {\n  color: var(--ion-color-white);\n  font-weight: 400;\n  text-decoration: none;\n  font-size: 14px;\n}\nion-content [loginform] [form-login] [form-group] label {\n  font-size: 15px;\n  margin-bottom: 0px;\n  display: block;\n  padding: 0px 0px;\n  color: var(--ion-color-white);\n  font-weight: 400;\n}\nion-content [loginform] [form-login] [form-group] ion-item {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 0px;\n  --background: transparent;\n  --padding-start: 0px;\n  --min-height: 42px;\n  --inner-padding-end: 0px;\n}\nion-content [loginform] [form-login] [form-group] ion-item ion-label {\n  margin: 0px;\n}\nion-content [loginform] [form-login] [form-group] ion-item ion-label ion-icon {\n  color: var(--ion-color-white);\n  font-size: 22px;\n}\nion-content [loginform] [form-login] [form-group] ion-item ion-input {\n  color: var(--ion-color-white);\n  --placeholder-opacity:1;\n  font-size: 13px;\n  --padding-start: 0px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n}\nion-content [loginform] [form-login] [form-group] ion-item [viewpwd] {\n  color: var(--ion-color-dark);\n  opacity: 0.5;\n  font-size: 14px;\n}\nion-content [loginform] [form-login] [form-group] ion-item [viewpwdblue] {\n  color: var(--ion-color-primary);\n  opacity: 1.5;\n  font-size: 14px;\n}\nspan[errormsg] {\n  color: #ffff;\n}\nion-label.mainevents {\n  pointer-events: all !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVDQUFBO0FBQUo7QUFDQztFQUVDLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUFGO0FBQ0U7RUFFQyxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFIO0FBQ0c7RUFFQyxZQUFBO0FBQUo7QUFLRztFQUVDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUpKO0FBT0U7RUFFQyw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFOSDtBQU9HO0VBRUksZUFBQTtFQUNILGVBQUE7RUFDRyxtQkFBQTtBQU5QO0FBT0k7RUFFQyw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFOTDtBQVVFO0VBRUksV0FBQTtBQVROO0FBVUc7RUFFQyxtQkFBQTtBQVRKO0FBWUs7RUFFQyw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBWE47QUFjSTtFQUVDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFiTDtBQWdCSTtFQUVDLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQWZMO0FBZ0JLO0VBRUMsV0FBQTtBQWZOO0FBZ0JNO0VBRUMsNkJBQUE7RUFDQSxlQUFBO0FBZlA7QUFrQks7RUFFQyw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQWpCTjtBQW1CSztFQUVBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFsQkw7QUFvQks7RUFFQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBbkJMO0FBMkJBO0VBQ0ksWUFBQTtBQXhCSjtBQTJCQTtFQUNFLDhCQUFBO0FBeEJGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50XG57XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQpO1xuXHRbbG9naW5mb3JtXVxuXHR7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nOiAwcHggMTVweDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0W2xvZ29dXG5cdFx0e1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0aW1nXG5cdFx0XHR7XG5cdFx0XHRcdGhlaWdodDogNTNweDsgXG5cdFx0XHR9XG5cdFx0fVxuXHRcdFtsb2dpbi1idG5dXG5cdFx0e1xuXHRcdFx0aW9uLWJ1dHRvblxuXHRcdFx0eyBcblx0XHRcdFx0bWluLWhlaWdodDogNTZweDtcblx0XHRcdFx0LS1ib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0LS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRtYXJnaW46IDE1cHggMHB4IDBweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0W2J0bi1zaWdudXBdXG5cdFx0e1xuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0cGFkZGluZy10b3A6IDUwcHg7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRwXG5cdFx0XHR7XG5cdFx0XHQgICAgZm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRtYXJnaW46IDBweCAwcHg7XG5cdFx0XHQgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcdFxuXHRcdFx0XHRhXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0W2Zvcm0tbG9naW5dXG5cdFx0e1xuXHRcdCAgICB3aWR0aDoxMDAlO1xuXHRcdFx0W2Zvcm0tZ3JvdXBdXG5cdFx0XHR7ICAgIFxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xuXHRcdFx0XHQmW2ZvcmdvdF1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsYWJlbCBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0cGFkZGluZzogMHB4IDBweDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW9uLWl0ZW1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRcdFx0XHRcdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG5cdFx0XHRcdFx0LS1taW4taGVpZ2h0OiA0MnB4O1xuXHRcdFx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHRcdFx0XHRpb24tbGFiZWwgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdFx0XHRpb24taWNvblxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdFx0XHR9XHRcdFx0XG5cdFx0XHRcdFx0aW9uLWlucHV0XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y29sb3I6dmFyKCAtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0XHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6MTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMHB4OyBcblx0XHRcdFx0XHRcdC0tcGFkZGluZy10b3A6IDhweDtcblx0XHRcdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDhweDsgICBcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRbdmlld3B3ZF1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXHRcdFx0XHRcdG9wYWNpdHk6MC41O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0W3ZpZXdwd2RibHVlXVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0XHRcdFx0b3BhY2l0eToxLjU7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5zcGFuW2Vycm9ybXNnXSB7XG4gICAgY29sb3I6ICNmZmZmO1xufVxuXG5pb24tbGFiZWwubWFpbmV2ZW50cyB7XG4gIHBvaW50ZXItZXZlbnRzOmFsbCFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header-->\n<ion-content  class=\"ion-padding\">\n\t<form class=\"kt-form form-login\" [formGroup]=\"loginForm\" autocomplete=\"off\">\n\t<div loginform>\n\t\t<div logo  class=\"ion-text-center\">\n\t\t  <img src=\"assets/img/logo-white.png\"/>\n\t\t</div>\n\t\t<div form-login>\n\t\t\t<div form-group>\n\t\t\t\t<label>Email</label>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-input formControlName=\"email\" type=\"email\"  placeholder=\"Enter Email\"></ion-input>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<ion-icon name=\"checkmark-outline\"></ion-icon>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\n\t\t\t<span errormsg *ngIf=\"isControlHasError('email','required')\">\n\t\t\t<strong>Email address is required</strong>\n\t\t\t</span>\n\t\t\t<span errormsg *ngIf=\"isControlHasError('email','email')\">\n\t\t\t<strong>Please enter a valid email address</strong>\n\t\t\t</span>\n\n\t\t\t</div>\n\t\t\t<div form-group>\n\t\t\t\t<label>Password</label>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-input type=\"password\" formControlName=\"password\" class=\"password\" placeholder=\"Enter Password\"></ion-input>\n\t\t\t\t\t<ion-label class=\"mainevents\">\n\t\t\t\t\t\t<!-- <ion-icon name=\"eye\"></ion-icon> -->\n\t\t\t\t\t\t<ion-icon viewpwd *ngIf=\"eye_button == false\" (click)=\"passwordshow('true');\" name=\"eye-off-outline\"></ion-icon>\n\t\t\t\t\t\t<ion-icon viewpwdblue *ngIf=\"eye_button == true\"  (click)=\"passwordshow('false');\"  name=\"eye\"></ion-icon>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<span errormsg *ngIf=\"isControlHasError('password','required')\">\n\t\t\t\t<strong>Your password has been required</strong>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div form-group forgot class=\"ion-text-right\">\n\t\t\t\t<a routerLink=\"/forgot-password\" href=\"javascript:void(0)\">Forgot Your Password?</a>\n\t\t\t</div>\n\t\t\t<div login-btn>\n\t\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"10\" offset=\"1\">\n\t\t\t\t<!-- <ion-button routerLink=\"/tabs/home\" expand=\"full\">\n\t\t\t\tLogin\n\t\t\t\t</ion-button> -->\n\t\t\t\t<ion-button (click)=\"login()\" expand=\"full\">\n\t\t\t\tLogin\n\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</div>\n\t\t<div btn-signup class=\"ion-text-center\">\n\t\t\t<p>Don't have an account? <a routerLink=\"/signup\" href=\"javascript:void(0)\">Sign Up</a></p>\n\t\t</div>\n\t</div>\n</form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map
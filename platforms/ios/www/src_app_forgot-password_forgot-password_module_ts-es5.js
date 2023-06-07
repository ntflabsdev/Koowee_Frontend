(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_forgot-password_forgot-password_module_ts"], {
    /***/
    53673: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPageRoutingModule": function ForgotPasswordPageRoutingModule() {
          return (
            /* binding */
            _ForgotPasswordPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password.page */
      72327);

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
      }];

      var _ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      _ForgotPasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    17157: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPageModule": function ForgotPasswordPageModule() {
          return (
            /* binding */
            _ForgotPasswordPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      53673);
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot-password.page */
      72327);

      var _ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      _ForgotPasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
      })], _ForgotPasswordPageModule);
      /***/
    },

    /***/
    72327: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPage": function ForgotPasswordPage() {
          return (
            /* binding */
            _ForgotPasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./forgot-password.page.html */
      82646);
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      76249);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      9709);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../config */
      39698);

      var _ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(userService, router, fb) {
          _classCallCheck(this, ForgotPasswordPage);

          this.userService = userService;
          this.router = router;
          this.fb = fb;
          this.is_submit = false;
          this.is_mobile_app = _config__WEBPACK_IMPORTED_MODULE_3__.config.IS_MOBILE_APP;
          this.errors = ['', null, undefined];
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initLoginForm();
          }
        }, {
          key: "initLoginForm",
          value: function initLoginForm() {
            this.loginForm = this.fb.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email])]
            });
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            this.is_submit = true;
            var controls = this.loginForm.controls;
            /** check form */

            if (this.loginForm.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              return;
            }

            var dict = {
              email: controls['email'].value
            };
            this.userService.presentLoading();
            this.userService.postData(dict, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/forgetpassword').subscribe(function (result) {
              _this.userService.stopLoading();

              if (result.status == 1) {
                _this.is_submit = false;

                _this.userService.presentToast('Email has been sent to your email address, please check.', 'success');

                _this.router.navigate(['/reset-password/' + controls['email'].value]);
              } else if (result.status == 3) {
                _this.userService.presentToast('Your account has been blocked by admin', 'danger');
              } else if (result.status == 2) {
                _this.userService.presentToast("Your credentials do not match our record.", 'danger');
              } else {
                _this.userService.presentToast('Error logging in! Try later', 'danger');
              }
            }, function (err) {
              _this.userService.stopLoading();

              _this.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "isControlHasError",
          value: function isControlHasError(controlName, validationType) {
            var control = this.loginForm.controls[controlName];

            if (!control) {
              return false;
            }

            var result = control.hasError(validationType) && (control.dirty || control.touched);
            return result;
          }
        }]);

        return ForgotPasswordPage;
      }();

      _ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _ForgotPasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ForgotPasswordPage);
      /***/
    },

    /***/
    76249: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-gradient);\n}\nion-content [loginform] {\n  display: flex;\n  width: 100%;\n  padding: 0px 15px;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n}\nion-content [loginform] [logo] {\n  margin-bottom: 30px;\n  margin-top: 30px;\n  width: 100%;\n}\nion-content [loginform] [logo] img {\n  height: 53px;\n}\nion-content [loginform] [login-btn] ion-button {\n  min-height: 56px;\n  --box-shadow: none;\n  font-weight: 500;\n  border-radius: 12px;\n  --border-radius: 12px;\n  overflow: hidden;\n  --background: var(--ion-color-white);\n  --color: var(--ion-color-primary);\n  text-transform: capitalize;\n  font-size: 16px;\n  margin: 15px 0px 0px;\n}\nion-content [loginform] [btn-signup] {\n  color: var(--ion-color-white);\n  font-weight: 500;\n  padding-top: 50px;\n  padding-bottom: 20px;\n  width: 100%;\n}\nion-content [loginform] [btn-signup] p {\n  font-size: 14px;\n  margin: 0px 0px;\n  letter-spacing: 1px;\n}\nion-content [loginform] [btn-signup] p a {\n  color: var(--ion-color-white);\n  font-weight: 500;\n  text-decoration: none;\n}\nion-content [loginform] [form-login] {\n  width: 100%;\n}\nion-content [loginform] [form-login] [form-group] {\n  margin-bottom: 25px;\n}\nion-content [loginform] [form-login] [form-group][forgot] a {\n  color: var(--ion-color-white);\n  font-weight: 400;\n  text-decoration: none;\n  font-size: 14px;\n}\nion-content [loginform] [form-login] [form-group] label {\n  font-size: 15px;\n  margin-bottom: 0px;\n  display: block;\n  padding: 0px 0px;\n  color: var(--ion-color-white);\n  font-weight: 400;\n}\nion-content [loginform] [form-login] [form-group] ion-item {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 0px;\n  --background: transparent;\n  --padding-start: 0px;\n  --min-height: 42px;\n  --inner-padding-end: 0px;\n}\nion-content [loginform] [form-login] [form-group] ion-item ion-label {\n  margin: 0px;\n}\nion-content [loginform] [form-login] [form-group] ion-item ion-label ion-icon {\n  color: var(--ion-color-white);\n  font-size: 22px;\n}\nion-content [loginform] [form-login] [form-group] ion-item ion-input {\n  color: var(--ion-color-white);\n  --placeholder-opacity:1;\n  font-size: 13px;\n  --padding-start: 0px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n}\nspan[errormsg] {\n  color: #ffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx1Q0FBQTtBQUFKO0FBQ0M7RUFFQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFBRjtBQUNFO0VBRUMsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFBSDtBQUNHO0VBRUMsWUFBQTtBQUFKO0FBS0c7RUFFQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFKSjtBQU9FO0VBRUMsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBTkg7QUFPRztFQUVJLGVBQUE7RUFDSCxlQUFBO0VBQ0csbUJBQUE7QUFOUDtBQU9JO0VBRUMsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTkw7QUFVRTtFQUVJLFdBQUE7QUFUTjtBQVVHO0VBRUMsbUJBQUE7QUFUSjtBQVlLO0VBRUMsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVhOO0FBY0k7RUFFQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBYkw7QUFnQkk7RUFFQyxpREFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFmTDtBQWdCSztFQUVDLFdBQUE7QUFmTjtBQWdCTTtFQUVDLDZCQUFBO0VBQ0EsZUFBQTtBQWZQO0FBa0JLO0VBRUMsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFqQk47QUF5QkE7RUFDSyxZQUFBO0FBdEJMIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudFxue1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50KTtcblx0W2xvZ2luZm9ybV1cblx0e1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMHB4IDE1cHg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFtsb2dvXVxuXHRcdHtcblx0XHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdFx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdGltZ1xuXHRcdFx0e1xuXHRcdFx0XHRoZWlnaHQ6IDUzcHg7IFxuXHRcdFx0fVxuXHRcdH1cblx0XHRbbG9naW4tYnRuXVxuXHRcdHtcblx0XHRcdGlvbi1idXR0b25cblx0XHRcdHsgXG5cdFx0XHRcdG1pbi1oZWlnaHQ6IDU2cHg7XG5cdFx0XHRcdC0tYm94LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0LS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0bWFyZ2luOiAxNXB4IDBweCAwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFtidG4tc2lnbnVwXVxuXHRcdHtcblx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdHBhZGRpbmctdG9wOiA1MHB4O1xuXHRcdFx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0cFxuXHRcdFx0e1xuXHRcdFx0ICAgIGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0bWFyZ2luOiAwcHggMHB4O1xuXHRcdFx0ICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHRcblx0XHRcdFx0YVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFtmb3JtLWxvZ2luXVxuXHRcdHtcblx0XHQgICAgd2lkdGg6MTAwJTtcblx0XHRcdFtmb3JtLWdyb3VwXVxuXHRcdFx0eyAgICBcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjVweDtcblx0XHRcdFx0Jltmb3Jnb3RdXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGFiZWwgXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDBweCAwcHg7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlvbi1pdGVtXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDBweDtcblx0XHRcdFx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMHB4O1xuXHRcdFx0XHRcdC0tbWluLWhlaWdodDogNDJweDtcblx0XHRcdFx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdFx0XHRcdFx0aW9uLWxhYmVsIFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRcdFx0aW9uLWljb25cblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHRcdFx0fVx0XHRcdFxuXHRcdFx0XHRcdGlvbi1pbnB1dFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNvbG9yOnZhciggLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0LS1wbGFjZWhvbGRlci1vcGFjaXR5OjE7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDBweDsgXG5cdFx0XHRcdFx0XHQtLXBhZGRpbmctdG9wOiA4cHg7XG5cdFx0XHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiA4cHg7ICAgXHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuc3BhbltlcnJvcm1zZ10ge1xuICAgICBjb2xvcjogI2ZmZmY7XG59Il19 */";
      /***/
    },

    /***/
    82646: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header-->\n<ion-content  class=\"ion-padding\">\n\t<form class=\"kt-form form-login\" [formGroup]=\"loginForm\" autocomplete=\"off\">\n\t<div loginform>\n\t\t<div logo  class=\"ion-text-center\">\n\t\t  <img src=\"assets/img/logo-white.png\"/>\n\t\t</div>\n\t\t<div form-login>\n\t\t\t<div form-group>\n\t\t\t\t<label>Email</label>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-input formControlName=\"email\" type=\"email\"  placeholder=\"Enter Email\"></ion-input>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<ion-icon name=\"checkmark-outline\"></ion-icon>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t\t<span errormsg *ngIf=\"isControlHasError('email','required')\">\n\t\t\t\t<strong>Email address is required</strong>\n\t\t\t\t</span>\n\t\t\t\t<span errormsg *ngIf=\"isControlHasError('email','email')\">\n\t\t\t\t<strong>Please enter a valid email address</strong>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div login-btn>\n\t\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"10\" offset=\"1\">\n\t\t\t\t<ion-button (click)=\"login()\" expand=\"full\">\n\t\t\t\tReset Password\n\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</div>\n\t\t<div btn-signup class=\"ion-text-center\">\n\t\t\t<p><a routerLink=\"/\" href=\"javascript:void(0);\">Back To Login</a></p>\n\t\t</div>\n\t</div>\n</form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_forgot-password_forgot-password_module_ts-es5.js.map
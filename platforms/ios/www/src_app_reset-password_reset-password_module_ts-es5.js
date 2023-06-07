(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_reset-password_reset-password_module_ts"], {
    /***/
    54746: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordPageRoutingModule": function ResetPasswordPageRoutingModule() {
          return (
            /* binding */
            _ResetPasswordPageRoutingModule
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


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reset-password.page */
      68946);

      var routes = [{
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
      }];

      var _ResetPasswordPageRoutingModule = function ResetPasswordPageRoutingModule() {
        _classCallCheck(this, ResetPasswordPageRoutingModule);
      };

      _ResetPasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ResetPasswordPageRoutingModule);
      /***/
    },

    /***/
    44371: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordPageModule": function ResetPasswordPageModule() {
          return (
            /* binding */
            _ResetPasswordPageModule
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


      var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reset-password-routing.module */
      54746);
      /* harmony import */


      var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reset-password.page */
      68946);

      var _ResetPasswordPageModule = function ResetPasswordPageModule() {
        _classCallCheck(this, ResetPasswordPageModule);
      };

      _ResetPasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage]
      })], _ResetPasswordPageModule);
      /***/
    },

    /***/
    68946: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ResetPasswordPage": function ResetPasswordPage() {
          return (
            /* binding */
            _ResetPasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./reset-password.page.html */
      30170);
      /* harmony import */


      var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reset-password.page.scss */
      71541);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      9709);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../config */
      39698);

      var _ResetPasswordPage = /*#__PURE__*/function () {
        function ResetPasswordPage(userService, router, activatedRoute) {
          _classCallCheck(this, ResetPasswordPage);

          this.userService = userService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.errors = ['', null, undefined];
          this.is_submit = false;
          this.email = activatedRoute.snapshot.paramMap.get('id');
        }

        _createClass(ResetPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "verify",
          value: function verify() {
            var _this = this;

            this.is_submit = true;

            if (this.errors.indexOf(this.dg1) >= 0 || this.errors.indexOf(this.dg2) >= 0 || this.errors.indexOf(this.dg3) >= 0 || this.errors.indexOf(this.dg4) >= 0) {
              return false;
            }

            this.userService.presentLoading();
            this.userService.postData({
              email: this.email,
              otp: this.dg1 + this.dg2 + this.dg3 + this.dg4
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/verify_otp').subscribe(function (result) {
              _this.userService.stopLoading();

              if (result.status == 1) {
                _this.is_submit = false;

                _this.userService.presentToast('OTP email verified successfully', 'success');

                _this.router.navigate(['/change-password/' + result.data._id + '/' + _this.dg1 + _this.dg2 + _this.dg3 + _this.dg4]);
              } else {
                _this.userService.presentToast('Invalid OTP, Please enter correct one', 'danger');
              }
            }, function (err) {
              _this.userService.stopLoading();

              _this.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "otpController",
          value: function otpController(event, next, prev) {
            if (event.target.value.length < 1 && prev) {
              prev.setFocus();
            } else if (next && event.target.value.length > 0) {
              next.setFocus();
            } else {
              return 0;
            }
          }
        }]);

        return ResetPasswordPage;
      }();

      _ResetPasswordPage.ctorParameters = function () {
        return [{
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _ResetPasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ResetPasswordPage);
      /***/
    },

    /***/
    71541: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-gradient);\n}\nion-content [loginform] {\n  display: flex;\n  width: 100%;\n  padding: 0px 15px;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n}\nion-content [loginform] [logo] {\n  margin-bottom: 30px;\n  margin-top: 30px;\n  width: 100%;\n}\nion-content [loginform] [logo] img {\n  height: 53px;\n}\nion-content [loginform] [login-btn] ion-button {\n  min-height: 56px;\n  --box-shadow: none;\n  font-weight: 500;\n  border-radius: 12px;\n  --border-radius: 12px;\n  overflow: hidden;\n  --background: var(--ion-color-white);\n  --color: var(--ion-color-primary);\n  text-transform: capitalize;\n  font-size: 16px;\n  margin: 15px 0px 0px;\n}\nion-content [loginform] [btn-signup] {\n  color: var(--ion-color-white);\n  font-weight: 500;\n  padding-top: 50px;\n  padding-bottom: 20px;\n  width: 100%;\n}\nion-content [loginform] [btn-signup] p {\n  font-size: 14px;\n  margin: 0px 0px;\n  letter-spacing: 1px;\n}\nion-content [loginform] [btn-signup] p a {\n  color: var(--ion-color-white);\n  font-weight: 500;\n  text-decoration: none;\n}\nion-content [loginform] [form-login] {\n  width: 100%;\n}\nion-content [loginform] [form-login] [form-group] {\n  margin-bottom: 25px;\n}\nion-content [loginform] [form-login] [form-group][forgot] a {\n  color: var(--ion-color-white);\n  font-weight: 400;\n  text-decoration: none;\n  font-size: 14px;\n}\nion-content [loginform] [form-login] [form-group] label {\n  font-size: 15px;\n  margin-bottom: 0px;\n  display: block;\n  padding: 0px 0px;\n  color: var(--ion-color-white);\n  font-weight: 400;\n}\nion-content [loginform] [form-login] [form-group] ion-item {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 0px;\n  --background: transparent;\n  --padding-start: 0px;\n  --min-height: 42px;\n  --inner-padding-end: 0px;\n}\nion-content [loginform] [form-login] [form-group] ion-item ion-label {\n  margin: 0px;\n}\nion-content [loginform] [form-login] [form-group] ion-item ion-label ion-icon {\n  color: var(--ion-color-white);\n  font-size: 22px;\n}\nion-content [loginform] [form-login] [form-group] ion-item ion-input {\n  color: var(--ion-color-white);\n  --placeholder-opacity:1;\n  font-size: 13px;\n  --padding-start: 0px;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n}\nspan[errormsg] {\n  color: #ffff;\n}\n.opt-frms {\n  margin-bottom: 20px;\n}\n.opt-frms ion-input {\n  background: #f9f9f9;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  border: 1px solid #f3f3f3;\n  text-align: center;\n  font-size: 26px;\n  color: #43444f;\n  font-family: \"Ubuntu\", sans-serif !important;\n  font-weight: 400;\n  border-radius: 7px;\n  --placeholder-color: #e0e0e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVDQUFBO0FBQUo7QUFDQztFQUVDLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUFGO0FBQ0U7RUFFQyxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFIO0FBQ0c7RUFFQyxZQUFBO0FBQUo7QUFLRztFQUVDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUpKO0FBT0U7RUFFQyw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFOSDtBQU9HO0VBRUksZUFBQTtFQUNILGVBQUE7RUFDRyxtQkFBQTtBQU5QO0FBT0k7RUFFQyw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFOTDtBQVVFO0VBRUksV0FBQTtBQVROO0FBVUc7RUFFQyxtQkFBQTtBQVRKO0FBWUs7RUFFQyw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBWE47QUFjSTtFQUVDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFiTDtBQWdCSTtFQUVDLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQWZMO0FBZ0JLO0VBRUMsV0FBQTtBQWZOO0FBZ0JNO0VBRUMsNkJBQUE7RUFDQSxlQUFBO0FBZlA7QUFrQks7RUFFQyw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQWpCTjtBQXlCQTtFQUNLLFlBQUE7QUF0Qkw7QUF5QkE7RUFDRSxtQkFBQTtBQXRCRjtBQXVCRTtFQUNDLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBckJIIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50XG57XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQpO1xuXHRbbG9naW5mb3JtXVxuXHR7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nOiAwcHggMTVweDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0W2xvZ29dXG5cdFx0e1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0aW1nXG5cdFx0XHR7XG5cdFx0XHRcdGhlaWdodDogNTNweDsgXG5cdFx0XHR9XG5cdFx0fVxuXHRcdFtsb2dpbi1idG5dXG5cdFx0e1xuXHRcdFx0aW9uLWJ1dHRvblxuXHRcdFx0eyBcblx0XHRcdFx0bWluLWhlaWdodDogNTZweDtcblx0XHRcdFx0LS1ib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0LS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRtYXJnaW46IDE1cHggMHB4IDBweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0W2J0bi1zaWdudXBdXG5cdFx0e1xuXHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0cGFkZGluZy10b3A6IDUwcHg7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRwXG5cdFx0XHR7XG5cdFx0XHQgICAgZm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRtYXJnaW46IDBweCAwcHg7XG5cdFx0XHQgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcdFxuXHRcdFx0XHRhXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0W2Zvcm0tbG9naW5dXG5cdFx0e1xuXHRcdCAgICB3aWR0aDoxMDAlO1xuXHRcdFx0W2Zvcm0tZ3JvdXBdXG5cdFx0XHR7ICAgIFxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyNXB4O1xuXHRcdFx0XHQmW2ZvcmdvdF1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsYWJlbCBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0cGFkZGluZzogMHB4IDBweDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW9uLWl0ZW1cblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRcdFx0XHRcdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG5cdFx0XHRcdFx0LS1taW4taGVpZ2h0OiA0MnB4O1xuXHRcdFx0XHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHRcdFx0XHRpb24tbGFiZWwgXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdFx0XHRpb24taWNvblxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRjb2xvcjp2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdFx0XHR9XHRcdFx0XG5cdFx0XHRcdFx0aW9uLWlucHV0XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y29sb3I6dmFyKCAtLWlvbi1jb2xvci13aGl0ZSk7XG5cdFx0XHRcdFx0XHQtLXBsYWNlaG9sZGVyLW9wYWNpdHk6MTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0XHRcdC0tcGFkZGluZy1zdGFydDogMHB4OyBcblx0XHRcdFx0XHRcdC0tcGFkZGluZy10b3A6IDhweDtcblx0XHRcdFx0XHRcdC0tcGFkZGluZy1ib3R0b206IDhweDsgICBcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5zcGFuW2Vycm9ybXNnXSB7XG4gICAgIGNvbG9yOiAjZmZmZjtcbn1cblxuLm9wdC1mcm1zIHtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdGlvbi1pbnB1dCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG5cdFx0XHQtLXBhZGRpbmctZW5kOiA1cHg7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Zm9udC1zaXplOiAyNnB4O1xuXHRcdFx0Y29sb3I6ICM0MzQ0NGY7XG5cdFx0XHRmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDdweDtcblx0XHRcdC0tcGxhY2Vob2xkZXItY29sb3I6ICNlMGUwZTA7XG5cdFx0fVxuXHR9Il19 */";
      /***/
    },

    /***/
    30170: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content  class=\"ion-padding\">\n\t\n\t<div loginform>\n\t\t<div logo  class=\"ion-text-center\">\n\t\t  <img src=\"assets/img/logo-white.png\"/>\n\t\t  <p> Enter your OTP code here. </p>\n\t\t</div>\n\t\t<div form-login>\n\t<div class=\"opt-frms\">\n\t\t\t<ion-row class=\"fls\"> \n\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t<ion-input type=\"tel\" placeholder=\"0\"  #otp1 (keyup)=\"otpController($event,otp2,'')\" maxlength=\"1\" [(ngModel)]=\"dg1\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t<ion-input type=\"tel\" placeholder=\"0\" #otp2 (keyup)=\"otpController($event,otp3,otp1)\" maxlength=\"1\" [(ngModel)]=\"dg2\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t<ion-input type=\"tel\" placeholder=\"0\" #otp3 (keyup)=\"otpController($event,otp4,otp2)\" maxlength=\"1\" [(ngModel)]=\"dg3\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t<ion-input type=\"tel\" placeholder=\"0\" placeholder=\"0\" #otp4 placeholder=\"0\" #otp3 (keyup)=\"otpController($event,'',otp3)\" maxlength=\"1\" [(ngModel)]=\"dg4\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<span error errormsg *ngIf=\"errors.indexOf(dg1) >= 0 && errors.indexOf(dg2) >= 0 && errors.indexOf(dg3) >= 0 && errors.indexOf(dg4) >= 0 && is_submit == true\">Please enter otp</span>\n\t\t</div>\n\t\t\t<div login-btn>\n\t\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"10\" offset=\"1\">\n\t\t\t\t<ion-button (click)=\"verify()\" expand=\"full\">\n\t\t\t\tReset Password\n\t\t\t\t</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t</div>\n\t\t<div btn-signup class=\"ion-text-center\">\n\t\t\t<p>Back To <a routerLink=\"/\" href=\"javascript:void(0)\">Login</a></p>\n\t\t</div>\n\t</div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_reset-password_reset-password_module_ts-es5.js.map
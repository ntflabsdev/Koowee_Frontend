(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_add-contact_add-contact_module_ts"], {
    /***/
    71794: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddContactPageRoutingModule": function AddContactPageRoutingModule() {
          return (
            /* binding */
            _AddContactPageRoutingModule
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


      var _add_contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-contact.page */
      42097);

      var routes = [{
        path: '',
        component: _add_contact_page__WEBPACK_IMPORTED_MODULE_0__.AddContactPage
      }];

      var _AddContactPageRoutingModule = function AddContactPageRoutingModule() {
        _classCallCheck(this, AddContactPageRoutingModule);
      };

      _AddContactPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddContactPageRoutingModule);
      /***/
    },

    /***/
    32568: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddContactPageModule": function AddContactPageModule() {
          return (
            /* binding */
            _AddContactPageModule
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


      var _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-contact-routing.module */
      71794);
      /* harmony import */


      var _add_contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-contact.page */
      42097);

      var _AddContactPageModule = function AddContactPageModule() {
        _classCallCheck(this, AddContactPageModule);
      };

      _AddContactPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddContactPageRoutingModule],
        declarations: [_add_contact_page__WEBPACK_IMPORTED_MODULE_1__.AddContactPage]
      })], _AddContactPageModule);
      /***/
    },

    /***/
    42097: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddContactPage": function AddContactPage() {
          return (
            /* binding */
            _AddContactPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-contact.page.html */
      1968);
      /* harmony import */


      var _add_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-contact.page.scss */
      29165);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      9709);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../config */
      39698);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      76461);

      var Contacts = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Plugins.Contacts;

      var _AddContactPage = /*#__PURE__*/function () {
        function AddContactPage(userService, router, fb) {
          _classCallCheck(this, AddContactPage);

          this.userService = userService;
          this.router = router;
          this.fb = fb;
          this.bkparray = [];
          this.mycontactdetails = [];
          this.checkarray = [];
          this.emergancy_contacts = [];
          this.newArrays = [];
        }

        _createClass(AddContactPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initLoginForm();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.initLoginForm();
            this.bkparray = this.newArrays;
            this.getemergancycontatcs();
          }
        }, {
          key: "initLoginForm",
          value: function initLoginForm() {
            this.loginForm = this.fb.group({
              displayName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
              phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, // Validators.minLength(13),
              _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[+]+[0-9]+$')])]
            });
          }
        }, {
          key: "getemergancycontatcs",
          value: function getemergancycontatcs() {
            var _this = this;

            this.userService.presentLoading();
            this.userService.postData({
              _id: localStorage.getItem('user_auth_id')
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_emergancy_contacts').subscribe(function (result) {
              _this.userService.stopLoading();

              if (result.status == 1) {
                _this.emergancy_contacts = result.data;
                var clientnames = _this.emergancy_contacts;

                for (var i = 0; i < clientnames.length; i++) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_4__.inArray(clientnames[i].contact_array, _this.checkarray) == -1) {
                    _this.checkarray.push(clientnames[i].contact_array);
                  }
                }
              } else {
                _this.userService.presentToast('Failed to send request. Please try again', 'danger');
              }
            }, function (err) {
              _this.userService.stopLoading();

              _this.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "getcontacts",
          value: function getcontacts() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var permission;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(0, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.isPlatform)('android')) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 3;
                      return Contacts.getPermissions();

                    case 3:
                      permission = _context.sent;

                      if (permission.granted) {
                        _context.next = 6;
                        break;
                      }

                      return _context.abrupt("return");

                    case 6:
                      Contacts.getContacts().then(function (result) {
                        console.log(result);
                        var newArray = [];
                        var clientname = result.contacts;

                        for (var i = 0; i < clientname.length; i++) {
                          if (clientname[i].phoneNumbers.length > 0) {
                            for (var j = 0; j < clientname[i].phoneNumbers.length; j++) {
                              if (jquery__WEBPACK_IMPORTED_MODULE_4__.inArray(clientname[i].phoneNumbers[j].number, _this2.checkarray) == -1) {
                                var data = {
                                  contactId: clientname[i].contactId,
                                  displayName: clientname[i].displayName,
                                  phoneNumbers: clientname[i].phoneNumbers[j]
                                };
                                /* if(clientname[i].photoThumbnail !== "" &&  clientname[i].photoThumbnail !== null && clientname[i].photoThumbnail != undefined)
                                 {
                                    data['photoThumbnail'] = clientname[i].photoThumbnail;
                                 }*/

                                newArray.push(data);
                              }
                            }
                          }
                        }

                        console.log(newArray);
                        _this2.newArrays = newArray;
                        _this2.bkparray = newArray;
                        /*for (const contact of result.contacts) {
                        console.log(contact);
                        } */
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "searchcontacts",
          value: function searchcontacts(bl) {
            if (bl != '' && bl && bl.trim() != '') {
              this.newArrays = this.bkparray;
              this.newArrays = this.newArrays.filter(function (item) {
                return item.displayName.toLowerCase().indexOf(bl.toLowerCase()) > -1 || item.phoneNumbers.number.indexOf(bl.toLowerCase()) > -1;
              });
            } else {
              this.newArrays = this.bkparray;
            }
          }
        }, {
          key: "addphonenumbers",
          value: function addphonenumbers(contactdetail) {
            var _this3 = this;

            this.checkarray.push(contactdetail.phoneNumbers.number);
            this.mycontactdetails.push(contactdetail);
            var dict = {
              _id: localStorage.getItem('user_auth_id'),
              contact_array: contactdetail.phoneNumbers.number,
              displayName: contactdetail.displayName,
              phoneNumbers: contactdetail.phoneNumbers
            };
            this.userService.presentLoading();
            this.userService.postData(dict, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/add_emergancy_contacts').subscribe(function (result) {
              _this3.userService.stopLoading();

              if (result.status == 1) {
                var newArray = [];
                var clientname = _this3.newArrays;

                for (var i = 0; i < clientname.length; i++) {
                  if (jquery__WEBPACK_IMPORTED_MODULE_4__.inArray(clientname[i].phoneNumbers.number, _this3.checkarray) == -1) {
                    newArray.push(clientname[i]);
                  }
                }

                console.log(newArray);
                _this3.newArrays = newArray;
                _this3.bkparray = newArray;

                _this3.userService.presentToast('Contact has been added to your emergancy contacts successfully!.', 'success');
              } else if (result.status == 2) {
                _this3.userService.presentToast('Phone number already exists', 'danger');
              } else {
                _this3.userService.presentToast('Failed to send request. Please try again', 'danger');
              }
            }, function (err) {
              _this3.userService.stopLoading();

              _this3.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this4 = this;

            var controls = this.loginForm.controls;
            /** check form */

            if (this.loginForm.invalid) {
              Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
              });
              return;
            }

            this.checkarray.push(controls['phone'].value);
            var dict = {
              _id: localStorage.getItem('user_auth_id'),
              contact_array: controls['phone'].value,
              displayName: controls['displayName'].value,
              phoneNumbers: {
                label: "mobile",
                number: controls['phone'].value
              }
            };
            this.userService.presentLoading();
            this.userService.postData(dict, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/add_emergancy_contacts').subscribe(function (result) {
              _this4.userService.stopLoading();

              if (result.status == 1) {
                _this4.loginForm.reset();

                _this4.getemergancycontatcs();

                _this4.userService.presentToast('Contact has been added to your emergancy contacts successfully!.', 'success');
              } else if (result.status == 2) {
                _this4.userService.presentToast('Phone number already exists', 'danger');
              } else {
                _this4.userService.presentToast('Failed to send request. Please try again', 'danger');
              }
            }, function (err) {
              _this4.userService.stopLoading();

              _this4.userService.presentToast('Failed to send request. Please try again', 'danger');
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

        return AddContactPage;
      }();

      _AddContactPage.ctorParameters = function () {
        return [{
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }];
      };

      _AddContactPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-add-contact',
        template: _raw_loader_add_contact_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddContactPage);
      /***/
    },

    /***/
    29165: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header.heder-main {\n  background: linear-gradient(to right, #315bb0, #517cd3, #6b93e4);\n  --background: linear-gradient(to right, #315bb0, #517cd3, #6b93e4);\n}\n\nion-content {\n  --background:#f9f9f9;\n  background: #f9f9f9;\n}\n\nion-content .top-bids {\n  position: relative;\n  padding: 25px;\n  margin-bottom: 45px;\n  background-image: linear-gradient(to right, #315bb0, #517cd3, #6b93e4);\n}\n\nion-content .top-bids h4.til {\n  margin: 0px;\n  text-align: center;\n  color: #fff;\n  font-size: 18px;\n  z-index: 1;\n  position: relative;\n}\n\nion-content .top-bids h4.til:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 40px;\n  height: 3px;\n  background: #fff;\n  margin: 0 auto;\n  bottom: -19px;\n  border-radius: 50px;\n}\n\nion-content .top-bids:after {\n  content: \"\";\n  position: absolute;\n  background: url('bg-2.png');\n  left: 0;\n  right: 0;\n  height: 70px;\n  background-size: cover;\n  background-position: center center;\n  z-index: -1;\n}\n\nion-content .top-bids span.ovel-tx {\n  position: absolute;\n  font-size: 70px;\n  font-weight: 900;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  top: -16px;\n  z-index: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  text-align: center;\n  white-space: nowrap;\n  color: #000;\n  opacity: 0.04;\n}\n\nion-content .data-conts {\n  padding: 40px 25px;\n}\n\nion-content .data-conts .impt-ss {\n  display: block;\n  background: var(--ion-color-gradient1);\n  padding: 14px;\n  border-radius: 50px;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  position: relative;\n}\n\nion-content .data-conts .impt-ss span.icond {\n  width: 47px;\n  height: 47px;\n  position: absolute;\n  left: 3px;\n  top: 3px;\n  background: rgba(255, 255, 255, 0.83);\n  border-radius: 50%;\n  color: #4267B2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 21px;\n  padding-right: 2px;\n}\n\nion-content span.text-or {\n  display: block;\n  margin: 25px 0;\n  position: relative;\n  z-index: 0;\n  text-align: center;\n}\n\nion-content span.text-or small {\n  width: 35px;\n  height: 35px;\n  background: #fff;\n  display: inline-block;\n  line-height: 34px;\n  border-radius: 50%;\n  border: 1px dashed #dadada;\n  font-weight: 700;\n}\n\nion-content span.text-or:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-bottom: 1px dashed #d0d0d0;\n  max-width: 90%;\n  margin: 0 auto;\n  top: 17px;\n  z-index: -1;\n}\n\nion-content .input-fyt ion-input.input-fts {\n  background: #fff;\n  --padding-start: 25px;\n  min-height: 52px;\n  border-radius: 50px;\n  border: 1px solid #efefef;\n  font-size: 14px;\n  color: #222;\n  --placeholder-opacity: 0.7;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  margin-bottom: 20px;\n  /*box-shadow: 0px 0px 12px rgba(0 0 0 / 3%);*/\n  box-shadow: rgba 0, 0, 0, 0.3;\n}\n\nion-content .btn-s-s {\n  display: block;\n  text-align: center;\n}\n\nion-content .btn-s-s .btn-save {\n  display: inline-block;\n  background: var(--ion-color-gradient1);\n  padding: 13px 70px;\n  border-radius: 50px;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  position: relative;\n  display: block;\n  background: #4267B2;\n}\n\n.data-cont {\n  padding: 15px 20px;\n  display: block;\n}\n\n.data-cont h4.lst-sst {\n  font-size: 16px;\n  margin: 0px;\n  font-weight: 600;\n  padding-left: 5px;\n  position: relative;\n  z-index: 0;\n  margin-bottom: 20px;\n}\n\n.data-cont h4.lst-sst:after {\n  content: \"\";\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  background: #4267B2;\n  border-radius: 50%;\n  opacity: 0.2;\n  z-index: -1;\n  left: -5px;\n  top: -6px;\n}\n\n.dats-cntsr .str-ss {\n  background: #fff;\n  margin-top: 15px;\n  padding: 10px;\n  border-radius: 50px;\n  padding-left: 65px;\n  position: relative;\n  /*box-shadow: 0px 2px 13px rgba(0 0 0 / 3%);*/\n  box-shadow: rgba 0, 0, 0, 0.3;\n}\n\n.dats-cntsr .str-ss span.icon-cnt {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background: #eff4ff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #4267B2;\n  left: 5px;\n  top: 5px;\n}\n\n.dats-cntsr .str-ss h4 {\n  margin: 0px;\n  font-size: 16px;\n}\n\n.dats-cntsr .str-ss p {\n  margin: 0px;\n  font-size: 12px;\n  margin-top: 4px;\n  color: #797979;\n}\n\n.dats-cntsr span.dekt-cnt {\n  height: 28px;\n  width: 28px;\n  position: absolute;\n  right: 15px;\n  top: 17px;\n  background: #315bb0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 18px;\n}\n\nion-content.ios [filterBtns] {\n  /*top: 45px;*/\n}\n\n[filterBtns] {\n  padding: 30px 20px 5px 20px;\n}\n\n[filterBtns] ion-searchbar {\n  background: #eee;\n  --background: #eee;\n  --box-shadow: none;\n  padding-left: 10px;\n  --font-size: 12px;\n  padding-right: 20px;\n  height: 46px;\n  margin: 0 0 2px;\n  border-radius: 10px;\n}\n\n[filterBtns] ion-searchbar input {\n  background: #fff;\n}\n\nspan[errormsg] {\n  color: #FF0000;\n}\n/*# sourceMappingURL=data:application/json;base64,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a0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7QUFIRjs7QUFJRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBRkg7O0FBSUU7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQUZIOztBQUlFO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZIOztBQUtDO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFIRjs7QUFRQztFQUNDLGFBQUE7QUFMRjs7QUFRQTtFQUNDLDJCQUFBO0FBTEQ7O0FBTUM7RUFDQyxnQkFBQTtFQUNHLGtCQUFBO0VBQ0gsa0JBQUE7RUFDRyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSkw7O0FBS0U7RUFDQyxnQkFBQTtBQUhIOztBQVFBO0VBQ0ksY0FBQTtBQUxKIiwiZmlsZSI6ImFkZC1jb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIuaGVkZXItbWFpbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzE1YmIwLCAjNTE3Y2QzLCAjNmI5M2U0KTtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzMxNWJiMCwgIzUxN2NkMywgIzZiOTNlNCk7XG59XG5pb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDojZjlmOWY5O1xuXHRiYWNrZ3JvdW5kOiNmOWY5Zjk7XG5cdC50b3AtYmlkcyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDI1cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDVweDtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzE1YmIwLCAjNTE3Y2QzLCAjNmI5M2U0KTtcblx0XHRoNC50aWwge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRcdGhlaWdodDogM3B4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0Ym90dG9tOiAtMTlweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0YmFja2dyb3VuZDp1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JnLTIucG5nXCIpO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0aGVpZ2h0OiA3MHB4O1xuXHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG5cdFx0XHR6LWluZGV4OiAtMTtcblx0XHRcdFxuXHRcdH1cblx0XHRzcGFuLm92ZWwtdHgge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0Zm9udC1zaXplOiA3MHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAzcHg7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0dG9wOiAtMTZweDtcblx0XHRcdHotaW5kZXg6IDA7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdG9wYWNpdHk6IDAuMDQ7XG5cdFx0fVxuXHR9XG5cdC5kYXRhLWNvbnRzIHtcblx0XHRwYWRkaW5nOiA0MHB4IDI1cHg7XG5cdFx0LmltcHQtc3Mge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0XHRcdHBhZGRpbmc6IDE0cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0c3Bhbi5pY29uZCB7XG5cdFx0XHRcdHdpZHRoOiA0N3B4O1xuXHRcdFx0XHRoZWlnaHQ6IDQ3cHg7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0bGVmdDogM3B4O1xuXHRcdFx0XHR0b3A6IDNweDtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgzKTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRjb2xvcjogIzQyNjdCMjtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjFweDtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMnB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRzcGFuLnRleHQtb3Ige1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdG1hcmdpbjogMjVweCAwO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR6LWluZGV4OiAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRzbWFsbCB7XG5cdFx0XHR3aWR0aDogMzVweDtcblx0XHRcdGhlaWdodDogMzVweDtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRsaW5lLWhlaWdodDogMzRweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGJvcmRlcjogMXB4IGRhc2hlZCAjZGFkYWRhO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHR9XG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZDBkMGQwO1xuXHRcdFx0bWF4LXdpZHRoOiA5MCU7XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdHRvcDogMTdweDtcblx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdH1cblx0fVxuXHQuaW5wdXQtZnl0e1xuXHRcdGlvbi1pbnB1dC5pbnB1dC1mdHMge1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdC0tcGFkZGluZy1zdGFydDogMjVweDtcblx0XHRcdG1pbi1oZWlnaHQ6IDUycHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAjMjIyO1xuXHRcdFx0LS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjc7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdC8qYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYmEoMCAwIDAgLyAzJSk7Ki9cblx0XHRcdGJveC1zaGFkb3c6IHJnYmEgKDAsMCwwLDAuMyk7XG5cdFx0fVxuXHR9XG5cdC5idG4tcy1zIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFxuXHRcdC5idG4tc2F2ZSB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0XHRcdHBhZGRpbmc6IDEzcHggNzBweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdGJhY2tncm91bmQ6ICM0MjY3QjI7XG5cdFx0fVxuXHR9XG59XG5cbi5kYXRhLWNvbnQge1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcblx0aDQubHN0LXNzdCB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdG1hcmdpbjogMHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0cGFkZGluZy1sZWZ0OiA1cHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHotaW5kZXg6IDA7XG5cdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHQmOmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdGJhY2tncm91bmQ6ICM0MjY3QjI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRvcGFjaXR5OiAwLjI7XG5cdFx0XHR6LWluZGV4OiAtMTtcblx0XHRcdGxlZnQ6IC01cHg7XG5cdFx0XHR0b3A6IC02cHg7XG5cdFx0fVxuXHR9XG59XG5cbi5kYXRzLWNudHNyIHtcblx0LnN0ci1zcyB7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRwYWRkaW5nLWxlZnQ6IDY1cHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdC8qYm94LXNoYWRvdzogMHB4IDJweCAxM3B4IHJnYmEoMCAwIDAgLyAzJSk7Ki9cblx0XHRib3gtc2hhZG93OiByZ2JhICgwLDAsMCwwLjMpO1xuXHRcdHNwYW4uaWNvbi1jbnQge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0d2lkdGg6IDUwcHg7XG5cdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZWZmNGZmO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdGNvbG9yOiAjNDI2N0IyO1xuXHRcdFx0bGVmdDogNXB4O1xuXHRcdFx0dG9wOiA1cHg7XG5cdFx0fVxuXHRcdGg0IHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdH1cblx0XHRwICB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdG1hcmdpbi10b3A6IDRweDtcblx0XHRcdGNvbG9yOiAjNzk3OTc5O1xuXHRcdH1cblx0fVxuXHRzcGFuLmRla3QtY250IHtcblx0XHRoZWlnaHQ6IDI4cHg7XG5cdFx0d2lkdGg6IDI4cHg7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHJpZ2h0OiAxNXB4O1xuXHRcdHRvcDogMTdweDtcblx0XHRiYWNrZ3JvdW5kOiAjMzE1YmIwO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHR9XG59XG5cbmlvbi1jb250ZW50Lmlvc3tcblx0W2ZpbHRlckJ0bnNde1xuXHRcdC8qdG9wOiA0NXB4OyovXG5cdH1cbn1cbltmaWx0ZXJCdG5zXXtcblx0cGFkZGluZzozMHB4IDIwcHggNXB4IDIwcHg7XG5cdGlvbi1zZWFyY2hiYXJ7XG5cdFx0YmFja2dyb3VuZDogI2VlZTtcblx0ICAgIC0tYmFja2dyb3VuZDogI2VlZTtcblx0XHQtLWJveC1zaGFkb3c6IG5vbmU7XG5cdCAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdCAgICAtLWZvbnQtc2l6ZTogMTJweDtcblx0ICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdCAgICBoZWlnaHQ6IDQ2cHg7XG5cdCAgICBtYXJnaW46IDAgMCAycHg7XG5cdCAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdGlucHV0e1xuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xuXHRcdH0gXG5cdH1cbn1cblxuc3BhbltlcnJvcm1zZ10ge1xuICAgIGNvbG9yOiAjRkYwMDAwO1xufSJdfQ== */";
      /***/
    },

    /***/
    1968: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button routerLink=\"/emergency-button\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n\t\t<ion-title class=\"ion-text-center\"> </ion-title>\n\t<ion-buttons slot=\"end\" routerLink=\"/discovery\"><ion-icon name=\"settings-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"top-bids\">\n\t\t<h4 class=\"til\"> Add Emergency Contact </h4>\n\t\t<span class=\"ovel-tx\"> Contact </span>\n\t</div>\n\t<div filterBtns>\n    <ion-searchbar placeholder=\"Search contact name or number\" (keyup)=\"searchcontacts($event.target.value);\"></ion-searchbar>\n  </div>\n\t<div class=\"data-conts\"  *ngIf=\"(newArrays.length == 0)\">\n\t\t<a  href=\"javascript:void(0);\" class=\"impt-ss\" (click)=\"getcontacts();\"> <span class=\"icond\"> <ion-icon name=\"person-add-outline\"></ion-icon> </span> Import from Contacts </a>\n\t\t<span class=\"text-or\"> <small> Or </small> </span>\n\t\t\n\t\t<div class=\"input-fyt\">\n\t\t<form class=\"kt-form form-login\" [formGroup]=\"loginForm\" autocomplete=\"off\">\n\t\t\t<div class=\"inputs-s\">\n\t\t\t\t<ion-input formControlName=\"displayName\" class=\"input-fts\" placeholder=\"Enter Name\"></ion-input>\n\t\t\t\t<span errormsg *ngIf=\"isControlHasError('displayName','required')\">\n\t\t\t\t<strong>Please enter a fullname of contact person</strong>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class=\"inputs-s\">\n\t\t\t\t<p class=\"small-ts\">Note: +91 (+ country code) is required to add. </p> \n\t\t\t\t<ion-input formControlName=\"phone\" class=\"input-fts\" placeholder=\"Enter Phone Number\"></ion-input>\t\n\t\t\t<span errormsg *ngIf=\"isControlHasError('phone','required')\">\n\t\t\t<strong>Please enter your phone number</strong>\n\t\t\t</span>\n\t\t\t<span errormsg *ngIf=\"((loginForm.controls.phone.touched && !loginForm.controls.phone.valid)) && !isControlHasError('phone','required')\">\n\t\t\t<strong> Enter correct phone number.</strong>\n\t\t\t</span>\t\n\t\t\t</div>\n\t\t\t<div class=\"btn-s-s\">\n\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"submit();\" class=\"btn-save\"> Save Contact</a>\n\t\t\t</div>\n\t\t</form>\t\n\t\t</div>\n\t</div>\n\n\t<div class=\"data-cont\"  *ngIf=\"(newArrays.length > 0)\" >\n\t\t<div class=\"dats-cntsr\">\n\t\t\t<div *ngFor=\"let news of newArrays\" class=\"str-ss\" (click)=\"addphonenumbers(news);\">\n\t\t\t\t<span class=\"icon-cnt\"> <ion-icon name=\"person-add-outline\"></ion-icon> </span>\n\t\t\t\t<h4> {{news.displayName}} </h4>\n\t\t\t\t<p> {{news.phoneNumbers.number}} </p>\n\t\t\t\t<span class=\"dekt-cnt\"><ion-icon name=\"add-outline\"></ion-icon> </span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_add-contact_add-contact_module_ts-es5.js.map
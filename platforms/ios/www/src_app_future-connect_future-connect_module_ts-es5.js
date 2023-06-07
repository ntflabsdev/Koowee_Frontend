(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_future-connect_future-connect_module_ts"], {
    /***/
    54610: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FutureConnectPageRoutingModule": function FutureConnectPageRoutingModule() {
          return (
            /* binding */
            _FutureConnectPageRoutingModule
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


      var _future_connect_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./future-connect.page */
      5408);

      var routes = [{
        path: '',
        component: _future_connect_page__WEBPACK_IMPORTED_MODULE_0__.FutureConnectPage
      }];

      var _FutureConnectPageRoutingModule = function FutureConnectPageRoutingModule() {
        _classCallCheck(this, FutureConnectPageRoutingModule);
      };

      _FutureConnectPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _FutureConnectPageRoutingModule);
      /***/
    },

    /***/
    5125: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FutureConnectPageModule": function FutureConnectPageModule() {
          return (
            /* binding */
            _FutureConnectPageModule
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


      var _future_connect_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./future-connect-routing.module */
      54610);
      /* harmony import */


      var _future_connect_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./future-connect.page */
      5408);

      var _FutureConnectPageModule = function FutureConnectPageModule() {
        _classCallCheck(this, FutureConnectPageModule);
      };

      _FutureConnectPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _future_connect_routing_module__WEBPACK_IMPORTED_MODULE_0__.FutureConnectPageRoutingModule],
        declarations: [_future_connect_page__WEBPACK_IMPORTED_MODULE_1__.FutureConnectPage]
      })], _FutureConnectPageModule);
      /***/
    },

    /***/
    5408: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FutureConnectPage": function FutureConnectPage() {
          return (
            /* binding */
            _FutureConnectPage
          );
        },

        /* harmony export */
        "UserComponent": function UserComponent() {
          return (
            /* binding */
            _UserComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_future_connect_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./future-connect.page.html */
      60046);
      /* harmony import */


      var _future_connect_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./future-connect.page.scss */
      86857);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      9709);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _swipe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../swipe.service */
      59361);

      var _FutureConnectPage = /*#__PURE__*/function () {
        function FutureConnectPage(userService, router, SwipeService, alertController, activatedRoute) {
          _classCallCheck(this, FutureConnectPage);

          this.userService = userService;
          this.router = router;
          this.SwipeService = SwipeService;
          this.alertController = alertController;
          this.activatedRoute = activatedRoute;
          this.subscribe = true;
          this.pageno = 1;
          this.totaldata = 0;
          this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
          this.IMAGES_URL_All = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL_All;
          this.images = [];
          this.errors = ["", null, undefined, 'undefined'];
          this.users = [];
          this.btnArr = [];
          this.friendlist = [];
          this.finalArr = [];
        }

        _createClass(FutureConnectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "lastslide",
          value: function lastslide() {
            console.log("last slide"); // this.users.length < this.totaldata

            console.log("this.user.length-->", this.users.length);
            console.log("this.totaldata-->", this.totaldata);
            this.loadmore();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.users = [];
            this.pageno = 1;
            this.totaldata = 0;
            this.getprofiledata();
          }
        }, {
          key: "getusers",
          value: function getusers() {
            var _this = this;

            this.users = [];
            this.btnArr = [];
            var data = {
              discovery: localStorage.getItem("discovery"),
              distance: localStorage.getItem("distance") != "NaN" ? localStorage.getItem("distance") : null,
              age: JSON.parse(localStorage.getItem("age")),
              gender: localStorage.getItem("gender"),
              country: localStorage.getItem("country"),
              area: localStorage.getItem("area"),
              skip: this.pageno,
              _id: localStorage.getItem("user_auth_id"),
              lat: this.lat,
              "long": this.lng
            }; // console.log("SENDING data  to near user--->", data);

            this.userService.presentLoading();
            this.userService.postData(data, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + "/get_near_users").subscribe(function (result) {
              console.log("get near user---->", result);

              _this.userService.stopLoading();

              if (result.length > 0) {
                _this.users = result;
                console.log("MAtch profiles-->", result);
                _this.btnArr = result; // this.finalArr = this.users.filter((item) => !this.friendlist.includes(item.userinfo._id));

                _this.finalArr = _this.users;
                console.log("final Array ===>", _this.finalArr); // if ( this.friendlist.length > 0) {
                //   for (let i = 0; i < this.users.length; i++) {
                //     if (!this.friendlist.includes(this.users[i].userinfo._id)) {
                //       this.finalArr.push(this.users[i])
                //     }
                //   }
                // }else {
                //     this.finalArr =this.users
                // }

                _this.pageno = result[0].pageNo;
                _this.totaldata = result[0].total;
                var thiss = _this;
                console.log("this.btnarray==>", _this.btnArr);
              } else {
                console.log("something went wrong----->");
              }
            }, function (err) {
              _this.userService.stopLoading();

              _this.userService.presentToast("Failed to send request. Please try again", "danger");
            });
          }
        }, {
          key: "getdistanceuser",
          value: function getdistanceuser() {
            var _this2 = this;

            this.users = [];
            var data = {
              discovery: localStorage.getItem("discovery"),
              distance: localStorage.getItem("distance") != "NaN" ? localStorage.getItem("distance") : null,
              age: JSON.parse(localStorage.getItem("age")),
              gender: localStorage.getItem("gender"),
              country: localStorage.getItem("country"),
              area: localStorage.getItem("area"),
              skip: this.pageno,
              _id: localStorage.getItem("user_auth_id"),
              lat: this.lat,
              lng: this.lng
            };
            this.userService.presentLoading();
            this.userService.postData(data, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + "/get_distance_users").subscribe(function (result) {
              // console.log("get distance user---->", result);
              _this2.userService.stopLoading();

              if (result.data.length > 0) {
                _this2.pageno = result.pageno;
                _this2.totaldata = result.total;
                var thiss = _this2;
                _this2.users = result.data;
              }
            }, function (err) {
              _this2.userService.stopLoading();

              _this2.userService.presentToast("Failed to send request. Please try again", "danger");
            });
          }
        }, {
          key: "loadmore",
          value: function loadmore() {
            var _this3 = this;

            if (this.users.length < this.totaldata) {
              var data = {
                discovery: localStorage.getItem("discovery"),
                distance: localStorage.getItem("distance") != "NaN" ? localStorage.getItem("distance") : null,
                age: JSON.parse(localStorage.getItem("age")),
                gender: localStorage.getItem("gender"),
                area: localStorage.getItem("area"),
                skip: this.pageno,
                _id: localStorage.getItem("user_auth_id"),
                lat: this.lat,
                lng: this.lng
              };
              this.userService.presentLoading();
              this.userService.postData(data, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + "/get_near_users").subscribe(function (result) {
                _this3.userService.stopLoading();

                if (result.length > 0) {
                  _this3.pageno = result[0].pageNo;
                  _this3.totaldata = result[0].total;
                  var thiss = _this3;
                  jquery__WEBPACK_IMPORTED_MODULE_4__.each(result, function (key, val) {
                    thiss.users.push(val);
                  }); // this.finalArr = this.users.filter((item) => !this.friendlist.includes(item.userinfo._id));

                  _this3.finalArr = _this3.users; // console.log("------", this.users);
                }
              }, function (err) {
                _this3.userService.stopLoading();

                _this3.userService.presentToast("Failed to send request. Please try again", "danger");
              });
            }
          }
        }, {
          key: "getprofiledata",
          value: function getprofiledata() {
            var _this4 = this;

            this.friendlist = [];
            this.userService.postData({
              _id: localStorage.getItem("user_auth_id")
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + "/get_user_profile_detail").subscribe(function (result) {
              console.log(" getprofiledata===>", result);
              _this4.friendlist = result.data.friendList;
              console.log("friendlist==>", _this4.friendlist);
              localStorage.setItem('connectionArray', JSON.stringify(_this4.friendlist));
              _this4.lat = Number(result.data.cords.coordinates[0]);
              _this4.lng = Number(result.data.cords.coordinates[1]); // console.log("latitude---->", this.lat, this.lng);

              if (localStorage.getItem("discovery") == "true" && localStorage.getItem("area") == "true") {
                _this4.getdistanceuser();
              } else {
                _this4.getusers();
              }
            });
          }
        }, {
          key: "getage",
          value: function getage(dob) {
            dob = new Date(dob);
            var today = new Date();
            return Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
          }
        }, {
          key: "removetab",
          value: function removetab(cl, indx) {
            jquery__WEBPACK_IMPORTED_MODULE_4__("." + cl).remove();
            jquery__WEBPACK_IMPORTED_MODULE_4__("." + indx).remove();
          }
        }, {
          key: "seletuser",
          value: function seletuser(id, userinfo) {
            if (this.SwipeService.subscribed && this.SwipeService.checkSubscriptionStatus()) {
              this.SwipeService.swipeUnlimited(id);
              localStorage.setItem("connected_user_infor", JSON.stringify(userinfo));
            } else {
              this.router.navigate(["/subscription"]);
            }
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: "Alert",
                        subHeader: "Important message",
                        message: "you have reached your daily limit!",
                        buttons: ["OK"]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return FutureConnectPage;
      }();

      _FutureConnectPage.ctorParameters = function () {
        return [{
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _swipe_service__WEBPACK_IMPORTED_MODULE_5__.SwipeService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }];
      };

      _FutureConnectPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-future-connect",
        template: _raw_loader_future_connect_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_future_connect_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FutureConnectPage);

      var _UserComponent = /*#__PURE__*/function () {
        function _UserComponent() {
          _classCallCheck(this, _UserComponent);

          this.dailyLimit = 10;
          this.swipeCount = 0;
          this.lastSwipeTime = null;
        }

        _createClass(_UserComponent, [{
          key: "swipeRight",
          value: function swipeRight() {
            if (this.lastSwipeTime === null || Number(new Date()) - Number(this.lastSwipeTime) > 86400000) {
              // reset the swipe count if it's a new day (86400000 milliseconds = 1 day)
              this.swipeCount = 0;
            }

            if (this.swipeCount < this.dailyLimit) {
              this.swipeCount++;
              this.lastSwipeTime = new Date();
              console.log("".concat(this.name, " swiped right! (").concat(this.swipeCount, "/").concat(this.dailyLimit, ")"));
            } else {
              console.log("".concat(this.name, ", you've reached your daily swipe limit!"));
            }
          }
        }]);

        return _UserComponent;
      }();
      /***/

    },

    /***/
    86857: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content[bg-grey] {\n  background: #f9f9f9;\n  --background:#f9f9f9;\n}\nion-content[bg-grey] .contet-sect {\n  padding: 25px 20px 10px;\n  display: block;\n}\nion-content[bg-grey] .top-sctin {\n  position: relative;\n  padding: 15px;\n  background: #e7eaea;\n  padding-bottom: 70px;\n  margin-bottom: -45px;\n  background-size: cover;\n  background-position: center bottom;\n  z-index: 0;\n  width: 100%;\n}\nion-content[bg-grey] .top-sctin .hedr-src {\n  padding: 0 0 5px;\n  display: flex;\n  font-size: 18px;\n  color: #4c4c4c;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content[bg-grey] .top-sctin .hedr-src .men-ico {\n  display: flex;\n  align-items: center;\n}\nion-content[bg-grey] .top-sctin .hedr-src .men-ico img {\n  width: 22px;\n}\nion-content[bg-grey] .top-sctin .hedr-src .cart-ico {\n  float: right;\n  color: #fff;\n  font-size: 26px;\n  position: relative;\n  top: -2px;\n}\nion-content[bg-grey] .top-sctin .hedr-src label.ttl-al {\n  color: #4c4c4c;\n  font-size: 16px;\n  position: relative;\n  top: 0;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\nion-content[bg-grey] .top-sctin .cont-he {\n  text-align: center;\n  color: #fff;\n  padding: 0 10px;\n}\nion-content[bg-grey] .top-sctin .cont-he h4.ttl-man {\n  margin-bottom: 0px;\n  font-size: 30px;\n}\nion-content[bg-grey] .top-sctin .cont-he p {\n  margin-top: 6px;\n  font-size: 17px;\n  color: rgba(255, 255, 255, 0.768627451);\n  line-height: 22px;\n}\nion-content[bg-grey] .top-sctin:after {\n  content: \"\";\n  position: absolute;\n  background: url('map.png');\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  z-index: -1;\n  opacity: 0.1;\n}\nion-content[bg-grey] .slids-box {\n  margin-right: -20px;\n  margin-top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly {\n  display: block;\n  width: 100%;\n  height: 135px;\n  border-radius: 0px;\n  overflow: hidden;\n  position: relative;\n}\nion-content[bg-grey] .slids-box .img-bx-sly img {\n  width: 100%;\n  height: 230px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number {\n  position: absolute;\n  bottom: 10px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly h4.name-ffls {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: #fff;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 15px;\n  background: linear-gradient(to top, #000000, #00000000);\n  line-height: 19px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis {\n  height: auto;\n  background: #fff;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis img {\n  width: 100%;\n  height: 275px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis h4.tlt-stor {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n  width: 100%;\n  font-size: 14px;\n  margin: 0px;\n  padding: 5px 10px 12px;\n  color: #000;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.likes-number {\n  bottom: auto;\n  bottom: initial;\n  top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box.new-box-a {\n  position: relative;\n  margin: 0px;\n  height: 210px;\n}\nion-content[bg-grey] .slids-box.new-box-a .slidr-ims-st img {\n  height: 210px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .top-useer-s {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  padding: 18px 20px;\n  padding-left: 60px;\n  color: #fff;\n  background: linear-gradient(to top, #00000000, #000000b0);\n  padding-bottom: 40px;\n  line-height: 15px;\n}\nion-content[bg-grey] .top-useer-s img.adm-usr {\n  width: 40px !important;\n  height: 40px !important;\n  border-radius: 50%;\n  position: absolute;\n  left: 10px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\nion-content[bg-grey] .top-useer-s h5 {\n  margin: 0px;\n  font-size: 15px;\n  margin-top: 2px;\n}\nion-content[bg-grey] .top-useer-s span.time-al {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.73);\n}\nion-content[bg-grey] span.livestm-dot {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  background: #F44336;\n  bottom: 10px;\n  right: 7px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.31);\n  background: radial-gradient(circle at 12px 12px, #f77e75, #F44336);\n}\nion-content[bg-grey] .content-all-pst {\n  padding: 7px 20px 20px;\n  /* margin-top: -35px; */\n  background: #fff;\n  z-index: 111;\n  background-color: #fff !important;\n  position: relative;\n  /* border-radius: 20px 20px 0 0;\n  box-shadow: 0px -20px 20px rgba(0, 0, 0, 0.28); */\n  min-height: 100%;\n}\nion-content[bg-grey] .content-all-pst h4.ttl-main {\n  font-size: 16px;\n}\nion-content[bg-grey] .content-all-pst p {\n  font-size: 14px;\n  color: #8a8a8a;\n  font-weight: 300;\n  letter-spacing: 0.2px;\n  line-height: 23px;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\nion-content[bg-grey] .content-all-pst .commnts {\n  position: relative;\n  padding-left: 53px;\n  z-index: 11;\n  margin-top: 20px;\n  min-height: 56px;\n  display: block;\n}\nion-content[bg-grey] .content-all-pst .commnts img.adm-usr {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  left: 0;\n  border-radius: 50%;\n  border: 1px solid rgba(112, 181, 255, 0.74);\n  /* box-shadow: 0px 4px 14px rgba(4, 158, 102, 0.18); */\n  top: 0px;\n}\nion-content[bg-grey] .content-all-pst .commnts h5 {\n  font-size: 14px;\n  margin: 0px;\n  color: #30D5C8;\n  font-weight: 500;\n}\nion-content[bg-grey] .content-all-pst .commnts h5 span.time-al {\n  float: right;\n  font-size: 10px;\n  color: #b5b5b5;\n}\nion-content[bg-grey] .content-all-pst .commnts p {\n  font-size: 12px;\n  line-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 0px;\n}\nion-content[bg-grey] .mt-20 {\n  margin-top: 20px !important;\n}\nion-content[bg-grey] .add-commnt {\n  position: relative;\n  margin-top: 15px;\n  padding-right: 54px;\n}\nion-content[bg-grey] .add-commnt ion-input {\n  background: #f9f9f9;\n  --padding: 14px;\n  --padding-start: 20px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-size: 14px;\n  color: #000;\n  --border-radius: 50px;\n  border-radius: 50px;\n  border: 1px solid #f3f3f3;\n  height: 45px;\n}\nion-content[bg-grey] .add-commnt a.btn-send {\n  width: 45px;\n  height: 45px;\n  background: var(--ion-color-gradient1);\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 19px;\n}\nion-content[bg-grey] .conts-slder {\n  position: absolute;\n  bottom: 0;\n  z-index: 11;\n  background: linear-gradient(to top, black, transparent);\n  left: 0;\n  right: 0;\n  color: #fff;\n  padding: 15px;\n}\nion-content[bg-grey] .conts-slder h4 {\n  font-size: 18px;\n  margin-bottom: 7px;\n  font-weight: 500;\n}\nion-content[bg-grey] .conts-slder ul.rating-all {\n  padding: 0px;\n  margin: 0px;\n  display: block;\n  list-style: none;\n}\nion-content[bg-grey] .conts-slder ul.rating-all li {\n  display: inline-block;\n  margin-right: 2px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\nion-content[bg-grey] .conts-slder ul.rating-all li.oprn-trsa {\n  background: #8BC34A;\n  color: #fff !important;\n  padding: 3px 8px 3px 8px;\n  font-size: 11px !important;\n  font-weight: 500;\n  border-radius: 50px;\n  letter-spacing: 0.5px;\n  opacity: 1 !important;\n  margin-left: 6px;\n  position: relative;\n  top: -1px;\n}\nion-content[bg-grey] .conts-slder ul.rating-all li.active {\n  color: #FFC107;\n}\nion-content[bg-grey] .conts-slder ul.rating-all li.totl-rv {\n  margin-left: 7px;\n  color: #fff;\n  font-size: 12px;\n  vertical-align: top;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  position: relative;\n  top: 2px;\n}\nion-content[bg-grey] span.opn-cl {\n  position: absolute;\n  right: 0;\n  bottom: 25px;\n  z-index: 11111;\n  background: linear-gradient(to right, #FF5722, #FFC107);\n  color: #fff;\n  padding: 5px 10px 5px 14px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 50px 0 0 50px;\n  letter-spacing: 0.5px;\n}\nion-content[bg-grey] span.opn-cl ion-icon {\n  font-size: 16px;\n  vertical-align: text-bottom;\n}\nion-content[bg-grey] span.favor-icn {\n  width: 35px;\n  height: 35px;\n  background: rgba(255, 255, 255, 0.3);\n  position: absolute;\n  left: 15px;\n  z-index: 1;\n  border-radius: 50%;\n  line-height: 42px;\n  text-align: center;\n  color: #f1f1f1;\n  font-size: 19px;\n  top: 13px;\n}\nion-content[bg-grey] .specilis .slide {\n  width: 100%;\n}\nion-content[bg-grey] .specilis .artict-str {\n  background: #fff;\n  padding: 10px 7px;\n  border: 1px solid #f1f1f1;\n  border-radius: 7px;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.06);\n  margin-bottom: 20px;\n}\nion-content[bg-grey] .specilis .artict-str img.img-ua {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: 1px solid #70b5ff;\n  padding: 2px;\n  margin-top: 2px;\n}\nion-content[bg-grey] .specilis .artict-str h5 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 5px;\n  margin-bottom: 3px;\n}\nion-content[bg-grey] .specilis .artict-str p {\n  margin: 0px;\n  font-size: 12px;\n  color: #b3b3b3;\n}\nion-content[bg-grey] .specilis {\n  padding: 0 0 5px 15px;\n}\nion-content[bg-grey] .specilis h4.ttl-main {\n  font-size: 18px;\n}\nion-content[bg-grey] ul.open-hrs {\n  margin: 0px;\n  padding: 0px;\n  margin-top: -3px;\n  list-style: none;\n}\nion-content[bg-grey] ul.open-hrs li {\n  font-size: 14px;\n  color: #8a8a8a;\n  padding: 7px 0;\n  display: block;\n  position: relative;\n  z-index: 0;\n}\nion-content[bg-grey] ul.open-hrs li span {\n  background: #fff;\n  padding-right: 5px;\n}\nion-content[bg-grey] ul.open-hrs li span.right-ts {\n  float: right;\n  color: #222;\n  font-weight: 500;\n  padding-left: 5px;\n  padding-right: 0px;\n}\nion-content[bg-grey] ul.open-hrs li:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.13);\n  z-index: -1;\n  top: 15px;\n}\nion-content[bg-grey] p.loct ion-icon {\n  vertical-align: text-bottom;\n  font-size: 16px;\n  color: #777;\n}\nion-content[bg-grey] .gg-map {\n  flex: 0 0 50%;\n}\nion-content[bg-grey] .gg-map iframe {\n  border: 0;\n  height: 100%;\n}\nion-content[bg-grey] h4.ttl-main.tct-btn {\n  margin-bottom: 15px;\n  font-size: 18px !important;\n}\nion-content[bg-grey] a.btn-cat {\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  font-size: 16px;\n  border-radius: 50%;\n  text-align: center;\n  position: absolute;\n  bottom: 18px;\n  z-index: 111;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  line-height: 34px;\n  font-size: 14px;\n  right: 15px;\n  margin: 0px;\n}\nion-content[bg-grey] a.btn-pho {\n  float: right;\n  background: linear-gradient(to right, #FF9800, #FF5722);\n  color: #fff;\n  border-radius: 50%;\n  text-align: center;\n  margin-right: 8px;\n  position: absolute;\n  top: 13px;\n  z-index: 111;\n  right: 0;\n  width: 35px;\n  height: 35px;\n  line-height: 41px;\n  font-size: 18px;\n  right: 52px;\n  margin: 0px;\n}\nion-content[bg-grey] .srv-box {\n  position: relative;\n  padding: 10px;\n  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03); */\n  margin-bottom: 12px;\n  border: 1px solid #f9f9f9;\n  border-radius: 7px;\n  background: #f9f9f9;\n  padding-left: 70px;\n  display: flex;\n  justify-content: space-between;\n  min-height: 70px;\n  align-items: center;\n}\nion-content[bg-grey] .srv-box span.icon-srv {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  left: 10px;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 10px;\n}\nion-content[bg-grey] .srv-box span.icon-srv img {\n  width: 28px;\n}\nion-content[bg-grey] .srv-box span.srv-t {\n  font-size: 9px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  color: #c3c3c3;\n}\nion-content[bg-grey] .srv-box span.srv-t h5 {\n  margin: 0px;\n  margin-top: 6px;\n  font-size: 15px;\n  color: #222;\n  font-weight: 500;\n}\nion-content[bg-grey] .srv-box.selected {\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  color: #fff;\n}\nion-content[bg-grey] .srv-box.selected span.icon-srv {\n  background: #fff;\n}\nion-content[bg-grey] .srv-box.selected span.icon-srv img {\n  filter: invert(0.3);\n}\nion-content[bg-grey] .srv-box.selected span.srv-t {\n  color: rgba(255, 255, 255, 0.81);\n}\nion-content[bg-grey] .srv-box.selected span.srv-t h5 {\n  color: #fff;\n}\nion-content[bg-grey] .srv-box.selected span.select-check {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  display: block;\n}\n.add-rev {\n  /* margin: 0 -20px; */\n  position: relative;\n  z-index: 111;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #f3f3f3;\n  padding-bottom: 25px;\n}\nul.add-rat-all {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\nul.add-rat-all li {\n  display: inline-block;\n  font-size: 14px;\n  margin-left: 2px;\n  color: #c7c7c7;\n}\nul.add-rat-all li.active {\n  color: #FFC107;\n}\nul.add-rat-all.all-rtsa {\n  position: absolute;\n  top: 39px;\n  left: 0px;\n}\nul.add-rat-all.all-rtsa li {\n  font-size: 8px !important;\n  margin: 0px !important;\n}\nion-footer.foot-book {\n  padding: 15px 20px;\n  box-shadow: 0px -7px 15px rgba(0, 0, 0, 0.08);\n  z-index: 1111;\n}\nion-footer.foot-book ion-button.btn-login {\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  --background-color: transparent;\n  --background: linear-gradient(to right, #6fcdff, #70b0ff);\n  border: none;\n  --border: none;\n  box-shadow: 0 10px 25px rgba(112, 177, 255, 0.15);\n  border-radius: 50px;\n  --border-radius: 50px;\n  overflow: hidden;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 1px;\n  height: 46px;\n  margin: 0px;\n}\n.specilis h4.ttl-main {\n  margin-bottom: 15px;\n}\n.specilis h4.ttl-main span.report-txt {\n  float: right;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  background: #F44336;\n  padding: 5px 10px;\n  margin-top: -2px;\n  border-radius: 50px 0 0 50px;\n}\n.specilis h4.ttl-main span.report-txt ion-icon {\n  vertical-align: text-bottom;\n}\nion-segment.segmt-details ion-segment-button {\n  font-size: 14px;\n}\n.box-servc {\n  position: relative;\n  background: #f9f9f9;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 18px;\n  padding-left: 107px;\n  min-height: 110px;\n  display: flex;\n  align-items: center;\n}\n.box-servc .img-b {\n  position: absolute;\n  left: 0;\n  width: 110px;\n  height: 100%;\n}\n.box-servc .img-b img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.box-servc .img-b:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.05);\n  z-index: 0;\n}\n.box-servc .img-b span.badg-catr {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 10px;\n  background: linear-gradient(to top left, #6fcdff, #70b0ff);\n  padding: 5px 12px 5px 12px;\n  color: #fff;\n  text-transform: capitalize;\n  text-decoration: none;\n  border-radius: 50px;\n  font-weight: 500;\n  z-index: 11;\n  letter-spacing: 0.5px;\n}\n.box-servc .img-b span.date-icn {\n  width: 40px;\n  height: 40px;\n  background: linear-gradient(to right, #8c8c8c, #000000);\n  color: #fff;\n  font-family: \"Ubuntu\", sans-serif !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  z-index: 11;\n  left: 0;\n}\n.box-servc .img-b span.date-icn small {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.82);\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\n.box-servc .cot-a {\n  text-align: left;\n  position: relative;\n  padding: 10px 14px;\n  height: 100%;\n  width: 100%;\n}\n.box-servc .cot-a h4 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #3a3a3a;\n  margin-bottom: 3px;\n}\n.box-servc .cot-a h4 span.right-price {\n  float: right;\n  color: #70b1ff;\n}\n.box-servc .cot-a ul.rating-all {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: block;\n  margin-top: 3px;\n  margin-bottom: 8px;\n}\n.box-servc .cot-a ul.rating-all li {\n  display: inline-block;\n  font-size: 13px;\n  margin-right: 2px;\n  color: #c3c3c3;\n}\n.box-servc .cot-a ul.rating-all li.active {\n  color: #f8c50a;\n}\n.box-servc .cot-a ul.rating-all li.totl-rv {\n  color: #000000;\n  font-weight: 600;\n  position: relative;\n  margin-right: 0px;\n  margin-left: 3px;\n  top: -1px;\n  font-size: 12px;\n}\n.box-servc .cot-a p {\n  margin: 0px !important;\n  font-size: 13px !important;\n  line-height: 22px !important;\n}\n.box-servc .cot-a p ion-icon {\n  vertical-align: bottom;\n  font-size: 16px;\n}\n.box-servc .cot-a p.b-price {\n  font-size: 14px;\n  color: #6fb2fd;\n  margin-top: 8px;\n  margin-bottom: 0px;\n}\n.box-servc.selected {\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  color: #fff;\n}\n.box-servc.selected .cot-a h4 {\n  color: #fff;\n}\n.box-servc.selected .cot-a p {\n  color: rgba(255, 255, 255, 0.7);\n}\n.box-servc.selected .cot-a p.b-price {\n  color: #fff;\n}\n.box-servc.selected span.select-check {\n  position: absolute;\n  top: 11px;\n  right: 7px;\n  font-size: 18px;\n}\nspan.off-dis {\n  position: absolute;\n  top: 18px;\n  z-index: 11;\n  background: linear-gradient(to right, #3F51B5, #F44336);\n  padding: 5px 10px 5px 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  border-radius: 0 50px 50px 0;\n}\n.img-b-sta {\n  position: relative;\n  margin-top: 5px;\n  margin-bottom: 35px;\n}\n.img-b-sta img {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid rgba(118, 187, 253, 0.28);\n  padding: 2px;\n}\n.img-b-sta span.dle-im {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: linear-gradient(to top left, #F44336, #E91E63);\n  color: #fff;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.cont-slydt {\n  display: flex;\n  background: #ececec;\n  border-radius: 7px;\n  margin-top: 15px;\n  overflow: hidden;\n}\n.cont-slydt .add-cit {\n  padding: 15px;\n  flex: 0 0 50%;\n  color: #222;\n  font-size: 12px;\n}\n.cont-slydt .add-cit p.loct {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #222;\n}\n.cont-slydt .add-cit h5 {\n  font-size: 15px;\n  margin: 0px;\n  margin-bottom: 6px;\n  font-weight: 700;\n}\n.cont-slydt .add-cit p.longt {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 19px;\n  color: #222;\n  border-bottom: 1px solid #d8d8d8;\n  padding-bottom: 10px;\n}\n.cont-slydt .add-cit a.bt-syys {\n  display: inline-block;\n  background: var(--ion-color-gradient1);\n  padding: 4px 13px;\n  border-radius: 50px;\n  font-size: 11px;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n}\nul.features-fsc {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  display: block;\n}\nul.features-fsc li {\n  display: inline-block;\n}\nul.features-fsc li span {\n  font-size: 10px;\n  background: #dcefed;\n  color: #13b0a3;\n  padding: 2px 10px;\n  margin: 2px 2px;\n  display: inline-block;\n  border-radius: 50px;\n  font-weight: 600;\n  border: 1px solid #a8e4df;\n}\n.slidrs.appoints {\n  margin-bottom: -15px;\n}\n.slidrs.appoints .slide {\n  width: 100%;\n  margin-bottom: 40px;\n}\n.slidrs.appoints .slide .vcotr {\n  text-align: center;\n  background: #f7f7f7;\n  padding: 12px;\n  border-radius: 5px;\n}\n.slidrs.appoints .slide .vcotr h5 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.slidrs.appoints .slide .vcotr img {\n  width: 60px;\n  height: 60px;\n  background: var(--ion-color-gradient1);\n  padding: 10px;\n  border-radius: 50%;\n}\n.slidrs.appoints .slide .vcotr p {\n  margin: 0px;\n  color: #737373;\n  font-size: 13px;\n  font-weight: 400;\n}\n.slidrs.appoints .slide .vcotr p.tsmr {\n  font-size: 12px;\n  margin: 0px;\n  font-weight: 500;\n  color: #12afa2;\n}\n.slidrs.appoints .slide .vcotr p.tsmr span {\n  font-weight: 700;\n  color: #f44336;\n}\nion-segment.segmt-desig {\n  margin-bottom: 0px;\n  margin-top: 20px;\n  border-radius: 50px;\n  background: rgba(255, 255, 255, 0.75);\n  padding: 2px 3px;\n}\nion-segment.segmt-desig ion-segment-button {\n  font-family: \"Ubuntu\", sans-serif !important;\n  padding: 5px;\n  border-radius: 50px !important;\n  --border-radius: 50px !important;\n  height: 38px;\n  min-height: 38px;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 500;\n  color: #4267B2;\n  padding: 0px;\n  --border-radius: 50px !important;\n  overflow: hidden;\n}\nion-segment.segmt-desig ion-segment-button.segment-button-checked.ion-activatable {\n  background: var(--ion-color-gradient1) !important;\n  --background: var(--ion-color-gradient1) !important;\n  --indicator-color: var(--ion-color-gradient1) !important;\n  box-shadow: none;\n  color: #fff;\n  --indicator-color: transparent!important;\n}\n.flds-login {\n  padding: 0;\n  background: #f9f9f9;\n  z-index: 111;\n  position: relative;\n  border-radius: 20px 20px 0 0;\n  min-height: calc(100vh - 153px);\n  overflow: hidden;\n  box-shadow: 0px -8px 10px rgba(0, 0, 0, 0.04);\n}\n.phot-slides {\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid #f1f1f1;\n  margin-bottom: 0px;\n}\n.phot-slides ul.data-cont {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  padding: 20px 15px;\n}\n.phot-slides ul.data-cont li {\n  font-size: 14px;\n  padding: 8px 0;\n  color: #4c4c4c;\n  font-weight: 600;\n  position: relative;\n  z-index: 0;\n  /* border-bottom: 1px solid #eaeaea; */\n}\n.phot-slides ul.data-cont li:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-bottom: 1px dashed #d6d6d6;\n  top: 18px;\n  z-index: -1;\n}\n.phot-slides ul.data-cont li span {\n  background: #fff;\n  display: inline-block;\n}\n.phot-slides ul.data-cont li span.details-trip {\n  float: right;\n  font-weight: 500;\n}\n.phot-slides ul.data-cont li.descri {\n  padding-top: 2px;\n  font-weight: 400;\n  line-height: 23px;\n}\n.phot-slides ul.data-cont li.descri:before {\n  display: none;\n}\n.flds-login ion-list {\n  --background: transparent;\n  background: transparent;\n}\n.cot-ddr .gg-map {\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  border: 1px solid #f1f1f1;\n  background: #fff;\n}\n.img-het-map {\n  height: 100%;\n  position: relative;\n  min-height: calc(100vh - 138px);\n}\n.img-het-map img.img-st {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: calc(100vh - 138px);\n  width: 100%;\n}\n.cont-usre {\n  position: absolute;\n  top: 0;\n  padding: 20px 20px 60px;\n  background: linear-gradient(to top, transparent, black);\n  padding-left: 85px;\n  left: 0;\n  right: 0;\n  color: #fff;\n}\n.cont-usre img {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  left: 20px;\n}\n.cont-usre h5 {\n  margin: 0px;\n  font-size: 13px;\n  letter-spacing: 1px;\n  margin-top: 4px;\n  color: #d0d0d0;\n}\n.cont-usre h3 {\n  margin: 0px;\n  font-size: 18px;\n  margin-top: 5px;\n}\n.bottom-cont-all {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #f5f5f5;\n  padding: 20px 0px 20px 20px;\n}\n.bottom-cont-all ul.btn-slly {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.bottom-cont-all ul.btn-slly li {\n  display: inline-block;\n  padding-right: 15px;\n  position: relative;\n  z-index: 0;\n  vertical-align: middle;\n  text-align: center;\n  line-height: 10px;\n}\n.bottom-cont-all ul.btn-slly li .home-ison {\n  font-size: 10px;\n  line-height: 12px;\n  color: #b9b9b9;\n  text-decoration: none;\n  font-weight: 600;\n  display: inline-block;\n}\n.bottom-cont-all ul.btn-slly li .home-ison span.icon-s {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #e6ecf9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-bottom: 7px;\n  color: #4267B2;\n  font-size: 18px;\n  border: 1px solid #a3bbec;\n  margin-top: 21px;\n}\n.bottom-cont-all ul.btn-slly li .home-ison span.plusd-s {\n  font-size: 20px;\n  color: #4267B2;\n}\n.bottom-cont-all ul.btn-slly li:last-child {\n  padding-right: 0px;\n}\n.bottom-cont-all ul.btn-slly > li:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid #c2e2e0;\n  top: calc(50% - 2px);\n  z-index: -1;\n}\n.box-imgsd {\n  position: relative;\n  background: #f9f9f9;\n  border-radius: 5px;\n  overflow: hidden;\n  /*box-shadow: 0px 3px 10px rgba(0 0 0 / 14%);*/\n  box-shadow: rgba 0, 0, 0, 1.4;\n  position: relative;\n}\n.box-imgsd .top-kk {\n  position: relative;\n}\n.box-imgsd .top-kk img.img-bosf0 {\n  width: 150px;\n  height: 90px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.box-imgsd .top-kk .cont-dates {\n  background: linear-gradient(to bottom, transparent, black);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  color: #fff;\n  text-align: left;\n  padding: 10px;\n}\n.box-imgsd .top-kk .cont-dates span.flag-txt {\n  display: block;\n  font-size: 10px;\n  margin-top: 9px;\n}\n.box-imgsd .top-kk .cont-dates span.flag-txt img {\n  width: 17px;\n  vertical-align: middle;\n  margin-right: 3px;\n}\n.box-imgsd ul.list-ll {\n  padding: 0px 6px;\n  margin: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.box-imgsd ul.list-ll li {\n  padding: 10px 4px !important;\n  font-size: 10px;\n  /* padding-right: 0 !important; */\n  color: #545454;\n}\n.box-imgsd ul.list-ll li span {\n  font-size: 12px;\n  vertical-align: text-top;\n  position: relative;\n  top: 1px;\n}\nul.btn-slly {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  scroll-behavior: smooth;\n  display: block;\n  padding-right: 20px !important;\n}\nul.btn-slly > li {\n  display: inline-block;\n  overflow: hidden;\n}\nspan.btn-icond {\n  position: absolute;\n  top: -23px;\n  background: var(--ion-color-gradient1) !important;\n  font-size: 10px;\n  color: #fff;\n  font-weight: 600;\n  padding: 3px 7px;\n}\nspan.btn-icond ion-icon {\n  font-size: 17px;\n  vertical-align: bottom;\n}\nspan.btn-icond:after {\n  content: \"\";\n  position: absolute;\n  border: 7px solid #222;\n  border-color: #1abaad transparent transparent transparent;\n  bottom: -14px;\n  left: 8px;\n}\n#map {\n  height: 250px;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide img {\n  max-height: 100%;\n  max-width: 100%;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nb {\n  font-weight: 500;\n}\np {\n  padding: 0;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #ffff;\n  margin: 10px 0;\n  padding-left: 15px;\n}\np b {\n  color: #000000;\n  color: var(--ion-text-color, #000000);\n}\nion-row.buttonss {\n  text-align: center;\n  margin-left: 24px;\n}\nion-button {\n  height: 50px;\n}\nion-button ion-icon {\n  font-size: 58px;\n}\n[contentSlider] {\n  position: absolute;\n  z-index: 2;\n  bottom: 0;\n  width: 100%;\n  text-align: left;\n}\n[contentSlider] h2 {\n  color: #fff;\n  margin: 0;\n  padding-left: 15px;\n}\n[contentSlider] .buttonss {\n  padding: 15px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 20px 20px 0 0;\n  margin-top: 25px;\n  text-align: center;\n}\n[contentSlider] .buttonss ion-button {\n  margin: 0 8px;\n  padding: 0;\n  --padding-bottom: 9px;\n  --padding-end: 9px;\n  --padding-top: 9px;\n  --padding-start: 9px;\n  height: 63px;\n  --border-radius: 100px;\n  --background: #fff;\n  --color: #3171e0;\n}\n[contentSlider] .buttonss ion-button ion-icon {\n  font-size: 45px;\n}\n[contentSlider] .buttonss ion-button[rejectColor] {\n  --background: #C40B00;\n}\n[contentSlider] .buttonss ion-button[rejectColor] ion-icon {\n  color: #fff;\n}\n[contentSlider] .buttonss ion-button[sucCess] {\n  --background: #1B9E43;\n}\n[contentSlider] .buttonss ion-button[sucCess] ion-icon {\n  color: #fff;\n}\n[imgGradient] {\n  width: 100%;\n  height: 100%;\n}\n[imgGradient]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  background: linear-gradient(to bottom, rgba(0, 47, 75, 0) 0%, rgba(0, 0, 0, 0.9) 92%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1dHVyZS1jb25uZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1CQUFBO0VBQ0Esb0JBQUE7QUFDRDtBQUNDO0VBQ0MsdUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDQztFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDSyxnQkFBQTtFQUNILGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQURHO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FBR0o7QUFGSTtFQUNDLFdBQUE7QUFJTDtBQURHO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBR0o7QUFERztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUdKO0FBQUU7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRUg7QUFERztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBREc7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7QUFHSjtBQUFFO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVIO0FBQ0M7RUFDQyxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVIO0FBREc7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFHSjtBQURHO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFHSjtBQUZJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSUw7QUFERztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1REFBQTtFQUNBLGlCQUFBO0FBR0o7QUFBRTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtBQUVIO0FBREc7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFHSjtBQURHO0VBQ0MsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFHSjtBQURHO0VBQ0MsWUFBQTtFQUFBLGVBQUE7RUFDQSxTQUFBO0FBR0o7QUFERztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBR0o7QUFGSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUlMO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDRztFQUNDLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNKO0FBR0M7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlEQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQURGO0FBRUU7RUFDQyxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUg7QUFFRTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFIO0FBRUU7RUFDQyxlQUFBO0VBQ0EsZ0NBQUE7QUFBSDtBQUdDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0VBQUE7QUFERjtBQUdDO0VBQ0Msc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQTttREFBQTtFQUVBLGdCQUFBO0FBREY7QUFFRTtFQUNDLGVBQUE7QUFBSDtBQUVFO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBSDtBQUVFO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFIO0FBQ0c7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxzREFBQTtFQUNBLFFBQUE7QUFDSjtBQUNHO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRUw7QUFDRztFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKO0FBR0M7RUFDQywyQkFBQTtBQURGO0FBR0M7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUVFO0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUFIO0FBRUU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFIO0FBR0M7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBREY7QUFFRTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUg7QUFFRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUg7QUFDRztFQUNDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUNHO0VBQ0MsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0o7QUFDRztFQUNDLGNBQUE7QUFDSjtBQUNHO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUNKO0FBR0M7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQURGO0FBRUU7RUFDQyxlQUFBO0VBQ0EsMkJBQUE7QUFBSDtBQUdDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFERjtBQUlFO0VBQ0MsV0FBQTtBQUZIO0FBSUU7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUFGSDtBQUdHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjtBQUdHO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0c7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFESjtBQUtDO0VBQ0MscUJBQUE7QUFIRjtBQUtDO0VBQ0MsZUFBQTtBQUhGO0FBS0M7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQUlFO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZIO0FBR0c7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHRztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsNkNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQURKO0FBTUU7RUFDQywyQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSkg7QUFPQztFQUNDLGFBQUE7QUFMRjtBQU1FO0VBQ0MsU0FBQTtFQUNBLFlBQUE7QUFKSDtBQU9DO0VBQ0MsbUJBQUE7RUFDQSwwQkFBQTtBQUxGO0FBT0M7RUFDQyxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUxGO0FBT0M7RUFDQyxZQUFBO0VBQ0EsdURBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBTEY7QUFPQztFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQU1FO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUpIO0FBS0c7RUFDQyxXQUFBO0FBSEo7QUFNRTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUpIO0FBS0c7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU9DO0VBQ0MsdURBQUE7RUFDQSxXQUFBO0FBTEY7QUFNRTtFQUNDLGdCQUFBO0FBSkg7QUFLRztFQUNDLG1CQUFBO0FBSEo7QUFNRTtFQUNDLGdDQUFBO0FBSkg7QUFLRztFQUNDLFdBQUE7QUFISjtBQU1FO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFKSDtBQVNBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFOSjtBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBTEo7QUFPQztFQUNDLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUxGO0FBT0M7RUFDQyxjQUFBO0FBTEY7QUFTQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFORDtBQU9DO0VBQ0MseUJBQUE7RUFDQSxzQkFBQTtBQUxGO0FBU0E7RUFDSSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtBQU5KO0FBT0M7RUFDQyx1REFBQTtFQUNBLCtCQUFBO0VBQ0EseURBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTEY7QUFTQztFQUNDLG1CQUFBO0FBTkY7QUFPRTtFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFMSDtBQU1HO0VBQ0MsMkJBQUE7QUFKSjtBQVNBO0VBQ0ksZUFBQTtBQU5KO0FBU0E7RUFDQyxrQkFBQTtFQUNHLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU5KO0FBT0M7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUxIO0FBTUU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFKSDtBQU1FO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtBQUpIO0FBTUU7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBEQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFKSDtBQU1FO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0FBSkg7QUFLRztFQUNDLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFISjtBQU9DO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMRjtBQU1FO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUpIO0FBS0c7RUFDQyxZQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpIO0FBS0c7RUFDQyxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFISjtBQUtHO0VBQ0MsY0FBQTtBQUhKO0FBS0c7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDQyxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFKSDtBQUtHO0VBQ0Msc0JBQUE7RUFDQSxlQUFBO0FBSEo7QUFNRTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSkg7QUFTQTtFQUNJLHVEQUFBO0VBQ0EsV0FBQTtBQU5KO0FBUUU7RUFDQyxXQUFBO0FBTkg7QUFRRTtFQUNDLCtCQUFBO0FBTkg7QUFRRTtFQUNDLFdBQUE7QUFOSDtBQVVDO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFSRjtBQVdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVEQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUFSSjtBQVVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVFFO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7QUFOSDtBQVFFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMERBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFOSDtBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDSCxnQkFBQTtFQUNHLGdCQUFBO0FBTko7QUFPQztFQUNDLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFMRjtBQU1FO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSkg7QUFNRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUpIO0FBTUU7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FBSkg7QUFNRTtFQUNDLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBSkg7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBTEo7QUFNQztFQUNDLHFCQUFBO0FBSkY7QUFLRTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUhIO0FBT0E7RUFDQyxvQkFBQTtBQUpEO0FBS0M7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQUlFO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUZIO0FBR0c7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0c7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0c7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURKO0FBRUk7RUFDQyxnQkFBQTtFQUNBLGNBQUE7QUFBTDtBQU1BO0VBQ0Msa0JBQUE7RUFDRyxnQkFBQTtFQUNILG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQUhEO0FBSUM7RUFDQyw0Q0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUM7RUFDQyxpREFBQTtFQUNBLG1EQUFBO0VBQ0Esd0RBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQUZGO0FBS0E7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtBQUZKO0FBSUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBREo7QUFFQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGO0FBQ0U7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBQ0g7QUFBRztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUc7RUFDQyxnQkFBQTtFQUNBLHFCQUFBO0FBRUo7QUFBRztFQUNDLFlBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQ0U7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSDtBQUFHO0VBQ0MsYUFBQTtBQUVKO0FBSUM7RUFDQyx5QkFBQTtFQUNBLHVCQUFBO0FBREY7QUFLQztFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUtBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFGSjtBQUdDO0VBQ0Msb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSx1QkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFESjtBQUVDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFBRjtBQUVDO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUY7QUFFQztFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFGO0FBSUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUVDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGO0FBQ0U7RUFDQyxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0g7QUFBRztFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFFSjtBQURJO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBR0w7QUFESTtFQUNDLGVBQUE7RUFDQSxjQUFBO0FBR0w7QUFDRTtFQUFvQixrQkFBQTtBQUV0QjtBQUNDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUM7RUFDQyxrQkFBQTtBQUVGO0FBREU7RUFDQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFHSDtBQURFO0VBQ0MsMERBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFHSDtBQUZHO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSUo7QUFISTtFQUNDLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBS0w7QUFBQztFQUNDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRUY7QUFERTtFQUNDLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQUdIO0FBRkc7RUFDQyxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFJSjtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDSCxjQUFBO0VBQ0EsOEJBQUE7QUFFRDtBQUFBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQUdKO0FBREE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlKO0FBSEM7RUFDQyxlQUFBO0VBQ0Esc0JBQUE7QUFLRjtBQUhDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5REFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBS0Y7QUFEQTtFQUNFLGFBQUE7QUFJRjtBQUFJO0VBQ0UsWUFBQTtBQUdOO0FBQUk7RUFDRSxjQUFBO0FBR047QUFDSTtFQUNGLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBRUY7QUFDSTtFQUNFLGdCQUFBO0FBRU47QUFDSTtFQUNGLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUY7QUFDSTtFQUNFLGNBQUE7RUFBQSxxQ0FBQTtBQUVOO0FBQ0k7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFDSTtFQUVBLFlBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBRUE7RUFDQyxrQkFBQTtFQUNHLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBQztFQUNDLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFDO0VBQ0MsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7QUFERTtFQUNDLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBR0g7QUFGRztFQUNDLGVBQUE7QUFJSjtBQUZHO0VBQ0MscUJBQUE7QUFJSjtBQUhJO0VBQ0MsV0FBQTtBQUtMO0FBRkc7RUFDQyxxQkFBQTtBQUlKO0FBSEk7RUFDQyxXQUFBO0FBS0w7QUFFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBQ0Q7QUFBQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFGQUFBO0FBRUYiLCJmaWxlIjoiZnV0dXJlLWNvbm5lY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnRbYmctZ3JleV0ge1xuXHRiYWNrZ3JvdW5kOiNmOWY5Zjk7XG5cdC0tYmFja2dyb3VuZDojZjlmOWY5O1xuXHRcblx0LmNvbnRldC1zZWN0IHtcblx0XHRwYWRkaW5nOjI1cHggMjBweCAxMHB4O1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cdC50b3Atc2N0aW4ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdGJhY2tncm91bmQ6ICNlN2VhZWE7XG5cdFx0cGFkZGluZy1ib3R0b206IDcwcHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogLTQ1cHg7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuXHRcdHotaW5kZXg6MDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQuaGVkci1zcmMge1xuXHRcdFx0ICAgIHBhZGRpbmc6IDAgMCA1cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0Y29sb3I6ICM0YzRjNGM7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdC5tZW4taWNvIHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHR3aWR0aDogMjJweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0LmNhcnQtaWNvIHtcblx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0Zm9udC1zaXplOiAyNnB4O1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHRvcDogLTJweDtcblx0XHRcdH1cblx0XHRcdGxhYmVsLnR0bC1hbCB7XG5cdFx0XHRcdGNvbG9yOiAjNGM0YzRjO1xuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5jb250LWhlIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0cGFkZGluZzogMCAxMHB4O1xuXHRcdFx0aDQudHRsLW1hbiB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdFx0fVxuXHRcdFx0cCB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDZweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxN3B4O1xuXHRcdFx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2ODYyNzQ1MDk4MDM5MjIpO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMjJweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OlwiXCI7XG5cdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0XHRcdGJhY2tncm91bmQ6dXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9tYXAucG5nXCIpOyBcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHR6LWluZGV4OiAtMTtcblx0XHRcdG9wYWNpdHk6IDAuMTtcblx0XHR9XG5cdH1cblx0LnNsaWRzLWJveCB7XG5cdFx0bWFyZ2luLXJpZ2h0Oi0yMHB4O1xuXHRcdG1hcmdpbi10b3A6MTVweDtcblx0XHQuaW1nLWJ4LXNseSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMzVweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDBweDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAyMzBweDtcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLmxpa2VzLW51bWJlciB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0Ym90dG9tOiAxMHB4O1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXHRcdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRwYWRkaW5nOiAzcHggNnB4IDNweCAxMHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTRweDtcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRoNC5uYW1lLWZmbHMge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwMDAwICwgIzAwMDAwMDAwKTtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE5cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5pbWctYngtc2x5LnN0b3JpcyB7XG5cdFx0XHRoZWlnaHQ6YXV0bztcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcblx0XHRcdGltZyB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDI3NXB4O1xuXHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdH1cblx0XHRcdGg0LnRsdC1zdG9yIHtcblx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRwYWRkaW5nOiA1cHggMTBweCAxMnB4O1xuXHRcdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdH1cblx0XHRcdHNwYW4ubGlrZXMtbnVtYmVyICB7XG5cdFx0XHRcdGJvdHRvbTogaW5pdGlhbDtcblx0XHRcdFx0dG9wOiAxNXB4O1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5tZXNncy1udW1iZXIge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogNDdweDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0cGFkZGluZzogM3B4IDZweCAzcHggMTBweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweCAwIDAgNTBweDtcblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHR3aWR0aDogMTRweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE0cHg7XG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IHN1Yjtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuc2xpZHMtYm94Lm5ldy1ib3gtYSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbjogMHB4O1xuXHRcdGhlaWdodDogMjEwcHg7XG5cdFx0LnNsaWRyLWltcy1zdCB7XG5cdFx0XHRpbWcge1xuXHRcdFx0XHRoZWlnaHQ6IDIxMHB4O1xuXHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XHRvYmplY3QtZml0OmNvdmVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQudG9wLXVzZWVyLXMge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nOiAxOHB4IDIwcHg7XG5cdFx0cGFkZGluZy1sZWZ0OiA2MHB4O1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAwMDAwMCwgIzAwMDAwMGIwKTtcblx0XHRwYWRkaW5nLWJvdHRvbTogNDBweDtcblx0XHRsaW5lLWhlaWdodDogMTVweDtcblx0XHRpbWcuYWRtLXVzciB7XG5cdFx0XHR3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuXHRcdFx0aGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRsZWZ0OiAxMHB4O1xuXHRcdFx0LW8tb2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHR9XG5cdFx0aDUge1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRtYXJnaW4tdG9wOiAycHg7XG5cdFx0fVxuXHRcdHNwYW4udGltZS1hbCB7XG5cdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjczKTtcblx0XHR9XG5cdH1cblx0c3Bhbi5saXZlc3RtLWRvdCB7XG5cdFx0d2lkdGg6IDEycHg7XG5cdFx0aGVpZ2h0OiAxMnB4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRiYWNrZ3JvdW5kOiAjRjQ0MzM2O1xuXHRcdGJvdHRvbTogMTBweDtcblx0XHRyaWdodDogN3B4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzEpO1xuXHRcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTJweCAxMnB4LCAjZjc3ZTc1LCAjRjQ0MzM2KTtcblx0fVxuXHQuY29udGVudC1hbGwtcHN0IHtcblx0XHRwYWRkaW5nOiA3cHggMjBweCAyMHB4O1xuXHRcdC8qIG1hcmdpbi10b3A6IC0zNXB4OyAqL1xuXHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0ei1pbmRleDogMTExO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0LyogYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcblx0XHRib3gtc2hhZG93OiAwcHggLTIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjgpOyAqL1xuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0aDQudHRsLW1haW4gIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHR9XG5cdFx0cCB7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRjb2xvcjogIzhhOGE4YTtcblx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XG5cdFx0XHRsaW5lLWhlaWdodDogMjNweDsgXG5cdFx0XHRtYXJnaW4tdG9wOiAwcHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdH1cblx0XHQuY29tbW50cyB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDUzcHg7XG5cdFx0XHR6LWluZGV4OiAxMTtcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0XHRtaW4taGVpZ2h0OjU2cHg7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdGltZy5hZG0tdXNyIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR3aWR0aDogNDJweDtcblx0XHRcdFx0aGVpZ2h0OiA0MnB4O1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTEyLCAxODEsIDI1NSwgMC43NCk7XG5cdFx0XHRcdC8qIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDQsIDE1OCwgMTAyLCAwLjE4KTsgKi9cblx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHR9XG5cdFx0XHRoNSAge1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRjb2xvcjogIzMwRDVDODtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0c3Bhbi50aW1lLWFsIHtcblx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjYjViNWI1O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRwIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogNHB4O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5tdC0yMCB7XG5cdFx0bWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuXHR9XG5cdC5hZGQtY29tbW50IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bWFyZ2luLXRvcDogMTVweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiA1NHB4O1xuXHRcdGlvbi1pbnB1dCB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuXHRcdFx0LS1wYWRkaW5nOiAxNHB4O1xuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHQtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcblx0XHRcdGhlaWdodDogNDVweDtcblx0XHR9XG5cdFx0YS5idG4tc2VuZCB7XG5cdFx0XHR3aWR0aDogNDVweDtcblx0XHRcdGhlaWdodDogNDVweDtcblx0XHRcdGJhY2tncm91bmQ6ICB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0Zm9udC1zaXplOiAxOXB4O1xuXHRcdH1cblx0fVxuXHQuY29udHMtc2xkZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDA7XG5cdFx0ei1pbmRleDogMTE7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2sgLCB0cmFuc3BhcmVudCk7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdGg0IHtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0fVxuXHRcdHVsLnJhdGluZy1hbGwge1xuXHRcdFx0cGFkZGluZzogMHB4O1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRsaSB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAycHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcblx0XHRcdH1cblx0XHRcdGxpLm9wcm4tdHJzYSB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICM4QkMzNEE7XG5cdFx0XHRcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0XHRcdHBhZGRpbmc6IDNweCA4cHggM3B4IDhweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0b3BhY2l0eTogMSAhaW1wb3J0YW50O1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogNnB4O1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHRvcDogLTFweDtcblx0XHRcdH1cblx0XHRcdGxpLmFjdGl2ZSB7XG5cdFx0XHRcdGNvbG9yOiAjRkZDMTA3O1xuXHRcdFx0fVxuXHRcdFx0bGkudG90bC1ydiB7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA3cHg7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR0b3A6IDJweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0c3Bhbi5vcG4tY2wge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogMDtcblx0XHRib3R0b206IDI1cHg7XG5cdFx0ei1pbmRleDogMTExMTE7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkY1NzIyLCAjRkZDMTA3KTtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTRweDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xuXHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRpb24taWNvbiB7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG5cdFx0fVxuXHR9XG5cdHNwYW4uZmF2b3ItaWNuIHtcblx0XHR3aWR0aDogMzVweDtcblx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAxNXB4O1xuXHRcdHotaW5kZXg6IDE7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGxpbmUtaGVpZ2h0OiA0MnB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogI2YxZjFmMTtcblx0XHRmb250LXNpemU6IDE5cHg7XG5cdFx0dG9wOiAxM3B4O1xuXHR9XG5cdC5zcGVjaWxpcyB7XG5cdFx0LnNsaWRlIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0XHQuYXJ0aWN0LXN0ciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0cGFkZGluZzogMTBweCA3cHg7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRcdFx0Ym94LXNoYWRvdzogMHB4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0aW1nLmltZy11YSB7XG5cdFx0XHRcdHdpZHRoOiA2NXB4O1xuXHRcdFx0XHRoZWlnaHQ6IDY1cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzcwYjVmZjtcblx0XHRcdFx0cGFkZGluZzogMnB4O1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAycHg7XG5cdFx0XHR9XG5cdFx0XHRoNSB7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogM3B4O1xuXHRcdFx0fVxuXHRcdFx0cCB7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGNvbG9yOiAjYjNiM2IzO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuc3BlY2lsaXMge1xuXHRcdHBhZGRpbmc6IDAgMCA1cHggMTVweDtcblx0fVxuXHQuc3BlY2lsaXMgaDQudHRsLW1haW4ge1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0fVxuXHR1bC5vcGVuLWhycyB7XG5cdFx0bWFyZ2luOiAwcHg7XG5cdFx0cGFkZGluZzogMHB4O1xuXHRcdG1hcmdpbi10b3A6IC0zcHg7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRsaSB7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRjb2xvcjogIzhhOGE4YTtcblx0XHRcdHBhZGRpbmc6IDdweCAwO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHRcdHotaW5kZXg6MDtcblx0XHRcdHNwYW4ge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLnJpZ2h0LXRzIHtcblx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRjb2xvcjogIzIyMjtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiA1cHg7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDBweDtcblx0XHRcdH1cblx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC4xMyk7XG5cdFx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdFx0XHR0b3A6IDE1cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHAubG9jdCB7XG5cdFx0aW9uLWljb257XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRjb2xvcjogIzc3Nztcblx0XHR9XG5cdH1cblx0LmdnLW1hcCB7XG5cdFx0ZmxleDowIDAgNTAlO1xuXHRcdGlmcmFtZSB7XG5cdFx0XHRib3JkZXI6IDA7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0fVxuXHR9XG5cdGg0LnR0bC1tYWluLnRjdC1idG4ge1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0YS5idG4tY2F0IHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAxOHB4O1xuXHRcdHotaW5kZXg6IDExMTtcblx0XHRyaWdodDogMDtcblx0XHR3aWR0aDogMzBweDtcblx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDM0cHg7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdHJpZ2h0OiAxNXB4O1xuXHRcdG1hcmdpbjogMHB4O1xuXHR9XG5cdGEuYnRuLXBobyB7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGOTgwMCwgI0ZGNTcyMik7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAxM3B4O1xuXHRcdHotaW5kZXg6IDExMTtcblx0XHRyaWdodDogMDtcblx0XHR3aWR0aDogMzVweDtcblx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDQxcHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdHJpZ2h0OiA1MnB4O1xuXHRcdG1hcmdpbjogMHB4O1xuXHR9XG5cdC5zcnYtYm94IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHQvKiBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTsgKi9cblx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XG5cdFx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRcdGJhY2tncm91bmQ6ICNmOWY5Zjk7XG5cdFx0cGFkZGluZy1sZWZ0OiA3MHB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1pbi1oZWlnaHQ6IDcwcHg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRzcGFuLmljb24tc3J2IHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmZjZGZmLCAjNzBiMGZmKTtcblx0XHRcdGxlZnQ6IDEwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRsaW5lLWhlaWdodDogNTBweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHR0b3A6IDEwcHg7XG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogMjhweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3Bhbi5zcnYtdCB7XG5cdFx0XHRmb250LXNpemU6IDlweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRjb2xvcjogI2MzYzNjMztcblx0XHRcdGg1IHtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDZweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRjb2xvcjogIzIyMjtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LnNydi1ib3guc2VsZWN0ZWQge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZmY2RmZiwgIzcwYjBmZik7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0c3Bhbi5pY29uLXNydiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0ZmlsdGVyOiBpbnZlcnQoMC4zKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3Bhbi5zcnYtdCB7XG5cdFx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgxKTtcblx0XHRcdGg1IHtcblx0XHRcdFx0Y29sb3I6I2ZmZjtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3Bhbi5zZWxlY3QtY2hlY2sge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiA1cHg7XG5cdFx0XHRyaWdodDogNXB4O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHR9XG59XG5cbi5hZGQtcmV2IHtcbiAgICAvKiBtYXJnaW46IDAgLTIwcHg7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDExMTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxudWwuYWRkLXJhdC1hbGwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuXHRsaSB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRtYXJnaW4tbGVmdDogMnB4O1xuXHRcdGNvbG9yOiAjYzdjN2M3O1xuXHR9XG5cdGxpLmFjdGl2ZSB7XG5cdFx0Y29sb3I6ICNGRkMxMDc7XG5cdH1cblx0XG59XG51bC5hZGQtcmF0LWFsbC5hbGwtcnRzYSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAzOXB4O1xuXHRsZWZ0OiAwcHg7XG5cdGxpIHtcblx0XHRmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuaW9uLWZvb3Rlci5mb290LWJvb2sge1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggLTdweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgei1pbmRleDogMTExMTtcblx0aW9uLWJ1dHRvbi5idG4tbG9naW4ge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZmY2RmZiwgIzcwYjBmZik7XG5cdFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHQtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZmY2RmZiwgIzcwYjBmZik7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdC0tYm9yZGVyOiBub25lO1xuXHRcdGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMTEyLCAxNzcsIDI1NSwgMC4xNSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHQtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0aGVpZ2h0OiA0NnB4O1xuXHRcdG1hcmdpbjogMHB4O1xuXHR9XG59XG4uc3BlY2lsaXMge1xuXHRoNC50dGwtbWFpbiAge1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0c3Bhbi5yZXBvcnQtdHh0IHtcblx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGJhY2tncm91bmQ6ICNGNDQzMzY7XG5cdFx0XHRwYWRkaW5nOiA1cHggMTBweDtcblx0XHRcdG1hcmdpbi10b3A6IC0ycHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xuXHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5pb24tc2VnbWVudC5zZWdtdC1kZXRhaWxzIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYm94LXNlcnZjIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwN3B4O1xuICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0LmltZy1iIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR3aWR0aDogMTEwcHg7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0aW1nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0fVxuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cdFx0XHR6LWluZGV4OiAwO1xuXHRcdH1cblx0XHRzcGFuLmJhZGctY2F0ciB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRyaWdodDogMTBweDtcblx0XHRcdHRvcDogMTBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgIzZmY2RmZiwgIzcwYjBmZik7XG5cdFx0XHRwYWRkaW5nOiA1cHggMTJweCA1cHggMTJweDtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdHotaW5kZXg6IDExO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdH1cblx0XHRzcGFuLmRhdGUtaWNuIHtcblx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGM4YzhjLCAjMDAwMDAwKTtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMDtcblx0XHRcdHotaW5kZXg6IDExO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHNtYWxsICB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Mik7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmNvdC1hIHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRwYWRkaW5nOiAxMHB4IDE0cHg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGg0ICB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRjb2xvcjogIzNhM2EzYTtcblx0XHRcdG1hcmdpbi1ib3R0b206IDNweDtcblx0XHRcdHNwYW4ucmlnaHQtcHJpY2Uge1xuXHRcdFx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0XHRcdGNvbG9yOiAjNzBiMWZmO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR1bC5yYXRpbmctYWxsIHtcblx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luLXRvcDogM3B4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0bGkge1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAycHg7XG5cdFx0XHRcdGNvbG9yOiAjYzNjM2MzO1xuXHRcdFx0fVxuXHRcdFx0bGkuYWN0aXZlIHtcblx0XHRcdFx0Y29sb3I6ICNmOGM1MGE7XG5cdFx0XHR9XG5cdFx0XHRsaS50b3RsLXJ2IHtcblx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAzcHg7XG5cdFx0XHRcdHRvcDogLTFweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwIHtcblx0XHRcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cC5iLXByaWNlIHtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAjNmZiMmZkO1xuXHRcdFx0bWFyZ2luLXRvcDogOHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXG5cdFx0fVxuXHR9XG59XG4uYm94LXNlcnZjLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2ZmNkZmYsICM3MGIwZmYpO1xuICAgIGNvbG9yOiAjZmZmO1xuXHQuY290LWEge1xuXHRcdGg0IHtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdH1cblx0XHRwIHtcblx0XHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG5cdFx0fVxuXHRcdHAuYi1wcmljZSAge1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdHNwYW4uc2VsZWN0LWNoZWNrIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAxMXB4O1xuXHRcdHJpZ2h0OiA3cHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHR9XG59XG5zcGFuLm9mZi1kaXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE4cHg7XG4gICAgei1pbmRleDogMTE7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM0Y1MUI1LCAjRjQ0MzM2KTtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XG59XG4uaW1nLWItc3RhIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bWFyZ2luLXRvcDogNXB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XG5cdFx0aW1nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE4LCAxODcsIDI1MywgMC4yOCk7XG5cdFx0XHRwYWRkaW5nOiAycHg7XG5cdFx0fVxuXHRcdHNwYW4uZGxlLWltIHtcblx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAtNXB4O1xuXHRcdFx0cmlnaHQ6IC01cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICNGNDQzMzYsICNFOTFFNjMpO1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdH1cblx0fVxuLmNvbnQtc2x5ZHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG5cdG1hcmdpbi10b3A6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0LmFkZC1jaXQge1xuXHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0ZmxleDogMCAwIDUwJTtcblx0XHRjb2xvcjogIzIyMjtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0cC5sb2N0IHtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdGNvbG9yOiAjMjIyO1xuXHRcdH1cblx0XHRoNSB7XG5cdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDZweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0fVxuXHRcdHAubG9uZ3Qge1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHRcdFx0Y29sb3I6ICMyMjI7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdH1cblx0XHRhLmJ0LXN5eXMge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRwYWRkaW5nOiA0cHggMTNweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0fVxuXHR9XG59XG51bC5mZWF0dXJlcy1mc2Mge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXHRsaSB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHNwYW4ge1xuXHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0YmFja2dyb3VuZDogI2RjZWZlZDtcblx0XHRcdGNvbG9yOiAjMTNiMGEzO1xuXHRcdFx0cGFkZGluZzogMnB4IDEwcHg7XG5cdFx0XHRtYXJnaW46IDJweCAycHg7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNhOGU0ZGY7XG5cdFx0fVxuXHR9XG59XG4uc2xpZHJzLmFwcG9pbnRzIHtcblx0bWFyZ2luLWJvdHRvbTogLTE1cHg7XG5cdC5zbGlkZSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0XHQudmNvdHIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0YmFja2dyb3VuZDogI2Y3ZjdmNztcblx0XHRcdHBhZGRpbmc6IDEycHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRoNSB7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHR9XG5cdFx0XHRpbWcgIHtcblx0XHRcdFx0d2lkdGg6IDYwcHg7XG5cdFx0XHRcdGhlaWdodDogNjBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdH1cblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Y29sb3I6ICM3MzczNzM7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdH1cblx0XHRcdHAudHNtciB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGNvbG9yOiAjMTJhZmEyO1xuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjZjQ0MzM2O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5pb24tc2VnbWVudC5zZWdtdC1kZXNpZyB7XG5cdG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuXHRwYWRkaW5nOiAycHggM3B4O1xuXHRpb24tc2VnbWVudC1idXR0b24gIHtcblx0XHRmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcblx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuXHRcdC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuXHRcdGhlaWdodDogMzhweDtcblx0XHRtaW4taGVpZ2h0OiAzOHB4O1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRjb2xvcjogIzQyNjdCMjtcblx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0LS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXHRpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZC5pb24tYWN0aXZhdGFibGUgIHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSkgIWltcG9ydGFudDtcblx0XHQtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSkgIWltcG9ydGFudDtcblx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG5cdH1cbn1cbi5mbGRzLWxvZ2luIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgei1pbmRleDogMTExO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTNweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwcHggLThweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG4ucGhvdC1zbGlkZXMge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuXHR1bC5kYXRhLWNvbnQge1xuXHRcdG1hcmdpbjogMHB4O1xuXHRcdHBhZGRpbmc6IDBweDtcblx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdHBhZGRpbmc6IDIwcHggMTVweDtcblx0XHRsaSB7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRwYWRkaW5nOiA4cHggMDtcblx0XHRcdGNvbG9yOiAjNGM0YzRjO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHotaW5kZXg6IDA7XG5cdFx0XHQvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTsgKi9cblx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZDZkNmQ2O1xuXHRcdFx0XHR0b3A6IDE4cHg7XG5cdFx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdFx0fVxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdH1cblx0XHRcdHNwYW4uZGV0YWlscy10cmlwIHtcblx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRsaS5kZXNjcmkge1xuXHRcdFx0cGFkZGluZy10b3A6IDJweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRsaW5lLWhlaWdodDogMjNweDtcblx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0ZGlzcGxheTpub25lO1xuXHRcdFx0fSBcblx0XHR9XG5cdH1cbn1cbi5mbGRzLWxvZ2luIHtcblx0aW9uLWxpc3QgIHtcblx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG59XG4uY290LWRkciB7XG5cdC5nZy1tYXAge1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0fVxufVxuLmltZy1oZXQtbWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzhweCk7XG5cdGltZy5pbWctc3Qge1xuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDEzOHB4KTtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuLmNvbnQtdXNyZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggNjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAsIGJsYWNrKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDg1cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogI2ZmZjtcblx0aW1nIHtcblx0XHR3aWR0aDogNTBweDtcblx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAyMHB4O1xuXHR9XG5cdGg1IHtcblx0XHRtYXJnaW46IDBweDtcblx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRtYXJnaW4tdG9wOiA0cHg7XG5cdFx0Y29sb3I6ICNkMGQwZDA7XG5cdH1cblx0aDMge1xuXHRcdG1hcmdpbjogMHB4O1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdH1cblx0XG59XG4uYm90dG9tLWNvbnQtYWxsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDIwcHg7XG5cdHVsLmJ0bi1zbGx5IHtcblx0XHRtYXJnaW46IDBweDtcblx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRsaSB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDogMDtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRsaW5lLWhlaWdodDogMTBweDtcblx0XHRcdC5ob21lLWlzb24ge1xuXHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xuXHRcdFx0XHRjb2xvcjogI2I5YjliOTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHNwYW4uaWNvbi1zIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2U2ZWNmOTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcblx0XHRcdFx0XHRjb2xvcjogIzQyNjdCMjtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2EzYmJlYztcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyMXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4ucGx1c2QtcyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNDI2N0IyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxpOmxhc3QtY2hpbGQgeyAgICAgcGFkZGluZy1yaWdodDogMHB4OyB9XG5cdFx0XG5cdH1cblx0dWwuYnRuLXNsbHkgPmxpOmFmdGVyIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzJlMmUwO1xuXHRcdHRvcDogY2FsYyg1MCUgLSAycHgpO1xuXHRcdHotaW5kZXg6IC0xO1xuXHR9XG59XG4uYm94LWltZ3NkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvKmJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAgMCAwIC8gMTQlKTsqL1xuICAgIGJveC1zaGFkb3c6IHJnYmEgKDAsMCwwLDEuNCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHQudG9wLWtrIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0aW1nLmltZy1ib3NmMCB7XG5cdFx0XHR3aWR0aDogMTUwcHg7XG5cdFx0XHRoZWlnaHQ6IDkwcHg7XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHR9XG5cdFx0LmNvbnQtZGF0ZXMge1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIGJsYWNrKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRzcGFuLmZsYWctdHh0IHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogOXB4O1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxN3B4O1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAzcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dWwubGlzdC1sbCB7XG5cdFx0cGFkZGluZzogMHB4IDZweDtcblx0XHRtYXJnaW46IDBweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGxpIHtcblx0XHRcdHBhZGRpbmc6IDEwcHggNHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHQvKiBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7ICovXG5cdFx0XHRjb2xvcjogIzU0NTQ1NDtcblx0XHRcdHNwYW4ge1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR0b3A6IDFweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbnVsLmJ0bi1zbGx5IHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cbnVsLmJ0bi1zbGx5PiBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5zcGFuLmJ0bi1pY29uZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIzcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSkgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xuXHRpb24taWNvbiB7XG5cdFx0Zm9udC1zaXplOiAxN3B4O1xuXHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cdH1cblx0JjphZnRlciB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym9yZGVyOiA3cHggc29saWQgIzIyMjtcblx0XHRib3JkZXItY29sb3I6ICMxYWJhYWQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG5cdFx0Ym90dG9tOiAtMTRweDtcblx0XHRsZWZ0OiA4cHg7XG5cdH1cbn1cblxuI21hcCB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cblxuICAgIGlvbi1zbGlkZXMge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5zd2lwZXItc2xpZGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gXG4gICAgLnN3aXBlci1zbGlkZSBpbWcge1xuXHRcdG1heC1oZWlnaHQ6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRvYmplY3QtZml0OiBjb3ZlclxuICAgIH1cblxuICAgIGIge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICBwIHtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdGNvbG9yOiAjZmZmZjtcblx0XHRtYXJnaW46IDEwcHggMDtcblx0XHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgfVxuXG4gICAgcCBiIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG4gICAgfVxuXG4gICAgaW9uLXJvdy5idXR0b25zcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgIFxuICAgIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA1OHB4O1xufVxuXG5bY29udGVudFNsaWRlcl17XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXHRoMntcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xuXHR9XG5cdC5idXR0b25zc3tcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuXHRcdG1hcmdpbi10b3A6IDI1cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGlvbi1idXR0b257XG5cdFx0XHRtYXJnaW46IDAgOHB4O1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHRcdC0tcGFkZGluZy1ib3R0b206IDlweDtcblx0XHRcdC0tcGFkZGluZy1lbmQ6IDlweDtcblx0XHRcdC0tcGFkZGluZy10b3A6IDlweDtcblx0XHRcdC0tcGFkZGluZy1zdGFydDogOXB4O1xuXHRcdFx0aGVpZ2h0OiA2M3B4O1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAxMDBweDtcblx0XHRcdC0tYmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdC0tY29sb3I6ICMzMTcxZTA7XG5cdFx0XHRpb24taWNvbntcblx0XHRcdFx0Zm9udC1zaXplOiA0NXB4O1xuXHRcdFx0fVxuXHRcdFx0JltyZWplY3RDb2xvcl17XG5cdFx0XHRcdC0tYmFja2dyb3VuZDogI0M0MEIwMDtcblx0XHRcdFx0aW9uLWljb257XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCZbc3VjQ2Vzc117XG5cdFx0XHRcdC0tYmFja2dyb3VuZDogIzFCOUU0Mztcblx0XHRcdFx0aW9uLWljb257XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuW2ltZ0dyYWRpZW50XXtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0Jjo6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgNDcsIDc1LCAwLjApIDAlLCByZ2JhKDAsIDAsIDAsIDAuOSkgOTIlKTtcblx0fVxufSJdfQ== */";
      /***/
    },

    /***/
    60046: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n     <ion-back-button routerLink=\"/tabs/dashboard\" slot=\"start\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n     </ion-back-button>\n     <ion-title class=\"ion-text-center\">Connect To People </ion-title>\n     <!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n     <ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\">\n        <ion-icon name=\"home-outline\"></ion-icon>\n     </ion-buttons>\n  </ion-toolbar>\n</ion-header>                     \n<ion-content>\n  <ion-slides (ionSlideReachEnd)=\"lastslide();\" *ngIf=\"users.length > 0\">\n     <ion-slide *ngFor=\"let user of finalArr; let i=index;\" class=\"usertab{{i}}\">\n        <ng-container >\n           <!-- <img src=\"assets/img/trip4.jpg\"/> -->\n           <div imgGradient>\n            <img fixFull *ngIf=\"errors.indexOf(user.userinfo?.profile_picture) >= 0\" src=\"../assets/img/img1.jpg\" alt=\"\">\n            <img fixFull  *ngIf=\"errors.indexOf(user.userinfo?.profile_picture) == -1\" src=\"{{user.userinfo?.profile_picture}}\" alt=\"\">\n           </div>\n           <div contentSlider>\n            <h2>{{user.userinfo.firstname+' '+user.userinfo.lastname}},  \n                <ng-container *ngIf=\"errors.indexOf(user?.age) == -1\"> {{user.age}} </ng-container>\n                <ng-container *ngIf=\"errors.indexOf(user.userinfo?.dob) == -1 && errors.indexOf(user?.age) >= 0\"> {{getage(user.userinfo?.dob)}} </ng-container>\n                 </h2>\n            <p *ngIf=\"errors.indexOf(user.userinfo?.locations?.location) == -1\">\n                <ion-icon name=\"pin\" ></ion-icon>\n                {{user.userinfo?.locations?.location}}\n            </p>\n            <p *ngIf=\"errors.indexOf(user.trip?.starting_point) == -1\">\n                <ion-icon name=\"pin\"></ion-icon>\n                {{user.trip.starting_point}}\n            </p>\n\n\n\n            <div class=\"buttonss\" >\n              <ion-button rejectColor (click)=\"removetab('usertab'+i,i);\"  >\n                 <ion-icon name=\"close-circle\" ></ion-icon>\n              </ion-button>\n              <ion-button sucCess (click)=\"seletuser(user.userinfo._id,user);\">\n                 <ion-icon name=\"checkmark-circle\" ></ion-icon>\n              </ion-button>\n            </div>\n\n           </div>\n           \n        </ng-container>\n     </ion-slide>\n     <!--  <ion-slide>\n        <ng-container>\n         <img src=\"assets/img/trip2.jpg\"/>\n        <h2>Roma, 25</h2>\n        <p><ion-icon name=\"pin\" ></ion-icon> delhi, India.</p>\n        <p><ion-icon name=\"pin\"></ion-icon> delhi, India.</p>\n        <ion-row class=\"buttonss\">\n        <ion-button><ion-icon name=\"close-circle\" ></ion-icon></ion-button>\n        <ion-button><ion-icon name=\"checkmark-circle\" ></ion-icon></ion-button>\n        </ion-row>\n        </ng-container> \n        </ion-slide>\n        \n        <ion-slide>\n         <ng-container> \n         <img src=\"assets/img/trip3.jpg\"/>\n        <h2>Roma, 25</h2>\n        <p><ion-icon name=\"pin\" ></ion-icon> delhi, India.</p>\n        <p><ion-icon name=\"pin\"></ion-icon> delhi, India.</p>\n        <ion-row class=\"buttonss\">\n        <ion-button><ion-icon name=\"close-circle\" ></ion-icon></ion-button>\n        <ion-button><ion-icon name=\"checkmark-circle\" ></ion-icon></ion-button>\n        </ion-row>\n         </ng-container>\n        </ion-slide>\n        \n        <ion-slide>\n         <ng-container>   \n         <img src=\"assets/img/trip4.jpg\"/>\n         <h2>Roma, 25</h2>\n         <p><ion-icon name=\"pin\" ></ion-icon> delhi, India.</p>\n         <p><ion-icon name=\"pin\"></ion-icon> delhi, India.</p>\n        <ion-row class=\"buttonss\">\n          <ion-button><ion-icon name=\"close-circle\" ></ion-icon></ion-button>\n          <ion-button><ion-icon name=\"checkmark-circle\" ></ion-icon></ion-button>\n        </ion-row>\n         </ng-container>\n        </ion-slide> -->\n  </ion-slides>\n\n  <ion-slides *ngIf=\"users.length == 0\">\n     <ion-slide  class=\"usertab\">\n        <ng-container>\n             <h2>No user found!!</h2>\n           <!-- <img src=\"assets/img/trip4.jpg\"/> -->\n          \n           \n        </ng-container>\n      </ion-slide>\n     \n   </ion-slides>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_future-connect_future-connect_module_ts-es5.js.map
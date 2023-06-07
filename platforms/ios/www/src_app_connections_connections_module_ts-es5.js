(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_connections_connections_module_ts"], {
    /***/
    31428: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConnectionsPageRoutingModule": function ConnectionsPageRoutingModule() {
          return (
            /* binding */
            _ConnectionsPageRoutingModule
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


      var _connections_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./connections.page */
      7180);

      var routes = [{
        path: '',
        component: _connections_page__WEBPACK_IMPORTED_MODULE_0__.ConnectionsPage
      }];

      var _ConnectionsPageRoutingModule = function ConnectionsPageRoutingModule() {
        _classCallCheck(this, ConnectionsPageRoutingModule);
      };

      _ConnectionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ConnectionsPageRoutingModule);
      /***/
    },

    /***/
    99243: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConnectionsPageModule": function ConnectionsPageModule() {
          return (
            /* binding */
            _ConnectionsPageModule
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


      var _connections_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./connections-routing.module */
      31428);
      /* harmony import */


      var _connections_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./connections.page */
      7180);

      var _ConnectionsPageModule = function ConnectionsPageModule() {
        _classCallCheck(this, ConnectionsPageModule);
      };

      _ConnectionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _connections_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnectionsPageRoutingModule],
        declarations: [_connections_page__WEBPACK_IMPORTED_MODULE_1__.ConnectionsPage]
      })], _ConnectionsPageModule);
      /***/
    },

    /***/
    7180: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConnectionsPage": function ConnectionsPage() {
          return (
            /* binding */
            _ConnectionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_connections_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./connections.page.html */
      25362);
      /* harmony import */


      var _connections_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./connections.page.scss */
      80360);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      9709);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../config */
      39698);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ConnectionsPage = /*#__PURE__*/function () {
        function ConnectionsPage(userService, router) {
          _classCallCheck(this, ConnectionsPage);

          this.userService = userService;
          this.router = router;
          this.profile_data = [];
          this.errors = ['', null, undefined];
        }

        _createClass(ConnectionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.Connecteduser();
            console.log("111");
          }
        }, {
          key: "Connecteduser",
          value: function Connecteduser() {
            var _this = this;

            var sender = localStorage.getItem('user_id');
            console.log("ID--->", sender);
            this.userService.postData({}, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + "/getallfriends/".concat(sender)).subscribe(function (res) {
              _this.profile_data = res.data.friendList;
              console.log("GET RESULT-->", _this.profile_data);
            });
          }
        }, {
          key: "viewProfile",
          value: function viewProfile(userID, userinfo) {
            localStorage.setItem("connected_user_profile_info", JSON.stringify(userinfo));
            this.router.navigate(['/connected-user-profile/' + userID]);
          }
        }]);

        return ConnectionsPage;
      }();

      _ConnectionsPage.ctorParameters = function () {
        return [{
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _ConnectionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-connections',
        template: _raw_loader_connections_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_connections_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ConnectionsPage); //

      /***/
    },

    /***/
    80360: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-row.md.hydrated {\n  background-color: #efefef;\n}\n\nion-col.md.hydrated {\n  -webkit-padding-end: 10px;\n          padding-inline-end: 10px;\n}\n\nmain.inner-scroll.scroll-y:host {\n  --background: var(--ion-background-color,red);\n}\n\n.content {\n  background-color: #efefef !important;\n  height: 100%;\n}\n\n.user-card {\n  position: relative;\n  overflow: hidden;\n  height: 200px;\n  margin-left: 15px;\n  margin-top: 20px;\n  border-radius: 16px 16px 16px 16px;\n  box-shadow: 0px 8px 9px #aaaaaa;\n}\n\n.user-card img {\n  width: 100%;\n  height: 70%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin: auto;\n}\n\n.user-info {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 8px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.username,\n.country {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.username {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.img {\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHlCQUFBO0FBSEo7O0FBS0E7RUFDSSx5QkFBQTtVQUFBLHdCQUFBO0FBRko7O0FBS0E7RUFFRSw2Q0FBQTtBQUhGOztBQU1BO0VBRUUsb0NBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQ0FBQTtFQUNBLCtCQUFBO0FBTEo7O0FBUUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFMSjs7QUFRRTs7RUFFRSxnQkFBQTtFQUNKLGVBQUE7RUFDQSxpQkFBQTtBQUxBOztBQVFFO0VBQ0UsZ0JBQUE7RUFDSixlQUFBO0VBQ0EsaUJBQUE7QUFMQTs7QUFRRTtFQUNFLHdCQUFBO0FBTEoiLCJmaWxlIjoiY29ubmVjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNvbnRhaW5lcntcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbi8vIH1cbmlvbi1yb3cubWQuaHlkcmF0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG59XG5pb24tY29sLm1kLmh5ZHJhdGVkIHtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gICBcbn1cbm1haW4uaW5uZXItc2Nyb2xsLnNjcm9sbC15Omhvc3Qge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcixyZWQpO1xuXG59XG4uY29udGVudHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogICNlZmVmZWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWYgIWltcG9ydGFudDsgXG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnVzZXItY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAxNnB4IDE2cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCA5cHggI2FhYWFhYTtcbiAgfVxuICBcbiAgLnVzZXItY2FyZCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIFxuICAudXNlci1pbmZvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLnVzZXJuYW1lLFxuICAuY291bnRyeSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAyMXB4O1xuICB9XG4gIFxuICAudXNlcm5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMjFweDtcbiAgfVxuICBcbiAgLmltZyB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB9Il19 */";
      /***/
    },

    /***/
    25362: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\">\n    <ion-back-button routerLink=\"/tabs/dashboard\" slot=\"start\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-back-button>\n    <ion-title class=\"ion-text-center\">Connection </ion-title>\n    <!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n    <ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\" >\n  <ion-grid>\n    <ion-row>\n      <!-- Loop through the user array -->\n      <ng-container *ngFor=\"let user of profile_data\" class=\"container\">\n        <ion-col size=\"6\" >\n          <div class=\"user-card\"  (click)=\"viewProfile(user._id,user)\"  >\n            <!-- Replace \"user.image\" with the path to the user's profile image -->\n            <img *ngIf=\"errors.indexOf(user?.profile_picture) >= 0\" class=\"img\" src=\"../assets/img/img1.jpg\" alt=\"\">\n            <img *ngIf=\"errors.indexOf(user?.profile_picture) == -1\" class=\"img\" src=\"{{user.profile_picture}}\" alt=\"\">\n\n            <!-- <img src=\"{{ user.profile_picture}}\"  > -->\n\n            <div class=\"user-info\">\n              <!-- Display the username and country name -->\n              <div class=\"username\">{{ user.firstname }}</div>\n              <div class=\"country\">{{ user.country }}</div>\n            </div>\n          </div>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n\n\n    <ion-slides *ngIf=\"profile_data.length == 0\">\n      <ion-slide class=\"usertab\">\n        <ng-container>\n          <h2>No Connection found!!</h2>\n          <!-- <img src=\"assets/img/trip4.jpg\"/> -->\n        </ng-container>\n      </ion-slide>\n\n    </ion-slides>\n  </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_connections_connections_module_ts-es5.js.map
(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_place-interest-details_place-interest-details_module_ts"], {
    /***/
    11765: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlaceInterestDetailsPageRoutingModule": function PlaceInterestDetailsPageRoutingModule() {
          return (
            /* binding */
            _PlaceInterestDetailsPageRoutingModule
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


      var _place_interest_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./place-interest-details.page */
      22661);

      var routes = [{
        path: '',
        component: _place_interest_details_page__WEBPACK_IMPORTED_MODULE_0__.PlaceInterestDetailsPage
      }];

      var _PlaceInterestDetailsPageRoutingModule = function PlaceInterestDetailsPageRoutingModule() {
        _classCallCheck(this, PlaceInterestDetailsPageRoutingModule);
      };

      _PlaceInterestDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PlaceInterestDetailsPageRoutingModule);
      /***/
    },

    /***/
    21727: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlaceInterestDetailsPageModule": function PlaceInterestDetailsPageModule() {
          return (
            /* binding */
            _PlaceInterestDetailsPageModule
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


      var _place_interest_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./place-interest-details-routing.module */
      11765);
      /* harmony import */


      var _place_interest_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./place-interest-details.page */
      22661);
      /* harmony import */


      var ngx_stars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-stars */
      84426);

      var _PlaceInterestDetailsPageModule = function PlaceInterestDetailsPageModule() {
        _classCallCheck(this, PlaceInterestDetailsPageModule);
      };

      _PlaceInterestDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _place_interest_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlaceInterestDetailsPageRoutingModule, ngx_stars__WEBPACK_IMPORTED_MODULE_7__.NgxStarsModule],
        declarations: [_place_interest_details_page__WEBPACK_IMPORTED_MODULE_1__.PlaceInterestDetailsPage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA]
      })], _PlaceInterestDetailsPageModule);
      /***/
    },

    /***/
    22661: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlaceInterestDetailsPage": function PlaceInterestDetailsPage() {
          return (
            /* binding */
            _PlaceInterestDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_place_interest_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./place-interest-details.page.html */
      51605);
      /* harmony import */


      var _place_interest_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./place-interest-details.page.scss */
      63818);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      9709);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      83046);

      var _PlaceInterestDetailsPage = /*#__PURE__*/function () {
        function PlaceInterestDetailsPage(userService, sanitizer, router, geolocation, nativeGeocoder, zone) {
          _classCallCheck(this, PlaceInterestDetailsPage);

          this.userService = userService;
          this.sanitizer = sanitizer;
          this.router = router;
          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.zone = zone;
          this.fav_id = localStorage.getItem('fav_id');
          this.places_data = [];
          this.weathers = [];
          this.photos_data = [];
          this.fav_type = localStorage.getItem('place_fav_type');
          this.profiletab = "Basic";
          this.isAndroid = false;
          this.customAlertOptions = {
            header: 'Category',
            translucent: true
          };
          this.customAlertOptions1 = {
            header: 'Breed',
            translucent: true
          };
          this.customAlertOptions2 = {
            header: 'Service',
            translucent: true
          };
          this.category = {
            form: null
          };
          this.category1 = {
            form: null
          };
          this.category2 = {
            form: null
          };
          this.slideOpts = {
            slidesPerView: 3.3,
            spaceBetween: 7
          };
          this.slideOpts3 = {
            slidesPerView: 3,
            spaceBetween: 7
          };
          this.category.form = "cat1";
          this.category1.form = "breed1";
          this.category2.form = "service1";
        }

        _createClass(PlaceInterestDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.places_data = JSON.parse(localStorage.getItem('place_detail_data'));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.places_data = JSON.parse(localStorage.getItem('place_detail_data'));
            this.photos_data = [];
            var self = this;
            jquery__WEBPACK_IMPORTED_MODULE_4__.each(this.places_data.results_l.photos, function (key, val) {
              self.photos_data.push(val.photo_reference);
            });
            this.getplacespictures();
            console.log('this.places_data ==', this.places_data);
            this.getWeather(this.places_data.results_l.geometry.location.lat, this.places_data.results_l.geometry.location.lng);
            this.loadmap(this.places_data.latlong.lat, this.places_data.latlong.lng);
          }
        }, {
          key: "loadmap",
          value: function loadmap(lat, lng) {
            var latLng = new google.maps.LatLng(lat, lng);
            var mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }; //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
            //  this.getAddressFromCoords(lat, lng); 

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
              position: latLng,
              title: 'Biratnagar, Janpath-15',
              icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            }); // this.addInfoWindow(marker, content);

            marker.setMap(this.map);
          }
        }, {
          key: "gotomap",
          value: function gotomap(url) {
            window.location.href = url;
          }
        }, {
          key: "getdate",
          value: function getdate(dates) {
            var currentDate = new Date(dates);
            var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            return weekdays[currentDate.getDay()];
          }
        }, {
          key: "round",
          value: function round(numbers) {
            return parseInt(numbers);
          }
        }, {
          key: "getWeather",
          value: function getWeather(latitude, longitude) {
            var d = new Date(),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear(); // Get a free key at https://www.weatherapi.com/. Replace the "Your_Key_Here" string with that key.

            var OpenWeatherAppKey = "9a5ffa4f1db742cfacb125014210408";
            var queryString = 'http://api.weatherapi.com/v1/current.json?key=' + OpenWeatherAppKey + '&q=' + latitude + ',' + longitude + '&aqi=no&dt=' + year + '-' + month + '-' + day;
            var queryString = 'http://api.weatherapi.com/v1/forecast.json?key=9a5ffa4f1db742cfacb125014210408&q=' + latitude + ',' + longitude + '&days=3&aqi=no&alerts=no&dt=' + year + '-' + month + '-' + day;
            var queryString = 'http://api.weatherapi.com/v1/forecast.json?key=9a5ffa4f1db742cfacb125014210408&q=' + latitude + ',' + longitude + '&days=7&aqi=no&alerts=no';
            var self = this;
            jquery__WEBPACK_IMPORTED_MODULE_4__.getJSON(queryString, function (results) {
              console.log('------------', results); //localStorage.setItem('this_ocation_weather', JSON.stringify(results));

              this.weather = results;
              console.log('weather result = ', results);

              if (results.forecast != undefined) {
                if (results.forecast.forecastday != undefined && results.forecast.forecastday.length > 0) {
                  self.weathers = results.forecast.forecastday;
                }
              }
            }).fail(function (error) {
              console.log("error getting location", error);
            });
          }
        }, {
          key: "getplacespictures",
          value: function getplacespictures() {
            var _this = this;

            this.userService.presentLoading();
            this.userService.postData({
              photo_s: JSON.stringify(this.photos_data)
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_photots_google').subscribe(function (result) {
              _this.userService.stopLoading();

              if (result.status == 1) {
                if (result.data.length > 0) {
                  _this.photos_data = result.data;
                }
              } else {
                _this.photos_data = result.data;
              }
            });
          }
        }, {
          key: "selectplace",
          value: function selectplace(data, indx) {
            var _this2 = this;

            this.fav_type = 'already';
            this.userService.presentLoading();
            this.userService.postData({
              _id: localStorage.getItem('user_auth_id'),
              data: JSON.stringify(data)
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/make_fav_place').subscribe(function (result) {
              _this2.userService.stopLoading();

              console.log(result);

              if (result.status == 1) {
                localStorage.setItem('fav_id', result.ids);
                _this2.fav_id = result.ids;

                _this2.userService.presentToast('Places added to your favourite list successfully!', 'success');
              } else {
                _this2.userService.presentToast('Error to send a request, try again later', 'danger');
              }
            }, function (err) {
              _this2.userService.stopLoading();

              _this2.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "removeplace",
          value: function removeplace(id, indx) {
            var _this3 = this;

            this.fav_type = 'not';
            this.userService.presentLoading();
            this.userService.postData({
              _id: localStorage.getItem('user_auth_id'),
              place_id: localStorage.getItem('fav_id')
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/remove_fav_place').subscribe(function (result) {
              _this3.userService.stopLoading();

              console.log(result);

              if (result.status == 1) {
                _this3.userService.presentToast('Place has been removed from your favourite list successfully!', 'success');
              } else {
                _this3.userService.presentToast('Error to send a request, try again later', 'danger');
              }
            }, function (err) {
              _this3.userService.stopLoading();

              _this3.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }]);

        return PlaceInterestDetailsPage;
      }();

      _PlaceInterestDetailsPage.ctorParameters = function () {
        return [{
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
        }];
      };

      _PlaceInterestDetailsPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: ['map', {
            "static": false
          }]
        }]
      };
      _PlaceInterestDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-place-interest-details',
        template: _raw_loader_place_interest_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_place_interest_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PlaceInterestDetailsPage);
      /***/
    },

    /***/
    63818: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content[bg-grey] {\n  background: #f9f9f9;\n  --background:#f9f9f9;\n}\nion-content[bg-grey] .contet-sect {\n  padding: 0px;\n  display: block;\n}\nion-content[bg-grey] .slids-box {\n  margin-right: -20px;\n  margin-top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly {\n  display: block;\n  width: 100%;\n  height: 135px;\n  border-radius: 0px;\n  overflow: hidden;\n  position: relative;\n}\nion-content[bg-grey] .slids-box .img-bx-sly img {\n  width: 100%;\n  height: 230px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number {\n  position: absolute;\n  bottom: 10px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly h4.name-ffls {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: #fff;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 15px;\n  background: linear-gradient(to top, #000000, #00000000);\n  line-height: 19px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis {\n  height: auto;\n  background: #fff;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis img {\n  width: 100%;\n  height: 275px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis h4.tlt-stor {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n  width: 100%;\n  font-size: 14px;\n  margin: 0px;\n  padding: 5px 10px 12px;\n  color: #000;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.likes-number {\n  bottom: auto;\n  bottom: initial;\n  top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box.new-box-a {\n  position: relative;\n  margin: 0px;\n  height: 260px;\n}\nion-content[bg-grey] .slids-box.new-box-a .slidr-ims-st img {\n  height: 260px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .top-useer-s {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  padding: 18px 20px;\n  padding-left: 60px;\n  color: #fff;\n  background: linear-gradient(to top, #00000000, #000000b0);\n  padding-bottom: 40px;\n  line-height: 15px;\n}\nion-content[bg-grey] .top-useer-s img.adm-usr {\n  width: 40px !important;\n  height: 40px !important;\n  border-radius: 50%;\n  position: absolute;\n  left: 10px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\nion-content[bg-grey] .top-useer-s h5 {\n  margin: 0px;\n  font-size: 15px;\n  margin-top: 2px;\n}\nion-content[bg-grey] .top-useer-s span.time-al {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.73);\n}\nion-content[bg-grey] span.livestm-dot {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  background: #F44336;\n  bottom: 10px;\n  right: 7px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.31);\n  background: radial-gradient(circle at 12px 12px, #f77e75, #F44336);\n}\nion-content[bg-grey] .content-all-pst {\n  padding: 7px 20px 20px;\n  /* margin-top: -35px; */\n  background: #fff;\n  z-index: 111;\n  background-color: #fff !important;\n  position: relative;\n  /* border-radius: 20px 20px 0 0;\n  box-shadow: 0px -20px 20px rgba(0, 0, 0, 0.28); */\n  min-height: 100%;\n}\nion-content[bg-grey] .content-all-pst h4.ttl-main {\n  font-size: 16px;\n}\nion-content[bg-grey] .content-all-pst p {\n  font-size: 14px;\n  color: #8a8a8a;\n  font-weight: 300;\n  letter-spacing: 0.2px;\n  line-height: 23px;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\nion-content[bg-grey] .content-all-pst .commnts {\n  position: relative;\n  padding-left: 53px;\n  z-index: 11;\n  margin-top: 20px;\n  min-height: 56px;\n  display: block;\n}\nion-content[bg-grey] .content-all-pst .commnts img.adm-usr {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  left: 0;\n  border-radius: 50%;\n  border: 1px solid rgba(112, 181, 255, 0.74);\n  /* box-shadow: 0px 4px 14px rgba(4, 158, 102, 0.18); */\n  top: 0px;\n}\nion-content[bg-grey] .content-all-pst .commnts h5 {\n  font-size: 14px;\n  margin: 0px;\n  color: #4267B2;\n  font-weight: 500;\n}\nion-content[bg-grey] .content-all-pst .commnts h5 span.time-al {\n  float: right;\n  font-size: 10px;\n  color: #b5b5b5;\n}\nion-content[bg-grey] .content-all-pst .commnts p {\n  font-size: 12px;\n  line-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 0px;\n}\nion-content[bg-grey] .mt-20 {\n  margin-top: 20px !important;\n}\nion-content[bg-grey] .add-commnt {\n  position: relative;\n  margin-top: 15px;\n  padding-right: 54px;\n}\nion-content[bg-grey] .add-commnt ion-input {\n  background: #f9f9f9;\n  --padding: 14px;\n  --padding-start: 20px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-size: 14px;\n  color: #000;\n  --border-radius: 50px;\n  border-radius: 50px;\n  border: 1px solid #f3f3f3;\n  height: 45px;\n}\nion-content[bg-grey] .add-commnt a.btn-send {\n  width: 45px;\n  height: 45px;\n  background: var(--ion-color-gradient1);\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 19px;\n}\nion-content[bg-grey] .conts-slder {\n  position: absolute;\n  bottom: 0;\n  z-index: 11;\n  background: linear-gradient(to top, black, transparent);\n  left: 0;\n  right: 0;\n  color: #fff;\n  padding: 15px;\n}\nion-content[bg-grey] .conts-slder h4 {\n  font-size: 24px;\n  margin-bottom: 7px;\n  font-weight: 500;\n}\nion-content[bg-grey] .conts-slder ul.rating-all {\n  padding: 0px;\n  margin: 0px;\n  display: block;\n  list-style: none;\n}\nion-content[bg-grey] .conts-slder ul.rating-all li {\n  display: inline-block;\n  margin-right: 2px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\nion-content[bg-grey] .conts-slder ul.rating-all li.oprn-trsa {\n  background: #8BC34A;\n  color: #fff !important;\n  padding: 3px 8px 3px 8px;\n  font-size: 11px !important;\n  font-weight: 500;\n  border-radius: 50px;\n  letter-spacing: 0.5px;\n  opacity: 1 !important;\n  margin-left: 6px;\n  position: relative;\n  top: -1px;\n}\nion-content[bg-grey] .conts-slder ul.rating-all li.active {\n  color: #FFC107;\n}\nion-content[bg-grey] .conts-slder ul.rating-all li.totl-rv {\n  margin-left: 7px;\n  color: #fff;\n  font-size: 12px;\n  vertical-align: top;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  position: relative;\n  top: 2px;\n}\nion-content[bg-grey] span.opn-cl {\n  position: absolute;\n  right: 0;\n  bottom: 25px;\n  z-index: 11111;\n  background: linear-gradient(to right, #FF5722, #FFC107);\n  color: #fff;\n  padding: 5px 10px 5px 14px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 50px 0 0 50px;\n  letter-spacing: 0.5px;\n}\nion-content[bg-grey] span.opn-cl ion-icon {\n  font-size: 16px;\n  vertical-align: text-bottom;\n}\nion-content[bg-grey] span.favor-icn {\n  width: 35px;\n  height: 35px;\n  background: rgba(255, 255, 255, 0.3);\n  position: absolute;\n  left: 15px;\n  z-index: 1;\n  border-radius: 50%;\n  line-height: 42px;\n  text-align: center;\n  color: #f1f1f1;\n  font-size: 19px;\n  top: 13px;\n}\nion-content[bg-grey] .specilis .slide {\n  width: 100%;\n}\nion-content[bg-grey] .specilis .artict-str {\n  background: #fff;\n  padding: 10px 7px;\n  border: 1px solid #f1f1f1;\n  border-radius: 7px;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.06);\n  margin-bottom: 20px;\n}\nion-content[bg-grey] .specilis .artict-str img.img-ua {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: 1px solid #70b5ff;\n  padding: 2px;\n  margin-top: 2px;\n}\nion-content[bg-grey] .specilis .artict-str h5 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 5px;\n  margin-bottom: 3px;\n}\nion-content[bg-grey] .specilis .artict-str p {\n  margin: 0px;\n  font-size: 12px;\n  color: #b3b3b3;\n}\nion-content[bg-grey] .specilis {\n  padding: 0 0 5px 15px;\n}\nion-content[bg-grey] .specilis h4.ttl-main {\n  font-size: 18px;\n}\nion-content[bg-grey] ul.open-hrs {\n  margin: 0px;\n  padding: 0px;\n  margin-top: -3px;\n  list-style: none;\n}\nion-content[bg-grey] ul.open-hrs li {\n  font-size: 14px;\n  color: #8a8a8a;\n  padding: 7px 0;\n  display: block;\n  position: relative;\n  z-index: 0;\n}\nion-content[bg-grey] ul.open-hrs li span {\n  background: #fff;\n  padding-right: 5px;\n}\nion-content[bg-grey] ul.open-hrs li span.right-ts {\n  float: right;\n  color: #222;\n  font-weight: 500;\n  padding-left: 5px;\n  padding-right: 0px;\n}\nion-content[bg-grey] ul.open-hrs li:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.13);\n  z-index: -1;\n  top: 15px;\n}\nion-content[bg-grey] p.loct ion-icon {\n  vertical-align: text-bottom;\n  font-size: 16px;\n  color: #777;\n}\nion-content[bg-grey] .gg-map {\n  flex: 0 0 50%;\n}\nion-content[bg-grey] .gg-map iframe {\n  border: 0;\n  height: 100%;\n}\nion-content[bg-grey] h4.ttl-main.tct-btn {\n  margin-bottom: 15px;\n  font-size: 18px !important;\n}\nion-content[bg-grey] a.btn-cat {\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  font-size: 16px;\n  border-radius: 50%;\n  text-align: center;\n  position: absolute;\n  top: 13px;\n  z-index: 111;\n  right: 0;\n  width: 35px;\n  height: 35px;\n  line-height: 41px;\n  font-size: 18px;\n  right: 10px;\n  margin: 0px;\n}\nion-content[bg-grey] a.btn-pho {\n  float: right;\n  background: linear-gradient(to right, #FF9800, #FF5722);\n  color: #fff;\n  border-radius: 50%;\n  text-align: center;\n  margin-right: 8px;\n  position: absolute;\n  top: 13px;\n  z-index: 111;\n  right: 0;\n  width: 35px;\n  height: 35px;\n  line-height: 41px;\n  font-size: 18px;\n  right: 52px;\n  margin: 0px;\n}\nion-content[bg-grey] .srv-box {\n  position: relative;\n  padding: 10px;\n  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03); */\n  margin-bottom: 12px;\n  border: 1px solid #f9f9f9;\n  border-radius: 7px;\n  background: #f9f9f9;\n  padding-left: 70px;\n  display: flex;\n  justify-content: space-between;\n  min-height: 70px;\n  align-items: center;\n}\nion-content[bg-grey] .srv-box span.icon-srv {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  left: 10px;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 10px;\n}\nion-content[bg-grey] .srv-box span.icon-srv img {\n  width: 28px;\n}\nion-content[bg-grey] .srv-box span.srv-t {\n  font-size: 9px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  color: #c3c3c3;\n}\nion-content[bg-grey] .srv-box span.srv-t h5 {\n  margin: 0px;\n  margin-top: 6px;\n  font-size: 15px;\n  color: #222;\n  font-weight: 500;\n}\nion-content[bg-grey] .srv-box.selected {\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  color: #fff;\n}\nion-content[bg-grey] .srv-box.selected span.icon-srv {\n  background: #fff;\n}\nion-content[bg-grey] .srv-box.selected span.icon-srv img {\n  filter: invert(0.3);\n}\nion-content[bg-grey] .srv-box.selected span.srv-t {\n  color: rgba(255, 255, 255, 0.81);\n}\nion-content[bg-grey] .srv-box.selected span.srv-t h5 {\n  color: #fff;\n}\nion-content[bg-grey] .srv-box.selected span.select-check {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  display: block;\n}\n.add-rev {\n  /* margin: 0 -20px; */\n  position: relative;\n  z-index: 111;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #f3f3f3;\n  padding-bottom: 25px;\n}\nul.add-rat-all {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n  float: right;\n}\nul.add-rat-all li {\n  display: inline-block;\n  font-size: 14px;\n  margin-left: 2px;\n  color: #c7c7c7;\n}\nul.add-rat-all li.active {\n  color: #FFC107;\n}\nul.add-rat-all.all-rtsa {\n  position: absolute;\n  top: 39px;\n  left: 0px;\n}\nul.add-rat-all.all-rtsa li {\n  font-size: 8px !important;\n  margin: 0px !important;\n}\nion-footer.foot-book {\n  padding: 15px 20px;\n  box-shadow: 0px -7px 15px rgba(0, 0, 0, 0.08);\n  z-index: 1111;\n}\nion-footer.foot-book ion-button.btn-login {\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  --background-color: transparent;\n  --background: linear-gradient(to right, #6fcdff, #70b0ff);\n  border: none;\n  --border: none;\n  box-shadow: 0 10px 25px rgba(112, 177, 255, 0.15);\n  border-radius: 50px;\n  --border-radius: 50px;\n  overflow: hidden;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 1px;\n  height: 46px;\n  margin: 0px;\n}\n.specilis h4.ttl-main {\n  margin-bottom: 15px;\n}\n.specilis h4.ttl-main span.report-txt {\n  float: right;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  background: #F44336;\n  padding: 5px 10px;\n  margin-top: -2px;\n  border-radius: 50px 0 0 50px;\n}\n.specilis h4.ttl-main span.report-txt ion-icon {\n  vertical-align: text-bottom;\n}\nion-segment.segmt-details ion-segment-button {\n  font-size: 14px;\n}\n.box-servc {\n  position: relative;\n  background: #f9f9f9;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 18px;\n  padding-left: 107px;\n  min-height: 110px;\n  display: flex;\n  align-items: center;\n}\n.box-servc .img-b {\n  position: absolute;\n  left: 0;\n  width: 110px;\n  height: 100%;\n}\n.box-servc .img-b img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.box-servc .img-b:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.05);\n  z-index: 0;\n}\n.box-servc .img-b span.badg-catr {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 10px;\n  background: linear-gradient(to top left, #6fcdff, #70b0ff);\n  padding: 5px 12px 5px 12px;\n  color: #fff;\n  text-transform: capitalize;\n  text-decoration: none;\n  border-radius: 50px;\n  font-weight: 500;\n  z-index: 11;\n  letter-spacing: 0.5px;\n}\n.box-servc .img-b span.date-icn {\n  width: 40px;\n  height: 40px;\n  background: linear-gradient(to right, #8c8c8c, #000000);\n  color: #fff;\n  font-family: \"Ubuntu\", sans-serif !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  z-index: 11;\n  left: 0;\n}\n.box-servc .img-b span.date-icn small {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.82);\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\n.box-servc .cot-a {\n  text-align: left;\n  position: relative;\n  padding: 10px 14px;\n  height: 100%;\n  width: 100%;\n}\n.box-servc .cot-a h4 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #3a3a3a;\n  margin-bottom: 3px;\n}\n.box-servc .cot-a h4 span.right-price {\n  float: right;\n  color: #70b1ff;\n}\n.box-servc .cot-a ul.rating-all {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: block;\n  margin-top: 3px;\n  margin-bottom: 8px;\n}\n.box-servc .cot-a ul.rating-all li {\n  display: inline-block;\n  font-size: 13px;\n  margin-right: 2px;\n  color: #c3c3c3;\n}\n.box-servc .cot-a ul.rating-all li.active {\n  color: #f8c50a;\n}\n.box-servc .cot-a ul.rating-all li.totl-rv {\n  color: #000000;\n  font-weight: 600;\n  position: relative;\n  margin-right: 0px;\n  margin-left: 3px;\n  top: -1px;\n  font-size: 12px;\n}\n.box-servc .cot-a p {\n  margin: 0px !important;\n  font-size: 13px !important;\n  line-height: 22px !important;\n}\n.box-servc .cot-a p ion-icon {\n  vertical-align: bottom;\n  font-size: 16px;\n}\n.box-servc .cot-a p.b-price {\n  font-size: 14px;\n  color: #6fb2fd;\n  margin-top: 8px;\n  margin-bottom: 0px;\n}\n.box-servc.selected {\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  color: #fff;\n}\n.box-servc.selected .cot-a h4 {\n  color: #fff;\n}\n.box-servc.selected .cot-a p {\n  color: rgba(255, 255, 255, 0.7);\n}\n.box-servc.selected .cot-a p.b-price {\n  color: #fff;\n}\n.box-servc.selected span.select-check {\n  position: absolute;\n  top: 11px;\n  right: 7px;\n  font-size: 18px;\n}\nspan.off-dis {\n  position: absolute;\n  top: 18px;\n  z-index: 11;\n  background: linear-gradient(to right, #3F51B5, #F44336);\n  padding: 5px 10px 5px 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  border-radius: 0 50px 50px 0;\n}\n.img-b-sta {\n  position: relative;\n  margin-top: 5px;\n  margin-bottom: 35px;\n}\n.img-b-sta img {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid rgba(118, 187, 253, 0.28);\n  padding: 2px;\n}\n.img-b-sta span.dle-im {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: linear-gradient(to top left, #F44336, #E91E63);\n  color: #fff;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.cont-slydt {\n  display: flex;\n  background: #ececec;\n  border-radius: 7px;\n  margin-top: 15px;\n  overflow: hidden;\n}\n.cont-slydt .add-cit {\n  padding: 15px;\n  flex: 0 0 50%;\n  color: #222;\n  font-size: 12px;\n}\n.cont-slydt .add-cit p.loct {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #222;\n}\n.cont-slydt .add-cit h5 {\n  font-size: 15px;\n  margin: 0px;\n  margin-bottom: 6px;\n  font-weight: 700;\n}\n.cont-slydt .add-cit p.longt {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 19px;\n  color: #222;\n  border-bottom: 1px solid #d8d8d8;\n  padding-bottom: 10px;\n}\n.cont-slydt .add-cit a.bt-syys {\n  display: inline-block;\n  background: var(--ion-color-gradient1);\n  padding: 4px 13px;\n  border-radius: 50px;\n  font-size: 11px;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n}\nul.features-fsc {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  display: block;\n}\nul.features-fsc li {\n  display: inline-block;\n}\nul.features-fsc li span {\n  font-size: 10px;\n  background: #ebf0fb;\n  color: #4267B2;\n  padding: 2px 10px;\n  margin: 2px 2px;\n  display: inline-block;\n  border-radius: 50px;\n  font-weight: 600;\n  border: 1px solid #b4caf5;\n  text-transform: capitalize;\n}\n.slidrs.appoints {\n  margin-bottom: -15px;\n}\n.slidrs.appoints .slide {\n  width: 100%;\n  margin-bottom: 40px;\n}\n.slidrs.appoints .slide .vcotr {\n  text-align: center;\n  background: #f7f7f7;\n  padding: 12px;\n  border-radius: 5px;\n}\n.slidrs.appoints .slide .vcotr h5 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.slidrs.appoints .slide .vcotr img {\n  width: 60px;\n  height: 60px;\n  background: var(--ion-color-gradient1);\n  padding: 10px;\n  border-radius: 50%;\n}\n.slidrs.appoints .slide .vcotr p {\n  margin: 0px;\n  color: #737373;\n  font-size: 13px;\n  font-weight: 400;\n}\n.slidrs.appoints .slide .vcotr p.tsmr {\n  font-size: 12px;\n  margin: 0px;\n  font-weight: 500;\n  color: #4267B2;\n}\n.slidrs.appoints .slide .vcotr p.tsmr span {\n  font-weight: 700;\n  color: #f44336;\n}\nngx-stars {\n  display: inline-block;\n  width: 88px;\n}\n#map {\n  width: 100%;\n  height: 100px;\n}\n.map-wrapper {\n  position: relative;\n}\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\nspan.favor-icn.selected {\n  width: 30px;\n  height: 30px;\n  background: #5260ff !important;\n  position: absolute;\n  left: 8px;\n  z-index: 1;\n  border-radius: 50%;\n  line-height: 33px;\n  text-align: center;\n  color: #fff;\n  font-size: 15px;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlLWludGVyZXN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSxvQkFBQTtBQUNEO0FBQ0M7RUFDQyxZQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0M7RUFDQyxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVIO0FBREc7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFHSjtBQURHO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFHSjtBQUZJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSUw7QUFERztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1REFBQTtFQUNBLGlCQUFBO0FBR0o7QUFBRTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtBQUVIO0FBREc7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFHSjtBQURHO0VBQ0MsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFHSjtBQURHO0VBQ0MsWUFBQTtFQUFBLGVBQUE7RUFDQSxTQUFBO0FBR0o7QUFERztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFB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Q0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSEo7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBSkoiLCJmaWxlIjoicGxhY2UtaW50ZXJlc3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudFtiZy1ncmV5XSB7XG5cdGJhY2tncm91bmQ6I2Y5ZjlmOTtcblx0LS1iYWNrZ3JvdW5kOiNmOWY5Zjk7XG5cdFxuXHQuY29udGV0LXNlY3Qge1xuXHRcdHBhZGRpbmc6MHB4O1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cdC5zbGlkcy1ib3gge1xuXHRcdG1hcmdpbi1yaWdodDotMjBweDtcblx0XHRtYXJnaW4tdG9wOjE1cHg7XG5cdFx0LmltZy1ieC1zbHkge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTM1cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwcHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMjMwcHg7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5saWtlcy1udW1iZXIge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvdHRvbTogMTBweDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0cGFkZGluZzogM3B4IDZweCAzcHggMTBweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweCAwIDAgNTBweDtcblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHR3aWR0aDogMTRweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE0cHg7XG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IHN1Yjtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aDQubmFtZS1mZmxzIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwMDAwMCAsICMwMDAwMDAwMCk7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuaW1nLWJ4LXNseS5zdG9yaXMge1xuXHRcdFx0aGVpZ2h0OmF1dG87XG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAyNzVweDtcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHR9XG5cdFx0XHRoNC50bHQtc3RvciB7XG5cdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0cGFkZGluZzogNXB4IDEwcHggMTJweDtcblx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLmxpa2VzLW51bWJlciAge1xuXHRcdFx0XHRib3R0b206IGluaXRpYWw7XG5cdFx0XHRcdHRvcDogMTVweDtcblx0XHRcdH1cblx0XHRcdHNwYW4ubWVzZ3MtbnVtYmVyIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDQ3cHg7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdFx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdHBhZGRpbmc6IDNweCA2cHggM3B4IDEwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDE0cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxNHB4O1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBzdWI7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA0cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LnNsaWRzLWJveC5uZXctYm94LWEge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRtYXJnaW46IDBweDtcblx0XHRoZWlnaHQ6IDI2MHB4O1xuXHRcdC5zbGlkci1pbXMtc3Qge1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0aGVpZ2h0OiAyNjBweDtcblx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0b2JqZWN0LWZpdDpjb3Zlcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LnRvcC11c2Vlci1zIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMThweCAyMHB4O1xuXHRcdHBhZGRpbmctbGVmdDogNjBweDtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwMDAwMDAsICMwMDAwMDBiMCk7XG5cdFx0cGFkZGluZy1ib3R0b206IDQwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE1cHg7XG5cdFx0aW1nLmFkbS11c3Ige1xuXHRcdFx0d2lkdGg6IDQwcHggIWltcG9ydGFudDtcblx0XHRcdGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMTBweDtcblx0XHRcdC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0fVxuXHRcdGg1IHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0bWFyZ2luLXRvcDogMnB4O1xuXHRcdH1cblx0XHRzcGFuLnRpbWUtYWwge1xuXHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Myk7XG5cdFx0fVxuXHR9XG5cdHNwYW4ubGl2ZXN0bS1kb3Qge1xuXHRcdHdpZHRoOiAxMnB4O1xuXHRcdGhlaWdodDogMTJweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0YmFja2dyb3VuZDogI0Y0NDMzNjtcblx0XHRib3R0b206IDEwcHg7XG5cdFx0cmlnaHQ6IDdweDtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxKTtcblx0XHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEycHggMTJweCwgI2Y3N2U3NSwgI0Y0NDMzNik7XG5cdH1cblx0LmNvbnRlbnQtYWxsLXBzdCB7XG5cdFx0cGFkZGluZzogN3B4IDIwcHggMjBweDtcblx0XHQvKiBtYXJnaW4tdG9wOiAtMzVweDsgKi9cblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdHotaW5kZXg6IDExMTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdC8qIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG5cdFx0Ym94LXNoYWRvdzogMHB4IC0yMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI4KTsgKi9cblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdGg0LnR0bC1tYWluICB7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0fVxuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6ICM4YThhOGE7XG5cdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDIzcHg7IFxuXHRcdFx0bWFyZ2luLXRvcDogMHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdFx0LmNvbW1udHMge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0cGFkZGluZy1sZWZ0OiA1M3B4O1xuXHRcdFx0ei1pbmRleDogMTE7XG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0bWluLWhlaWdodDo1NnB4O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRpbWcuYWRtLXVzciB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0d2lkdGg6IDQycHg7XG5cdFx0XHRcdGhlaWdodDogNDJweDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMiwgMTgxLCAyNTUsIDAuNzQpO1xuXHRcdFx0XHQvKiBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiYSg0LCAxNTgsIDEwMiwgMC4xOCk7ICovXG5cdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0fVxuXHRcdFx0aDUgIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Y29sb3I6ICM0MjY3QjI7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdHNwYW4udGltZS1hbCB7XG5cdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0XHRjb2xvcjogI2I1YjViNTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQubXQtMjAge1xuXHRcdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcblx0fVxuXHQuYWRkLWNvbW1udCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cdFx0cGFkZGluZy1yaWdodDogNTRweDtcblx0XHRpb24taW5wdXQge1xuXHRcdFx0YmFja2dyb3VuZDogI2Y5ZjlmOTtcblx0XHRcdC0tcGFkZGluZzogMTRweDtcblx0XHRcdC0tcGFkZGluZy1zdGFydDogMjBweDtcblx0XHRcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG5cdFx0XHRoZWlnaHQ6IDQ1cHg7XG5cdFx0fVxuXHRcdGEuYnRuLXNlbmQge1xuXHRcdFx0d2lkdGg6IDQ1cHg7XG5cdFx0XHRoZWlnaHQ6IDQ1cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiAgdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGZvbnQtc2l6ZTogMTlweDtcblx0XHR9XG5cdH1cblx0LmNvbnRzLXNsZGVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdHotaW5kZXg6IDExO1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrICwgdHJhbnNwYXJlbnQpO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0cGFkZGluZzogMTVweDtcblx0XHRoNCB7XG5cdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiA3cHg7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdH1cblx0XHR1bC5yYXRpbmctYWxsIHtcblx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0bGkge1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMnB4O1xuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG5cdFx0XHR9XG5cdFx0XHRsaS5vcHJuLXRyc2Ege1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjOEJDMzRBO1xuXHRcdFx0XHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRcdFx0XHRwYWRkaW5nOiAzcHggOHB4IDNweCA4cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdG9wYWNpdHk6IDEgIWltcG9ydGFudDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDZweDtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR0b3A6IC0xcHg7XG5cdFx0XHR9XG5cdFx0XHRsaS5hY3RpdmUge1xuXHRcdFx0XHRjb2xvcjogI0ZGQzEwNztcblx0XHRcdH1cblx0XHRcdGxpLnRvdGwtcnYge1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogN3B4O1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0dG9wOiAycHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHNwYW4ub3BuLWNsIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Ym90dG9tOiAyNXB4O1xuXHRcdHotaW5kZXg6IDExMTExO1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNTcyMiwgI0ZGQzEwNyk7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0cGFkZGluZzogNXB4IDEwcHggNXB4IDE0cHg7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweCAwIDAgNTBweDtcblx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0aW9uLWljb24ge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0dmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuXHRcdH1cblx0fVxuXHRzcGFuLmZhdm9yLWljbiB7XG5cdFx0d2lkdGg6IDM1cHg7XG5cdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMTVweDtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRsaW5lLWhlaWdodDogNDJweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y29sb3I6ICNmMWYxZjE7XG5cdFx0Zm9udC1zaXplOiAxOXB4O1xuXHRcdHRvcDogMTNweDtcblx0fVxuXHQuc3BlY2lsaXMge1xuXHRcdC5zbGlkZSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cdFx0LmFydGljdC1zdHIge1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdHBhZGRpbmc6IDEwcHggN3B4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDdweDtcblx0XHRcdGJveC1zaGFkb3c6IDBweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdGltZy5pbWctdWEge1xuXHRcdFx0XHR3aWR0aDogNjVweDtcblx0XHRcdFx0aGVpZ2h0OiA2NXB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICM3MGI1ZmY7XG5cdFx0XHRcdHBhZGRpbmc6IDJweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogMnB4O1xuXHRcdFx0fVxuXHRcdFx0aDUge1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDNweDtcblx0XHRcdH1cblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRjb2xvcjogI2IzYjNiMztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LnNwZWNpbGlzIHtcblx0XHRwYWRkaW5nOiAwIDAgNXB4IDE1cHg7XG5cdH1cblx0LnNwZWNpbGlzIGg0LnR0bC1tYWluIHtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdH1cblx0dWwub3Blbi1ocnMge1xuXHRcdG1hcmdpbjogMHB4O1xuXHRcdHBhZGRpbmc6IDBweDtcblx0XHRtYXJnaW4tdG9wOiAtM3B4O1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0bGkge1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6ICM4YThhOGE7XG5cdFx0XHRwYWRkaW5nOiA3cHggMDtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XG5cdFx0XHR6LWluZGV4OjA7XG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogNXB4O1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5yaWdodC10cyB7XG5cdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0Y29sb3I6ICMyMjI7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdHBhZGRpbmctbGVmdDogNXB4O1xuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAwcHg7XG5cdFx0XHR9XG5cdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuXHRcdFx0XHR6LWluZGV4OiAtMTtcblx0XHRcdFx0dG9wOiAxNXB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRwLmxvY3Qge1xuXHRcdGlvbi1pY29ue1xuXHRcdFx0dmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICM3Nzc7XG5cdFx0fVxuXHR9XG5cdC5nZy1tYXAge1xuXHRcdGZsZXg6MCAwIDUwJTtcblx0XHRpZnJhbWUge1xuXHRcdFx0Ym9yZGVyOiAwO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdH1cblx0fVxuXHRoNC50dGwtbWFpbi50Y3QtYnRuIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuXHR9XG5cdGEuYnRuLWNhdCB7XG5cdFx0YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAxM3B4O1xuXHRcdHotaW5kZXg6IDExMTtcblx0XHRyaWdodDogMDtcblx0XHR3aWR0aDogMzVweDtcblx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDQxcHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdHJpZ2h0OiAxMHB4O1xuXHRcdG1hcmdpbjogMHB4O1xuXHR9XG5cdGEuYnRuLXBobyB7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGOTgwMCwgI0ZGNTcyMik7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAxM3B4O1xuXHRcdHotaW5kZXg6IDExMTtcblx0XHRyaWdodDogMDtcblx0XHR3aWR0aDogMzVweDtcblx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDQxcHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdHJpZ2h0OiA1MnB4O1xuXHRcdG1hcmdpbjogMHB4O1xuXHR9XG5cdC5zcnYtYm94IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHQvKiBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTsgKi9cblx0XHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XG5cdFx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRcdGJhY2tncm91bmQ6ICNmOWY5Zjk7XG5cdFx0cGFkZGluZy1sZWZ0OiA3MHB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1pbi1oZWlnaHQ6IDcwcHg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRzcGFuLmljb24tc3J2IHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHdpZHRoOiA1MHB4O1xuXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmZjZGZmLCAjNzBiMGZmKTtcblx0XHRcdGxlZnQ6IDEwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRsaW5lLWhlaWdodDogNTBweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHR0b3A6IDEwcHg7XG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogMjhweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3Bhbi5zcnYtdCB7XG5cdFx0XHRmb250LXNpemU6IDlweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRjb2xvcjogI2MzYzNjMztcblx0XHRcdGg1IHtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDZweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRjb2xvcjogIzIyMjtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LnNydi1ib3guc2VsZWN0ZWQge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZmY2RmZiwgIzcwYjBmZik7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0c3Bhbi5pY29uLXNydiB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0ZmlsdGVyOiBpbnZlcnQoMC4zKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3Bhbi5zcnYtdCB7XG5cdFx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgxKTtcblx0XHRcdGg1IHtcblx0XHRcdFx0Y29sb3I6I2ZmZjtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3Bhbi5zZWxlY3QtY2hlY2sge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiA1cHg7XG5cdFx0XHRyaWdodDogNXB4O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHR9XG59XG5cbi5hZGQtcmV2IHtcbiAgICAvKiBtYXJnaW46IDAgLTIwcHg7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDExMTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxudWwuYWRkLXJhdC1hbGwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG5cdGxpIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdG1hcmdpbi1sZWZ0OiAycHg7XG5cdFx0Y29sb3I6ICNjN2M3Yzc7XG5cdH1cblx0bGkuYWN0aXZlIHtcblx0XHRjb2xvcjogI0ZGQzEwNztcblx0fVxuXHRcbn1cbnVsLmFkZC1yYXQtYWxsLmFsbC1ydHNhIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDM5cHg7XG5cdGxlZnQ6IDBweDtcblx0bGkge1xuXHRcdGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcblx0fVxufVxuXG5pb24tZm9vdGVyLmZvb3QtYm9vayB7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAtN3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB6LWluZGV4OiAxMTExO1xuXHRpb24tYnV0dG9uLmJ0bi1sb2dpbiB7XG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmZjZGZmLCAjNzBiMGZmKTtcblx0XHQtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmZjZGZmLCAjNzBiMGZmKTtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0LS1ib3JkZXI6IG5vbmU7XG5cdFx0Ym94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgxMTIsIDE3NywgMjU1LCAwLjE1KTtcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdC0tYm9yZGVyLXJhZGl1czogNTBweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRoZWlnaHQ6IDQ2cHg7XG5cdFx0bWFyZ2luOiAwcHg7XG5cdH1cbn1cbi5zcGVjaWxpcyB7XG5cdGg0LnR0bC1tYWluICB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0XHRzcGFuLnJlcG9ydC10eHQge1xuXHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0YmFja2dyb3VuZDogI0Y0NDMzNjtcblx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRcdFx0bWFyZ2luLXRvcDogLTJweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XG5cdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbmlvbi1zZWdtZW50LnNlZ210LWRldGFpbHMgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ib3gtc2VydmMge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTA3cHg7XG4gICAgbWluLWhlaWdodDogMTEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHQuaW1nLWIge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHdpZHRoOiAxMTBweDtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRpbWcge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHR9XG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcblx0XHRcdHotaW5kZXg6IDA7XG5cdFx0fVxuXHRcdHNwYW4uYmFkZy1jYXRyIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHJpZ2h0OiAxMHB4O1xuXHRcdFx0dG9wOiAxMHB4O1xuXHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCBsZWZ0LCAjNmZjZGZmLCAjNzBiMGZmKTtcblx0XHRcdHBhZGRpbmc6IDVweCAxMnB4IDVweCAxMnB4O1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0ei1pbmRleDogMTE7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0fVxuXHRcdHNwYW4uZGF0ZS1pY24ge1xuXHRcdFx0d2lkdGg6IDQwcHg7XG5cdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4YzhjOGMsICMwMDAwMDApO1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0ei1pbmRleDogMTE7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0c21hbGwgIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyKTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuY290LWEge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDEwcHggMTRweDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aDQgIHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGNvbG9yOiAjM2EzYTNhO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogM3B4O1xuXHRcdFx0c3Bhbi5yaWdodC1wcmljZSB7XG5cdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0Y29sb3I6ICM3MGIxZmY7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHVsLnJhdGluZy1hbGwge1xuXHRcdFx0cGFkZGluZzogMHB4O1xuXHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRtYXJnaW4tdG9wOiAzcHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0XHRsaSB7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDJweDtcblx0XHRcdFx0Y29sb3I6ICNjM2MzYzM7XG5cdFx0XHR9XG5cdFx0XHRsaS5hY3RpdmUge1xuXHRcdFx0XHRjb2xvcjogI2Y4YzUwYTtcblx0XHRcdH1cblx0XHRcdGxpLnRvdGwtcnYge1xuXHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDNweDtcblx0XHRcdFx0dG9wOiAtMXB4O1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHAge1xuXHRcdFx0bWFyZ2luOiAwcHggIWltcG9ydGFudDtcblx0XHRcdGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDIycHggIWltcG9ydGFudDtcblx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwLmItcHJpY2Uge1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6ICM2ZmIyZmQ7XG5cdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cblx0XHR9XG5cdH1cbn1cbi5ib3gtc2VydmMuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZmY2RmZiwgIzcwYjBmZik7XG4gICAgY29sb3I6ICNmZmY7XG5cdC5jb3QtYSB7XG5cdFx0aDQge1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0fVxuXHRcdHAge1xuXHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcblx0XHR9XG5cdFx0cC5iLXByaWNlICB7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHR9XG5cdFx0XG5cdH1cblx0c3Bhbi5zZWxlY3QtY2hlY2sge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDExcHg7XG5cdFx0cmlnaHQ6IDdweDtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdH1cbn1cbnNwYW4ub2ZmLWRpcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMThweDtcbiAgICB6LWluZGV4OiAxMTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzRjUxQjUsICNGNDQzMzYpO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcbn1cbi5pbWctYi1zdGEge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzVweDtcblx0XHRpbWcge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDE1MHB4O1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgxMTgsIDE4NywgMjUzLCAwLjI4KTtcblx0XHRcdHBhZGRpbmc6IDJweDtcblx0XHR9XG5cdFx0c3Bhbi5kbGUtaW0ge1xuXHRcdFx0d2lkdGg6IDIwcHg7XG5cdFx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IC01cHg7XG5cdFx0XHRyaWdodDogLTVweDtcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgI0Y0NDMzNiwgI0U5MUU2Myk7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0fVxuXHR9XG4uY29udC1zbHlkdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcblx0bWFyZ2luLXRvcDogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXHQuYWRkLWNpdCB7XG5cdFx0cGFkZGluZzogMTVweDtcblx0XHRmbGV4OiAwIDAgNTAlO1xuXHRcdGNvbG9yOiAjMjIyO1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRwLmxvY3Qge1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHRcdFx0Y29sb3I6ICMyMjI7XG5cdFx0fVxuXHRcdGg1IHtcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogNnB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHR9XG5cdFx0cC5sb25ndCB7XG5cdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0bGluZS1oZWlnaHQ6IDE5cHg7XG5cdFx0XHRjb2xvcjogIzIyMjtcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuXHRcdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdFx0fVxuXHRcdGEuYnQtc3l5cyB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0XHRcdHBhZGRpbmc6IDRweCAxM3B4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHR9XG5cdH1cbn1cbnVsLmZlYXR1cmVzLWZzYyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cdGxpIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0c3BhbiB7XG5cdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZWJmMGZiO1xuXHRcdFx0Y29sb3I6ICM0MjY3QjI7XG5cdFx0XHRwYWRkaW5nOiAycHggMTBweDtcblx0XHRcdG1hcmdpbjogMnB4IDJweDtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2I0Y2FmNTtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRcdH1cblx0fVxufVxuLnNsaWRycy5hcHBvaW50cyB7XG5cdG1hcmdpbi1ib3R0b206IC0xNXB4O1xuXHQuc2xpZGUge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cdFx0LnZjb3RyIHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG5cdFx0XHRwYWRkaW5nOiAxMnB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0aDUge1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdFx0fVxuXHRcdFx0aW1nICB7XG5cdFx0XHRcdHdpZHRoOiA2MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpO1xuXHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHR9XG5cdFx0XHRwIHtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdGNvbG9yOiAjNzM3MzczO1xuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHR9XG5cdFx0XHRwLnRzbXIge1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRjb2xvcjojNDI2N0IyO1xuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjZjQ0MzM2O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbm5neC1zdGFycyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA4OHB4O1xufVxuXG4jbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG4gXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gXG4gICNtYXBfY2VudGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gICAgbWFyZ2luLXRvcDogLTQxcHg7XG4gIH1cbn1cblxuc3Bhbi5mYXZvci1pY24uc2VsZWN0ZWQge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNTI2MGZmICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDhweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRvcDogOHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    51605: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border heder-main\" align-title=\"center\">\n  <ion-toolbar lines=\"none\">\n\t<ion-back-button routerLink=\"/places-of-interests\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n\t<ion-buttons slot=\"start\">\n\t\t<ion-menu-button> <a href=\"javascript:void(0)\" class=\"menu-tgl\"> <img src=\"assets/images/menu-wt.png\"></a></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"center\">Place of Interest </ion-title>\n\t<ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n\t\t\n  </ion-toolbar>\n</ion-header>\n\n<ion-content bg-grey>\n\t<div class=\"contet-sect\">\n\t\t<div class=\"phot-slides\">\n\t\t\t<div class=\"slids-box new-box-a\">\n\n\t\t\t\t<ion-slides pager=\"true\" *ngIf=\"photos_data.length > 0\">\n\t\t\t\t\t<ion-slide  *ngFor=\"let photos of photos_data; let i = index;\">\n\t\t\t\t\t  <div class=\"slide\">\n\t\t\t\t\t\t<div class=\"slidr-ims-st\">\t\n\t\t\t\t\t\t\t<img src=\"{{photos}}\" class=\"img-str\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\n\t\t\t\t<ion-slides pager=\"true\" *ngIf=\"photos_data.length == 0 && places_data.image != '' && places_data.image != undefined\">\n\t\t\t\t\t<ion-slide  >\n\t\t\t\t\t  <div class=\"slide\">\n\t\t\t\t\t\t<div class=\"slidr-ims-st\">\t\n\t\t\t\t\t\t\t<img src=\"{{places_data.image}}\" class=\"img-str\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\n\t\t\t\t<ion-slides pager=\"true\" *ngIf=\"photos_data.length == 0 && (places_data.image == null || places_data.image == '' || places_data.image == undefined)\">\n\t\t\t\t\t<ion-slide  >\n\t\t\t\t\t  <div class=\"slide\">\n\t\t\t\t\t\t<div class=\"slidr-ims-st\">\t\n\t\t\t\t\t\t\t<img src=\"assets/img/image-not-found.png\" class=\"img-str\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\n\t\t\t\t<div class=\"conts-slder\">\n\t\t\t\t\t<h4>  {{places_data.place.name}}  </h4>\n\t\t\t<ngx-stars   *ngIf=\"(places_data.place.rating != '')\" class=\"ng-start2\" [color]=\"'#f8c50a'\" [initialStars]=\"places_data.place.rating\" [readonly]=\"true\"  [size]=\"0.5\"></ngx-stars>\n\t\t\t<ngx-stars   *ngIf=\"(places_data.place.rating == '')\" class=\"ng-start2\" [color]=\"'#f8c50a'\" [initialStars]=\"0\" [readonly]=\"true\"  [size]=\"0.5\"></ngx-stars>\n\t\t\t<!-- <ul class=\"rating-all\">\n\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t<li> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t<li class=\"totl-rv\"> (12 Reviews) </li>\n\t\t\t\t\t</ul> -->\n\t\t\t\t\t<ng-conatiner *ngIf=\"places_data.results_l.reviews != undefined && places_data.results_l.reviews.length > 0\">\n\t\t\t\t\t({{places_data.results_l.reviews.length}} Reviews)\n\t\t\t\t</ng-conatiner>\n\t\t\t\t<ng-conatiner *ngIf=\"places_data.results_l.reviews == undefined\">\n\t\t\t\t\t(0 Reviews)\n\t\t\t\t</ng-conatiner>\n\t\t\t\t</div>\n\t\t\t\t<span class=\"favor-icn\" *ngIf=\"fav_type == 'not'\" (click)=\"selectplace(places_data,i)\"> <ion-icon name=\"heart-outline\"></ion-icon> </span>\n\t\t\t\t<span class=\"favor-icn selected\" *ngIf=\"fav_type == 'already'\"  (click)=\"removeplace(places_data._id,i)\"> <ion-icon name=\"heart-outline\"></ion-icon> </span>\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-cat\"> <ion-icon name=\"share-social-outline\"></ion-icon> </a>\n\t\t\t</div>\n\t\t\t<ion-segment [(ngModel)]=\"profiletab\" class=\"segmt-details\">\n\t\t\t\t<ion-segment-button value=\"Basic\" (click)=\"loadmap(places_data.results_l.geometry.location.lat,places_data.results_l.geometry.location.lng);\">\n\t\t\t\t   About\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"reviews\">\n\t\t\t\t   Reviews\n\t\t\t\t</ion-segment-button>\n\t\t\t</ion-segment>\n\t\t\t<div class=\"content-all-pst\">\n\t\t\t\t<div [ngSwitch]=\"profiletab\">\n\t\t\t\t\t<ion-list *ngSwitchCase=\"'Basic'\">\n\t\t\t\t\t\t<!-- <h4 class=\"ttl-main\"> About Us \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>\n\t\t\t\t\t -->\n\t\t\t\t\t\t<!--h4 class=\"ttl-main\"> Opening Hours </h4>\n\t\t\t\t\t\t<ul class=\"open-hrs\">\n\t\t\t\t\t\t\t<li> <span> Monday - Friday </span> <span class=\"right-ts\"> 8:30AM - 9:00PM </span> </li>\n\t\t\t\t\t\t\t<li><span> Saturday - Sunday </span> <span class=\"right-ts\"> 9:00AM - 6:00PM </span> </li>\n\t\t\t\t\t\t</ul-->\n\t\t\t\t\t\t<!--h4 class=\"ttl-main\"> Address </h4-->\n\t\t\t\t\t\t<div class=\"cont-slydt\">\n\t\t\t\t\t\t\t<div class=\"add-cit\">\t\n\t\t\t\t\t\t\t\t<h5> Location </h5>\n\t\t\t\t\t\t\t\t<p class=\"longt\"> <b> Lat </b>{{places_data.results_l.geometry.location.lat}}° <br> <b> Lng </b>{{places_data.results_l.geometry.location.lng}}°  </p>\n\t\t\t\t\t\t\t\t<p class=\"loct\">  {{places_data.place.address}}</p>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" (click)=\"gotomap(places_data.results_l.url);\" class=\"bt-syys\"> Get Direction </a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"gg-map\">\n\t\t\t\t\t\t\t\t<div #map id=\"map\"  style=\"height: 100%;\"></div>\n\t\t\t\t\t\t\t\t<!-- <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509167.682012511!2d-123.79975055493215!3d37.1929955926075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1591875480005!5m2!1sen!2sin\" width=\"100%\" height=\"180\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe> -->\n\n\t\t\t\t\t\t\t\t<!-- <iframe src=\"{{getmapurl(places_data.latlong.lat,places_data.latlong.lng)}}\" width=\"100%\" height=\"180\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe> -->\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"ttl-main\"> Fearures & Facilities </h4>\n\t\t\t\t\t\t<ul class=\"features-fsc\"  *ngIf=\"places_data.results_l.types.length > 0\">\n\t\t\t\t\t\t\t<li *ngFor=\"let type of places_data.results_l.types\"> <span> {{((type).replace('_', ' ')).replace('_', ' ')}} </span> </li>\n\t\t\t\t\t\t\t<!-- <li> <span> Booking Required </span> </li>\n\t\t\t\t\t\t\t<li> <span> Dogs Allowed </span> </li>\n\t\t\t\t\t\t\t<li> <span> Toilets</span> </li>\n\t\t\t\t\t\t\t<li> <span> Showers </span> </li>\n\t\t\t\t\t\t\t<li> <span> Close to Road </span> </li>\n\t\t\t\t\t\t\t<li> <span> Wildlife </span> </li>\n\t\t\t\t\t\t\t<li> <span> Laundry </span> </li> -->\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<h4  *ngIf=\"weathers.length > 0\" class=\"ttl-main mt-20\"> Weather Forecast \n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<div class=\"slidrs appoints\" *ngIf=\"weathers.length > 0\">\t\n\t\t\t\t\t\t\t<ion-slides [options]=\"slideOpts3\" pager=\"true\">\n\t\t\t\t\t\t\t\t<ion-slide *ngFor=\"let weather of weathers;\">\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"vcotr\">\n\t\t\t\t\t\t\t\t\t\t\t<h5> {{getdate(weather.date)}} </h5>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{weather.day.condition.icon}}\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"tsmr\"> <span> {{weather.day.maxtemp_c}}° </span> {{round(weather.day.mintemp_c)}}° </p>\n\t\t\t\t\t\t\t\t\t\t\t<p> {{weather.day.condition.text}} </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<!-- <ion-slide>\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"vcotr\">\n\t\t\t\t\t\t\t\t\t\t\t<h5> Tue </h5>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/wea2.png\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"tsmr\"> <span> 42° </span> 30° </p>\n\t\t\t\t\t\t\t\t\t\t\t<p> Clear </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"vcotr\">\n\t\t\t\t\t\t\t\t\t\t\t<h5> Wed </h5>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/wea1.png\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"tsmr\"> <span> 33° </span> 21° </p>\n\t\t\t\t\t\t\t\t\t\t\t<p> Clouds </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"vcotr\">\n\t\t\t\t\t\t\t\t\t\t\t<h5> Thu </h5>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/wea2.png\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"tsmr\"> <span> 38° </span> 25° </p>\n\t\t\t\t\t\t\t\t\t\t\t<p> Clear </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"vcotr\">\n\t\t\t\t\t\t\t\t\t\t\t<h5> Fri </h5>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/wea1.png\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"tsmr\"> <span> 38° </span> 25° </p>\n\t\t\t\t\t\t\t\t\t\t\t<p> Clouds </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"vcotr\">\n\t\t\t\t\t\t\t\t\t\t\t<h5> Sat </h5>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/wea2.png\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"tsmr\"> <span> 38° </span> 25° </p>\n\t\t\t\t\t\t\t\t\t\t\t<p> Clear </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"vcotr\">\n\t\t\t\t\t\t\t\t\t\t\t<h5> Sun </h5>\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/wea1.png\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"tsmr\"> <span> 38° </span> 25° </p>\n\t\t\t\t\t\t\t\t\t\t\t<p> Clouds </p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide> -->\n\t\t\t\t\t\t\t</ion-slides>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--div class=\"slidrs appoints\">\t\n\t\t\t\t\t\t\t<ion-slides [options]=\"slideOpts3\" pager=\"true\">\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-b-sta\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/trip1.jpg\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-b-sta\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/trip2.jpg\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-b-sta\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/trip3.jpg\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-b-sta\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/trip4.jpg\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t</ion-slides>\n\t\t\t\t\t\t</div-->\n\t\t\t\t\t</ion-list>\n\t\t\t\t  \n\t\t\t\t\t<ion-list *ngSwitchCase=\"'reviews'\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<!-- <div class=\"add-rev\">\n\t\t\t\t\t\t\t<h4 class=\"ttl-main mt-20\"> \n\t\t\t\t\t\t\t\tWrite Your Review\n\t\t\t\t\t\t\t\t<ul class=\"add-rat-all\">\n\t\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t\t<li> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<div class=\"add-commnt\">\n\t\t\t\t\t\t\t\t<ion-input placeholder=\"Add review here...\"></ion-input>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn-send\"> <ion-icon name=\"send-outline\"></ion-icon> </a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<ng-container *ngIf=\"places_data.results_l.reviews == undefined\">\n\t\t\t\t\t\t\t<h4 class=\"ttl-main mt-20\"> Reviews (0)</h4>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<ng-container *ngIf=\"places_data.results_l.reviews != undefined && places_data.results_l.reviews.length > 0\">\n\t\t\t\t\t\t<h4 class=\"ttl-main mt-20\"> Reviews ({{places_data.results_l.reviews.length}})</h4>\n\t\t\t\t\t\t<div class=\"commnts\" *ngFor=\"let revew of places_data.results_l.reviews\">\n\t\t\t\t\t\t\t<img *ngIf=\"revew.profile_photo_url != ''\" src=\"{{revew.profile_photo_url}}\" class=\"adm-usr\"> \n\t\t\t\t\t\t\t<img *ngIf=\"revew .profile_photo_url == ''\" src=\"assets/img/img2.jpg\"  class=\"adm-usr\">\n\t\t\t\t\t\t<ngx-stars   *ngIf=\"(revew.rating != '')\" class=\"ng-start2\" [color]=\"'#f8c50a'\" [initialStars]=\"revew.rating\" [readonly]=\"true\"  [size]=\"0.5\"></ngx-stars>\n\t\t\t\t\t\t<ngx-stars   *ngIf=\"(revew.rating == '')\" class=\"ng-start2\" [color]=\"'#f8c50a'\" [initialStars]=\"0\" [readonly]=\"true\"  [size]=\"0.5\"></ngx-stars>\n\t\t\t\t\t\t\t<h5> {{revew.author_name}} <span class=\"time-al\"> {{revew.relative_time_description}} </span> </h5>\n\t\t\t\t\t\t\t<p> {{revew.text}} </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t<!-- \t\t<div class=\"commnts\" >\n\t\t\t\t\t\t\t<img src=\"assets/img/img2.jpg\" class=\"adm-usr\"> \n\t\t\t\t\t\t\t<ul class=\"add-rat-all all-rtsa\">\n\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t<li> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t<li> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<h5> <span class=\"time-al\"> 1 hour ago </span> </h5>\n\t\t\t\t\t\t\t<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"commnts\">\n\t\t\t\t\t\t\t<img src=\"assets/img/img3.jpg\" class=\"adm-usr\"> \n\t\t\t\t\t\t\t<ul class=\"add-rat-all all-rtsa\">\n\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t\t<li class=\"active\"> <ion-icon name=\"star\"></ion-icon> </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<h5>  Marry James  <span class=\"time-al\"> 3 hours ago </span> </h5>\n\t\t\t\t\t\t\t<p> At vero eos et accusamus et iusto odio dignissimos . </p>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\n\t\t\t\t\t</ion-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n<!--ion-footer class=\"foot-book\">\n\t<ion-button color=\"pink\" class=\"btn-login\" expand=\"full\" routerLink=\"/book-slot\">Book Now</ion-button>\n</ion-footer-->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_place-interest-details_place-interest-details_module_ts-es5.js.map
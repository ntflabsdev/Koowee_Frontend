(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_places-of-interests_places-of-interests_module_ts"], {
    /***/
    62758: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlacesOfInterestsPageRoutingModule": function PlacesOfInterestsPageRoutingModule() {
          return (
            /* binding */
            _PlacesOfInterestsPageRoutingModule
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


      var _places_of_interests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./places-of-interests.page */
      73161);

      var routes = [{
        path: '',
        component: _places_of_interests_page__WEBPACK_IMPORTED_MODULE_0__.PlacesOfInterestsPage
      }];

      var _PlacesOfInterestsPageRoutingModule = function PlacesOfInterestsPageRoutingModule() {
        _classCallCheck(this, PlacesOfInterestsPageRoutingModule);
      };

      _PlacesOfInterestsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PlacesOfInterestsPageRoutingModule);
      /***/
    },

    /***/
    58724: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlacesOfInterestsPageModule": function PlacesOfInterestsPageModule() {
          return (
            /* binding */
            _PlacesOfInterestsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _places_of_interests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./places-of-interests-routing.module */
      62758);
      /* harmony import */


      var _places_of_interests_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./places-of-interests.page */
      73161);
      /* harmony import */


      var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-geoautocomplete */
      73070);
      /* harmony import */


      var ngx_stars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-stars */
      84426);

      var _PlacesOfInterestsPageModule = function PlacesOfInterestsPageModule() {
        _classCallCheck(this, PlacesOfInterestsPageModule);
      };

      _PlacesOfInterestsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, ngx_stars__WEBPACK_IMPORTED_MODULE_8__.NgxStarsModule, _places_of_interests_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlacesOfInterestsPageRoutingModule, ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()],
        declarations: [_places_of_interests_page__WEBPACK_IMPORTED_MODULE_1__.PlacesOfInterestsPage]
      })], _PlacesOfInterestsPageModule);
      /***/
    },

    /***/
    73161: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlacesOfInterestsPage": function PlacesOfInterestsPage() {
          return (
            /* binding */
            _PlacesOfInterestsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_places_of_interests_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./places-of-interests.page.html */
      85506);
      /* harmony import */


      var _places_of_interests_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./places-of-interests.page.scss */
      55376);
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

      var _PlacesOfInterestsPage = /*#__PURE__*/function () {
        function PlacesOfInterestsPage(userService, sanitizer, router, geolocation, nativeGeocoder, zone) {
          _classCallCheck(this, PlacesOfInterestsPage);

          this.userService = userService;
          this.sanitizer = sanitizer;
          this.router = router;
          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.zone = zone;
          this.userSettings = {
            showCurrentLocation: true
          };
          this.is_submit = false;
          this.errors = ['', null, undefined];
          this.places_data = [];
          this.fav_places = [];
          this.slideOpts = {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 400,
            loop: true,
            autoplay: true,
            centeredSlides: true
          };
          this.userSettings['inputPlaceholderText'] = 'Location';
          this.userSettings['showRecentSearch'] = false;
          this.userSettings['showCurrentLocation'] = true;
          this.userSettings['currentLocIconUrl'] = true; // this.userSettings['searchIconUrl'] = true;

          this.userSettings['locationIconUrl'] = true;
          this.userSettings = Object.assign({}, this.userSettings);
          this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
          this.autocomplete = {
            input: ''
          };
          this.autocompleteItems = [];
        }

        _createClass(PlacesOfInterestsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getprofiledata();
            this.get_fav_places();
          }
        }, {
          key: "autoCompleteCallback",
          value: function autoCompleteCallback(data) {
            var placeAddresCompoponent = {
              ZIP_CODE: 'postal_code',
              COUNTRY: 'country',
              STATE: 'administrative_area_level_1',
              CITY: 'administrative_area_level_2',
              TOWN: 'sublocality_level_1',
              AREA: 'sublocality_level_2',
              NEAREST_ROAD: 'route'
            };
            console.log('search data');
            console.log(data);
            this.state = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.STATE);
            this.country = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.COUNTRY);
            this.city = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.CITY);
            this.town = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.TOWN);
            this.area = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.AREA);
            this.zip_code = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.ZIP_CODE);
            console.log(data.data.formatted_address);
            this.lat = data.data.geometry.location.lat;
            this.lng = data.data.geometry.location.lng;
            this.location = data.data.formatted_address;
            this.place_id = data.data.place_id;
            this.reference = data.data.reference;
            this.name = data.data.name;
            this.map_url = data.data.url;
            this.save();
          }
        }, {
          key: "save",
          value: function save() {
            this.is_submit = true;

            if (this.errors.indexOf(this.location) >= 0) {
              return;
            } else {
              var locate = {
                state: this.state,
                country: this.country,
                city: this.city,
                town: this.town,
                area: this.area,
                zip_code: this.zip_code,
                lat: this.lat,
                lng: this.lng,
                location: this.location,
                place_id: this.place_id,
                reference: this.reference,
                name: this.name,
                map_url: this.map_url
              };
              console.log('locations = ', this.location);
              localStorage.setItem('search_by_location', JSON.stringify(locate)); //this.router.navigate(['/search-trip']);

              this.selectSearchResult(this.lat, this.lng, this.location);
            }
            /*location:this.location,lat:this.lat,lon:this.lng,state:this.state,country:this.country});*/

          }
        }, {
          key: "getAddressComponent",
          value: function getAddressComponent(address_components, key) {
            var value = '';
            var postalCodeType = address_components.filter(function (aComp) {
              return aComp.types.some(function (typesItem) {
                return typesItem === key;
              });
            });
            if (postalCodeType != null && postalCodeType.length > 0) value = postalCodeType[0].long_name;
            return value;
          }
        }, {
          key: "getprofiledata",
          value: function getprofiledata() {
            var _this = this;

            this.userService.postData({
              _id: localStorage.getItem('user_auth_id')
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_user_profile_detail').subscribe(function (result) {
              console.log(result);

              if (result.data.lat == undefined || result.data.lat == null) {
                _this.lats = Number(result.data.cords.coordinates[1]);
                _this.lngs = Number(result.data.cords.coordinates[0]);

                _this.selectSearchResult(_this.lats, _this.lngs, '');
              } else {
                _this.lats = Number(result.data.lat);
                _this.lngs = Number(result.data.lon);

                _this.selectSearchResult(_this.lats, _this.lngs, result.data.locations);
              }
            });
          }
        }, {
          key: "get_fav_places",
          value: function get_fav_places() {
            var _this2 = this;

            this.userService.postData({
              _id: localStorage.getItem('user_auth_id')
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_fav_places').subscribe(function (result) {
              _this2.fav_places = result.data;
            });
          }
        }, {
          key: "selectSearchResult",
          value: function selectSearchResult(lat, lng, location) {
            var _this3 = this;

            this.userService.presentLoading();
            this.userService.postData({
              lat: lat,
              lon: lng,
              location: location,
              my_lat: this.lats,
              my_lng: this.lngs
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/places_of_interest').subscribe(function (result) {
              _this3.userService.stopLoading();

              console.log(result);

              if (result.status == 1) {
                _this3.places_data = result.data;
              } else {
                _this3.userService.presentToast('No data found try another location', 'danger');
              }
            }, function (err) {
              _this3.userService.stopLoading();

              _this3.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "selectplace",
          value: function selectplace(data, indx) {
            var _this4 = this;

            jquery__WEBPACK_IMPORTED_MODULE_4__('.selectplace' + indx).addClass('selected');
            this.userService.presentLoading();
            this.userService.postData({
              _id: localStorage.getItem('user_auth_id'),
              data: JSON.stringify(data)
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/make_fav_place').subscribe(function (result) {
              _this4.userService.stopLoading();

              console.log(result);

              if (result.status == 1) {
                _this4.fav_places = result.data;

                _this4.userService.presentToast('Places added to your favourite list successfully!', 'success');
              } else {
                _this4.userService.presentToast('Error to send a request, try again later', 'danger');
              }
            }, function (err) {
              _this4.userService.stopLoading();

              _this4.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "removeplace",
          value: function removeplace(id, indx) {
            var _this5 = this;

            jquery__WEBPACK_IMPORTED_MODULE_4__('.selectplaces' + indx).removeClass('selected');
            this.userService.presentLoading();
            this.userService.postData({
              _id: localStorage.getItem('user_auth_id'),
              place_id: id
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/remove_fav_place').subscribe(function (result) {
              _this5.userService.stopLoading();

              console.log(result);

              if (result.status == 1) {
                _this5.fav_places = result.data;

                _this5.userService.presentToast('Place has been removed from your favourite list successfully!', 'success');
              } else {
                _this5.userService.presentToast('Error to send a request, try again later', 'danger');
              }
            }, function (err) {
              _this5.userService.stopLoading();

              _this5.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "UpdateSearchResults",
          value: function UpdateSearchResults() {
            var _this6 = this;

            if (this.autocomplete.input == '') {
              this.autocompleteItems = [];
              return;
            }

            var options = {
              input: this.autocomplete.input,
              types: ['(cities)']
            };
            this.GoogleAutocomplete.getPlacePredictions(options, function (predictions, status) {
              console.log('predictions == ', predictions);
              _this6.autocompleteItems = [];

              _this6.zone.run(function () {
                predictions.forEach(function (prediction) {
                  _this6.autocompleteItems.push(prediction);
                });
              });
            });
          }
        }, {
          key: "ClearAutocomplete",
          value: function ClearAutocomplete() {
            this.autocompleteItems = [];
            this.autocomplete.input = '';
          }
        }, {
          key: "SelectSearchResult",
          value: function SelectSearchResult(item) {
            var _this7 = this;

            ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
            console.log(item);
            this.placeid = item.place_id;
            this.userService.presentLoading();
            this.userService.postData({
              location: item.description,
              my_lat: this.lats,
              my_lng: this.lngs
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/places_of_interest2').subscribe(function (result) {
              _this7.userService.stopLoading();

              console.log(result);

              if (result.status == 1) {
                _this7.places_data = result.data;
              } else {
                _this7.userService.presentToast('No data found try another location', 'danger');
              }
            }, function (err) {
              _this7.userService.stopLoading();

              _this7.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "gotodetail",
          value: function gotodetail(url, data, type, fav_id) {
            localStorage.setItem('place_detail_data', JSON.stringify(data));
            localStorage.setItem('place_fav_type', type);
            localStorage.setItem('fav_id', fav_id);
            this.router.navigate([url]);
          }
        }]);

        return PlacesOfInterestsPage;
      }();

      _PlacesOfInterestsPage.ctorParameters = function () {
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

      _PlacesOfInterestsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-places-of-interests',
        template: _raw_loader_places_of_interests_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_places_of_interests_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PlacesOfInterestsPage);
      /***/
    },

    /***/
    55376: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-color:#fff;\n}\nion-header ion-back-button {\n  font-size: 13px;\n}\nion-header ion-title {\n  font-weight: 500;\n}\nion-header ion-buttons {\n  font-size: 20px;\n  margin-right: 10px;\n}\nion-content {\n  background: #f9f9f9;\n  --background: #f9f9f9;\n}\n.top-search {\n  padding: 15px 18px 20px;\n  position: relative;\n  margin-bottom: 25px;\n  background: var(--ion-color-gradient1);\n}\n.top-search .src-trs {\n  display: flex;\n  background: #fff;\n  border-radius: 50px;\n  padding: 3px 18px;\n  margin-bottom: -40px;\n  z-index: 111;\n  position: relative;\n  border: 1px solid #efefef;\n  /*box-shadow: 0px 0px 12px rgba(0 0 0 / 6%);*/\n  box-shadow: rgba 0, 0, 0, 1.4;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 50px;\n}\n.top-search .src-trs span.icon-drt {\n  padding-right: 9px;\n  font-size: 22px;\n  color: #4267B2;\n  border-right: 1px solid #4267B2;\n  margin-right: 9px;\n  position: relative;\n  top: -2px;\n  display: flex;\n  align-items: center;\n}\n.top-search .src-trs ion-input {\n  font-size: 15px;\n}\n.top-search .src-trs span.icon-sc-f {\n  width: 40px;\n  height: 40px;\n  background: var(--ion-color-gradient1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  margin-right: -14px;\n  margin-top: -1px;\n  font-size: 18px;\n}\n.flts-alu {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.flts-alu ion-select {\n  font-size: 14px;\n  --placeholder-color: #4267B2;\n  --placeholder-opacity: 1;\n  color: #4267B2;\n  margin-bottom: 10px;\n  --padding-top: 0px;\n  margin-right: -5px;\n}\n.box-servc {\n  position: relative;\n  background: #fff;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  margin-bottom: 18px;\n  padding-left: 105px;\n  min-height: 120px;\n  display: flex;\n  align-items: center;\n}\n.box-servc .img-b {\n  position: absolute;\n  left: 0;\n  width: 110px;\n  height: 100%;\n}\n.box-servc .img-b img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.box-servc .img-b:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.1);\n  z-index: 0;\n}\n.box-servc .img-b span.badg-catr {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 10px;\n  background: linear-gradient(to top left, #6fcdff, #70b0ff);\n  padding: 5px 12px 5px 12px;\n  color: #fff;\n  text-transform: capitalize;\n  text-decoration: none;\n  border-radius: 50px;\n  font-weight: 500;\n  z-index: 11;\n  letter-spacing: 0.5px;\n  text-transform: capitalize;\n}\n.box-servc .cot-a {\n  text-align: left;\n  position: relative;\n  padding: 14px;\n  height: 100%;\n  width: 100%;\n}\n.box-servc .cot-a h4 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #3a3a3a;\n  margin-bottom: 7px;\n}\n.box-servc .cot-a ul.rating-all {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: block;\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n.box-servc .cot-a ul.rating-all li {\n  display: inline-block;\n  font-size: 13px;\n  margin-right: 2px;\n  color: #c3c3c3;\n}\n.box-servc .cot-a ul.rating-all li.active {\n  color: #f8c50a;\n}\n.box-servc .cot-a ul.rating-all li.totl-rv {\n  color: #000000;\n  font-weight: 600;\n  position: relative;\n  margin-right: 0px;\n  margin-left: 3px;\n  top: -1px;\n  font-size: 12px;\n}\n.box-servc .cot-a p {\n  margin: 0px;\n  font-size: 13px;\n  margin-top: 0px;\n}\n.box-servc .cot-a p ion-icon {\n  font-size: 16px;\n  position: relative;\n  top: 3px;\n}\n.book-now {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  font-size: 12px;\n  background: var(--ion-color-gradient1);\n  padding: 6px 10px 6px 17px;\n  color: #fff;\n  text-transform: capitalize;\n  text-decoration: none;\n  border-radius: 50px 0 0 50px;\n  font-weight: 600;\n  box-shadow: 0 3px 15px rgba(112, 177, 255, 0.15);\n}\nspan.badg-catr {\n  display: inline-block;\n  font-size: 9px;\n  background: #e9f0ff;\n  padding: 4px 12px 4px;\n  color: #4267B2;\n  border-radius: 50px;\n  margin-top: 12px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  border: 1px solid #cddcfb;\n  text-transform: capitalize;\n}\nspan.favor-icn {\n  width: 30px;\n  height: 30px;\n  background: rgba(0, 0, 0, 0.3);\n  position: absolute;\n  left: 8px;\n  z-index: 1;\n  border-radius: 50%;\n  line-height: 33px;\n  text-align: center;\n  color: #fff;\n  font-size: 15px;\n  top: 8px;\n}\n[places-sec] {\n  padding: 18px;\n}\n[mn-places-head] {\n  margin: 0px 0px 20px;\n  font-size: 17px;\n  padding-left: 10px;\n  position: relative;\n  z-index: 1;\n  color: #000;\n}\n[mn-places-head]:before {\n  position: absolute;\n  content: \"\";\n  left: 0px;\n  top: -2px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: var(--ion-color-primary);\n  opacity: 0.15;\n}\nspan.favor-icn.selected {\n  width: 30px;\n  height: 30px;\n  background: #5260ff;\n  position: absolute;\n  left: 8px;\n  z-index: 1;\n  border-radius: 50%;\n  line-height: 33px;\n  text-align: center;\n  color: #fff;\n  font-size: 15px;\n  top: 8px;\n}\n.flts-alu h2 a {\n  margin-left: 107px;\n}\n::ng-deep .custom-autocomplete__input input {\n  overflow: hidden !important;\n  background-color: #fff !important;\n  text-overflow: ellipsis !important;\n  border: 0 !important;\n  font-size: 16px !important;\n  border-radius: 10px !important;\n  outline: none;\n}\n.custom {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlcy1vZi1pbnRlcmVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBRUMsYUFBQTtBQURGO0FBR0M7RUFDQyxtQkFBQTtBQURGO0FBR0M7RUFDSSxlQUFBO0FBREw7QUFHQztFQUNDLGdCQUFBO0FBREY7QUFHQztFQUVDLGVBQUE7RUFDQSxrQkFBQTtBQUZGO0FBS0E7RUFDSyxtQkFBQTtFQUNELHFCQUFBO0FBRko7QUFJQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FBREo7QUFFQztFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBQ0U7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNIO0FBQ0U7RUFDQyxlQUFBO0FBQ0g7QUFDRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0g7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7QUFDQztFQUNDLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Q7QUFBQztFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUg7QUFERTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUdIO0FBREU7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBR0g7QUFERTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMERBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FBR0g7QUFBQztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFRjtBQURFO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUdIO0FBREU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdIO0FBRkc7RUFDQyxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFJSjtBQUZHO0VBQ0MsY0FBQTtBQUlKO0FBRkc7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUlKO0FBREU7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFHSDtBQUZHO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUlKO0FBQ0E7RUFDQyxrQkFBQTtFQUNHLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDSCxnREFBQTtBQUVEO0FBQUE7RUFDQyxxQkFBQTtFQUNHLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUdKO0FBREE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQUlEO0FBRkE7RUFDSyxhQUFBO0FBS0w7QUFIQTtFQUVDLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUtEO0FBSkM7RUFFQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7QUFLRjtBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFJSjtBQURBO0VBQ0ksa0JBQUE7QUFJSjtBQUVRO0VBQ0ksMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ1Qsb0JBQUE7RUFDUywwQkFBQTtFQUNBLDhCQUFBO0VBQ1QsYUFBQTtBQUNIO0FBS0E7RUFDQyxVQUFBO0FBRkQiLCJmaWxlIjoicGxhY2VzLW9mLWludGVyZXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuXHQmOmFmdGVyXG5cdHtcblx0XHRkaXNwbGF5Om5vbmU7XG5cdH1cblx0aW9uLXRvb2xiYXJ7XG5cdFx0LS1ib3JkZXItY29sb3I6I2ZmZjtcblx0fVxuXHRpb24tYmFjay1idXR0b257XG5cdCAgICBmb250LXNpemU6IDEzcHg7XG5cdH1cblx0aW9uLXRpdGxle1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdH1cblx0aW9uLWJ1dHRvbnMgXG5cdHtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHR9XHRcbn1cbmlvbi1jb250ZW50IHtcblx0ICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuLnRvcC1zZWFyY2gge1xuICAgIHBhZGRpbmc6IDE1cHggMThweCAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpO1xuXHQuc3JjLXRycyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0cGFkZGluZzogM3B4IDE4cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogLTQwcHg7XG5cdFx0ei1pbmRleDogMTExO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuXHRcdC8qYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYmEoMCAwIDAgLyA2JSk7Ki9cblx0XHRib3gtc2hhZG93OiByZ2JhICgwLDAsMCwxLjQpO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1pbi1oZWlnaHQ6IDUwcHg7XG5cdFx0c3Bhbi5pY29uLWRydCB7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiA5cHg7XG5cdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRjb2xvcjogIzQyNjdCMjtcblx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MjY3QjI7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDlweDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHRvcDogLTJweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdH1cblx0XHRpb24taW5wdXQge1xuXHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdH1cblx0XHRzcGFuLmljb24tc2MtZiB7XG5cdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdGhlaWdodDogNDBweDtcblx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAtMTRweDtcblx0XHRcdG1hcmdpbi10b3A6IC0xcHg7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0fVxuXHR9XG59XG4uZmx0cy1hbHUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGlvbi1zZWxlY3Qge1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHQtLXBsYWNlaG9sZGVyLWNvbG9yOiAjNDI2N0IyO1xuXHRcdC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcblx0XHRjb2xvcjogIzQyNjdCMjtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHRcdC0tcGFkZGluZy10b3A6IDBweDtcblx0XHRtYXJnaW4tcmlnaHQ6IC01cHg7XG5cdH1cbn1cbi5ib3gtc2VydmMge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdG1hcmdpbi1ib3R0b206IDE4cHg7XG5cdHBhZGRpbmctbGVmdDogMTA1cHg7XG5cdG1pbi1oZWlnaHQ6IDEyMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQuaW1nLWIge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHdpZHRoOiAxMTBweDtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRpbWcge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHR9XG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHRcdFx0ei1pbmRleDogMDtcblx0XHR9XG5cdFx0c3Bhbi5iYWRnLWNhdHIge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0cmlnaHQ6IDEwcHg7XG5cdFx0XHR0b3A6IDEwcHg7XG5cdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICM2ZmNkZmYsICM3MGIwZmYpO1xuXHRcdFx0cGFkZGluZzogNXB4IDEycHggNXB4IDEycHg7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHR6LWluZGV4OiAxMTtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRcdH1cblx0fVxuXHQuY290LWEge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDE0cHg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGg0ICB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRjb2xvcjogIzNhM2EzYTtcblx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcblx0XHR9XG5cdFx0dWwucmF0aW5nLWFsbCB7XG5cdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG1hcmdpbi10b3A6IDNweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0XHRcdGxpIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMnB4O1xuXHRcdFx0XHRjb2xvcjogI2MzYzNjMztcblx0XHRcdH1cblx0XHRcdGxpLmFjdGl2ZSB7XG5cdFx0XHRcdGNvbG9yOiAjZjhjNTBhO1xuXHRcdFx0fVxuXHRcdFx0bGkudG90bC1ydiB7XG5cdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogM3B4O1xuXHRcdFx0XHR0b3A6IC0xcHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cCB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdG1hcmdpbi10b3A6IDBweDtcblx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHRvcDogM3B4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuLmJvb2stbm93IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG4gICAgcGFkZGluZzogNnB4IDEwcHggNnB4IDE3cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblx0Ym94LXNoYWRvdzogMCAzcHggMTVweCByZ2JhKDExMiwgMTc3LCAyNTUsIDAuMTUpO1xufVxuc3Bhbi5iYWRnLWNhdHIge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgYmFja2dyb3VuZDogI2U5ZjBmZjtcbiAgICBwYWRkaW5nOiA0cHggMTJweCA0cHg7XG4gICAgY29sb3I6ICM0MjY3QjI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGRjZmI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5zcGFuLmZhdm9yLWljbiB7XG5cdHdpZHRoOiAzMHB4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA4cHg7XG5cdHotaW5kZXg6IDE7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0bGluZS1oZWlnaHQ6IDMzcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0dG9wOiA4cHg7XG59XG5bcGxhY2VzLXNlY10ge1xuXHQgICAgcGFkZGluZzogMThweDtcbn1cblttbi1wbGFjZXMtaGVhZF0gXG5cdHtcblx0bWFyZ2luOiAwcHggMHB4IDIwcHg7XG5cdGZvbnQtc2l6ZTogMTdweDtcblx0cGFkZGluZy1sZWZ0OjEwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTtcblx0Y29sb3I6ICMwMDA7XG5cdCY6YmVmb3JlIFxuXHR7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0bGVmdDogMHB4O1xuXHRcdHRvcDogLTJweDtcblx0XHR3aWR0aDogMjVweDtcblx0XHRoZWlnaHQ6IDI1cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdG9wYWNpdHk6MC4xNTtcblx0fVx0XG59XG5cbnNwYW4uZmF2b3ItaWNuLnNlbGVjdGVkIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogIzUyNjBmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogOHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdG9wOiA4cHg7XG59XG5cbi5mbHRzLWFsdSBoMiBhIHtcbiAgICBtYXJnaW4tbGVmdDogMTA3cHg7XG59XG5cblxuOjpuZy1kZWVwe1xuXHQuY3VzdG9tLWF1dG9jb21wbGV0ZV9faW5wdXR7XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcblx0XHRcdGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICBcblx0fVxufVxuXG4uY3VzdG9te1xuXHRjb2xvcjogcmVkO1xufSJdfQ== */";
      /***/
    },

    /***/
    85506: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button routerLink=\"/tabs/dashboard\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\"></ion-title>\n\t<!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n\t<ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"top-search\">\n\t\t<div class=\"src-trs\">\n\t\t\t<span class=\"icon-drt\" routerLink=\"/places-map\"> <ion-icon name=\"globe-outline\"></ion-icon> </span>\n\t\t\t<!-- <ion-input placeholder=\"Search here...\"></ion-input> -->\n\t\t\t  <ngxgeo-autocomplete class=\"custom\" [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"></ngxgeo-autocomplete>\n\t\t\t<!-- <span class=\"icon-sc-f\"> <ion-icon name=\"funnel-outline\"></ion-icon> </span> -->\n\n           <!--  <ion-toolbar color=\"primary\">\n\t\t\t<ion-searchbar [(ngModel)]=\"autocomplete.input\" (ionInput)=\"UpdateSearchResults()\" placeholder=\"Search for a place\"  (ionClear)=\"ClearAutocomplete()\"></ion-searchbar>\n\t\t\t</ion-toolbar> -->\n\t\t\t\n\t\t</div>\n\t\t<!-- <ion-list [hidden]=\"autocompleteItems.length == 0\">\n\t\t\t<ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n\t\t\t{{ item.description }}\n\t\t\t</ion-item>\n\t\t\t</ion-list> -->\n\t</div>\n\t<div places-sec *ngIf=\"fav_places.length > 0\">\n\t\t<div class=\"flts-alu\">\t\n\t\t\t<h2 mn-places-head>\n\t\t\t\tFavourite Places \n\n\t\t\t<a href=\"javascript:void(0);\" routerLink=\"/all-places\">See All</a>\n\t\t\t</h2>\n\t\t</div>\t\n\t\t<div  *ngFor=\"let place of fav_places; let i = index;\" class=\"box-servc selected{{i}}\" >\n\t\t\t<div class=\"img-b\">\n\t\t\t\t<img *ngIf=\"place.data.image.length == 0\" src=\"assets/img/image-not-found.png\">\n\t\t\t\t<img *ngIf=\"place.data.image.length != 0\" src=\"{{place.data.image}}\">\n\t\t\t\t<span class=\"favor-icn selectplaces{{i}} selected\" (click)=\"removeplace(place._id,i)\"> <ion-icon name=\"heart\"></ion-icon> </span>\n\t\t\t</div>\n\t\t\t<div class=\"cot-a\">\n\t\t\t\t<h4> {{place.data.place.name}} </h4>\n\t\t\t\t<ngx-stars   *ngIf=\"(place.data.place.rating != '')\" class=\"ng-start2\" [color]=\"'#f8c50a'\" [initialStars]=\"place.data.place.rating\" [readonly]=\"true\"  [size]=\"0.5\"></ngx-stars>\n\t\t\t\t<ngx-stars   *ngIf=\"(place.data.place.rating == '')\" class=\"ng-start2\" [color]=\"'#f8c50a'\" [initialStars]=\"0\" [readonly]=\"true\"  [size]=\"0.5\"></ngx-stars>\n\t\t\t\t<p> <ion-icon name=\"location-outline\"></ion-icon> {{place.data.distance}} from you </p>\n\t\t\t\t<span class=\"badg-catr\" *ngFor=\"let type of place.data.results_l.types\"> {{((type).replace('_', ' ')).replace('_', ' ')}} </span>\n\t\t\t\t<a href=\"javascript:void(0)\"  (click)=\"gotodetail('/place-interest-details/'+place.data.place.placeId,place.data,'already',place._id)\" class=\"book-now\"> Details </a>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\t<div places-sec>\n\t\t<div class=\"flts-alu\">\t\n\t\t\t<h2 mn-places-head>\n\t\t\t\tPlaces of Interests \n\t\t\t</h2>\n\t\t</div>\t\n\t\t<div  *ngFor=\"let place of places_data; let i = index;\" class=\"box-servc selected{{i}}\" >\n\t\t\t<div class=\"img-b\">\n\t\t\t\t<img *ngIf=\"place.image.length == 0\" src=\"assets/img/image-not-found.png\">\n\t\t\t\t<img *ngIf=\"place.image.length != 0\" src=\"{{place.image}}\">\n\t\t\t\t<span class=\"favor-icn selectplace{{i}}\" (click)=\"selectplace(place,i)\"> <ion-icon name=\"heart\"></ion-icon> </span>\n\t\t\t</div>\n\t\t\t<div class=\"cot-a\">\n\t\t\t\t<h4> {{place.place.name}} </h4>\n\t\t\t\t<ngx-stars   *ngIf=\"(place.place.rating != '')\" class=\"ng-start2\" [color]=\"'#f8c50a'\" [initialStars]=\"place.place.rating\" [readonly]=\"true\"  [size]=\"0.5\"></ngx-stars>\n\t\t\t\t<ngx-stars   *ngIf=\"(place.place.rating == '')\" class=\"ng-start2\" [color]=\"'#f8c50a'\" [initialStars]=\"0\" [readonly]=\"true\"  [size]=\"0.5\"></ngx-stars>\n\t\t\t\t<p> <ion-icon name=\"location-outline\"></ion-icon> {{place.distance}} from you </p>\n\t\t\t\t<span class=\"badg-catr\" *ngFor=\"let type of place.results_l.types\"> {{((type).replace('_', ' ')).replace('_', ' ')}} </span>\n\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"gotodetail('/place-interest-details/'+place.place.placeId,place,'not',place.place.placeId)\"  class=\"book-now\"> Details </a>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n<!-- \t<div class=\"map-wrapper\" style=\"height: 100%;\">      \n    <div id=\"map_center\">\n      <ion-icon name=\"pin\" size=\"large\" color=\"danger\"></ion-icon>      \n    </div>\n    <div #map id=\"map\"  style=\"height: 100%;\"></div>\n  </div> -->\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_places-of-interests_places-of-interests_module_ts-es5.js.map
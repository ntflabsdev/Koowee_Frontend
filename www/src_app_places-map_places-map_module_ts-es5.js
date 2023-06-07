(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_places-map_places-map_module_ts"], {
    /***/
    32883: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlacesMapPageRoutingModule": function PlacesMapPageRoutingModule() {
          return (
            /* binding */
            _PlacesMapPageRoutingModule
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


      var _places_map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./places-map.page */
      2942);

      var routes = [{
        path: '',
        component: _places_map_page__WEBPACK_IMPORTED_MODULE_0__.PlacesMapPage
      }];

      var _PlacesMapPageRoutingModule = function PlacesMapPageRoutingModule() {
        _classCallCheck(this, PlacesMapPageRoutingModule);
      };

      _PlacesMapPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PlacesMapPageRoutingModule);
      /***/
    },

    /***/
    3850: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlacesMapPageModule": function PlacesMapPageModule() {
          return (
            /* binding */
            _PlacesMapPageModule
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


      var _places_map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./places-map-routing.module */
      32883);
      /* harmony import */


      var _places_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./places-map.page */
      2942);
      /* harmony import */


      var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-geoautocomplete */
      73070);

      var _PlacesMapPageModule = function PlacesMapPageModule() {
        _classCallCheck(this, PlacesMapPageModule);
      };

      _PlacesMapPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _places_map_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlacesMapPageRoutingModule, ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()],
        declarations: [_places_map_page__WEBPACK_IMPORTED_MODULE_1__.PlacesMapPage]
      })], _PlacesMapPageModule);
      /***/
    },

    /***/
    2942: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlacesMapPage": function PlacesMapPage() {
          return (
            /* binding */
            _PlacesMapPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_places_map_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./places-map.page.html */
      77004);
      /* harmony import */


      var _places_map_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./places-map.page.scss */
      36729);
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


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      83046);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jquery */
      91704);
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../config */
      39698);

      var _PlacesMapPage = /*#__PURE__*/function () {
        function PlacesMapPage(userService, sanitizer, router, geolocation, nativeGeocoder, zone) {
          _classCallCheck(this, PlacesMapPage);

          this.userService = userService;
          this.sanitizer = sanitizer;
          this.router = router;
          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.zone = zone;
          this.is_submit = false;
          this.errors = ['', null, undefined];
          this.places = [];
          this.places_data = [];
          this.fav_places = [];
          this.userSettings = {
            showCurrentLocation: true
          };
          this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
          this.autocomplete = {
            input: ''
          };
          this.autocompleteItems = [];
          this.userSettings['inputPlaceholderText'] = 'Location';
          this.userSettings['showRecentSearch'] = false;
          this.userSettings['showCurrentLocation'] = true;
          this.userSettings['currentLocIconUrl'] = true; //this.userSettings['searchIconUrl'] = true;

          this.userSettings['locationIconUrl'] = true;
          this.userSettings = Object.assign({}, this.userSettings);
        }

        _createClass(PlacesMapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMap();
            this.getprofile();
            this.get_fav_places();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.loadMap();
            this.getprofile();
          } //LOADING THE MAP HAS 2 PARTS.

        }, {
          key: "loadMap",
          value: function loadMap() {
            var _this = this;

            //FIRST GET THE LOCATION FROM THE DEVICE.
            this.geolocation.getCurrentPosition().then(function (resp) {
              var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
              var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              }; //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
              // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude); 

              _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
              _this.placesService = new google.maps.places.PlacesService(_this.map);
              console.log('placesss ', _this.placesService);
              var marker = new google.maps.Marker({
                position: latLng,
                title: 'Biratnagar, Janpath-15',
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
              }); // this.addInfoWindow(marker, content);

              marker.setMap(_this.map);
            })["catch"](function (error) {
              console.log('Error getting location', error);
            });
          }
        }, {
          key: "loadMap2",
          value: function loadMap2(lat, lon, image, name) {
            var latLng = new google.maps.LatLng(lat, lon);
            var mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }; //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
            // this.getAddressFromCoords(lat, lon); 

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.placesService = new google.maps.places.PlacesService(this.map);
            console.log('placesss ', this.placesService);
            var images = {
              url: image,
              size: new google.maps.Size(20, 32),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(0, 32)
            };
            var shape = {
              coords: [1, 1, 1, 20, 18, 20, 18, 1],
              type: "poly"
            };
            var marker = new google.maps.Marker({
              position: latLng,
              title: name,
              shape: shape,
              //icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
              icon: images
            }); // this.addInfoWindow(marker, content);

            marker.setMap(this.map);
          }
        }, {
          key: "setMarkers",
          value: function setMarkers(lat, lon) {
            this.displayGoogleMap();
          }
        }, {
          key: "addMarker",
          value: function addMarker(datas) {
            if (datas.image.length == 0) {
              var image = {
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                size: new google.maps.Size(60, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 32)
              };
              var shape = {
                coords: [1, 1, 1, 20, 18, 20, 18, 1],
                type: "poly"
              };
              var contentString = '<div id="content">' + '<h1 id="firstHeading" class="firstHeading">' + datas.place.name + '</h1> <div id="bodyContent"><p>' + datas.place.name + '</p><p>Link: ' + datas.place.name + ', <a href="' + datas.results_l.url + '" target="_blank">' + datas.results_l.url + '(' + datas.results_l.adr_address + ').</p></div></div>'; //const infoWindow = new google.maps.InfoWindow();

              var infoWindow = new google.maps.InfoWindow({
                content: contentString
              });
              var marker = new google.maps.Marker({
                position: {
                  lat: datas.results_l.geometry.location.lat,
                  lng: datas.results_l.geometry.location.lng
                },
                map: this.map,
                title: datas.place.name,
                icon: image,
                shape: shape,
                visible: true
              });
              marker.addListener("click", function () {
                infoWindow.close();
                infoWindow.setContent(contentString);
                infoWindow.open(marker.getMap(), marker);
              });
              return marker;
            } else {
              var _image = {
                // url: datas.image,
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                size: new google.maps.Size(60, 71),
                origin: new google.maps.Point(0, 50),
                anchor: new google.maps.Point(0, 100)
              };
              var _shape = {
                coords: [1, 1, 1, 20, 18, 20, 18, 1],
                type: "poly"
              };

              var _contentString = '<div id="content">' + '<h1 id="firstHeading" class="firstHeading">' + datas.place.name + '</h1> <img src="' + datas.image + '"/> <div id="bodyContent"><p>' + datas.place.name + '</p><p>Link: ' + datas.place.name + ', <a href="' + datas.results_l.url + '" target="_blank">' + datas.results_l.url + '(' + datas.results_l.adr_address + ').</p></div></div>'; //const infoWindow = new google.maps.InfoWindow();


              var _infoWindow = new google.maps.InfoWindow({
                content: _contentString
              });

              var _marker = new google.maps.Marker({
                position: {
                  lat: datas.latlong.lat,
                  lng: datas.latlong.lng
                },
                map: this.map,
                title: datas.place.name,
                icon: _image,
                shape: _shape,
                visible: true
              });

              _marker.addListener("click", function () {
                _infoWindow.close();

                _infoWindow.setContent(_contentString);

                _infoWindow.open(_marker.getMap(), _marker);
              });

              return _marker;
            }
          }
        }, {
          key: "getAddressFromCoords",
          value: function getAddressFromCoords(lattitude, longitude) {
            var _this2 = this;

            console.log("getAddressFromCoords " + lattitude + " " + longitude);
            var options = {
              useLocale: true,
              maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(function (result) {
              _this2.address = "";
              var responseAddress = [];
              console.log('------------', result);

              for (var _i2 = 0, _Object$entries = Object.entries(result[0]); _i2 < _Object$entries.length; _i2++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];

                if (value.length > 0) responseAddress.push(value);
              }

              responseAddress.reverse();

              for (var _i3 = 0, _responseAddress = responseAddress; _i3 < _responseAddress.length; _i3++) {
                var _value = _responseAddress[_i3];
                _this2.address += _value + ", ";
              }

              _this2.address = _this2.address.slice(0, -2);
            })["catch"](function (error) {
              _this2.address = "Address Not Available!";
            });
          } //wE CALL THIS FROM EACH ITEM.

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
            }, _config__WEBPACK_IMPORTED_MODULE_6__.config.API_URL + '/places_of_interest').subscribe(function (result) {
              _this3.userService.stopLoading();

              console.log(result);

              if (result.status == 1) {
                _this3.places_data = result.data;

                _this3.get_fav_places();
              } else {
                _this3.userService.presentToast('No data found try another location', 'danger');
              }
            }, function (err) {
              _this3.userService.stopLoading();

              _this3.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "selectSearchResult2",
          value: function selectSearchResult2(lat, lng, location) {
            var _this4 = this;

            this.userService.postData({
              lat: lat,
              lon: lng,
              location: location,
              my_lat: this.lats,
              my_lng: this.lngs
            }, _config__WEBPACK_IMPORTED_MODULE_6__.config.API_URL + '/places_of_interest').subscribe(function (result) {
              console.log(result);

              if (result.status == 1) {
                _this4.places_data = result.data;

                _this4.get_fav_places();
              } else {
                _this4.userService.presentToast('No data found try another location', 'danger');
              }
            }, function (err) {
              _this4.userService.stopLoading();

              _this4.userService.presentToast('Failed to send request. Please try again', 'danger');
            });
          }
        }, {
          key: "getprofile",
          value: function getprofile() {
            var _this5 = this;

            this.userService.postData({
              _id: localStorage.getItem('user_auth_id')
            }, _config__WEBPACK_IMPORTED_MODULE_6__.config.API_URL + '/get_user_profile_detail').subscribe(function (result) {
              console.log(result);

              if (result.data.lat == undefined || result.data.lat == null) {
                _this5.lats = Number(result.data.cords.coordinates[1]);
                _this5.lngs = Number(result.data.cords.coordinates[0]);

                _this5.selectSearchResult2(_this5.lats, _this5.lngs, '');
              } else {
                _this5.lats = Number(result.data.lat);
                _this5.lngs = Number(result.data.lon);

                _this5.selectSearchResult2(_this5.lats, _this5.lngs, result.data.locations);
              } //this.selectSearchResult2(this.lats,this.lngs,result.data.locations);

            });
          }
        }, {
          key: "get_fav_places",
          value: function get_fav_places() {
            var _this6 = this;

            this.userService.postData({
              _id: localStorage.getItem('user_auth_id')
            }, _config__WEBPACK_IMPORTED_MODULE_6__.config.API_URL + '/get_fav_places').subscribe(function (result) {
              _this6.fav_places = result.data;
              var self = _this6;
              console.log('-------place------------', _this6.places_data);
              jquery__WEBPACK_IMPORTED_MODULE_5__.each(_this6.fav_places, function (key, val) {
                self.places_data.push(val.data);
              });
              console.log('----with favourite---------------', _this6.places_data);

              _this6.setMarkers(_this6.lats, _this6.lngs);
            });
          } //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.

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
          /******************************************************/

        }, {
          key: "displayGoogleMap",
          value: function displayGoogleMap() {
            var _this7 = this;

            //  const latLng = new google.maps.LatLng(28.6117993, 77.2194934);
            var latLng = new google.maps.LatLng(this.places_data[0].results_l.geometry.location.lat, this.places_data[0].results_l.geometry.location.lng);
            var mapOptions = {
              center: latLng,
              disableDefaultUI: true,
              zoom: 4,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            google.maps.event.addListenerOnce(this.map, 'idle', function () {
              _this7.getMarkers();

              _this7.mapElement.nativeElement.classList.add('show-map');
            });
          }
        }, {
          key: "getMarkers",
          value: function getMarkers() {
            // tslint:disable-next-line:variable-name
            for (var _i = 0; _i < this.places_data.length; _i++) {
              if (_i > 0) {
                this.addMarkersToMap(this.places_data[_i]);
              }
            }
          }
        }, {
          key: "addMarkersToMap",
          value: function addMarkersToMap(museum) {
            var position = new google.maps.LatLng(museum.results_l.geometry.location.lat, museum.results_l.geometry.location.lng);

            if (museum.image.length == 0) {
              var contentString = '<div id="content">' + '<h1 id="firstHeading" class="firstHeading">' + museum.place.name + '</h1> <div id="bodyContent"><p>' + museum.place.name + '</p><p>Link: ' + museum.place.name + ', <a href="' + museum.results_l.url + '" target="_blank">' + museum.results_l.url + '(' + museum.results_l.adr_address + ').</p></div></div>';
              var infoWindow = new google.maps.InfoWindow({
                content: contentString
              });
              var museumMarker = new google.maps.Marker({
                position: position,
                title: museum.place.name
              });
              museumMarker.addListener("click", function () {
                infoWindow.close();
                infoWindow.setContent(contentString);
                infoWindow.open(museumMarker.getMap(), museumMarker);
              });
              museumMarker.setMap(this.map);
            } else {
              var _contentString2 = '<div id="content">' + '<h1 id="firstHeading" class="firstHeading">' + museum.place.name + '</h1> <img src="' + museum.image + '"/> <div id="bodyContent"><p>' + museum.place.name + '</p><p>Link: ' + museum.place.name + ', <a href="' + museum.results_l.url + '" target="_blank">' + museum.results_l.url + '(' + museum.results_l.adr_address + ').</p></div></div>';

              var _infoWindow2 = new google.maps.InfoWindow({
                content: _contentString2
              });

              var _museumMarker = new google.maps.Marker({
                position: position,
                title: museum.place.name
              });

              _museumMarker.addListener("click", function () {
                _infoWindow2.close();

                _infoWindow2.setContent(_contentString2);

                _infoWindow2.open(_museumMarker.getMap(), _museumMarker);
              });

              _museumMarker.setMap(this.map);
            } //const infoWindow = new google.maps.InfoWindow();


            console.log('done');
          }
        }]);

        return PlacesMapPage;
      }();

      _PlacesMapPage.ctorParameters = function () {
        return [{
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
        }];
      };

      _PlacesMapPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
          args: ['map', {
            "static": false
          }]
        }]
      };
      _PlacesMapPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-places-map',
        template: _raw_loader_places_map_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_places_map_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PlacesMapPage);
      /***/
    },

    /***/
    36729: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-color:#fff;\n}\nion-header ion-back-button {\n  font-size: 13px;\n}\nion-header ion-title {\n  font-weight: 500;\n}\nion-header ion-buttons {\n  font-size: 20px;\n  margin-right: 10px;\n}\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n#map {\n  width: 100%;\n  height: 100px;\n}\n.map-wrapper {\n  position: relative;\n}\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\ninput#search_places {\n  color: black !important;\n}\nion-content #map {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n  display: block;\n}\nion-content #map.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlcy1tYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUUsYUFBQTtBQURKO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FBR0U7RUFDSSxlQUFBO0FBRE47QUFHRTtFQUNFLGdCQUFBO0FBREo7QUFHRTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtBQUZKO0FBTUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBSEY7QUFPQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKRjtBQU9BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFKRjtBQU9BO0VBQ0Usa0JBQUE7QUFKRjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQVFBO0VBQ0ksdUJBQUE7QUFMSjtBQVNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBTko7QUFPSTtFQUNFLFVBQUE7QUFMTiIsImZpbGUiOiJwbGFjZXMtbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICY6YWZ0ZXJcbiAge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuICBpb24tdG9vbGJhcntcbiAgICAtLWJvcmRlci1jb2xvcjojZmZmO1xuICB9XG4gIGlvbi1iYWNrLWJ1dHRvbntcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICBpb24tdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBpb24tYnV0dG9ucyBcbiAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH0gXG59XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbiBcbiBcbiNhZGRyZXNzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiBcbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbiBcbi5tYXAtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiBcbiAgI21hcF9jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgICBtYXJnaW4tdG9wOiAtNDFweDtcbiAgfVxufVxuXG5pbnB1dCNzZWFyY2hfcGxhY2VzIHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAjbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgJi5zaG93LW1hcHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59Il19 */";
      /***/
    },

    /***/
    77004: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n    <ion-back-button routerLink=\"/tabs/dashboard\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\"></ion-title>\n  <!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n  <ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n <ngxgeo-autocomplete [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"></ngxgeo-autocomplete>\n<ion-content> \n  <div class=\"map-wrapper\" style=\"height: 100%;\">      \n    <div #map id=\"map\"  style=\"height: 100%;\"></div>\n  </div>   \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_places-map_places-map_module_ts-es5.js.map
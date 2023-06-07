(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_search-trip_search-trip_module_ts"],{

/***/ 75794:
/*!***********************************************************!*\
  !*** ./src/app/search-trip/search-trip-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchTripPageRoutingModule": function() { return /* binding */ SearchTripPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _search_trip_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-trip.page */ 24768);




const routes = [
    {
        path: '',
        component: _search_trip_page__WEBPACK_IMPORTED_MODULE_0__.SearchTripPage
    }
];
let SearchTripPageRoutingModule = class SearchTripPageRoutingModule {
};
SearchTripPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchTripPageRoutingModule);



/***/ }),

/***/ 24059:
/*!***************************************************!*\
  !*** ./src/app/search-trip/search-trip.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchTripPageModule": function() { return /* binding */ SearchTripPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _search_trip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-trip-routing.module */ 75794);
/* harmony import */ var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-geoautocomplete */ 73070);
/* harmony import */ var _search_trip_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-trip.page */ 24768);








let SearchTripPageModule = class SearchTripPageModule {
};
SearchTripPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _search_trip_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchTripPageRoutingModule,
            ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_1__.NgxGeoautocompleteModule.forRoot()
        ],
        declarations: [_search_trip_page__WEBPACK_IMPORTED_MODULE_2__.SearchTripPage]
    })
], SearchTripPageModule);



/***/ }),

/***/ 24768:
/*!*************************************************!*\
  !*** ./src/app/search-trip/search-trip.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchTripPage": function() { return /* binding */ SearchTripPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_search_trip_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./search-trip.page.html */ 54105);
/* harmony import */ var _search_trip_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-trip.page.scss */ 18100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);









let SearchTripPage = class SearchTripPage {
    constructor(userService, router, alertController) {
        this.userService = userService;
        this.router = router;
        this.alertController = alertController;
        this.errors = ['', null, undefined];
        this.trips = [];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
        this.IMAGES_URL_All = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL_All;
        this.page = 1;
        this.count = 0;
        this.total_result = 0;
        this.userSettings = { showCurrentLocation: false };
        this.is_submit = false;
        this.text = true;
        this.slideOpts = {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 400,
            loop: true,
            autoplay: true,
            centeredSlides: true,
        };
        this.userSettings['inputPlaceholderText'] = 'search ';
        this.userSettings['showSearchButton'] = false;
        this.userSettings = Object.assign({}, this.userSettings);
    }
    ngOnInit() {
        // this.search()
    }
    onPageScroll(event) {
        console.log(event.target.scrollTop);
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.trips == this.total_result) {
                event.target.disabled = true;
            }
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    wait(time) {
        return;
        setTimeout(() => {
            this.onPageScroll(1);
        }, time);
    }
    //  appendItems(20);
    ngAfterViewInit() {
    }
    // ionViewDidEnter() {
    //   console.log("localStorage.getItem('search_by_trip') != '' && localStorage.getItem('search_by_trip') != null", localStorage.getItem('search_by_trip') != '' && localStorage.getItem('search_by_trip') != null);
    //   this.trips = [];
    //   this.total_result = 0;
    //   this.count = 0;
    //   this.id = localStorage.getItem('user_auth_id');
    //   localStorage.setItem('back_button_url', '/search-trip');
    //   if (localStorage.getItem('search_by_trip') != '' && localStorage.getItem('search_by_trip') != null) {
    //     var dict1 = JSON.parse(localStorage.getItem('search_by_trip'));
    //     this.lat = dict1.lat;
    //     this.lng = dict1.lng;
    //     this.country = dict1.country
    //     // console.log('map explore = ', dict1);
    //     console.log("11111", dict1.lat)
    //     console.log("11111", dict1.lng)
    //     this.searchtrip();
    //   } else {
    //     this.getprofiledata();
    //   }
    // }
    ionViewDidEnter() {
        this.trips = [];
        this.total_result = 0;
        this.count = 0;
        this.id = localStorage.getItem('user_auth_id');
        localStorage.setItem('back_button_url', '/search-trip');
        if (localStorage.getItem('search_by_location') != '' && localStorage.getItem('search_by_location') != null) {
            var dict1 = JSON.parse(localStorage.getItem('search_by_location'));
            this.lat = dict1.lat;
            this.lng = dict1.lng;
            this.name = dict1.name;
            // console.log('map explore = ', dict1);
            this.searchtrip();
        }
        else {
            this.getprofiledata();
        }
    }
    getprofiledata() {
        this.userService.postData({ _id: this.id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_user_profile_detail').subscribe((result) => {
            //  console.log({result});
            this.lat = Number(result.data.lat);
            this.lng = Number(result.data.lon);
            // console.log("lat-->",this.lat ,"lng-->",this.lng)
            this.userService.postData({ skip: this.page, _id: this.id, lat: this.lat, lng: this.lng }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/search_trip').subscribe((result) => {
                // localStorage.setItem('search_by_location','');
                // console.log("getprofile data()result-->", result)
                var thiss = this;
                this.trips = result.data;
                if (result.data2 != undefined && result.data2.length > 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__.each(result.data2, function (key, bl) {
                        console.log(bl.location);
                        console.log(bl.weather);
                        thiss.trips.push(bl);
                    });
                    this.total_result = result.count;
                    this.count += this.trips.length;
                    //  this.page = parseInt(result.pageno);     
                    //  alert(this.page);   
                }
            });
        });
    }
    searchtrip() {
        const data = {
            skip: this.page,
            _id: this.id,
            lat: this.lat,
            lng: this.lng
        };
        // console.log("data =========>", data);
        this.userService.postData({ skip: this.page, _id: this.id, lat: this.lat, lng: this.lng, search_by: this.name }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/search_trip').subscribe((result) => {
            // localStorage.setItem('search_by_location','');
            // console.log("searchtrip()-->", result)
            var thiss = this;
            this.trips = result.data;
            if (result.data2 != undefined && result.data2.length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_4__.each(result.data2, function (key, bl) {
                    console.log(bl.location);
                    console.log(bl.weather);
                    thiss.trips.push(bl);
                });
                this.total_result = result.count;
                this.count += this.trips.length;
                //  this.page = parseInt(result.pageno);     
                //  alert(this.page);   
            }
        });
    }
    loadmore() {
        this.page += 1;
        this.searchtrip();
    }
    // search() {
    //   console.log("btn ----> search")
    //   console.log("lat ---->", this.latitude)
    //   console.log("lng ---->", this.longitude)
    //   console.log("id ---->", this.id)
    //   console.log("search_by ---->", this.country)
    //   this.userService.postData({ skip: this.page, lat: this.latitude, lng: this.longitude, _id: this.id, search_by: this.country }, config.API_URL + '/search_trip').subscribe((result) => {
    //     console.log("22--->", result);
    //     this.trips = result.data;
    //   });
    // }
    search() {
        // console.log("lat lng--->",this.lat,this.lng)
        this.userService.postData({ skip: this.page, lat: this.lat, lng: this.lng, _id: this.id, search_by: this.search_by }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/search_trip').subscribe((result) => {
            //  console.log("search ()--->",result);
            this.trips = result.data;
        });
    }
    gotomap() {
        localStorage.setItem('redirect_page', '/search-trip');
        this.router.navigate(['/add-step-map2']);
    }
    autoCompleteCallback(data) {
        let placeAddresCompoponent = {
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
        this.latitude = data.data.geometry.location.lat;
        this.longitude = data.data.geometry.location.lng;
        this.location = data.data.formatted_address;
        console.log("location--->", this.location);
        this.place_id = data.data.place_id;
        this.reference = data.data.reference;
        this.name = data.data.name;
        this.map_url = data.data.url;
    }
    save() {
        this.is_submit = true;
        if (this.errors.indexOf(this.location) >= 0) {
            return;
        }
        else {
            let locate = {
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
            this.title = this.name;
            console.log('locations = ', locate);
            localStorage.setItem('search_by_trip', JSON.stringify(locate));
        }
        /*location:this.location,lat:this.lat,lon:this.lng,state:this.state,country:this.country});*/
    }
    getAddressComponent(address_components, key) {
        var value = '';
        var postalCodeType = address_components.filter(aComp => aComp.types.some(typesItem => typesItem === key));
        if (postalCodeType != null && postalCodeType.length > 0)
            value = postalCodeType[0].long_name;
        return value;
    }
};
SearchTripPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
SearchTripPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInfiniteScroll,] }]
};
SearchTripPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-search-trip',
        template: _raw_loader_search_trip_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_search_trip_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchTripPage);



/***/ }),

/***/ 18100:
/*!***************************************************!*\
  !*** ./src/app/search-trip/search-trip.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-color:#fff;\n}\nion-header ion-back-button {\n  font-size: 13px;\n}\nion-header ion-title {\n  font-weight: 500;\n}\nion-header ion-buttons {\n  font-size: 20px;\n  margin-right: 10px;\n}\nion-content {\n  background: #f9f9f9;\n  --background: #f9f9f9;\n}\n.top-search {\n  padding: 15px 18px 20px;\n  position: relative;\n  margin-bottom: 25px;\n  background: var(--ion-color-gradient1);\n}\n.top-search .src-trs {\n  display: flex;\n  background: #fff;\n  border-radius: 50px;\n  padding: 3px 18px;\n  margin-bottom: -40px;\n  z-index: 111;\n  position: relative;\n  border: 1px solid #efefef;\n  /*box-shadow: 0px 0px 12px rgba(0 0 0 / 6%);*/\n  box-shadow: rgba 0, 0, 0, 1.4;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 50px;\n}\n.top-search .src-trs span.icon-drt {\n  padding-right: 9px;\n  font-size: 22px;\n  color: #4267B2;\n  border-right: 1px solid #4267B2;\n  margin-right: 9px;\n  position: relative;\n  top: -2px;\n  display: flex;\n  align-items: center;\n}\n.top-search .src-trs ion-input {\n  font-size: 15px;\n}\n.top-search .src-trs span.icon-sc-f {\n  width: 40px;\n  height: 40px;\n  background: var(--ion-color-gradient1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  margin-right: -14px;\n  margin-top: -1px;\n  font-size: 18px;\n}\n.flts-alu {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.flts-alu ion-select {\n  font-size: 14px;\n  --placeholder-color: #4267B2;\n  --placeholder-opacity: 1;\n  color: #4267B2;\n  margin-bottom: 10px;\n  --padding-top: 0px;\n  margin-right: -5px;\n}\n.box-servc {\n  position: relative;\n  background: #fff;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n  margin-bottom: 18px;\n  padding-left: 105px;\n  min-height: 120px;\n  display: flex;\n  align-items: center;\n}\n.box-servc .img-b {\n  position: absolute;\n  left: 0;\n  width: 110px;\n  height: 100%;\n}\n.box-servc .img-b img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.box-servc .img-b:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.1);\n  z-index: 0;\n}\n.box-servc .img-b span.badg-catr {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 10px;\n  background: linear-gradient(to top left, #6fcdff, #70b0ff);\n  padding: 5px 12px 5px 12px;\n  color: #fff;\n  text-transform: capitalize;\n  text-decoration: none;\n  border-radius: 50px;\n  font-weight: 500;\n  z-index: 11;\n  letter-spacing: 0.5px;\n}\n.box-servc .cot-a {\n  text-align: left;\n  position: relative;\n  padding: 14px;\n  height: 100%;\n  width: 100%;\n}\n.box-servc .cot-a h4 {\n  margin: 0px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #3a3a3a;\n  margin-bottom: 7px;\n}\n.box-servc .cot-a ul.rating-all {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: block;\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n.box-servc .cot-a ul.rating-all li {\n  display: inline-block;\n  font-size: 13px;\n  margin-right: 2px;\n  color: #c3c3c3;\n}\n.box-servc .cot-a ul.rating-all li.active {\n  color: #f8c50a;\n}\n.box-servc .cot-a ul.rating-all li.totl-rv {\n  color: #000000;\n  font-weight: 600;\n  position: relative;\n  margin-right: 0px;\n  margin-left: 3px;\n  top: -1px;\n  font-size: 12px;\n}\n.box-servc .cot-a p {\n  margin: 0px;\n  font-size: 13px;\n  margin-top: 0px;\n}\n.box-servc .cot-a p ion-icon {\n  font-size: 16px;\n  position: relative;\n  top: 3px;\n}\n.book-now {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  font-size: 12px;\n  background: var(--ion-color-gradient1);\n  padding: 6px 10px 6px 17px;\n  color: #fff;\n  text-transform: capitalize;\n  text-decoration: none;\n  border-radius: 50px 0 0 50px;\n  font-weight: 600;\n  box-shadow: 0 3px 15px rgba(112, 177, 255, 0.15);\n}\nspan.badg-catr {\n  display: inline-block;\n  font-size: 9px;\n  background: #e9f0ff;\n  padding: 4px 12px 4px;\n  color: #4267B2;\n  border-radius: 50px;\n  margin-top: 12px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  border: 1px solid #cddcfb;\n}\nspan.favor-icn {\n  width: 30px;\n  height: 30px;\n  background: rgba(0, 0, 0, 0.3);\n  position: absolute;\n  left: 8px;\n  z-index: 1;\n  border-radius: 50%;\n  line-height: 33px;\n  text-align: center;\n  color: #fff;\n  font-size: 15px;\n  top: 8px;\n}\n[places-sec] {\n  padding: 18px;\n}\n[mn-places-head] {\n  margin: 0px 0px 20px;\n  font-size: 17px;\n  padding-left: 10px;\n  position: relative;\n  z-index: 1;\n  color: #000;\n}\n[mn-places-head]:before {\n  position: absolute;\n  content: \"\";\n  left: 0px;\n  top: -2px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: var(--ion-color-primary);\n  opacity: 0.15;\n}\n[slider-sec] {\n  padding: 20px 0px 0px;\n}\n[slider-sec] [mn-places-head] {\n  margin: 0px 0px 17px;\n  font-size: 17px;\n  padding-left: 10px;\n  position: relative;\n  z-index: 1;\n  color: #000;\n}\n[slider-sec] [mn-places-head]:before {\n  position: absolute;\n  content: \"\";\n  left: 0px;\n  top: -3px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: var(--ion-color-primary);\n  opacity: 0.15;\n}\n[slider-sec] [slides-img] {\n  margin-bottom: 20px;\n  width: 100%;\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n}\n[slider-sec] [slides-img] [mn-cont] {\n  position: absolute;\n  top: 10px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 10px;\n}\n[slider-sec] [slides-img] [mn-cont] h4 {\n  font-size: 13px;\n  color: #fff;\n  font-weight: 700;\n  margin: 0px;\n}\n[slider-sec] [slides-img] [mn-cont] span {\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 5px 10px;\n  border-radius: 40px;\n}\n[slider-sec] [slides-img] [places-date-sec] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  background: linear-gradient(0deg, #000, transparent);\n  padding: 6px 0px;\n}\n[slider-sec] [slides-img] [places-date-sec] [place-content] {\n  text-align: center;\n}\n[slider-sec] [slides-img] [places-date-sec] [place-content] h5 {\n  margin: 0px;\n  font-size: 13px;\n  color: #fff;\n}\n[slider-sec] [slides-img] [places-date-sec] [place-content] h5 span {\n  font-size: 10px;\n  display: block;\n  font-weight: 300;\n  /* text-transform: uppercase; */\n  margin-top: 6px;\n  letter-spacing: 1px;\n}\n[slider-sec] [slides-img] img {\n  width: 100%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);\n}\nh4.title-trip {\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 5px 10px;\n  border-radius: 40px;\n}\n.demo {\n  margin-left: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC10cmlwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUVDLGFBQUE7QUFERjtBQUdDO0VBQ0MsbUJBQUE7QUFERjtBQUdDO0VBQ0ksZUFBQTtBQURMO0FBR0M7RUFDQyxnQkFBQTtBQURGO0FBR0M7RUFFQyxlQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUtBO0VBQ0ssbUJBQUE7RUFDRCxxQkFBQTtBQUZKO0FBSUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQURKO0FBRUM7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUNFO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSDtBQUNFO0VBQ0MsZUFBQTtBQUNIO0FBQ0U7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNIO0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFKO0FBQ0M7RUFDQyxlQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFB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QUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFQO0FBR0s7RUFFQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUdNO0VBRUssa0JBQUE7QUFGWDtBQUdPO0VBRUMsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRlI7QUFHUTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURUO0FBTUs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBTE47QUFZQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVRKO0FBWUE7RUFDQyxrQkFBQTtBQVREIiwiZmlsZSI6InNlYXJjaC10cmlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG5cdCY6YWZ0ZXJcblx0e1xuXHRcdGRpc3BsYXk6bm9uZTtcblx0fVxuXHRpb24tdG9vbGJhcntcblx0XHQtLWJvcmRlci1jb2xvcjojZmZmO1xuXHR9XG5cdGlvbi1iYWNrLWJ1dHRvbntcblx0ICAgIGZvbnQtc2l6ZTogMTNweDtcblx0fVxuXHRpb24tdGl0bGV7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxuXHRpb24tYnV0dG9ucyBcblx0e1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdH1cdFxufVxuaW9uLWNvbnRlbnQge1xuXHQgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICAtLWJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG4udG9wLXNlYXJjaCB7XG4gICAgcGFkZGluZzogMTVweCAxOHB4IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdC5zcmMtdHJzIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRwYWRkaW5nOiAzcHggMThweDtcblx0XHRtYXJnaW4tYm90dG9tOiAtNDBweDtcblx0XHR6LWluZGV4OiAxMTE7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG5cdFx0Lypib3gtc2hhZG93OiAwcHggMHB4IDEycHggcmdiYSgwIDAgMCAvIDYlKTsqL1xuXHRcdGJveC1zaGFkb3c6IHJnYmEgKDAsMCwwLDEuNCk7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWluLWhlaWdodDogNTBweDtcblx0XHRzcGFuLmljb24tZHJ0IHtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDlweDtcblx0XHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRcdGNvbG9yOiAjNDI2N0IyO1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQyNjdCMjtcblx0XHRcdG1hcmdpbi1yaWdodDogOXB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0dG9wOiAtMnB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0fVxuXHRcdGlvbi1pbnB1dCB7XG5cdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0fVxuXHRcdHNwYW4uaWNvbi1zYy1mIHtcblx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IC0xNHB4O1xuXHRcdFx0bWFyZ2luLXRvcDogLTFweDtcblx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHR9XG5cdH1cbn1cbi5mbHRzLWFsdSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0aW9uLXNlbGVjdCB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdC0tcGxhY2Vob2xkZXItY29sb3I6ICM0MjY3QjI7XG5cdFx0LS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuXHRcdGNvbG9yOiAjNDI2N0IyO1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0LS1wYWRkaW5nLXRvcDogMHB4O1xuXHRcdG1hcmdpbi1yaWdodDogLTVweDtcblx0fVxufVxuLmJveC1zZXJ2YyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0bWFyZ2luLWJvdHRvbTogMThweDtcblx0cGFkZGluZy1sZWZ0OiAxMDVweDtcblx0bWluLWhlaWdodDogMTIwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC5pbWctYiB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0d2lkdGg6IDExMHB4O1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGltZyB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdH1cblx0XHQmOmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdFx0XHR6LWluZGV4OiAwO1xuXHRcdH1cblx0XHRzcGFuLmJhZGctY2F0ciB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRyaWdodDogMTBweDtcblx0XHRcdHRvcDogMTBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgIzZmY2RmZiwgIzcwYjBmZik7XG5cdFx0XHRwYWRkaW5nOiA1cHggMTJweCA1cHggMTJweDtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdHotaW5kZXg6IDExO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdH1cblx0fVxuXHQuY290LWEge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDE0cHg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGg0ICB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRjb2xvcjogIzNhM2EzYTtcblx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcblx0XHR9XG5cdFx0dWwucmF0aW5nLWFsbCB7XG5cdFx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG1hcmdpbi10b3A6IDNweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0XHRcdGxpIHtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMnB4O1xuXHRcdFx0XHRjb2xvcjogI2MzYzNjMztcblx0XHRcdH1cblx0XHRcdGxpLmFjdGl2ZSB7XG5cdFx0XHRcdGNvbG9yOiAjZjhjNTBhO1xuXHRcdFx0fVxuXHRcdFx0bGkudG90bC1ydiB7XG5cdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogM3B4O1xuXHRcdFx0XHR0b3A6IC0xcHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cCB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdG1hcmdpbi10b3A6IDBweDtcblx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHRvcDogM3B4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuLmJvb2stbm93IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG4gICAgcGFkZGluZzogNnB4IDEwcHggNnB4IDE3cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblx0Ym94LXNoYWRvdzogMCAzcHggMTVweCByZ2JhKDExMiwgMTc3LCAyNTUsIDAuMTUpO1xufVxuc3Bhbi5iYWRnLWNhdHIge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgYmFja2dyb3VuZDogI2U5ZjBmZjtcbiAgICBwYWRkaW5nOiA0cHggMTJweCA0cHg7XG4gICAgY29sb3I6ICM0MjY3QjI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGRjZmI7XG59XG5zcGFuLmZhdm9yLWljbiB7XG5cdHdpZHRoOiAzMHB4O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA4cHg7XG5cdHotaW5kZXg6IDE7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0bGluZS1oZWlnaHQ6IDMzcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0dG9wOiA4cHg7XG59XG5bcGxhY2VzLXNlY10ge1xuXHQgICAgcGFkZGluZzogMThweDtcbn1cblttbi1wbGFjZXMtaGVhZF0gXG5cdHtcblx0bWFyZ2luOiAwcHggMHB4IDIwcHg7XG5cdGZvbnQtc2l6ZTogMTdweDtcblx0cGFkZGluZy1sZWZ0OjEwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTtcblx0Y29sb3I6ICMwMDA7XG5cdCY6YmVmb3JlIFxuXHR7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0bGVmdDogMHB4O1xuXHRcdHRvcDogLTJweDtcblx0XHR3aWR0aDogMjVweDtcblx0XHRoZWlnaHQ6IDI1cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdG9wYWNpdHk6MC4xNTtcblx0fVx0XG59XG5cbltzbGlkZXItc2VjXVxuXHR7XG5cdCAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHg7XG5cdFx0W21uLXBsYWNlcy1oZWFkXSBcblx0XHR7XG5cdFx0XHRtYXJnaW46IDBweCAwcHggMTdweDtcblx0XHRcdGZvbnQtc2l6ZTogMTdweDtcblx0XHRcdHBhZGRpbmctbGVmdDoxMHB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDogMTtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0JjpiZWZvcmUgXG5cdFx0XHR7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0bGVmdDogMHB4O1xuXHRcdFx0XHR0b3A6IC0zcHg7XG5cdFx0XHRcdHdpZHRoOiAyNXB4O1xuXHRcdFx0XHRoZWlnaHQ6IDI1cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0XHRcdG9wYWNpdHk6MC4xNTtcblx0XHRcdH1cdFxuXHRcdH1cdFxuXHRcdFtzbGlkZXMtaW1nXSBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7ICBcblx0XHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMnB4O1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFttbi1jb250XSBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwcHg7XG5cdFx0XHRcdFx0XHRyaWdodDogMHB4O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHggMTBweDtcblx0XHRcdFx0XHRcdGg0IFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNwYW4gXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgwICwgMCAsIDAgLCAwLjUpO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA1cHggMTBweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNDBweDtcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0W3BsYWNlcy1kYXRlLXNlY10gXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0Ym90dG9tOiAwcHg7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwcHg7XG5cdFx0XHRcdFx0XHRyaWdodDogMHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAsIHRyYW5zcGFyZW50KTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDZweCAwcHg7XG5cdFx0XHRcdFx0XHRbcGxhY2UtY29udGVudF0gXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGg1IFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRcdHNwYW57XG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0XHRcdFx0XHQvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogNnB4O1xuXHRcdFx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGltZyBcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTgwcHg7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcblx0XHRcdFx0XHR9XHRcdFx0XG5cdFx0XHRcdH1cdCAgICAgICAgICBcdFx0XHRcbiAgICB9XG5cblxuICBcbmg0LnRpdGxlLXRyaXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbn0gIFxuXG4uZGVtb3tcblx0bWFyZ2luLWxlZnQ6IC01MHB4O1xufVxuIl19 */");

/***/ }),

/***/ 54105:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-trip/search-trip.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n    <ion-back-button routerLink=\"/add-step-map2\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\"></ion-title>\n  <!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n  <ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onPageScroll($event)\">\n  <div class=\"top-search\">\n    <div class=\"src-trs\">\n      <span class=\"icon-drt\" (click)=\"gotomap();\"> <ion-icon name=\"globe-outline\"></ion-icon> </span>\n\n      <!-- <ion-item class=\"demo\" > \n        <ngxgeo-autocomplete [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"> </ngxgeo-autocomplete>\n      </ion-item> -->\n      <ion-input placeholder=\"Search here...\"   [(ngModel)]=\"search_by\" ></ion-input>\n      <!-- <span class=\"icon-sc-f\"> <ion-icon name=\"funnel-outline\"></ion-icon> </span> -->\n      <span class=\"icon-sc-f\" (click)=\"search()\"> <ion-icon name=\"search\"></ion-icon> </span>\n    </div>\n  </div>\n  <div places-sec  *ngIf=\"trips.length == 0\" >\n    <div class=\"flts-alu\">\n      <span>No result found, Try another location.</span>\n    </div>\n  </div>\n\n  <div places-sec  *ngIf=\"trips.length > 0\" >\n    <div class=\"flts-alu\">  \n      <h2 mn-places-head>\n        All profiles Trip\n      </h2>\n     <!--  <ion-select interface=\"popover\" placeholder=\"Sort By\">\n        <ion-select-option value=\"nes\">Closest to you</ion-select-option>\n        <ion-select-option value=\"n64\">Alphabetically</ion-select-option>\n        <ion-select-option value=\"ps\">By star Rating</ion-select-option>\n      </ion-select> -->\n    </div>  \n    <ng-container id=\"list\">\n    <div slider-sec>\n      <div slides-img *ngFor=\"let trip of trips\" routerLink=\"/trip-details/{{trip.datas._id}}\">\n        <img src=\"{{trip.datas.images[0]}}\" />\n        <!--ion-button  delete-button><ion-icon name=\"trash-outline\"></ion-icon></ion-button-->\n        <div mn-cont>\n           <h4 class=\"title-trip\">{{trip.datas.trip_name}}</h4> <span now-trvel>{{trip.distance}}</span>\n        </div>\n        <div places-date-sec>\n          <ion-row>\n            <ion-col size=\"4\">\n              <div place-content>\n                <h5>{{trip.datas.start_date |  date: 'dd/MM/yyyy'}} <span>Date </span></h5>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div place-content>\n                <h5>{{trip.datas.starting_point}}  <span>Starting Point </span></h5>\n              </div>                \n            </ion-col>\n            <ion-col size=\"4\">\n              <div place-content>\n               <!--  <h5>04  <span>Comments </span></h5> -->\n              </div>                \n            </ion-col>\n          </ion-row>\n        </div>\n      </div>     \n    </div>  \n   </ng-container>\n    <ion-infinite-scroll threshold=\"100px\" id=\"infinite-scroll\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loading-spinner=\"bubbles\" loading-text=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_search-trip_search-trip_module_ts-es2015.js.map
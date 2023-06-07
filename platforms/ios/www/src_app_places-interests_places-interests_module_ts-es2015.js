(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_places-interests_places-interests_module_ts"],{

/***/ 9554:
/*!*********************************************************************!*\
  !*** ./src/app/places-interests/places-interests-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesInterestsPageRoutingModule": function() { return /* binding */ PlacesInterestsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _places_interests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places-interests.page */ 7443);




const routes = [
    {
        path: '',
        component: _places_interests_page__WEBPACK_IMPORTED_MODULE_0__.PlacesInterestsPage
    }
];
let PlacesInterestsPageRoutingModule = class PlacesInterestsPageRoutingModule {
};
PlacesInterestsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlacesInterestsPageRoutingModule);



/***/ }),

/***/ 36875:
/*!*************************************************************!*\
  !*** ./src/app/places-interests/places-interests.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesInterestsPageModule": function() { return /* binding */ PlacesInterestsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _places_interests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places-interests-routing.module */ 9554);
/* harmony import */ var _places_interests_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places-interests.page */ 7443);
/* harmony import */ var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-geoautocomplete */ 73070);








let PlacesInterestsPageModule = class PlacesInterestsPageModule {
};
PlacesInterestsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _places_interests_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlacesInterestsPageRoutingModule,
            ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()
        ],
        declarations: [_places_interests_page__WEBPACK_IMPORTED_MODULE_1__.PlacesInterestsPage]
    })
], PlacesInterestsPageModule);



/***/ }),

/***/ 7443:
/*!***********************************************************!*\
  !*** ./src/app/places-interests/places-interests.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesInterestsPage": function() { return /* binding */ PlacesInterestsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_places_interests_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./places-interests.page.html */ 89491);
/* harmony import */ var _places_interests_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places-interests.page.scss */ 88825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);








let PlacesInterestsPage = class PlacesInterestsPage {
    constructor(userService, sanitizer, router) {
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.userSettings = { showCurrentLocation: false };
        this.is_submit = false;
        this.errors = ['', null, undefined];
        this.places_data = [];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
        this.IMAGES_URL_All = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL_All;
        this.userSettings['inputPlaceholderText'] = 'Location';
        this.userSettings['showRecentSearch'] = false;
        this.userSettings = Object.assign({}, this.userSettings);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getpopluar_places();
    }
    autoCompleteCallback(data) {
        console.log("autocomplete ---->", data);
        let placeAddresCompoponent = {
            ZIP_CODE: 'postal_code',
            COUNTRY: 'country',
            STATE: 'administrative_area_level_1',
            CITY: 'administrative_area_level_2',
            TOWN: 'sublocality_level_1',
            AREA: 'sublocality_level_2',
            NEAREST_ROAD: 'route'
        };
        console.log('search data---->', data);
        this.state = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.STATE);
        this.country = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.COUNTRY);
        this.city = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.CITY);
        this.town = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.TOWN);
        this.area = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.AREA);
        this.zip_code = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.ZIP_CODE);
        console.log("proper address----->", data.data.formatted_address);
        console.log("proper logitude----->", data.data.geometry.location.lng);
        console.log("CITY ----->", this.city);
        this.lat = data.data.geometry.location.lat;
        this.lng = data.data.geometry.location.lng;
        this.location = data.data.formatted_address;
        this.place_id = data.data.place_id;
        this.reference = data.data.reference;
        this.name = data.data.name;
        this.map_url = data.data.url;
        this.save();
        console.log("----> this.lng ", this.lng);
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
            console.log('locate ====> ', locate);
            localStorage.setItem('location_storage', JSON.stringify(locate));
            this.router.navigate(['/new-trip']);
        }
        /*location:this.location,lat:this.lat,lon:this.lng,state:this.state,country:this.country});*/
    }
    getpopluar_places() {
        this.userService.presentLoading();
        this.userService.postData({}, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_popular_destinations').subscribe((result) => {
            this.userService.stopLoading();
            console.log("popular places===>", result);
            if (result.status == 1) {
                this.places_data = result.data;
            }
            else {
                this.userService.presentToast('No data found try another location', 'danger');
            }
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
        });
    }
    getAddressComponent(address_components, key) {
        var value = '';
        var postalCodeType = address_components.filter(aComp => aComp.types.some(typesItem => typesItem === key));
        if (postalCodeType != null && postalCodeType.length > 0)
            value = postalCodeType[0].long_name;
        console.log("GET ADRESS COMPONENT ==--=-==>", value);
        return value;
    }
    selectplace(places) {
        console.log(places);
        let locate = {
            state: places.location.state,
            country: places.location.country,
            city: places.location.city,
            town: places.location.town,
            area: places.location.area,
            zip_code: places.location.zip_code,
            lat: places.lat,
            lng: places.lon,
            location: places.location.location,
            place_id: places.location.place_id,
            reference: places.location.reference,
            name: places.location.name,
            map_url: places.location.map_url
        };
        console.log('locations = ', locate);
        localStorage.setItem('location_storage', JSON.stringify(locate));
        this.router.navigate(['/new-trip']);
    }
};
PlacesInterestsPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
PlacesInterestsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-places-interests',
        template: _raw_loader_places_interests_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_places_interests_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlacesInterestsPage);



/***/ }),

/***/ 88825:
/*!*************************************************************!*\
  !*** ./src/app/places-interests/places-interests.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  /*background: var(--ion-color-gradient1);*/\n}\nion-header ion-toolbar {\n  --border-color: transparent;\n  pointer-events: all !important;\n}\nion-header ion-back-button {\n  left: 15px;\n  top: 7px;\n  font-size: 13px;\n  pointer-events: all !important;\n}\nion-header ion-title {\n  font-weight: 500;\n}\n[search] {\n  padding: 10px 15px 5px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  /*background: var(--ion-color-gradient1);*/\n}\n[search] ion-searchbar {\n  background: #fff;\n  --background: #fff;\n  padding-left: 10px;\n  --box-shadow: none;\n  --font-size: 12px;\n  padding-right: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  height: 46px;\n  margin: 0 0 2px;\n  border: 1px solid #eee;\n  border-radius: 10px;\n}\n[search] ion-searchbar input {\n  background: #fff;\n}\n[map] {\n  position: fixed;\n  z-index: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n[map] img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[map]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: -webkit-linear-gradient(bottom, rgba(255, 0, 0, 0), rgba(0, 0, 0, 0.1));\n  height: 100px;\n}\na.back-btn {\n  background: #fff;\n  min-width: 30px;\n  min-height: 30px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n  position: absolute;\n  z-index: 11;\n  left: 20px;\n}\na.back-btn ion-icon {\n  color: #666;\n  margin-right: 2px;\n  font-size: 22px;\n}\n[botmBar] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: flex-end;\n  padding: 15px;\n}\n[botmBar] span a {\n  color: #999;\n  font-size: 20px;\n}\n[botmBar] span[ritBtns] {\n  margin-left: auto;\n}\n[botmBar] span[ritBtns] a {\n  width: 55px;\n  height: 55px;\n  border-radius: 50px;\n  box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 15px;\n}\n[botmBar] span[ritBtns] a ion-icon {\n  color: #666;\n  font-size: 22px;\n}\n[botmBar] span[ritBtns] a[locate] {\n  background: var(--ion-color-gradient1);\n}\n[botmBar] span[ritBtns] a[locate] ion-icon {\n  color: #fff;\n}\n[polularDestination] {\n  border-top: 1px solid #f1f1f1;\n  padding: 15px;\n  margin: 20px 0 0;\n}\n[polularDestination] [notfound] {\n  text-align: center;\n  margin: 0 0 25px;\n}\n[polularDestination] [notfound] p {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  color: #999;\n  background: #fcfcfc;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  padding: 10px 0;\n}\n[polularDestination] h5 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 20px 0 5px;\n  color: #666;\n}\n[polularDestination] ul {\n  list-style: none;\n  padding: 0px 0;\n  margin: 0;\n}\n[polularDestination] ul li {\n  padding: 8px 0;\n}\n[polularDestination] ul li a {\n  display: flex;\n  color: #333;\n  align-items: center;\n  text-decoration: none;\n}\n[polularDestination] ul li a span {\n  min-width: 45px;\n  max-width: 45px;\n  min-height: 45px;\n  max-height: 45px;\n  border-radius: 50px;\n  margin: 0 15px 0 0;\n}\n[polularDestination] ul li a span img {\n  width: 100%;\n  height: 45px;\n  border-radius: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[polularDestination] ul li a h3 {\n  font-size: 15px;\n  margin: 0;\n  font-weight: 500;\n  border-bottom: 1px solid #eee;\n  width: 100%;\n  padding-bottom: 10px;\n}\n[polularDestination] ul li a h3 small {\n  font-weight: 400;\n  font-size: 12px;\n  display: block;\n}\n[search] {\n  padding: 10px 15px 5px 15px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n[search] .demo {\n  width: 100%;\n}\n[search] .demo #search_places {\n  width: 100%;\n  background: #fff;\n  --background: #fff;\n  padding-left: 10px;\n  --box-shadow: none;\n  --font-size: 12px;\n  padding-right: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  height: 46px;\n  margin: 0 0 2px;\n  border: 1px solid #eee;\n  border-radius: 10px;\n}\n[search] .demo #search_places input {\n  background: #fff;\n  border: 2px solid red;\n}\n.button-included {\n  padding-right: 121px;\n  border: 2px solid red;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlcy1pbnRlcmVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7QUFDRjtBQUFDO0VBQ0MsMkJBQUE7RUFDRCw4QkFBQTtBQUVEO0FBQ0M7RUFFSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUFMO0FBRUM7RUFDQyxnQkFBQTtBQUFGO0FBR0E7RUFDQywyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0FBQUQ7QUFDQztFQUNDLGdCQUFBO0VBQ0csa0JBQUE7RUFDQSxrQkFBQTtFQUNILGtCQUFBO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0w7QUFBRTtFQUNDLGdCQUFBO0FBRUg7QUFFQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBQ0Q7QUFBQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUVGO0FBQUM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxtRkFBQTtFQUNBLGFBQUE7QUFFRjtBQUNBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRUQ7QUFEQztFQUNDLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFHRjtBQUFBO0VBQ0MsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBR0Q7QUFERTtFQUNDLFdBQUE7RUFDQSxlQUFBO0FBR0g7QUFERTtFQUNDLGlCQUFBO0FBR0g7QUFGRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUlKO0FBSEk7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQUtMO0FBSEk7RUFDQyxzQ0FBQTtBQUtMO0FBSks7RUFDQyxXQUFBO0FBTU47QUFDQTtFQUNDLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRUQ7QUFEQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHRjtBQUZFO0VBQ0MsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUg7QUFEQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUdGO0FBREM7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBR0Y7QUFGRTtFQUNDLGNBQUE7QUFJSDtBQUhHO0VBQ0MsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBS0o7QUFKSTtFQUNDLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFNTDtBQUxLO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFPTjtBQUpJO0VBQ0MsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBTUw7QUFMSztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFPTjtBQUNBO0VBQ0MsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFRDtBQUFDO0VBQ0csV0FBQTtBQUVKO0FBREM7RUFDRyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0gsa0JBQUE7RUFDRyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFHTDtBQUZFO0VBRUMsZ0JBQUE7RUFDQSxxQkFBQTtBQUdIO0FBV0c7RUFDRCxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVJGIiwiZmlsZSI6InBsYWNlcy1pbnRlcmVzdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcblx0XHQvKmJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpOyovXG5cdGlvbi10b29sYmFye1xuXHRcdC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0cG9pbnRlci1ldmVudHM6YWxsIWltcG9ydGFudDtcbiAgXG5cdH1cblx0aW9uLWJhY2stYnV0dG9ue1xuXHRcdFxuXHQgICAgbGVmdDogMTVweDtcblx0ICAgIHRvcDogN3B4O1xuXHQgICAgZm9udC1zaXplOiAxM3B4O1xuXHQgICAgcG9pbnRlci1ldmVudHM6YWxsIWltcG9ydGFudDtcblx0fVxuXHRpb24tdGl0bGV7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0fVxufVxuW3NlYXJjaF17XG5cdHBhZGRpbmc6MTBweCAxNXB4IDVweCAxNXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDE7XG5cdC8qYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7Ki9cblx0aW9uLXNlYXJjaGJhcntcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHQgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuXHQgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdC0tYm94LXNoYWRvdzogbm9uZTtcblx0ICAgIC0tZm9udC1zaXplOiAxMnB4O1xuXHQgICAgcGFkZGluZy1yaWdodDogMjBweDtcblx0ICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsIC4wNSk7XG5cdCAgICBoZWlnaHQ6IDQ2cHg7XG5cdCAgICBtYXJnaW46IDAgMCAycHg7XG5cdCAgICBib3JkZXI6MXB4IHNvbGlkICNlZWU7XG5cdCAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdGlucHV0e1xuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xuXHRcdH0gXG5cdH1cbn1cblttYXBde1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6MDtcblx0Ym90dG9tOiAwO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRpbWd7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHR9XG5cdCY6YWZ0ZXJ7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR0b3A6IDA7XG5cdFx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCByZ2JhKDI1NSwwLDAsMCksIHJnYmEoMCwwLDAsLjEpKTtcblx0XHRoZWlnaHQ6IDEwMHB4O1xuXHR9XG59XG5hLmJhY2stYnRue1xuXHRiYWNrZ3JvdW5kOiNmZmY7XG5cdG1pbi13aWR0aDogMzBweDtcblx0bWluLWhlaWdodDogMzBweDtcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbi1yaWdodDoxMHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDExO1xuXHRsZWZ0OjIwcHg7XG5cdGlvbi1pY29ue1xuXHRcdGNvbG9yOiAjNjY2O1xuXHRcdG1hcmdpbi1yaWdodDogMnB4O1xuXHRcdGZvbnQtc2l6ZTogMjJweDtcblx0fVxufVxuW2JvdG1CYXJde1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdHotaW5kZXg6IDE7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0cGFkZGluZzoxNXB4O1xuXHRzcGFue1xuXHRcdGF7XG5cdFx0XHRjb2xvcjogIzk5OTtcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHR9XG5cdFx0JltyaXRCdG5zXXtcblx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0YXtcblx0XHRcdFx0d2lkdGg6IDU1cHg7XG5cdFx0XHRcdGhlaWdodDogNTVweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0Ym94LXNoYWRvdzogMnB4IDNweCA3cHggcmdiYSgwLDAsMCwgLjEpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLXRvcDoxNXB4O1xuXHRcdFx0XHRpb24taWNvbntcblx0XHRcdFx0XHRjb2xvcjogIzY2Njtcblx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Jltsb2NhdGVde1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpO1xuXHRcdFx0XHRcdGlvbi1pY29ue1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5bcG9sdWxhckRlc3RpbmF0aW9uXXtcblx0Ym9yZGVyLXRvcDoxcHggc29saWQgI2YxZjFmMTtcblx0cGFkZGluZzoxNXB4O1xuXHRtYXJnaW46MjBweCAwIDAgO1xuXHRbbm90Zm91bmRde1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRtYXJnaW46MCAwIDI1cHg7XG5cdFx0cHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6ICM5OTk7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjZWVlO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0cGFkZGluZzoxMHB4IDA7IFxuXHRcdH1cblx0fVxuXHRoNXtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRtYXJnaW46MjBweCAwIDVweDtcblx0XHRjb2xvcjogIzY2Njtcblx0fSBcblx0dWx7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRwYWRkaW5nOiAwcHggMDtcblx0XHRtYXJnaW46MDtcblx0XHRsaXtcblx0XHRcdHBhZGRpbmc6IDhweCAwO1xuXHRcdFx0YXtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0Y29sb3I6ICMzMzM7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0c3Bhbntcblx0XHRcdFx0XHRtaW4td2lkdGg6IDQ1cHg7XG5cdFx0XHRcdFx0bWF4LXdpZHRoOiA0NXB4O1xuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDQ1cHg7XG5cdFx0XHRcdFx0bWF4LWhlaWdodDogNDVweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRcdG1hcmdpbjowIDE1cHggMCAwO1xuXHRcdFx0XHRcdGltZ3tcblx0XHRcdFx0XHRcdHdpZHRoOjEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDQ1cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGgze1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdFx0XHRcdHNtYWxse1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5bc2VhcmNoXXtcblx0cGFkZGluZzoxMHB4IDE1cHggNXB4IDE1cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTtcblxuXHQuZGVtbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gI3NlYXJjaF9wbGFjZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cdCAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG5cdCAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0LS1ib3gtc2hhZG93OiBub25lO1xuXHQgICAgLS1mb250LXNpemU6IDEycHg7XG5cdCAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHQgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwgLjA1KTtcblx0ICAgIGhlaWdodDogNDZweDtcblx0ICAgIG1hcmdpbjogMCAwIDJweDtcblx0ICAgIGJvcmRlcjoxcHggc29saWQgI2VlZTtcblx0ICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0aW5wdXR7XG5cdFx0XHQvLyBiYWNrZ3JvdW5kOiNmZmY7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0Ym9yZGVyIDoycHggc29saWQgcmVkXG5cdFx0fVxuICB9XG4gXG4gIH1cbiAgfVxuXG4vLyAgIGlucHV0I3NlYXJjaF9wbGFjZXM6OnBsYWNlaG9sZGVye1xuLy8gXHRjb2xvcjogcmVkXG4vLyBcdCAgfVxuLy8gaW5wdXQuZGVtbzo6cGxhY2Vob2xkZXJ7XG4vLyBcdGNvbG9yOnJlZFxuLy8gfVxuXG5cdCAgLmJ1dHRvbi1pbmNsdWRlZHtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxMjFweDtcblx0XHRib3JkZXI6IDJweCBzb2xpZCByZWQ7XG5cdFx0d2lkdGg6IDEwMHB4O1xuXHQgIH1cblxuXHQvLyAgIGlucHV0I3NlYXJjaF9wbGFjZXM6OnBsYWNlaG9sZGVyIHtcblx0Ly8gXHQvKiBGb3Igb3RoZXIgYnJvd3NlcnMgKi9cblx0Ly8gXHRjb2xvcjogd2hpdGU7XG5cdC8vICAgfVxuXHQvLyAuZGVtb3tcblx0Ly8gXHRjb2xvcjogcmVkO1xuXHQvLyB9Il19 */");

/***/ }),

/***/ 89491:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places-interests/places-interests.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border heder-main\" align-title=\"center\">\n  <ion-toolbar lines=\"none\">\n\t<ion-back-button routerLink=\"/my-trips\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n\t<ion-buttons slot=\"start\">\n\t\t<ion-menu-button> <a href=\"javascript:void(0)\" class=\"menu-tgl\"> <img src=\"assets/images/menu-wt.png\"></a></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"center\">Search </ion-title>\n\t<ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n\t\t\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\t<!-- <div map>\n\t\t<img src=\"../assets/img/map.jpg\" alt=\"\">\n\t</div> -->\n\t<div search>\n\t\t<!--a class=\"back-btn\" href=\"javascript:void(0)\"><ion-icon name=\"chevron-back\"></ion-icon></a-->\n\t\t<!-- <ion-searchbar placeholder=\"Search\"></ion-searchbar> -->\n\t\t<div class=\"demo\"><ngxgeo-autocomplete [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"></ngxgeo-autocomplete></div>\n\t</div>\n\t<!-- <div botmBar>\n\t\t<span><a href=\"javascript:void(0)\"><ion-icon name=\"information-circle\"></ion-icon></a></span>\n\t\t<span ritBtns>\n\t\t\t<a href=\"javascript:void(0)\"><ion-icon name=\"filter\"></ion-icon></a>\n\t\t\t<a locate href=\"javascript:void(0)\"><ion-icon name=\"locate\"></ion-icon></a>\n\t\t</span>\n\t</div> -->\n\n\n\t<div polularDestination>\n\t\t\n\t\t<h5>Popular Destinations</h5>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let places of places_data;\">\n\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"selectplace(places);\">\n\t\t\t\t\t<span><img src=\"{{trips/'+places.images[0]}}\" alt=\"\"></span>\n\t\t\t\t\t<h3>{{places.trip_name}} <small>{{places.starting_point}}</small></h3>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<!-- <li>\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/new-trip\">\n\t\t\t\t\t<span><img src=\"../assets/img/city2.png\" alt=\"\"></span>\n\t\t\t\t\t<h3>London <small>CITY - UK</small></h3>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/new-trip\">\n\t\t\t\t\t<span><img src=\"../assets/img/city3.png\" alt=\"\"></span>\n\t\t\t\t\t<h3>Rome <small>CITY - Italy</small></h3>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/new-trip\">\n\t\t\t\t\t<span><img src=\"../assets/img/city4.png\" alt=\"\"></span>\n\t\t\t\t\t<h3>New York City <small>CITY - United State</small></h3>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/new-trip\">\n\t\t\t\t\t<span><img src=\"../assets/img/city5.png\" alt=\"\"></span>\n\t\t\t\t\t<h3>Prague <small>CITY - Czechia</small></h3>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/new-trip\">\n\t\t\t\t\t<span><img src=\"../assets/img/city6.png\" alt=\"\"></span>\n\t\t\t\t\t<h3>Berlin <small>CITY - Germany</small></h3>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/new-trip\">\n\t\t\t\t\t<span><img src=\"../assets/img/city1.png\" alt=\"\"></span>\n\t\t\t\t\t<h3>Busapest <small>CITY - Hungary</small></h3>\n\t\t\t\t</a>\n\t\t\t</li> -->\n\t\t</ul>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_places-interests_places-interests_module_ts-es2015.js.map
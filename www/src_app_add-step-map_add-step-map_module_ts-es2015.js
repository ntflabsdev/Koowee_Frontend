(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_add-step-map_add-step-map_module_ts"],{

/***/ 75623:
/*!*************************************************************!*\
  !*** ./src/app/add-step-map/add-step-map-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStepMapPageRoutingModule": function() { return /* binding */ AddStepMapPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_step_map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-step-map.page */ 34694);




const routes = [
    {
        path: '',
        component: _add_step_map_page__WEBPACK_IMPORTED_MODULE_0__.AddStepMapPage
    }
];
let AddStepMapPageRoutingModule = class AddStepMapPageRoutingModule {
};
AddStepMapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddStepMapPageRoutingModule);



/***/ }),

/***/ 92859:
/*!*****************************************************!*\
  !*** ./src/app/add-step-map/add-step-map.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStepMapPageModule": function() { return /* binding */ AddStepMapPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_step_map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-step-map-routing.module */ 75623);
/* harmony import */ var _add_step_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-step-map.page */ 34694);
/* harmony import */ var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-geoautocomplete */ 73070);








let AddStepMapPageModule = class AddStepMapPageModule {
};
AddStepMapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_step_map_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddStepMapPageRoutingModule,
            ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()
        ],
        declarations: [_add_step_map_page__WEBPACK_IMPORTED_MODULE_1__.AddStepMapPage]
    })
], AddStepMapPageModule);



/***/ }),

/***/ 34694:
/*!***************************************************!*\
  !*** ./src/app/add-step-map/add-step-map.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStepMapPage": function() { return /* binding */ AddStepMapPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_step_map_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-step-map.page.html */ 33741);
/* harmony import */ var _add_step_map_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-step-map.page.scss */ 74508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);







let AddStepMapPage = class AddStepMapPage {
    constructor(userService, sanitizer, router) {
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.userSettings = { showCurrentLocation: true };
        this.is_submit = false;
        this.errors = ['', null, undefined];
        this.text = true;
        this.userSettings['inputPlaceholderText'] = 'Select Location';
        this.userSettings['showRecentSearch'] = false;
        this.userSettings = Object.assign({}, this.userSettings);
    }
    ngOnInit() {
        localStorage.setItem('search_by_location', '');
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
        this.lat = data.data.geometry.location.lat;
        this.lng = data.data.geometry.location.lng;
        this.location = data.data.formatted_address;
        this.place_id = data.data.place_id;
        this.reference = data.data.reference;
        this.name = data.data.name;
        this.map_url = data.data.url;
        this.save();
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
            localStorage.setItem('search_by_location', JSON.stringify(locate));
            this.loadMap();
        }
        /*location:this.location,lat:this.lat,lon:this.lng,state:this.state,country:this.country});*/
    }
    selectlocation() {
        console.log("function chal rha h-->");
        this.router.navigate(['/search']);
    }
    getAddressComponent(address_components, key) {
        var value = '';
        var postalCodeType = address_components.filter(aComp => aComp.types.some(typesItem => typesItem === key));
        if (postalCodeType != null && postalCodeType.length > 0)
            value = postalCodeType[0].long_name;
        return value;
    }
    loadMap() {
        this.text = false;
        console.log('cl mp');
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: this.lat, lng: this.lng },
            zoom: 8
        });
        var marker = new google.maps.Marker({
            position: { lat: this.lat, lng: this.lng },
            title: this.title
        });
        // To add the marker to the map, call setMap();
        marker.setMap(this.map);
    }
    backButton() {
        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //     special:  localStorage.setItem('search_by_location', '')
        //   }
        // }
        this.router.navigate(['/tabs/dashboard']);
    }
};
AddStepMapPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AddStepMapPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['map',] }]
};
AddStepMapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-step-map',
        template: _raw_loader_add_step_map_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_step_map_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddStepMapPage);



/***/ }),

/***/ 74508:
/*!*****************************************************!*\
  !*** ./src/app/add-step-map/add-step-map.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background: var(--ion-color-gradient1);\n  --background:var(--ion-color-gradient1);\n}\nion-content .ig-box-pos {\n  position: relative;\n  height: 100%;\n}\nion-content .ig-box-pos .top-search {\n  top: 20px;\n  position: absolute;\n  background: #fff;\n  left: 20px;\n  right: 20px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  padding: 2px 10px;\n}\nion-content .ig-box-pos .top-search span.icon-str {\n  width: 39px;\n  text-align: center;\n  font-size: 20px;\n  position: relative;\n  top: 2px;\n}\nion-content .text {\n  position: absolute;\n  top: 80px;\n  left: 22px;\n  right: 22px;\n}\nion-content .bottom-btns {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.85);\n  padding: 15px 12px;\n  display: flex;\n  align-items: center;\n}\nion-content .bottom-btns .cancl {\n  flex: 1;\n  display: block;\n  background: #f44336;\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\nion-content .bottom-btns .slects {\n  flex: 1;\n  display: block;\n  background: var(--ion-color-gradient1);\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.demo {\n  width: 100%;\n}\n.demo #search_places {\n  width: 100%;\n  background: #fff;\n  --background: #fff;\n  padding-left: 10px;\n  --box-shadow: none;\n  --font-size: 12px;\n  padding-right: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  height: 46px;\n  margin: 0 0 2px;\n  border: 1px solid #eee;\n  border-radius: 10px;\n}\n.demo #search_places input {\n  background: #fff;\n}\n#map {\n  height: 100%;\n}\n::ng-deep .custom-autocomplete__input input {\n  overflow: hidden !important;\n  background-color: #fff !important;\n  text-overflow: ellipsis !important;\n  border: 0 !important;\n  font-size: 16px !important;\n  border-radius: 10px !important;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdGVwLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQ0FBQTtFQUNBLHVDQUFBO0FBQ0Q7QUFBQztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtBQUVGO0FBTUU7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUpIO0FBS0c7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBSEo7QUFRQztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQyxXQUFBO0FBTkg7QUFTQztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBGO0FBUUU7RUFDQyxPQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFOSDtBQVFFO0VBQ0MsT0FBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTkg7QUFXQTtFQUNBLFdBQUE7QUFSQTtBQVNDO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUEY7QUFRRztFQUNDLGdCQUFBO0FBTko7QUFXQTtFQUNFLFlBQUE7QUFSRjtBQWFRO0VBQ0ksMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ1Qsb0JBQUE7RUFDUywwQkFBQTtFQUNBLDhCQUFBO0VBQ1QsYUFBQTtBQVZIIiwiZmlsZSI6ImFkZC1zdGVwLW1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0LmlnLWJveC1wb3Mge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0Ly8gYm9yZGVyOiAycHggc29saWQgcmVkO1xuXHRcdC8vIGltZy5idG4tdGFjayB7XG5cdFx0Ly8gXHRoZWlnaHQ6IDEwMCU7XG5cdFx0Ly8gXHR3aWR0aDogMTAwJTtcblx0XHQvLyBcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdC8vIFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0Ly8gfVxuXHRcdC50b3Atc2VhcmNoIHtcblx0XHRcdHRvcDogMjBweDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRsZWZ0OiAyMHB4O1xuXHRcdFx0cmlnaHQ6IDIwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRwYWRkaW5nOiAycHggMTBweDtcblx0XHRcdHNwYW4uaWNvbi1zdHIgICB7XG5cdFx0XHRcdHdpZHRoOiAzOXB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR0b3A6IDJweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQudGV4dHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiA4MHB4O1xuXHRcdGxlZnQ6IDIycHg7XG5cdFx0XHRyaWdodDogMjJweDtcblx0XG5cdH1cblx0LmJvdHRvbS1idG5zIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcblx0XHRwYWRkaW5nOiAxNXB4IDEycHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdC5jYW5jbCB7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuXHRcdFx0bWFyZ2luOiAwIDNweDtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0fVxuXHRcdC5zbGVjdHMge1xuXHRcdFx0ZmxleDogMTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRtYXJnaW46IDAgM3B4O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRwYWRkaW5nOiAxMnB4IDA7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHR9XG5cdH1cbn1cdFxuXG4uZGVtbyB7XG53aWR0aDogMTAwJTtcblx0I3NlYXJjaF9wbGFjZXMge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0LS1iYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdHBhZGRpbmctbGVmdDogMTBweDtcblx0XHQtLWJveC1zaGFkb3c6IG5vbmU7XG5cdFx0LS1mb250LXNpemU6IDEycHg7XG5cdFx0cGFkZGluZy1yaWdodDogMjBweDtcblx0XHRib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLCAuMDUpO1xuXHRcdGhlaWdodDogNDZweDtcblx0XHRtYXJnaW46IDAgMCAycHg7XG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjZWVlO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRpbnB1dHtcblx0XHRcdFx0YmFja2dyb3VuZDojZmZmO1xuXHRcdFx0fVxuXHR9XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcHtcblx0LmN1c3RvbS1hdXRvY29tcGxldGVfX2lucHV0e1xuICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG5cdFx0XHRib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuXHRcdFx0b3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgXG5cdH1cbn0iXX0= */");

/***/ }),

/***/ 33741:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-step-map/add-step-map.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"heder-main ion-no-border\">\n\t<ion-toolbar lines=\"none\" >\n\t  <ion-back-button routerLink=\"/tabs/dashboard\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n\t  <ion-title class=\"ion-text-center\"></ion-title>\n\t<!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n\t<ion-buttons slot=\"end\"  (click)=\"backButton()\" ><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n\t</ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\t<div class=\"ig-box-pos\">\n\t\t<!-- <img src=\"assets/img/track2.jpg\" class=\"btn-tack\"> -->\n\t\t  <div #map id=\"map\"></div>\n\t\t<div class=\"top-search\">\n\t\t\t<span class=\"icon-str\"> <ion-icon name=\"search-outline\"></ion-icon> </span>\n\t\t\t<div class=\"demo\"><ngxgeo-autocomplete [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"></ngxgeo-autocomplete></div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"text\">\n\t\t\t<h5 *ngIf=\"text\" style=\"color: #fff;\">Above.Select a location where you are interested in meeting with other travellers</h5>\n\t\t</div>\n\t\t<div class=\"bottom-btns\">\n\t\t\t<!-- <a href=\"javascript:void(0)\" class=\"cancl\"> Cancel </a> -->\n\t\t\t<a href=\"javascript:void(0)\" class=\"slects\" (click)=\"selectlocation();\"> View all Profiles </a>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_add-step-map_add-step-map_module_ts-es2015.js.map
(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_add-step-map2_add-step-map2_module_ts"],{

/***/ 80915:
/*!***************************************************************!*\
  !*** ./src/app/add-step-map2/add-step-map2-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStepMap2PageRoutingModule": function() { return /* binding */ AddStepMap2PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_step_map2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-step-map2.page */ 70707);




const routes = [
    {
        path: '',
        component: _add_step_map2_page__WEBPACK_IMPORTED_MODULE_0__.AddStepMap2Page
    }
];
let AddStepMap2PageRoutingModule = class AddStepMap2PageRoutingModule {
};
AddStepMap2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddStepMap2PageRoutingModule);



/***/ }),

/***/ 44007:
/*!*******************************************************!*\
  !*** ./src/app/add-step-map2/add-step-map2.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStepMap2PageModule": function() { return /* binding */ AddStepMap2PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_step_map2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-step-map2-routing.module */ 80915);
/* harmony import */ var _add_step_map2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-step-map2.page */ 70707);
/* harmony import */ var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-geoautocomplete */ 73070);








let AddStepMap2PageModule = class AddStepMap2PageModule {
};
AddStepMap2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_step_map2_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddStepMap2PageRoutingModule,
            ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()
        ],
        declarations: [_add_step_map2_page__WEBPACK_IMPORTED_MODULE_1__.AddStepMap2Page]
    })
], AddStepMap2PageModule);



/***/ }),

/***/ 70707:
/*!*****************************************************!*\
  !*** ./src/app/add-step-map2/add-step-map2.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStepMap2Page": function() { return /* binding */ AddStepMap2Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_step_map2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-step-map2.page.html */ 96914);
/* harmony import */ var _add_step_map2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-step-map2.page.scss */ 39177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);







let AddStepMap2Page = class AddStepMap2Page {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
        this.userSettings = { showCurrentLocation: false };
        this.is_submit = false;
        this.errors = ['', null, undefined];
        this.text = true;
        this.page = 1;
        this.userSettings['inputPlaceholderText'] = 'search ';
        this.userSettings['showSearchButton'] = false;
        this.userSettings = Object.assign({}, this.userSettings);
    }
    ngOnInit() {
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
        console.log("--===>", data.data.formatted_address);
        this.lat = data.data.geometry.location.lat;
        this.lng = data.data.geometry.location.lng;
        this.location = data.data.formatted_address;
        this.place_id = data.data.place_id;
        this.reference = data.data.reference;
        this.name = data.data.name;
        console.log("name--->", this.name);
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
        this.router.navigate(['/search-trip']);
    }
    search() {
        console.log("btn ---->");
        this.userService.postData({ skip: this.page, lat: this.lat, lng: this.lng, _id: this.id, search_by: this.search_by }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/search_trip').subscribe((result) => {
            console.log("22--->", result);
        });
    }
    backButton() {
        // let navigationExtras: NavigationExtras = {
        //   queryParams: {
        //     special:  localStorage.setItem('search_by_location', '')
        //   }
        // }
        this.router.navigate(['/tabs/dashboard']);
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
};
AddStepMap2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
AddStepMap2Page.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['map',] }]
};
AddStepMap2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-step-map2',
        template: _raw_loader_add_step_map2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_step_map2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddStepMap2Page);



/***/ }),

/***/ 39177:
/*!*******************************************************!*\
  !*** ./src/app/add-step-map2/add-step-map2.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background: var(--ion-color-gradient1);\n  --background:var(--ion-color-gradient1);\n}\nion-content .ig-box-pos {\n  position: relative;\n  height: 100%;\n}\nion-content .ig-box-pos .top-search {\n  top: 20px;\n  position: absolute;\n  background: #fff;\n  left: 20px;\n  right: 20px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  padding: 2px 10px;\n}\nion-content .ig-box-pos .top-search span.icon-str {\n  width: 39px;\n  text-align: center;\n  font-size: 20px;\n  position: relative;\n  top: 2px;\n}\nion-content .text {\n  position: absolute;\n  top: 80px;\n  left: 22px;\n  right: 22px;\n}\nion-content .bottom-btns {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.85);\n  padding: 15px 12px;\n  display: flex;\n  align-items: center;\n}\nion-content .bottom-btns .cancl {\n  flex: 1;\n  display: block;\n  background: #f44336;\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\nion-content .bottom-btns .slects {\n  flex: 1;\n  display: block;\n  background: var(--ion-color-gradient1);\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.demo {\n  width: 100%;\n}\n.demo #search_places {\n  width: 100%;\n  background: #fff;\n  --background: #fff;\n  padding-left: 10px;\n  --box-shadow: none;\n  --font-size: 12px;\n  padding-right: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  height: 46px;\n  margin: 0 0 2px;\n  border: 1px solid #eee;\n  border-radius: 10px;\n}\n.demo #search_places input {\n  background: #fff;\n}\n#map {\n  height: 100%;\n}\n::ng-deep .custom-autocomplete__input input {\n  overflow: hidden !important;\n  background-color: #fff !important;\n  text-overflow: ellipsis !important;\n  border: 0 !important;\n  font-size: 16px !important;\n  border-radius: 10px !important;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdGVwLW1hcDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0NBQUE7RUFDQSx1Q0FBQTtBQUNEO0FBQUM7RUFDQyxrQkFBQTtFQUNBLFlBQUE7QUFFRjtBQU1FO0VBQ0MsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKSDtBQUtHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUhKO0FBUUM7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0MsV0FBQTtBQU5IO0FBU0M7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVFFO0VBQ0MsT0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTkg7QUFRRTtFQUNDLE9BQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU5IO0FBV0E7RUFDQSxXQUFBO0FBUkE7QUFTQztFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVBGO0FBUUc7RUFDQyxnQkFBQTtBQU5KO0FBV0E7RUFDRSxZQUFBO0FBUkY7QUFhUTtFQUNJLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNULG9CQUFBO0VBQ1MsMEJBQUE7RUFDQSw4QkFBQTtFQUNULGFBQUE7QUFWSCIsImZpbGUiOiJhZGQtc3RlcC1tYXAyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpO1xuXHQuaWctYm94LXBvcyB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHQvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG5cdFx0Ly8gaW1nLmJ0bi10YWNrIHtcblx0XHQvLyBcdGhlaWdodDogMTAwJTtcblx0XHQvLyBcdHdpZHRoOiAxMDAlO1xuXHRcdC8vIFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Ly8gXHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHQvLyB9XG5cdFx0LnRvcC1zZWFyY2gge1xuXHRcdFx0dG9wOiAyMHB4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdGxlZnQ6IDIwcHg7XG5cdFx0XHRyaWdodDogMjBweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdHBhZGRpbmc6IDJweCAxMHB4O1xuXHRcdFx0c3Bhbi5pY29uLXN0ciAgIHtcblx0XHRcdFx0d2lkdGg6IDM5cHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHRvcDogMnB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC50ZXh0e1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDgwcHg7XG5cdFx0bGVmdDogMjJweDtcblx0XHRcdHJpZ2h0OiAyMnB4O1xuXHRcblx0fVxuXHQuYm90dG9tLWJ0bnMge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRib3R0b206IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuXHRcdHBhZGRpbmc6IDE1cHggMTJweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0LmNhbmNsIHtcblx0XHRcdGZsZXg6IDE7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdGJhY2tncm91bmQ6ICNmNDQzMzY7XG5cdFx0XHRtYXJnaW46IDAgM3B4O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRwYWRkaW5nOiAxMnB4IDA7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHR9XG5cdFx0LnNsZWN0cyB7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0XHRcdG1hcmdpbjogMCAzcHg7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdHBhZGRpbmc6IDEycHggMDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdH1cblx0fVxufVx0XG5cbi5kZW1vIHtcbndpZHRoOiAxMDAlO1xuXHQjc2VhcmNoX3BsYWNlcyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHQtLWJhY2tncm91bmQ6ICNmZmY7XG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdC0tYm94LXNoYWRvdzogbm9uZTtcblx0XHQtLWZvbnQtc2l6ZTogMTJweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRcdGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsIC4wNSk7XG5cdFx0aGVpZ2h0OiA0NnB4O1xuXHRcdG1hcmdpbjogMCAwIDJweDtcblx0XHRib3JkZXI6MXB4IHNvbGlkICNlZWU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRcdGlucHV0e1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XG5cdFx0XHR9XG5cdH1cbn1cblxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOjpuZy1kZWVwe1xuXHQuY3VzdG9tLWF1dG9jb21wbGV0ZV9faW5wdXR7XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcblx0XHRcdGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICBcblx0fVxufSJdfQ== */");

/***/ }),

/***/ 96914:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-step-map2/add-step-map2.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"heder-main ion-no-border\">\n\t<ion-toolbar lines=\"none\" >\n\t  <ion-back-button routerLink=\"/tabs/dashboard\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n\t  <ion-title class=\"ion-text-center\"></ion-title>\n\t<!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n\t<ion-buttons slot=\"end\"  (click)=\"backButton()\" ><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n\t</ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\t<div class=\"ig-box-pos\">\n\t\t<!-- <img src=\"assets/img/track2.jpg\" class=\"btn-tack\"> -->\n\t\t  <div #map id=\"map\"></div>\n\t\t<div class=\"top-search\">\n\t\t\t<span class=\"icon-str\"> <ion-icon name=\"search-outline\"></ion-icon> </span>\n\t\t\t<div class=\"demo\"><ngxgeo-autocomplete [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"></ngxgeo-autocomplete></div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"text\">\n\t\t\t<h5 *ngIf=\"text\" style=\"color: #fff;\">Above. Select a Location where other travellers will be traveling to</h5>\n\t\t</div>\n\t\t<div class=\"bottom-btns\">\n\t\t\t<!-- <a href=\"javascript:void(0)\" class=\"cancl\"> Cancel </a> -->\n\t\t\t<a href=\"javascript:void(0)\" class=\"slects\" (click)=\"selectlocation()\">View all profile trips </a>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_add-step-map2_add-step-map2_module_ts-es2015.js.map
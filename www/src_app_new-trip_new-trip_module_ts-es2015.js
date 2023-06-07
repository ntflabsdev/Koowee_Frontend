(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_new-trip_new-trip_module_ts"],{

/***/ 98362:
/*!*****************************************************!*\
  !*** ./src/app/new-trip/new-trip-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTripPageRoutingModule": function() { return /* binding */ NewTripPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _new_trip_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-trip.page */ 37036);




const routes = [
    {
        path: '',
        component: _new_trip_page__WEBPACK_IMPORTED_MODULE_0__.NewTripPage
    }
];
let NewTripPageRoutingModule = class NewTripPageRoutingModule {
};
NewTripPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewTripPageRoutingModule);



/***/ }),

/***/ 75816:
/*!*********************************************!*\
  !*** ./src/app/new-trip/new-trip.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTripPageModule": function() { return /* binding */ NewTripPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _new_trip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-trip-routing.module */ 98362);
/* harmony import */ var _new_trip_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-trip.page */ 37036);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-dropzone */ 30753);








let NewTripPageModule = class NewTripPageModule {
};
NewTripPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_7__.NgxDropzoneModule,
            _new_trip_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewTripPageRoutingModule
        ],
        declarations: [_new_trip_page__WEBPACK_IMPORTED_MODULE_1__.NewTripPage]
    })
], NewTripPageModule);



/***/ }),

/***/ 37036:
/*!*******************************************!*\
  !*** ./src/app/new-trip/new-trip.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTripPage": function() { return /* binding */ NewTripPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_new_trip_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-trip.page.html */ 49320);
/* harmony import */ var _new_trip_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-trip.page.scss */ 62820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! browser-image-compression */ 84317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);












let NewTripPage = class NewTripPage {
    constructor(userService, router, fb, sanitizer, datepipe) {
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.datepipe = datepipe;
        this.min_time2 = [];
        this.dict11 = [];
        this.is_license_uploaded = false;
        this.isLoading = false;
        this.is_submit = false;
        this.img_err = false;
        this.files = [];
        this.allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg'];
        this.errors = ['', null, undefined];
        this.file = [];
        this.weather = [];
    }
    ngOnInit() {
        this.initLoginForm();
        this.id = localStorage.getItem('user_auth_id');
        var dict1 = JSON.parse(localStorage.getItem('location_storage'));
        this.dict11 = dict1;
        console.log("lat-->", dict1.lat, "lng-->", dict1.lng);
        this.getWeather(this.dict11.lat, this.dict11.lng);
    }
    ionViewDidEnter() {
        var arr = [Number('00')];
        for (var i = 1; i < 24; i++) {
            if (i < 10) {
                console.log('first = ' + i);
                arr.push(Number(0 + i));
            }
            else {
                arr.push(i);
            }
        }
        this.min_time2 = arr;
        console.log(this.min_time2);
        this.initLoginForm();
        this.id = localStorage.getItem('user_auth_id');
        var dict1 = JSON.parse(localStorage.getItem('location_storage'));
        this.dict11 = dict1;
        this.getWeather(this.dict11.lat, this.dict11.lng);
    }
    initLoginForm() {
        this.loginForm = this.fb.group({
            trip_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            // Start_time: ['', Validators.compose([Validators.required])],
            starting_point: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            trip_summary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])]
        });
        this.loginForm.patchValue({
            starting_point: this.dict11.location
        });
    }
    submits(status) {
        this.getWeather(this.dict11.lat, this.dict11.lng);
        console.log('  this.weather = ', JSON.parse(localStorage.getItem('location_weather')));
        const controls = this.loginForm.controls;
        /** check form */
        if (this.files.length == 0) {
            this.img_err = true;
            console.log("======>", this.img_err);
            return;
        }
        if (this.loginForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            console.log('there is an issue in this controller');
            console.log(controls);
            return;
        }
        // this.img_err = false; 
        const frmData = new FormData();
        for (var i = 0; i < this.files.length; i++) {
            frmData.append("file[]", this.files[i]);
        }
        frmData.append("_id", localStorage.getItem('user_auth_id'));
        console.log("user ID----->", localStorage.getItem('user_auth_id'));
        this.userService.presentLoading();
        this.userService.postData(frmData, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/upload_img_trip').subscribe((result) => {
            this.userService.stopLoading();
            const frmData = new FormData();
            frmData.append("_id", localStorage.getItem('user_auth_id'));
            frmData.append("files", JSON.stringify(result.data));
            frmData.append("trip_name", controls.trip_name.value);
            frmData.append("start_date", controls.start_date.value);
            // frmData.append("Start_time", controls.Start_time.value);
            frmData.append("starting_point", controls.starting_point.value);
            frmData.append("trip_summary", controls.trip_summary.value);
            frmData.append("starting_location", JSON.stringify(this.dict11));
            frmData.append("weather", localStorage.getItem('location_weather'));
            frmData.append("status", status);
            this.userService.postData(frmData, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/add_trip_single_without_parent').subscribe((result) => {
                this.userService.stopLoading();
                if (result.status == 1) {
                    this.userService.presentToast('Trip has been added successfully!', 'success');
                    this.router.navigate(['/my-trips']);
                }
                else {
                    this.userService.presentToast('Unable to send a request', 'danger');
                }
            }, err => {
                this.userService.stopLoading();
                this.userService.presentToast('Unable to send a request', 'danger');
            });
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
        });
    }
    submit() {
        this.getWeather(this.dict11.lat, this.dict11.lng);
        console.log('  this.weather = ', JSON.parse(localStorage.getItem('location_weather')));
        const controls = this.loginForm.controls;
        // var date = new Date(controls.Start_time.value);
        // var hour = date.getHours();
        // console.log('hour == ', hour);
        // var arr = [];
        // for (var i = hour; i < 24; i++) {
        //   arr.push(i);
        // }
        // this.min_time2 = arr;
        /** check form */
        if (this.loginForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            console.log('there is an issue in this controller');
            console.log(controls);
            return;
        }
        if (this.files.length == 0) {
            this.img_err = true;
            console.log(this.img_err);
            return;
        }
        this.img_err = false;
        const frmData = new FormData();
        for (var i = 0; i < this.files.length; i++) {
            frmData.append("file[]", this.files[i]);
        }
        frmData.append("_id", localStorage.getItem('user_auth_id'));
        this.userService.presentLoading();
        this.userService.postData(frmData, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/upload_img_trip').subscribe((result) => {
            this.userService.stopLoading();
            let datas = {
                files: result.data,
                trip_name: controls.trip_name.value,
                start_date: controls.start_date.value,
                // Start_time: controls.Start_time.value,
                starting_point: controls.starting_point.value,
                trip_summary: controls.trip_summary.value,
                starting_location: this.dict11,
                weather: JSON.parse(localStorage.getItem('location_weather'))
            };
            console.log('datas = ', datas);
            localStorage.removeItem('location_weather');
            localStorage.setItem('location_storage_step1', JSON.stringify(datas));
            var datess = new Date(controls.start_date.value);
            datess.setDate(datess.getDate());
            localStorage.setItem('previous_step_date', JSON.stringify(datess));
            // var date = new Date(controls.Start_time.value);
            // var hour = date.getHours();
            // localStorage.setItem('previous_step_time', JSON.stringify(hour));
            this.router.navigate(['/add-new-step']);
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
        });
        //this.router.navigate(['/add-new-step']);
    }
    onSelect(event) {
        console.log(event);
        console.log(...event.addedFiles);
        var self = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__.each(event.addedFiles, function (key, files) {
            console.log(files);
            var imageFile = files;
            console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
            var options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true
            };
            (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_5__.default)(imageFile, options)
                .then(function (compressedFile) {
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
                console.log(compressedFile);
                self.files.push(compressedFile);
            })
                .catch(function (error) {
                console.log(error.message);
            });
        });
        //	this.files.push(...event.addedFiles);
    }
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
    isControlHasError(controlName, validationType) {
        const control = this.loginForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    getWeather(latitude, longitude) {
        // Get a free key at https://www.weatherapi.com/. Replace the "Your_Key_Here" string with that key.
        var OpenWeatherAppKey = "9a5ffa4f1db742cfacb125014210408";
        var queryString = 'http://api.weatherapi.com/v1/current.json?key=' + OpenWeatherAppKey + '&q=' + latitude + ',' + longitude + '&aqi=no&dt=2021-06-11';
        var queryString = 'http://api.weatherapi.com/v1/forecast.json?key=9a5ffa4f1db742cfacb125014210408&q=' + latitude + ',' + longitude + '&days=1&aqi=no&alerts=no&dt=2021-06-11';
        jquery__WEBPACK_IMPORTED_MODULE_4__.getJSON(queryString, function (results) {
            localStorage.setItem('location_weather', JSON.stringify(results));
            console.log('this weather result = ', this.weather);
        }).fail(function () {
            console.log("error getting location");
        });
    }
};
NewTripPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe }
];
NewTripPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-new-trip',
        template: _raw_loader_new_trip_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_trip_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewTripPage);



/***/ }),

/***/ 62820:
/*!*********************************************!*\
  !*** ./src/app/new-trip/new-trip.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header:after {\n  display: none;\n}\nion-header ion-toolbar {\n  --border-color:#fff;\n}\nion-header ion-back-button {\n  font-size: 13px;\n}\nion-header ion-title {\n  font-weight: 500;\n}\nion-header ion-buttons {\n  font-size: 20px;\n  margin-right: 10px;\n}\n[newTripPage] {\n  padding: 20px;\n}\n[newTripPage] ion-row {\n  margin-left: -5px;\n  margin-right: -5px;\n}\n[newTripPage] ion-row ion-col {\n  margin-top: 8px;\n}\n[newTripPage] label {\n  font-size: 12px;\n  color: #888;\n  font-size: 500;\n  margin: 0 0 5px;\n  display: block;\n}\n[newTripPage] ion-input, [newTripPage] ion-select, [newTripPage] ion-datetime, [newTripPage] ion-textarea {\n  width: 100%;\n  height: 45px;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #111;\n  font-size: 14px;\n  line-height: 40px;\n  padding: 0 12px !important;\n}\n[newTripPage] ion-textarea {\n  height: auto;\n  line-height: 120%;\n  min-height: 100px;\n}\n[newTripPage] [uploadfile] {\n  border: 1px dashed #ddd;\n  height: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: #fcfcfc;\n  flex-direction: column;\n}\n[newTripPage] [uploadfile] p {\n  font-size: 13px;\n  margin: 0;\n}\n[newTripPage] [uploadfile] ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 40px;\n}\n[btn-global] {\n  /*position: fixed;\n  bottom: 10px;*/\n  left: 35px;\n  right: 35px;\n  border-radius: 100px;\n  --border-radius: 100px;\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n  width: 100%;\n}\nspan[errormsg] {\n  color: #f0162f;\n}\n.bottom-btns {\n  padding: 10px 0 0;\n  display: flex;\n  margin: 0 -3px;\n  align-items: center;\n}\n.bottom-btns .cancl {\n  flex: 1;\n  display: block;\n  background: #ff9800;\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.bottom-btns .slects {\n  flex: 1;\n  display: block;\n  background: var(--ion-color-gradient1);\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.cancl {\n  flex: 1;\n  display: block;\n  background: #ff9800;\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\n.slects {\n  flex: 1;\n  display: block;\n  background: var(--ion-color-gradient1);\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.button-native {\n  background: inherit;\n  line-height: 1;\n  /* box-shadow: none; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy10cmlwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUVDLGFBQUE7QUFERjtBQUdDO0VBQ0MsbUJBQUE7QUFERjtBQUdDO0VBQ0ksZUFBQTtBQURMO0FBR0M7RUFDQyxnQkFBQTtBQURGO0FBR0M7RUFFQyxlQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUtBO0VBQ0MsYUFBQTtBQUZEO0FBS0M7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFHRTtFQUNDLGVBQUE7QUFESDtBQUlDO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFGRjtBQUlDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBRkY7QUFJQztFQUNDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRkY7QUFJQztFQUNDLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRkY7QUFHRTtFQUNDLGVBQUE7RUFDQSxTQUFBO0FBREg7QUFHRTtFQUNDLCtCQUFBO0VBQ0EsZUFBQTtBQURIO0FBS0E7RUFDQztnQkFBQTtFQUVBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDSSxzQkFBQTtFQUNKLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUZEO0FBS0E7RUFDSSxjQUFBO0FBRko7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUhKO0FBSUk7RUFDQyxPQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFGTDtBQUlJO0VBQ0MsT0FBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBRkw7QUFPRztFQUNFLE9BQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUpMO0FBTUk7RUFDQyxPQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFITDtBQVFJO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFOSiIsImZpbGUiOiJuZXctdHJpcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuXHQmOmFmdGVyXG5cdHtcblx0XHRkaXNwbGF5Om5vbmU7XG5cdH1cblx0aW9uLXRvb2xiYXJ7XG5cdFx0LS1ib3JkZXItY29sb3I6I2ZmZjtcblx0fVxuXHRpb24tYmFjay1idXR0b257XG5cdCAgICBmb250LXNpemU6IDEzcHg7XG5cdH1cblx0aW9uLXRpdGxle1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdH1cblx0aW9uLWJ1dHRvbnMgXG5cdHtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHR9XHRcbn1cbltuZXdUcmlwUGFnZV17XG5cdHBhZGRpbmc6MjBweDtcbn1cbltuZXdUcmlwUGFnZV17XG5cdGlvbi1yb3d7XG5cdFx0bWFyZ2luLWxlZnQ6IC01cHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAtNXB4O1xuXHRcdGlvbi1jb2x7XG5cdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0fVxuXHR9XG5cdGxhYmVse1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRjb2xvcjogIzg4ODtcblx0XHRmb250LXNpemU6IDUwMDtcblx0XHRtYXJnaW46MCAwIDVweDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXHRpb24taW5wdXQsIGlvbi1zZWxlY3QsIGlvbi1kYXRldGltZSwgaW9uLXRleHRhcmVhe1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogNDVweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMik7XG5cdFx0Y29sb3I6ICMxMTE7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHRcdHBhZGRpbmc6IDAgMTJweCAhaW1wb3J0YW50O1xuXHR9XG5cdGlvbi10ZXh0YXJlYXtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0bGluZS1oZWlnaHQ6IDEyMCU7XG5cdFx0bWluLWhlaWdodDogMTAwcHg7XHRcblx0fVxuXHRbdXBsb2FkZmlsZV17XG5cdFx0Ym9yZGVyOjFweCBkYXNoZWQgI2RkZDtcblx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdGJhY2tncm91bmQ6ICNmY2ZjZmM7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRwe1xuXHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0bWFyZ2luOjA7XG5cdFx0fVxuXHRcdGlvbi1pY29ue1xuXHRcdFx0Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdH1cblx0fVxufVxuW2J0bi1nbG9iYWxde1xuXHQvKnBvc2l0aW9uOiBmaXhlZDtcblx0Ym90dG9tOiAxMHB4OyovXG5cdGxlZnQ6IDM1cHg7XG5cdHJpZ2h0OiAzNXB4O1xuXHRib3JkZXItcmFkaXVzOiAxMDBweDtcblx0ICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjsgXG5cdHdpZHRoOiAxMDAlO1xufVxuXG5zcGFuW2Vycm9ybXNnXSB7XG4gICAgY29sb3I6ICNmMDE2MmY7XG59XG5cblxuLmJvdHRvbS1idG5zIHtcblx0XHRcdFx0cGFkZGluZzogMTBweCAwIDA7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdG1hcmdpbjowIC0zcHg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdC5jYW5jbCB7XG5cdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmY5ODAwO1xuXHRcdFx0XHRcdG1hcmdpbjogMCAzcHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LnNsZWN0cyB7XG5cdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0XHRcdFx0XHRtYXJnaW46IDAgM3B4O1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblxuXHRcdFx0LmNhbmNsIHtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZjk4MDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDNweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuc2xlY3RzIHtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpO1xuXHRcdFx0XHRcdG1hcmdpbjogMCAzcHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdH1cblxuXG5cblx0XHRcdFx0LmJ1dHRvbi1uYXRpdmUge1xuICAgIFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgLyogYm94LXNoYWRvdzogbm9uZTsgKi9cbiAgIFxufSJdfQ== */");

/***/ }),

/***/ 49320:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-trip/new-trip.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button routerLink=\"/tabs/home\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\">New Trip </ion-title>\n\t\n\t<ion-buttons slot=\"end\" routerLink=\"/tabs/home\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n    <ion-back-button routerLink=\"/places-interests\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\">New Trip</ion-title>\n  <!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n  <ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<form class=\"kt-form form-login\" [formGroup]=\"loginForm\" autocomplete=\"off\">\n\t<div newTripPage>\n\t\t<div search>\n\t\t\t<label>Trip Name</label>\n\t\t\t<ion-input formControlName=\"trip_name\" ></ion-input>\n\t\t\t<span errormsg *ngIf=\"isControlHasError('trip_name','required')\">\n            <strong>Trip name is required</strong>\n            </span>\n\t\t</div>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<label>Date</label>\n\t\t\t\t<ion-datetime formControlName=\"start_date\" displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\n\t\t\t\t<span errormsg *ngIf=\"isControlHasError('start_date','required')\">\n\t\t\t\t<strong>Start date is required</strong>\n\t\t\t\t</span>\n\t\t\t</ion-col>\n\t\t\t<!-- <ion-col>\n\t\t\t\t<label>Time</label>\n\t\t\t\t<ion-datetime formControlName=\"Start_time\" displayFormat=\"HH:mm\" placeholder=\"Select Time\" ></ion-datetime>\n\t\t\t\t<span errormsg *ngIf=\"isControlHasError('Start_time','required')\">\n\t\t\t\t<strong>Start time is required</strong>\n\t\t\t\t</span>\n\t\t\t</ion-col> -->\n\n\t\t\t\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<label>Starting Point</label>\n\t\t\t\t<ion-input disabled formControlName=\"starting_point\"></ion-input>\n\t\t\t\t<span errormsg *ngIf=\"isControlHasError('starting_point','required')\">\n\t\t\t\t<strong>Starting point is required</strong>\n\t\t\t\t</span>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<label>Trip Summary</label>\n\t\t\t\t<ion-textarea formControlName=\"trip_summary\" line=\"5\"></ion-textarea>\n\t\t\t\t<span errormsg *ngIf=\"isControlHasError('trip_summary','required')\">\n\t\t\t\t<strong>Trip summary is required</strong>\n\t\t\t\t</span>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<!-- <div uploadfile> -->\n\t\t\t\t\t<!-- <ion-icon name=\"cloud-upload\"></ion-icon>\n\t\t\t\t\t<p>Upload photos of places you have visited</p> -->\n\t\t\t\t<ngx-dropzone (change)=\"onSelect($event)\" [accept]=\"'image/*'\" >\n\n\t\t\t\t<ngx-dropzone-label><ion-icon name=\"cloud-upload-outline\"></ion-icon> Upload photos of places you have visited</ngx-dropzone-label>\n\t\t\t\t<ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of files\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f)\">\n\t\t\t\t<!-- <ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label> -->\n\t\t\t\t</ngx-dropzone-image-preview>\n\n\t\t\t\t</ngx-dropzone>\n\t\t\t\t<span errormsg *ngIf=\"img_err == true\">\n\t\t\t\t<strong>Please upload images</strong>\n\t\t\t\t</span> \n\t\t\t\t<!-- </div> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t\t<!-- <ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t<ion-button (click)=\"loadmore();\" btn-global>Load More</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row> -->\n\t\t<ion-row>\n\t\t  <ion-col>\n\t\t  <ion-button (click)=\"submit();\"  btn-global>Add New Step</ion-button>\n\t\t  </ion-col>\n\n\t\t   <ion-col>\n\t\t  <ion-button (click)=\"submits('0');\"  btn-global>Save Draft</ion-button>\n\t\t   </ion-col>\n\n\t\t<ion-col>\n\t\t<ion-button (click)=\"submits('1');\" btn-global>Publish</ion-button>\n\t\t</ion-col>\n\n</ion-row>\n\t</div>\n</form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_new-trip_new-trip_module_ts-es2015.js.map
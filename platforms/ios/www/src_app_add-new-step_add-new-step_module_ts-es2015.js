(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_add-new-step_add-new-step_module_ts"],{

/***/ 74528:
/*!*************************************************************!*\
  !*** ./src/app/add-new-step/add-new-step-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewStepPageRoutingModule": function() { return /* binding */ AddNewStepPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_new_step_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-step.page */ 30977);




const routes = [
    {
        path: '',
        component: _add_new_step_page__WEBPACK_IMPORTED_MODULE_0__.AddNewStepPage
    }
];
let AddNewStepPageRoutingModule = class AddNewStepPageRoutingModule {
};
AddNewStepPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddNewStepPageRoutingModule);



/***/ }),

/***/ 62258:
/*!*****************************************************!*\
  !*** ./src/app/add-new-step/add-new-step.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewStepPageModule": function() { return /* binding */ AddNewStepPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_new_step_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-step-routing.module */ 74528);
/* harmony import */ var _add_new_step_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-new-step.page */ 30977);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone */ 30753);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ 99794);
/* harmony import */ var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-geoautocomplete */ 73070);










let AddNewStepPageModule = class AddNewStepPageModule {
};
AddNewStepPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_new_step_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddNewStepPageRoutingModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__.NgxDropzoneModule,
            ngx_chips__WEBPACK_IMPORTED_MODULE_9__.TagInputModule,
            ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()
        ],
        declarations: [_add_new_step_page__WEBPACK_IMPORTED_MODULE_1__.AddNewStepPage]
    })
], AddNewStepPageModule);



/***/ }),

/***/ 30977:
/*!***************************************************!*\
  !*** ./src/app/add-new-step/add-new-step.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewStepPage": function() { return /* binding */ AddNewStepPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_new_step_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-new-step.page.html */ 11731);
/* harmony import */ var _add_new_step_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-new-step.page.scss */ 22496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! browser-image-compression */ 84317);












let AddNewStepPage = class AddNewStepPage {
    constructor(userService, router, fb, sanitizer, datepipe) {
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.datepipe = datepipe;
        this.userSettings = { showCurrentLocation: false };
        this.weather = [];
        this.this_location = [];
        this.submit_done = 'false';
        this.dict12 = [];
        this.is_license_uploaded = false;
        this.isLoading = false;
        this.is_submit = false;
        this.img_err = false;
        this.files = [];
        this.allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg'];
        this.errors = ['', null, undefined];
        this.license_error = false;
        this.post = [];
        this.title = 'demo';
        this.lat = 30.699270;
        this.lng = 76.694800;
        this.min_date = this.datepipe.transform(JSON.parse(localStorage.getItem('previous_step_date')), 'yyyy-MM-dd');
        this.userSettings['inputPlaceholderText'] = 'Destination Point Search';
        this.userSettings['showRecentSearch'] = false;
        this.userSettings = Object.assign({}, this.userSettings);
    }
    ngOnInit() {
        this.initLoginForm();
        this.id = localStorage.getItem('user_auth_id');
        var dict2 = JSON.parse(localStorage.getItem('location_storage_step1'));
        this.dict12 = dict2;
        setTimeout(() => {
            //  this.loadMap();
        }, 3000);
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
        this.min_time = arr;
        this.initLoginForm();
        this.id = localStorage.getItem('user_auth_id');
        var dict2 = JSON.parse(localStorage.getItem('location_storage_step1'));
        this.dict12 = dict2;
        console.log('dict12 = ', this.dict12);
        this.lat = this.dict12.starting_location.lat;
        this.lng = this.dict12.starting_location.lng;
        this.title = this.dict12.starting_location.name;
        this.loadMap();
    }
    selectdated(event) {
        console.log('event == ', event);
        var newdate = this.datepipe.transform(event.detail.value, 'yyyy-MM-dd');
        if (newdate == this.min_date) {
            console.log('yes it same');
            var hour = JSON.parse(localStorage.getItem('previous_step_time'));
            console.log('hour == ', hour);
            hour++;
            var arr = [];
            for (var i = hour; i < 24; i++) {
                if (i < 10) {
                    console.log('first = ' + i);
                    arr.push(Number(0 + i));
                }
                else {
                    arr.push(i);
                }
            }
            this.min_time2 = arr;
        }
        else {
            this.min_time2 = this.min_time;
        }
    }
    initLoginForm() {
        this.loginForm = this.fb.group({
            step_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            arrival_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            arrival_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            what_to_do: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            acitvities: ['']
        });
    }
    isControlHasError(controlName, validationType) {
        const control = this.loginForm.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    submit(status) {
        console.log('update');
        const controls = this.loginForm.controls;
        this.submit_done = 'true';
        /* this.loginForm.patchValue({
        acitvities2: controls.acitvities.value
      }); */
        console.log('controls = ', controls);
        /** check form */
        if (this.loginForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        console.log('this.this_location == ', this.this_location, this.submit_done);
        if (this.files.length == 0) {
            this.img_err = true;
            return;
        }
        else {
            this.img_err = false;
        }
        if (this.this_location.length == 0) {
            return;
        }
        const frmDatas = new FormData();
        for (var i = 0; i < this.files.length; i++) {
            frmDatas.append("file[]", this.files[i]);
        }
        frmDatas.append("_id", localStorage.getItem('user_auth_id'));
        this.userService.presentLoading();
        this.userService.postData(frmDatas, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/upload_img_trip').subscribe((result) => {
            let datas = {
                files: result.data,
                step_name: controls.step_name.value,
                arrival_date: controls.arrival_date.value,
                arrival_time: controls.arrival_time.value,
                what_to_do: controls.what_to_do.value,
                acitvities: controls.acitvities.value,
                location: this.this_location,
                weather: JSON.parse(localStorage.getItem('this_ocation_weather'))
            };
            console.log('datas= ', datas);
            var array = [];
            array.push(datas);
            const frmData = new FormData();
            frmData.append("_id", localStorage.getItem('user_auth_id'));
            frmData.append("files", JSON.stringify(this.dict12.files));
            frmData.append("trip_name", this.dict12.trip_name);
            frmData.append("start_date", this.dict12.start_date);
            frmData.append("Start_time", this.dict12.Start_time);
            frmData.append("starting_point", this.dict12.starting_point);
            frmData.append("trip_summary", this.dict12.trip_summary);
            frmData.append("starting_location", JSON.stringify(this.dict12.starting_location));
            frmData.append("weather", JSON.stringify(this.dict12.weather));
            frmData.append("status", status);
            frmData.append("step_data", JSON.stringify(array));
            this.userService.postData(frmData, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/add_trip').subscribe((result) => {
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
        });
    }
    uploadLicense(event, type) {
        this.license_error = false;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var image_file = event.target.files[0];
            image_file.action = type;
            if (self.allowedMimes.indexOf(image_file.type) == -1) {
                this.license_error = true;
            }
            else {
                if (type == 'profile') {
                    self.license_file = image_file;
                    self.license_image_url = window.URL.createObjectURL(image_file);
                    self.is_license_uploaded = true;
                }
            }
        }
    }
    removeimg(imgg) {
        if (jquery__WEBPACK_IMPORTED_MODULE_4__.inArray(imgg, this.files) >= 0) {
            var carIndex = this.files.indexOf(imgg);
            this.files.splice(carIndex, 1);
        }
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
        //  this.files.push(...event.addedFiles);
    }
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
    loadMap() {
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
            this.lat = locate.lat;
            this.lng = locate.lng;
            this.title = locate.name;
            this.loadMap();
            this.getWeather(this.lat, this.lng);
            this.this_location = locate;
            console.log('locations = ', locate);
            this.getWeather(this.lat, this.lng);
            //localStorage.setItem('location_storage',JSON.stringify(locate));
            // this.router.navigate(['/new-trip']);
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
    // Get weather by using coordinates
    getWeather(latitude, longitude) {
        // Get a free key at https://www.weatherapi.com/. Replace the "Your_Key_Here" string with that key.
        var OpenWeatherAppKey = "9a5ffa4f1db742cfacb125014210408";
        var queryString = 'http://api.weatherapi.com/v1/current.json?key=' + OpenWeatherAppKey + '&q=' + latitude + ',' + longitude + '&aqi=no&dt=2021-06-11';
        var queryString = 'http://api.weatherapi.com/v1/forecast.json?key=9a5ffa4f1db742cfacb125014210408&q=' + latitude + ',' + longitude + '&days=1&aqi=no&alerts=no&dt=2021-06-11';
        /* 'http://api.openweathermap.org/data/2.5/weather?lat='
         + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial';*/
        jquery__WEBPACK_IMPORTED_MODULE_4__.getJSON(queryString, function (results) {
            localStorage.setItem('this_ocation_weather', JSON.stringify(results));
            this.weather = results;
            console.log('weather result = ', results);
        }).fail(function () {
            console.log("error getting location");
        });
    }
    // Error callback
    onWeatherError(error) {
        console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }
    addnewstep() {
        this.submit_done = 'true';
        const controls = this.loginForm.controls;
        console.log('controls = ', controls);
        /** check form */
        if (this.loginForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        console.log('this.this_location == ', this.this_location, this.submit_done);
        if (this.files.length == 0) {
            this.img_err = true;
            return;
        }
        else {
            this.img_err = false;
        }
        if (this.this_location.length == 0) {
            return;
        }
        const frmData = new FormData();
        for (var i = 0; i < this.files.length; i++) {
            frmData.append("file[]", this.files[i]);
        }
        frmData.append("_id", localStorage.getItem('user_auth_id'));
        this.userService.presentLoading();
        this.userService.postData(frmData, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/upload_img_trip').subscribe((result) => {
            this.userService.stopLoading();
            //this step data
            let datas = {
                files: result.data,
                step_name: controls.step_name.value,
                arrival_date: controls.arrival_date.value,
                arrival_time: controls.arrival_time.value,
                what_to_do: controls.what_to_do.value,
                acitvities: controls.acitvities.value,
                location: this.this_location,
                weather: JSON.parse(localStorage.getItem('this_ocation_weather'))
            };
            var array = [];
            array.push(datas);
            console.log('datas= ', array);
            //first step data
            let data = {
                files: this.dict12.files,
                trip_name: this.dict12.trip_name,
                start_date: this.dict12.start_date,
                Start_time: this.dict12.Start_time,
                starting_point: this.dict12.starting_point,
                trip_summary: this.dict12.trip_summary,
                starting_location: this.dict12.starting_location,
                weather: this.dict12.weather,
                step_data: array,
            };
            var datess = new Date(controls.arrival_date.value);
            datess.setDate(datess.getDate());
            localStorage.setItem('previous_step_date', JSON.stringify(datess));
            var date = new Date(controls.arrival_time.value);
            var hour = date.getHours();
            localStorage.setItem('previous_step_time', JSON.stringify(hour));
            localStorage.setItem('step_data', JSON.stringify(data));
            this.router.navigate(['/add-new-trip2']);
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
        });
    }
};
AddNewStepPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe }
];
AddNewStepPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['map',] }]
};
AddNewStepPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-add-new-step',
        template: _raw_loader_add_new_step_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_new_step_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddNewStepPage);



/***/ }),

/***/ 22496:
/*!*****************************************************!*\
  !*** ./src/app/add-new-step/add-new-step.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content[bg-grey] .contet-sect {\n  padding: 0px;\n  display: block;\n}\nion-content[bg-grey] .slids-box {\n  margin-right: -20px;\n  margin-top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly {\n  display: block;\n  width: 100%;\n  height: 135px;\n  border-radius: 0px;\n  overflow: hidden;\n  position: relative;\n}\nion-content[bg-grey] .slids-box .img-bx-sly img {\n  width: 100%;\n  height: 230px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number {\n  position: absolute;\n  bottom: 10px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly h4.name-ffls {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: #fff;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 15px;\n  background: linear-gradient(to top, #000000, #00000000);\n  line-height: 19px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis {\n  height: auto;\n  background: #fff;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis img {\n  width: 100%;\n  height: 165px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis h4.tlt-stor {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n  width: 100%;\n  font-size: 14px;\n  margin: 0px;\n  padding: 5px 10px 12px;\n  color: #000;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.likes-number {\n  bottom: auto;\n  bottom: initial;\n  top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box.new-box-a {\n  margin-right: -5px;\n  margin-top: -5px;\n  margin-left: -5px;\n}\nion-content[bg-grey] .content-all-pst {\n  padding: 25px 20px 20px;\n  margin-top: -35px;\n  background: #fff;\n  z-index: 111;\n  background-color: #fff !important;\n  position: relative;\n  border-radius: 20px 20px 0 0;\n  box-shadow: 0px -20px 20px rgba(0, 0, 0, 0.28);\n  min-height: 100%;\n}\nion-content[bg-grey] .content-all-pst h4.ttl-main {\n  font-size: 16px;\n}\nion-content[bg-grey] .mt-20 {\n  margin-top: 20px !important;\n}\nion-content[bg-grey] ul.data-flos {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nion-content[bg-grey] ul.data-flos li {\n  margin-bottom: 17px;\n}\nion-content[bg-grey] ul.data-flos li label {\n  font-size: 12px;\n  color: #888;\n  font-size: 500;\n  margin: 0 0 5px;\n  display: block;\n}\nion-content[bg-grey] ul.data-flos li ion-input, ion-content[bg-grey] ul.data-flos li ion-select, ion-content[bg-grey] ul.data-flos li ion-datetime {\n  width: 100%;\n  height: 45px;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #111;\n  font-size: 14px;\n  line-height: 45px;\n  padding: 0 12px !important;\n}\nion-content[bg-grey] ul.data-flos li ion-textarea {\n  width: 100%;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #111111;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 0px 12px !important;\n}\nion-content[bg-grey] ul.data-flos li.w-ctsr {\n  width: 55%;\n  display: inline-block;\n  margin-right: 5%;\n}\nion-content[bg-grey] ul.data-flos li.tw-ctsr {\n  width: 40%;\n  display: inline-block;\n}\nion-content[bg-grey] [save] {\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  font-size: 14px;\n  border-radius: 50px;\n  margin: 20px auto 0px;\n  display: block;\n  width: 200px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\nion-content[bg-grey] label.btn-prts {\n  display: block;\n  text-align: center;\n  border: 1px dashed #d4d4d4;\n  border-radius: 10px;\n  background: #f9f9f9;\n  padding: 20px 0;\n  margin-top: 3px !important;\n}\nion-content[bg-grey] label.btn-prts span.icon-s {\n  font-size: 40px;\n  color: #4267B2;\n  line-height: 37px;\n}\nion-content[bg-grey] label.btn-prts h4 {\n  margin: 0px;\n  font-size: 14px;\n  color: #222;\n}\nion-content[bg-grey] .bottom-btns {\n  padding: 10px 0 0;\n  display: flex;\n  margin: 0 -3px;\n  align-items: center;\n}\nion-content[bg-grey] .bottom-btns .cancl {\n  flex: 1;\n  display: block;\n  background: #ff9800;\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\nion-content[bg-grey] .bottom-btns .slects {\n  flex: 1;\n  display: block;\n  background: var(--ion-color-gradient1);\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n#map {\n  height: 250px;\n}\n[search] {\n  padding: 10px 0 15px 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n[search] .demo {\n  width: 100%;\n}\n[search] .demo #search_places {\n  width: 100%;\n  background: #fff;\n  --background: #fff;\n  padding-left: 10px;\n  --box-shadow: none;\n  --font-size: 12px;\n  padding-right: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  height: 46px;\n  margin: 0 0 2px;\n  border: 1px solid #eee;\n  border-radius: 10px;\n}\n[search] .demo #search_places input {\n  background: #fff;\n}\n[errormsg] {\n  color: red;\n}\n.blockDiv {\n  display: block;\n}\n.mb10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1uZXctc3RlcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxZQUFBO0VBQ0EsY0FBQTtBQUFGO0FBRUM7RUFDQyxtQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFDRTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNIO0FBQUc7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFFSjtBQUFHO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFFSjtBQURJO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR0w7QUFBRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1REFBQTtFQUNBLGlCQUFBO0FBRUo7QUFDRTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtBQUNIO0FBQUc7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFFSjtBQUFHO0VBQ0MsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUFHO0VBQ0MsWUFBQTtFQUFBLGVBQUE7RUFDQSxTQUFBO0FBRUo7QUFBRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBRUo7QUFESTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdMO0FBRUM7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdDO0VBQ0MsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUVFO0VBQ0MsZUFBQTtBQUFIO0FBR0M7RUFDQywyQkFBQTtBQURGO0FBR0U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBREo7QUFFSTtFQUNDLG1CQUFBO0FBQUw7QUFDSztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ047QUFDSztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUNOO0FBQ0s7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUNOO0FBRUk7RUFDQyxVQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFMO0FBRUk7RUFDQyxVQUFBO0VBQ0EscUJBQUE7QUFBTDtBQUdHO0VBQ0Msc0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBREo7QUFHRztFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQURKO0FBRUk7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUw7QUFFSTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUFMO0FBR0c7RUFDQyxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0MsT0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQUw7QUFFSTtFQUNDLE9BQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUFMO0FBTUE7RUFDRSxhQUFBO0FBSEY7QUFNQTtFQUNDLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSEQ7QUFJQztFQUNHLFdBQUE7QUFGSjtBQUdDO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNILGtCQUFBO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREw7QUFFRTtFQUNDLGdCQUFBO0FBQUg7QUFNRTtFQUVJLFVBQUE7QUFKTjtBQU9FO0VBRUEsY0FBQTtBQUxGO0FBUUU7RUFFRyxnQkFBQTtBQU5MIiwiZmlsZSI6ImFkZC1uZXctc3RlcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudFtiZy1ncmV5XSB7XG5cdC5jb250ZXQtc2VjdCB7XG5cdFx0cGFkZGluZzowcHg7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblx0LnNsaWRzLWJveCB7XG5cdFx0bWFyZ2luLXJpZ2h0Oi0yMHB4O1xuXHRcdG1hcmdpbi10b3A6MTVweDtcblx0XHQuaW1nLWJ4LXNseSB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMzVweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDBweDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAyMzBweDtcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLmxpa2VzLW51bWJlciB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0Ym90dG9tOiAxMHB4O1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXHRcdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRwYWRkaW5nOiAzcHggNnB4IDNweCAxMHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTRweDtcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRoNC5uYW1lLWZmbHMge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwMDAwICwgIzAwMDAwMDAwKTtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE5cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5pbWctYngtc2x5LnN0b3JpcyB7XG5cdFx0XHRoZWlnaHQ6YXV0bztcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcblx0XHRcdGltZyB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDE2NXB4O1xuXHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdH1cblx0XHRcdGg0LnRsdC1zdG9yIHtcblx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRwYWRkaW5nOiA1cHggMTBweCAxMnB4O1xuXHRcdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdH1cblx0XHRcdHNwYW4ubGlrZXMtbnVtYmVyICB7XG5cdFx0XHRcdGJvdHRvbTogaW5pdGlhbDtcblx0XHRcdFx0dG9wOiAxNXB4O1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5tZXNncy1udW1iZXIge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHRvcDogNDdweDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0cGFkZGluZzogM3B4IDZweCAzcHggMTBweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweCAwIDAgNTBweDtcblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHR3aWR0aDogMTRweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE0cHg7XG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IHN1Yjtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQuc2xpZHMtYm94Lm5ldy1ib3gtYSB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAtNXB4O1xuXHRcdG1hcmdpbi10b3A6IC01cHg7XG5cdFx0bWFyZ2luLWxlZnQ6IC01cHg7XG5cdH1cblx0XG5cdC5jb250ZW50LWFsbC1wc3Qge1xuXHRcdHBhZGRpbmc6IDI1cHggMjBweCAyMHB4O1xuXHRcdG1hcmdpbi10b3A6IC0zNXB4O1xuXHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0ei1pbmRleDogMTExO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcblx0XHRib3gtc2hhZG93OiAwcHggLTIwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdFx0aDQudHRsLW1haW4gIHtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHR9XG5cdH1cblx0Lm10LTIwIHtcblx0XHRtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0XHR1bC5kYXRhLWZsb3Mge1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0bGl7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTdweDtcblx0XHRcdFx0XHRsYWJlbHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjODg4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiA1MDA7XG5cdFx0XHRcdFx0XHRtYXJnaW46MCAwIDVweDtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpb24taW5wdXQsIGlvbi1zZWxlY3QsIGlvbi1kYXRldGltZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogNDVweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxMTE7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogNDVweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMTJweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpb24tdGV4dGFyZWEge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHRcdFx0XHRcdFx0Y29sb3I6IHJnYigxNywgMTcsIDE3KTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMHB4IDEycHggIWltcG9ydGFudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGkudy1jdHNyIHtcblx0XHRcdFx0XHR3aWR0aDogNTUlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDUlO1xuXHRcdFx0XHR9IFxuXHRcdFx0XHRsaS50dy1jdHNyIHtcblx0XHRcdFx0XHR3aWR0aDogNDAlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0W3NhdmVde1xuXHRcdFx0XHRiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpO1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRtYXJnaW46MjBweCBhdXRvIDBweDtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdHdpZHRoOiAyMDBweDtcblx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0fVxuXHRcdFx0bGFiZWwuYnRuLXBydHMge1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRib3JkZXI6IDFweCBkYXNoZWQgI2Q0ZDRkNDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogI2Y5ZjlmOTtcblx0XHRcdFx0cGFkZGluZzogMjBweCAwO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcblx0XHRcdFx0c3Bhbi5pY29uLXMge1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRcdFx0XHRjb2xvcjogIzQyNjdCMjtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzdweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMjIyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQuYm90dG9tLWJ0bnMge1xuXHRcdFx0XHRwYWRkaW5nOiAxMHB4IDAgMDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0bWFyZ2luOjAgLTNweDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0LmNhbmNsIHtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmZjk4MDA7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDNweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuc2xlY3RzIHtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpO1xuXHRcdFx0XHRcdG1hcmdpbjogMCAzcHg7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMnB4IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cbn1cblxuXG4jbWFwIHtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuW3NlYXJjaF17XG5cdHBhZGRpbmc6MTBweCAwIDE1cHggMDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxO1xuXHQuZGVtbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gI3NlYXJjaF9wbGFjZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cdCAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG5cdCAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0LS1ib3gtc2hhZG93OiBub25lO1xuXHQgICAgLS1mb250LXNpemU6IDEycHg7XG5cdCAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHQgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwgLjA1KTtcblx0ICAgIGhlaWdodDogNDZweDtcblx0ICAgIG1hcmdpbjogMCAwIDJweDtcblx0ICAgIGJvcmRlcjoxcHggc29saWQgI2VlZTtcblx0ICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0aW5wdXR7XG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XG5cdFx0fVxuICB9XG4gIH1cbiAgfVxuXG4gIFtlcnJvcm1zZ11cbiAge1xuICAgICAgY29sb3I6cmVkXG4gIH1cblxuICAuYmxvY2tEaXZcbiAge1xuICBkaXNwbGF5OmJsb2NrXG4gIH1cblxuICAubWIxMFxuICB7XG4gICAgIG1hcmdpbi10b3A6MTBweFxuICB9Il19 */");

/***/ }),

/***/ 11731:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-new-step/add-new-step.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button defaultHref=\"/tabs/dashboard\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\">New Step </ion-title>\n\t<!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n\t<ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content bg-grey>\n\t<div class=\"contet-sect\">\n\t\t<div class=\"phot-slides\">\n\t\t\t<div class=\"slids-box new-box-a\" >\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t<div class=\"img-bx-sly storis\">\n\t\t\t\t\t\t\t\t<!-- <img src=\"assets/img/track2.jpg\"> -->\n\t\t\t\t\t\t\t\t  <div #map id=\"map\"></div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t\t<div class=\"content-all-pst\">\n\t\t\t\t  <form class=\"kt-form form-login\" [formGroup]=\"loginForm\" autocomplete=\"off\">\n\t\t\t\t<div>\n\t\t\t\t\t<ul class=\"data-flos\">\n\t\t\t\t\t  <li><label>Step Name</label><ion-input  formControlName=\"step_name\"  placeholder=\"Add Step Name\"></ion-input>\n\t\t\t\t\t\t<span errormsg *ngIf=\"isControlHasError('step_name','required')\">\n\t\t\t\t\t\t<strong>Step name is required</strong>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t \n\t\t\t\t\t  <li>\n\t\t\t\t\t  \t<ion-row>\n\t\t\t\t\t  \t\t<ion-col size=\"6\">\n\t\t\t\t\t\t  \t\t<label>Arrival Date</label><ion-datetime formControlName=\"arrival_date\"  placeholder=\"Select Date\" min=\"{{min_date}}\" (ionChange)=\"selectdated($event);\"></ion-datetime>\n\t\t\t\t\t\t\t\t<span errormsg *ngIf=\"isControlHasError('arrival_date','required')\">\n\t\t\t\t\t\t\t\t<strong>Arrival date is required</strong>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t  \t\t</ion-col>\n\n\t\t\t\t\t  \t\t<ion-col size=\"6\">\n\t\t\t\t\t  \t\t\t<label>Arrival Time </label><ion-datetime [disabled]=\"(loginForm.controls.arrival_date.value != '') ? false : true\" formControlName=\"arrival_time\"  displayFormat=\"HH:mm\"  placeholder=\"Select Time\"  hourValues=\"{{min_time2}}\"></ion-datetime>\n\t\t\t\t\t\t\t<span errormsg *ngIf=\"isControlHasError('arrival_time','required')\">\n\t\t\t\t\t\t\t<strong>Arrival time is required</strong>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t  \t\t</ion-col>\n\t\t\t\t\t  \t</ion-row>\n\t\t\t\t\t  </li>\n\t\t\t\t\t \n\t\t\t\t\t    <li>\n\t\t\t\t\t   <div class=\"demo \" search><ngxgeo-autocomplete [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"></ngxgeo-autocomplete>\n\t\t\t\t\t   </div>\n\t\t\t\t\t\t<span errormsg class=\"blockDiv\" *ngIf=\"this_location.length == 0 && submit_done == 'true'\">\n\t\t\t\t\t\t<strong>Destination point is required.</strong>\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t  <div class=\"uplod-pi \">\n\t\t\t\t\t<!-- \t<label for=\"uplod-lsve\" class=\"btn-prts\">\n\t\t\t\t\t\t\t<span class=\"icon-s\"> <ion-icon name=\"camera-outline\"></ion-icon> </span>\n\t\t\t\t\t\t\t<h4> Add Photos and Videos </h4>\n\t\t\t\t\t\t\t<input type=\"file\" id=\"uplod-lsve\" style=\"display:none;\">\n\t\t\t\t\t\t</label> -->\n\n\n\n\t\t\t\t\t\t<ngx-dropzone (change)=\"onSelect($event)\" [accept]=\"'image/*'\" >\n\n\t\t\t\t\t\t<ngx-dropzone-label> <ion-icon name=\"camera-outline\"></ion-icon> Add Photos</ngx-dropzone-label>\n\t\t\t\t\t\t<ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of files\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f)\">\n\t\t\t\t\t\t<!-- <ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label> -->\n\t\t\t\t\t\t</ngx-dropzone-image-preview>\n\n\t\t\t\t\t\t</ngx-dropzone>\n\t\t\t\t\t\t<span errormsg *ngIf=\"img_err == true\">\n\t\t\t\t\t\t<strong>Please upload images</strong>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  </li>\n\t\t\t\t\n\t\t\t\t\t  <li><label>What have you been up to?</label><ion-textarea formControlName=\"what_to_do\"  placeholder=\"Add message here..\" rows=\"4\"></ion-textarea>\n\t\t\t\t\t\t\t<span errormsg *ngIf=\"isControlHasError('what_to_do','required')\">\n\t\t\t\t\t\t\t<strong>This field is required</strong>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t  </li>  \n\t\t\t\t\t  <li><label>Add Your Top Spot & Activities</label>\n\t\t\t\t\t  \t<!-- <ion-input   placeholder=\"Add Top Spot & Activities\"></ion-input> -->\n\n\t\t\t\t\t<tag-input  [modelAsStrings]=\"true\" #input  formControlName=\"acitvities\" theme='bootstrap'>\n\t\t\t\t\t<ng-template let-item=\"item\" let-index=\"index\"> <!-- DEFINE HERE YOUR TEMPLATE -->\n\t\t\t\t\t<span>\n\t\t\t\t\t{{ item }}\n\t\t\t\t\t</span>\n\t\t\t\t\t<delete-icon (click)=\"input.removeItem(item, index)\"></delete-icon>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t</tag-input>\n\t\t\t\t\t  \n\n\n\t\t\t\t\t\t\t<span errormsg *ngIf=\"isControlHasError('acitvities','required')\">\n\t\t\t\t\t\t\t<strong>PLease add your top spot & activities</strong>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  \n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"bottom-btns\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"slects\" (click)=\"addnewstep();\"> Add New Step </a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bottom-btns\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"cancl\" (click)=\"submit('0');\"> Save Draft </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"slects\" (click)=\"submit('1');\"> Publish </a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_add-new-step_add-new-step_module_ts-es2015.js.map
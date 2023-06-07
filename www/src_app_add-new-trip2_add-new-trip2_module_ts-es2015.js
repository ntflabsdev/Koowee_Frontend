(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_add-new-trip2_add-new-trip2_module_ts"],{

/***/ 60957:
/*!***************************************************************!*\
  !*** ./src/app/add-new-trip2/add-new-trip2-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewTrip2PageRoutingModule": function() { return /* binding */ AddNewTrip2PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_new_trip2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-trip2.page */ 61940);




const routes = [
    {
        path: '',
        component: _add_new_trip2_page__WEBPACK_IMPORTED_MODULE_0__.AddNewTrip2Page
    }
];
let AddNewTrip2PageRoutingModule = class AddNewTrip2PageRoutingModule {
};
AddNewTrip2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddNewTrip2PageRoutingModule);



/***/ }),

/***/ 32431:
/*!*******************************************************!*\
  !*** ./src/app/add-new-trip2/add-new-trip2.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewTrip2PageModule": function() { return /* binding */ AddNewTrip2PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_new_trip2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-trip2-routing.module */ 60957);
/* harmony import */ var _add_new_trip2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-new-trip2.page */ 61940);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone */ 30753);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ 99794);
/* harmony import */ var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-geoautocomplete */ 73070);










let AddNewTrip2PageModule = class AddNewTrip2PageModule {
};
AddNewTrip2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_new_trip2_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddNewTrip2PageRoutingModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__.NgxDropzoneModule,
            ngx_chips__WEBPACK_IMPORTED_MODULE_9__.TagInputModule,
            ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()
        ],
        declarations: [_add_new_trip2_page__WEBPACK_IMPORTED_MODULE_1__.AddNewTrip2Page]
    })
], AddNewTrip2PageModule);



/***/ }),

/***/ 61940:
/*!*****************************************************!*\
  !*** ./src/app/add-new-trip2/add-new-trip2.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewTrip2Page": function() { return /* binding */ AddNewTrip2Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_new_trip2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-new-trip2.page.html */ 25705);
/* harmony import */ var _add_new_trip2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-new-trip2.page.scss */ 64344);
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












let AddNewTrip2Page = class AddNewTrip2Page {
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
        var dict2 = JSON.parse(localStorage.getItem('step_data'));
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
        var dict2 = JSON.parse(localStorage.getItem('step_data'));
        this.dict12 = dict2;
        console.log('dict12 = ', this.dict12);
        this.lat = this.dict12.starting_location.lat;
        this.lng = this.dict12.starting_location.lng;
        this.title = this.dict12.starting_location.name;
        this.loadMap();
    }
    initLoginForm() {
        this.loginForm = this.fb.group({
            step_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            arrival_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            arrival_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            what_to_do: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            acitvities: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])]
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
        this.submit_done = 'true';
        console.log('update');
        const controls = this.loginForm.controls;
        /*  this.loginForm.patchValue({
        acitvities2: controls.acitvities.value
      }); */
        console.log('controls = ', controls);
        /** check form */
        if (this.loginForm.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
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
        this.img_err = false;
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
            let newdata = this.dict12.step_data;
            var array = [];
            jquery__WEBPACK_IMPORTED_MODULE_4__.each(newdata, function (key, bl) {
                array.push(bl);
            });
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
        this.img_err = false;
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
            let newdata = this.dict12.step_data;
            var array = [];
            jquery__WEBPACK_IMPORTED_MODULE_4__.each(newdata, function (key, bl) {
                array.push(bl);
            });
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
                step_data: array
            };
            var datess = new Date(controls.arrival_date.value);
            datess.setDate(datess.getDate());
            localStorage.setItem('previous_step_date', JSON.stringify(datess));
            var date = new Date(controls.arrival_time.value);
            var hour = date.getHours();
            localStorage.setItem('previous_step_time', JSON.stringify(hour));
            console.log('main array = ', data);
            localStorage.setItem('step_data', JSON.stringify(data));
            this.router.navigate(['/add-new-step3']);
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
        });
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
};
AddNewTrip2Page.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe }
];
AddNewTrip2Page.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['map',] }]
};
AddNewTrip2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-add-new-trip2',
        template: _raw_loader_add_new_trip2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_new_trip2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddNewTrip2Page);



/***/ }),

/***/ 64344:
/*!*******************************************************!*\
  !*** ./src/app/add-new-trip2/add-new-trip2.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content[bg-grey] .contet-sect {\n  padding: 0px;\n  display: block;\n}\nion-content[bg-grey] .slids-box {\n  margin-right: -20px;\n  margin-top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly {\n  display: block;\n  width: 100%;\n  height: 135px;\n  border-radius: 0px;\n  overflow: hidden;\n  position: relative;\n}\nion-content[bg-grey] .slids-box .img-bx-sly img {\n  width: 100%;\n  height: 230px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number {\n  position: absolute;\n  bottom: 10px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly h4.name-ffls {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: #fff;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 15px;\n  background: linear-gradient(to top, #000000, #00000000);\n  line-height: 19px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis {\n  height: auto;\n  background: #fff;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis img {\n  width: 100%;\n  height: 165px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis h4.tlt-stor {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n  width: 100%;\n  font-size: 14px;\n  margin: 0px;\n  padding: 5px 10px 12px;\n  color: #000;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.likes-number {\n  bottom: auto;\n  bottom: initial;\n  top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box.new-box-a {\n  margin-right: -5px;\n  margin-top: -5px;\n  margin-left: -5px;\n}\nion-content[bg-grey] .content-all-pst {\n  padding: 25px 20px 20px;\n  margin-top: -35px;\n  background: #fff;\n  z-index: 111;\n  background-color: #fff !important;\n  position: relative;\n  border-radius: 20px 20px 0 0;\n  box-shadow: 0px -20px 20px rgba(0, 0, 0, 0.28);\n  min-height: 100%;\n}\nion-content[bg-grey] .content-all-pst h4.ttl-main {\n  font-size: 16px;\n}\nion-content[bg-grey] .mt-20 {\n  margin-top: 20px !important;\n}\nion-content[bg-grey] ul.data-flos {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nion-content[bg-grey] ul.data-flos li {\n  margin-bottom: 17px;\n}\nion-content[bg-grey] ul.data-flos li label {\n  font-size: 12px;\n  color: #888;\n  font-size: 500;\n  margin: 0 0 5px;\n  display: block;\n}\nion-content[bg-grey] ul.data-flos li ion-input, ion-content[bg-grey] ul.data-flos li ion-select, ion-content[bg-grey] ul.data-flos li ion-datetime {\n  width: 100%;\n  height: 45px;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #111;\n  font-size: 14px;\n  line-height: 45px;\n  padding: 0 12px !important;\n}\nion-content[bg-grey] ul.data-flos li ion-textarea {\n  width: 100%;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #111111;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 0px 12px !important;\n}\nion-content[bg-grey] ul.data-flos li.w-ctsr {\n  width: 55%;\n  display: inline-block;\n  margin-right: 5%;\n}\nion-content[bg-grey] ul.data-flos li.tw-ctsr {\n  width: 40%;\n  display: inline-block;\n}\nion-content[bg-grey] [save] {\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  font-size: 14px;\n  border-radius: 50px;\n  margin: 20px auto 0px;\n  display: block;\n  width: 200px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\nion-content[bg-grey] label.btn-prts {\n  display: block;\n  text-align: center;\n  border: 1px dashed #d4d4d4;\n  border-radius: 10px;\n  background: #f9f9f9;\n  padding: 20px 0;\n  margin-top: 3px !important;\n}\nion-content[bg-grey] label.btn-prts span.icon-s {\n  font-size: 40px;\n  color: #4267B2;\n  line-height: 37px;\n}\nion-content[bg-grey] label.btn-prts h4 {\n  margin: 0px;\n  font-size: 14px;\n  color: #222;\n}\nion-content[bg-grey] .bottom-btns {\n  padding: 10px 0 0;\n  display: flex;\n  margin: 0 -3px;\n  align-items: center;\n}\nion-content[bg-grey] .bottom-btns .cancl {\n  flex: 1;\n  display: block;\n  background: #ff9800;\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\nion-content[bg-grey] .bottom-btns .slects {\n  flex: 1;\n  display: block;\n  background: var(--ion-color-gradient1);\n  margin: 0 3px;\n  text-align: center;\n  color: #fff;\n  text-decoration: none;\n  padding: 12px 0;\n  font-size: 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n#map {\n  height: 250px;\n}\n[search] {\n  padding: 10px 0 15px 0;\n  display: flex;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n[search] .demo {\n  width: 100%;\n}\n[search] .demo #search_places {\n  width: 100%;\n  background: #fff;\n  --background: #fff;\n  padding-left: 10px;\n  --box-shadow: none;\n  --font-size: 12px;\n  padding-right: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  height: 46px;\n  margin: 0 0 2px;\n  border: 1px solid #eee;\n  border-radius: 10px;\n}\n[search] .demo #search_places input {\n  background: #fff;\n}\n[errormsg] {\n  color: red;\n}\n.blockDiv {\n  display: block;\n}\n.mb10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1uZXctdHJpcDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsWUFBQTtFQUNBLGNBQUE7QUFBRjtBQUVDO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBQ0U7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSDtBQUFHO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBRUo7QUFBRztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBRUo7QUFESTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUdMO0FBQUc7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdURBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQ0U7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7QUFDSDtBQUFHO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBRUo7QUFBRztFQUNDLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBRUo7QUFBRztFQUNDLFlBQUE7RUFBQSxlQUFBO0VBQ0EsU0FBQTtBQUVKO0FBQUc7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQUVKO0FBREk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFHTDtBQUVDO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQztFQUNDLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FBREY7QUFFRTtFQUNDLGVBQUE7QUFBSDtBQUdDO0VBQ0MsMkJBQUE7QUFERjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQURKO0FBRUk7RUFDQyxtQkFBQTtBQUFMO0FBQ0s7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNOO0FBQ0s7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFDTjtBQUNLO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFDTjtBQUVJO0VBQ0MsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFBTDtBQUVJO0VBQ0MsVUFBQTtFQUNBLHFCQUFBO0FBQUw7QUFHRztFQUNDLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQURKO0FBR0c7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUVJO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFMO0FBRUk7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBTDtBQUdHO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREo7QUFFSTtFQUNDLE9BQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUFMO0FBRUk7RUFDQyxPQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFBTDtBQU1BO0VBQ0UsYUFBQTtBQUhGO0FBTUE7RUFDQyxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhEO0FBSUM7RUFDRyxXQUFBO0FBRko7QUFHQztFQUNHLFdBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDSCxrQkFBQTtFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURMO0FBRUU7RUFDQyxnQkFBQTtBQUFIO0FBTUU7RUFFSSxVQUFBO0FBSk47QUFPRTtFQUVBLGNBQUE7QUFMRjtBQVFFO0VBRUcsZ0JBQUE7QUFOTCIsImZpbGUiOiJhZGQtbmV3LXRyaXAyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50W2JnLWdyZXldIHtcblx0LmNvbnRldC1zZWN0IHtcblx0XHRwYWRkaW5nOjBweDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXHQuc2xpZHMtYm94IHtcblx0XHRtYXJnaW4tcmlnaHQ6LTIwcHg7XG5cdFx0bWFyZ2luLXRvcDoxNXB4O1xuXHRcdC5pbWctYngtc2x5IHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEzNXB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGltZyB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDIzMHB4O1xuXHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdH1cblx0XHRcdHNwYW4ubGlrZXMtbnVtYmVyIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDEwcHg7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdFx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdHBhZGRpbmc6IDNweCA2cHggM3B4IDEwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDE0cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxNHB4O1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBzdWI7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA0cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGg0Lm5hbWUtZmZscyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAwMDAgLCAjMDAwMDAwMDApO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMTlweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0LmltZy1ieC1zbHkuc3RvcmlzIHtcblx0XHRcdGhlaWdodDphdXRvO1xuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTY1cHg7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0fVxuXHRcdFx0aDQudGx0LXN0b3Ige1xuXHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdHBhZGRpbmc6IDVweCAxMHB4IDEycHg7XG5cdFx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5saWtlcy1udW1iZXIgIHtcblx0XHRcdFx0Ym90dG9tOiBpbml0aWFsO1xuXHRcdFx0XHR0b3A6IDE1cHg7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLm1lc2dzLW51bWJlciB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiA0N3B4O1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXHRcdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRwYWRkaW5nOiAzcHggNnB4IDNweCAxMHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTRweDtcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5zbGlkcy1ib3gubmV3LWJveC1hIHtcblx0XHRtYXJnaW4tcmlnaHQ6IC01cHg7XG5cdFx0bWFyZ2luLXRvcDogLTVweDtcblx0XHRtYXJnaW4tbGVmdDogLTVweDtcblx0fVxuXHRcblx0LmNvbnRlbnQtYWxsLXBzdCB7XG5cdFx0cGFkZGluZzogMjVweCAyMHB4IDIwcHg7XG5cdFx0bWFyZ2luLXRvcDogLTM1cHg7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHR6LWluZGV4OiAxMTE7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuXHRcdGJveC1zaGFkb3c6IDBweCAtMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG5cdFx0bWluLWhlaWdodDogMTAwJTtcblx0XHRoNC50dGwtbWFpbiAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdH1cblx0fVxuXHQubXQtMjAge1xuXHRcdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcblx0fVxuXHRcdHVsLmRhdGEtZmxvcyB7XG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdG1hcmdpbjowO1xuXHRcdFx0XHRsaXtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxN3B4O1xuXHRcdFx0XHRcdGxhYmVse1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICM4ODg7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDUwMDtcblx0XHRcdFx0XHRcdG1hcmdpbjowIDAgNXB4O1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlvbi1pbnB1dCwgaW9uLXNlbGVjdCwgaW9uLWRhdGV0aW1lIHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA0NXB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRcdFx0XHRcdGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMik7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzExMTtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiA0NXB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAxMnB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlvbi10ZXh0YXJlYSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdFx0XHRcdFx0XHRjb2xvcjogcmdiKDE3LCAxNywgMTcpO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwcHggMTJweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsaS53LWN0c3Ige1xuXHRcdFx0XHRcdHdpZHRoOiA1NSU7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNSU7XG5cdFx0XHRcdH0gXG5cdFx0XHRcdGxpLnR3LWN0c3Ige1xuXHRcdFx0XHRcdHdpZHRoOiA0MCU7XG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRbc2F2ZV17XG5cdFx0XHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdG1hcmdpbjoyMHB4IGF1dG8gMHB4O1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHR9XG5cdFx0XHRsYWJlbC5idG4tcHJ0cyB7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdGJvcmRlcjogMXB4IGRhc2hlZCAjZDRkNGQ0O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuXHRcdFx0XHRwYWRkaW5nOiAyMHB4IDA7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRzcGFuLmljb24tcyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNDI2N0IyO1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAzN3B4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGg0IHtcblx0XHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICMyMjI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5ib3R0b20tYnRucyB7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHggMCAwO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRtYXJnaW46MCAtM3B4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHQuY2FuY2wge1xuXHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmOTgwMDtcblx0XHRcdFx0XHRtYXJnaW46IDAgM3B4O1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTJweCAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5zbGVjdHMge1xuXHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDNweDtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEycHggMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxufVxuXG5cbiNtYXAge1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG5bc2VhcmNoXXtcblx0cGFkZGluZzoxMHB4IDAgMTVweCAwO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDE7XG5cdC5kZW1vIHtcbiAgICB3aWR0aDogMTAwJTtcbiAjc2VhcmNoX3BsYWNlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblx0ICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcblx0ICAgIHBhZGRpbmctbGVmdDogMTBweDtcblx0XHQtLWJveC1zaGFkb3c6IG5vbmU7XG5cdCAgICAtLWZvbnQtc2l6ZTogMTJweDtcblx0ICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdCAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLCAuMDUpO1xuXHQgICAgaGVpZ2h0OiA0NnB4O1xuXHQgICAgbWFyZ2luOiAwIDAgMnB4O1xuXHQgICAgYm9yZGVyOjFweCBzb2xpZCAjZWVlO1xuXHQgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblx0XHRpbnB1dHtcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcblx0XHR9XG4gIH1cbiAgfVxuICB9XG5cbiAgW2Vycm9ybXNnXVxuICB7XG4gICAgICBjb2xvcjpyZWRcbiAgfVxuXG4gIC5ibG9ja0RpdlxuICB7XG4gIGRpc3BsYXk6YmxvY2tcbiAgfVxuXG4gIC5tYjEwXG4gIHtcbiAgICAgbWFyZ2luLXRvcDoxMHB4XG4gIH0iXX0= */");

/***/ }),

/***/ 25705:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-new-trip2/add-new-trip2.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button routerLink=\"/tabs/dashboard\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\">New Step </ion-title>\n\t<!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n\t<ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content bg-grey>\n\t<div class=\"contet-sect\">\n\t\t<div class=\"phot-slides\">\n\t\t\t<div class=\"slids-box new-box-a\" >\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t<div class=\"img-bx-sly storis\">\n\t\t\t\t\t\t\t\t<!-- <img src=\"assets/img/track2.jpg\"> -->\n\t\t\t\t\t\t\t\t  <div #map id=\"map\"></div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t\t<div class=\"content-all-pst\">\n\t\t\t\t  <form class=\"kt-form form-login\" [formGroup]=\"loginForm\" autocomplete=\"off\">\n\t\t\t\t<div>\n\t\t\t\t\t<ul class=\"data-flos\">\n\t\t\t\t\t  <li><label>Step Name</label><ion-input  formControlName=\"step_name\"  placeholder=\"Add Step Name\"></ion-input>\n\t\t\t\t\t\t<span errormsg *ngIf=\"isControlHasError('step_name','required')\">\n\t\t\t\t\t\t<strong>Step name is required</strong>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t \n\t\t\t\t\t  <li>\n\t\t\t\t\t  \t<ion-row>\n\t\t\t\t\t  \t\t<ion-col class=\"6\">\n\t\t\t\t\t  \t\t\t<label>Arrival Date</label><ion-datetime  min=\"{{min_date}}\" formControlName=\"arrival_date\"  placeholder=\"Select Date\" (ionChange)=\"selectdated($event);\"></ion-datetime>\n\t\t\t\t\t\t\t\t<span errormsg *ngIf=\"isControlHasError('arrival_date','required')\">\n\t\t\t\t\t\t\t\t<strong>Arrival date is required</strong>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t  \t\t</ion-col>\n\n\t\t\t\t\t  \t\t<ion-col class=\"6\">\n\t\t\t\t\t  \t\t\t<label>Arrival Time</label><ion-datetime formControlName=\"arrival_time\"  displayFormat=\"HH:mm\"  placeholder=\"Select Time\"  hourValues=\"{{min_time2}}\"  [disabled]=\"(loginForm.controls.arrival_date.value != '') ? false : true\" ></ion-datetime>\n\t\t\t\t\t\t\t\t<span errormsg *ngIf=\"isControlHasError('arrival_time','required')\">\n\t\t\t\t\t\t\t\t<strong>Arrival time is required</strong>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t  \t\t</ion-col>\n\t\t\t\t\t  \t</ion-row>\n\t\t\t\t\t  \n\t\t\t\t\t  </li>\n\t\t\n\n\n\t\t\t\t\t    <li >\n\t\t\t\t\t   <div class=\"demo\" search><ngxgeo-autocomplete [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"></ngxgeo-autocomplete>\n\t\t\t\t\t   </div>\n\t\t\t\t\t\t<span errormsg class=\"blockDiv\" *ngIf=\"this_location.length == 0 && submit_done == 'true'\">\n\t\t\t\t\t\t<strong>Destination point is required.</strong>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li class=\"uplod-pi\">\n\t\t\t\t\t<!-- \t<label for=\"uplod-lsve\" class=\"btn-prts\">\n\t\t\t\t\t\t\t<span class=\"icon-s\"> <ion-icon name=\"camera-outline\"></ion-icon> </span>\n\t\t\t\t\t\t\t<h4> Add Photos and Videos </h4>\n\t\t\t\t\t\t\t<input type=\"file\" id=\"uplod-lsve\" style=\"display:none;\">\n\t\t\t\t\t\t</label> -->\n\n\n\n\t\t\t\t\t\t<ngx-dropzone (change)=\"onSelect($event)\" [accept]=\"'image/*'\" >\n\n\t\t\t\t\t\t<ngx-dropzone-label> <ion-icon name=\"camera-outline\"></ion-icon> Add Photos</ngx-dropzone-label>\n\t\t\t\t\t\t<ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of files\" [file]=\"f\" [removable]=\"true\" (removed)=\"onRemove(f)\">\n\t\t\t\t\t\t<!-- <ngx-dropzone-label>{{ f.name }} ({{ f.type }})</ngx-dropzone-label> -->\n\t\t\t\t\t\t</ngx-dropzone-image-preview>\n\n\t\t\t\t\t\t</ngx-dropzone>\n\t\t\t\t\t\t<span errormsg *ngIf=\"img_err == true\">\n\t\t\t\t\t\t<strong>Please upload images</strong>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li><label>What have you been up to?</label><ion-textarea formControlName=\"what_to_do\"  placeholder=\"Add message here..\" rows=\"4\"></ion-textarea>\n\t\t\t\t\t\t\t<span errormsg *ngIf=\"isControlHasError('what_to_do','required')\">\n\t\t\t\t\t\t\t<strong>This field is required</strong>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t  </li>  \n\t\t\t\t\t  <li><label>Add Your Top Spot & Activities</label>\n\t\t\t\t\t  \t<!-- <ion-input   placeholder=\"Add Top Spot & Activities\"></ion-input> -->\n\n\t\t\t\t\t<tag-input  [modelAsStrings]=\"true\" #input  formControlName=\"acitvities\" theme='bootstrap'>\n\t\t\t\t\t<ng-template let-item=\"item\" let-index=\"index\"> <!-- DEFINE HERE YOUR TEMPLATE -->\n\t\t\t\t\t<span>\n\t\t\t\t\t{{ item }}\n\t\t\t\t\t</span>\n\t\t\t\t\t<delete-icon (click)=\"input.removeItem(item, index)\"></delete-icon>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t</tag-input>\n\t\t\t\t\t  \n\n\n\t\t\t\t\t\t\t<span errormsg *ngIf=\"isControlHasError('acitvities','required')\">\n\t\t\t\t\t\t\t<strong>PLease add your top spot & activities</strong>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  \n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"bottom-btns\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"slects\" (click)=\"addnewstep();\"> Add New Step </a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"bottom-btns\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"cancl\" (click)=\"submit('0');\"> Save Draft </a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"slects\" (click)=\"submit('1');\"> Publish </a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_add-new-trip2_add-new-trip2_module_ts-es2015.js.map
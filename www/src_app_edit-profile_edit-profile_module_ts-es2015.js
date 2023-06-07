(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_edit-profile_edit-profile_module_ts"],{

/***/ 1871:
/*!*************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": function() { return /* binding */ EditProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 62613);




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 71241:
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": function() { return /* binding */ EditProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 1871);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 62613);
/* harmony import */ var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-geoautocomplete */ 73070);








let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule,
            ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
    })
], EditProfilePageModule);



/***/ }),

/***/ 62613:
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": function() { return /* binding */ EditProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-profile.page.html */ 9439);
/* harmony import */ var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.scss */ 25494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var ngx_pica__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pica */ 49105);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! browser-image-compression */ 84317);











let EditProfilePage = class EditProfilePage {
    constructor(userService, router, fb, sanitizer, _ngxPicaService) {
        // this.getprofile()
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.sanitizer = sanitizer;
        this._ngxPicaService = _ngxPicaService;
        this.location = [];
        this.userSettings = { showCurrentLocation: false };
        this.is_submit = false;
        this.is_mobile_app = _config__WEBPACK_IMPORTED_MODULE_3__.config.IS_MOBILE_APP;
        this.errors = ['', null, undefined, 'undefined'];
        this.interests = [];
        this.usertypes = [];
        this.countries = [];
        this.post = [];
        this.license_file = [];
        this.fullname = '';
        this.fulladdress = '';
        this.proshow = true;
        this.proshow2 = false;
        this.is_license_uploaded = false;
        this.address_error = false;
        this.isLoading = false;
        this.allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg'];
        this.license_error = false;
        // IMAGES_URL: any = config.IMAGES_URL;
        this.current_date = new Date();
        this.profile = "posts";
        this.userSettings['inputPlaceholderText'] = 'Enter your area address';
        this.userSettings['showRecentSearch'] = false;
        this.userSettings = Object.assign({}, this.userSettings);
    }
    ngOnInit() {
        this.initLoginForm();
        this.license_file = [];
    }
    backButton() {
        this.router.navigate(['/tabs/profile', {
                brand: true
            }]);
    }
    initLoginForm() {
        this.loginForm = this.fb.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            about_me: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email])],
            sdcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            //address:['', Validators.compose([ Validators.required])],
            // country: ['', Validators.compose([Validators.required])],
            interests: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            usertype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]+$')
                ])
            ],
        });
        this.loginForm2 = this.fb.group({
            oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
            newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$')])],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
        });
    }
    update() {
        var _a;
        // const controls:any = this.loginForm.get;
        const controls = this.loginForm.controls;
        console.log("----->", controls);
        /** check form */
        if (this.loginForm.invalid || this.location.location == undefined) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            if (this.location.location == undefined) {
                this.address_error = true;
            }
            else {
                this.address_error = false;
            }
            console.log('there is an issue in this controller');
            return;
        }
        // if (this.loginForm.invalid || this.location == null) {
        //   Object.keys(controls.controls).forEach(controlName =>
        //     controls.get(controlName).markAsTouched()
        //   );
        //   if (this.location == null) {
        //     this.address_error = true;
        //   } else {
        //     this.address_error = false;
        //   }
        //   console.log('there is an issue in this controller');
        //   return;
        // }
        if (this.location.location == undefined) {
            this.address_error = true;
            return;
        }
        else {
            this.address_error = false;
        }
        // let data = {
        //   _id: localStorage.getItem('user_auth_id'),
        //   profile_picture: this.license_file,
        //   firstname: this.loginForm.value.firstname,
        //   lastname: this.loginForm.value.lastname,
        //   phone: this.loginForm.value.phone,
        //   email: this.loginForm.value.email,
        // 	address: this.loginForm.value.address,
        //   gender: this.loginForm.value.gender,
        //   sdcode: this.loginForm.value.sdcode,
        //   country: this.loginForm.value.country,
        // 	interests: this.loginForm.value.interests,
        //   usertype:this.loginForm.value.usertype,
        //   about_me: this.loginForm.value.about_me,
        //   dob: this.loginForm.value.dob,
        //   lat:  this.lat,
        //   long: this.lng,
        //   location: JSON.stringify(this.location),
        // }
        const frmData = new FormData();
        if (((_a = this.license_file) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            frmData.append("profile", '');
            // console.log("mmmmmm---->", this.license_file)
        }
        else {
            frmData.append("profile_picture", this.license_file);
        }
        var intere = this.loginForm.get('interests').value;
        console.log("interest value-->", intere);
        frmData.append('_id', localStorage.getItem('user_auth_id'));
        frmData.append('firstname', this.loginForm.get('firstname').value);
        frmData.append('lastname', this.loginForm.get('lastname').value);
        frmData.append('phone', this.loginForm.get('phone').value);
        frmData.append('email', this.loginForm.get('email').value);
        // frmData.append('address', this.loginForm.get('address').value); 
        frmData.append('gender', this.loginForm.get('gender').value);
        frmData.append('sdcode', this.loginForm.get('sdcode').value);
        frmData.append('country', this.countryName);
        frmData.append('interests', intere);
        frmData.append('usertype', this.loginForm.get('usertype').value);
        frmData.append('about_me', this.loginForm.get('about_me').value);
        frmData.append('dob', this.loginForm.get('dob').value);
        frmData.append('lat', this.lat);
        frmData.append('lon', this.lng);
        frmData.append('location', JSON.stringify(this.location));
        console.log("");
        // console.log("frmdata---->",frmData)
        this.userService.presentLoading();
        this.userService.postData(frmData, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/update_profile').subscribe((result) => {
            // console.log("resultttttt------>", result)
            this.userService.stopLoading();
            if (result.status == 1) {
                this.fullname = this.loginForm.value.firstname + ' ' + this.loginForm.value.lastname;
                this.fulladdress = this.location.name;
                this.userService.presentToast('Your profile has been updated successfully.', 'success');
                this.router.navigate(['/edit-profile']);
            }
            else if (result.status == 2) {
                this.userService.presentToast('Your email has been already exists', 'danger');
            }
            else if (result.status == 3) {
                this.userService.presentToast('Your mobile number has been already exists', 'danger');
            }
            else if (result.status == 4) {
                this.userService.presentToast(result.data, 'danger');
            }
            else {
                this.userService.stopLoading();
                this.userService.presentToast('Unable to send a request please try again later', 'danger');
            }
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Unable to send a request please try again later', 'danger');
        });
    }
    changepassword() {
        const controls = this.loginForm2.controls;
        /** check form */
        if (this.loginForm2.invalid) {
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
            console.log('there is an issue in this controller');
            console.log(controls);
            return;
        }
        if (controls['newpassword'].value != controls['confirmpassword'].value) {
            return;
        }
        let dict = {
            newpassword: controls['newpassword'].value,
            oldpassword: controls['oldpassword'].value,
            _id: localStorage.getItem('user_auth_id')
        };
        this.userService.presentLoading();
        this.userService.postData(dict, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/update_password').subscribe((result) => {
            this.userService.stopLoading();
            if (result.status == 1) {
                this.userService.presentToast('Your password has been updated successfully.', 'success');
                this.loginForm2.reset();
            }
            else {
                this.userService.stopLoading();
                this.userService.presentToast("Your old password doesn't match with our record", 'danger');
            }
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Unable to send a request please try again later', 'danger');
        });
    }
    isControlHasError(controlName, validationType) {
        const control = this.loginForm.controls[controlName];
        if (!control) {
            console.log("---> 1");
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    isControlHasError2(controlName, validationType) {
        const control = this.loginForm2.controls[controlName];
        if (!control) {
            return false;
        }
        const result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    }
    uploadLicense(event, type) {
        this.license_error = false;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            var image_file = event.target.files[0].name;
            image_file.action = type;
            if (self.allowedMimes.indexOf(image_file.type) == -1) {
                this.license_error = true;
            }
            else {
                if (type == 'profile') {
                    self.license_file = image_file;
                    console.log('image====>', this.license_file);
                    self.license_image_url = window.URL.createObjectURL(image_file);
                    self.is_license_uploaded = true;
                }
            }
        }
    }
    uploadLicense2(event, type) {
        const files = event.target.files;
        // console.log('-----------', files)
        var self = this;
        this._ngxPicaService.resizeImages(files, 1200, 880)
            .subscribe((imageResized) => {
            let reader = new FileReader();
            reader.addEventListener('load', (event) => {
                console.log('internal =', event);
                var image_file = event.target.result;
                const myArr = image_file.split(";");
                const myArr2 = myArr.split(":");
                console.log(myArr);
                console.log('detectMimeType ==', this.detectMimeType(image_file));
                image_file.action = type;
                if (self.allowedMimes.indexOf(image_file.type) == -1) {
                    this.license_error = true;
                }
                else {
                    this.license_file.push(event.target.result);
                    self.license_file = image_file;
                    console.log('image====>', this.license_file);
                    self.license_image_url = window.URL.createObjectURL(image_file);
                    self.is_license_uploaded = true;
                }
            }, false);
            reader.readAsDataURL(imageResized);
        }, (err) => {
            throw err.err;
        });
    }
    detectMimeType(b64) {
        var self = this;
        for (var s in self.allowedMimes) {
            if (b64.indexOf(s) === 0) {
                return self.allowedMimes[s];
            }
        }
    }
    ionViewDidEnter() {
        this.id = localStorage.getItem('user_auth_id');
        this.initLoginForm();
        this.getinterets();
        this.getusertypes();
        this.getcountries();
        // console.log("COUNTRIES......-->",  this.loginForm.)
    }
    getinterets() {
        this.userService.postData({}, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_all_interest_user').subscribe((result) => {
            this.interests = result.data;
        });
    }
    getusertypes() {
        this.userService.postData({}, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_all_usertypes').subscribe((result) => {
            this.usertypes = result.data;
        });
    }
    getcountries() {
        this.userService.getData(_config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_countries').subscribe((result) => {
            this.countries = result.data;
            this.getprofile();
        });
    }
    getprofile() {
        this.userService.presentLoading();
        this.userService.postData({ _id: this.id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_user_profile').subscribe((result) => {
            if (result.data.profile_picture != undefined) {
                this.proshow = false;
                this.proshow2 = true;
            }
            console.log("result.data-->", result.data);
            this.userService.stopLoading();
            if (result.status == 1) {
                this.post = result.data;
                this.license_file = this.post.profile_picture;
                this.loginForm.patchValue({
                    firstname: this.post.firstname,
                    lastname: this.post.lastname,
                    email: this.post.email,
                    sdcode: this.post.sdcode,
                    gender: this.post.gender,
                    address: this.post.address,
                    country: this.post.country,
                    interests: this.post.interests,
                    usertype: this.post.usertype,
                    phone: this.post.phone,
                    about_me: this.post.about_me,
                    dob: this.post.dob
                });
                this.fulladdress = this.post.country;
                this.userSettings['inputString'] = this.fulladdress;
                this.userSettings = Object.assign({}, this.userSettings);
                this.fullname = this.post.firstname + ' ' + this.post.lastname;
                if (this.post.locations != undefined && this.post.locations.name != undefined) {
                    console.log("if condition inside --->");
                    this.fulladdress = this.post.locations.country;
                    // console.log("iiiiiiii--->",this.post.country)
                    this.userSettings['inputPlaceholderText'] = this.fulladdress;
                    this.userSettings['showRecentSearch'] = false;
                    this.userSettings['inputString'] = this.fulladdress;
                    this.userSettings = Object.assign({}, this.userSettings);
                    let locate = {
                        state: this.post.locations.state,
                        country: this.post.locations.country,
                        city: this.post.locations.city,
                        town: this.post.locations.town,
                        area: this.post.locations.area,
                        zip_code: this.post.locations.zip_code,
                        lat: this.post.locations.lat,
                        lon: this.post.locations.lng,
                        location: this.post.locations.location,
                        place_id: this.post.locations.place_id,
                        reference: this.post.locations.reference,
                        name: this.post.locations.name,
                        map_url: this.post.locations.map_url
                    };
                    this.lat = this.post.lat;
                    this.lng = this.post.lon;
                    this.location = locate;
                }
            }
            else {
                this.userService.stopLoading();
                this.userService.presentToast('Unable to send a request please try again later', 'danger');
            }
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Unable to send a request please try again later', 'danger');
        });
    }
    autoCompleteCallback(data) {
        this.countryName = data.data.formatted_address;
        // console.log("AUTOCOMPLET --->",this.countryName)
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
        // console.log(data);
        var state = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.STATE);
        var country = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.COUNTRY);
        var city = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.CITY);
        var town = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.TOWN);
        var area = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.AREA);
        var zip_code = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.ZIP_CODE);
        console.log(data.data.formatted_address);
        var lat = data.data.geometry.location.lat;
        var lng = data.data.geometry.location.lng;
        var location = data.data.formatted_address;
        var place_id = data.data.place_id;
        var reference = data.data.reference;
        var name = data.data.name;
        var map_url = data.data.url;
        if (this.errors.indexOf(location) >= 0) {
            return;
        }
        else {
            let locate = {
                state: state,
                country: country,
                city: city,
                town: town,
                area: area,
                zip_code: zip_code,
                lat: lat,
                lng: lng,
                location: location,
                place_id: place_id,
                reference: reference,
                name: name,
                map_url: map_url
            };
            this.lat = locate.lat;
            this.lng = locate.lng;
            this.location = locate;
            // console.log('full address = ', this.lat, this.lng, this.location)
        }
    }
    getAddressComponent(address_components, key) {
        var _a;
        var value = '';
        var postalCodeType = address_components.filter(aComp => aComp.types.some(typesItem => typesItem === key));
        if (postalCodeType != null && postalCodeType.length > 0)
            value = (_a = postalCodeType[0]) === null || _a === void 0 ? void 0 : _a.long_name;
        return value;
    }
    handleImageUpload(event) {
        // console.log("EVENT -->",event)
        var self = this;
        var imageFile = event.target.files[0];
        console.log("------------>");
        this.license_file = imageFile;
        console.log('imageFile =>>', imageFile);
        // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
        var options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        };
        (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_5__.default)(imageFile, options)
            .then(function (compressedFile) {
            console.log("compression------>", imageFile);
            // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
            console.log(compressedFile);
            // return uploadToServer(compressedFile); // write your own logic
            self.uploadLicense_new(event, compressedFile, '');
        })
            .catch(function (error) {
            console.log(error.message);
        });
    }
    uploadLicense_new(event, comprressimage, type = "profile") {
        console.log("upload compress--->", comprressimage);
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
                // self.license_file = comprressimage;
                console.log('original = ', image_file);
                console.log('comprressimage = ', comprressimage);
                self.license_image_url = window.URL.createObjectURL(image_file);
                self.is_license_uploaded = true;
            }
        }
    }
    urlss(url) {
        // this.router.navigateByUrl(url;);
        window.location.href = url;
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer },
    { type: ngx_pica__WEBPACK_IMPORTED_MODULE_4__.NgxPicaService }
];
EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditProfilePage);



/***/ }),

/***/ 25494:
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --border-color:#fff;\n}\nion-header ion-back-button {\n  /*position: absolute;\n     left: 15px;\n     top: 7px;*/\n  font-size: 13px;\n}\nion-header ion-title {\n  font-weight: 500;\n}\n[tabhead] {\n  margin-top: 90px;\n  max-width: 280px;\n  padding: 0 10px;\n}\n[tabhead] ion-segment-button {\n  font-size: 14px;\n  text-transform: none;\n  color: #999;\n  letter-spacing: 0;\n  min-width: 1px;\n}\n[tabhead] ion-segment-button.segment-button-checked {\n  color: #000;\n  --indicator-color:transparent;\n}\n[profilePage] {\n  background: #fcfcfc;\n  padding: 0;\n  border-radius: 0 0 30px 30px;\n}\n[profilePage] [topPart] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 20px;\n  position: relative;\n  background: #fff;\n  border-radius: 0 0 30px 30px;\n}\n[profilePage] [topPart] [msg] {\n  position: absolute;\n  top: 50px;\n  right: 60px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 35px;\n  height: 35px;\n}\n[profilePage] [topPart] [msg] ion-icon {\n  color: #fff;\n  font-size: 20px;\n}\n[profilePage] [topPart] [userImg] {\n  width: 100px;\n  height: 100px;\n  border-radius: 30px;\n  display: inline-block;\n  position: relative;\n}\n[profilePage] [topPart] [userImg] img {\n  width: 100%;\n  height: 100%;\n  border-radius: 30px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[profilePage] [topPart] [userImg] [editImage] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background: var(--ion-color-gradient1);\n  position: absolute;\n  right: -10px;\n  bottom: 5px;\n  z-index: 1;\n}\n[profilePage] [topPart] [userImg] [editImage] input {\n  visibility: visible !important;\n  z-index: 9;\n  position: absolute;\n  opacity: 0;\n}\n[profilePage] [topPart] h4 {\n  font-size: 20px;\n  color: #111;\n  font-weight: 600;\n  margin: 15px 0 10px;\n}\n[profilePage] [topPart] p {\n  color: #666;\n  font-size: 14px;\n  max-width: 60%;\n  margin: 0 auto;\n  line-height: 130%;\n  text-align: center;\n}\n[profilePage] [topPart] [btn-edit] {\n  padding: 10px 30px;\n  color: #111;\n  background: #fff;\n  font-weight: 600;\n  border-radius: 50px;\n  margin: 20px 0 0;\n  text-decoration: none;\n}\n[profilePage] [topPart] [segment] {\n  margin: 20px 0 20px;\n  padding: 0 20px;\n  max-width: 350px;\n}\n[profilePage] [topPart] [segment] ion-segment-button {\n  text-transform: none;\n}\n[profilePage] [topPart] [segment] ion-segment-button h6 {\n  color: #000;\n  font-size: 14px;\n  margin: 0;\n  font-weight: 500;\n  opacity: 0.5;\n  letter-spacing: 0;\n}\n[profilePage] [topPart] [segment] ion-segment-button p {\n  color: #000;\n  font-size: 11px;\n  margin: 2px 0 0;\n  max-width: 100%;\n  font-weight: 600;\n  text-transform: uppercase;\n  opacity: 0.5;\n  letter-spacing: 0;\n}\n[profilePage] [topPart] [segment] ion-segment-button.segment-button-checked {\n  /*--indicator-color: var(--primary-color);*/\n}\n[profilePage] [topPart] [segment] ion-segment-button.segment-button-checked p {\n  opacity: 1;\n  color: var(--ion-color-primary);\n}\n[profilePage] [topPart] [segment] ion-segment-button.segment-button-checked h6 {\n  color: var(--ion-color-primary);\n  opacity: 1;\n}\n[profilePage] [botmPart] {\n  padding: 20px;\n  border-radius: 20px 20px 0 0;\n  margin-top: 10px;\n}\n[profilePage] [botmPart] ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n[profilePage] [botmPart] ul li {\n  margin-bottom: 15px;\n}\n[profilePage] [botmPart] ul li label {\n  font-size: 12px;\n  color: #888;\n  font-size: 500;\n  margin: 0 0 5px;\n  display: block;\n}\n[profilePage] [botmPart] ul li ion-input, [profilePage] [botmPart] ul li ion-select, [profilePage] [botmPart] ul li ion-datetime {\n  width: 100%;\n  height: 45px;\n  border-radius: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  color: #111;\n  font-size: 14px;\n  padding: 0 12px !important;\n}\n[profilePage] [botmPart] [save] {\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  font-size: 14px;\n  border-radius: 50px;\n  margin: 30px auto 0px;\n  display: block;\n  width: 200px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.d-flex {\n  display: flex;\n}\n.mr-auto {\n  margin-right: auto;\n}\n.ml-auto {\n  margin-left: auto;\n}\n[sideToggle] {\n  margin-right: 10px;\n}\n[sideToggle] span {\n  width: 30px;\n  height: 2px;\n  border-radius: 10px;\n  background: #111;\n  display: block;\n  margin: 5px 0;\n}\n[sideToggle] span:nth-child(2) {\n  width: 22px;\n}\n[sideToggle] span:nth-child(3) {\n  width: 15px;\n}\nion-content {\n  --padding-bottom: 50px !important;\n}\nspan[errormsg] {\n  color: #f0162f;\n  font-size: 10px;\n}\na.chang-pic {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  border-radius: 50%;\n  color: #fff;\n  text-align: center;\n  line-height: 35px;\n  font-size: 22px;\n  bottom: 0;\n  right: 0;\n}\np.small-ts {\n  font-size: 14px;\n  color: #889;\n  font-size: 500;\n  margin: 0 0 5px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxtQkFBQTtBQUFGO0FBRUM7RUFDQzs7ZUFBQTtFQUdHLGVBQUE7QUFBTDtBQUVDO0VBQ0MsZ0JBQUE7QUFBRjtBQUdBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBRDtBQUNDO0VBQ0MsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQUU7RUFDQyxXQUFBO0VBQ0EsNkJBQUE7QUFFSDtBQUdBO0VBQ0MsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUFBRDtBQUNDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUNGO0FBQUU7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSDtBQURHO0VBQ0MsV0FBQTtFQUNBLGVBQUE7QUFHSjtBQUNFO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSDtBQUFHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFFSjtBQUFHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFSjtBQURJO0VBQ0ksOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBR1I7QUFDRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNIO0FBQ0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNIO0FBQ0U7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0g7QUFDRTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0g7QUFBRztFQUNDLG9CQUFBO0FBRUo7QUFESTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR0w7QUFESTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR0w7QUFESTtFQUNDLDJDQUFBO0FBR0w7QUFGSztFQUNDLFVBQUE7RUFDQSwrQkFBQTtBQUlOO0FBRks7RUFDQywrQkFBQTtFQUNBLFVBQUE7QUFJTjtBQUVDO0VBQ0MsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUNFO0VBQ0MsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNIO0FBQUc7RUFDQyxtQkFBQTtBQUVKO0FBREk7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdMO0FBREk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBR0w7QUFDRTtFQUNDLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNIO0FBTUE7RUFDQyxhQUFBO0FBSEQ7QUFLQTtFQUNDLGtCQUFBO0FBRkQ7QUFJQTtFQUNDLGlCQUFBO0FBREQ7QUFLQTtFQUNDLGtCQUFBO0FBRkQ7QUFHQztFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBREY7QUFFRTtFQUNDLFdBQUE7QUFBSDtBQUVFO0VBQ0MsV0FBQTtBQUFIO0FBS0E7RUFDSSxpQ0FBQTtBQUZKO0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUZKO0FBS0E7RUFDRyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBRkg7QUFPQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSkoiLCJmaWxlIjoiZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG5cdGlvbi10b29sYmFye1xuXHRcdC0tYm9yZGVyLWNvbG9yOiNmZmY7XG5cdH1cblx0aW9uLWJhY2stYnV0dG9ue1xuXHRcdC8qcG9zaXRpb246IGFic29sdXRlO1xuXHQgICAgbGVmdDogMTVweDtcblx0ICAgIHRvcDogN3B4OyovXG5cdCAgICBmb250LXNpemU6IDEzcHg7XG5cdH1cblx0aW9uLXRpdGxle1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdH1cbn1cblt0YWJoZWFkXXtcblx0bWFyZ2luLXRvcDo5MHB4O1xuXHRtYXgtd2lkdGg6IDI4MHB4O1xuXHRwYWRkaW5nOjAgMTBweDtcblx0aW9uLXNlZ21lbnQtYnV0dG9ue1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblx0XHRjb2xvcjogIzk5OTtcblx0XHRsZXR0ZXItc3BhY2luZzogMDtcblx0XHRtaW4td2lkdGg6IDFweDtcblx0XHQmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdC0taW5kaWNhdG9yLWNvbG9yOnRyYW5zcGFyZW50O1xuXHRcdH1cblx0fVxufVxuXG5bcHJvZmlsZVBhZ2Vde1xuXHRiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuXHRwYWRkaW5nOjA7XG5cdGJvcmRlci1yYWRpdXM6MCAwIDMwcHggMzBweDtcblx0W3RvcFBhcnRde1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdHBhZGRpbmctdG9wOjIwcHg7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGJhY2tncm91bmQ6I2ZmZjtcblx0XHRib3JkZXItcmFkaXVzOiAwIDAgMzBweCAzMHB4O1xuXHRcdFttc2dde1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiA1MHB4O1xuXHRcdFx0cmlnaHQ6IDYwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsIC4yKTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0d2lkdGg6IDM1cHg7XG5cdFx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0XHRpb24taWNvbntcblx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRcdH0gXG5cblx0XHR9XG5cdFx0W3VzZXJJbWdde1xuXHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0aGVpZ2h0OiAxMDBweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRpbWd7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0fVxuXHRcdFx0W2VkaXRJbWFnZV17XG5cdFx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0cmlnaHQ6IC0xMHB4O1xuXHRcdFx0XHRib3R0b206IDVweDtcblx0XHRcdFx0ei1pbmRleDoxO1xuXHRcdFx0XHRpbnB1dHtcblx0XHRcdFx0ICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcblx0XHRcdFx0ICAgIHotaW5kZXg6IDk7XG5cdFx0XHRcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdCAgICBvcGFjaXR5OiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGg0e1xuXHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0Y29sb3I6ICMxMTE7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0bWFyZ2luOjE1cHggMCAxMHB4O1xuXHRcdH1cblx0XHRwe1xuXHRcdFx0Y29sb3I6ICM2NjY7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRtYXgtd2lkdGg6IDYwJTtcblx0XHRcdG1hcmdpbjowIGF1dG87XG5cdFx0XHRsaW5lLWhlaWdodDogMTMwJTtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cdFx0W2J0bi1lZGl0XXtcblx0XHRcdHBhZGRpbmc6MTBweCAzMHB4O1xuXHRcdFx0Y29sb3I6ICMxMTE7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRtYXJnaW46MjBweCAwIDA7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuXHRcdH1cblx0XHRbc2VnbWVudF17XG5cdFx0XHRtYXJnaW46MjBweCAwIDIwcHg7XG5cdFx0XHRwYWRkaW5nOjAgMjBweDtcblx0XHRcdG1heC13aWR0aDogMzUwcHg7XG5cdFx0XHRpb24tc2VnbWVudC1idXR0b257XG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiBub25lO1xuXHRcdFx0XHRoNntcblx0XHRcdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRvcGFjaXR5OiAuNTtcdFxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdFx0XHRcdG1hcmdpbjoycHggMCAwO1xuXHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0b3BhY2l0eTogLjU7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ji5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke1xuXHRcdFx0XHRcdC8qLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpOyovXG5cdFx0XHRcdFx0cHtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRoNntcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRbYm90bVBhcnRde1xuXHRcdHBhZGRpbmc6MjBweDtcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuXHRcdG1hcmdpbi10b3A6MTBweDtcblx0XHR1bHtcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRsaXtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0XHRcdFx0bGFiZWx7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjODg4O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogNTAwO1xuXHRcdFx0XHRcdG1hcmdpbjowIDAgNXB4O1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlvbi1pbnB1dCwgaW9uLXNlbGVjdCwgaW9uLWRhdGV0aW1le1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogNDVweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdFx0XHRcdGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMik7XG5cdFx0XHRcdFx0Y29sb3I6ICMxMTE7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdHBhZGRpbmc6IDAgMTJweCAhaW1wb3J0YW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFtzYXZlXXtcblx0XHRcdGJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRtYXJnaW46MzBweCBhdXRvIDBweDtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHR9XG5cdH1cbn1cblxuXG5cbi5kLWZsZXh7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG4ubXItYXV0b3tcblx0bWFyZ2luLXJpZ2h0OiBhdXRvOztcbn1cbi5tbC1hdXRve1xuXHRtYXJnaW4tbGVmdDogYXV0bzs7XG59XG5cblxuW3NpZGVUb2dnbGVde1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdHNwYW57XG5cdFx0d2lkdGg6MzBweDtcblx0XHRoZWlnaHQ6MnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0YmFja2dyb3VuZDogIzExMTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW46NXB4IDA7XG5cdFx0JjpudGgtY2hpbGQoMil7XG5cdFx0XHR3aWR0aDogMjJweDtcblx0XHR9XG5cdFx0JjpudGgtY2hpbGQoMyl7XG5cdFx0XHR3aWR0aDogMTVweDtcblx0XHR9XG5cdH1cbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogNTBweCAhaW1wb3J0YW50O1xufVxuXG5zcGFuW2Vycm9ybXNnXSB7XG4gICAgY29sb3I6ICNmMDE2MmY7XG4gICAgZm9udC1zaXplOjEwcHg7XG59XG5cbmEuY2hhbmctcGljIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmZjZGZmLCAjNzBiMGZmKTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bGluZS1oZWlnaHQ6IDM1cHg7XG5cdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRyaWdodDogMDtcblx0XHR9XG5cblxuXG5wLnNtYWxsLXRzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM4ODk7XG4gICAgZm9udC1zaXplOiA1MDA7XG4gICAgbWFyZ2luOiAwIDAgNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ 9439:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"heder-main ion-no-border\">\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button (click)=\"backButton()\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n\n    \n    <ion-title class=\"ion-text-center\">Edit Profile </ion-title>\n\t<!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n\t<!--ion-buttons slot=\"end\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons-->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div profilePage>\n    <div topPart>\n      <!-- <a href=\"javascript:void(0)\" routerLink=\"/chat\" msg><ion-icon name=\"chatbox\"></ion-icon></a> -->\n      <span userImg>\n       \n        <img *ngIf=\"errors.indexOf(post?.profile_picture) >= 0 && is_license_uploaded == false\"   alt=\"\"  src=\"../assets/img/img1.jpg\" >\n    <img *ngIf=\"errors.indexOf(post?.profile_picture) == -1 && is_license_uploaded == false\"  alt=\"\"   src=\"{{post?.profile_picture}}\"/> \n    <img *ngIf=\"is_license_uploaded == true\"   alt=\"\" [src]=\"sanitizer.bypassSecurityTrustUrl(license_image_url)\"\n    >\n\n         <!-- <a editImage href=\"javascript:void(0);\"  ><ion-icon name=\"camera\"></ion-icon><input type=\"file\" id=\"chang-pic\" (change)=\"uploadLicense($event,'profile')\" style=\"visibility:hidden;\"></a></span> -->\n         <a editImage href=\"javascript:void(0);\"  ><ion-icon name=\"camera\"></ion-icon><input type=\"file\" id=\"chang-pic\" (change)=\"handleImageUpload($event)\" style=\"visibility:hidden;\"></a>\n        <!-- <a editImage  *ngIf=\"errors.indexOf(post?.profile_picture) == -1 && is_license_uploaded == false\"   > <ion-icon name=\"trash\"></ion-icon></a> -->\n        </span>\n\n      <h4>{{fullname}}</h4>\n      <p>{{fulladdress}}</p>\n      <!-- <a href=\"javascript:void(0)\" btn-edit>Edit Profile</a> -->\n      <!-- <ul>\n        <li><h6>510</h6><p>Posts</p></li>\n        <li><h6>2.4k</h6><p>Followers</p></li>\n        <li><h6>120</h6><p>Following</p></li>\n      </ul> -->\n      <ion-segment mode=\"md\" [(ngModel)]=\"profile\" segment>\n        <ion-segment-button value=\"posts\">\n           <h6>Personal Details</h6>\n        </ion-segment-button>\n          <ion-segment-button value=\"followers\">\n           <h6>Change Password</h6>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div botmPart [ngSwitch]=\"profile\">\n      <div *ngSwitchCase=\"'posts'\"> \n        <form class=\"kt-form form-login\" [formGroup]=\"loginForm\" autocomplete=\"off\">\n        <ul>\n          <li><label>First Name</label><ion-input formControlName=\"firstname\" value=\"Jennifer Lopez\"></ion-input>\n            <span errormsg *ngIf=\"isControlHasError('firstname','required')\">\n            <strong>First name is required</strong>\n            </span>\n          </li>\n          <li><label>Last Name</label><ion-input formControlName=\"lastname\"  value=\"Lopez\"></ion-input>\n            <span errormsg *ngIf=\"isControlHasError('lastname','required')\">\n            <strong>lastname is required</strong>\n            </span>\n          </li>\n          <li><label>Email Address</label><ion-input formControlName=\"email\" value=\"jenilop02@gmail.com\"></ion-input>\n            <span errormsg *ngIf=\"isControlHasError('email','required')\">\n            <strong>Email address is required</strong>\n            </span>\n            <span errormsg *ngIf=\"isControlHasError('email','email')\">\n            <strong>Please enter a valid email address</strong>\n            </span>\n          </li>\n          <li><label>Phone</label>\n            <ion-row>\n              <ion-col size=\"5\">\n                  <ion-select okText=\"Confirm\"  formControlName=\"sdcode\"  placeholder=\"+65\">\n                  <ion-select-option *ngFor=\"let country of countries\" value=\"{{country.phoneCode}}\">{{country.sortname}} (+{{country.phoneCode}})</ion-select-option>\n                  </ion-select>\n                   <span errormsg *ngIf=\"isControlHasError('sdcode','required')\">\n                    <strong>Please select your sdcode</strong>\n                    </span>\n              </ion-col>\n\n              <ion-col size=\"7\">\n                   <ion-input type=\"number\" formControlName=\"phone\"  value=\"998 8888 0120\"></ion-input>\n                  <span errormsg *ngIf=\"isControlHasError('phone','required')\">\n                  <strong>Please enter your phone number</strong>\n                  </span>\n\n                <span errormsg *ngIf=\"isControlHasError('phone','pattern')\">\n                <strong>Please enter correct phone number</strong>\n                </span>\n               \n              </ion-col>\n            </ion-row>\n          \n\n           \n           \n          </li>\n          <li><label>Date Of Birth</label>\n            <ion-datetime formControlName=\"dob\"  displayFormat=\"D MMM YYYY\"  max=\"{{current_date| date: 'yyyy-MM-dd'}}\"></ion-datetime>\n            <span errormsg *ngIf=\"isControlHasError('dob','required')\">\n            <strong>Date of Birth is required</strong>\n            </span>\n          </li>\n\n          <li><label>Gender</label>\n            <ion-select formControlName=\"gender\" palceholder=\"Select Gender\">\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n            </ion-select>\n            <span errormsg *ngIf=\"isControlHasError('gender','required')\">\n             <strong>Please select your gender</strong>\n            </span>  \n          </li>\t\n\n      <li >\n        <label>Country / Nationality </label>\n      <div class=\"demo\" search><ngxgeo-autocomplete [userSettings]=\"userSettings\" (componentCallback)=\"autoCompleteCallback($event)\"></ngxgeo-autocomplete>\n      </div>\n      <span errormsg *ngIf=\"address_error == true\">\n      <strong>This field is required.</strong>\n      </span>\n      </li>\n\n        <!--   <li><label>City/Town</label><ion-input formControlName=\"address\" value=\"265 Platinum Dr Hoschton, Georgia(GA), 30548\"></ion-input></li> -->\n        <!--   <li><label>Country</label>\n            <ion-select formControlName=\"country\" value=\"f\">\n              <ion-select-option  *ngFor=\"let country of countries\" value=\"{{country.name}}\">{{country.name}}</ion-select-option>\n            </ion-select>\n            <span errormsg *ngIf=\"isControlHasError('country','required')\">\n             <strong>Please select your country</strong>\n            </span>\n          </li> -->\n          <li>\n\t\t\t<label>Interests</label>\n            <ion-select formControlName=\"interests\" multiple=\"true\"  cancelText=\"Nah\" okText=\"Okay!\">\n              <ion-select-option  *ngFor=\"let interest of interests\" value=\"{{interest._id}}\">{{interest.title}}</ion-select-option>\n            </ion-select>\n            <span errormsg *ngIf=\"isControlHasError('interests','required')\">\n             <strong>Please select your interests</strong>\n            </span>\n          </li>\n\t\t  <li>\n\t\t\t<label>User Type </label>\n            <ion-select formControlName=\"usertype\" placeholder=\"Select User Type\" cancelText=\"Cancel\" okText=\"Save\">\n              <ion-select-option  *ngFor=\"let usertype of usertypes\" value=\"{{usertype._id}}\">{{usertype.title}}</ion-select-option>\n            </ion-select>\n            <span errormsg *ngIf=\"isControlHasError('usertype','required')\">\n             <strong>Please select your user type</strong>\n            </span>\n          </li>\n\n\n        <li><label>About Me</label><ion-input formControlName=\"about_me\" value=\"\"></ion-input>\n        <span errormsg *ngIf=\"isControlHasError('about_me','required')\">\n        <strong>This field is required</strong>\n        </span>\n        </li>\n        </ul>\n        <a href=\"javascript:void(0)\" (click)=\"update();\" save>Save Changes</a>\n      </form>\n      </div>\n\n\n      <!-- followers -->\n      <div *ngSwitchCase=\"'followers'\">\n        <label><p class=\"small-ts\"> Note: Password must be between 8 and 12 characters with at least one uppercase letter, lowercase letter and one digit.</p> </label>\n\n         <form class=\"kt-form form-login\" [formGroup]=\"loginForm2\" autocomplete=\"off\">\n        <ul>\n          <li><label>Old Password</label><ion-input  type=\"password\" formControlName=\"oldpassword\"></ion-input>\n            <span errormsg *ngIf=\"isControlHasError2('oldpassword','required')\">\n            <strong>Enter your current password</strong>\n            </span>\n          </li>\n          <li><label>New Password</label>\n            <ion-input  type=\"password\" formControlName=\"newpassword\"></ion-input>\n            <span errormsg *ngIf=\"isControlHasError2('newpassword','required')\">\n            <strong>Please enter your new password</strong>\n            </span>\n            <span errormsg *ngIf=\"isControlHasError2('newpassword','pattern')\">\n            <strong>Please enter password in proper format</strong>\n            </span>\n            <!-- <span errormsg *ngIf=\"loginForm2.controls.newpassword.touched && !loginForm2.controls.newpassword.valid && !isControlHasError2('newpassword','required')\">\n            <strong>New password must be between 8 and 12 characters with at least one uppercase letter, lowercase letter, one special character and one digit.</strong>\n            </span> -->\n          </li>\n          <li><label>Confirm New Password</label>\n            <ion-input  type=\"password\" formControlName=\"confirmpassword\"></ion-input>\n            <span errormsg *ngIf=\"isControlHasError2('confirmpassword','required')\">\n            <strong>Please enter confirm password</strong>\n            </span>\n            <span errormsg *ngIf=\"loginForm2.controls.newpassword.value != loginForm2.controls.confirmpassword.value && !isControlHasError2('confirmpassword','required')\">\n            <strong>Confirm the password does not match the new password.</strong>\n            </span>\n          </li>\n        </ul>\n        <a href=\"javascript:void(0)\" (click)=\"changepassword()\" save>Submit</a>\n      </form>\n      </div>\n\n\n    </div>\n  </div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_edit-profile_edit-profile_module_ts-es2015.js.map
(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 86829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": function() { return /* binding */ ProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 72919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": function() { return /* binding */ ProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 86829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 72919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 72919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 52907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 70231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! browser-image-compression */ 84317);











let ProfilePage = class ProfilePage {
    constructor(userService, router, fb, alertController, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.is_submit = false;
        this.is_mobile_app = _config__WEBPACK_IMPORTED_MODULE_3__.config.IS_MOBILE_APP;
        this.errors = ['', null, undefined, 'undefined'];
        this.interests = [];
        this.usertypes = [];
        this.countries = [];
        this.post = [];
        this.fullname = '';
        this.fulladdress = '';
        this.profile_data = [];
        this.is_license_uploaded = false;
        this.isLoading = false;
        this.allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg', "video/mp4", "video/webm", "video/ogg"];
        this.license_error = false;
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
        this.IMAGES_URL_All = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL_All;
        this.images = [];
        this.pageno = 1;
        this.totaldata = 0;
        this.back_btn_url = localStorage.getItem('redirect_page_profile');
        console.log('not done');
        if (activatedRoute.snapshot.paramMap.get('id') != undefined) {
            this.user_id = activatedRoute.snapshot.paramMap.get('id');
        }
    }
    ngOnInit() {
        console.log('this is working');
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter ');
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ');
    }
    ionViewWillLeave() {
        console.log('ionViewWillLeave  ');
    }
    ionViewDidLeave() {
        console.log('ionViewDidLeave   ');
    }
    ionViewWillUnload() {
        console.log('ionViewWillUnload    ');
    }
    ionWillEnter() {
        console.log('ionWillEnter    ');
    }
    ionViewDidEnter() {
        this.pageno = 1;
        this.totaldata = 0;
        console.log('ionViewDidEnter main');
        if (this.activatedRoute.snapshot.paramMap.get('id') != undefined) {
            this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
            this.id = this.activatedRoute.snapshot.paramMap.get('id');
        }
        else {
            this.id = localStorage.getItem('user_auth_id');
        }
        this.getprofiledata();
        this.getimages();
    }
    getprofiledata() {
        this.userService.postData({ _id: this.id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_user_profile_detail').subscribe((result) => {
            this.profile_data = result;
            console.log("profile_data-->", this.profile_data);
            if (this.profile_data.user_imgs != undefined && this.profile_data.user_imgs.length > 0) {
                //  this.images = this.profile_data.user_imgs;
            }
        });
    }
    backButton() {
        this.router.navigate(['/search', {}]);
    }
    getimages() {
        this.images = [];
        this.userService.postData({ skip: this.pageno, _id: this.id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_imgs').subscribe((result) => {
            this.pageno = result.pageNo;
            //  console.log("IMAGES FUNCTION==>",result)
            var thiss = this;
            if (result.data2 != undefined && result.data2.length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_4__.each(result.data2, function (key, bl) {
                    thiss.images.push(bl);
                });
                this.totaldata = result.data;
            }
        });
    }
    upload_img() {
        const frmData = new FormData();
        if (this.license_file == '') {
            frmData.append("profile", "");
        }
        else {
            frmData.append("file", this.license_file);
            frmData.append("type", this.license_file.type);
        }
        frmData.append("_id", localStorage.getItem('user_auth_id'));
        this.userService.presentLoading();
        this.userService.postData(frmData, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/upload_img').subscribe((result) => {
            this.userService.stopLoading();
            this.pageno = 1;
            this.getimages();
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
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
                    this.upload_img();
                    self.license_image_url = window.URL.createObjectURL(image_file);
                    self.is_license_uploaded = true;
                }
            }
        }
    }
    presentAlert(img) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let imgs = img.images;
            // console.log("imgs-->",imgs)
            let type = img.file_type + '/' + img.type;
            // console.log("file type-->",img.file_type)
            if (img.file_type == 'image') {
                const alert = yield this.alertController.create({
                    message: `<img  src="${imgs}" alt="" />`,
                    buttons: [{
                            text: 'X',
                            handler: () => {
                                console.log('Confirm Cancel');
                            }
                        }],
                    cssClass: 'alert-helps'
                });
                yield alert.present();
            }
            if (img.file_type == 'video') {
                this.userService.presentLoading();
                const alert = yield this.alertController.create({
                    message: '<video autoplay="autoplay" webkit-playsinline="webkit-playsinline"><source src="' + imgs + '" type="' + type + '" /></video>',
                    buttons: ['X'],
                    cssClass: 'alert-helps',
                    backdropDismiss: false
                });
                var self = this;
                setTimeout(function () {
                    self.userService.stopLoading();
                }, 1000);
                yield alert.present();
                jquery__WEBPACK_IMPORTED_MODULE_4__('video').attr('controls', 'controls');
            }
        });
    }
    loadmore() {
        this.userService.postData({ skip: this.pageno, _id: this.id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_imgs').subscribe((result) => {
            this.pageno = result.pageNo;
            var thiss = this;
            if (result.data2 != undefined && result.data2.length > 0) {
                jquery__WEBPACK_IMPORTED_MODULE_4__.each(result.data2, function (key, bl) {
                    thiss.images.push(bl);
                });
                this.totaldata = result.data;
            }
            console.log('this.images =', this.images);
        });
    }
    handleImageUpload(event) {
        var self = this;
        var imageFile = event.target.files[0];
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
            // return uploadToServer(compressedFile); // write your own logic
            self.uploadLicense_new(event, compressedFile, '');
        })
            .catch(function (error) {
            console.log(error.message);
        });
    }
    uploadLicense_new(event, comprressimage, type = "profile") {
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
                self.license_file = comprressimage;
                console.log('original = ', image_file);
                console.log('comprressimage = ', comprressimage);
                this.upload_img();
                self.license_image_url = window.URL.createObjectURL(image_file);
                self.is_license_uploaded = true;
            }
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 70231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[profilePic] {\n  width: 100%;\n  height: 300px;\n  position: relative;\n}\n[profilePic] img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n[profilePic]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n}\n[profilePic] span.badge-nst {\n  position: absolute;\n  top: 16px;\n  right: 0;\n  background: #4267B2;\n  z-index: 11;\n  color: #fff;\n  font-size: 11px;\n  padding: 4px 11px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n[profilePic] span.badge-nst:after {\n  content: \"\";\n  position: absolute;\n  left: -13px;\n  top: 0;\n  border: 12.5px solid #222;\n  border-color: #4267B2 #4267B2 #4267B2 transparent;\n  z-index: -1;\n}\n[contentArea] {\n  position: relative;\n  left: 0;\n  right: 0;\n  max-width: 90%;\n  margin: auto;\n  top: -50px;\n  background: #fff;\n  padding: 20px;\n  border-radius: 7px;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);\n}\n[contentArea] h4 {\n  margin: 0;\n  color: var(--ion-color-primary);\n  font-size: 18px;\n}\n[contentArea] h4 small {\n  color: #999;\n  font-size: 12px;\n}\n[contentArea] p {\n  color: #666;\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n}\n[flexTop] {\n  display: flex;\n}\n[ritside] {\n  margin-left: auto;\n}\n[ritside] ion-icon {\n  margin-left: 3px;\n  font-size: 17px;\n}\n[lftside] ul {\n  list-style: none;\n  padding: 0;\n  margin: 12px 0 0;\n  display: flex;\n}\n[lftside] ul li {\n  margin-right: 15px;\n}\n[lftside] ul li a {\n  color: #666;\n  font-weight: bold;\n  font-size: 13px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\n[lftside] ul li a ion-icon {\n  color: var(--ion-color-primary);\n  margin-right: 5px;\n}\n[lftside] ul li a:hover {\n  text-decoration: none;\n}\n[aboutMe] {\n  margin: 10px 0 0;\n}\n[aboutMe] h5 {\n  font-size: 14px;\n}\n[aboutMe] p {\n  font-size: 12px;\n  font-weight: 400;\n}\nion-grid {\n  padding: 0;\n  margin: 15px 0 0;\n}\nion-grid ion-row {\n  padding: 0;\n  margin-left: -5px;\n  margin-right: -5px;\n}\nion-grid ion-row ion-col {\n  position: relative;\n}\nion-grid ion-row ion-col img {\n  width: 100%;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\nion-grid ion-row ion-col span {\n  position: absolute;\n  left: 5px;\n  right: 5px;\n  top: 5px;\n  bottom: 10px;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-grid ion-row ion-col span ion-icon {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 35px;\n}\na.back-btn {\n  position: absolute;\n  left: 15px;\n  top: 40px;\n  z-index: 99;\n  background: var(--ion-color-gradient1);\n  width: 25px;\n  height: 25px;\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\na.back-btn ion-icon {\n  color: #fff;\n  margin-right: 2px;\n}\n[photo-upload] {\n  border: 1px dashed #a2a2a2;\n  padding: 20px 10px;\n  overflow: hidden;\n  border-radius: 5px;\n  text-align: center;\n}\n[photo-upload] ion-input {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  opacity: 0;\n}\n[photo-upload] p {\n  color: #666;\n  margin: 0;\n  font-size: 11px;\n  font-weight: 600;\n}\n[photo-upload] ion-icon {\n  font-size: 20px;\n  color: #666;\n}\nvideo {\n  width: 100%;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n}\n.alert-wrapper.ion-overlay-wrapper.sc-ion-alert-md {\n  width: 100% !important;\n  height: 100%;\n  top: 0 !important;\n  left: 0 !important;\n  background: transparent !important;\n}\n.sc-ion-alert-md-h {\n  --min-width: 611px;\n}\nul.tag-line {\n  flex-wrap: wrap;\n}\n.country {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,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LGtCQUFBO0VBQ0Esa0NBQUE7QUFHSjtBQUNBO0VBQ0ksa0JBQUE7QUFFSjtBQUNDO0VBQ0UsZUFBQTtBQUVIO0FBQUM7RUFDQSxpQkFBQTtBQUdEIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3Byb2ZpbGVQaWNde1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAzMDBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRpbWd7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHR9XG5cdCY6YWZ0ZXJ7XG5cdFx0Y29udGVudDpcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OjA7XG5cdFx0dG9wOjA7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIC40KTtcblx0fVxuXHRcblx0c3Bhbi5iYWRnZS1uc3Qge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDE2cHg7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0YmFja2dyb3VuZDogIzQyNjdCMjtcblx0XHR6LWluZGV4OiAxMTtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0cGFkZGluZzogNHB4IDExcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogLTEzcHg7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRib3JkZXI6IDEyLjVweCBzb2xpZCAjMjIyO1xuXHRcdFx0Ym9yZGVyLWNvbG9yOiAjNDI2N0IyICM0MjY3QjIgIzQyNjdCMiB0cmFuc3BhcmVudDtcblx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdH1cblx0fVxufVxuW2NvbnRlbnRBcmVhXXtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0bWF4LXdpZHRoOiA5MCU7XG5cdG1hcmdpbjphdXRvO1xuXHR0b3A6IC01MHB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRwYWRkaW5nOjIwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDdweDtcblx0Ym94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLDAsMCwgLjEpO1xufVxuW2NvbnRlbnRBcmVhXSBoNHtcblx0bWFyZ2luOjA7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cbltjb250ZW50QXJlYV0gaDQgc21hbGx7XG5cdGNvbG9yOiAjOTk5O1xuXHRmb250LXNpemU6IDEycHg7XG59XG5bY29udGVudEFyZWFdIHB7XG5cdGNvbG9yOiAjNjY2O1xuXHRtYXJnaW46MDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuW2ZsZXhUb3Bde1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuW3JpdHNpZGVde1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0aW9uLWljb257XG5cdFx0bWFyZ2luLWxlZnQ6M3B4O1xuXHRcdGZvbnQtc2l6ZTogMTdweDtcblx0fVxufVxuW2xmdHNpZGVde1xuXHR1bHtcblx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdHBhZGRpbmc6MDtcblx0XHRtYXJnaW46MTJweCAwIDA7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRsaXtcblx0XHRcdG1hcmdpbi1yaWdodDogMTVweDtcblx0XHRcdGF7XG5cdFx0XHRcdGNvbG9yOiAjNjY2O1xuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGlvbi1pY29ue1xuXHRcdFx0XHRcdGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQmOmhvdmVye1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuW2Fib3V0TWVde1xuXHRtYXJnaW46MTBweCAwIDA7XG5cdGg1e1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0fVxuXHRwe1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHR9XG59XG5pb24tZ3JpZHtcblx0cGFkZGluZzowO1xuXHRtYXJnaW46MTVweCAwIDA7XG5cdGlvbi1yb3d7XG5cdFx0cGFkZGluZzowO1xuXHRcdG1hcmdpbi1sZWZ0Oi01cHg7XG5cdFx0bWFyZ2luLXJpZ2h0Oi01cHg7XG5cdFx0aW9uLWNvbHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGltZ3tcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMTAwcHg7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHR9XG5cdFx0XHRzcGFue1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IDVweDtcblx0XHRcdFx0cmlnaHQ6IDVweDtcblx0XHRcdFx0dG9wOiA1cHg7XG5cdFx0XHRcdGJvdHRvbTogMTBweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAuNCk7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRpb24taWNvbntcblx0XHRcdFx0XHRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgLjgpO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMzVweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuYS5iYWNrLWJ0bntcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAxNXB4O1xuXHR0b3A6IDQwcHg7XG5cdHotaW5kZXg6IDk5O1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0d2lkdGg6IDI1cHg7XG5cdGhlaWdodDogMjVweDtcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGlvbi1pY29ue1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdG1hcmdpbi1yaWdodDogMnB4O1xuXHR9XG59XG5bcGhvdG8tdXBsb2FkXSBcbntcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2EyYTJhMjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHRpb24taW5wdXQgXG5cdHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwcHg7XG5cdFx0Ym90dG9tOiAwcHg7XG5cdFx0bGVmdDogMHB4O1xuXHRcdHJpZ2h0OiAwcHg7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxuXHRwXG5cdHtcblx0XHRjb2xvcjogIzY2Njtcblx0XHRtYXJnaW46IDA7XG5cdFx0Zm9udC1zaXplOiAxMXB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdH1cblx0aW9uLWljb24gXG5cdHtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0Y29sb3I6ICM2NjY7XG5cdH1cdFxufVxuXG52aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuXG4uYWxlcnQtd3JhcHBlci5pb24tb3ZlcmxheS13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cdC8vIC0tYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5zYy1pb24tYWxlcnQtbWQtaCB7XG4gICAgLS1taW4td2lkdGg6IDYxMXB4O1xuIH0gICBcblxuIHVsLnRhZy1saW5le1xuICAgZmxleC13cmFwOiB3cmFwO1xuIH1cbiAuY291bnRyeXtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG4gfVxuIl19 */");

/***/ }),

/***/ 52907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>profile</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\t<div profilePic>\n\t\t<img *ngIf=\"errors.indexOf(profile_data.data?.profile_picture) >= 0\" src=\"../assets/img/img1.jpg\" alt=\"\">\n\t\t<img *ngIf=\"errors.indexOf(profile_data.data?.profile_picture) == -1\" src=\"{{profile_data.data?.profile_picture}}\" alt=\"\">\n\t\t <a class=\"back-btn\" (click)=\"backButton()\" href=\"javascript:void(0)\" *ngIf=\"user_id != undefined && user_id != null && user_id != ''\"><ion-icon name=\"chevron-back\"></ion-icon></a>\n\t\t <span class=\"badge-nst\" *ngIf=\"profile_data?.usersstypes != undefined\"> {{profile_data.usersstypes?.title}}  </span>\n\t</div>\n\t<div contentArea>\n\t\t<div flexTop>\n\t\t\t<div lftside>\n\t\t\t\t<h4 *ngIf=\"profile_data?.data != undefined\">{{profile_data.data?.firstname+' '+profile_data.data?.lastname}},  <small>{{profile_data.data?.gender}}</small>  </h4>\n\t\t\t\t<p *ngIf =\"profile_data?.data != undefined\" > {{profile_data.data?.country}}</p>\n\t\t\t\t<p *ngIf=\"profile_data?.data?.address != undefined\">{{profile_data.data?.address}}, {{profile_data.data?.country}}</p>\n\t\t\t\t<h6>Interests</h6>\n\t\t\t\t<ul *ngIf=\"profile_data?.interestss != undefined && profile_data?.interestss.length > 0\" class=\"tag-line\">\n\t\t\t\t\t<li *ngFor=\"let interest of profile_data?.interestss\"><a href=\"javascript:void(0)\" class=\"interest\" ><ion-icon name=\"musical-note-outline\"></ion-icon > {{interest.title}} </a></li>\n\t\t\t\t\t<!-- <li><a href=\"javascript:void(0)\"><ion-icon name=\"book-outline\"></ion-icon> Reading</a></li>\n\t\t\t\t\t<li><a href=\"javascript:void(0)\"><ion-icon name=\"videocam-outline\"></ion-icon> Movie</a></li> -->\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div ritside *ngIf=\"user_id == undefined || user_id == null || user_id == ''\">\n\t\t\t\t<a routerLink=\"/edit-profile\" href=\"javascript:void(0)\"><ion-icon name=\"create-outline\"></ion-icon></a>\n\t\t\t\t<a routerLink=\"/discovery\" href=\"javascript:void(0)\"><ion-icon name=\"settings-outline\"></ion-icon></a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div aboutMe>\n\t\t\t<h5>About Me</h5>\n\t\t\t<p *ngIf=\"profile_data?.data != undefined\">{{profile_data?.data.about_me}}</p>\n\t\t</div>\n\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col *ngFor=\"let img of images\" size=\"4\" (click)=\"presentAlert(img)\">\n\t\t\t\t\t<img *ngIf=\"img.file_type == 'image'\" src=\"{{img.images}}\" alt=\"\" />\n\t\t\t\t<!-- \t<video *ngIf=\"img.file_type == 'video'\" controls=\"controls\" preload=\"metadata\" autoplay=\"false\" webkit-playsinline=\"webkit-playsinline\"> -->\n\t\t\t\t\t<video *ngIf=\"img.file_type == 'video'\" preload=\"metadata\">\n\t\t\t\t\t<source src=\"{{img.images}}#t=0.1\" type=\"{{img.file_type+'/'+img.type}}\" />\n\t\t\t\t\t</video><span *ngIf=\"img.file_type == 'video'\"><ion-icon name=\"play\"></ion-icon></span>\n\t\t\t\t</ion-col>\n\t\t\t<!-- \t<ion-col size=\"4\"></ion-col>\n\t\t\t\t<ion-col size=\"4\"><img src=\"../assets/img/img3.jpg\" alt=\"\" /></ion-col>\n\t\t\t\t<ion-col size=\"4\"><img src=\"../assets/img/img4.jpg\" alt=\"\" /></ion-col>\n\t\t\t\t<ion-col size=\"4\"><img src=\"../assets/img/img5.jpg\" alt=\"\" /></ion-col>\n\t\t\t\t<ion-col size=\"4\"><img src=\"../assets/img/img6.jpg\" alt=\"\" /><span><ion-icon name=\"play\"></ion-icon></span></ion-col>\n\t\t\t\t<ion-col size=\"4\"><img src=\"../assets/img/img7.jpg\" alt=\"\" /></ion-col> -->\n\t\t\t\t<ion-col *ngIf=\"((images.length > 0) && (images.length < totaldata) && (images.length != totaldata))\" size=\"12\">\n\t\t\t\t  <!--   <div photo-upload2>\t -->\t\t\t\t    \n\t\t\t\t\t\t<ion-button (click)=\"loadmore();\" expand=\"full\">Load More</ion-button>\n\t\t\t\t<!-- \t</div> -->\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"12\" *ngIf=\"user_id == undefined || user_id == null || user_id == ''\">\n\t\t\t\t    <div photo-upload>\n\t\t\t\t\t<ion-icon name=\"image-outline\"></ion-icon>\n\t\t\t\t\t    <p>Add Photo</p>\n\t\t\t\t\t\t<ion-input type=\"file\" (change)=\"handleImageUpload($event)\"></ion-input>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts-es2015.js.map
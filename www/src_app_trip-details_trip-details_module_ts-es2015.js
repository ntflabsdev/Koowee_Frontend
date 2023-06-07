(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_trip-details_trip-details_module_ts"],{

/***/ 57988:
/*!*************************************************************!*\
  !*** ./src/app/trip-details/trip-details-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripDetailsPageRoutingModule": function() { return /* binding */ TripDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _trip_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip-details.page */ 14773);




const routes = [
    {
        path: '',
        component: _trip_details_page__WEBPACK_IMPORTED_MODULE_0__.TripDetailsPage
    }
];
let TripDetailsPageRoutingModule = class TripDetailsPageRoutingModule {
};
TripDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TripDetailsPageRoutingModule);



/***/ }),

/***/ 40281:
/*!*****************************************************!*\
  !*** ./src/app/trip-details/trip-details.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripDetailsPageModule": function() { return /* binding */ TripDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip-details-routing.module */ 57988);
/* harmony import */ var _trip_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-details.page */ 14773);
/* harmony import */ var ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-geoautocomplete */ 73070);








let TripDetailsPageModule = class TripDetailsPageModule {
};
TripDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.TripDetailsPageRoutingModule,
            ngx_geoautocomplete__WEBPACK_IMPORTED_MODULE_2__.NgxGeoautocompleteModule.forRoot()
        ],
        declarations: [_trip_details_page__WEBPACK_IMPORTED_MODULE_1__.TripDetailsPage]
    })
], TripDetailsPageModule);



/***/ }),

/***/ 14773:
/*!***************************************************!*\
  !*** ./src/app/trip-details/trip-details.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripDetailsPage": function() { return /* binding */ TripDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_trip_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./trip-details.page.html */ 15985);
/* harmony import */ var _trip_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-details.page.scss */ 84432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/filesystem */ 61977);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dom-to-image */ 83697);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 40496);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 33098);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);












// import { Plugins, FilesystemDirectory } from '@capacitor/core';


const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Plugins;



(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__.pdfMake.vfs;

let TripDetailsPage = class TripDetailsPage {
    constructor(userService, router, alertController, activatedRoute, geolocation, nativeGeocoder, zone, socialSharing, plt, fileOpener) {
        this.userService = userService;
        this.router = router;
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.socialSharing = socialSharing;
        this.plt = plt;
        this.fileOpener = fileOpener;
        this.lat = 56.130367;
        this.lng = -106.346771;
        this.map_title = 'Canada';
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
        this.IMAGES_URL_All = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL_All;
        this.trips = [];
        this.errors = ['', null, undefined];
        this.main_trip = [];
        this.images = [];
        this.profile_data = [];
        this.back_button_btn = localStorage.getItem('back_button_url');
        this.add_button_show = 0;
        this.places_data = [];
        this.profiletab = "Basic";
        this.isAndroid = false;
        this.customAlertOptions = {
            header: 'Category',
            translucent: true
        };
        this.customAlertOptions1 = {
            header: 'Breed',
            translucent: true
        };
        this.customAlertOptions2 = {
            header: 'Service',
            translucent: true
        };
        this.category = {
            form: null
        };
        this.category1 = {
            form: null
        };
        this.category2 = {
            form: null
        };
        this.pdfObj = null;
        this.slideOpts = {
            slidesPerView: 3.3,
            spaceBetween: 7,
        };
        this.slideOpts3 = {
            slidesPerView: 3,
            spaceBetween: 7,
        };
        this.trip_id = activatedRoute.snapshot.paramMap.get('id');
        this.category.form = "cat1";
        this.category1.form = "breed1";
        this.category2.form = "service1";
    }
    ngOnInit() {
        this.id = localStorage.getItem('user_auth_id');
    }
    ionViewDidEnter() {
        this.id = localStorage.getItem('user_auth_id');
        this.trip_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getdata();
        this.loadMap();
    }
    ngAfterContentInit() {
    }
    getdata() {
        this.trips = [];
        this.images = [];
        this.userService.postData({ _id: this.id, trip_id: this.trip_id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_trip_detail').subscribe((result) => {
            console.log("trip detail-->", result.data);
            var thiss = this;
            this.places_data = result.data;
            jquery__WEBPACK_IMPORTED_MODULE_4__.each(result.data, function (key, val) {
                console.log("val--->", val);
                if (val.trip.trip_id == "0") {
                    console.log("ander>>>");
                    thiss.main_trip = val.trip;
                    thiss.lat = Number(thiss.main_trip.lat);
                    thiss.lng = Number(thiss.main_trip.lng);
                    thiss.map_title = thiss.main_trip.trip_name;
                    thiss.trip_auth_id = thiss.main_trip.userId;
                    if (thiss.main_trip.userId == thiss.id) {
                        thiss.add_button_show = 1;
                    }
                }
                else {
                    console.log('-----', val.trip);
                    let datas = {};
                    jquery__WEBPACK_IMPORTED_MODULE_4__.each(val.trip, function (key, value) {
                        datas[key] = value;
                    });
                    datas['count'] = val.count;
                    thiss.trips.push(datas);
                    console.log('-----', thiss.trips);
                }
                jquery__WEBPACK_IMPORTED_MODULE_4__.each(val.trip.images, function (ky, vl) {
                    thiss.images.push(vl);
                });
            });
            // this.loadMap();
            this.getprofiledata();
            this.displayGoogleMap();
        });
    }
    getprofiledata() {
        this.userService.postData({ _id: this.trip_auth_id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_user_profile_detail').subscribe((result) => {
            this.profile_data = result;
            console.log("profile data-->1", this.profile_data);
        });
    }
    add_trips_main(trip_id, index) {
        var start_date = this.main_trip.start_date;
        var start_time = this.main_trip.Start_time;
        console.log(start_date, start_time);
        let data = {
            start_date: start_date,
            start_time: start_time,
            trip_id: this.main_trip._id,
            status: this.main_trip.status
        };
        if (this.trips.length > 0) {
            var end_date = this.trips[0].start_date;
            var end_time = this.trips[0].Start_time;
            data['end_date'] = end_date;
            data['end_time'] = end_time;
        }
        localStorage.setItem('add_trip_data', JSON.stringify(data));
        this.router.navigate(['/add-trip-mid']);
    }
    add_trips_main_edit(trip_id, index, url) {
        //let count:number=0;
        let count = index;
        let indexs = count + 1;
        console.log('current index = ', index);
        console.log('next index = ', indexs);
        var start_date = this.trips[index].start_date;
        var start_time = this.trips[index].Start_time;
        let data = {
            start_date: start_date,
            start_time: start_time,
            trip_id: this.main_trip._id,
            status: this.main_trip.status
        };
        //console.log('this.trips[index++] === ', this.trips[index++]);
        //console.log('this.trips[index++].start_date === ', this.trips[index++].start_date);
        if (this.trips[indexs] != undefined && this.trips[indexs].start_date != undefined) {
            var end_date = this.trips[indexs].start_date;
            var end_time = this.trips[indexs].Start_time;
            data["end_date"] = end_date;
            data["end_time"] = end_time;
        }
        else {
            data["end_date"] = "";
            data["end_time"] = "";
        }
        console.log('data == ', data);
        localStorage.setItem('add_trip_data', JSON.stringify(data));
        this.router.navigate([url]);
    }
    add_trips(trip_id, index) {
        let count = index;
        let indexs = count + 1;
        var start_date = this.trips[index].start_date;
        var start_time = this.trips[index].Start_time;
        let data = {
            start_date: start_date,
            start_time: start_time,
            trip_id: this.main_trip._id,
            status: this.main_trip.status
        };
        //console.log('this.trips[index++] === ', this.trips[index++]);
        //console.log('this.trips[index++].start_date === ', this.trips[index++].start_date);
        if (this.trips[indexs] != undefined && this.trips[indexs].start_date != undefined) {
            var end_date = this.trips[indexs].start_date;
            var end_time = this.trips[indexs].Start_time;
            data["end_date"] = end_date;
            data["end_time"] = end_time;
        }
        else {
            data["end_date"] = "";
            data["end_time"] = "";
        }
        console.log('data == ', data);
        localStorage.setItem('add_trip_data', JSON.stringify(data));
        this.router.navigate(['/add-trip-mid']);
    }
    /*loadMap(){
       console.log('load map ', this.main_trip);
        
        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          {
            center: {lat: this.lat, lng: this.lng},
            zoom: 8
          });
  
  
  
         var marker = new google.maps.Marker({
        position: {lat: this.lat, lng: this.lng},
        title:this.map_title
        });
  
        // To add the marker to the map, call setMap();
        marker.setMap(this.map);
      
    }*/
    loadMap() {
        console.log("one-->");
        //FIRST GET THE LOCATION FROM THE DEVICE.
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log("loadmap-->", this.lat, '-->', this.lng);
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            let latLng = new google.maps.LatLng(this.lat, this.lng);
            let mapOptions = {
                center: {
                    lat: this.lat,
                    lng: this.lng
                },
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
            // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude); 
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            var placesService = new google.maps.places.PlacesService(this.map);
            console.log('placesss ', placesService);
            let marker = new google.maps.Marker({
                position: latLng,
                title: 'Biratnagar, Janpath-15',
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            });
            // this.addInfoWindow(marker, content);
            marker.setMap(this.map);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    /********************** Map with multiple markers ***************/
    displayGoogleMap() {
        //  const latLng = new google.maps.LatLng(28.6117993, 77.2194934);
        const latLng = new google.maps.LatLng(this.places_data[0].trip.lat, this.places_data[0].trip.weather.location.lon);
        console.log("display google map-->", latLng);
        const mapOptions = {
            center: latLng,
            disableDefaultUI: true,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            this.getMarkers();
            this.mapElement.nativeElement.classList.add('show-map');
        });
    }
    getMarkers() {
        // tslint:disable-next-line:variable-name
        for (let _i = 0; _i < this.places_data.length; _i++) {
            //if (_i > 0) {
            this.addMarkersToMap(this.places_data[_i].trip);
            // }
        }
    }
    addMarkersToMap(museum) {
        console.log(museum.lat + '---,---' + museum.weather.location.lon);
        const position = new google.maps.LatLng(museum.lat, museum.weather.location.lon);
        if (museum.images.length == 0) {
            const contentString = '<div id="content">' +
                '<h1 id="firstHeading" class="firstHeading">' + museum.location.name + '</h1> <div id="bodyContent"><p>' + museum.location.name + '</p><p>Link: ' + museum.location.name + ', <a href="' + museum.location.map_url + '" target="_blank">' + museum.location.map_url +
                '(' + museum.location.location + ').</p></div></div>';
            const infoWindow = new google.maps.InfoWindow({
                content: contentString,
            });
            const museumMarker = new google.maps.Marker({ position, title: museum.location.name });
            museumMarker.addListener("click", () => {
                infoWindow.close();
                infoWindow.setContent(contentString);
                infoWindow.open(museumMarker.getMap(), museumMarker);
            });
            museumMarker.setMap(this.map);
        }
        else {
            const contentString = '<div id="content">' +
                '<h1 id="firstHeading" class="firstHeading">' + museum.location.name + '</h1> <img src="' + this.IMAGES_URL_All + '/trips/' + museum.images[0] + '"/> <div id="bodyContent"><p>' + museum.location.name + '</p><p>Link: ' + museum.location.name + ', <a href="' + museum.location.map_url + '" target="_blank">' + museum.location.map_url +
                '(' + museum.location.location + ').</p></div></div>';
            const infoWindow = new google.maps.InfoWindow({
                content: contentString,
            });
            const museumMarker = new google.maps.Marker({ position, title: museum.location.name });
            museumMarker.addListener("click", () => {
                infoWindow.close();
                infoWindow.setContent(contentString);
                infoWindow.open(museumMarker.getMap(), museumMarker);
            });
            museumMarker.setMap(this.map);
        }
        //const infoWindow = new google.maps.InfoWindow();
        console.log('done');
    }
    shareit(name) {
        const div = document.getElementById('printable-area');
        const options = { background: 'white', height: 845, width: 595 };
        dom_to_image__WEBPACK_IMPORTED_MODULE_10___default().toPng(div, options).then((dataUrl) => {
            var docDefinition = {
                content: [{
                        image: dataUrl,
                        width: 500,
                    }]
            };
            //  pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
            this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default().createPdf(docDefinition);
            if (this.plt.is('cordova')) {
                this.pdfObj.getBase64((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        let path = `pdf/paymentdetail_${Date.now()}.pdf`;
                        const result = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__.Filesystem.writeFile({
                            path,
                            data,
                            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__.Directory.Documents,
                            recursive: true
                        });
                        console.log('path === ', path, result.uri);
                        //this.fileOpener.open(`${result.uri}`,'application/pdf')
                    }
                    catch (e) {
                        console.error('Unable to write file', e);
                    }
                }));
            }
            else {
                //this.pdfObj.download("payment_Details.pdf");
            }
        });
        return;
        /*************************************************************************************/
        this.userService.postData({ name: name, url: 'trip-details/' + this.trip_id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/create_branch_link').subscribe((resultsss) => {
            var options = {
                Message: name,
                url: resultsss.data
            };
            console.log(resultsss);
            var onSuccess = function (result) {
                console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
                console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
            };
            var onError = function (msg) {
                console.log("Sharing failed with message: " + msg);
            };
            this.socialSharing.shareWithOptions(options).then(() => {
                // Success!
                console.log('socila sharing is working');
            }).catch((error) => {
                // Error!
                console.log('error == ', error);
            });
        });
    }
    shareit2(name) {
        const div = document.getElementById('printable-area');
        const options = { background: 'white', height: 845, width: 595 };
        dom_to_image__WEBPACK_IMPORTED_MODULE_10___default().toPng(div, options).then((dataUrl) => {
            var docDefinition = {
                content: [{
                        image: dataUrl,
                        width: 500,
                    }]
            };
            //  pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
            this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default().createPdf(docDefinition);
            if (this.plt.is('cordova')) {
                this.pdfObj.getBase64((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        let path = `pdf/paymentdetail_${Date.now()}.pdf`;
                        const result = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__.Filesystem.writeFile({
                            path,
                            data,
                            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__.Directory.Documents,
                            recursive: true
                        });
                        console.log('path === ', path, result.uri);
                        //this.fileOpener.open(`${result.uri}`,'application/pdf')
                        var options = {
                            Message: name + '2222',
                            url: result.uri
                        };
                        this.socialSharing.shareWithOptions(options).then(() => {
                            // Success!
                            console.log('socila sharing is working');
                        }).catch((error) => {
                            // Error!
                            console.log('error == ', error);
                        });
                    }
                    catch (e) {
                        console.error('Unable to write file', e);
                    }
                }));
            }
            else {
                //this.pdfObj.download("payment_Details.pdf");
            }
        });
    }
    shareit3(name) {
        const div = document.getElementById('printable-area');
        const options = { background: 'white', height: 845, width: 595 };
        dom_to_image__WEBPACK_IMPORTED_MODULE_10___default().toPng(div, options).then((dataUrl) => {
            var docDefinition = {
                content: [{
                        image: dataUrl,
                        width: 500,
                    }]
            };
            //  pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
            this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default().createPdf(docDefinition);
            if (this.plt.is('cordova')) {
                this.pdfObj.getBase64((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        let path = `pdf/paymentdetail_${Date.now()}.pdf`;
                        const result = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__.Filesystem.writeFile({
                            path,
                            data,
                            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__.Directory.Documents,
                            recursive: true
                        });
                        console.log('path === ', path, result.uri);
                        const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__.Filesystem.readFile({
                            path: result.uri
                        });
                        console.log('data:', contents);
                        //this.fileOpener.open(`${result.uri}`,'application/pdf')
                        var options = {
                            Message: name + '333',
                            url: path
                        };
                        this.socialSharing.shareWithOptions(options).then(() => {
                            // Success!
                            console.log('socila sharing is working');
                        }).catch((error) => {
                            // Error!
                            console.log('error == ', error);
                        });
                    }
                    catch (e) {
                        console.error('Unable to write file', e);
                    }
                }));
            }
            else {
                //this.pdfObj.download("payment_Details.pdf");
            }
        });
    }
    shareit4(name) {
        this.userService.presentLoading();
        const div = document.getElementById('printable-area');
        const options = { background: 'white', height: 845, width: 595 };
        dom_to_image__WEBPACK_IMPORTED_MODULE_10___default().toPng(div, options).then((dataUrl) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            var docDefinition = {
                content: [{
                        image: dataUrl,
                        width: 500,
                    }]
            };
            //  pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
            const pdfDocGenerator = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default().createPdf(docDefinition);
            pdfDocGenerator.getDataUrl((dataUrl) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                const fileName = `paymentdetail_${Date.now()}.pdf`;
                const fileDirectory = _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__.Directory.Cache;
                const pdfData = dataUrl.split(',')[1]; // remove the 'data:application/pdf;base64,' prefix
                yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__.Filesystem.writeFile({
                    path: fileName,
                    data: pdfData,
                    directory: fileDirectory,
                    recursive: true,
                }).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
                    const fileUri = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_9__.Filesystem.readFile({
                        path: res.uri,
                        directory: fileDirectory,
                    }).then((res) => {
                        console.log("response ========>", res);
                    });
                    // this.fileOpener.open(fileUri, 'application/pdf')
                    //   .then(() => console.log('File is opened'))
                    //   .catch(err => console.error('Error opening file:', err));
                }));
                // console.log("before read file uril", `${fileDirectory}/${fileName}`);
                // console.log("fileUri =====>", fileUri);
            }));
            this.userService.stopLoading();
            // this.fileOpener.open(pdfData, 'application/pdf')
            //     .then(() => console.log('File is opened'))
            //     .catch(err => console.error('Error opening file:', err));
            // if (this.plt.is('cordova')) {
            //   this.pdfObj.getBase64(async (data) => {
            //     try {
            //       let path = `pdf/paymentdetail_${Date.now()}.pdf`;
            //       const result = await Filesystem.writeFile({
            //         path,
            //         data,
            //         directory: Directory.Documents,
            //         recursive: true
            //       });
            //       console.log('path === ', path, result.uri);
            //       this.userService.stopLoading();
            //       this.fileOpener.open(`${result.uri}`, 'application/pdf');
            //       return;
            //     } catch (e) {
            //       console.error('Unable to write file', e);
            //     }
            //   });
            // } else {
            //   //this.pdfObj.download("payment_Details.pdf");
            // }
        }));
    }
    shareit5(name) {
        const div = document.getElementById('printable-area2');
        const options = { background: 'white', height: 845, width: 595 };
        dom_to_image__WEBPACK_IMPORTED_MODULE_10___default().toPng(div, options).then((dataUrl) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            var docDefinition = {
                content: [{
                        image: dataUrl,
                        width: 500,
                    }]
            };
            const pdfDocGenerator = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default().createPdf(docDefinition);
            const pdfData = yield pdfDocGenerator.getBlobUrl();
            console.log("pafData", pdfData);
            // if (this.plt.is('cordova')) {
            // this.fileOpener.open(pdfData, 'application/pdf')
            //   .then(() => console.log('File is opened'))
            //   .catch(err => console.error('Error opening file:', err));
            // this.pdfObj.getBase64(async (data) => {
            //   try {
            //     let path = `pdf/paymentdetail_${Date.now()}.pdf`;
            //     const result = await Filesystem.writeFile({
            //       path,
            //       data,
            //       directory: Directory.Documents,
            //       recursive: true
            //     });
            //     console.log('path === ', path, result.uri);
            //     this.fileOpener.open(`${result.uri}`,'application/pdf')
            //     var options = {
            //       Message: name + '333',
            //       url: path
            //     };
            //     this.socialSharing.shareWithOptions(options).then(() => {
            //       // Success!
            //       console.log('socila sharing is working');
            //     }).catch((error) => {
            //       // Error!
            //       console.log('error == ', error);
            //     });
            //   } catch (e) {
            //     console.error('Unable to write file', e);
            //   }
            // });
            // } else {
            //this.pdfObj.download("payment_Details.pdf");
            // }
        }));
    }
    submits(trip_id) {
        this.userService.presentLoading();
        this.userService.postData({ _id: trip_id }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/update_trip_status').subscribe((result) => {
            this.userService.stopLoading();
            this.getdata();
        }, err => {
            this.userService.stopLoading();
            this.userService.presentToast('Failed to send request. Please try again', 'danger');
        });
    }
};
TripDetailsPage.ctorParameters = () => [
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.NgZone },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__.SocialSharing },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__.FileOpener }
];
TripDetailsPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: ['map', { static: false },] }]
};
TripDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-trip-details',
        template: _raw_loader_trip_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_trip_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TripDetailsPage);



/***/ }),

/***/ 84432:
/*!*****************************************************!*\
  !*** ./src/app/trip-details/trip-details.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content[bg-grey] {\n  background: #f9f9f9;\n  --background:#f9f9f9;\n}\nion-content[bg-grey] .contet-sect {\n  padding: 25px 20px 10px;\n  display: block;\n}\nion-content[bg-grey] .top-sctin {\n  position: relative;\n  padding: 15px;\n  background: #e7eaea;\n  padding-bottom: 70px;\n  margin-bottom: -45px;\n  background-size: cover;\n  background-position: center bottom;\n  z-index: 0;\n  width: 100%;\n}\nion-content[bg-grey] .top-sctin .hedr-src {\n  padding: 0 0 5px;\n  display: flex;\n  font-size: 18px;\n  color: #4c4c4c;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content[bg-grey] .top-sctin .hedr-src .men-ico {\n  display: flex;\n  align-items: center;\n}\nion-content[bg-grey] .top-sctin .hedr-src .men-ico img {\n  width: 22px;\n}\nion-content[bg-grey] .top-sctin .hedr-src .cart-ico {\n  float: right;\n  color: #fff;\n  font-size: 26px;\n  position: relative;\n  top: -2px;\n}\nion-content[bg-grey] .top-sctin .hedr-src label.ttl-al {\n  color: #4c4c4c;\n  font-size: 16px;\n  position: relative;\n  top: 0;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\nion-content[bg-grey] .top-sctin .cont-he {\n  text-align: center;\n  color: #fff;\n  padding: 0 10px;\n}\nion-content[bg-grey] .top-sctin .cont-he h4.ttl-man {\n  margin-bottom: 0px;\n  font-size: 30px;\n}\nion-content[bg-grey] .top-sctin .cont-he p {\n  margin-top: 6px;\n  font-size: 17px;\n  color: rgba(255, 255, 255, 0.768627451);\n  line-height: 22px;\n}\nion-content[bg-grey] .top-sctin:after {\n  content: \"\";\n  position: absolute;\n  background: url('map.png');\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  z-index: -1;\n  opacity: 0.1;\n}\nion-content[bg-grey] .slids-box {\n  margin-right: -20px;\n  margin-top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly {\n  display: block;\n  width: 100%;\n  height: 135px;\n  border-radius: 0px;\n  overflow: hidden;\n  position: relative;\n}\nion-content[bg-grey] .slids-box .img-bx-sly img {\n  width: 100%;\n  height: 230px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number {\n  position: absolute;\n  bottom: 10px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly h4.name-ffls {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: #fff;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 15px;\n  background: linear-gradient(to top, #000000, #00000000);\n  line-height: 19px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis {\n  height: auto;\n  background: #fff;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis img {\n  width: 100%;\n  height: 275px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis h4.tlt-stor {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n  width: 100%;\n  font-size: 14px;\n  margin: 0px;\n  padding: 5px 10px 12px;\n  color: #000;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.likes-number {\n  bottom: auto;\n  bottom: initial;\n  top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box.new-box-a {\n  position: relative;\n  margin: 0px;\n  height: 210px;\n}\nion-content[bg-grey] .slids-box.new-box-a .slidr-ims-st img {\n  height: 210px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .top-useer-s {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  padding: 18px 20px;\n  padding-left: 60px;\n  color: #fff;\n  background: linear-gradient(to top, #00000000, #000000b0);\n  padding-bottom: 40px;\n  line-height: 15px;\n}\nion-content[bg-grey] .top-useer-s img.adm-usr {\n  width: 40px !important;\n  height: 40px !important;\n  border-radius: 50%;\n  position: absolute;\n  left: 10px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\nion-content[bg-grey] .top-useer-s h5 {\n  margin: 0px;\n  font-size: 15px;\n  margin-top: 2px;\n}\nion-content[bg-grey] .top-useer-s span.time-al {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.73);\n}\nion-content[bg-grey] span.livestm-dot {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  background: #F44336;\n  bottom: 10px;\n  right: 7px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.31);\n  background: radial-gradient(circle at 12px 12px, #f77e75, #F44336);\n}\nion-content[bg-grey] .content-all-pst {\n  padding: 7px 20px 20px;\n  /* margin-top: -35px; */\n  background: #fff;\n  z-index: 111;\n  background-color: #fff !important;\n  position: relative;\n  /* border-radius: 20px 20px 0 0;\n  box-shadow: 0px -20px 20px rgba(0, 0, 0, 0.28); */\n  min-height: 100%;\n}\nion-content[bg-grey] .content-all-pst h4.ttl-main {\n  font-size: 16px;\n}\nion-content[bg-grey] .content-all-pst p {\n  font-size: 14px;\n  color: #8a8a8a;\n  font-weight: 300;\n  letter-spacing: 0.2px;\n  line-height: 23px;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\nion-content[bg-grey] .content-all-pst .commnts {\n  position: relative;\n  padding-left: 53px;\n  z-index: 11;\n  margin-top: 20px;\n  min-height: 56px;\n  display: block;\n}\nion-content[bg-grey] .content-all-pst .commnts img.adm-usr {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  left: 0;\n  border-radius: 50%;\n  border: 1px solid rgba(112, 181, 255, 0.74);\n  /* box-shadow: 0px 4px 14px rgba(4, 158, 102, 0.18); */\n  top: 0px;\n}\nion-content[bg-grey] .content-all-pst .commnts h5 {\n  font-size: 14px;\n  margin: 0px;\n  color: #30D5C8;\n  font-weight: 500;\n}\nion-content[bg-grey] .content-all-pst .commnts h5 span.time-al {\n  float: right;\n  font-size: 10px;\n  color: #b5b5b5;\n}\nion-content[bg-grey] .content-all-pst .commnts p {\n  font-size: 12px;\n  line-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 0px;\n}\nion-content[bg-grey] .mt-20 {\n  margin-top: 20px !important;\n}\nion-content[bg-grey] .add-commnt {\n  position: relative;\n  margin-top: 15px;\n  padding-right: 54px;\n}\nion-content[bg-grey] .add-commnt ion-input {\n  background: #f9f9f9;\n  --padding: 14px;\n  --padding-start: 20px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-size: 14px;\n  color: #000;\n  --border-radius: 50px;\n  border-radius: 50px;\n  border: 1px solid #f3f3f3;\n  height: 45px;\n}\nion-content[bg-grey] .add-commnt a.btn-send {\n  width: 45px;\n  height: 45px;\n  background: var(--ion-color-gradient1);\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 19px;\n}\nion-content[bg-grey] .conts-slder {\n  position: absolute;\n  bottom: 0;\n  z-index: 11;\n  background: linear-gradient(to top, black, transparent);\n  left: 0;\n  right: 0;\n  color: #fff;\n  padding: 15px;\n}\nion-content[bg-grey] .conts-slder h4 {\n  font-size: 18px;\n  margin-bottom: 7px;\n  font-weight: 500;\n}\nion-content[bg-grey] .conts-slder ul.rating-all {\n  padding: 0px;\n  margin: 0px;\n  display: block;\n  list-style: none;\n}\nion-content[bg-grey] .conts-slder ul.rating-all li {\n  display: inline-block;\n  margin-right: 2px;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\nion-content[bg-grey] .conts-slder ul.rating-all li.oprn-trsa {\n  background: #8BC34A;\n  color: #fff !important;\n  padding: 3px 8px 3px 8px;\n  font-size: 11px !important;\n  font-weight: 500;\n  border-radius: 50px;\n  letter-spacing: 0.5px;\n  opacity: 1 !important;\n  margin-left: 6px;\n  position: relative;\n  top: -1px;\n}\nion-content[bg-grey] .conts-slder ul.rating-all li.active {\n  color: #FFC107;\n}\nion-content[bg-grey] .conts-slder ul.rating-all li.totl-rv {\n  margin-left: 7px;\n  color: #fff;\n  font-size: 12px;\n  vertical-align: top;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  position: relative;\n  top: 2px;\n}\nion-content[bg-grey] span.opn-cl {\n  position: absolute;\n  right: 0;\n  bottom: 25px;\n  z-index: 11111;\n  background: linear-gradient(to right, #FF5722, #FFC107);\n  color: #fff;\n  padding: 5px 10px 5px 14px;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 50px 0 0 50px;\n  letter-spacing: 0.5px;\n}\nion-content[bg-grey] span.opn-cl ion-icon {\n  font-size: 16px;\n  vertical-align: text-bottom;\n}\nion-content[bg-grey] span.favor-icn {\n  width: 35px;\n  height: 35px;\n  background: rgba(255, 255, 255, 0.3);\n  position: absolute;\n  left: 15px;\n  z-index: 1;\n  border-radius: 50%;\n  line-height: 42px;\n  text-align: center;\n  color: #f1f1f1;\n  font-size: 19px;\n  top: 13px;\n}\nion-content[bg-grey] .specilis .slide {\n  width: 100%;\n}\nion-content[bg-grey] .specilis .artict-str {\n  background: #fff;\n  padding: 10px 7px;\n  border: 1px solid #f1f1f1;\n  border-radius: 7px;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.06);\n  margin-bottom: 20px;\n}\nion-content[bg-grey] .specilis .artict-str img.img-ua {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: 1px solid #70b5ff;\n  padding: 2px;\n  margin-top: 2px;\n}\nion-content[bg-grey] .specilis .artict-str h5 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 5px;\n  margin-bottom: 3px;\n}\nion-content[bg-grey] .specilis .artict-str p {\n  margin: 0px;\n  font-size: 12px;\n  color: #b3b3b3;\n}\nion-content[bg-grey] .specilis {\n  padding: 0 0 5px 15px;\n}\nion-content[bg-grey] .specilis h4.ttl-main {\n  font-size: 18px;\n}\nion-content[bg-grey] ul.open-hrs {\n  margin: 0px;\n  padding: 0px;\n  margin-top: -3px;\n  list-style: none;\n}\nion-content[bg-grey] ul.open-hrs li {\n  font-size: 14px;\n  color: #8a8a8a;\n  padding: 7px 0;\n  display: block;\n  position: relative;\n  z-index: 0;\n}\nion-content[bg-grey] ul.open-hrs li span {\n  background: #fff;\n  padding-right: 5px;\n}\nion-content[bg-grey] ul.open-hrs li span.right-ts {\n  float: right;\n  color: #222;\n  font-weight: 500;\n  padding-left: 5px;\n  padding-right: 0px;\n}\nion-content[bg-grey] ul.open-hrs li:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.13);\n  z-index: -1;\n  top: 15px;\n}\nion-content[bg-grey] p.loct ion-icon {\n  vertical-align: text-bottom;\n  font-size: 16px;\n  color: #777;\n}\nion-content[bg-grey] .gg-map {\n  flex: 0 0 50%;\n}\nion-content[bg-grey] .gg-map iframe {\n  border: 0;\n  height: 100%;\n}\nion-content[bg-grey] h4.ttl-main.tct-btn {\n  margin-bottom: 15px;\n  font-size: 18px !important;\n}\nion-content[bg-grey] a.btn-cat {\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  font-size: 16px;\n  border-radius: 50%;\n  text-align: center;\n  position: absolute;\n  bottom: 18px;\n  z-index: 111;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  line-height: 34px;\n  font-size: 14px;\n  right: 15px;\n  margin: 0px;\n}\nion-content[bg-grey] a.btn-pho {\n  float: right;\n  background: linear-gradient(to right, #FF9800, #FF5722);\n  color: #fff;\n  border-radius: 50%;\n  text-align: center;\n  margin-right: 8px;\n  position: absolute;\n  top: 13px;\n  z-index: 111;\n  right: 0;\n  width: 35px;\n  height: 35px;\n  line-height: 41px;\n  font-size: 18px;\n  right: 52px;\n  margin: 0px;\n}\nion-content[bg-grey] .srv-box {\n  position: relative;\n  padding: 10px;\n  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03); */\n  margin-bottom: 12px;\n  border: 1px solid #f9f9f9;\n  border-radius: 7px;\n  background: #f9f9f9;\n  padding-left: 70px;\n  display: flex;\n  justify-content: space-between;\n  min-height: 70px;\n  align-items: center;\n}\nion-content[bg-grey] .srv-box span.icon-srv {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  left: 10px;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 10px;\n}\nion-content[bg-grey] .srv-box span.icon-srv img {\n  width: 28px;\n}\nion-content[bg-grey] .srv-box span.srv-t {\n  font-size: 9px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  color: #c3c3c3;\n}\nion-content[bg-grey] .srv-box span.srv-t h5 {\n  margin: 0px;\n  margin-top: 6px;\n  font-size: 15px;\n  color: #222;\n  font-weight: 500;\n}\nion-content[bg-grey] .srv-box.selected {\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  color: #fff;\n}\nion-content[bg-grey] .srv-box.selected span.icon-srv {\n  background: #fff;\n}\nion-content[bg-grey] .srv-box.selected span.icon-srv img {\n  filter: invert(0.3);\n}\nion-content[bg-grey] .srv-box.selected span.srv-t {\n  color: rgba(255, 255, 255, 0.81);\n}\nion-content[bg-grey] .srv-box.selected span.srv-t h5 {\n  color: #fff;\n}\nion-content[bg-grey] .srv-box.selected span.select-check {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  display: block;\n}\n.add-rev {\n  /* margin: 0 -20px; */\n  position: relative;\n  z-index: 111;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #f3f3f3;\n  padding-bottom: 25px;\n}\nul.add-rat-all {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n  float: right;\n}\nul.add-rat-all li {\n  display: inline-block;\n  font-size: 14px;\n  margin-left: 2px;\n  color: #c7c7c7;\n}\nul.add-rat-all li.active {\n  color: #FFC107;\n}\nul.add-rat-all.all-rtsa {\n  position: absolute;\n  top: 39px;\n  left: 0px;\n}\nul.add-rat-all.all-rtsa li {\n  font-size: 8px !important;\n  margin: 0px !important;\n}\nion-footer.foot-book {\n  padding: 15px 20px;\n  box-shadow: 0px -7px 15px rgba(0, 0, 0, 0.08);\n  z-index: 1111;\n}\nion-footer.foot-book ion-button.btn-login {\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  --background-color: transparent;\n  --background: linear-gradient(to right, #6fcdff, #70b0ff);\n  border: none;\n  --border: none;\n  box-shadow: 0 10px 25px rgba(112, 177, 255, 0.15);\n  border-radius: 50px;\n  --border-radius: 50px;\n  overflow: hidden;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 1px;\n  height: 46px;\n  margin: 0px;\n}\n.specilis h4.ttl-main {\n  margin-bottom: 15px;\n}\n.specilis h4.ttl-main span.report-txt {\n  float: right;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  background: #F44336;\n  padding: 5px 10px;\n  margin-top: -2px;\n  border-radius: 50px 0 0 50px;\n}\n.specilis h4.ttl-main span.report-txt ion-icon {\n  vertical-align: text-bottom;\n}\nion-segment.segmt-details ion-segment-button {\n  font-size: 14px;\n}\n.box-servc {\n  position: relative;\n  background: #f9f9f9;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 18px;\n  padding-left: 107px;\n  min-height: 110px;\n  display: flex;\n  align-items: center;\n}\n.box-servc .img-b {\n  position: absolute;\n  left: 0;\n  width: 110px;\n  height: 100%;\n}\n.box-servc .img-b img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.box-servc .img-b:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.05);\n  z-index: 0;\n}\n.box-servc .img-b span.badg-catr {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 10px;\n  background: linear-gradient(to top left, #6fcdff, #70b0ff);\n  padding: 5px 12px 5px 12px;\n  color: #fff;\n  text-transform: capitalize;\n  text-decoration: none;\n  border-radius: 50px;\n  font-weight: 500;\n  z-index: 11;\n  letter-spacing: 0.5px;\n}\n.box-servc .img-b span.date-icn {\n  width: 40px;\n  height: 40px;\n  background: linear-gradient(to right, #8c8c8c, #000000);\n  color: #fff;\n  font-family: \"Ubuntu\", sans-serif !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  z-index: 11;\n  left: 0;\n}\n.box-servc .img-b span.date-icn small {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.82);\n  font-weight: 400;\n  letter-spacing: 0.5px;\n}\n.box-servc .cot-a {\n  text-align: left;\n  position: relative;\n  padding: 10px 14px;\n  height: 100%;\n  width: 100%;\n}\n.box-servc .cot-a h4 {\n  margin: 0px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #3a3a3a;\n  margin-bottom: 3px;\n}\n.box-servc .cot-a h4 span.right-price {\n  float: right;\n  color: #70b1ff;\n}\n.box-servc .cot-a ul.rating-all {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: block;\n  margin-top: 3px;\n  margin-bottom: 8px;\n}\n.box-servc .cot-a ul.rating-all li {\n  display: inline-block;\n  font-size: 13px;\n  margin-right: 2px;\n  color: #c3c3c3;\n}\n.box-servc .cot-a ul.rating-all li.active {\n  color: #f8c50a;\n}\n.box-servc .cot-a ul.rating-all li.totl-rv {\n  color: #000000;\n  font-weight: 600;\n  position: relative;\n  margin-right: 0px;\n  margin-left: 3px;\n  top: -1px;\n  font-size: 12px;\n}\n.box-servc .cot-a p {\n  margin: 0px !important;\n  font-size: 13px !important;\n  line-height: 22px !important;\n}\n.box-servc .cot-a p ion-icon {\n  vertical-align: bottom;\n  font-size: 16px;\n}\n.box-servc .cot-a p.b-price {\n  font-size: 14px;\n  color: #6fb2fd;\n  margin-top: 8px;\n  margin-bottom: 0px;\n}\n.box-servc.selected {\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  color: #fff;\n}\n.box-servc.selected .cot-a h4 {\n  color: #fff;\n}\n.box-servc.selected .cot-a p {\n  color: rgba(255, 255, 255, 0.7);\n}\n.box-servc.selected .cot-a p.b-price {\n  color: #fff;\n}\n.box-servc.selected span.select-check {\n  position: absolute;\n  top: 11px;\n  right: 7px;\n  font-size: 18px;\n}\nspan.off-dis {\n  position: absolute;\n  top: 18px;\n  z-index: 11;\n  background: linear-gradient(to right, #3F51B5, #F44336);\n  padding: 5px 10px 5px 6px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n  border-radius: 0 50px 50px 0;\n}\n.img-b-sta {\n  position: relative;\n  margin-top: 5px;\n  margin-bottom: 35px;\n}\n.img-b-sta img {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n  border: 1px solid rgba(118, 187, 253, 0.28);\n  padding: 2px;\n}\n.img-b-sta span.dle-im {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: linear-gradient(to top left, #F44336, #E91E63);\n  color: #fff;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.cont-slydt {\n  display: flex;\n  background: #ececec;\n  border-radius: 7px;\n  margin-top: 15px;\n  overflow: hidden;\n}\n.cont-slydt .add-cit {\n  padding: 15px;\n  flex: 0 0 50%;\n  color: #222;\n  font-size: 12px;\n}\n.cont-slydt .add-cit p.loct {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  color: #222;\n}\n.cont-slydt .add-cit h5 {\n  font-size: 15px;\n  margin: 0px;\n  margin-bottom: 6px;\n  font-weight: 700;\n}\n.cont-slydt .add-cit p.longt {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 19px;\n  color: #222;\n  border-bottom: 1px solid #d8d8d8;\n  padding-bottom: 10px;\n}\n.cont-slydt .add-cit a.bt-syys {\n  display: inline-block;\n  background: var(--ion-color-gradient1);\n  padding: 4px 13px;\n  border-radius: 50px;\n  font-size: 11px;\n  color: #fff;\n  text-decoration: none;\n  font-weight: 600;\n}\nul.features-fsc {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  display: block;\n}\nul.features-fsc li {\n  display: inline-block;\n}\nul.features-fsc li span {\n  font-size: 10px;\n  background: #dcefed;\n  color: #13b0a3;\n  padding: 2px 10px;\n  margin: 2px 2px;\n  display: inline-block;\n  border-radius: 50px;\n  font-weight: 600;\n  border: 1px solid #a8e4df;\n}\n.slidrs.appoints {\n  margin-bottom: -15px;\n}\n.slidrs.appoints .slide {\n  width: 100%;\n  margin-bottom: 40px;\n}\n.slidrs.appoints .slide .vcotr {\n  text-align: center;\n  background: #f7f7f7;\n  padding: 12px;\n  border-radius: 5px;\n}\n.slidrs.appoints .slide .vcotr h5 {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.slidrs.appoints .slide .vcotr img {\n  width: 60px;\n  height: 60px;\n  background: var(--ion-color-gradient1);\n  padding: 10px;\n  border-radius: 50%;\n}\n.slidrs.appoints .slide .vcotr p {\n  margin: 0px;\n  color: #737373;\n  font-size: 13px;\n  font-weight: 400;\n}\n.slidrs.appoints .slide .vcotr p.tsmr {\n  font-size: 12px;\n  margin: 0px;\n  font-weight: 500;\n  color: #12afa2;\n}\n.slidrs.appoints .slide .vcotr p.tsmr span {\n  font-weight: 700;\n  color: #f44336;\n}\nion-segment.segmt-desig {\n  margin-bottom: 0px;\n  margin-top: 20px;\n  border-radius: 50px;\n  background: rgba(255, 255, 255, 0.75);\n  padding: 2px 3px;\n}\nion-segment.segmt-desig ion-segment-button {\n  font-family: \"Ubuntu\", sans-serif !important;\n  padding: 5px;\n  border-radius: 50px !important;\n  --border-radius: 50px !important;\n  height: 38px;\n  min-height: 38px;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 500;\n  color: #4267B2;\n  padding: 0px;\n  --border-radius: 50px !important;\n  overflow: hidden;\n}\nion-segment.segmt-desig ion-segment-button.segment-button-checked.ion-activatable {\n  background: var(--ion-color-gradient1) !important;\n  --background: var(--ion-color-gradient1) !important;\n  --indicator-color: var(--ion-color-gradient1) !important;\n  box-shadow: none;\n  color: #fff;\n  --indicator-color: transparent!important;\n}\n.flds-login {\n  padding: 0;\n  background: #f9f9f9;\n  z-index: 111;\n  position: relative;\n  border-radius: 20px 20px 0 0;\n  min-height: calc(100vh - 153px);\n  overflow: hidden;\n  box-shadow: 0px -8px 10px rgba(0, 0, 0, 0.04);\n}\n.phot-slides {\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid #f1f1f1;\n  margin-bottom: 0px;\n}\n.phot-slides ul.data-cont {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  padding: 20px 15px;\n}\n.phot-slides ul.data-cont li {\n  font-size: 14px;\n  padding: 8px 0;\n  color: #4c4c4c;\n  font-weight: 600;\n  position: relative;\n  z-index: 0;\n  /* border-bottom: 1px solid #eaeaea; */\n}\n.phot-slides ul.data-cont li:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-bottom: 1px dashed #d6d6d6;\n  top: 18px;\n  z-index: -1;\n}\n.phot-slides ul.data-cont li span {\n  background: #fff;\n  display: inline-block;\n}\n.phot-slides ul.data-cont li span.details-trip {\n  float: right;\n  font-weight: 500;\n}\n.phot-slides ul.data-cont li.descri {\n  padding-top: 2px;\n  font-weight: 400;\n  line-height: 23px;\n}\n.phot-slides ul.data-cont li.descri:before {\n  display: none;\n}\n.flds-login ion-list {\n  --background: transparent;\n  background: transparent;\n}\n.cot-ddr .gg-map {\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  border: 1px solid #f1f1f1;\n  background: #fff;\n}\n.img-het-map {\n  height: 100%;\n  position: relative;\n  min-height: calc(100vh - 138px);\n}\n.img-het-map img.img-st {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: calc(100vh - 138px);\n  width: 100%;\n}\n.cont-usre {\n  position: absolute;\n  top: 0;\n  padding: 20px 20px 60px;\n  background: linear-gradient(to top, transparent, black);\n  padding-left: 85px;\n  left: 0;\n  right: 0;\n  color: #fff;\n}\n.cont-usre img {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  left: 20px;\n}\n.cont-usre h5 {\n  margin: 0px;\n  font-size: 13px;\n  letter-spacing: 1px;\n  margin-top: 4px;\n  color: #d0d0d0;\n}\n.cont-usre h3 {\n  margin: 0px;\n  font-size: 18px;\n  margin-top: 5px;\n}\n.bottom-cont-all {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #f5f5f5;\n  padding: 20px 0px 20px 20px;\n}\n.bottom-cont-all ul.btn-slly {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.bottom-cont-all ul.btn-slly li {\n  display: inline-block;\n  padding-right: 15px;\n  position: relative;\n  z-index: 0;\n  vertical-align: middle;\n  text-align: center;\n  line-height: 10px;\n}\n.bottom-cont-all ul.btn-slly li .home-ison {\n  font-size: 10px;\n  line-height: 12px;\n  color: #b9b9b9;\n  text-decoration: none;\n  font-weight: 600;\n  display: inline-block;\n}\n.bottom-cont-all ul.btn-slly li .home-ison span.icon-s {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #e6ecf9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin-bottom: 7px;\n  color: #4267B2;\n  font-size: 18px;\n  border: 1px solid #a3bbec;\n  margin-top: 21px;\n}\n.bottom-cont-all ul.btn-slly li .home-ison span.plusd-s {\n  font-size: 20px;\n  color: #4267B2;\n}\n.bottom-cont-all ul.btn-slly li:last-child {\n  padding-right: 0px;\n}\n.bottom-cont-all ul.btn-slly > li:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid #c2e2e0;\n  top: calc(50% - 2px);\n  z-index: -1;\n}\n.box-imgsd {\n  position: relative;\n  background: #f9f9f9;\n  border-radius: 5px;\n  overflow: hidden;\n  /*box-shadow: 0px 3px 10px rgba(0 0 0 / 14%);*/\n  box-shadow: rgba 0, 0, 0, 1.4;\n  position: relative;\n}\n.box-imgsd .top-kk {\n  position: relative;\n}\n.box-imgsd .top-kk img.img-bosf0 {\n  width: 150px;\n  height: 90px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.box-imgsd .top-kk .cont-dates {\n  background: linear-gradient(to bottom, transparent, black);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  color: #fff;\n  text-align: left;\n  padding: 10px;\n}\n.box-imgsd .top-kk .cont-dates span.flag-txt {\n  display: block;\n  font-size: 10px;\n  margin-top: 9px;\n}\n.box-imgsd .top-kk .cont-dates span.flag-txt img {\n  width: 17px;\n  vertical-align: middle;\n  margin-right: 3px;\n}\n.box-imgsd ul.list-ll {\n  padding: 0px 6px;\n  margin: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.box-imgsd ul.list-ll li {\n  padding: 10px 4px !important;\n  font-size: 10px;\n  /* padding-right: 0 !important; */\n  color: #545454;\n}\n.box-imgsd ul.list-ll li span {\n  font-size: 12px;\n  vertical-align: text-top;\n  position: relative;\n  top: 1px;\n}\nul.btn-slly {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  scroll-behavior: smooth;\n  display: block;\n  padding-right: 20px !important;\n}\nul.btn-slly > li {\n  display: inline-block;\n  overflow: hidden;\n}\nspan.btn-icond {\n  position: absolute;\n  top: -23px;\n  background: var(--ion-color-gradient1) !important;\n  font-size: 10px;\n  color: #fff;\n  font-weight: 600;\n  padding: 3px 7px;\n}\nspan.btn-icond ion-icon {\n  font-size: 17px;\n  vertical-align: bottom;\n}\nspan.btn-icond:after {\n  content: \"\";\n  position: absolute;\n  border: 7px solid #222;\n  border-color: #1abaad transparent transparent transparent;\n  bottom: -14px;\n  left: 8px;\n}\n#map {\n  height: 500px;\n}\n[ad-place-btn] [save] {\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  font-size: 14px;\n  border-radius: 50px;\n  padding: 12px 22px;\n  display: inline-block;\n  text-decoration: none;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaXAtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Q7QUFDQztFQUNDLHVCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjtBQUFFO0VBQ0ssZ0JBQUE7RUFDSCxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFERztFQUNDLGFBQUE7RUFDQSxtQkFBQTtBQUdKO0FBRkk7RUFDQyxXQUFBO0FBSUw7QUFERztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUdKO0FBREc7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFHSjtBQUFFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUVIO0FBREc7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUFHSjtBQURHO0VBQ0MsZUFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0FBR0o7QUFBRTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSDtBQUNDO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFSDtBQURHO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBR0o7QUFERztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBR0o7QUFGSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUlMO0FBREc7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdURBQUE7RUFDQSxpQkFBQTtBQUdKO0FBQUU7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7QUFFSDtBQURHO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBR0o7QUFERztFQUNDLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBR0o7QUFERztFQUNDLFlBQUE7RUFBQSxlQUFBO0VBQ0EsU0FBQTtBQUdKO0FBREc7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQUdKO0FBRkk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFJTDtBQUNDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0c7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFDSjtBQUdDO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5REFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUVFO0VBQ0Msc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUFIO0FBRUU7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFBSDtBQUVFO0VBQ0MsZUFBQTtFQUNBLGdDQUFBO0FBQUg7QUFHQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtFQUFBO0FBREY7QUFHQztFQUNDLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0E7bURBQUE7RUFFQSxnQkFBQTtBQURGO0FBRUU7RUFDQyxlQUFBO0FBQUg7QUFFRTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQUg7QUFFRTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSDtBQUNHO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esc0RBQUE7RUFDQSxRQUFBO0FBQ0o7QUFDRztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVMO0FBQ0c7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUdDO0VBQ0MsMkJBQUE7QUFERjtBQUdDO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFFRTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFBSDtBQUVFO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSDtBQUdDO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVEQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQURGO0FBRUU7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFIO0FBRUU7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFIO0FBQ0c7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBQ0o7QUFDRztFQUNDLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNKO0FBQ0c7RUFDQyxjQUFBO0FBQ0o7QUFDRztFQUNDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFDSjtBQUdDO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1REFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFERjtBQUVFO0VBQ0MsZUFBQTtFQUNBLDJCQUFBO0FBQUg7QUFHQztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBREY7QUFJRTtFQUNDLFdBQUE7QUFGSDtBQUlFO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBRkg7QUFHRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREo7QUFHRztFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdHO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREo7QUFLQztFQUNDLHFCQUFBO0FBSEY7QUFLQztFQUNDLGVBQUE7QUFIRjtBQUtDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFJRTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGSDtBQUdHO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0c7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0c7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDZDQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFESjtBQU1FO0VBQ0MsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUpIO0FBT0M7RUFDQyxhQUFBO0FBTEY7QUFNRTtFQUNDLFNBQUE7RUFDQSxZQUFBO0FBSkg7QUFPQztFQUNDLG1CQUFBO0VBQ0EsMEJBQUE7QUFMRjtBQU9DO0VBQ0Msc0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFMRjtBQU9DO0VBQ0MsWUFBQTtFQUNBLHVEQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUxGO0FBT0M7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEY7QUFNRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFKSDtBQUtHO0VBQ0MsV0FBQTtBQUhKO0FBTUU7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFKSDtBQUtHO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSEo7QUFPQztFQUNDLHVEQUFBO0VBQ0EsV0FBQTtBQUxGO0FBTUU7RUFDQyxnQkFBQTtBQUpIO0FBS0c7RUFDQyxtQkFBQTtBQUhKO0FBTUU7RUFDQyxnQ0FBQTtBQUpIO0FBS0c7RUFDQyxXQUFBO0FBSEo7QUFNRTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBSkg7QUFTQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FBTko7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFMSjtBQU1DO0VBQ0MscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSkY7QUFNQztFQUNDLGNBQUE7QUFKRjtBQVFBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUxEO0FBTUM7RUFDQyx5QkFBQTtFQUNBLHNCQUFBO0FBSkY7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0FBTEo7QUFNQztFQUNDLHVEQUFBO0VBQ0EsK0JBQUE7RUFDQSx5REFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFKRjtBQVFDO0VBQ0MsbUJBQUE7QUFMRjtBQU1FO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUpIO0FBS0c7RUFDQywyQkFBQTtBQUhKO0FBUUE7RUFDSSxlQUFBO0FBTEo7QUFRQTtFQUNDLGtCQUFBO0VBQ0csbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTEo7QUFNQztFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSkg7QUFLRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUhIO0FBS0U7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FBSEg7QUFLRTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMERBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUhIO0FBS0U7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFISDtBQUlHO0VBQ0MsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUZKO0FBTUM7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUpGO0FBS0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSEg7QUFJRztFQUNDLFlBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSEg7QUFJRztFQUNDLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZKO0FBSUc7RUFDQyxjQUFBO0FBRko7QUFJRztFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBRko7QUFLRTtFQUNDLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQUhIO0FBSUc7RUFDQyxzQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUtFO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFISDtBQVFBO0VBQ0ksdURBQUE7RUFDQSxXQUFBO0FBTEo7QUFPRTtFQUNDLFdBQUE7QUFMSDtBQU9FO0VBQ0MsK0JBQUE7QUFMSDtBQU9FO0VBQ0MsV0FBQTtBQUxIO0FBU0M7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQVBGO0FBVUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdURBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQVBKO0FBU0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU5GO0FBT0U7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtBQUxIO0FBT0U7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwwREFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUxIO0FBUUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNILGdCQUFBO0VBQ0csZ0JBQUE7QUFMSjtBQU1DO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUpGO0FBS0U7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFISDtBQUtFO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEg7QUFLRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFISDtBQUtFO0VBQ0MscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFISDtBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFKSjtBQUtDO0VBQ0MscUJBQUE7QUFIRjtBQUlFO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBRkg7QUFNQTtFQUNDLG9CQUFBO0FBSEQ7QUFJQztFQUNDLFdBQUE7RUFDQSxtQkFBQTtBQUZGO0FBR0U7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBREg7QUFFRztFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBRUc7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRztFQUNDLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFRztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7QUFDSTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtBQUNMO0FBS0E7RUFDQyxrQkFBQTtFQUNHLGdCQUFBO0VBQ0gsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBRkQ7QUFHQztFQUNDLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBREY7QUFHQztFQUNDLGlEQUFBO0VBQ0EsbURBQUE7RUFDQSx3REFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FBREY7QUFJQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0FBREo7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUFFSDtBQURHO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBR0o7QUFERztFQUNDLGdCQUFBO0VBQ0EscUJBQUE7QUFHSjtBQURHO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0FBR0o7QUFBRTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVIO0FBREc7RUFDQyxhQUFBO0FBR0o7QUFHQztFQUNDLHlCQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQUlDO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQURGO0FBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQURKO0FBRUM7RUFDQyxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBQUY7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHVCQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUFKO0FBQ0M7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQ0M7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjtBQUNDO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUFKO0FBQ0M7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSDtBQURHO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUdKO0FBRkk7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFJTDtBQUZJO0VBQ0MsZUFBQTtFQUNBLGNBQUE7QUFJTDtBQUFFO0VBQW9CLGtCQUFBO0FBR3RCO0FBQUM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBRUY7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFEQztFQUNDLGtCQUFBO0FBR0Y7QUFGRTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUlIO0FBRkU7RUFDQywwREFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUlIO0FBSEc7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFLSjtBQUpJO0VBQ0MsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFNTDtBQURDO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFHRjtBQUZFO0VBQ0MsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FBSUg7QUFIRztFQUNDLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUtKO0FBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNILGNBQUE7RUFDQSw4QkFBQTtBQUdEO0FBREE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBSUo7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBS0o7QUFKQztFQUNDLGVBQUE7RUFDQSxzQkFBQTtBQU1GO0FBSkM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlEQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFNRjtBQUZBO0VBQ0UsYUFBQTtBQUtGO0FBQUs7RUFFRixzQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBRUgiLCJmaWxlIjoidHJpcC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50W2JnLWdyZXldIHtcblx0YmFja2dyb3VuZDojZjlmOWY5O1xuXHQtLWJhY2tncm91bmQ6I2Y5ZjlmOTtcblx0XG5cdC5jb250ZXQtc2VjdCB7XG5cdFx0cGFkZGluZzoyNXB4IDIwcHggMTBweDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXHQudG9wLXNjdGluIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZzogMTVweDtcblx0XHRiYWNrZ3JvdW5kOiAjZTdlYWVhO1xuXHRcdHBhZGRpbmctYm90dG9tOiA3MHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IC00NXB4O1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcblx0XHR6LWluZGV4OjA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0LmhlZHItc3JjIHtcblx0XHRcdCAgICBwYWRkaW5nOiAwIDAgNXB4O1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdGNvbG9yOiAjNGM0YzRjO1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHQubWVuLWljbyB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDIycHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC5jYXJ0LWljbyB7XG5cdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMjZweDtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR0b3A6IC0ycHg7XG5cdFx0XHR9XG5cdFx0XHRsYWJlbC50dGwtYWwge1xuXHRcdFx0XHRjb2xvcjogIzRjNGM0Yztcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuY29udC1oZSB7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdHBhZGRpbmc6IDAgMTBweDtcblx0XHRcdGg0LnR0bC1tYW4ge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRcdH1cblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA2cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTdweDtcblx0XHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Njg2Mjc0NTA5ODAzOTIyKTtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDpcIlwiO1xuXHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0XHRiYWNrZ3JvdW5kOnVybChcIi4uLy4uL2Fzc2V0cy9pbWcvbWFwLnBuZ1wiKTsgXG5cdFx0XHRsZWZ0OiAwO1xuXHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR0b3A6IDA7XG5cdFx0XHRib3R0b206IDA7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0ei1pbmRleDogLTE7XG5cdFx0XHRvcGFjaXR5OiAwLjE7XG5cdFx0fVxuXHR9XG5cdC5zbGlkcy1ib3gge1xuXHRcdG1hcmdpbi1yaWdodDotMjBweDtcblx0XHRtYXJnaW4tdG9wOjE1cHg7XG5cdFx0LmltZy1ieC1zbHkge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogMTM1cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwcHg7XG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMjMwcHg7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5saWtlcy1udW1iZXIge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvdHRvbTogMTBweDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRcdFx0cGFkZGluZzogM3B4IDZweCAzcHggMTBweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweCAwIDAgNTBweDtcblx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHR3aWR0aDogMTRweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDE0cHg7XG5cdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IHN1Yjtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aDQubmFtZS1mZmxzIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwMDAwMCAsICMwMDAwMDAwMCk7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQuaW1nLWJ4LXNseS5zdG9yaXMge1xuXHRcdFx0aGVpZ2h0OmF1dG87XG5cdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XG5cdFx0XHRpbWcge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAyNzVweDtcblx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHR9XG5cdFx0XHRoNC50bHQtc3RvciB7XG5cdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0cGFkZGluZzogNXB4IDEwcHggMTJweDtcblx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLmxpa2VzLW51bWJlciAge1xuXHRcdFx0XHRib3R0b206IGluaXRpYWw7XG5cdFx0XHRcdHRvcDogMTVweDtcblx0XHRcdH1cblx0XHRcdHNwYW4ubWVzZ3MtbnVtYmVyIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR0b3A6IDQ3cHg7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdFx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdHBhZGRpbmc6IDNweCA2cHggM3B4IDEwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDE0cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxNHB4O1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBzdWI7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA0cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LnNsaWRzLWJveC5uZXctYm94LWEge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRtYXJnaW46IDBweDtcblx0XHRoZWlnaHQ6IDIxMHB4O1xuXHRcdC5zbGlkci1pbXMtc3Qge1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0aGVpZ2h0OiAyMTBweDtcblx0XHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdFx0b2JqZWN0LWZpdDpjb3Zlcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LnRvcC11c2Vlci1zIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAwO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cGFkZGluZzogMThweCAyMHB4O1xuXHRcdHBhZGRpbmctbGVmdDogNjBweDtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwMDAwMDAsICMwMDAwMDBiMCk7XG5cdFx0cGFkZGluZy1ib3R0b206IDQwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE1cHg7XG5cdFx0aW1nLmFkbS11c3Ige1xuXHRcdFx0d2lkdGg6IDQwcHggIWltcG9ydGFudDtcblx0XHRcdGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0bGVmdDogMTBweDtcblx0XHRcdC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0fVxuXHRcdGg1IHtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0bWFyZ2luLXRvcDogMnB4O1xuXHRcdH1cblx0XHRzcGFuLnRpbWUtYWwge1xuXHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Myk7XG5cdFx0fVxuXHR9XG5cdHNwYW4ubGl2ZXN0bS1kb3Qge1xuXHRcdHdpZHRoOiAxMnB4O1xuXHRcdGhlaWdodDogMTJweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0YmFja2dyb3VuZDogI0Y0NDMzNjtcblx0XHRib3R0b206IDEwcHg7XG5cdFx0cmlnaHQ6IDdweDtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxKTtcblx0XHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEycHggMTJweCwgI2Y3N2U3NSwgI0Y0NDMzNik7XG5cdH1cblx0LmNvbnRlbnQtYWxsLXBzdCB7XG5cdFx0cGFkZGluZzogN3B4IDIwcHggMjBweDtcblx0XHQvKiBtYXJnaW4tdG9wOiAtMzVweDsgKi9cblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdHotaW5kZXg6IDExMTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdC8qIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG5cdFx0Ym94LXNoYWRvdzogMHB4IC0yMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI4KTsgKi9cblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdGg0LnR0bC1tYWluICB7XG5cdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0fVxuXHRcdHAge1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6ICM4YThhOGE7XG5cdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDIzcHg7IFxuXHRcdFx0bWFyZ2luLXRvcDogMHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdFx0LmNvbW1udHMge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0cGFkZGluZy1sZWZ0OiA1M3B4O1xuXHRcdFx0ei1pbmRleDogMTE7XG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0bWluLWhlaWdodDo1NnB4O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRpbWcuYWRtLXVzciB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0d2lkdGg6IDQycHg7XG5cdFx0XHRcdGhlaWdodDogNDJweDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMiwgMTgxLCAyNTUsIDAuNzQpO1xuXHRcdFx0XHQvKiBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiYSg0LCAxNTgsIDEwMiwgMC4xOCk7ICovXG5cdFx0XHRcdHRvcDogMHB4O1xuXHRcdFx0fVxuXHRcdFx0aDUgIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Y29sb3I6ICMzMEQ1Qzg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdHNwYW4udGltZS1hbCB7XG5cdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0XHRjb2xvcjogI2I1YjViNTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQubXQtMjAge1xuXHRcdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcblx0fVxuXHQuYWRkLWNvbW1udCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cdFx0cGFkZGluZy1yaWdodDogNTRweDtcblx0XHRpb24taW5wdXQge1xuXHRcdFx0YmFja2dyb3VuZDogI2Y5ZjlmOTtcblx0XHRcdC0tcGFkZGluZzogMTRweDtcblx0XHRcdC0tcGFkZGluZy1zdGFydDogMjBweDtcblx0XHRcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmM2YzZjM7XG5cdFx0XHRoZWlnaHQ6IDQ1cHg7XG5cdFx0fVxuXHRcdGEuYnRuLXNlbmQge1xuXHRcdFx0d2lkdGg6IDQ1cHg7XG5cdFx0XHRoZWlnaHQ6IDQ1cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiAgdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGZvbnQtc2l6ZTogMTlweDtcblx0XHR9XG5cdH1cblx0LmNvbnRzLXNsZGVyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdHotaW5kZXg6IDExO1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrICwgdHJhbnNwYXJlbnQpO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0cGFkZGluZzogMTVweDtcblx0XHRoNCB7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiA3cHg7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdH1cblx0XHR1bC5yYXRpbmctYWxsIHtcblx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0bGkge1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdG1hcmdpbi1yaWdodDogMnB4O1xuXHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG5cdFx0XHR9XG5cdFx0XHRsaS5vcHJuLXRyc2Ege1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjOEJDMzRBO1xuXHRcdFx0XHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRcdFx0XHRwYWRkaW5nOiAzcHggOHB4IDNweCA4cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdG9wYWNpdHk6IDEgIWltcG9ydGFudDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDZweDtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR0b3A6IC0xcHg7XG5cdFx0XHR9XG5cdFx0XHRsaS5hY3RpdmUge1xuXHRcdFx0XHRjb2xvcjogI0ZGQzEwNztcblx0XHRcdH1cblx0XHRcdGxpLnRvdGwtcnYge1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogN3B4O1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0dG9wOiAycHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHNwYW4ub3BuLWNsIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0Ym90dG9tOiAyNXB4O1xuXHRcdHotaW5kZXg6IDExMTExO1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGNTcyMiwgI0ZGQzEwNyk7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0cGFkZGluZzogNXB4IDEwcHggNXB4IDE0cHg7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweCAwIDAgNTBweDtcblx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0aW9uLWljb24ge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0dmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuXHRcdH1cblx0fVxuXHRzcGFuLmZhdm9yLWljbiB7XG5cdFx0d2lkdGg6IDM1cHg7XG5cdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMTVweDtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRsaW5lLWhlaWdodDogNDJweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y29sb3I6ICNmMWYxZjE7XG5cdFx0Zm9udC1zaXplOiAxOXB4O1xuXHRcdHRvcDogMTNweDtcblx0fVxuXHQuc3BlY2lsaXMge1xuXHRcdC5zbGlkZSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cdFx0LmFydGljdC1zdHIge1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdHBhZGRpbmc6IDEwcHggN3B4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDdweDtcblx0XHRcdGJveC1zaGFkb3c6IDBweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0XHRcdGltZy5pbWctdWEge1xuXHRcdFx0XHR3aWR0aDogNjVweDtcblx0XHRcdFx0aGVpZ2h0OiA2NXB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICM3MGI1ZmY7XG5cdFx0XHRcdHBhZGRpbmc6IDJweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogMnB4O1xuXHRcdFx0fVxuXHRcdFx0aDUge1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDNweDtcblx0XHRcdH1cblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRjb2xvcjogI2IzYjNiMztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LnNwZWNpbGlzIHtcblx0XHRwYWRkaW5nOiAwIDAgNXB4IDE1cHg7XG5cdH1cblx0LnNwZWNpbGlzIGg0LnR0bC1tYWluIHtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdH1cblx0dWwub3Blbi1ocnMge1xuXHRcdG1hcmdpbjogMHB4O1xuXHRcdHBhZGRpbmc6IDBweDtcblx0XHRtYXJnaW4tdG9wOiAtM3B4O1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0bGkge1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6ICM4YThhOGE7XG5cdFx0XHRwYWRkaW5nOiA3cHggMDtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XG5cdFx0XHR6LWluZGV4OjA7XG5cdFx0XHRzcGFuIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0cGFkZGluZy1yaWdodDogNXB4O1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5yaWdodC10cyB7XG5cdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0Y29sb3I6ICMyMjI7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdHBhZGRpbmctbGVmdDogNXB4O1xuXHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAwcHg7XG5cdFx0XHR9XG5cdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuXHRcdFx0XHR6LWluZGV4OiAtMTtcblx0XHRcdFx0dG9wOiAxNXB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRwLmxvY3Qge1xuXHRcdGlvbi1pY29ue1xuXHRcdFx0dmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0Y29sb3I6ICM3Nzc7XG5cdFx0fVxuXHR9XG5cdC5nZy1tYXAge1xuXHRcdGZsZXg6MCAwIDUwJTtcblx0XHRpZnJhbWUge1xuXHRcdFx0Ym9yZGVyOiAwO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdH1cblx0fVxuXHRoNC50dGwtbWFpbi50Y3QtYnRuIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRcdGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuXHR9XG5cdGEuYnRuLWNhdCB7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMThweDtcblx0XHR6LWluZGV4OiAxMTE7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDMwcHg7XG5cdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzNHB4O1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRyaWdodDogMTVweDtcblx0XHRtYXJnaW46IDBweDtcblx0fVxuXHRhLmJ0bi1waG8ge1xuXHRcdGZsb2F0OiByaWdodDtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjk4MDAsICNGRjU3MjIpO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLXJpZ2h0OiA4cHg7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMTNweDtcblx0XHR6LWluZGV4OiAxMTE7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDM1cHg7XG5cdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA0MXB4O1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRyaWdodDogNTJweDtcblx0XHRtYXJnaW46IDBweDtcblx0fVxuXHQuc3J2LWJveCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0LyogYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7ICovXG5cdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5O1xuXHRcdGJvcmRlci1yYWRpdXM6IDdweDtcblx0XHRiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuXHRcdHBhZGRpbmctbGVmdDogNzBweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRtaW4taGVpZ2h0OiA3MHB4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0c3Bhbi5pY29uLXNydiB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdGhlaWdodDogNTBweDtcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZmY2RmZiwgIzcwYjBmZik7XG5cdFx0XHRsZWZ0OiAxMHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bGluZS1oZWlnaHQ6IDUwcHg7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0dG9wOiAxMHB4O1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDI4cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNwYW4uc3J2LXQge1xuXHRcdFx0Zm9udC1zaXplOiA5cHg7XG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdFx0Y29sb3I6ICNjM2MzYzM7XG5cdFx0XHRoNSB7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA2cHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdFx0Y29sb3I6ICMyMjI7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5zcnYtYm94LnNlbGVjdGVkIHtcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2ZmNkZmYsICM3MGIwZmYpO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdHNwYW4uaWNvbi1zcnYge1xuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdGltZyB7XG5cdFx0XHRcdGZpbHRlcjogaW52ZXJ0KDAuMyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNwYW4uc3J2LXQge1xuXHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MSk7XG5cdFx0XHRoNSB7XG5cdFx0XHRcdGNvbG9yOiNmZmY7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNwYW4uc2VsZWN0LWNoZWNrIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogNXB4O1xuXHRcdFx0cmlnaHQ6IDVweDtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblx0fVxufVxuXG4uYWRkLXJldiB7XG4gICAgLyogbWFyZ2luOiAwIC0yMHB4OyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMTE7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YzZjNmMztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cbnVsLmFkZC1yYXQtYWxsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuXHRsaSB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRtYXJnaW4tbGVmdDogMnB4O1xuXHRcdGNvbG9yOiAjYzdjN2M3O1xuXHR9XG5cdGxpLmFjdGl2ZSB7XG5cdFx0Y29sb3I6ICNGRkMxMDc7XG5cdH1cblx0XG59XG51bC5hZGQtcmF0LWFsbC5hbGwtcnRzYSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAzOXB4O1xuXHRsZWZ0OiAwcHg7XG5cdGxpIHtcblx0XHRmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuaW9uLWZvb3Rlci5mb290LWJvb2sge1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggLTdweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgei1pbmRleDogMTExMTtcblx0aW9uLWJ1dHRvbi5idG4tbG9naW4ge1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZmY2RmZiwgIzcwYjBmZik7XG5cdFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHQtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZmY2RmZiwgIzcwYjBmZik7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdC0tYm9yZGVyOiBub25lO1xuXHRcdGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMTEyLCAxNzcsIDI1NSwgMC4xNSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHQtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0aGVpZ2h0OiA0NnB4O1xuXHRcdG1hcmdpbjogMHB4O1xuXHR9XG59XG4uc3BlY2lsaXMge1xuXHRoNC50dGwtbWFpbiAge1xuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XG5cdFx0c3Bhbi5yZXBvcnQtdHh0IHtcblx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGJhY2tncm91bmQ6ICNGNDQzMzY7XG5cdFx0XHRwYWRkaW5nOiA1cHggMTBweDtcblx0XHRcdG1hcmdpbi10b3A6IC0ycHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xuXHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5pb24tc2VnbWVudC5zZWdtdC1kZXRhaWxzIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYm94LXNlcnZjIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwN3B4O1xuICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0LmltZy1iIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR3aWR0aDogMTEwcHg7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0aW1nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0fVxuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cdFx0XHR6LWluZGV4OiAwO1xuXHRcdH1cblx0XHRzcGFuLmJhZGctY2F0ciB7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRyaWdodDogMTBweDtcblx0XHRcdHRvcDogMTBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgIzZmY2RmZiwgIzcwYjBmZik7XG5cdFx0XHRwYWRkaW5nOiA1cHggMTJweCA1cHggMTJweDtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdHotaW5kZXg6IDExO1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRcdH1cblx0XHRzcGFuLmRhdGUtaWNuIHtcblx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGM4YzhjLCAjMDAwMDAwKTtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMDtcblx0XHRcdHotaW5kZXg6IDExO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHNtYWxsICB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Mik7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmNvdC1hIHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRwYWRkaW5nOiAxMHB4IDE0cHg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGg0ICB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRjb2xvcjogIzNhM2EzYTtcblx0XHRcdG1hcmdpbi1ib3R0b206IDNweDtcblx0XHRcdHNwYW4ucmlnaHQtcHJpY2Uge1xuXHRcdFx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0XHRcdGNvbG9yOiAjNzBiMWZmO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR1bC5yYXRpbmctYWxsIHtcblx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0bWFyZ2luLXRvcDogM3B4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdFx0bGkge1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAycHg7XG5cdFx0XHRcdGNvbG9yOiAjYzNjM2MzO1xuXHRcdFx0fVxuXHRcdFx0bGkuYWN0aXZlIHtcblx0XHRcdFx0Y29sb3I6ICNmOGM1MGE7XG5cdFx0XHR9XG5cdFx0XHRsaS50b3RsLXJ2IHtcblx0XHRcdFx0Y29sb3I6ICMwMDAwMDA7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAzcHg7XG5cdFx0XHRcdHRvcDogLTFweDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwIHtcblx0XHRcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cC5iLXByaWNlIHtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAjNmZiMmZkO1xuXHRcdFx0bWFyZ2luLXRvcDogOHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXG5cdFx0fVxuXHR9XG59XG4uYm94LXNlcnZjLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2ZmNkZmYsICM3MGIwZmYpO1xuICAgIGNvbG9yOiAjZmZmO1xuXHQuY290LWEge1xuXHRcdGg0IHtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdH1cblx0XHRwIHtcblx0XHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG5cdFx0fVxuXHRcdHAuYi1wcmljZSAge1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0fVxuXHRcdFxuXHR9XG5cdHNwYW4uc2VsZWN0LWNoZWNrIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAxMXB4O1xuXHRcdHJpZ2h0OiA3cHg7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHR9XG59XG5zcGFuLm9mZi1kaXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE4cHg7XG4gICAgei1pbmRleDogMTE7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM0Y1MUI1LCAjRjQ0MzM2KTtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XG59XG4uaW1nLWItc3RhIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bWFyZ2luLXRvcDogNXB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDM1cHg7XG5cdFx0aW1nIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE4LCAxODcsIDI1MywgMC4yOCk7XG5cdFx0XHRwYWRkaW5nOiAycHg7XG5cdFx0fVxuXHRcdHNwYW4uZGxlLWltIHtcblx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAtNXB4O1xuXHRcdFx0cmlnaHQ6IC01cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICNGNDQzMzYsICNFOTFFNjMpO1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdH1cblx0fVxuLmNvbnQtc2x5ZHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG5cdG1hcmdpbi10b3A6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblx0LmFkZC1jaXQge1xuXHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0ZmxleDogMCAwIDUwJTtcblx0XHRjb2xvcjogIzIyMjtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0cC5sb2N0IHtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRcdGNvbG9yOiAjMjIyO1xuXHRcdH1cblx0XHRoNSB7XG5cdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDZweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0fVxuXHRcdHAubG9uZ3Qge1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAxOXB4O1xuXHRcdFx0Y29sb3I6ICMyMjI7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcblx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdH1cblx0XHRhLmJ0LXN5eXMge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRwYWRkaW5nOiA0cHggMTNweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0fVxuXHR9XG59XG51bC5mZWF0dXJlcy1mc2Mge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXHRsaSB7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHNwYW4ge1xuXHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0YmFja2dyb3VuZDogI2RjZWZlZDtcblx0XHRcdGNvbG9yOiAjMTNiMGEzO1xuXHRcdFx0cGFkZGluZzogMnB4IDEwcHg7XG5cdFx0XHRtYXJnaW46IDJweCAycHg7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNhOGU0ZGY7XG5cdFx0fVxuXHR9XG59XG4uc2xpZHJzLmFwcG9pbnRzIHtcblx0bWFyZ2luLWJvdHRvbTogLTE1cHg7XG5cdC5zbGlkZSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0XHQudmNvdHIge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0YmFja2dyb3VuZDogI2Y3ZjdmNztcblx0XHRcdHBhZGRpbmc6IDEycHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRoNSB7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHR9XG5cdFx0XHRpbWcgIHtcblx0XHRcdFx0d2lkdGg6IDYwcHg7XG5cdFx0XHRcdGhlaWdodDogNjBweDtcblx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdH1cblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Y29sb3I6ICM3MzczNzM7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdH1cblx0XHRcdHAudHNtciB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdGNvbG9yOiAjMTJhZmEyO1xuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjZjQ0MzM2O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5pb24tc2VnbWVudC5zZWdtdC1kZXNpZyB7XG5cdG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuXHRwYWRkaW5nOiAycHggM3B4O1xuXHRpb24tc2VnbWVudC1idXR0b24gIHtcblx0XHRmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcblx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuXHRcdC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuXHRcdGhlaWdodDogMzhweDtcblx0XHRtaW4taGVpZ2h0OiAzOHB4O1xuXHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRjb2xvcjogIzQyNjdCMjtcblx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0LS1ib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXHRpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZC5pb24tYWN0aXZhdGFibGUgIHtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKSAhaW1wb3J0YW50O1xuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSkgIWltcG9ydGFudDtcblx0XHQtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSkgIWltcG9ydGFudDtcblx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG5cdH1cbn1cbi5mbGRzLWxvZ2luIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgei1pbmRleDogMTExO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTNweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwcHggLThweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG4ucGhvdC1zbGlkZXMge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuXHR1bC5kYXRhLWNvbnQge1xuXHRcdG1hcmdpbjogMHB4O1xuXHRcdHBhZGRpbmc6IDBweDtcblx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdHBhZGRpbmc6IDIwcHggMTVweDtcblx0XHRsaSB7XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRwYWRkaW5nOiA4cHggMDtcblx0XHRcdGNvbG9yOiAjNGM0YzRjO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHotaW5kZXg6IDA7XG5cdFx0XHQvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTsgKi9cblx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZDZkNmQ2O1xuXHRcdFx0XHR0b3A6IDE4cHg7XG5cdFx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdFx0fVxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdH1cblx0XHRcdHNwYW4uZGV0YWlscy10cmlwIHtcblx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRsaS5kZXNjcmkge1xuXHRcdFx0cGFkZGluZy10b3A6IDJweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRsaW5lLWhlaWdodDogMjNweDtcblx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0ZGlzcGxheTpub25lO1xuXHRcdFx0fSBcblx0XHR9XG5cdH1cbn1cbi5mbGRzLWxvZ2luIHtcblx0aW9uLWxpc3QgIHtcblx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHR9XG59XG4uY290LWRkciB7XG5cdC5nZy1tYXAge1xuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0fVxufVxuLmltZy1oZXQtbWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzhweCk7XG5cdGltZy5pbWctc3Qge1xuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDEzOHB4KTtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuLmNvbnQtdXNyZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggNjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCAsIGJsYWNrKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDg1cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogI2ZmZjtcblx0aW1nIHtcblx0XHR3aWR0aDogNTBweDtcblx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAyMHB4O1xuXHR9XG5cdGg1IHtcblx0XHRtYXJnaW46IDBweDtcblx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRtYXJnaW4tdG9wOiA0cHg7XG5cdFx0Y29sb3I6ICNkMGQwZDA7XG5cdH1cblx0aDMge1xuXHRcdG1hcmdpbjogMHB4O1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdH1cblx0XG59XG4uYm90dG9tLWNvbnQtYWxsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDIwcHg7XG5cdHVsLmJ0bi1zbGx5IHtcblx0XHRtYXJnaW46IDBweDtcblx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRsaSB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDogMDtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRsaW5lLWhlaWdodDogMTBweDtcblx0XHRcdC5ob21lLWlzb24ge1xuXHRcdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xuXHRcdFx0XHRjb2xvcjogI2I5YjliOTtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHNwYW4uaWNvbi1zIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR3aWR0aDogNDBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2U2ZWNmOTtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDdweDtcblx0XHRcdFx0XHRjb2xvcjogIzQyNjdCMjtcblx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2EzYmJlYztcblx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyMXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4ucGx1c2QtcyB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjNDI2N0IyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxpOmxhc3QtY2hpbGQgeyAgICAgcGFkZGluZy1yaWdodDogMHB4OyB9XG5cdFx0XG5cdH1cblx0dWwuYnRuLXNsbHkgPmxpOmFmdGVyIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzJlMmUwO1xuXHRcdHRvcDogY2FsYyg1MCUgLSAycHgpO1xuXHRcdHotaW5kZXg6IC0xO1xuXHR9XG59XG4uYm94LWltZ3NkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvKmJveC1zaGFkb3c6IDBweCAzcHggMTBweCByZ2JhKDAgMCAwIC8gMTQlKTsqL1xuICAgIGJveC1zaGFkb3c6IHJnYmEgKDAsMCwwLDEuNCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHQudG9wLWtrIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0aW1nLmltZy1ib3NmMCB7XG5cdFx0XHR3aWR0aDogMTUwcHg7XG5cdFx0XHRoZWlnaHQ6IDkwcHg7XG5cdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHR9XG5cdFx0LmNvbnQtZGF0ZXMge1xuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsIGJsYWNrKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGJvdHRvbTogMDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRzcGFuLmZsYWctdHh0IHtcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogOXB4O1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxN3B4O1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAzcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dWwubGlzdC1sbCB7XG5cdFx0cGFkZGluZzogMHB4IDZweDtcblx0XHRtYXJnaW46IDBweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGxpIHtcblx0XHRcdHBhZGRpbmc6IDEwcHggNHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHQvKiBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7ICovXG5cdFx0XHRjb2xvcjogIzU0NTQ1NDtcblx0XHRcdHNwYW4ge1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR0b3A6IDFweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbnVsLmJ0bi1zbGx5IHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cbnVsLmJ0bi1zbGx5PiBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5zcGFuLmJ0bi1pY29uZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIzcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSkgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xuXHRpb24taWNvbiB7XG5cdFx0Zm9udC1zaXplOiAxN3B4O1xuXHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cdH1cblx0JjphZnRlciB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym9yZGVyOiA3cHggc29saWQgIzIyMjtcblx0XHRib3JkZXItY29sb3I6ICMxYWJhYWQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG5cdFx0Ym90dG9tOiAtMTRweDtcblx0XHRsZWZ0OiA4cHg7XG5cdH1cbn1cblxuI21hcCB7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cblthZC1wbGFjZS1idG5dXG4gICAge1xuXHQgICAgW3NhdmVdXG5cdFx0e1xuXHRcdFx0YmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRwYWRkaW5nOiAxMnB4IDIycHg7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHRcblx0XHRcdHdpZHRoOiAxMDAlO1x0XG5cdFx0fVxuXHR9Il19 */");

/***/ }),

/***/ 15985:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trip-details/trip-details.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header\n  class=\"ion-no-border heder-main trip-details-hdr\"\n  align-title=\"center\"\n>\n  <ion-toolbar lines=\"none\">\n    <ion-back-button defaultHref=\"/places-of-interests\" slot=\"start\"\n      ><ion-icon name=\"arrow-back-outline\"></ion-icon\n    ></ion-back-button>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n      \n        <a href=\"javascript:void(0)\" class=\"menu-tgl\">\n          <img src=\"assets/images/menu-wt.png\" /></a>\n    </ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"center\">Trip Details</ion-title>\n    <ion-buttons slot=\"end\"\n      ><ion-icon name=\"home-outline\"></ion-icon\n    ></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content bg-grey>\n  <div class=\"top-sctin\">\n    <!---div class=\"hedr-src\">\n      <ion-buttons slot=\"start\"\n        ><ion-icon\n          routerLink=\"{{back_button_btn}}\"\n          name=\"arrow-back-outline\"\n        ></ion-icon\n      ></ion-buttons>\n      <label class=\"ttl-al\"> Trip Details </label>\n      <ion-buttons slot=\"end\" routerLink=\"/tabs/home\"\n        ><ion-icon name=\"home-outline\"></ion-icon\n      ></ion-buttons>\n    </div--->\n    <ion-segment [(ngModel)]=\"profiletab\" class=\"segmt-desig\">\n      <ion-segment-button value=\"Basic\"> Trip Info </ion-segment-button>\n      <ion-segment-button value=\"Pet\" (click)=\"displayGoogleMap();\">\n        Track Places\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div class=\"flds-login\" id=\"printable-area2\">\n    <div [ngSwitch]=\"profiletab\">\n      <ion-list *ngSwitchCase=\"'Basic'\">\n        <div\n          class=\"contet-sect\"\n          *ngIf=\"(main_trip.length != 0)\"\n          id=\"printable-area\"\n        >\n          <div class=\"phot-slides\">\n            <div class=\"slids-box new-box-a dttr\">\n              <ion-slides pager=\"true\">\n                <ion-slide *ngFor=\"let img of images\">\n                  <div class=\"slide\">\n                    <div class=\"slidr-ims-st\">\n                      <img\n                        src=\"{{img}}\"\n                        class=\"img-str\"\n                      />\n                    </div>\n                  </div>\n                </ion-slide>\n\n                <!-- <ion-slide>\n\t\t\t\t\t\t\t\t  <div class=\"slide\">\n\t\t\t\t\t\t\t\t\t<div class=\"slidr-ims-st\">\t\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/trip2.jpg\" class=\"img-str\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t <div class=\"slide\">\n\t\t\t\t\t\t\t\t\t<div class=\"slidr-ims-st\">\t\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/trip3.jpg\" class=\"img-str\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t <div class=\"slide\">\n\t\t\t\t\t\t\t\t\t<div class=\"slidr-ims-st\">\t\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/trip4.jpg\" class=\"img-str\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</ion-slide> -->\n              </ion-slides>\n              <div class=\"conts-slder\">\n                <!-- <h4>{{main_trip.trip_name}}</h4> -->\n              </div>\n              <!-- <a\n                href=\"javascript:void(0)\"\n                class=\"btn-cat\"\n                (click)=\"shareit4(main_trip.trip_name);\"\n              >\n                <ion-icon name=\"share-social-outline\"></ion-icon>\n              </a> -->\n            </div>\n            <ul class=\"data-cont\">\n              <li>\n                <span> Trip Name </span>\n                <span class=\"details-trip\"> {{main_trip.trip_name}} </span>\n              </li>\n              <li>\n                <span> Date and time </span>\n                <span class=\"details-trip\">\n                  {{main_trip.start_date | date: 'dd/MM/yyyy'}} at\n                  {{main_trip.Start_time | date: 'H:mm a'}}</span\n                >\n              </li>\n              <li>\n                <span> Starting Point </span>\n                <span class=\"details-trip\"> {{main_trip.starting_point}} </span>\n              </li>\n              <li class=\"descri\">\n                <b> Description: </b> {{main_trip.trip_summary}}\n              </li>\n\n              <li>\n                <div\n                  ad-place-btn\n                  *ngIf=\"main_trip.status == 0\"\n                  (click)=\"submits(main_trip._id);\"\n                >\n                  <ion-row>\n                    <ion-col size=\"12\" class=\"ion-text-center\">\n                      <a href=\"javascript:void(0)\" save>Publish</a>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </ion-list>\n\n      <ion-list *ngSwitchCase=\"'Pet'\">\n        <div class=\"flds-login\">\n          <div class=\"img-het-map\">\n            <!-- <img src=\"assets/img/track.jpg\" class=\"img-st\"> -->\n\n            <div #map id=\"map\"></div>\n\n            <div class=\"cont-usre\">\n              <img\n                *ngIf=\"errors.indexOf(profile_data.data?.profile_picture) >= 0\"\n                src=\"../assets/img/img1.jpg\"\n                alt=\"\"\n              />\n              <img\n                *ngIf=\"errors.indexOf(profile_data.data?.profile_picture) == -1\"\n                src=\"{{profile_data.data?.profile_picture}}\"\n                alt=\"\"\n              />\n              <h5 *ngIf=\"errors.indexOf(profile_data.data?.firstname) == -1\">\n                {{profile_data.data?.firstname+' '+profile_data.data?.lastname}}\n              </h5>\n              <h3>{{main_trip.trip_name}}</h3>\n            </div>\n\n            <div class=\"bottom-cont-all\">\n              <ul class=\"btn-slly\">\n                <li>\n                  <a href=\"javascript:void(0)\" class=\"home-ison\">\n                    <span class=\"icon-s\">\n                      <ion-icon name=\"home-outline\"></ion-icon>\n                    </span>\n                    {{main_trip.start_date | date: 'd MMM'}} <br />\n                    {{main_trip.start_date | date: 'yyyy'}}\n                  </a>\n                </li>\n                <li *ngIf=\"add_button_show == 1\">\n                  <a\n                    href=\"javascript:void(0)\"\n                    class=\"home-ison\"\n                    (click)=\"add_trips_main(main_trip._id,0);\"\n                  >\n                    <span class=\"plusd-s\">\n                      <ion-icon name=\"add-circle-sharp\"></ion-icon>\n                    </span>\n                  </a>\n                </li>\n                <ng-container *ngFor=\"let trip of trips; let i = index;\">\n                  <li\n                    (click)=\"add_trips_main_edit(trip.trip_id,i,'/step-details/'+trip._id)\"\n                  >\n                    <div class=\"box-imgsd\">\n                      <div class=\"top-kk\">\n                        <img\n                          src=\"{{trip.images[0]}}\"\n                          class=\"img-bosf0\"\n                        />\n                        <div class=\"cont-dates\">\n                          {{trip.trip_name}}\n                          <span class=\"flag-txt\">{{trip.starting_point}}</span>\n                        </div>\n                      </div>\n                      <ul class=\"list-ll\">\n                        <!-- <li> <span> <ion-icon name=\"heart-outline\"></ion-icon> </span> 12 </li> -->\n                        <li>\n                          <span>\n                            <ion-icon name=\"chatbubble-outline\"></ion-icon>\n                          </span>\n                          {{trip.count}}\n                        </li>\n                        <li>\n                          <span>\n                            <ion-icon name=\"image-outline\"></ion-icon>\n                          </span>\n                          {{trip.images.length}}\n                        </li>\n                        <!-- \t<li> <span> <ion-icon name=\"home-outline\"></ion-icon> </span> 2 </li> -->\n                      </ul>\n                    </div>\n                  </li>\n                  <li *ngIf=\"add_button_show == 1\">\n                    <a\n                      href=\"javascript:void(0)\"\n                      class=\"home-ison\"\n                      (click)=\"add_trips(trip.trip_id,i);\"\n                    >\n                      <span class=\"plusd-s\">\n                        <ion-icon name=\"add-circle-sharp\"></ion-icon>\n                      </span>\n                    </a>\n                  </li>\n                </ng-container>\n                <li *ngIf=\"trips.length > 0\">\n                  <a href=\"javascript:void(0)\" class=\"home-ison\">\n                    <span class=\"icon-s\">\n                      <ion-icon name=\"flag-outline\"></ion-icon>\n                    </span>\n                    {{trips[trips.length -1].start_date | date: 'd MMM'}} <br />\n                    {{trips[trips.length -1].start_date | date: 'yyyy'}}\n                  </a>\n                </li>\n              </ul>\n              <span class=\"btn-icond\">\n                <ion-icon name=\"man-outline\"></ion-icon> Day 1</span\n              >\n            </div>\n          </div>\n        </div>\n      </ion-list>\n    </div>\n  </div>\n  \n</ion-content>\n<!--ion-footer class=\"foot-book\">\n\t<ion-button color=\"pink\" class=\"btn-login\" expand=\"full\" routerLink=\"/book-slot\">Book Now</ion-button>\n</ion-footer-->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_trip-details_trip-details_module_ts-es2015.js.map
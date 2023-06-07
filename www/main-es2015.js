(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-password.module */ 17157)).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 77648)).then(m => m.SignupPageModule)
    },
    // {
    //   path: 'home',
    //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    // },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 84523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'profile/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 84523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 89182)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("src_app_edit-profile_edit-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-profile/edit-profile.module */ 71241)).then(m => m.EditProfilePageModule)
    },
    {
        path: 'search',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("src_app_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 24682)).then(m => m.SearchPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
    },
    {
        path: 'places-interests',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("src_app_places-interests_places-interests_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./places-interests/places-interests.module */ 36875)).then(m => m.PlacesInterestsPageModule)
    },
    {
        path: 'explore-map',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("src_app_explore-map_explore-map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./explore-map/explore-map.module */ 59592)).then(m => m.ExploreMapPageModule)
    },
    {
        path: 'my-trips',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("src_app_my-trips_my-trips_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./my-trips/my-trips.module */ 94153)).then(m => m.MyTripsPageModule)
    },
    {
        path: 'new-trip',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("src_app_new-trip_new-trip_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./new-trip/new-trip.module */ 75816)).then(m => m.NewTripPageModule)
    },
    {
        path: 'places-of-interests',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("default-node_modules_ngx-stars___ivy_ngcc___fesm2015_ngx-stars_js"), __webpack_require__.e("src_app_places-of-interests_places-of-interests_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./places-of-interests/places-of-interests.module */ 58724)).then(m => m.PlacesOfInterestsPageModule)
    },
    {
        path: 'place-interest-details/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-stars___ivy_ngcc___fesm2015_ngx-stars_js"), __webpack_require__.e("src_app_place-interest-details_place-interest-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./place-interest-details/place-interest-details.module */ 21727)).then(m => m.PlaceInterestDetailsPageModule)
    },
    {
        path: 'trip-details/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-node_modules_capacitor_filesystem_dist_esm_index_js-node_modules_dom-to-image_src_dom-16d152"), __webpack_require__.e("src_app_trip-details_trip-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./trip-details/trip-details.module */ 40281)).then(m => m.TripDetailsPageModule)
    },
    {
        path: 'interest-filters',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_interest-filters_interest-filters_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./interest-filters/interest-filters.module */ 21590)).then(m => m.InterestFiltersPageModule)
    },
    {
        path: 'emergency-button',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_emergency-button_emergency-button_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./emergency-button/emergency-button.module */ 28464)).then(m => m.EmergencyButtonPageModule)
    },
    {
        path: 'add-contact',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("src_app_add-contact_add-contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-contact/add-contact.module */ 32568)).then(m => m.AddContactPageModule)
    },
    {
        path: 'add-step-map',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("src_app_add-step-map_add-step-map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-step-map/add-step-map.module */ 92859)).then(m => m.AddStepMapPageModule)
    },
    {
        path: 'add-new-step',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("src_app_add-new-step_add-new-step_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-new-step/add-new-step.module */ 62258)).then(m => m.AddNewStepPageModule)
    },
    {
        path: 'step-details/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_index_js"), __webpack_require__.e("default-node_modules_capacitor_filesystem_dist_esm_index_js-node_modules_dom-to-image_src_dom-16d152"), __webpack_require__.e("common"), __webpack_require__.e("src_app_step-details_step-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./step-details/step-details.module */ 12142)).then(m => m.StepDetailsPageModule)
    },
    {
        path: 'add-new-trip2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("src_app_add-new-trip2_add-new-trip2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-new-trip2/add-new-trip2.module */ 32431)).then(m => m.AddNewTrip2PageModule)
    },
    {
        path: 'add-new-step3',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("src_app_add-new-step3_add-new-step3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-new-step3/add-new-step3.module */ 15799)).then(m => m.AddNewStep3PageModule)
    },
    {
        path: 'reset-password/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reset-password/reset-password.module */ 44371)).then(m => m.ResetPasswordPageModule)
    },
    {
        path: 'change-password/:email/:otp',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_change-password_change-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./change-password/change-password.module */ 68232)).then(m => m.ChangePasswordPageModule)
    },
    {
        path: 'search-trip',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("src_app_search-trip_search-trip_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./search-trip/search-trip.module */ 24059)).then(m => m.SearchTripPageModule)
    },
    {
        path: 'add-trip-mid',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("src_app_add-trip-mid_add-trip-mid_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-trip-mid/add-trip-mid.module */ 10421)).then(m => m.AddTripMidPageModule)
    },
    {
        path: 'edit-single-trip/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("default-node_modules_ngx-dropzone___ivy_ngcc___fesm2015_ngx-dropzone_js"), __webpack_require__.e("default-node_modules_ngx-chips___ivy_ngcc___fesm2015_ngx-chips_js"), __webpack_require__.e("src_app_edit-single-trip_edit-single-trip_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-single-trip/edit-single-trip.module */ 98687)).then(m => m.EditSingleTripPageModule)
    },
    {
        path: 'discovery',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("src_app_discovery_discovery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./discovery/discovery.module */ 66514)).then(m => m.DiscoveryPageModule)
    },
    {
        path: 'future-connect',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-src_app_swipe_service_ts"), __webpack_require__.e("src_app_future-connect_future-connect_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./future-connect/future-connect.module */ 5125)).then(m => m.FutureConnectPageModule)
    },
    {
        path: 'connected-user/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_connected-user_connected-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./connected-user/connected-user.module */ 50289)).then(m => m.ConnectedUserPageModule)
    },
    {
        path: 'chat-room/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_chat-room_chat-room_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./chat-room/chat-room.module */ 23801)).then(m => m.ChatRoomPageModule)
    },
    {
        path: 'places-map',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("src_app_places-map_places-map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./places-map/places-map.module */ 3850)).then(m => m.PlacesMapPageModule)
    },
    {
        path: 'all-places',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jquery_dist_jquery_js"), __webpack_require__.e("default-node_modules_ngx-stars___ivy_ngcc___fesm2015_ngx-stars_js"), __webpack_require__.e("src_app_alll-favourites_alll-favourites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./alll-favourites/alll-favourites.module */ 45939)).then(m => m.AlllFavouritesPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_swipe_service_ts"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then(m => m.DashboardPageModule)
    },
    {
        path: 'subscription',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_swipe_service_ts"), __webpack_require__.e("src_app_subscription_subscription_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./subscription/subscription.module */ 7474)).then(m => m.SubscriptionPageModule)
    },
    {
        path: 'add-step-map2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("src_app_add-step-map2_add-step-map2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-step-map2/add-step-map2.module */ 44007)).then(m => m.AddStepMap2PageModule)
    },
    {
        path: 'add-step-map2',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-geoautocomplete___ivy_ngcc___index_js"), __webpack_require__.e("src_app_add-step-map2_add-step-map2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-step-map2/add-step-map2.module */ 44007)).then(m => m.AddStepMap2PageModule)
    },
    {
        path: 'connections',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_connections_connections_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./connections/connections.module */ 99243)).then(m => m.ConnectionsPageModule)
    },
    {
        path: 'connected-user-profile/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_connected-user-profile_connected-user-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./connected-user-profile/connected-user-profile.module */ 85497)).then(m => m.ConnectedUserProfilePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _globalService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globalService */ 95498);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);










let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, globalFooService, userService, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.globalFooService = globalFooService;
        this.userService = userService;
        this.router = router;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.platform.backButton.subscribeWithPriority(9999, () => {
                document.addEventListener('backbutton', function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                }, false);
            });
            //this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString('#4c8dff');
            this.statusBar.show();
            this.statusBar.overlaysWebView(false);
            this.splashScreen.hide();
            if (localStorage.user_auth_token != undefined) {
                this.router.navigate(['/tabs/dashboard']);
            }
            else {
                this.router.navigate(['/']);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _globalService__WEBPACK_IMPORTED_MODULE_4__.GlobalFooService },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ 39698);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/http */ 54679);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var ngx_pica__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pica */ 49105);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _awesome_cordova_plugins_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-purchase-2/ngx */ 88138);














const config1 = { url: _config__WEBPACK_IMPORTED_MODULE_2__.config.SOCKET_URL, options: {} };
//IMPORT THE PLUGINS






// import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2'
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_http__WEBPACK_IMPORTED_MODULE_15__.HttpModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_17__.SocketIoModule.forRoot(config1),
            ngx_pica__WEBPACK_IMPORTED_MODULE_7__.NgxPicaModule,
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe,
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__.FileOpener,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            _awesome_cordova_plugins_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_10__.InAppPurchase2,
            //ADD GEOLOCATION Y GEOCODER ON THE PROVIDERS.
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy },
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__.SocialSharing,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 39698:
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "socket_config": function() { return /* binding */ socket_config; }
/* harmony export */ });
// var MAIN_URL = 'http://3.101.20.58';
var MAIN_URL = 'http://3.14.86.221';
// var MAIN_URL = 'http://192.168.1.37';
//var MAIN_URL = 'http://localhost';
var MAIN_URL_PORT = '3001';
var SOCKET_URL_PORT = '3002';
const config = {
    API_URL: MAIN_URL + ':' + MAIN_URL_PORT,
    ENC_SALT: 'gd58_N9!ysS',
    //  BASE_URL: MAIN_URL,
    BASE_URL: MAIN_URL + '/koowee/',
    SOCKET_URL: MAIN_URL + ':' + SOCKET_URL_PORT,
    //IMAGES_URL: MAIN_URL+'/surejob/images',
    IMAGES_URL_All: 'images/',
    IMAGES_URL: '/server/images/profile',
    Staff_URL: MAIN_URL + ':' + MAIN_URL_PORT + '/koowee/images/staff',
    Chat_IMAGES_URL: MAIN_URL + ':' + MAIN_URL_PORT + '/koowee/images/chat',
    Pro_IMAGES_URL: MAIN_URL + ':' + MAIN_URL_PORT + '/koowee/images/project',
    //IMAGES_URL: MAIN_URL+':'+MAIN_URL_PORT+'/koowee/images',
    //IMAGE_EXTENSIONS: ['image/png','image/jpg','image/jpeg','image/gif'],
    VIDEO_EXTENSIONS: ['video/mp4'],
    PDF_EXTENSIONS: ['application/pdf'],
    IMAGE_EXTENSIONS: [
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/gif',
        'image/bmp',
        'image/webp',
    ],
    Message_EXTENSIONS: [
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/gif',
        'application/pdf',
        'application/zip',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/excel',
        'application/vnd.ms-excel',
        'application/x-excel',
        'application/x-msexcel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    IS_MOBILE_APP: 'true',
};
const socket_config = {
    SOCKET_URL: MAIN_URL + ':' + SOCKET_URL_PORT,
};
/*var MAIN_URL = 'http://3.21.114.226';
var MAIN_URL_PORT = '3006';
var SOCKET_URL_PORT = '3002';

export const config = {
    API_URL : MAIN_URL+':'+MAIN_URL_PORT,
    ENC_SALT: 'gd58_N9!ysS',
    BASE_URL: MAIN_URL+'/',
    IMAGES_URL: MAIN_URL+':'+MAIN_URL_PORT+'/surejob/images',
    IMAGE_EXTENSIONS: ['image/png','image/jpg','image/jpeg','image/gif','image/bmp','image/webp'],
    IS_MOBILE_APP: 'true'
};

export const social_config = {
    FACEBOOK_ID: '440387989955093',
    GOOLGLE_CLIENT_ID: '608339143855-msuu5n847treif8htdsju9kia98nr4ms.apps.googleusercontent.com'
};

export const socket_config = {
    SOCKET_URL: MAIN_URL+':'+SOCKET_URL_PORT,
};*/


/***/ }),

/***/ 95498:
/*!**********************************!*\
  !*** ./src/app/globalService.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalFooService": function() { return /* binding */ GlobalFooService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);



let GlobalFooService = class GlobalFooService {
    constructor() {
        this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    publishSomeData(data) {
        this.fooSubject.next(data);
    }
    getObservable() {
        return this.fooSubject;
    }
};
GlobalFooService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GlobalFooService);



/***/ }),

/***/ 9709:
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ 54679);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/map */ 16137);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 2527);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ 86351);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ 46056);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__);








let UserService = class UserService {
    constructor(http, toastController, loadingController) {
        this.http = http;
        this.toastController = toastController;
        this.loadingController = loadingController;
    }
    postData(data, endpoint) {
        try {
            return this.http.post(endpoint, data).map((responseData) => {
                // console.log("POST DATA---->",responseData)
                return responseData.json();
            }, error => {
                return error.json();
            });
        }
        catch (error) {
            console.log("error in post data ======>", error);
        }
    }
    // deletedata(){
    //   return this.http.delete()
    // }
    getData(endpoint) {
        return this.http.get(endpoint).map((responseData) => {
            // console.log("response data--->",responseData.json())
            return responseData.json();
        }).catch((error) => {
            console.log("error data--->", error);
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__.Observable.throw(new Error(error.status));
        });
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                position: 'bottom',
                color: color,
                // showCloseButton: true
            });
            toast.present();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create();
            yield this.loading.present();
        });
    }
    deleteloading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Deleting Account......'
            });
            yield this.loading.present();
        });
    }
    Logoutloading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'LOGOUT Account.....'
            });
            yield this.loading.present();
        });
    }
    stopLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loading != undefined) {
                yield this.loading.dismiss();
            }
            else {
                var self = this;
                setTimeout(function () {
                    self.stopLoading();
                }, 1000);
            }
        });
    }
    encryptData(data, salt) {
        try {
            var enc = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(JSON.stringify(data), salt).toString();
            enc = enc.split('+').join('xMl3Jk').split('/').join('Por21Ld').split('=').join('Ml32');
            return enc;
        }
        catch (e) {
            return 0;
        }
    }
    decryptData(data, salt) {
        try {
            data = data.split('xMl3Jk').join('+').split('Por21Ld').join('/').split('Ml32').join('=');
            const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.decrypt(data, salt);
            if (bytes.toString()) {
                var dec = JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Utf8));
                return dec;
            }
            return data;
        }
        catch (e) {
            return 0;
        }
    }
};
UserService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_5__.Http },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		86030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * See: https://fonts.google.com/license/googlerestricted\n */\n/* armenian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiIUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0308, U+0530-058F, U+2010, U+2024, U+25CC, U+FB13-FB17;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjMUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF;\n}\n/* georgian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPi0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0589, U+10A0-10FF, U+1C90-1CBA, U+1CBD-1CBF, U+2D00-2D2F;\n}\n/* greek */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* gurmukhi */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPhEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0A01-0A76, U+200C-200D, U+20B9, U+25CC, U+262C, U+A830-A839;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjAUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* lao */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjsUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E81-0EDF, U+25CC;\n}\n/* tamil */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiQUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC;\n}\n/* thai */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPj0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjwUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvbQoi-E.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* armenian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiIUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0308, U+0530-058F, U+2010, U+2024, U+25CC, U+FB13-FB17;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjMUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF;\n}\n/* georgian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPi0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0589, U+10A0-10FF, U+1C90-1CBA, U+1CBD-1CBF, U+2D00-2D2F;\n}\n/* greek */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* gurmukhi */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPhEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0A01-0A76, U+200C-200D, U+20B9, U+25CC, U+262C, U+A830-A839;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjAUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* lao */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjsUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E81-0EDF, U+25CC;\n}\n/* tamil */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiQUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC;\n}\n/* thai */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPj0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjwUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvbQoi-E.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* armenian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiIUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0308, U+0530-058F, U+2010, U+2024, U+25CC, U+FB13-FB17;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjMUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF;\n}\n/* georgian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPi0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0589, U+10A0-10FF, U+1C90-1CBA, U+1CBD-1CBF, U+2D00-2D2F;\n}\n/* greek */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* gurmukhi */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPhEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0A01-0A76, U+200C-200D, U+20B9, U+25CC, U+262C, U+A830-A839;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjAUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* lao */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjsUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E81-0EDF, U+25CC;\n}\n/* tamil */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiQUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC;\n}\n/* thai */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPj0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjwUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvbQoi-E.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Google Sans Text';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qE52i0VBuxOCBA.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: 'Google Sans Text';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qEl2i0VBuxOCBA.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Google Sans Text';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qEV2i0VBuxOCBA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Google Sans Text';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qER2i0VBuxOCBA.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Google Sans Text';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qEp2i0VBuxM.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fABc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCBc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fABc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCBc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n#background-content {\n  background-color: red !important;\n  border: 3px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2Fzc2V0cy9jc3MuY3NzIiwiYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsYUFBYTtBQUNiO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUpBQWlKO0VBQ2pKLHVFQUF1RTtBQUN6RTtBQUNBLGFBQWE7QUFDYjtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlKQUFpSjtFQUNqSixvRUFBb0U7QUFDdEU7QUFDQSxlQUFlO0FBQ2Y7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpSkFBaUo7RUFDakosc0dBQXNHO0FBQ3hHO0FBQ0EsYUFBYTtBQUNiO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUpBQWlKO0VBQ2pKLHlFQUF5RTtBQUMzRTtBQUNBLFVBQVU7QUFDVjtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlKQUFpSjtFQUNqSiwwQkFBMEI7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpSkFBaUo7RUFDakoseUZBQXlGO0FBQzNGO0FBQ0EsV0FBVztBQUNYO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUpBQWlKO0VBQ2pKLG9FQUFvRTtBQUN0RTtBQUNBLFFBQVE7QUFDUjtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlKQUFpSjtFQUNqSixrQ0FBa0M7QUFDcEM7QUFDQSxVQUFVO0FBQ1Y7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpSkFBaUo7RUFDakosb0VBQW9FO0FBQ3RFO0FBQ0EsU0FBUztBQUNUO0VBQ0UsMEJBQTBCO0VBQzFCLGtC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Y2VzQ29udGVudCI6WyIvKlxuICogU2VlOiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vbGljZW5zZS9nb29nbGVyZXN0cmljdGVkXG4gKi9cbi8qIGFybWVuaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGlJVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzA4LCBVKzA1MzAtMDU4RiwgVSsyMDEwLCBVKzIwMjQsIFUrMjVDQywgVStGQjEzLUZCMTc7XG59XG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqWVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZGV2YW5hZ2FyaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqTVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDkwMC0wOTdGLCBVKzFDRDAtMUNGOSwgVSsyMDBDLTIwMEQsIFUrMjBBOCwgVSsyMEI5LCBVKzI1Q0MsIFUrQTgzMC1BODM5LCBVK0E4RTAtQThGRjtcbn1cbi8qIGdlb3JnaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGkwVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTg5LCBVKzEwQTAtMTBGRiwgVSsxQzkwLTFDQkEsIFUrMUNCRC0xQ0JGLCBVKzJEMDAtMkQyRjtcbn1cbi8qIGdyZWVrICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpFVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG59XG4vKiBndXJtdWtoaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBoRVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDk2NC0wOTY1LCBVKzBBMDEtMEE3NiwgVSsyMDBDLTIwMEQsIFUrMjBCOSwgVSsyNUNDLCBVKzI2MkMsIFUrQTgzMC1BODM5O1xufVxuLyogaGVicmV3ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpBVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTkwLTA1RkYsIFUrMjAwQy0yMDEwLCBVKzIwQUEsIFUrMjVDQywgVStGQjFELUZCNEY7XG59XG4vKiBsYW8gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQanNVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFODEtMEVERiwgVSsyNUNDO1xufVxuLyogdGFtaWwgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVFVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA5NjQtMDk2NSwgVSswQjgyLTBCRkEsIFUrMjAwQy0yMDBELCBVKzIwQjksIFUrMjVDQztcbn1cbi8qIHRoYWkgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVlVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFMDEtMEU1QiwgVSsyMDBDLTIwMEQsIFUrMjVDQztcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQajBVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzAzMDAtMDMwMSwgVSswMzAzLTAzMDQsIFUrMDMwOC0wMzA5LCBVKzAzMjMsIFUrMDMyOSwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbn1cbi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqd1V2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzFFMDAtMUU5RiwgVSsxRUYyLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpJVXZiUW9pLUUud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGFybWVuaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGlJVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzA4LCBVKzA1MzAtMDU4RiwgVSsyMDEwLCBVKzIwMjQsIFUrMjVDQywgVStGQjEzLUZCMTc7XG59XG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqWVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZGV2YW5hZ2FyaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqTVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDkwMC0wOTdGLCBVKzFDRDAtMUNGOSwgVSsyMDBDLTIwMEQsIFUrMjBBOCwgVSsyMEI5LCBVKzI1Q0MsIFUrQTgzMC1BODM5LCBVK0E4RTAtQThGRjtcbn1cbi8qIGdlb3JnaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGkwVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTg5LCBVKzEwQTAtMTBGRiwgVSsxQzkwLTFDQkEsIFUrMUNCRC0xQ0JGLCBVKzJEMDAtMkQyRjtcbn1cbi8qIGdyZWVrICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpFVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG59XG4vKiBndXJtdWtoaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBoRVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDk2NC0wOTY1LCBVKzBBMDEtMEE3NiwgVSsyMDBDLTIwMEQsIFUrMjBCOSwgVSsyNUNDLCBVKzI2MkMsIFUrQTgzMC1BODM5O1xufVxuLyogaGVicmV3ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpBVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTkwLTA1RkYsIFUrMjAwQy0yMDEwLCBVKzIwQUEsIFUrMjVDQywgVStGQjFELUZCNEY7XG59XG4vKiBsYW8gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQanNVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFODEtMEVERiwgVSsyNUNDO1xufVxuLyogdGFtaWwgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVFVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA5NjQtMDk2NSwgVSswQjgyLTBCRkEsIFUrMjAwQy0yMDBELCBVKzIwQjksIFUrMjVDQztcbn1cbi8qIHRoYWkgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVlVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFMDEtMEU1QiwgVSsyMDBDLTIwMEQsIFUrMjVDQztcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQajBVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzAzMDAtMDMwMSwgVSswMzAzLTAzMDQsIFUrMDMwOC0wMzA5LCBVKzAzMjMsIFUrMDMyOSwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbn1cbi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqd1V2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzFFMDAtMUU5RiwgVSsxRUYyLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpJVXZiUW9pLUUud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGFybWVuaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGlJVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzA4LCBVKzA1MzAtMDU4RiwgVSsyMDEwLCBVKzIwMjQsIFUrMjVDQywgVStGQjEzLUZCMTc7XG59XG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqWVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZGV2YW5hZ2FyaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqTVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDkwMC0wOTdGLCBVKzFDRDAtMUNGOSwgVSsyMDBDLTIwMEQsIFUrMjBBOCwgVSsyMEI5LCBVKzI1Q0MsIFUrQTgzMC1BODM5LCBVK0E4RTAtQThGRjtcbn1cbi8qIGdlb3JnaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGkwVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTg5LCBVKzEwQTAtMTBGRiwgVSsxQzkwLTFDQkEsIFUrMUNCRC0xQ0JGLCBVKzJEMDAtMkQyRjtcbn1cbi8qIGdyZWVrICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpFVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG59XG4vKiBndXJtdWtoaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBoRVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDk2NC0wOTY1LCBVKzBBMDEtMEE3NiwgVSsyMDBDLTIwMEQsIFUrMjBCOSwgVSsyNUNDLCBVKzI2MkMsIFUrQTgzMC1BODM5O1xufVxuLyogaGVicmV3ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpBVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTkwLTA1RkYsIFUrMjAwQy0yMDEwLCBVKzIwQUEsIFUrMjVDQywgVStGQjFELUZCNEY7XG59XG4vKiBsYW8gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQanNVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFODEtMEVERiwgVSsyNUNDO1xufVxuLyogdGFtaWwgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVFVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA5NjQtMDk2NSwgVSswQjgyLTBCRkEsIFUrMjAwQy0yMDBELCBVKzIwQjksIFUrMjVDQztcbn1cbi8qIHRoYWkgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVlVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFMDEtMEU1QiwgVSsyMDBDLTIwMEQsIFUrMjVDQztcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQajBVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzAzMDAtMDMwMSwgVSswMzAzLTAzMDQsIFUrMDMwOC0wMzA5LCBVKzAzMjMsIFUrMDMyOSwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbn1cbi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqd1V2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzFFMDAtMUU5RiwgVSsxRUYyLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpJVXZiUW9pLUUud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGN5cmlsbGljICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2FucyBUZXh0JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fuc3RleHQvdjIxLzVhVXU5LUt6cFJpTENBdDRVbnJjLXhJS21DVTVxRTUyaTBWQnV4T0NCQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAzMDEsIFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcbn1cbi8qIGdyZWVrICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2FucyBUZXh0JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fuc3RleHQvdjIxLzVhVXU5LUt6cFJpTENBdDRVbnJjLXhJS21DVTVxRWwyaTBWQnV4T0NCQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zIFRleHQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zdGV4dC92MjEvNWFVdTktS3pwUmlMQ0F0NFVucmMteElLbUNVNXFFVjJpMFZCdXhPQ0JBLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2FucyBUZXh0JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fuc3RleHQvdjIxLzVhVXU5LUt6cFJpTENBdDRVbnJjLXhJS21DVTVxRVIyaTBWQnV4T0NCQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDJBRiwgVSswMzA0LCBVKzAzMDgsIFUrMDMyOSwgVSsxRTAwLTFFOUYsIFUrMUVGMi0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG59XG4vKiBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMgVGV4dCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnN0ZXh0L3YyMS81YVV1OS1LenBSaUxDQXQ0VW5yYy14SUttQ1U1cUVwMmkwVkJ1eE0ud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGN5cmlsbGljLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9sQ25xRXU5MkZyMU1tU1U1ZkNSYzRBTVA2bGJCUC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbn1cbi8qIGN5cmlsbGljICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1TVTVmQUJjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZ3JlZWstZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1TVTVmQ0JjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGO1xufVxuLyogZ3JlZWsgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVNVNWZCeGM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG59XG4vKiB2aWV0bmFtZXNlICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1TVTVmQ3hjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1TVTVmQ2hjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzFFMDAtMUU5RiwgVSsxRUYyLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1TVTVmQkJjNEFNUDZsUS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMDMwNCwgVSswMzA4LCBVKzAzMjksIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuLyogY3lyaWxsaWMtZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT21DbnFFdTkyRnIxTXU3MnhLS1RVMUt2bnoud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XG59XG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9tQ25xRXU5MkZyMU11NW14S0tUVTFLdm56LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZ3JlZWstZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT21DbnFFdTkyRnIxTXU3bXhLS1RVMUt2bnoud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XG59XG4vKiBncmVlayAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9tQ25xRXU5MkZyMU11NFd4S0tUVTFLdm56LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xufVxuLyogdmlldG5hbWVzZSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9tQ25xRXU5MkZyMU11N1d4S0tUVTFLdm56LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT21DbnFFdTkyRnIxTXU3R3hLS1RVMUt2bnoud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyQUYsIFUrMDMwNCwgVSswMzA4LCBVKzAzMjksIFUrMUUwMC0xRTlGLCBVKzFFRjItMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xufVxuLyogbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbUNucUV1OTJGcjFNdTRteEtLVFUxS2cud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGN5cmlsbGljLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkNSYzRBTVA2bGJCUC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbn1cbi8qIGN5cmlsbGljICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1FVTlmQUJjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZ3JlZWstZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1FVTlmQ0JjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGO1xufVxuLyogZ3JlZWsgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbUVVOWZCeGM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG59XG4vKiB2aWV0bmFtZXNlICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1FVTlmQ3hjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1FVTlmQ2hjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzFFMDAtMUU5RiwgVSsxRUYyLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1FVTlmQkJjNEFNUDZsUS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMDMwNCwgVSswMzA4LCBVKzAzMjksIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuLyogY3lyaWxsaWMtZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1XVWxmQ1JjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xufVxuLyogY3lyaWxsaWMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVdVbGZBQmM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzAxLCBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XG59XG4vKiBncmVlay1leHQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVdVbGZDQmM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XG59XG4vKiBncmVlayAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9sQ25xRXU5MkZyMU1tV1VsZkJ4YzRBTVA2bGJCUC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVdVbGZDeGM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSswMzAwLTAzMDEsIFUrMDMwMy0wMzA0LCBVKzAzMDgtMDMwOSwgVSswMzIzLCBVKzAzMjksIFUrMUVBMC0xRUY5LCBVKzIwQUI7XG59XG4vKiBsYXRpbi1leHQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVdVbGZDaGM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyQUYsIFUrMDMwNCwgVSswMzA4LCBVKzAzMjksIFUrMUUwMC0xRTlGLCBVKzFFRjItMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xufVxuLyogbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVdVbGZCQmM0QU1QNmxRLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSswMzA0LCBVKzAzMDgsIFUrMDMyOSwgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG4iLCIvLyAjYmFja2dyb3VuZC1jb250ZW50e1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuLy8gfVxuQGltcG9ydCB1cmwoJy4uL2Fzc2V0cy9jc3MuY3NzJyk7XG4gI2JhY2tncm91bmQtY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6ICAzcHggc29saWQgcmVkO1xufSJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n\n</ion-app>\n");

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map
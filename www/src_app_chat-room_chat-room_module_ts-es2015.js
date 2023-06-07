(self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_chat-room_chat-room_module_ts"],{

/***/ 7206:
/*!*******************************************************!*\
  !*** ./src/app/chat-room/chat-room-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoomPageRoutingModule": function() { return /* binding */ ChatRoomPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chat_room_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-room.page */ 64910);




const routes = [
    {
        path: '',
        component: _chat_room_page__WEBPACK_IMPORTED_MODULE_0__.ChatRoomPage
    }
];
let ChatRoomPageRoutingModule = class ChatRoomPageRoutingModule {
};
ChatRoomPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatRoomPageRoutingModule);



/***/ }),

/***/ 23801:
/*!***********************************************!*\
  !*** ./src/app/chat-room/chat-room.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoomPageModule": function() { return /* binding */ ChatRoomPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _chat_room_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-room-routing.module */ 7206);
/* harmony import */ var _chat_room_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-room.page */ 64910);
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! time-ago-pipe */ 97620);








let ChatRoomPageModule = class ChatRoomPageModule {
};
ChatRoomPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _chat_room_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatRoomPageRoutingModule
        ],
        declarations: [_chat_room_page__WEBPACK_IMPORTED_MODULE_1__.ChatRoomPage, time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__.TimeAgoPipe]
    })
], ChatRoomPageModule);



/***/ }),

/***/ 64910:
/*!*********************************************!*\
  !*** ./src/app/chat-room/chat-room.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatRoomPage": function() { return /* binding */ ChatRoomPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_room_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat-room.page.html */ 44499);
/* harmony import */ var _chat_room_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-room.page.scss */ 77202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ 9709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ 39698);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Observable */ 46056);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__);












let ChatRoomPage = class ChatRoomPage {
    constructor(socketserver, toastCtrl, loadingCtrl, userService, router, route, activatedRoute) {
        this.socketserver = socketserver;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.page = 1;
        this.count = 0;
        this.total_result = 0;
        this.pageno = 1;
        this.totaldata = 0;
        this.scroolltell = true;
        this.user_data = [];
        this.message = '';
        this.first = 0;
        this.messages_list = [];
        this.image_url = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
        this.errors = ['', null, undefined];
        this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
        this.id = localStorage.getItem('user_auth_id');
        this.user_chat_id = activatedRoute.snapshot.paramMap.get('id');
        /*****************************************************/
        var self = this;
        this.getUpdates().subscribe((new_message) => {
            console.log('new_message');
            console.log(new_message);
            self.pushmessage(new_message);
        });
        /************************************************************/
    }
    ngOnInit() {
        this.id = localStorage.getItem('user_auth_id');
        this.user_chat_id = this.activatedRoute.snapshot.paramMap.get('id');
    }
    ionViewWillEnter() {
        this.id = localStorage.getItem('user_auth_id');
        this.user_chat_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.message_list();
    }
    pushmessage(new_message) {
        console.log('new messgae arriwe', new_message);
        if (localStorage.getItem('user_auth_id') == new_message.reciever_id) {
            this.messages_list.push(new_message);
            var self = this;
            setTimeout(function () {
                self.content.scrollToBottom(300);
            }, 100);
        }
    }
    send_message() {
        if (this.message == '') {
            this.presentToast('Sorry,Message can not be blank!');
        }
        else {
            var msgData = {
                sender_id: this.id,
                reciever_id: this.user_chat_id,
                message: this.message,
            };
            console.log(msgData);
            //call the api service for create new message or group
            this.userService
                .postData(msgData, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/create_message')
                .subscribe((response) => {
                console.log(response);
                //this.messages_list.push(response.data)
                this.socketserver.emit('send-message', response.data);
                this.messages_list.push(response.data);
                this.message = '';
                var self = this;
                setTimeout(function () {
                    self.content.scrollToBottom(300);
                }, 100);
            });
        }
    }
    message_list() {
        var data = {
            user_id: this.id,
            user_chat_id: this.user_chat_id,
            skip: this.page,
        };
        //call the api service for create new message or group
        this.userService
            .postData(data, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_chat')
            .subscribe((response) => {
            this.messages_list = [];
            //this.messages_list = response.data;
            var self = this;
            jquery__WEBPACK_IMPORTED_MODULE_4__.each(response.data, function (key, val) {
                self.messages_list.unshift(val);
            });
            this.user_data = response.saloon_usr;
            this.totaldata = response.total;
            this.pageno = response.pageNo;
            console.log('this.messages_list==>', this.messages_list, 'this.user_data==>', this.user_data._id);
            var self = this;
            setTimeout(function () {
                // self.message_list();
                self.content.scrollToBottom(300);
            }, 100);
            setTimeout(function () {
                this.first = 1;
            }, 300);
        });
    }
    //toast appears
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'bottom',
                //showCloseButton: true
                buttons: [
                    {
                        text: 'Done',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                ],
            });
            toast.present();
        });
    }
    //loading appears
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'my-loading-class',
            });
            yield this.loading.present();
        });
    }
    //stop the loading
    stopLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    isDifferentDay(messageIndex) {
        if (messageIndex === 0)
            return true;
        const d1 = new Date(this.messages_list[messageIndex - 1].created_on);
        const d2 = new Date(this.messages_list[messageIndex].created_on);
        return (d1.getFullYear() !== d2.getFullYear() ||
            d1.getMonth() !== d2.getMonth() ||
            d1.getDate() !== d2.getDate());
    }
    getMessageDate(messageIndex) {
        const wholeDate = new Date(this.messages_list[messageIndex].created_on).toDateString();
        this.messageDateString = wholeDate;
        return this.messageDateString;
    }
    goto_profile() {
        this.router.navigate(['/profile']);
    }
    /*********************************/
    getUpdates() {
        var self = this;
        let observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__.Observable((observer) => {
            self.socketserver.on('message', (data) => {
                observer.next(data);
            });
        });
        return observable;
    }
    logScrollEnd() {
        console.log('scroll end');
    }
    logScrolling(events) {
        if (events.detail.scrollTop == 0) {
            if (this.messages_list.length < this.totaldata) {
                var data = {
                    user_id: this.id,
                    user_chat_id: this.user_chat_id,
                    skip: this.pageno,
                };
                this.userService
                    .postData(data, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_chat')
                    .subscribe((response) => {
                    var self = this;
                    jquery__WEBPACK_IMPORTED_MODULE_4__.each(response.data, function (key, val) {
                        self.messages_list.unshift(val);
                    });
                    this.totaldata = response.total;
                    this.pageno = response.pageNo;
                    console.log('this.messages_list', this.messages_list, 'this.user_data', this.user_data);
                    setTimeout(function () {
                        // self.message_list();
                        self.content.scrollToBottom(300);
                    }, 100);
                });
            }
        }
    }
    logScrollStart() {
        console.log('start');
    }
    loadData(event) {
        console.log('eventeventevent = ', event);
        setTimeout(() => {
            console.log('Done');
            console.log('this.messages_list === ' +
                this.messages_list.length +
                ' , this.totaldata = ' +
                this.totaldata);
            if (this.messages_list.length == this.totaldata ||
                this.messages_list.length > this.totaldata) {
                event.target.disabled = true;
                event.target.complete();
            }
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    backbtn(id) {
        console.log("IDD==>", id);
        this.router.navigate([`/connected-user-profile/${id}`,]);
    }
};
ChatRoomPage.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__.Socket },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute }
];
ChatRoomPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['content', { static: true },] }],
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll,] }]
};
ChatRoomPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-chat-room',
        template: _raw_loader_chat_room_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_room_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatRoomPage);



/***/ }),

/***/ 77202:
/*!***********************************************!*\
  !*** ./src/app/chat-room/chat-room.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-chat-room .user_name {\n  color: #afafaf;\n}\npage-chat-room .message {\n  padding: 10px !important;\n  transition: all 250ms ease-in-out !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n}\npage-chat-room .my_message {\n  background-color: blue !important;\n  color: #000 !important;\n}\npage-chat-room .other_message {\n  background: #dcdcdc !important;\n  color: #000 !important;\n}\npage-chat-room .time {\n  color: #afafaf;\n  float: right;\n  font-size: small;\n}\npage-chat-room .message_row {\n  background-color: #fff;\n}\nion-col.message.other_message {\n  position: relative;\n  width: 100%;\n  display: block;\n  margin-bottom: 12px;\n  max-width: 95%;\n}\nion-col.message.other_message.span {\n  color: #ffff;\n}\nion-col.message.other_message {\n  display: inline-block;\n  background: var(--ion-color-gradient1);\n  --background: var(--ion-color-gradient1);\n  padding: 12px 21px;\n  border-radius: 30px 30px 30px 0;\n  font-size: 14px;\n  margin-bottom: 2px;\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);\n  color: #969696;\n  line-height: 19px;\n}\nion-col.message.other_message div.time {\n  font-size: 10px;\n  font-weight: 500;\n  margin-top: 4px;\n  color: #dadada;\n  letter-spacing: 0.5px;\n  display: block;\n}\nion-col.message.my_message {\n  float: right;\n  padding: 0px;\n  text-align: right;\n  display: inline-block;\n  background: #ffff;\n  padding: 12px 21px;\n  border-radius: 30px 30px 0 30px;\n  font-size: 14px;\n  margin-bottom: 2px;\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);\n  color: #969696;\n  line-height: 19px;\n}\nion-col.message.my_message .span {\n  background: linear-gradient(to right, #6fcdff, #70b0ff);\n  color: #fff;\n  border-radius: 30px 30px 0 30px;\n  text-align: left;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block !important;\n}\nion-footer .message_row {\n  display: flex;\n  justify-content: center;\n  box-shadow: -5px 0px 20px 0px #00000021;\n}\nion-footer .message_row ion-input {\n  color: #000000;\n  --padding-left: 15px;\n  font-size: 14px;\n  height: 50px;\n  --padding-start: 15px;\n}\nion-footer .message_row button {\n  background: #2954A7;\n  min-width: 50px;\n  font-size: 25px;\n  color: #fff;\n}\n[rightSide] {\n  display: flex;\n  justify-content: flex-end;\n}\n[rightSide] [innerRight] {\n  padding: 0px;\n  text-align: left;\n  display: inline-block;\n  background: #ffff;\n  padding: 12px 21px;\n  border-radius: 30px 30px 0 30px;\n  font-size: 14px;\n  margin: 10px 0;\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);\n  color: #969696;\n  line-height: 19px;\n  overflow: auto;\n  margin-right: 5px;\n}\n[rightSide] [innerRight] span {\n  color: #000;\n}\n[leftSide] {\n  display: flex;\n  justify-content: flex-start;\n}\n[leftSide] [innerLeft] {\n  text-align: left;\n  display: inline-block;\n  background: #ffff;\n  padding: 12px 21px;\n  border-radius: 30px 30px 30px 0px;\n  font-size: 14px;\n  margin: 10px 0;\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);\n  color: #969696;\n  line-height: 19px;\n  overflow: auto;\n  margin-left: 5px;\n}\n[leftSide] [innerLeft] span {\n  color: #000;\n}\n.time {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtcm9vbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxjQUFBO0FBQVI7QUFFSTtFQUNJLHdCQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FBQVI7QUFFSTtFQUNJLGlDQUFBO0VBQ0Esc0JBQUE7QUFBUjtBQUVJO0VBQ0ksOEJBQUE7RUFDQSxzQkFBQTtBQUFSO0FBRUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQVI7QUFFSTtFQUNJLHNCQUFBO0FBQVI7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUtBO0VBQ0ksWUFBQTtBQUZKO0FBS0E7RUFDSSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0QsMkNBQUE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUtBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFGSjtBQUtBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNDLHFCQUFBO0VBQ0csaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0QsMkNBQUE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUlBO0VBQ0ksdURBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUZKO0FBTUE7RUFDSSx5QkFBQTtBQUhKO0FBT0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtBQUpSO0FBS1E7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBSFo7QUFLUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSFo7QUFRQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQUxKO0FBTUk7RUFJSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFQUjtBQVJRO0VBQ0ksV0FBQTtBQVVaO0FBU0E7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7QUFOSjtBQU9JO0VBSUksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQU5RO0VBQ0ksV0FBQTtBQVFaO0FBVUE7RUFDSSxlQUFBO0FBUEoiLCJmaWxlIjoiY2hhdC1yb29tLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtY2hhdC1yb29tIHtcbiAgICAudXNlcl9uYW1lIHtcbiAgICAgICAgY29sb3I6ICNhZmFmYWY7XG4gICAgfVxuICAgIC5tZXNzYWdlIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm15X21lc3NhZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5vdGhlcl9tZXNzYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2RjZGNkYyAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAudGltZSB7XG4gICAgICAgIGNvbG9yOiAjYWZhZmFmO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgfVxuICAgIC5tZXNzYWdlX3JvdyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxufVxuXG5cbmlvbi1jb2wubWVzc2FnZS5vdGhlcl9tZXNzYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbn1cblxuaW9uLWNvbC5tZXNzYWdlLm90aGVyX21lc3NhZ2Uuc3BhbiB7XG4gICAgY29sb3I6ICNmZmZmO1xufVxuXG5pb24tY29sLm1lc3NhZ2Uub3RoZXJfbWVzc2FnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50MSk7XG4gICAgcGFkZGluZzogMTJweCAyMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAzMHB4IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2JhKDAsMCwwLDAuNCk7XG4gICAgY29sb3I6ICM5Njk2OTY7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbmlvbi1jb2wubWVzc2FnZS5vdGhlcl9tZXNzYWdlIGRpdi50aW1lIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgY29sb3I6ICNkYWRhZGE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tY29sLm1lc3NhZ2UubXlfbWVzc2FnZSB7XG5mbG9hdDogcmlnaHQ7XG5wYWRkaW5nOiAwcHg7XG50ZXh0LWFsaWduOiByaWdodDtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XG4gICAgcGFkZGluZzogMTJweCAyMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCByZ2JhKDAsMCwwLDAuNCk7XG4gICAgY29sb3I6ICM5Njk2OTY7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG5cbi5zcGFuICB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmZjZGZmLCAjNzBiMGZmKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMCAzMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG59XG5cbi5jYW4tZ28tYmFjayA+IGlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG5pb24tZm9vdGVye1xuICAgIC5tZXNzYWdlX3Jvd3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IC01cHggMHB4IDIwcHggMHB4ICMwMDAwMDAyMTtcbiAgICAgICAgaW9uLWlucHV0e1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAtLXBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjk1NEE3O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbltyaWdodFNpZGVde1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBbaW5uZXJSaWdodF17XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDAgMzBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYmEoMCwwLDAsMC40KTtcbiAgICAgICAgY29sb3I6ICM5Njk2OTY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgXG59XG5cbltsZWZ0U2lkZV17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgW2lubmVyTGVmdF17XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAzMHB4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IHJnYmEoMCwwLDAsMC40KTtcbiAgICAgICAgY29sb3I6ICM5Njk2OTY7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gICBcbn1cblxuLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ 44499:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-room/chat-room.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border heder-main \" align-title=\"center\">\n   <ion-toolbar lines=\"none\" >\n    <ion-back-button routerLink=\"/connected-user-profile/{{user_data._id}}\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title  class=\"center\" *ngIf=\"errors.indexOf(user_data?.firstname) == -1\">\n      {{user_data.firstname +\" \"+user_data.lastname}}\n    </ion-title>\n    </ion-toolbar>\n</ion-header>\n \n<ion-content #content  [scrollEvents]=\"true\"\n  (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\">\n <ion-infinite-scroll *ngIf=\"messages_list.length < totaldata\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n    <div  *ngFor=\"let message of messages_list\">\n      <div leftSide *ngIf=\"message.sender_id == user_chat_id\" class=\"message other_message\" >\n       <!--  <span class=\"user_name\">kkk</span><br> -->\n        <div innerLeft>\n            <span>{{message.message}}</span>\n            <div class=\"time\">{{message.created_on | timeAgo }}</div>\n          </div>\n          \n      </div>\n \n      <div rightSide *ngIf=\"message.sender_id == id\" class=\"message my_message\">\n       <!--  <span class=\"user_name\">kkkk</span><br> -->\n        <div innerRight>\n          <span>{{message.message}}</span>\n          <div class=\"time\">{{message.created_on | timeAgo }}</div>\n        </div>\n      </div>\n    </div>\n\n \n</ion-content>\n \n<ion-footer>\n  <div class=\"message_row\">\n    <ion-input type=\"text\" placeholder=\"Message\" [(ngModel)]=\"message\"></ion-input>\n    <button ion-button clear color=\"primary\" (click)=\"send_message()\" [disabled]=\"message === ''\">\n      <ion-icon name=\"paper-plane-outline\"></ion-icon>\n    </button>\n  </div>\n</ion-footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chat-room_chat-room_module_ts-es2015.js.map
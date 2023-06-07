(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkkoowee"] = self["webpackChunkkoowee"] || []).push([["src_app_step-details_step-details_module_ts"], {
    /***/
    5814: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StepDetailsPageRoutingModule": function StepDetailsPageRoutingModule() {
          return (
            /* binding */
            _StepDetailsPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _step_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./step-details.page */
      94839);

      var routes = [{
        path: '',
        component: _step_details_page__WEBPACK_IMPORTED_MODULE_0__.StepDetailsPage
      }];

      var _StepDetailsPageRoutingModule = function StepDetailsPageRoutingModule() {
        _classCallCheck(this, StepDetailsPageRoutingModule);
      };

      _StepDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StepDetailsPageRoutingModule);
      /***/
    },

    /***/
    12142: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StepDetailsPageModule": function StepDetailsPageModule() {
          return (
            /* binding */
            _StepDetailsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _step_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./step-details-routing.module */
      5814);
      /* harmony import */


      var _step_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./step-details.page */
      94839);
      /* harmony import */


      var time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! time-ago-pipe */
      97620);

      var _StepDetailsPageModule = function StepDetailsPageModule() {
        _classCallCheck(this, StepDetailsPageModule);
      };

      _StepDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _step_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.StepDetailsPageRoutingModule],
        declarations: [_step_details_page__WEBPACK_IMPORTED_MODULE_1__.StepDetailsPage, time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__.TimeAgoPipe]
      })], _StepDetailsPageModule);
      /***/
    },

    /***/
    94839: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StepDetailsPage": function StepDetailsPage() {
          return (
            /* binding */
            _StepDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_step_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./step-details.page.html */
      89632);
      /* harmony import */


      var _step_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./step-details.page.scss */
      4106);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      9709);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../config */
      39698);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      68384);
      /* harmony import */


      var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/filesystem */
      61977);
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      40496);
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      33098);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! dom-to-image */
      83697);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      18752);

      var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Plugins.Camera; // import domtoimage from 'dom-to-image';
      // import pdfMake from "pdfmake/build/pdfmake";
      // import pdfFonts from "pdfmake/build/vfs_fonts";

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__.pdfMake.vfs; // import { jsPDF } from 'jspdf';

      var _StepDetailsPage = /*#__PURE__*/function () {
        function StepDetailsPage(userService, router, alertController, activatedRoute, platform, fileOpener) {
          _classCallCheck(this, StepDetailsPage);

          this.userService = userService;
          this.router = router;
          this.alertController = alertController;
          this.activatedRoute = activatedRoute;
          this.platform = platform;
          this.fileOpener = fileOpener;
          this.IMAGES_URL = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL;
          this.IMAGES_URL_All = _config__WEBPACK_IMPORTED_MODULE_3__.config.IMAGES_URL_All;
          this.errors = ['', null, undefined];
          this.main_trip = [];
          this.images = [];
          this.review = '';
          this.review_error = false;
          this.review_data = [];
          this.add_button_show = 0;
          this.pdfObj = null;
          this.trip_id = activatedRoute.snapshot.paramMap.get('id');
        }

        _createClass(StepDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = localStorage.getItem('user_auth_id');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log("hello i am running"); // Set the Canvas Element and its size  

            var div = document.getElementById('printable-area2');
            var styles = window.getComputedStyle(div);
            this.element.nativeElement.width = parseInt(styles.width);
            this.element.nativeElement.height = parseInt(styles.height);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.id = localStorage.getItem('user_auth_id');
            this.getdata();
            this.getreviews();
          }
        }, {
          key: "getdata",
          value: function getdata() {
            var _this = this;

            this.userService.postData({
              _id: this.id,
              trip_id: this.trip_id
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_trip_detail').subscribe(function (result) {
              console.log("trip 2-->", result);

              if (result.data != undefined && result.data.length > 0) {
                _this.main_trip = result.data[0].trip;
                _this.images = result.data[0].trip.images;

                if (_this.main_trip.userId == _this.id) {
                  _this.add_button_show = 1;
                }
              }
            });
          }
        }, {
          key: "sendreview",
          value: function sendreview() {
            var _this2 = this;

            if (this.review == '' || this.review == undefined) {
              this.review_error = true;
            } else {
              this.review_error = false;
            }

            if (this.review != '' && this.review != undefined) {
              this.userService.presentLoading();
              this.userService.postData({
                review: this.review,
                step_id: this.trip_id,
                user_id: this.id
              }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/send_review').subscribe(function (result) {
                _this2.userService.stopLoading();

                if (result.status == 1) {
                  _this2.review = '';

                  _this2.userService.presentToast('Comment has been submited successfully!', 'success');

                  _this2.getreviews();
                } else {
                  _this2.userService.presentToast('Error to submit a comment please, try again later', 'danger');
                }
              }, function (err) {
                _this2.userService.stopLoading();

                _this2.userService.presentToast('Unable to send to a request, try again later', 'danger');
              });
            }
          }
        }, {
          key: "writereview",
          value: function writereview(vl) {
            this.review = vl;
          }
        }, {
          key: "getreviews",
          value: function getreviews() {
            var _this3 = this;

            this.userService.postData({
              step_id: this.trip_id,
              user_id: this.id
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/get_review').subscribe(function (result) {
              _this3.review_data = result;
              console.log('this.review_data = ', _this3.review_data);
            });
          }
        }, {
          key: "delete",
          value: function _delete(step_id, trip_id) {
            var _this4 = this;

            console.log('step_id == ', step_id, 'trip_id == ', trip_id);
            this.userService.postData({
              step_id: step_id,
              user_id: this.id
            }, _config__WEBPACK_IMPORTED_MODULE_3__.config.API_URL + '/delete_step').subscribe(function (result) {
              _this4.router.navigate(['/trip-details/' + trip_id]);
            });
          }
        }, {
          key: "deletstep",
          value: function deletstep(step_id, trip_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Are you sure you want to delete this?',
                        cssClass: 'alertfults',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            return false;
                          }
                        }, {
                          text: 'Confirm',
                          handler: function handler() {
                            _this5["delete"](step_id, trip_id);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "shareit4",
          value: function shareit4() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var div, options, styles, canvas, img;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // console.log("name-->", name)
                      this.userService.presentLoading();
                      div = document.getElementById('printable-area2');
                      console.log("div-->", div);
                      options = {
                        background: 'white',
                        height: 845,
                        width: 595
                      };
                      styles = window.getComputedStyle(div); // Create a new canvas element and set its dimensions to match the element

                      canvas = document.createElement("canvas");
                      console.log("styles-->", styles, "canvas-->", canvas);
                      canvas.width = parseInt(styles.width);
                      canvas.height = parseInt(styles.height);
                      console.log("width-->", canvas.width, "canvas-->", canvas.height); // Create a new image element and set its source to the data URL of the element

                      img = new Image();
                      console.log("IMAGE--->", img);
                      img.src = "data:image/png;base64," + img;
                      console.log("platform-->", this.platform.is("cordova"));
                      console.log("img src=========>", img); // const loadImage = () => {
                      //   console.log("LOad img=========>",)
                      //   return new Promise<void>((resolve, reject) => {
                      //     img.onload = () => {
                      //       resolve(); 
                      //       console.log("RESOLve--->")
                      //     };
                      //     img.onerror = () => {
                      //       reject();
                      //       this.userService.stopLoading()
                      //       console.log("REJect--->")
                      //     };
                      //   });
                      // };
                      // loadImage().then(() => {
                      //   console.log("LOADIMG()--->")
                      //   const canvas = document.createElement("canvas");
                      //   canvas.width = img.width;
                      //   canvas.height = img.height;
                      //   const context = canvas.getContext("2d");
                      //   context.drawImage(img, 0, 0, canvas.width, canvas.height);
                      //   // Get the data URL representing the canvas content as a PNG image
                      //   const dataUrl = canvas.toDataURL("image/png");
                      //   // Create the PDF document definition using the image
                      //   const docDefinition = {
                      //     content: [{
                      //       image: dataUrl,
                      //       width: 500,
                      //     }]
                      //   };
                      // this.pdfObj = pdfMake.createPdf(docDefinition);
                      // var blob = this.b64toBlob(, "application/pdf");
                      // console.log("pdfobj-->", this.pdfObj)
                      // console.log("platform-->", this.plt.is("cordova"))
                      // if (this.plt.is('cordova')) {
                      //   console.log("if--->")
                      //   // this.pdfObj.getBase64(async (data) => {
                      //     try {
                      //       console.log("try--->")
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
                      //     }
                      //     catch (e) {
                      //       console.error('Unable to write file', e);
                      //     }
                      //   // })
                      // }
                      // else {
                      //   console.log("else--->")
                      //   this.userService.stopLoading()
                      //   this.pdfObj.download("payment_Details.pdf");
                      // }
                      // })
                      // Once the image has loaded, draw it onto the canvas
                      //  img.onload = () => {
                      //     const context = canvas.getContext("2d");
                      //     context.drawImage(img, 0, 0, canvas.width, canvas.height);
                      //     console.log("contextDRAwing-->",context)
                      //     // Get the data URL representing the canvas content as a PNG image
                      //     const dataUrl = canvas.toDataURL("image/png");
                      //     console.log("dataurl-->",dataUrl)
                      //     const docDefinition = {
                      //       content: [{
                      //         image: dataUrl,
                      //         width: 500,
                      //       }]
                      //     };
                      //     this.pdfObj = pdfMake.createPdf(docDefinition);
                      //     console.log("pdfobj-->", this.pdfObj)
                      //     console.log("platform-->", this.plt.is("cordova"))
                      //     if (this.plt.is('cordova')) {
                      //       console.log("if--->")
                      //             this.pdfObj.getBase64(async (data) => {
                      //               try {
                      //                 console.log("try--->")
                      //                 let path = `pdf/paymentdetail_${Date.now()}.pdf`;
                      //                 const result = await Filesystem.writeFile({
                      //                   path,
                      //                   data,
                      //                   directory: Directory.Documents,
                      //                   recursive: true
                      //                 });
                      //                 console.log('path === ', path, result.uri);
                      //                 this.userService.stopLoading();
                      //                 this.fileOpener.open(`${result.uri}`, 'application/pdf');
                      //                 return;
                      //               }
                      //                  catch (e) {
                      //                 console.error('Unable to write file', e);
                      //               }
                      //             })
                      //           }
                      //           else {
                      //             console.log("else--->")
                      //             this.userService.stopLoading()
                      //             this.pdfObj.download("payment_Details.pdf");
                      //           }
                      //   }
                      //  domtoimage.toPng(div, options).then(
                      //   (dataUrl) => {
                      //     var img = new Image();
                      //     console.log("hello 2");
                      // var docDefinition = {
                      //   content: [{
                      //     image: dataUrl,
                      //     width: 500,
                      //   }]
                      // };
                      //     //  pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
                      //     this.pdfObj = pdfMake.createPdf(docDefinition);
                      //     if (this.plt.is('cordova')) {
                      //       this.pdfObj.getBase64(async (data) => {
                      //         try {
                      //           let path = `pdf/paymentdetail_${Date.now()}.pdf`;
                      //           const result = await Filesystem.writeFile({
                      //             path,
                      //             data,
                      //             directory: Directory.Documents,
                      //             recursive: true
                      //           });
                      //           console.log('path === ', path, result.uri);
                      //           this.userService.stopLoading();
                      //           this.fileOpener.open(`${result.uri}`, 'application/pdf');
                      //           return;
                      //         }
                      //            catch (e) {
                      //           console.error('Unable to write file', e);
                      //         }
                      //       });
                      //     } else {
                      //       //this.pdfObj.download("payment_Details.pdf");
                      //     }
                      //   },
                      //   (err) => {
                      //     this.userService.stopLoading()
                      //     console.log("error", err);
                      //   }
                      //   ) 

                    case 15:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "convertBase64ToBlob",
          value: function convertBase64ToBlob(b64Data, contentType) {
            contentType = contentType || '';
            var sliceSize = 512;
            b64Data = b64Data.replace(/^[^,]+,/, '');
            b64Data = b64Data.replace(/\s/g, '');
            var byteCharacters = window.atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            return new Blob(byteArrays, {
              type: contentType
            });
          }
        }, {
          key: "b64toBlob",
          value: function b64toBlob(b64Data, contentType) {
            contentType = contentType || '';
            var sliceSize = 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              var byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, {
              type: contentType
            });
            return blob;
          }
        }, {
          key: "base64ToPDF",
          value: function base64ToPDF(base64String, filename) {
            // Remove data prefix from base64 string
            var base64Data = base64String.replace(/^data:application\/pdf;base64,/, ""); // Convert base64 string to Uint8Array

            var byteCharacters = atob(base64Data);
            var byteNumbers = new Array(byteCharacters.length);

            for (var i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers); // Create PDF blob

            var pdfBlob = new Blob([byteArray], {
              type: "application/pdf"
            }); // Create URL for the PDF blob

            var pdfURL = URL.createObjectURL(pdfBlob); // Create download link and trigger click event

            var downloadLink = document.createElement("a");
            downloadLink.href = pdfURL;
            downloadLink.download = filename;
            document.body.appendChild(downloadLink);
            downloadLink.click(); // Clean up URL object

            URL.revokeObjectURL(pdfURL);
          }
        }, {
          key: "demoDownlaod",
          value: function demoDownlaod() {
            dom_to_image__WEBPACK_IMPORTED_MODULE_8___default().toPng(this.element.nativeElement).then(function (dataUrl) {
              console.log("------>", dataUrl); // this.imageData = dataUrl.replace(/^data:image\/[a-z]+;base64,/, "");

              var sliceSize = 512;
              var byteArrays = [];
              var byteCharacters = atob(dataUrl.replace(/^data:image\/[a-z]+;base64,/, ""));

              for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);

                for (var i = 0; i < slice.length; i++) {
                  byteNumbers[i] = slice.charCodeAt(i);
                }

                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
              }

              console.log("bytenumber===>", byteArray);
              var string = new TextEncoder().encode("Plain Text");
              console.log("String==>", string);
              var img = new Blob([string], {
                type: 'application/pdf'
              });
              console.log('img==>', img);
              var a = document.createElement("a");
              document.body.appendChild(a);
              var url = window.URL.createObjectURL(img);
              window.open(url);
              a.href = url;
              a.download = String("propsal.pdf");
              a.click();
              window.URL.revokeObjectURL(url); // if (this.plt.is('cordova')) {
              //   console.log("if--->")
              //   this.pdfObj.getBase64(async (data) => {
              //     try {
              //       console.log("try--->")
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
              //     }
              //     catch (e) {
              //       console.error('Unable to write file', e);
              //     }
              //   })
              // }
              // else {
              //   const filename = Math.random() * 2000;
              //   const downloadLink = document.createElement('a');
              //   downloadLink.href = dataUrl;
              //   downloadLink.download = filename.toString();
              //   downloadLink.style.display = 'none';
              //   document.body.appendChild(downloadLink);
              //   downloadLink.click();
              //   document.body.removeChild(downloadLink);
              //   console.log("else--->")
              //   this.userService.stopLoading()
              //   this.pdfObj.download("payment_Details.pdf");
              // }
            });
          }
        }, {
          key: "downlaod",
          value: function downlaod() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var dataUrl, docDefinition, a;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      _context4.next = 3;
                      return dom_to_image__WEBPACK_IMPORTED_MODULE_8___default().toPng(this.element.nativeElement);

                    case 3:
                      dataUrl = _context4.sent;
                      docDefinition = {
                        content: [{
                          image: dataUrl,
                          width: 500
                        }]
                      };

                      if (this.platform.is("cordova")) {
                        console.log("hello");
                        this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__.createPdf(docDefinition);
                        this.pdfObj.getBase64(function (data) {
                          return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                            var path, result;
                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    _context3.prev = 0;
                                    path = "pdf/paymentdetail_".concat(Date.now(), ".pdf");
                                    _context3.next = 4;
                                    return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Filesystem.writeFile({
                                      path: path,
                                      data: data,
                                      directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Directory.Documents,
                                      recursive: true
                                    });

                                  case 4:
                                    result = _context3.sent;
                                    console.log('path === ', path, result.uri);
                                    this.userService.stopLoading();
                                    this.fileOpener.open("".concat(result.uri), 'application/pdf');
                                    _context3.next = 13;
                                    break;

                                  case 10:
                                    _context3.prev = 10;
                                    _context3.t0 = _context3["catch"](0);
                                    console.error('Unable to write file', _context3.t0);

                                  case 13:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3, this, [[0, 10]]);
                          }));
                        });
                      } else {
                        a = document.createElement('a');
                        a.href = dataUrl;
                        a.download = "fndhfaf.png";
                        document.body.appendChild(a);
                        a.style = 'display: none';
                        a.click();
                        a.remove();
                      }

                      _context4.next = 11;
                      break;

                    case 8:
                      _context4.prev = 8;
                      _context4.t0 = _context4["catch"](0);
                      console.log("error in catch ==>", _context4.t0);

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[0, 8]]);
            }));
          }
        }]);

        return StepDetailsPage;
      }();

      _StepDetailsPage.ctorParameters = function () {
        return [{
          type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
        }, {
          type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__.FileOpener
        }];
      };

      _StepDetailsPage.propDecorators = {
        element: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: ['elementId', {
            "static": false
          }]
        }]
      };
      _StepDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-step-details',
        template: _raw_loader_step_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_step_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StepDetailsPage);
      /***/
    },

    /***/
    4106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\n * See: https://fonts.google.com/license/googlerestricted\n */\n/* armenian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiIUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0308, U+0530-058F, U+2010, U+2024, U+25CC, U+FB13-FB17;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjMUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF;\n}\n/* georgian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPi0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0589, U+10A0-10FF, U+1C90-1CBA, U+1CBD-1CBF, U+2D00-2D2F;\n}\n/* greek */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* gurmukhi */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPhEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0A01-0A76, U+200C-200D, U+20B9, U+25CC, U+262C, U+A830-A839;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjAUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* lao */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjsUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E81-0EDF, U+25CC;\n}\n/* tamil */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiQUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC;\n}\n/* thai */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPj0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjwUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvbQoi-E.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* armenian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiIUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0308, U+0530-058F, U+2010, U+2024, U+25CC, U+FB13-FB17;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjMUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF;\n}\n/* georgian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPi0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0589, U+10A0-10FF, U+1C90-1CBA, U+1CBD-1CBF, U+2D00-2D2F;\n}\n/* greek */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* gurmukhi */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPhEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0A01-0A76, U+200C-200D, U+20B9, U+25CC, U+262C, U+A830-A839;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjAUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* lao */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjsUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E81-0EDF, U+25CC;\n}\n/* tamil */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiQUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC;\n}\n/* thai */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPj0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjwUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvbQoi-E.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* armenian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiIUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0308, U+0530-058F, U+2010, U+2024, U+25CC, U+FB13-FB17;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* devanagari */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjMUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FF;\n}\n/* georgian */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPi0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0589, U+10A0-10FF, U+1C90-1CBA, U+1CBD-1CBF, U+2D00-2D2F;\n}\n/* greek */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* gurmukhi */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPhEUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0A01-0A76, U+200C-200D, U+20B9, U+25CC, U+262C, U+A830-A839;\n}\n/* hebrew */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjAUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;\n}\n/* lao */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjsUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E81-0EDF, U+25CC;\n}\n/* tamil */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiQUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC;\n}\n/* thai */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPiYUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPj0UvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjwUvbQoi-Entw.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Google Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/googlesans/v46/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvbQoi-E.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Google Sans Text';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qE52i0VBuxOCBA.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: 'Google Sans Text';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qEl2i0VBuxOCBA.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Google Sans Text';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qEV2i0VBuxOCBA.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Google Sans Text';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qER2i0VBuxOCBA.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Google Sans Text';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qEp2i0VBuxM.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fABc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCBc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fABc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCBc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format('woff2');\n  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\nion-content[bg-grey] .contet-sect {\n  padding: 0px;\n  display: block;\n}\nion-content[bg-grey] .slids-box {\n  margin-right: -20px;\n  margin-top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly {\n  display: block;\n  width: 100%;\n  height: 135px;\n  border-radius: 0px;\n  overflow: hidden;\n  position: relative;\n}\nion-content[bg-grey] .slids-box .img-bx-sly img {\n  width: 100%;\n  height: 230px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number {\n  position: absolute;\n  bottom: 10px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly span.likes-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly h4.name-ffls {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: #fff;\n  text-align: left;\n  padding: 10px;\n  margin: 0px;\n  font-size: 15px;\n  background: linear-gradient(to top, #000000, #00000000);\n  line-height: 19px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis {\n  height: auto;\n  background: #fff;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis img {\n  width: 100%;\n  height: 275px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis h4.tlt-stor {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n  width: 100%;\n  font-size: 14px;\n  margin: 0px;\n  padding: 5px 10px 12px;\n  color: #000;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.likes-number {\n  bottom: auto;\n  bottom: initial;\n  top: 15px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number {\n  position: absolute;\n  top: 47px;\n  right: 0;\n  background: rgba(255, 255, 255, 0.8);\n  color: #000;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 3px 6px 3px 10px;\n  border-radius: 50px 0 0 50px;\n}\nion-content[bg-grey] .slids-box .img-bx-sly.storis span.mesgs-number img {\n  width: 14px;\n  height: 14px;\n  vertical-align: sub;\n  margin-right: 4px;\n}\nion-content[bg-grey] .slids-box.new-box-a {\n  margin-right: -5px;\n  margin-top: -5px;\n  margin-left: -5px;\n}\nion-content[bg-grey] .top-useer-s {\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  padding-left: 60px;\n  color: #000;\n  padding-bottom: 5px;\n  line-height: 15px;\n  padding-top: 15px;\n  padding-bottom: 22px;\n  border-bottom: 1px solid #eaeaea;\n}\nion-content[bg-grey] .top-useer-s img.adm-usr {\n  width: 50px !important;\n  height: 50px !important;\n  border-radius: 50%;\n  position: absolute;\n  left: 0px;\n  -o-object-fit: cover;\n  object-fit: cover;\n  top: 10px;\n}\nion-content[bg-grey] .top-useer-s h5 {\n  margin: 0px;\n  font-size: 16px;\n  margin-top: 2px;\n  margin-bottom: 0px;\n}\nion-content[bg-grey] .top-useer-s span.time-al {\n  font-size: 10px;\n  color: rgba(0, 0, 0, 0.73);\n}\nion-content[bg-grey] span.livestm-dot {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  background: #F44336;\n  bottom: 10px;\n  right: 7px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.31);\n  background: radial-gradient(circle at 12px 12px, #f77e75, #F44336);\n}\nion-content[bg-grey] .content-all-pst {\n  padding: 7px 20px 20px;\n  margin-top: -35px;\n  background: #fff;\n  z-index: 111;\n  background-color: #fff !important;\n  position: relative;\n  border-radius: 20px 20px 0 0;\n  box-shadow: 0px -20px 20px rgba(0, 0, 0, 0.28);\n  min-height: 100%;\n}\nion-content[bg-grey] .content-all-pst h4.ttl-main {\n  font-size: 16px;\n}\nion-content[bg-grey] .content-all-pst p {\n  font-size: 14px;\n  color: #8a8a8a;\n  font-weight: 300;\n  letter-spacing: 0.2px;\n  line-height: 23px;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\nion-content[bg-grey] .content-all-pst .commnts {\n  position: relative;\n  padding-left: 53px;\n  z-index: 11;\n  margin-top: 20px;\n  display: block;\n}\nion-content[bg-grey] .content-all-pst .commnts img.adm-usr {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  left: 0;\n  border-radius: 50%;\n  border: 1px solid rgba(21, 179, 166, 0.45);\n  box-shadow: 0px 4px 14px rgba(21, 179, 166, 0.15);\n  top: 3px;\n}\nion-content[bg-grey] .content-all-pst .commnts h5 {\n  font-size: 14px;\n  margin: 0px;\n  color: #4267B2;\n}\nion-content[bg-grey] .content-all-pst .commnts h5 span.time-al {\n  float: right;\n  font-size: 10px;\n  color: #b5b5b5;\n}\nion-content[bg-grey] .content-all-pst .commnts p {\n  font-size: 12px;\n  line-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 0px;\n}\nion-content[bg-grey] .mt-20 {\n  margin-top: 20px !important;\n}\nion-content[bg-grey] .add-commnt {\n  position: relative;\n  margin-top: 25px;\n  padding-right: 60px;\n}\nion-content[bg-grey] .add-commnt ion-input {\n  background: #f9f9f9;\n  --padding: 14px;\n  --padding-start: 20px;\n  font-family: \"Poppins\", sans-serif !important;\n  font-size: 14px;\n  color: #000;\n  --border-radius: 50px;\n  border-radius: 50px;\n  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.06);\n  border: 1px solid #f3f3f3;\n  height: 45px;\n}\nion-content[bg-grey] .add-commnt a.btn-send {\n  width: 45px;\n  height: 45px;\n  background: var(--ion-color-gradient1);\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 19px;\n  box-shadow: 0px 4px 14px rgba(60, 103, 188, 0.38);\n}\nspan.play-icon {\n  position: absolute;\n  width: 55px;\n  height: 55px;\n  background: linear-gradient(to top, #04bb79, #038254) !important;\n  z-index: 111;\n  top: 0;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 24px;\n  left: calc(50% - 27px);\n  top: calc(50% - 30px);\n  box-shadow: 0px 4px 30px rgba(3, 139, 90, 0.79);\n}\n.icon-rut {\n  position: absolute;\n  right: 0;\n  top: 30px;\n}\n.icon-rut span {\n  font-size: 13px;\n  margin-left: 12px;\n}\n.icon-rut span img {\n  height: 16px;\n  width: auto;\n  vertical-align: bottom;\n  margin-right: 1px;\n}\n.cont-date-syt {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 12px;\n  background: #f3f3f3;\n  padding: 12px 20px;\n  margin-top: 13px;\n  border-radius: 10px;\n}\n.cont-date-syt h4 {\n  margin-bottom: 5px;\n  color: #4267B2;\n  font-weight: 500;\n  margin-top: 0px;\n  font-size: 19px;\n}\n.cont-date-syt ul.dtar-all {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.cont-date-syt ul.dtar-all li {\n  display: inline-block;\n  position: relative;\n  padding-right: 26px;\n  font-size: 14px;\n  color: #808080;\n}\n.cont-date-syt ul.dtar-all li img {\n  width: 24px;\n}\n.cont-date-syt ul.dtar-all li ion-icon {\n  color: #ffc107;\n  font-size: 17px;\n  vertical-align: sub;\n}\n.cont-date-syt ul.dtar-all li:after {\n  content: \"\";\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: #4267B2;\n  border-radius: 50%;\n  top: 7px;\n  right: 10px;\n}\n.cont-date-syt ul.dtar-all li:last-child::after {\n  content: \"\";\n  display: none;\n}\n.btn-cat {\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  font-size: 16px;\n  border-radius: 50%;\n  text-align: center;\n  position: absolute;\n  top: 18px;\n  z-index: 111;\n  right: 0;\n  width: 35px;\n  height: 35px;\n  line-height: 40px;\n  font-size: 17px;\n  right: 10px;\n  margin: 0px;\n}\n.edit-cat {\n  position: absolute;\n  bottom: 60px;\n  right: 0;\n  background: #ff5722;\n  z-index: 111;\n  color: #fff;\n  font-size: 14px;\n  text-decoration: none;\n  padding: 6px 12px 6px 18px;\n  border-radius: 50px 0 0 50px;\n  font-weight: 500;\n}\nul.features-fsc {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  display: block;\n}\nul.features-fsc li {\n  display: inline-block;\n}\nul.features-fsc li span {\n  font-size: 10px;\n  background: #ebf0fb;\n  color: #4267B2;\n  padding: 2px 10px;\n  margin: 2px 2px;\n  display: inline-block;\n  border-radius: 50px;\n  font-weight: 600;\n  border: 1px solid #b4caf5;\n}\nspan[errormsg] {\n  color: #FF0000;\n}\na.btn-cat2 {\n  background: var(--ion-color-gradient1);\n  color: #fff;\n  font-size: 16px;\n  border-radius: 50%;\n  text-align: center;\n  position: absolute;\n  top: 64px;\n  z-index: 111;\n  right: 0;\n  width: 35px;\n  height: 35px;\n  line-height: 40px;\n  font-size: 17px;\n  right: 10px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Fzc2V0cy9jc3MuY3NzIiwic3RlcC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLGFBQWE7QUFDYjtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlKQUFpSjtFQUNqSix1RUFBdUU7QUFDekU7QUFDQSxhQUFhO0FBQ2I7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpSkFBaUo7RUFDakosb0VBQW9FO0FBQ3RFO0FBQ0EsZUFBZTtBQUNmO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUpBQWlKO0VBQ2pKLHNHQUFzRztBQUN4RztBQUNBLGFBQWE7QUFDYjtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlKQUFpSjtFQUNqSix5RUFBeUU7QUFDM0U7QUFDQSxVQUFVO0FBQ1Y7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpSkFBaUo7RUFDakosMEJBQTBCO0FBQzVCO0FBQ0EsYUFBYTtBQUNiO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUpBQWlKO0VBQ2pKLHlGQUF5RjtBQUMzRjtBQUNBLFdBQVc7QUFDWDtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlKQUFpSjtFQUNqSixvRUFBb0U7QUFDdEU7QUFDQSxRQUFRO0FBQ1I7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpSkFBaUo7RUFDakosa0NBQWtDO0FBQ3BDO0FBQ0EsVUFBVTtBQUNWO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUpBQWlKO0VBQ2pKLG9FQUFvRTtBQUN0RTtBQUNBLFNBQVM7QUFDVDtFQUNFLDBCQUEwQjtF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a0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUlKO0FBRkc7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBQUlKO0FBQ0E7RUFDSSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUdKO0FBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUdKO0FBRkM7RUFDQyxxQkFBQTtBQUlGO0FBSEU7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFLSDtBQUFBO0VBQ0ksY0FBQTtBQUdKO0FBQUE7RUFDSSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUdKIiwiZmlsZSI6InN0ZXAtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU2VlOiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vbGljZW5zZS9nb29nbGVyZXN0cmljdGVkXG4gKi9cbi8qIGFybWVuaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGlJVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzA4LCBVKzA1MzAtMDU4RiwgVSsyMDEwLCBVKzIwMjQsIFUrMjVDQywgVStGQjEzLUZCMTc7XG59XG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqWVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZGV2YW5hZ2FyaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqTVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDkwMC0wOTdGLCBVKzFDRDAtMUNGOSwgVSsyMDBDLTIwMEQsIFUrMjBBOCwgVSsyMEI5LCBVKzI1Q0MsIFUrQTgzMC1BODM5LCBVK0E4RTAtQThGRjtcbn1cbi8qIGdlb3JnaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGkwVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTg5LCBVKzEwQTAtMTBGRiwgVSsxQzkwLTFDQkEsIFUrMUNCRC0xQ0JGLCBVKzJEMDAtMkQyRjtcbn1cbi8qIGdyZWVrICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpFVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG59XG4vKiBndXJtdWtoaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBoRVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDk2NC0wOTY1LCBVKzBBMDEtMEE3NiwgVSsyMDBDLTIwMEQsIFUrMjBCOSwgVSsyNUNDLCBVKzI2MkMsIFUrQTgzMC1BODM5O1xufVxuLyogaGVicmV3ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpBVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTkwLTA1RkYsIFUrMjAwQy0yMDEwLCBVKzIwQUEsIFUrMjVDQywgVStGQjFELUZCNEY7XG59XG4vKiBsYW8gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQanNVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFODEtMEVERiwgVSsyNUNDO1xufVxuLyogdGFtaWwgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVFVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA5NjQtMDk2NSwgVSswQjgyLTBCRkEsIFUrMjAwQy0yMDBELCBVKzIwQjksIFUrMjVDQztcbn1cbi8qIHRoYWkgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVlVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFMDEtMEU1QiwgVSsyMDBDLTIwMEQsIFUrMjVDQztcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQajBVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzAzMDAtMDMwMSwgVSswMzAzLTAzMDQsIFUrMDMwOC0wMzA5LCBVKzAzMjMsIFUrMDMyOSwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbn1cbi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqd1V2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzFFMDAtMUU5RiwgVSsxRUYyLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpJVXZiUW9pLUUud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGFybWVuaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGlJVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzA4LCBVKzA1MzAtMDU4RiwgVSsyMDEwLCBVKzIwMjQsIFUrMjVDQywgVStGQjEzLUZCMTc7XG59XG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqWVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZGV2YW5hZ2FyaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqTVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDkwMC0wOTdGLCBVKzFDRDAtMUNGOSwgVSsyMDBDLTIwMEQsIFUrMjBBOCwgVSsyMEI5LCBVKzI1Q0MsIFUrQTgzMC1BODM5LCBVK0E4RTAtQThGRjtcbn1cbi8qIGdlb3JnaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGkwVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTg5LCBVKzEwQTAtMTBGRiwgVSsxQzkwLTFDQkEsIFUrMUNCRC0xQ0JGLCBVKzJEMDAtMkQyRjtcbn1cbi8qIGdyZWVrICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpFVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG59XG4vKiBndXJtdWtoaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBoRVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDk2NC0wOTY1LCBVKzBBMDEtMEE3NiwgVSsyMDBDLTIwMEQsIFUrMjBCOSwgVSsyNUNDLCBVKzI2MkMsIFUrQTgzMC1BODM5O1xufVxuLyogaGVicmV3ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpBVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTkwLTA1RkYsIFUrMjAwQy0yMDEwLCBVKzIwQUEsIFUrMjVDQywgVStGQjFELUZCNEY7XG59XG4vKiBsYW8gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQanNVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFODEtMEVERiwgVSsyNUNDO1xufVxuLyogdGFtaWwgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVFVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA5NjQtMDk2NSwgVSswQjgyLTBCRkEsIFUrMjAwQy0yMDBELCBVKzIwQjksIFUrMjVDQztcbn1cbi8qIHRoYWkgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVlVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFMDEtMEU1QiwgVSsyMDBDLTIwMEQsIFUrMjVDQztcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQajBVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzAzMDAtMDMwMSwgVSswMzAzLTAzMDQsIFUrMDMwOC0wMzA5LCBVKzAzMjMsIFUrMDMyOSwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbn1cbi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqd1V2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzFFMDAtMUU5RiwgVSsxRUYyLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpJVXZiUW9pLUUud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGFybWVuaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGlJVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzA4LCBVKzA1MzAtMDU4RiwgVSsyMDEwLCBVKzIwMjQsIFUrMjVDQywgVStGQjEzLUZCMTc7XG59XG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqWVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZGV2YW5hZ2FyaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqTVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDkwMC0wOTdGLCBVKzFDRDAtMUNGOSwgVSsyMDBDLTIwMEQsIFUrMjBBOCwgVSsyMEI5LCBVKzI1Q0MsIFUrQTgzMC1BODM5LCBVK0E4RTAtQThGRjtcbn1cbi8qIGdlb3JnaWFuICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGkwVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTg5LCBVKzEwQTAtMTBGRiwgVSsxQzkwLTFDQkEsIFUrMUNCRC0xQ0JGLCBVKzJEMDAtMkQyRjtcbn1cbi8qIGdyZWVrICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpFVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG59XG4vKiBndXJtdWtoaSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBoRVV2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDk2NC0wOTY1LCBVKzBBMDEtMEE3NiwgVSsyMDBDLTIwMEQsIFUrMjBCOSwgVSsyNUNDLCBVKzI2MkMsIFUrQTgzMC1BODM5O1xufVxuLyogaGVicmV3ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpBVXZiUW9pLUVudHcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNTkwLTA1RkYsIFUrMjAwQy0yMDEwLCBVKzIwQUEsIFUrMjVDQywgVStGQjFELUZCNEY7XG59XG4vKiBsYW8gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQanNVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFODEtMEVERiwgVSsyNUNDO1xufVxuLyogdGFtaWwgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVFVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA5NjQtMDk2NSwgVSswQjgyLTBCRkEsIFUrMjAwQy0yMDBELCBVKzIwQjksIFUrMjVDQztcbn1cbi8qIHRoYWkgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQaVlVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzBFMDEtMEU1QiwgVSsyMDBDLTIwMEQsIFUrMjVDQztcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fucy92NDYvNFVhc3JFTkhzeEpsR0R1R28xT0lsSmZDNmxfMjRybENLMVlvX0lxY3NpaDNTQXlINmNBd2hYOVJQajBVdmJRb2ktRW50dy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAxMDItMDEwMywgVSswMTEwLTAxMTEsIFUrMDEyOC0wMTI5LCBVKzAxNjgtMDE2OSwgVSswMUEwLTAxQTEsIFUrMDFBRi0wMUIwLCBVKzAzMDAtMDMwMSwgVSswMzAzLTAzMDQsIFUrMDMwOC0wMzA5LCBVKzAzMjMsIFUrMDMyOSwgVSsxRUEwLTFFRjksIFUrMjBBQjtcbn1cbi8qIGxhdGluLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zL3Y0Ni80VWFzckVOSHN4SmxHRHVHbzFPSWxKZkM2bF8yNHJsQ0sxWW9fSXFjc2loM1NBeUg2Y0F3aFg5UlBqd1V2YlFvaS1FbnR3LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzFFMDAtMUU5RiwgVSsxRUYyLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2Fucyc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnMvdjQ2LzRVYXNyRU5Ic3hKbEdEdUdvMU9JbEpmQzZsXzI0cmxDSzFZb19JcWNzaWgzU0F5SDZjQXdoWDlSUGpJVXZiUW9pLUUud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGN5cmlsbGljICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2FucyBUZXh0JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fuc3RleHQvdjIxLzVhVXU5LUt6cFJpTENBdDRVbnJjLXhJS21DVTVxRTUyaTBWQnV4T0NCQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAzMDEsIFUrMDQwMC0wNDVGLCBVKzA0OTAtMDQ5MSwgVSswNEIwLTA0QjEsIFUrMjExNjtcbn1cbi8qIGdyZWVrICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2FucyBUZXh0JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fuc3RleHQvdjIxLzVhVXU5LUt6cFJpTENBdDRVbnJjLXhJS21DVTVxRWwyaTBWQnV4T0NCQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zIFRleHQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9nb29nbGVzYW5zdGV4dC92MjEvNWFVdTktS3pwUmlMQ0F0NFVucmMteElLbUNVNXFFVjJpMFZCdXhPQ0JBLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2FucyBUZXh0JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvZ29vZ2xlc2Fuc3RleHQvdjIxLzVhVXU5LUt6cFJpTENBdDRVbnJjLXhJS21DVTVxRVIyaTBWQnV4T0NCQS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAxMDAtMDJBRiwgVSswMzA0LCBVKzAzMDgsIFUrMDMyOSwgVSsxRTAwLTFFOUYsIFUrMUVGMi0xRUZGLCBVKzIwMjAsIFUrMjBBMC0yMEFCLCBVKzIwQUQtMjBDRiwgVSsyMTEzLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG59XG4vKiBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMgVGV4dCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2dvb2dsZXNhbnN0ZXh0L3YyMS81YVV1OS1LenBSaUxDQXQ0VW5yYy14SUttQ1U1cUVwMmkwVkJ1eE0ud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGN5cmlsbGljLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9sQ25xRXU5MkZyMU1tU1U1ZkNSYzRBTVA2bGJCUC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbn1cbi8qIGN5cmlsbGljICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1TVTVmQUJjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZ3JlZWstZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1TVTVmQ0JjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGO1xufVxuLyogZ3JlZWsgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVNVNWZCeGM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG59XG4vKiB2aWV0bmFtZXNlICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1TVTVmQ3hjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1TVTVmQ2hjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzFFMDAtMUU5RiwgVSsxRUYyLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1TVTVmQkJjNEFNUDZsUS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMDMwNCwgVSswMzA4LCBVKzAzMjksIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuLyogY3lyaWxsaWMtZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT21DbnFFdTkyRnIxTXU3MnhLS1RVMUt2bnoud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswNDYwLTA1MkYsIFUrMUM4MC0xQzg4LCBVKzIwQjQsIFUrMkRFMC0yREZGLCBVK0E2NDAtQTY5RiwgVStGRTJFLUZFMkY7XG59XG4vKiBjeXJpbGxpYyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9tQ25xRXU5MkZyMU11NW14S0tUVTFLdm56LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZ3JlZWstZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT21DbnFFdTkyRnIxTXU3bXhLS1RVMUt2bnoud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XG59XG4vKiBncmVlayAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9tQ25xRXU5MkZyMU11NFd4S0tUVTFLdm56LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDM3MC0wM0ZGO1xufVxuLyogdmlldG5hbWVzZSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9tQ25xRXU5MkZyMU11N1d4S0tUVTFLdm56LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT21DbnFFdTkyRnIxTXU3R3hLS1RVMUt2bnoud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyQUYsIFUrMDMwNCwgVSswMzA4LCBVKzAzMjksIFUrMUUwMC0xRTlGLCBVKzFFRjItMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xufVxuLyogbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbUNucUV1OTJGcjFNdTRteEtLVFUxS2cud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMDAwLTAwRkYsIFUrMDEzMSwgVSswMTUyLTAxNTMsIFUrMDJCQi0wMkJDLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcbn1cbi8qIGN5cmlsbGljLWV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9sQ25xRXU5MkZyMU1tRVU5ZkNSYzRBTVA2bGJCUC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzA0NjAtMDUyRiwgVSsxQzgwLTFDODgsIFUrMjBCNCwgVSsyREUwLTJERkYsIFUrQTY0MC1BNjlGLCBVK0ZFMkUtRkUyRjtcbn1cbi8qIGN5cmlsbGljICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1FVTlmQUJjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDMwMSwgVSswNDAwLTA0NUYsIFUrMDQ5MC0wNDkxLCBVKzA0QjAtMDRCMSwgVSsyMTE2O1xufVxuLyogZ3JlZWstZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1FVTlmQ0JjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMUYwMC0xRkZGO1xufVxuLyogZ3JlZWsgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbUVVOWZCeGM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzcwLTAzRkY7XG59XG4vKiB2aWV0bmFtZXNlICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1FVTlmQ3hjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xufVxuLyogbGF0aW4tZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1FVTlmQ2hjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDQsIFUrMDMwOCwgVSswMzI5LCBVKzFFMDAtMUU5RiwgVSsxRUYyLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcbn1cbi8qIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1FVTlmQkJjNEFNUDZsUS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMDMwNCwgVSswMzA4LCBVKzAzMjksIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xufVxuLyogY3lyaWxsaWMtZXh0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjMwL0tGT2xDbnFFdTkyRnIxTW1XVWxmQ1JjNEFNUDZsYkJQLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xufVxuLyogY3lyaWxsaWMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVdVbGZBQmM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMzAxLCBVKzA0MDAtMDQ1RiwgVSswNDkwLTA0OTEsIFUrMDRCMC0wNEIxLCBVKzIxMTY7XG59XG4vKiBncmVlay1leHQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVdVbGZDQmM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSsxRjAwLTFGRkY7XG59XG4vKiBncmVlayAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YzMC9LRk9sQ25xRXU5MkZyMU1tV1VsZkJ4YzRBTVA2bGJCUC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICB1bmljb2RlLXJhbmdlOiBVKzAzNzAtMDNGRjtcbn1cbi8qIHZpZXRuYW1lc2UgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVdVbGZDeGM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSswMzAwLTAzMDEsIFUrMDMwMy0wMzA0LCBVKzAzMDgtMDMwOSwgVSswMzIzLCBVKzAzMjksIFUrMUVBMC0xRUY5LCBVKzIwQUI7XG59XG4vKiBsYXRpbi1leHQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVdVbGZDaGM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyQUYsIFUrMDMwNCwgVSswMzA4LCBVKzAzMjksIFUrMUUwMC0xRTlGLCBVKzFFRjItMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xufVxuLyogbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MzAvS0ZPbENucUV1OTJGcjFNbVdVbGZCQmM0QU1QNmxRLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSswMzA0LCBVKzAzMDgsIFUrMDMyOSwgVSsyMDAwLTIwNkYsIFUrMjA3NCwgVSsyMEFDLCBVKzIxMjIsIFUrMjE5MSwgVSsyMTkzLCBVKzIyMTIsIFUrMjIxNSwgVStGRUZGLCBVK0ZGRkQ7XG59XG4iLCJAaW1wb3J0IHVybCgnLi4vLi4vYXNzZXRzL2Nzcy5jc3MnKTtcbmlvbi1jb250ZW50W2JnLWdyZXldIHtcblx0LmNvbnRldC1zZWN0IHtcblx0XHRwYWRkaW5nOjBweDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXHQuc2xpZHMtYm94IHtcblx0XHRtYXJnaW4tcmlnaHQ6LTIwcHg7XG5cdFx0bWFyZ2luLXRvcDoxNXB4O1xuXHRcdC5pbWctYngtc2x5IHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRoZWlnaHQ6IDEzNXB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMHB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGltZyB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDIzMHB4O1xuXHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdH1cblx0XHRcdHNwYW4ubGlrZXMtbnVtYmVyIHtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRib3R0b206IDEwcHg7XG5cdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG5cdFx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdHBhZGRpbmc6IDNweCA2cHggM3B4IDEwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDE0cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxNHB4O1xuXHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBzdWI7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA0cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGg0Lm5hbWUtZmZscyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAwMDAgLCAjMDAwMDAwMDApO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogMTlweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0LmltZy1ieC1zbHkuc3RvcmlzIHtcblx0XHRcdGhlaWdodDphdXRvO1xuXHRcdFx0YmFja2dyb3VuZDojZmZmO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGhlaWdodDogMjc1cHg7XG5cdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0fVxuXHRcdFx0aDQudGx0LXN0b3Ige1xuXHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cdFx0XHRcdHBhZGRpbmc6IDVweCAxMHB4IDEycHg7XG5cdFx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5saWtlcy1udW1iZXIgIHtcblx0XHRcdFx0Ym90dG9tOiBpbml0aWFsO1xuXHRcdFx0XHR0b3A6IDE1cHg7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLm1lc2dzLW51bWJlciB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiA0N3B4O1xuXHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXHRcdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRwYWRkaW5nOiAzcHggNnB4IDNweCAxMHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRcdGhlaWdodDogMTRweDtcblx0XHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5zbGlkcy1ib3gubmV3LWJveC1hIHtcblx0XHRtYXJnaW4tcmlnaHQ6IC01cHg7XG5cdFx0bWFyZ2luLXRvcDogLTVweDtcblx0XHRtYXJnaW4tbGVmdDogLTVweDtcblx0fVxuXHQudG9wLXVzZWVyLXMge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwYWRkaW5nLWxlZnQ6IDYwcHg7XG5cdFx0Y29sb3I6ICMwMDA7XG5cdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0XHRsaW5lLWhlaWdodDogMTVweDtcblx0XHRwYWRkaW5nLXRvcDogMTVweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMjJweDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcblx0XHRpbWcuYWRtLXVzciB7XG5cdFx0XHR3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuXHRcdFx0aGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRsZWZ0OiAwcHg7XG5cdFx0XHQtby1vYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0dG9wOiAxMHB4O1xuXHRcdH1cblx0XHRoNSB7XG5cdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdG1hcmdpbi10b3A6IDJweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDBweDtcblx0XHR9XG5cdFx0c3Bhbi50aW1lLWFsIHtcblx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzMpO1xuXHRcdH1cblx0fVxuXHRzcGFuLmxpdmVzdG0tZG90IHtcblx0XHR3aWR0aDogMTJweDtcblx0XHRoZWlnaHQ6IDEycHg7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJhY2tncm91bmQ6ICNGNDQzMzY7XG5cdFx0Ym90dG9tOiAxMHB4O1xuXHRcdHJpZ2h0OiA3cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMSk7XG5cdFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMnB4IDEycHgsICNmNzdlNzUsICNGNDQzMzYpO1xuXHR9XG5cdC5jb250ZW50LWFsbC1wc3Qge1xuXHRcdHBhZGRpbmc6IDdweCAyMHB4IDIwcHg7XG5cdFx0bWFyZ2luLXRvcDogLTM1cHg7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHR6LWluZGV4OiAxMTE7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuXHRcdGJveC1zaGFkb3c6IDBweCAtMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XG5cdFx0bWluLWhlaWdodDogMTAwJTtcblx0XHRoNC50dGwtbWFpbiAge1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdH1cblx0XHRwIHtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAjOGE4YThhO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjJweDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyM3B4O1xuXHRcdFx0bWFyZ2luLXRvcDogMHB4O1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHR9XG5cdFx0LmNvbW1udHMge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0cGFkZGluZy1sZWZ0OiA1M3B4O1xuXHRcdFx0ei1pbmRleDogMTE7XG5cdFx0XHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRpbWcuYWRtLXVzciB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0d2lkdGg6IDQycHg7XG5cdFx0XHRcdGhlaWdodDogNDJweDtcblx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxLCAxNzksIDE2NiwgMC40NSk7XG5cdFx0XHRcdGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDIxLCAxNzksIDE2NiwgMC4xNSk7XG5cdFx0XHRcdHRvcDogM3B4O1xuXHRcdFx0fVxuXHRcdFx0aDUgIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblx0XHRcdFx0Y29sb3I6ICM0MjY3QjI7XG5cdFx0XHRcdHNwYW4udGltZS1hbCB7XG5cdFx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRcdFx0XHRjb2xvcjogI2I1YjViNTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDRweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQubXQtMjAge1xuXHRcdG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcblx0fVxuXHQuYWRkLWNvbW1udCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbi10b3A6IDI1cHg7XG5cdFx0cGFkZGluZy1yaWdodDogNjBweDtcblx0XHRpb24taW5wdXQge1xuXHRcdFx0YmFja2dyb3VuZDogI2Y5ZjlmOTtcblx0XHRcdC0tcGFkZGluZzogMTRweDtcblx0XHRcdC0tcGFkZGluZy1zdGFydDogMjBweDtcblx0XHRcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdGJveC1zaGFkb3c6IDBweCA1cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcblx0XHRcdGhlaWdodDogNDVweDtcblx0XHR9XG5cdFx0YS5idG4tc2VuZCB7XG5cdFx0XHR3aWR0aDogNDVweDtcblx0XHRcdGhlaWdodDogNDVweDtcblx0XHRcdGJhY2tncm91bmQ6ICB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0Zm9udC1zaXplOiAxOXB4O1xuXHRcdFx0Ym94LXNoYWRvdzowcHggNHB4IDE0cHggcmdiYSg2MCwgMTAzLCAxODgsIDAuMzgpO1xuXHRcdH1cblx0fVxufVxuXG5zcGFuLnBsYXktaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDRiYjc5ICwgIzAzODI1NCkgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxMTE7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjdweCk7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDMwcHgpO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMzBweCByZ2JhKDMsIDEzOSwgOTAsIDAuNzkpO1xufVxuLmljb24tcnV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAzMHB4O1xuXHRzcGFuICB7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdG1hcmdpbi1sZWZ0OiAxMnB4O1xuXHRcdGltZyB7XG5cdFx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDFweDtcblx0XHR9XG5cdH1cbn1cbi5jb250LWRhdGUtc3l0IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGg0ICB7XG5cdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdGNvbG9yOiAjNDI2N0IyO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0bWFyZ2luLXRvcDogMHB4O1xuXHRcdGZvbnQtc2l6ZTogMTlweDtcblx0fVxuXHR1bC5kdGFyLWFsbCB7XG5cdFx0cGFkZGluZzogMHB4O1xuXHRcdG1hcmdpbjogMHB4O1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0bGkge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0cGFkZGluZy1yaWdodDogMjZweDtcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdGNvbG9yOiAjODA4MDgwO1xuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDI0cHg7XG5cdFx0XHR9XG5cdFx0XHRpb24taWNvbiB7XG5cdFx0XHRcdGNvbG9yOiAjZmZjMTA3O1xuXHRcdFx0XHRmb250LXNpemU6IDE3cHg7XG5cdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBzdWI7XG5cdFx0XHR9XG5cdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHR3aWR0aDogNnB4O1xuXHRcdFx0XHRoZWlnaHQ6IDZweDtcblx0XHRcdFx0YmFja2dyb3VuZDogIzQyNjdCMjtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHR0b3A6IDdweDtcblx0XHRcdFx0cmlnaHQ6IDEwcHg7XG5cdFx0XHR9XG5cdFx0XHQmOmxhc3QtY2hpbGQ6OmFmdGVyIHtcblx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0ZGlzcGxheTpub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuLmJ0bi1jYXQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudDEpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE4cHg7XG4gICAgei1pbmRleDogMTExO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uZWRpdC1jYXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDYwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmNTcyMjtcbiAgICB6LWluZGV4OiAxMTE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiA2cHggMTJweCA2cHggMThweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnVsLmZlYXR1cmVzLWZzYyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cdGxpIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0c3BhbiB7XG5cdFx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjZWJmMGZiO1xuXHRcdFx0Y29sb3I6ICM0MjY3QjI7XG5cdFx0XHRwYWRkaW5nOiAycHggMTBweDtcblx0XHRcdG1hcmdpbjogMnB4IDJweDtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2I0Y2FmNTtcblx0XHR9XG5cdH1cbn1cblxuc3BhbltlcnJvcm1zZ10ge1xuICAgIGNvbG9yOiAjRkYwMDAwO1xufVxuXG5hLmJ0bi1jYXQyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQxKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2NHB4O1xuICAgIHotaW5kZXg6IDExMTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    89632: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"heder-main ion-no-border\">\n\t<!-- <link rel=\"stylesheet\" href=\"../../assets/css.css\"> -->\n  <ion-toolbar lines=\"none\" >\n  \t<ion-back-button routerLink=\"/trip-details/{{main_trip.trip_id}}\" slot=\"start\"><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-back-button>\n    <ion-title class=\"ion-text-center\">Step Details </ion-title>\n\t<!--ion-buttons slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-buttons-->\n\t<ion-buttons slot=\"end\" routerLink=\"/tabs/dashboard\"><ion-icon name=\"home-outline\"></ion-icon></ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content  bg-grey>\n\t\n\t<div class=\"contet-sect\"  id=\"printable-area2\" #elementId>\n\t\t<div class=\"phot-slides\">\n\t\t\t<div class=\"slids-box new-box-a\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t\t<div class=\"slide\">\n\t\t\t\t\t\t\t<div class=\"img-bx-sly storis\">\n\t\t\t\t\t\t\t\t<ion-slides pager=\"true\">\n\t\t\t\t\t\t\t\t<ion-slide *ngFor=\"let img of images\" >\n\t\t\t\t\t\t\t\t  <div class=\"slide\">\n\t\t\t\t\t\t\t\t\t<div class=\"slidr-ims-st\">\t\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{img}}\" class=\"img-str\"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ion-slides>\n\t\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\" class=\"btn-cat\" (click)=\"downlaod()\"> <ion-icon name=\"share-social-outline\"></ion-icon> </a> -->\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-cat2\" *ngIf=\"add_button_show == 1\" (click)=\"deletstep(trip_id,main_trip.trip_id)\"> <ion-icon name=\"trash\"></ion-icon> </a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" *ngIf=\"add_button_show == 1\" routerLink=\"/edit-single-trip/{{trip_id}}\" class=\"edit-cat\"> Edit Step </a>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</div>\n\t\t\t<div class=\"content-all-pst\" *ngIf=\"(main_trip.length != 0)\">\n\t\t\t\t<div class=\"cont-date-syt\">\n\t\t\t\t\t<h4> {{main_trip.trip_name}} </h4>\n\t\t\t\t\t<ul class=\"dtar-all\">\n\t\t\t\t\t\t<li> {{main_trip.starting_point}} </li>\n\t\t\t\t\t\t<li>{{main_trip.start_date |  date: ' MMM d, yyyy'}}  </li>\n\t\t\t\t\t\t<li> <img src=\"{{main_trip.weather.current.condition.icon}}\" class=\"adm-usr\">  {{main_trip.weather.current.temp_f}} °F  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<h4 class=\"ttl-main\"> Description </h4>\n\t\t\t\t<p>{{main_trip.trip_summary}}</p>\n\t\t\t\t<h4 class=\"ttl-main\"> Activities </h4>\n\t\t\t\t\t\t<ul class=\"features-fsc\">\n\t\t\t\t\t\t\t<li *ngFor=\"let act of main_trip.acitvities\" > <span>  {{act}}  </span> </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t<h4 class=\"ttl-main mt-20\"> Comments ({{review_data.length}})</h4>\n\t\t\t\t<ng-container *ngIf=\"(review_data.length != 0)\">\n\t\t\t\t<div class=\"commnts\" *ngFor=\"let review of review_data\" >\n\t\t\t\t\t<!-- <img src=\"assets/img/img1.jpg\" class=\"adm-usr\">  -->\n\t\t\t\t<img *ngIf=\"errors.indexOf(review.saloon_usr?.profile_picture) >= 0\" src=\"../assets/img/img1.jpg\" alt=\"\"  class=\"adm-usr\">\n\t\t\t\t<img *ngIf=\"errors.indexOf(review.saloon_usr?.profile_picture) == -1\" src=\"{{review.saloon_usr?.profile_picture}}\" alt=\"\"  class=\"adm-usr\">\n\t\t\t\t\t<h5> {{review.saloon_usr.firstname+' '+review.saloon_usr.lastname}} <span class=\"time-al\"> {{review.review.created_on | timeAgo }} </span> </h5>\n\t\t\t\t\t<p> {{review.review.review}} </p>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t\t<!-- \t<div class=\"commnts\">\n\t\t\t\t\t<img src=\"assets/img/img2.jpg\" class=\"adm-usr\"> \n\t\t\t\t\t<h5>Christon Hanry <span class=\"time-al\"> 1 hour ago </span> </h5>\n\t\t\t\t\t<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"commnts\">\n\t\t\t\t\t<img src=\"assets/img/img3.jpg\" class=\"adm-usr\"> \n\t\t\t\t\t<h5>  Marry James  <span class=\"time-al\"> 3 hours ago </span> </h5>\n\t\t\t\t\t<p> At vero eos et accusamus et iusto odio dignissimos . </p>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"add-commnt\">\n\t\t\t\t\t<ion-input placeholder=\"Add comment here...\"  [(ngModel)]=\"review\"  (keyup)=\"writereview($event.target.value);\"></ion-input>\n\t\t\t\t\t<span errormsg *ngIf=\"review_error\">\n\t\t\t\t\t<strong>Please enter your review.</strong>\n\t\t\t\t\t</span>\n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn-send\" (click)=\"sendreview();\"> <ion-icon name=\"send-outline\"></ion-icon> </a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_step-details_step-details_module_ts-es5.js.map
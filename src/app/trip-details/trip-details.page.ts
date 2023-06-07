import { Component, OnInit, Directive, HostListener, ViewChild, AfterContentInit, ElementRef, NgZone } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject, async } from 'rxjs';
import { AlertController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
declare var google;

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

// import { Plugins, FilesystemDirectory } from '@capacitor/core';
import { Plugins } from '@capacitor/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const { Camera } = Plugins;
import domtoimage from 'dom-to-image';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { FileOpener } from '@ionic-native/file-opener/ngx';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {
  lat: number = 56.130367;
  lng: number = -106.346771;
  map_title: any = 'Canada';
  IMAGES_URL: any = config.IMAGES_URL;
  IMAGES_URL_All: any = config.IMAGES_URL_All;
  trips: any = [];
  errors: any = ['', null, undefined];
  id: any;
  trip_id: any;
  main_trip: any = [];
  images: any = [];
  profile_data: any = [];
  back_button_btn: any = localStorage.getItem('back_button_url');
  add_button_show: any = 0;
  places_data: any = [];

  profiletab: string = "Basic";
  isAndroid: boolean = false;
  customAlertOptions: any = {
    header: 'Category',

    translucent: true
  };
  customAlertOptions1: any = {
    header: 'Breed',

    translucent: true
  };
  customAlertOptions2: any = {
    header: 'Service',

    translucent: true
  };
  category = {
    form: null
  };
  category1 = {
    form: null
  };
  category2 = {
    form: null
  };

  map;
  trip_auth_id: any;

  pdfObj = null;

  @ViewChild('map', { static: false }) mapElement: ElementRef;


  constructor(public userService: UserService,
    private router: Router,
    public alertController: AlertController,
    public activatedRoute: ActivatedRoute,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    private socialSharing: SocialSharing,
    private plt: Platform,
    private fileOpener: FileOpener) {
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
    this.userService.postData({ _id: this.id, trip_id: this.trip_id }, config.API_URL + '/get_trip_detail').subscribe((result) => {
      console.log("trip detail-->", result.data);
      var thiss = this;
      this.places_data = result.data;
      $.each(result.data, function (key, val) {
        console.log("val--->", val)
        if (val.trip.trip_id == "0") {
          console.log("ander>>>")

          thiss.main_trip = val.trip;
          thiss.lat = Number(thiss.main_trip.lat);
          thiss.lng = Number(thiss.main_trip.lng);
          thiss.map_title = thiss.main_trip.trip_name;
          thiss.trip_auth_id = thiss.main_trip.userId;
          if (thiss.main_trip.userId == thiss.id) {
            thiss.add_button_show = 1;
          }

        } else {
          console.log('-----', val.trip);
          let datas = {};
          $.each(val.trip, function (key, value) {
            datas[key] = value;
          });
          datas['count'] = val.count;
          thiss.trips.push(datas);
          console.log('-----', thiss.trips);

        }
        $.each(val.trip.images, function (ky, vl) {
          thiss.images.push(vl);
        });
      });
      // this.loadMap();
      this.getprofiledata();
      this.displayGoogleMap();

    });
  }

  getprofiledata() {
    this.userService.postData({ _id: this.trip_auth_id }, config.API_URL + '/get_user_profile_detail').subscribe((result) => {
      this.profile_data = result;
      console.log("profile data-->1", this.profile_data)
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
    let count: number = index;
    let indexs: number = count + 1;
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
    } else {
      data["end_date"] = "";
      data["end_time"] = "";
    }
    console.log('data == ', data);
    localStorage.setItem('add_trip_data', JSON.stringify(data));
    this.router.navigate([url]);
  }

  add_trips(trip_id, index) {
    let count: number = index;
    let indexs: number = count + 1;
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
    } else {
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
    console.log("one-->")
    //FIRST GET THE LOCATION FROM THE DEVICE.
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("loadmap-->", this.lat, '-->', this.lng)
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
      let latLng = new google.maps.LatLng(this.lat, this.lng);
      let mapOptions = {
        center: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      }

      //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
      // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude); 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      var placesService = new google.maps.places.PlacesService(this.map);

      console.log('placesss ', placesService);

      let marker = new google.maps.Marker({
        position: latLng,
        title: 'Biratnagar, Janpath-15',
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      })

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
    console.log("display google map-->", latLng)


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
      const contentString =
        '<div id="content">' +
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

      const contentString =
        '<div id="content">' +
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
    domtoimage.toPng(div, options).then(
      (dataUrl) => {
        var docDefinition = {
          content: [{
            image: dataUrl,
            width: 500,
          }]
        };
        //  pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
        this.pdfObj = pdfMake.createPdf(docDefinition);

        if (this.plt.is('cordova')) {
          this.pdfObj.getBase64(async (data) => {
            try {
              let path = `pdf/paymentdetail_${Date.now()}.pdf`;
              const result = await Filesystem.writeFile({
                path,
                data,
                directory: Directory.Documents,
                recursive: true
              });
              console.log('path === ', path, result.uri);
              //this.fileOpener.open(`${result.uri}`,'application/pdf')
            } catch (e) {
              console.error('Unable to write file', e);
            }
          });
        } else {
          //this.pdfObj.download("payment_Details.pdf");
        }

      });
    return;
    /*************************************************************************************/

    this.userService.postData({ name: name, url: 'trip-details/' + this.trip_id }, config.API_URL + '/create_branch_link').subscribe((resultsss) => {

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
    domtoimage.toPng(div, options).then(
      (dataUrl) => {
        var docDefinition = {
          content: [{
            image: dataUrl,
            width: 500,
          }]
        };
        //  pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
        this.pdfObj = pdfMake.createPdf(docDefinition);

        if (this.plt.is('cordova')) {
          this.pdfObj.getBase64(async (data) => {
            try {
              let path = `pdf/paymentdetail_${Date.now()}.pdf`;
              const result = await Filesystem.writeFile({
                path,
                data,
                directory: Directory.Documents,
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
            } catch (e) {
              console.error('Unable to write file', e);
            }
          });
        } else {
          //this.pdfObj.download("payment_Details.pdf");
        }

      });
  }


  shareit3(name) {


    const div = document.getElementById('printable-area');
    const options = { background: 'white', height: 845, width: 595 };
    domtoimage.toPng(div, options).then(
      (dataUrl) => {
        var docDefinition = {
          content: [{
            image: dataUrl,
            width: 500,
          }]
        };
        //  pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
        this.pdfObj = pdfMake.createPdf(docDefinition);

        if (this.plt.is('cordova')) {
          this.pdfObj.getBase64(async (data) => {
            try {
              let path = `pdf/paymentdetail_${Date.now()}.pdf`;
              const result = await Filesystem.writeFile({
                path,
                data,
                directory: Directory.Documents,
                recursive: true
              });
              console.log('path === ', path, result.uri);


              const contents = await Filesystem.readFile({
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
            } catch (e) {
              console.error('Unable to write file', e);
            }
          });
        } else {
          //this.pdfObj.download("payment_Details.pdf");
        }

      });
  }


  shareit4(name) {

    this.userService.presentLoading();
    const div = document.getElementById('printable-area');
    const options = { background: 'white', height: 845, width: 595 };
    domtoimage.toPng(div, options).then(
      async (dataUrl) => {
        var docDefinition = {
          content: [{
            image: dataUrl,
            width: 500,
          }]
        };
        //  pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfDocGenerator.getDataUrl(async (dataUrl) => {
          const fileName = `paymentdetail_${Date.now()}.pdf`;
          const fileDirectory = Directory.Cache;
          const pdfData = dataUrl.split(',')[1]; // remove the 'data:application/pdf;base64,' prefix

          await Filesystem.writeFile({
            path: fileName,
            data: pdfData,
            directory: fileDirectory,
            recursive: true,
          }).then(async (res) => {
            const fileUri = await Filesystem.readFile({
              path: res.uri,
              directory: fileDirectory,
            }).then((res) => {
               console.log("response ========>", res);
               
            });
            // this.fileOpener.open(fileUri, 'application/pdf')
            //   .then(() => console.log('File is opened'))
            //   .catch(err => console.error('Error opening file:', err));
          });
          // console.log("before read file uril", `${fileDirectory}/${fileName}`);

          // console.log("fileUri =====>", fileUri);
        });
        this.userService.stopLoading()
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

      });
  }

  shareit5(name) {


    const div = document.getElementById('printable-area2');
    const options = { background: 'white', height: 845, width: 595 };
    domtoimage.toPng(div, options).then(
      async (dataUrl) => {
        var docDefinition = {
          content: [{
            image: dataUrl,
            width: 500,
          }]
        };
        const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        const pdfData = await pdfDocGenerator.getBlobUrl();
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

      });
  }



  submits(trip_id) {
    this.userService.presentLoading();
    this.userService.postData({ _id: trip_id }, config.API_URL + '/update_trip_status').subscribe((result) => {
      this.userService.stopLoading();
      this.getdata();


    }, err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again', 'danger');
    });
  }


  slideOpts: any = {
    slidesPerView: 3.3,
    spaceBetween: 7,
  }
  slideOpts3: any = {
    slidesPerView: 3,
    spaceBetween: 7,
  }

}

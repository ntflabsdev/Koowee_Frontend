import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';

import { isPlatform } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';
import imageCompression from 'browser-image-compression';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.scss'],
})
export class NewTripPage implements OnInit {
  min_time2: any = [];
  id: any;
  loginForm: FormGroup;
  dict11: any = [];
  is_license_uploaded: Boolean = false;
  isLoading: Boolean = false;
  is_submit: Boolean = false;
  img_err: Boolean = false;
  files: File[] = [];
  allowedMimes: any = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg'];
  errors: any = ['', null, undefined];
  file: any = [];
  weather: string[] = [];

  constructor(public userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    public sanitizer: DomSanitizer,
    public datepipe: DatePipe) { }

  ngOnInit() {
    this.initLoginForm();
    this.id = localStorage.getItem('user_auth_id');
    var dict1 = JSON.parse(localStorage.getItem('location_storage'));
    this.dict11 = dict1;
    console.log("lat-->",dict1.lat ,"lng-->",dict1.lng)
    this.getWeather(this.dict11.lat, this.dict11.lng);
  }

  ionViewDidEnter() {

    var arr = [Number('00')];
    for (var i = 1; i < 24; i++) {

      if (i < 10) {
        console.log('first = ' + i);
        arr.push(Number(0 + i));
      } else {
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
      trip_name: ['', Validators.compose([Validators.required])],
      start_date: ['', Validators.compose([Validators.required])],
      // Start_time: ['', Validators.compose([Validators.required])],
      starting_point: ['', Validators.compose([Validators.required])],
      trip_summary: ['', Validators.compose([Validators.required])]
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

    if (this.files.length  == 0) {
      this.img_err = true;
      console.log("======>",this.img_err);
      return;
    }

    if (this.loginForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      console.log('there is an issue in this controller')
      console.log(controls);
      return;
    }

   



    // this.img_err = false; 


    const frmData = new FormData();

    for (var i = 0; i < this.files.length; i++) {
      frmData.append("file[]", this.files[i]);
    }



    frmData.append("_id", localStorage.getItem('user_auth_id'));
    console.log("user ID----->", localStorage.getItem('user_auth_id'))
    this.userService.presentLoading();
    this.userService.postData(frmData, config.API_URL + '/upload_img_trip').subscribe((result) => {
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


      this.userService.postData(frmData, config.API_URL + '/add_trip_single_without_parent').subscribe((result) => {
        this.userService.stopLoading();
        if (result.status == 1) {
          this.userService.presentToast('Trip has been added successfully!', 'success');
          this.router.navigate(['/my-trips']);
        }
        else {
          this.userService.presentToast('Unable to send a request', 'danger');
        }
      },
        err => {
          this.userService.stopLoading();
          this.userService.presentToast('Unable to send a request', 'danger');
        });



    },
      err => {
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
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      console.log('there is an issue in this controller')
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
    this.userService.postData(frmData, config.API_URL + '/upload_img_trip').subscribe((result) => {
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
    },
      err => {
        this.userService.stopLoading();
        this.userService.presentToast('Failed to send request. Please try again', 'danger');
      });





    //this.router.navigate(['/add-new-step']);



  }


  onSelect(event) {
    console.log(event);
    console.log(...event.addedFiles);
    var self = this;
    $.each(event.addedFiles, function (key, files) {
      console.log(files);

      var imageFile = files;
      console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

      var options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      }
      imageCompression(imageFile, options)
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

  isControlHasError(controlName: string, validationType: string): boolean {
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

    var queryString =
      'http://api.weatherapi.com/v1/current.json?key=' + OpenWeatherAppKey + '&q=' + latitude + ',' + longitude + '&aqi=no&dt=2021-06-11';

    var queryString = 'http://api.weatherapi.com/v1/forecast.json?key=9a5ffa4f1db742cfacb125014210408&q=' + latitude + ',' + longitude + '&days=1&aqi=no&alerts=no&dt=2021-06-11';
    $.getJSON(queryString, function (results) {
      localStorage.setItem('location_weather', JSON.stringify(results));

      console.log('this weather result = ', this.weather);
    }).fail(function () {
      console.log("error getting location");
    });
  }

}

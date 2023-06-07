import { Component, OnInit, Directive, HostListener, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';

import { isPlatform } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var google;
import { DatePipe } from '@angular/common';
import imageCompression from 'browser-image-compression';



@Component({
  selector: 'app-add-new-step3',
  templateUrl: './add-new-step3.page.html',
  styleUrls: ['./add-new-step3.page.scss'],
})
export class AddNewStep3Page implements OnInit {
location:any;
userSettings = {showCurrentLocation: false};
state:any;
country:any;
city:any;
town:any;
area:any;
zip_code:any;
place_id:any;
reference:any;
name:any;
map_url:any;
weather:any = [];
this_location:any = [];
submit_done:any='false';

 map;
  
  @ViewChild('map') mapElement: ElementRef;



id:any;
loginForm: FormGroup;
dict12:any=[];
is_license_uploaded:Boolean=false;
isLoading:Boolean=false;
is_submit:Boolean=false;
img_err:Boolean=false;
files: File[] = [];
allowedMimes:any = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg'];
errors:any=['',null,undefined];
license_error:boolean=false;
license_image_url:any;
license_file:any;
post:any=[];
title = 'demo';
lat = 30.699270;
lng = 76.694800;
min_date:any=this.datepipe.transform(JSON.parse(localStorage.getItem('previous_step_date')), 'yyyy-MM-dd');
min_time:any;
  min_time2:any;



  constructor(public userService: UserService, 
	private router : Router, 
	private fb: FormBuilder,
	public sanitizer:DomSanitizer,
  public datepipe: DatePipe) {
  this.userSettings['inputPlaceholderText'] = 'Destination Point Search';
   this.userSettings['showRecentSearch'] = false;
  this.userSettings = Object.assign({},this.userSettings);
   }

   ngOnInit() {
      this.initLoginForm();
     this.id = localStorage.getItem('user_auth_id');
      var dict2 = JSON.parse(localStorage.getItem('step_data'));
      this.dict12 = dict2;
  

      setTimeout(()=>{
     
     
      //  this.loadMap();
   
    },3000);
      
  }

  ionViewDidEnter()
  {    

     var arr = [Number('00')];
        for(var i=1; i<24; i++) {

          if(i < 10)
          {
                console.log('first = '+i);
            arr.push(Number(0+i));
          }else
          {
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
	step_name: ['', Validators.compose([Validators.required])],
	arrival_date: ['', Validators.compose([Validators.required])],
	arrival_time: ['', Validators.compose([Validators.required])],
	what_to_do: ['', Validators.compose([Validators.required])],
	acitvities:['', Validators.compose([ Validators.required])]
	});
  }


  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }
    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
}


	


    submit(status)
    {
        console.log('update');
        this.submit_done = 'true';
        const controls = this.loginForm.controls;


        /*  this.loginForm.patchValue({
        acitvities2: controls.acitvities.value
      }); */

        console.log('controls = ', controls);
        /** check form */
        if (this.loginForm.invalid) {

        Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
        );
        return;
        }

if(this.files.length == 0)
   {
     this.img_err = true;
     return;
   }else
   {
   this.img_err = false;
   }

    if(this.this_location.length == 0)
   {
     return;
   }

       
this.img_err = false;
    const frmDatas = new FormData();  
    for (var i = 0; i < this.files.length; i++) { 
    frmDatas.append("file[]", this.files[i]);
    } 

    frmDatas.append("_id", localStorage.getItem('user_auth_id'));
    this.userService.presentLoading();
    this.userService.postData(frmDatas,config.API_URL+'/upload_img_trip').subscribe((result) => {



  let datas = {
     files: result.data,
    step_name: controls.step_name.value,
    arrival_date: controls.arrival_date.value,
    arrival_time: controls.arrival_time.value,
    what_to_do: controls.what_to_do.value,
    acitvities: controls.acitvities.value,
    location:  this.this_location,
    weather: JSON.parse(localStorage.getItem('this_ocation_weather'))
  };

 let newdata = this.dict12.step_data;
 var array = [];
	$.each(newdata,function(key,bl){
	  array.push(bl);
	});
	array.push(datas);
 
  const frmData = new FormData();  
  frmData.append("_id", localStorage.getItem('user_auth_id'));
  frmData.append("files",  JSON.stringify(this.dict12.files));
  frmData.append("trip_name",  this.dict12.trip_name);
  frmData.append("start_date", this.dict12.start_date);
  frmData.append("Start_time", this.dict12.Start_time);
  frmData.append("starting_point", this.dict12.starting_point); 
  frmData.append("trip_summary", this.dict12.trip_summary); 
  frmData.append("starting_location", JSON.stringify(this.dict12.starting_location)); 
  frmData.append("weather", JSON.stringify(this.dict12.weather)); 
  frmData.append("status", status); 
  frmData.append("step_data", JSON.stringify(array)); 
  
   
    this.userService.postData(frmData,config.API_URL+'/add_trip').subscribe((result) => {
      this.userService.stopLoading();
      if(result.status == 1){
        this.userService.presentToast('Trip has been added successfully!','success');
      this.router.navigate(['/my-trips']);
      }
      else{
        this.userService.presentToast('Unable to send a request','danger');
      }
    },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Unable to send a request','danger');
    });
 });

    }


    uploadLicense(event,type){
   
    this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      image_file.action=type;
      if(self.allowedMimes.indexOf(image_file.type) == -1){
        this.license_error = true;
      }
      else{
        if(type=='profile'){
          self.license_file = image_file;
          self.license_image_url = window.URL.createObjectURL(image_file);
          self.is_license_uploaded = true;
        }
      }
    }
  }


   removeimg(imgg)
 {
   if ($.inArray(imgg, this.files) >= 0) {
      var carIndex = this.files.indexOf(imgg);
      this.files.splice(carIndex, 1);
    }
 }

 onSelect(event) {
    console.log(event);
    console.log(...event.addedFiles);
     var self = this;
     $.each(event.addedFiles,function(key,files){
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
  //  this.files.push(...event.addedFiles);
  }
 
onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}



 loadMap(){
 console.log('cl mp');
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: this.lat, lng: this.lng},
          zoom: 8
        });



       var marker = new google.maps.Marker({
    position: {lat: this.lat, lng: this.lng},
    title:this.title
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
}

   console.log('search data');
   console.log(data);
   this.state = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.STATE);
   this.country = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.COUNTRY);
   this.city = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.CITY);
   this.town = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.TOWN);
   this.area = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.AREA);
   this.zip_code = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.ZIP_CODE);
   console.log(data.data.formatted_address)
   this.lat = data.data.geometry.location.lat;
   this.lng = data.data.geometry.location.lng;
   this.location = data.data.formatted_address;
   this.place_id = data.data.place_id;
   this.reference = data.data.reference;
   this.name = data.data.name;
   this.map_url = data.data.url;
   this.save();
 }

  save()
  {
      this.is_submit=true;
      if(this.errors.indexOf(this.location)>=0)
    {
      return;
    }else
    {
      let locate = {
         state: this.state,
         country: this.country,
         city:  this.city,
         town:  this.town,
         area: this.area,
         zip_code: this.zip_code,
         lat: this.lat,
         lng: this.lng,
         location: this.location,
         place_id:  this.place_id,
         reference:  this.reference,
         name:   this.name,
         map_url:  this.map_url
      };

        this.lat = locate.lat;
        this.lng = locate.lng;
        this.title = locate.name;
        this.loadMap();
        this.getWeather(this.lat,this.lng);
        this.this_location = locate;

      console.log('locations = ', locate);
      this.getWeather(this.lat, this.lng);
      //localStorage.setItem('location_storage',JSON.stringify(locate));
     // this.router.navigate(['/new-trip']);
    }
    /*location:this.location,lat:this.lat,lon:this.lng,state:this.state,country:this.country});*/
    
  }
  


  getAddressComponent(address_components, key) {
  var value='';
  var postalCodeType = address_components.filter(aComp =>
  aComp.types.some(typesItem => typesItem === key))
  if (postalCodeType != null && postalCodeType.length > 0)
  value = postalCodeType[0].long_name
  return value;
  }



// Get weather by using coordinates

getWeather(latitude, longitude) {

    // Get a free key at https://www.weatherapi.com/. Replace the "Your_Key_Here" string with that key.
    var OpenWeatherAppKey = "9a5ffa4f1db742cfacb125014210408";

    var queryString =
      'http://api.weatherapi.com/v1/current.json?key=' + OpenWeatherAppKey + '&q=' + latitude + ',' + longitude + '&aqi=no&dt=2021-06-11';

    var queryString ='http://api.weatherapi.com/v1/forecast.json?key=9a5ffa4f1db742cfacb125014210408&q=' + latitude + ',' + longitude + '&days=1&aqi=no&alerts=no&dt=2021-06-11';


     /* 'http://api.openweathermap.org/data/2.5/weather?lat='
      + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial';*/

    $.getJSON(queryString, function (results) {
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


addnewstep()
{
      this.submit_done = 'true';
    const controls = this.loginForm.controls;
    console.log('controls = ', controls);
    /** check form */
    if (this.loginForm.invalid) {
      Object.keys(controls).forEach(controlName =>
      controls[controlName].markAsTouched()
       );
     return;
    }


    if(this.files.length == 0)
   {
     this.img_err = true;
     return;
   }else
   {
    this.img_err = false;     
   }


 if(this.this_location.length == 0)
   {
     return;
   }
       
   this.img_err = false;     
   const frmData = new FormData();  

  for (var i = 0; i < this.files.length; i++) { 
    frmData.append("file[]", this.files[i]);
  } 

    frmData.append("_id", localStorage.getItem('user_auth_id'));
    this.userService.presentLoading();
    this.userService.postData(frmData,config.API_URL+'/upload_img_trip').subscribe((result) => {
        this.userService.stopLoading();


        //this step data
        let datas = {
        files: result.data,
        step_name: controls.step_name.value,
        arrival_date: controls.arrival_date.value,
        arrival_time: controls.arrival_time.value,
        what_to_do: controls.what_to_do.value,
        acitvities: controls.acitvities.value,
        location:  this.this_location,
        weather: JSON.parse(localStorage.getItem('this_ocation_weather'))
        }; 
		let newdata = this.dict12.step_data;
		var array = [];
		$.each(newdata,function(key,bl){
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
      localStorage.setItem('previous_step_date',JSON.stringify(datess));

      var date = new Date(controls.arrival_time.value);
      var hour = date.getHours();
      localStorage.setItem('previous_step_time',JSON.stringify(hour));

       console.log('main array = ', data);
        localStorage.setItem('step_data',JSON.stringify(data));
       this.router.navigate(['/add-new-trip2']);
     },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });




}


 selectdated(event)
  {
     console.log('event == ', event);
     
     var newdate = this.datepipe.transform(event.detail.value, 'yyyy-MM-dd');
     if(newdate == this.min_date)
     {
       console.log('yes it same');

       
        var hour = JSON.parse(localStorage.getItem('previous_step_time'));
        console.log('hour == ', hour);
        var arr = [];
         hour++;
        for(var i=hour; i<24; i++) {
         if(i < 10)
          {
                console.log('first = '+i);
            arr.push(Number(0+i));
          }else
          {
            arr.push(i);
          }
        }
        this.min_time2 = arr;

     }else
     {
        this.min_time2 = this.min_time;
     }
  }


}

import { Component, OnInit, Directive, HostListener, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'app-edit-single-trip',
  templateUrl: './edit-single-trip.page.html',
  styleUrls: ['./edit-single-trip.page.scss'],
})
export class EditSingleTripPage implements OnInit {
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
status:any;
submit_done:any='false';

 map;
  
  @ViewChild('map') mapElement: ElementRef;

main_trip:any=[];
images:any=[];

main_trip_id:any;
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
  max_date:any='';
  min_time:any='';
  max_time:any='';
  trip_id:any;
IMAGES_URL:any = config.IMAGES_URL;
IMAGES_URL_All:any = config.IMAGES_URL_All;



  constructor(public userService: UserService, 
  private router : Router, 
  private fb: FormBuilder,
  public sanitizer:DomSanitizer,
  public datepipe: DatePipe,
  public activatedRoute: ActivatedRoute) {
 this.userSettings['inputPlaceholderText'] = 'Destination Point Search';
   this.userSettings['showRecentSearch'] = false;
    this.userSettings['currentLocIconUrl'] = true;
  this.userSettings = Object.assign({},this.userSettings);
  this.trip_id = activatedRoute.snapshot.paramMap.get('id');
  
   }

   ngOnInit() {
      this.initLoginForm();
     this.id = localStorage.getItem('user_auth_id');
      var dict2 = JSON.parse(localStorage.getItem('add_trip_data'));
      this.dict12 = dict2;
  

      setTimeout(()=>{
     
     
      //  this.loadMap();
   
    },3000);
      
  }

  ionViewDidEnter()
  {    
     this.initLoginForm();
    this.id = localStorage.getItem('user_auth_id');
    this.trip_id = this.activatedRoute.snapshot.paramMap.get('id');
   
     var dict2 = JSON.parse(localStorage.getItem('add_trip_data'));
      this.dict12 = dict2;
      this.main_trip_id = this.dict12.trip_id;
      console.log('  this.dict12 = dict2; == ',   this.dict12);
      this.min_date = this.datepipe.transform(new Date(this.dict12.start_date), 'yyyy-MM-dd');
      this.min_time = this.datepipe.transform(new Date(this.dict12.start_time), 'HH:mm');
      if(this.dict12.end_date != '')
      {
        this.max_date = this.datepipe.transform(new Date(this.dict12.end_date), 'yyyy-MM-dd');
        this.max_time = this.datepipe.transform(new Date(this.dict12.end_time), 'yyyy-MM-dd HH:mm');
      }

      console.log('this.min_date = '+this.min_date+' this.min_time = '+this.min_time+" this.max_date = "+this.max_date+" this.max_time = "+this.max_time);
      this.getsetpdata();
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
    this.submit_done = 'true';
        console.log('update');
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



if(this.files.length == 0 && this.images.length == 0)
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

 if(this.files.length > 0)
 {     
this.img_err = false;
  const frmDatas = new FormData();  
  for (var i = 0; i < this.files.length; i++) { 
  frmDatas.append("file[]", this.files[i]);
  } 

  frmDatas.append("_id", localStorage.getItem('user_auth_id'));
  this.userService.presentLoading();
  this.userService.postData(frmDatas,config.API_URL+'/upload_img_trip').subscribe((result) => {

  var allimages = result.data;
  if(this.images.length > 0)
  {
    $.each(this.images, function(key,value){
      allimages.push(value);
    })
  }

  let datas = {
     files: allimages,
    step_name: controls.step_name.value,
    arrival_date: controls.arrival_date.value,
    arrival_time: controls.arrival_time.value,
    what_to_do: controls.what_to_do.value,
    acitvities: controls.acitvities.value,
    location:  this.this_location,
    weather: JSON.parse(localStorage.getItem('this_ocation_weather')),
    trip_id: this.main_trip_id,
    userId: localStorage.getItem('user_auth_id'),
    _id:this.trip_id,
    status: this.status
  };

    this.userService.postData(datas,config.API_URL+'/edit_trip_single').subscribe((result) => {
      this.userService.stopLoading();
      if(result.status == 1){
        this.userService.presentToast('Trip has been updated successfully!','success');
      this.router.navigate(['/trip-details/'+this.main_trip_id]);
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
  }else
  {
		let datas = {
			files: this.images,
			step_name: controls.step_name.value,
			arrival_date: controls.arrival_date.value,
			arrival_time: controls.arrival_time.value,
			what_to_do: controls.what_to_do.value,
			acitvities: controls.acitvities.value,
			location:  this.this_location,
			weather: JSON.parse(localStorage.getItem('this_ocation_weather')),
			trip_id: this.main_trip_id,
			userId: localStorage.getItem('user_auth_id'),
            _id:this.trip_id,
			status: this.status
		};

		this.userService.postData(datas,config.API_URL+'/edit_trip_single').subscribe((result) => {
		this.userService.stopLoading();
		if(result.status == 1){
		this.userService.presentToast('Trip has been updated successfully!','success');
		this.router.navigate(['/trip-details/'+this.main_trip_id]);
		}
		else{
		this.userService.presentToast('Unable to send a request','danger');
		}
		},
		err => {
		this.userService.stopLoading();
		this.userService.presentToast('Unable to send a request','danger');
		});
  }
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
      var carIndex:number = this.files.indexOf(imgg);
      this.files.splice(carIndex, 1);
    }

    if ($.inArray(imgg, this.images) >= 0) {
      var carIndex:number = this.images.indexOf(imgg);
      this.images.splice(carIndex, 1);
      console.log('imagesss', this.images);
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
      datess.setDate(datess.getDate() + 1);
      localStorage.setItem('previous_step_date',JSON.stringify(datess));

       console.log('main array = ', data);
        localStorage.setItem('step_data',JSON.stringify(data));
       this.router.navigate(['/add-new-step3']);
     },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });




} 



 getsetpdata()
 {
	  this.userService.postData({_id:localStorage.getItem('user_auth_id'),trip_id:this.trip_id},config.API_URL+'/get_trip_detail_edit').subscribe((result) => {
      console.log(result);

       if(result.data != undefined)
       {
       	this.main_trip = result.data;
       	this.main_trip_id = this.main_trip.trip_id;
       	console.log('	this.main_trip == ', 	this.main_trip);
		this.loginForm.patchValue({
		step_name: this.main_trip.trip_name,
		arrival_date: this.main_trip.start_date,
		arrival_time: this.main_trip.Start_time,
		what_to_do: this.main_trip.trip_summary,
		acitvities: this.main_trip.acitvities,
		}); 
        this.userSettings['inputPlaceholderText'] = this.main_trip.starting_point;
        this.userSettings = Object.assign({},this.userSettings);
		this.lat = Number(this.main_trip.lat);
        this.lng = Number(this.main_trip.lon);
        this.title = this.main_trip.name;
        this.status = this.main_trip.status;
        this.loadMap();
        this.getWeather(this.lat,this.lng);
       	this.images = this.main_trip.images;
       	this.this_location = this.main_trip.location;
       }
     });
 }




}

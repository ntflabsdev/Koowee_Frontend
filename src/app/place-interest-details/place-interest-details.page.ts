import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
declare var google;


@Component({
  selector: 'app-place-interest-details',
  templateUrl: './place-interest-details.page.html',
  styleUrls: ['./place-interest-details.page.scss'],
})
export class PlaceInterestDetailsPage implements OnInit {
@ViewChild('map',  {static: false}) mapElement: ElementRef;

  map: any;
  lat: string;
  long: string;  
  address:string;
  placesService: any;
  fav_id:any=localStorage.getItem('fav_id');;

places_data:any=[];
weathers:any=[];
photos_data:any=[];
fav_type:any=localStorage.getItem('place_fav_type');

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
   form:null
}; 
  category1 = {
   form:null
}; 
  category2 = {
   form:null
}; 
  constructor(public userService: UserService, 
    public sanitizer:DomSanitizer,private router : Router,   
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone) {
	
	  this.category.form = "cat1";
	  this.category1.form = "breed1";
	  this.category2.form = "service1";
	  
  }
  ngOnInit() {
    this.places_data = JSON.parse(localStorage.getItem('place_detail_data'));
  }

  ionViewDidEnter()
  {
      this.places_data = JSON.parse(localStorage.getItem('place_detail_data'));
      this.photos_data = [];
      var self = this;
      $.each(this.places_data.results_l.photos,function(key,val){
         self.photos_data.push(val.photo_reference);
      });
      this.getplacespictures();
      console.log('this.places_data ==', this.places_data);
      
     this.getWeather(this.places_data.results_l.geometry.location.lat,this.places_data.results_l.geometry.location.lng);

     this.loadmap(this.places_data.latlong.lat,this.places_data.latlong.lng);

      
  }

  loadmap(lat,lng)
  {

   let latLng = new google.maps.LatLng(lat, lng);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      } 
      
      //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
    //  this.getAddressFromCoords(lat, lng); 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 

       let marker = new google.maps.Marker({
          position: latLng,
          title: 'Biratnagar, Janpath-15',
          icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        })
        
       // this.addInfoWindow(marker, content);
        marker.setMap(this.map);

  }

  gotomap(url)
  {
  window.location.href=url;
  }

 getdate(dates)
 {
  let currentDate = new Date(dates);
  let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[currentDate.getDay()];
  }

  round(numbers)
  {
    return parseInt(numbers);
  }

 

  getWeather(latitude, longitude) {


        var d = new Date(),
         month = '' + (d.getMonth() + 1),
         day = '' + d.getDate(),
         year = d.getFullYear();

    // Get a free key at https://www.weatherapi.com/. Replace the "Your_Key_Here" string with that key.
    var OpenWeatherAppKey = "9a5ffa4f1db742cfacb125014210408";

    var queryString =
      'http://api.weatherapi.com/v1/current.json?key=' + OpenWeatherAppKey + '&q=' + latitude + ',' + longitude + '&aqi=no&dt='+year+'-'+month+'-'+day;

    var queryString ='http://api.weatherapi.com/v1/forecast.json?key=9a5ffa4f1db742cfacb125014210408&q=' + latitude + ',' + longitude + '&days=3&aqi=no&alerts=no&dt='+year+'-'+month+'-'+day;

    var queryString ='http://api.weatherapi.com/v1/forecast.json?key=9a5ffa4f1db742cfacb125014210408&q=' + latitude + ',' + longitude + '&days=7&aqi=no&alerts=no';


    var self =  this;
    $.getJSON(queryString, function (results) {
    console.log('------------', results);
       //localStorage.setItem('this_ocation_weather', JSON.stringify(results));
       this.weather = results;
       console.log('weather result = ', results);
       if(results.forecast != undefined)
       {
          if(results.forecast.forecastday != undefined && results.forecast.forecastday.length > 0)
          {
               self.weathers = results.forecast.forecastday;
               
          }
       }
      
      
    }).fail(function (error) {
        console.log("error getting location",error);
    });
    
}

getplacespictures()
{

  this.userService.presentLoading();
  this.userService.postData({photo_s:JSON.stringify(this.photos_data)},config.API_URL+'/get_photots_google').subscribe((result) => {
  this.userService.stopLoading();
  if(result.status == 1){
    if(result.data.length > 0)
    {
       this.photos_data = result.data;
    }
   
  }else
  {
      this.photos_data = result.data;
  }
  });
    
     
}

selectplace(data,indx)
{
   this.fav_type = 'already';
   this.userService.presentLoading();
    this.userService.postData({_id:localStorage.getItem('user_auth_id'),data:JSON.stringify(data)},config.API_URL+'/make_fav_place').subscribe((result) => {
      this.userService.stopLoading();
      console.log(result);
      if(result.status == 1){
      localStorage.setItem('fav_id',result.ids);
      this.fav_id = result.ids;

        this.userService.presentToast('Places added to your favourite list successfully!','success');
      }
      else{
         this.userService.presentToast('Error to send a request, try again later','danger');
      }
    },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
}

removeplace(id,indx)
{
   this.fav_type = 'not';
   this.userService.presentLoading();
    this.userService.postData({_id:localStorage.getItem('user_auth_id'),place_id:localStorage.getItem('fav_id')},config.API_URL+'/remove_fav_place').subscribe((result) => {
      this.userService.stopLoading();
      console.log(result);
      if(result.status == 1){
        this.userService.presentToast('Place has been removed from your favourite list successfully!','success');
      }
      else{
         this.userService.presentToast('Error to send a request, try again later','danger');
      }
    },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
}



	slideOpts:any = {
	  slidesPerView: 3.3,
	  spaceBetween: 7,
	}
	slideOpts3:any = {
	  slidesPerView: 3,
	  spaceBetween: 7,
	}

}

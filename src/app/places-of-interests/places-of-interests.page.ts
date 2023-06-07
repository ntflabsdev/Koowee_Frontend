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
  selector: 'app-places-of-interests',
  templateUrl: './places-of-interests.page.html',
  styleUrls: ['./places-of-interests.page.scss'],
})
export class PlacesOfInterestsPage implements OnInit {
location:any;
userSettings = {showCurrentLocation: true};
lat:any;
lng:any;
lats:number;
lngs:number;
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
is_submit:Boolean = false;
errors:any=['',null,undefined];
places_data:any=[];

GoogleAutocomplete: any;
autocomplete: { input: string; };
autocompleteItems: any[];
placeid: any;
fav_places:any=[];

  constructor(public userService: UserService, 
    public sanitizer:DomSanitizer,private router : Router,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,    
    public zone: NgZone) { 
    this.userSettings['inputPlaceholderText'] = 'Location';
    this.userSettings['showRecentSearch'] = false;
    this.userSettings['showCurrentLocation'] = true;
    this.userSettings['currentLocIconUrl'] = true;
    // this.userSettings['searchIconUrl'] = true;
      this.userSettings['locationIconUrl'] = true;
    this.userSettings = Object.assign({},this.userSettings);

    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

  }

  ngOnInit() {
   
  }

  ionViewDidEnter()
  {
     this.getprofiledata();
     this.get_fav_places();
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
      console.log('locations = ', this.location);
      localStorage.setItem('search_by_location',JSON.stringify(locate));
      //this.router.navigate(['/search-trip']);
      this.selectSearchResult(this.lat,this.lng,this.location);
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

  getprofiledata()
  {
    this.userService.postData({_id:localStorage.getItem('user_auth_id')},config.API_URL+'/get_user_profile_detail').subscribe((result) => {
       console.log(result);
       if(result.data.lat == undefined || result.data.lat == null)
       {
        this.lats = Number(result.data.cords.coordinates[1]);
        this.lngs = Number(result.data.cords.coordinates[0]);
        this.selectSearchResult(this.lats,this.lngs,'');
       }else
       {
        this.lats = Number(result.data.lat);
        this.lngs = Number(result.data.lon);
        this.selectSearchResult(this.lats,this.lngs,result.data.locations);
        }
     });
  }

  get_fav_places()
  {
    this.userService.postData({_id:localStorage.getItem('user_auth_id')},config.API_URL+'/get_fav_places').subscribe((result) => {
    this.fav_places = result.data;
    
     
        
     });
  }


selectSearchResult(lat,lng,location){
  
    this.userService.presentLoading();
    this.userService.postData({lat:lat,lon:lng,location:location,my_lat:this.lats,my_lng:this.lngs},config.API_URL+'/places_of_interest').subscribe((result) => {
      this.userService.stopLoading();
      console.log(result);
      if(result.status == 1){
        this.places_data = result.data;
      }
      else{
         this.userService.presentToast('No data found try another location','danger');
      }
    },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
}

selectplace(data,indx)
{
  $('.selectplace'+indx).addClass('selected');
   this.userService.presentLoading();
    this.userService.postData({_id:localStorage.getItem('user_auth_id'),data:JSON.stringify(data)},config.API_URL+'/make_fav_place').subscribe((result) => {
      this.userService.stopLoading();
      console.log(result);
      if(result.status == 1){
        this.fav_places = result.data;
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
   $('.selectplaces'+indx).removeClass('selected');
   this.userService.presentLoading();
    this.userService.postData({_id:localStorage.getItem('user_auth_id'),place_id:id},config.API_URL+'/remove_fav_place').subscribe((result) => {
      this.userService.stopLoading();
      console.log(result);
      if(result.status == 1){
        this.fav_places = result.data;
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


 UpdateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }

    var options = {
    input: this.autocomplete.input,
    types: ['(cities)']
  };
    this.GoogleAutocomplete.getPlacePredictions(options,
    (predictions, status) => {

    console.log('predictions == ', predictions);
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }
  

  ClearAutocomplete(){
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }

  SelectSearchResult(item) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    console.log(item);

    this.placeid = item.place_id;

     this.userService.presentLoading();
    this.userService.postData({location:item.description,my_lat:this.lats,my_lng:this.lngs},config.API_URL+'/places_of_interest2').subscribe((result) => {
      this.userService.stopLoading();
      console.log(result);
      if(result.status == 1){
        this.places_data = result.data;
      }
      else{
        this.userService.presentToast('No data found try another location','danger');
      }
    },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
    
  }

  gotodetail(url,data,type,fav_id)
  {  
     localStorage.setItem('place_detail_data',JSON.stringify(data));
     localStorage.setItem('place_fav_type',type);
     localStorage.setItem('fav_id',fav_id);
     this.router.navigate([url]);
  }




slideOpts = {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 400,
  loop:true,
  autoplay:true,
  centeredSlides: true,
}
}

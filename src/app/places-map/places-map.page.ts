import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import * as $ from 'jquery';
import { config } from '../config';

declare var google;


@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.page.html',
  styleUrls: ['./places-map.page.scss'],
})
export class PlacesMapPage implements OnInit {

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

  @ViewChild('map',  {static: false}) mapElement: ElementRef;

  map: any;
  address:string;
  lat: string;
  long: string;  
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;

    placesService: any;
    places: any = [];

    places_data:any=[];
    fav_places:any=[];

    userSettings = {showCurrentLocation: true};

  constructor(public userService: UserService, 
    public sanitizer:DomSanitizer,private router : Router,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,    
    public zone: NgZone) { 
    
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

    this.userSettings['inputPlaceholderText'] = 'Location';
    this.userSettings['showRecentSearch'] = false;
    this.userSettings['showCurrentLocation'] = true;
    this.userSettings['currentLocIconUrl'] = true;
    //this.userSettings['searchIconUrl'] = true;
    this.userSettings['locationIconUrl'] = true;
    this.userSettings = Object.assign({},this.userSettings);
  }

  ngOnInit() {
    this.loadMap(); 
    this.getprofile();   
    this.get_fav_places();
  }

  ionViewDidEnter()
  {
    this.loadMap(); 
    this.getprofile();  
  }

   //LOADING THE MAP HAS 2 PARTS.
  loadMap() {
    
    //FIRST GET THE LOCATION FROM THE DEVICE.
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      } 
      
      //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
     // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude); 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 

      this.placesService = new google.maps.places.PlacesService(this.map);    

      console.log('placesss ', this.placesService); 

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


  loadMap2(lat,lon,image,name) {
    
      let latLng = new google.maps.LatLng(lat, lon);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      } 
      
      //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
     // this.getAddressFromCoords(lat, lon); 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 

      this.placesService = new google.maps.places.PlacesService(this.map);    

      console.log('placesss ', this.placesService); 

    const images = {
    url: image,
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
    };

    const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

      let marker = new google.maps.Marker({
          position: latLng,
          title: name,
          shape: shape,
          //icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          icon: images
        })
        
       // this.addInfoWindow(marker, content);
        marker.setMap(this.map);
  }


  setMarkers(lat, lon) {

      this.displayGoogleMap();
     
  }

 

  addMarker(datas) {

  
  if(datas.image.length == 0)
  {
      const image = {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      size: new google.maps.Size(60, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32),
      };

      const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: "poly",
      };

    const contentString =
    '<div id="content">' +
    '<h1 id="firstHeading" class="firstHeading">'+datas.place.name+'</h1> <div id="bodyContent"><p>'+datas.place.name+'</p><p>Link: '+datas.place.name+', <a href="'+datas.results_l.url+'" target="_blank">' +datas.results_l.url+
    '('+datas.results_l.adr_address+').</p></div></div>';

      //const infoWindow = new google.maps.InfoWindow();
      const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      });
      const marker = new google.maps.Marker({
      position: { lat: datas.results_l.geometry.location.lat, lng: datas.results_l.geometry.location.lng },
      map: this.map,
      title: datas.place.name,
      icon: image,
      shape: shape,
      visible: true
      });

      marker.addListener("click", () => {

      infoWindow.close();
      infoWindow.setContent(contentString);
      infoWindow.open(marker.getMap(), marker);
      });
      return marker;
  }else
  {

  const image = {
   // url: datas.image,
    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    size: new google.maps.Size(60, 71),
    origin: new google.maps.Point(0, 50),
    anchor: new google.maps.Point(0, 100),
  };

    const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
    };
    const contentString =
    '<div id="content">' +
    '<h1 id="firstHeading" class="firstHeading">'+datas.place.name+'</h1> <img src="'+datas.image+'"/> <div id="bodyContent"><p>'+datas.place.name+'</p><p>Link: '+datas.place.name+', <a href="'+datas.results_l.url+'" target="_blank">' +datas.results_l.url+
    '('+datas.results_l.adr_address+').</p></div></div>';

      //const infoWindow = new google.maps.InfoWindow();
      const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      });
    const marker = new google.maps.Marker({
    position: { lat: datas.latlong.lat, lng: datas.latlong.lng },
    map: this.map,
    title: datas.place.name,
    icon: image,
    shape: shape,
    visible: true
    });

     marker.addListener("click", () => {
    infoWindow.close();
    infoWindow.setContent(contentString);
    infoWindow.open(marker.getMap(), marker);
    });
    return marker;
 
  }
   
}


  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5    
    }; 
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        console.log('------------', result);
        for (let [key, value] of Object.entries(result[0])) {
          if(value.length>0)
          responseAddress.push(value); 
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>{ 
        this.address = "Address Not Available!";
      }); 
  }

  //wE CALL THIS FROM EACH ITEM.
  selectSearchResult(lat,lng,location){
  
    this.userService.presentLoading();
    this.userService.postData({lat:lat,lon:lng,location:location,my_lat:this.lats,my_lng:this.lngs},config.API_URL+'/places_of_interest').subscribe((result) => {
      this.userService.stopLoading();
      console.log(result);
      if(result.status == 1){
        this.places_data = result.data;
        this.get_fav_places();
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

selectSearchResult2(lat,lng,location){
  
   
    this.userService.postData({lat:lat,lon:lng,location:location,my_lat:this.lats,my_lng:this.lngs},config.API_URL+'/places_of_interest').subscribe((result) => {
     
      console.log(result);
      if(result.status == 1){
        this.places_data = result.data;
        this.get_fav_places();
       
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

getprofile()
{
   this.userService.postData({_id:localStorage.getItem('user_auth_id')},config.API_URL+'/get_user_profile_detail').subscribe((result) => {
       console.log(result);
        if(result.data.lat == undefined || result.data.lat == null)
       {
        this.lats = Number(result.data.cords.coordinates[1]);
        this.lngs = Number(result.data.cords.coordinates[0]);
        this.selectSearchResult2(this.lats,this.lngs,'');
       }else
       {
        this.lats = Number(result.data.lat);
        this.lngs = Number(result.data.lon);
        this.selectSearchResult2(this.lats,this.lngs,result.data.locations);
        }
        //this.selectSearchResult2(this.lats,this.lngs,result.data.locations);
     });
}


get_fav_places()
  {
    this.userService.postData({_id:localStorage.getItem('user_auth_id')},config.API_URL+'/get_fav_places').subscribe((result) => {
    this.fav_places = result.data;
      var self = this;
      console.log('-------place------------', this.places_data);
      $.each(this.fav_places,function(key,val){
         self.places_data.push(val.data);
      })
       console.log('----with favourite---------------', this.places_data);
     this.setMarkers(this.lats,this.lngs);
     });
  }
  
  
  
 
  //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
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


/******************************************************/

 displayGoogleMap() {
  //  const latLng = new google.maps.LatLng(28.6117993, 77.2194934);
    const latLng = new google.maps.LatLng(this.places_data[0].results_l.geometry.location.lat, this.places_data[0].results_l.geometry.location.lng);
      

    const mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
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
      if (_i > 0) {
        this.addMarkersToMap(this.places_data[_i]);
      }
    }
  }

  addMarkersToMap(museum) {
    const position = new google.maps.LatLng(museum.results_l.geometry.location.lat, museum.results_l.geometry.location.lng);
   
   if(museum.image.length == 0)
  {
    const contentString =
    '<div id="content">' +
    '<h1 id="firstHeading" class="firstHeading">'+museum.place.name+'</h1> <div id="bodyContent"><p>'+museum.place.name+'</p><p>Link: '+museum.place.name+', <a href="'+museum.results_l.url+'" target="_blank">' +museum.results_l.url+
    '('+museum.results_l.adr_address+').</p></div></div>';

    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      });
           

    const museumMarker = new google.maps.Marker({ position, title: museum.place.name });


     museumMarker.addListener("click", () => {

      infoWindow.close();
      infoWindow.setContent(contentString);
      infoWindow.open(museumMarker.getMap(), museumMarker);
      });

    museumMarker.setMap(this.map);
  }else
  {
     const contentString =
    '<div id="content">' +
    '<h1 id="firstHeading" class="firstHeading">'+museum.place.name+'</h1> <img src="'+museum.image+'"/> <div id="bodyContent"><p>'+museum.place.name+'</p><p>Link: '+museum.place.name+', <a href="'+museum.results_l.url+'" target="_blank">' +museum.results_l.url+
    '('+museum.results_l.adr_address+').</p></div></div>';


    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      });
           

    const museumMarker = new google.maps.Marker({ position, title: museum.place.name });


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
  

   


 
  


 

}


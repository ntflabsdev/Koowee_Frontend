import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import * as $ from 'jquery';

declare var google;


@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.page.html',
  styleUrls: ['./places-map.page.scss'],
})
export class PlacesMapPage implements OnInit {
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

  constructor(public userService: UserService, 
    public sanitizer:DomSanitizer,private router : Router,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,    
    public zone: NgZone) { 
    
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }

  ngOnInit() {
    this.loadMap();    
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
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude); 
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

  //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP
  ShowCords(){
    alert('lat' +this.lat+', long'+this.long )
  }
  
  //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
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
  
  //wE CALL THIS FROM EACH ITEM.
  SelectSearchResult(item) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    alert(JSON.stringify(item)) 

    this.placeid = item.place_id;
    this.selectPlace(item);
  }
  
  
  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  ClearAutocomplete(){
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }
 
  //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
  GoTo(){
    return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id='+this.placeid;
  }

    selectPlace(place){
        this.places = [];
        let location = {
            lat: null,
            lng: null,
            name: place.name
        };


		var Auto_Complete_Link = "https://maps.googleapis.com/maps/api/place/details/json?place_id="+place.place_id+"&fields=name,rating,formatted_phone_number&key=AIzaSyCk_zrE74VOviFJ-kx_tSwbRmrZH-JxAJI";
		
		const request = {
		placeId: place.place_id,
		fields: ["name", "formatted_address", "place_id", "geometry","rating", "formatted_phone_number"],
		};

		const infowindow = new google.maps.InfoWindow();
		const service = new google.maps.places.PlacesService(this.map);

		service.getDetails(request, (place, status) => {
		  console.log('rrrr = ', place,status);
		});
		

        this.placesService.getDetails({placeId: place.place_id}, (details) => {
            this.zone.run(() => {
               console.log('detail', details);
                location.name = details.name;
                location.lat = details.geometry.location.lat();
                location.lng = details.geometry.location.lng();
              //  this.saveDisabled = false;
             //   this.maps.map.setCenter({lat: location.lat, lng: location.lng});
                this.location = location;
            });
        });
    }


  


 
  


 

}


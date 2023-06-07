import { Component, OnInit, Directive, HostListener, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
declare var google;

@Component({
  selector: 'app-add-step-map',
  templateUrl: './add-step-map.page.html',
  styleUrls: ['./add-step-map.page.scss'],
})
export class AddStepMapPage implements OnInit {
location:any;
userSettings = {showCurrentLocation: true};
lat:any;
lng:any;
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
title:any;
text:any =true;

map;
  
  @ViewChild('map') mapElement: ElementRef;

  constructor(public userService: UserService, 
    public sanitizer:DomSanitizer,private router : Router) { 
    this.userSettings['inputPlaceholderText'] = 'Select Location';
    this.userSettings['showRecentSearch'] = false;
    this.userSettings = Object.assign({},this.userSettings);

  }

  ngOnInit() {
    localStorage.setItem('search_by_location', '')
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
      this.title = this.name;
      console.log('locations = ', locate);
      localStorage.setItem('search_by_location',JSON.stringify(locate));
      this.loadMap();
    }
    /*location:this.location,lat:this.lat,lon:this.lng,state:this.state,country:this.country});*/
    
  }

  selectlocation()
  {
    console.log("function chal rha h-->")
    this.router.navigate(['/search']);
  }
  


  getAddressComponent(address_components, key) {
  var value='';
  var postalCodeType = address_components.filter(aComp =>
  aComp.types.some(typesItem => typesItem === key))
  if (postalCodeType != null && postalCodeType.length > 0)
  value = postalCodeType[0].long_name
  return value;
  }

  loadMap(){
this.text =false
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



  backButton(){
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special:  localStorage.setItem('search_by_location', '')
    //   }
    // }
    this.router.navigate(['/tabs/dashboard'])
     
   }


}

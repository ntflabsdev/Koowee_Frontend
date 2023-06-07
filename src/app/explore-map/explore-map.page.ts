import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-map',
  templateUrl: './explore-map.page.html',
  styleUrls: ['./explore-map.page.scss'],
})
export class ExploreMapPage implements OnInit {
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

  constructor(public userService: UserService, 
    public sanitizer:DomSanitizer,private router : Router) { 
    this.userSettings['inputPlaceholderText'] = 'Location';
    this.userSettings['showRecentSearch'] = false;
    this.userSettings['showCurrentLocation'] = true;
    this.userSettings['currentLocIconUrl'] = true;
     this.userSettings['searchIconUrl'] = true;
      this.userSettings['locationIconUrl'] = true;
    this.userSettings = Object.assign({},this.userSettings);

  }

  ngOnInit() {
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
      console.log('locations = ', locate);
      localStorage.setItem('search_by_location',JSON.stringify(locate));
      this.router.navigate(['/search-trip']);
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

}

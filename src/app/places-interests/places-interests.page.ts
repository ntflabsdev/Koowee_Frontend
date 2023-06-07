import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';

@Component({
  selector: 'app-places-interests',
  templateUrl: './places-interests.page.html',
  styleUrls: ['./places-interests.page.scss'],
})
export class PlacesInterestsPage implements OnInit {
location:any;
userSettings = {showCurrentLocation: false};
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
places_data:any=[];

IMAGES_URL:any = config.IMAGES_URL;
IMAGES_URL_All:any = config.IMAGES_URL_All;

  constructor(public userService: UserService, 
    public sanitizer:DomSanitizer,private router : Router) { 
		this.userSettings['inputPlaceholderText'] = 'Location';
     this.userSettings['showRecentSearch'] = false;
		this.userSettings = Object.assign({},this.userSettings);
    }

  ngOnInit() {
  }

   ionViewDidEnter()
  {
     this.getpopluar_places();
  }

  autoCompleteCallback(data) {
console.log("autocomplete ---->",data)
let placeAddresCompoponent = {
    ZIP_CODE: 'postal_code',
    COUNTRY: 'country',
    STATE: 'administrative_area_level_1',
    CITY: 'administrative_area_level_2',
    TOWN: 'sublocality_level_1',
    AREA: 'sublocality_level_2',
    NEAREST_ROAD: 'route'
}

   console.log('search data---->',data);

   this.state = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.STATE);
   this.country = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.COUNTRY);
   this.city = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.CITY);
   this.town = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.TOWN);
   this.area = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.AREA);
   this.zip_code = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.ZIP_CODE);
   console.log(  "proper address----->" , data.data.formatted_address)
   console.log(  "proper logitude----->" , data.data.geometry.location.lng)
   console.log("CITY ----->",this.city)
   this.lat = data.data.geometry.location.lat;
   this.lng = data.data.geometry.location.lng;
   this.location = data.data.formatted_address;
   this.place_id = data.data.place_id;
   this.reference = data.data.reference;
   this.name = data.data.name;
   this.map_url = data.data.url;
   this.save();

 console.log("----> this.lng ",this.lng)
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
		  console.log('locate ====> ', locate);
			localStorage.setItem('location_storage',JSON.stringify(locate));
			this.router.navigate(['/new-trip']);
		}
		/*location:this.location,lat:this.lat,lon:this.lng,state:this.state,country:this.country});*/
		
	}




  getpopluar_places(){
  
    this.userService.presentLoading();
    this.userService.postData({},config.API_URL+'/get_popular_destinations').subscribe((result) => {
      this.userService.stopLoading();
      console.log("popular places===>",   result);
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
	


	getAddressComponent(address_components, key) {
	var value='';
	var postalCodeType = address_components.filter(aComp =>
	aComp.types.some(typesItem => typesItem === key))
	if (postalCodeType != null && postalCodeType.length > 0)
	value = postalCodeType[0].long_name
  console.log("GET ADRESS COMPONENT ==--=-==>",value)
	return value;
	}

  selectplace(places)
  {
    console.log(places);
    let locate = {
         state: places.location.state,
         country: places.location.country,
         city:  places.location.city,
         town:  places.location.town,
         area: places.location.area,
         zip_code: places.location.zip_code,
         lat: places.lat,
         lng: places.lon,
             location: places.location.location,
             place_id:  places.location.place_id,
             reference:  places.location.reference,
             name:   places.location.name,
             map_url:  places.location.map_url
      };
      console.log('locations = ', locate);
      localStorage.setItem('location_storage',JSON.stringify(locate));
      this.router.navigate(['/new-trip']);

  }

}

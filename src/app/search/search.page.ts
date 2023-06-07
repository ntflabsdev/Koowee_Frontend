import { Component, OnInit, Directive, HostListener, ViewChild } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { NavigationExtras, Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';
import { AlertController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  errors: any = ['', null, undefined];
  users: any = [];
  IMAGES_URL: any = config.IMAGES_URL;
  IMAGES_URL_All: any = config.IMAGES_URL_All;
  id: any;
  userSettings = { showCurrentLocation: true};

  page: number = 1;
  count: number = 0;
  total_result: number = 0;
  lat: number;
  lng: number;
  search_by: any;

  latitude:any;
  longitude:any


  location: any;
  state: any;
  country: any;
  city: any;
  town: any;
  area: any;
  zip_code: any;
  place_id: any;
  reference: any;
  name: any;
  map_url: any;
  is_submit: Boolean = false;
  title: any;
  constructor(public userService: UserService,
    private router: Router,
    public alertController: AlertController) {
    this.userSettings['inputPlaceholderText'] = 'search ';
    this.userSettings['showSearchButton'] = false;  
    this.userSettings = Object.assign({}, this.userSettings);
  }

  ngOnInit() {
  }

  gotomap() {
    localStorage.setItem('redirect_page', '/search');
    this.router.navigate(['/add-step-map']);
  }

  ionViewDidEnter() {
    this.users = [];
    this.total_result = 0;
    this.count = 0;
    this.id = localStorage.getItem('user_auth_id');
    if (localStorage.getItem('search_by_location') != '' && localStorage.getItem('search_by_location') != null) {
      var dict1 = JSON.parse(localStorage.getItem('search_by_location'));
      this.lat = dict1.lat;
      this.lng = dict1.lng;
      console.log('map explore = ', dict1);
      this.searchuser();
    } 
    else {
      this.searchuser();
    }

  }


  getprofiledata() {
    this.userService.postData({ _id: this.id }, config.API_URL + '/get_user_profile_detail').subscribe((result) => {
      // console.log("SEARCHpage -->", result);
      this.lat = Number(result.data.lat);
      this.lng = Number(result.data.lon);
      this.searchuser();
    });
  }

  searchuser() {

    this.userService.postData({ skip: this.page, _id: this.id, lat: this.lat, lon: this.lng }, config.API_URL + '/search_users').subscribe((result) => {
      // console.log("SEARCH USER--->", result)
      // localStorage.setItem('search_by_location', '');
      var thiss = this;
      this.users = result;
      if (result.data2 != undefined && result.data2.length > 0) {
        $.each(result.data2, function (key, bl) {
          console.log(bl.location);
          console.log(bl.weather);
          thiss.users.push(bl);
        });
        this.total_result = result.count;
        this.count += this.users.length;
        // this.page = parseInt(result.pageno);     
        //alert(this.page);   
      }
    });
  }

  loadmore() {
    this.page += 1;
    this.searchuser();
  }

  search() {
    console.log("search_by---->", this.country)
    console.log("lat-->", this.lat) 
    console.log("lon-->", this.lng)
    console.log("ID-->", this.id)
    this.userService.presentLoading();
    this.userService.postData({ skip: this.page, _id: this.id, search_by: this.country,lat:this.latitude,lon:this.longitude }, config.API_URL + '/search_users').subscribe((result) => {
      this.userService.stopLoading();
      console.log(result);
      this.users = result;
    });
  }

  isImage(icon) {
    const ext = ['.jpg', '.jpeg', '.bmp', '.gif', '.png', '.svg'];
    console.log('---', ext.some(el => icon.endsWith(el)));
    return ext.some(el => icon.endsWith(el));
  }

  gotourl(url) {
    localStorage.setItem('redirect_page_profile', '/tabs/search');
    this.router.navigate([url]);
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

    console.log('search data--->');
    console.log(data);
    this.state = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.STATE);
    this.country = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.COUNTRY);
    this.city = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.CITY);
    this.town = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.TOWN);
    this.area = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.AREA);
    this.zip_code = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.ZIP_CODE);
    console.log("country--->",data.data.formatted_address)
    this.latitude = data.data.geometry.location.lat;
    this.longitude = data.data.geometry.location.lng;
    this.location = data.data.formatted_address;
    this.place_id = data.data.place_id;
    this.reference = data.data.reference;
    this.name = data.data.name;
    this.map_url = data.data.url;
    this.save();

  }

  getAddressComponent(address_components, key) {
    var value = '';
    var postalCodeType = address_components.filter(aComp =>
      aComp.types.some(typesItem => typesItem === key))
    if (postalCodeType != null && postalCodeType.length > 0)
      value = postalCodeType[0].long_name
    return value;
  }

  save() {
    this.is_submit = true;
    if (this.errors.indexOf(this.location) >= 0) {
      return;
    } else {
      let locate = {
        state: this.state,
        country: this.country,
        city: this.city,
        town: this.town,
        area: this.area,
        zip_code: this.zip_code,
        lat: this.latitude,
        lng: this.longitude,
        location: this.location,
        place_id: this.place_id,
        reference: this.reference,
        name: this.name,
        map_url: this.map_url
      };
      this.title = this.name;
      console.log('locations = ', locate);
      // localStorage.setItem('search_by_location', JSON.stringify(locate));

    }
    /*location:this.location,lat:this.lat,lon:this.lng,state:this.state,country:this.country});*/

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

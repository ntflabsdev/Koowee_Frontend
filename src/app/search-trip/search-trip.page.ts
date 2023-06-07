import { Component, OnInit, Directive, HostListener, ViewChild } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';
import { AlertController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-search-trip',
  templateUrl: './search-trip.page.html',
  styleUrls: ['./search-trip.page.scss'],
})
export class SearchTripPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  errors: any = ['', null, undefined];
  trips: any = [];
  IMAGES_URL: any = config.IMAGES_URL;
  IMAGES_URL_All: any = config.IMAGES_URL_All;
  id: any;

  page: number = 1;
  count: number = 0;
  total_result: number = 0;
  lat: number;
  lng: number;
  search_by: any;
  userSettings = { showCurrentLocation: false };
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
  latitude: any;
  longitude: any;
  title: any;
  text: any = true;

  map;

  constructor(public userService: UserService,
    private router: Router,
    public alertController: AlertController) {
    this.userSettings['inputPlaceholderText'] = 'search ';
    this.userSettings['showSearchButton'] = false;
    this.userSettings = Object.assign({}, this.userSettings);
  }

  ngOnInit() {
    // this.search()
  }

  onPageScroll(event) {
    console.log(event.target.scrollTop);


  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.trips == this.total_result) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }




  wait(time) {
    return
    setTimeout(() => {
      this.onPageScroll(1);
    }, time);

  }

  //  appendItems(20);

  ngAfterViewInit() {

  }

  // ionViewDidEnter() {
  //   console.log("localStorage.getItem('search_by_trip') != '' && localStorage.getItem('search_by_trip') != null", localStorage.getItem('search_by_trip') != '' && localStorage.getItem('search_by_trip') != null);


  //   this.trips = [];
  //   this.total_result = 0;
  //   this.count = 0;
  //   this.id = localStorage.getItem('user_auth_id');
  //   localStorage.setItem('back_button_url', '/search-trip');
  //   if (localStorage.getItem('search_by_trip') != '' && localStorage.getItem('search_by_trip') != null) {

  //     var dict1 = JSON.parse(localStorage.getItem('search_by_trip'));
  //     this.lat = dict1.lat;
  //     this.lng = dict1.lng;
  //     this.country = dict1.country
  //     // console.log('map explore = ', dict1);
  //     console.log("11111", dict1.lat)
  //     console.log("11111", dict1.lng)
  //     this.searchtrip();
  //   } else {
  //     this.getprofiledata();
  //   }

  // }
  ionViewDidEnter()
  {   
    this.trips =[];
    this.total_result = 0;
    this.count = 0;
    this.id = localStorage.getItem('user_auth_id');
       localStorage.setItem('back_button_url','/search-trip');
     if(localStorage.getItem('search_by_location') != '' && localStorage.getItem('search_by_location') != null)
    {
      var dict1 = JSON.parse(localStorage.getItem('search_by_location'));
      this.lat = dict1.lat;
      this.lng = dict1.lng;
      this.name =dict1.name
      // console.log('map explore = ', dict1);
       this.searchtrip();
    }else
    {
      this.getprofiledata(); 
    }
   
  }


  getprofiledata() {
    this.userService.postData({ _id: this.id }, config.API_URL + '/get_user_profile_detail').subscribe((result) => {
      //  console.log({result});
      this.lat = Number(result.data.lat);
      this.lng = Number(result.data.lon);
      // console.log("lat-->",this.lat ,"lng-->",this.lng)
      this.userService.postData({ skip:this.page,_id:this.id,lat:this.lat,lng:this.lng }, config.API_URL + '/search_trip').subscribe((result) => {
        // localStorage.setItem('search_by_location','');
        // console.log("getprofile data()result-->", result)
        var thiss = this;
        this.trips = result.data;
        if (result.data2 != undefined && result.data2.length > 0) {
          $.each(result.data2, function (key, bl) {
            console.log(bl.location);
            console.log(bl.weather);
            thiss.trips.push(bl);
          });
          this.total_result = result.count;
          this.count += this.trips.length;
          //  this.page = parseInt(result.pageno);     
          //  alert(this.page);   
        }
      })
    });
  }

  searchtrip() {

    const data = {
      skip: this.page,
      _id: this.id,
      lat: this.lat,
      lng: this.lng
    }

    // console.log("data =========>", data);
    

    this.userService.postData({ skip: this.page, _id: this.id, lat: this.lat, lng: this.lng,search_by:this.name }, config.API_URL + '/search_trip').subscribe((result) => {
      // localStorage.setItem('search_by_location','');
      // console.log("searchtrip()-->", result)
      var thiss = this;
      this.trips = result.data;
      if (result.data2 != undefined && result.data2.length > 0) {
        $.each(result.data2, function (key, bl) {
          console.log(bl.location);
          console.log(bl.weather);
          thiss.trips.push(bl);
        });
        this.total_result = result.count;
        this.count += this.trips.length;
        //  this.page = parseInt(result.pageno);     
        //  alert(this.page);   
      }
    })
  }

  loadmore() {
    this.page += 1;
    this.searchtrip();
  }

  // search() {
  //   console.log("btn ----> search")
  //   console.log("lat ---->", this.latitude)
  //   console.log("lng ---->", this.longitude)
  //   console.log("id ---->", this.id)
  //   console.log("search_by ---->", this.country)

  //   this.userService.postData({ skip: this.page, lat: this.latitude, lng: this.longitude, _id: this.id, search_by: this.country }, config.API_URL + '/search_trip').subscribe((result) => {
  //     console.log("22--->", result);
  //     this.trips = result.data;
  //   });
  // }
  search()
  {
    // console.log("lat lng--->",this.lat,this.lng)
    this.userService.postData({skip:this.page,lat:this.lat,lng:this.lng,_id:this.id,search_by:this.search_by},config.API_URL+'/search_trip').subscribe((result) => {
      //  console.log("search ()--->",result);
        this.trips = result.data;
     });
  }

  gotomap() {
    localStorage.setItem('redirect_page', '/search-trip');
    this.router.navigate(['/add-step-map2']);
  }

  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 400,
    loop: true,
    autoplay: true,
    centeredSlides: true,
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
    this.latitude = data.data.geometry.location.lat;
    this.longitude = data.data.geometry.location.lng;
    this.location = data.data.formatted_address;
    console.log("location--->",this.location)
    this.place_id = data.data.place_id;
    this.reference = data.data.reference;
    this.name = data.data.name;
    this.map_url = data.data.url;


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
        lat: this.lat,
        lng: this.lng,
        location: this.location,
        place_id: this.place_id,
        reference: this.reference,
        name: this.name,
        map_url: this.map_url
      };
      this.title = this.name;
      console.log('locations = ', locate);
      localStorage.setItem('search_by_trip', JSON.stringify(locate));

    }
    /*location:this.location,lat:this.lat,lon:this.lng,state:this.state,country:this.country});*/

  }

  getAddressComponent(address_components, key) {
    var value = '';
    var postalCodeType = address_components.filter(aComp =>
      aComp.types.some(typesItem => typesItem === key))
    if (postalCodeType != null && postalCodeType.length > 0)
      value = postalCodeType[0].long_name
    return value;
  }


}

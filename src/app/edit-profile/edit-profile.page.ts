import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';

import { isPlatform } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';

import { NgxPicaService } from 'ngx-pica';
import imageCompression from 'browser-image-compression';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  location: any = [];
  userSettings = { showCurrentLocation: false };
  lat: any;
  lng: any;

  loginForm: FormGroup;
  loginForm2: FormGroup;
  is_submit: Boolean = false;
  reg_exp: any;
  is_mobile_app: any = config.IS_MOBILE_APP;
  fcm_token: any;
  errors: any = ['', null, undefined,'undefined'];
  interests: any = [];
  usertypes: any = [];
  countries: any = [];
  post: any = [];
  license_file: any= [] ;
  id: any;
  fullname: any = '';
  fulladdress: any = '';
  proshow:any= true;
  proshow2:any = false;

  is_license_uploaded: Boolean = false;
  address_error: Boolean = false;
  license_image_url: any;
  isLoading: Boolean = false;
  allowedMimes: any = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg'];
  license_error: boolean = false;
  // IMAGES_URL: any = config.IMAGES_URL;
  current_date: any = new Date();

  profile: string = "posts";
  countryName: any;
  constructor(public userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    public sanitizer: DomSanitizer,
    private _ngxPicaService: NgxPicaService) {
    // this.getprofile()

    this.userSettings['inputPlaceholderText'] = 'Enter your area address';
    this.userSettings['showRecentSearch'] = false;
    this.userSettings = Object.assign({}, this.userSettings);
  }

  ngOnInit() {
    this.initLoginForm();
    this.license_file =[]

  }

  backButton(){
   this.router.navigate(['/tabs/profile', {
    brand : true
   }]);
  }


  initLoginForm() {
    this.loginForm = this.fb.group({
      firstname: ['', Validators.compose([Validators.required])],
      about_me: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      sdcode: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      //address:['', Validators.compose([ Validators.required])],
      // country: ['', Validators.compose([Validators.required])],
      interests: ['', Validators.compose([Validators.required])],
      usertype: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])
      ],
    });

    this.loginForm2 = this.fb.group({
      oldpassword: ['', Validators.compose([Validators.required])],
      newpassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$')])],
      confirmpassword: ['', Validators.compose([Validators.required])],
    });
  }

  update() {
    // const controls:any = this.loginForm.get;
    const controls = this.loginForm.controls;
    console.log("----->",controls)

    /** check form */
    if (this.loginForm.invalid || this.location.location == undefined) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      if (this.location.location == undefined) {
        this.address_error = true;
    
      } else {
        this.address_error = false;
      }
    
   
     
      console.log('there is an issue in this controller')
      return;
    }
    // if (this.loginForm.invalid || this.location == null) {
    //   Object.keys(controls.controls).forEach(controlName =>
    //     controls.get(controlName).markAsTouched()
    //   );
    //   if (this.location == null) {
    //     this.address_error = true;
    //   } else {
    //     this.address_error = false;
    //   }
    
    //   console.log('there is an issue in this controller');
    //   return;
    // }

    if (this.location.location == undefined) {
      this.address_error = true;
      return;
    } else {
      this.address_error = false;
    }

    // let data = {
    //   _id: localStorage.getItem('user_auth_id'),
    //   profile_picture: this.license_file,
    //   firstname: this.loginForm.value.firstname,
    //   lastname: this.loginForm.value.lastname,
    //   phone: this.loginForm.value.phone,
    //   email: this.loginForm.value.email,
    // 	address: this.loginForm.value.address,
    //   gender: this.loginForm.value.gender,
    //   sdcode: this.loginForm.value.sdcode,
    //   country: this.loginForm.value.country,
    // 	interests: this.loginForm.value.interests,
    //   usertype:this.loginForm.value.usertype,
    //   about_me: this.loginForm.value.about_me,
    //   dob: this.loginForm.value.dob,
    //   lat:  this.lat,
    //   long: this.lng,
    //   location: JSON.stringify(this.location),
    // }


    const frmData = new FormData();
    if (this.license_file?.length > 0 ){
      frmData.append("profile", '');
      // console.log("mmmmmm---->", this.license_file)
    } else {
      frmData.append("profile_picture", this.license_file);

     
    }
    var intere = this.loginForm.get('interests').value;
    console.log("interest value-->",intere)

    frmData.append('_id', localStorage.getItem('user_auth_id'));
    frmData.append('firstname', this.loginForm.get('firstname').value);
    frmData.append('lastname', this.loginForm.get('lastname').value);
    frmData.append('phone', this.loginForm.get('phone').value);
    frmData.append('email', this.loginForm.get('email').value);
    // frmData.append('address', this.loginForm.get('address').value); 
    frmData.append('gender', this.loginForm.get('gender').value);
    frmData.append('sdcode', this.loginForm.get('sdcode').value);
    frmData.append('country', this.countryName);
    frmData.append('interests', intere);
    frmData.append('usertype', this.loginForm.get('usertype').value);
    frmData.append('about_me', this.loginForm.get('about_me').value);
    frmData.append('dob', this.loginForm.get('dob').value);
    frmData.append('lat', this.lat);
    frmData.append('lon', this.lng);
    frmData.append('location', JSON.stringify(this.location));
    console.log("")

    // console.log("frmdata---->",frmData)
    this.userService.presentLoading();
    this.userService.postData(frmData, config.API_URL + '/update_profile').subscribe((result) => {
      // console.log("resultttttt------>", result)
      this.userService.stopLoading();
      if (result.status == 1) {
        this.fullname = this.loginForm.value.firstname + ' ' + this.loginForm.value.lastname;
        this.fulladdress = this.location.name;
        this.userService.presentToast('Your profile has been updated successfully.', 'success');
        this.router.navigate(['/edit-profile']);
      }
      else if (result.status == 2) {
        this.userService.presentToast('Your email has been already exists', 'danger');
      }
      else if (result.status == 3) {
        this.userService.presentToast('Your mobile number has been already exists', 'danger');
      }
      else if (result.status == 4) {
        this.userService.presentToast(result.data, 'danger');
      }
      else {
        this.userService.stopLoading();
        this.userService.presentToast('Unable to send a request please try again later', 'danger');
      }
    },
      err => {
        this.userService.stopLoading();
        this.userService.presentToast('Unable to send a request please try again later', 'danger');
      });
  }

  changepassword() {

    const controls = this.loginForm2.controls;
    /** check form */
    if (this.loginForm2.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      console.log('there is an issue in this controller')
      console.log(controls);
      return;
    }

    if (controls['newpassword'].value != controls['confirmpassword'].value) {
      return;
    }

    let dict = {
      newpassword: controls['newpassword'].value,
      oldpassword: controls['oldpassword'].value,
      _id: localStorage.getItem('user_auth_id')
    };


    this.userService.presentLoading();
    this.userService.postData(dict, config.API_URL + '/update_password').subscribe((result) => {
      this.userService.stopLoading();
      if (result.status == 1) {
        this.userService.presentToast('Your password has been updated successfully.', 'success');
        this.loginForm2.reset();

      }
      else {
        this.userService.stopLoading();
        this.userService.presentToast("Your old password doesn't match with our record", 'danger');
      }
    },
      err => {
        this.userService.stopLoading();
        this.userService.presentToast('Unable to send a request please try again later', 'danger');
      });
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];

    if (!control) {
      console.log("---> 1")
      return false;
    }
    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  isControlHasError2(controlName: string, validationType: string): boolean {
    const control = this.loginForm2.controls[controlName];
    if (!control) {
      return false;
    }
    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  uploadLicense(event, type) {

    this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0].name;

      image_file.action = type;
      if (self.allowedMimes.indexOf(image_file.type) == -1) {
        this.license_error = true;
      }
      else {
        if (type == 'profile') {
          self.license_file = image_file;
          console.log('image====>', this.license_file);
          self.license_image_url = window.URL.createObjectURL(image_file);
          self.is_license_uploaded = true;
        }
      }
    }
  }

  uploadLicense2(event: any, type) {

    const files: File[] = event.target.files;
    // console.log('-----------', files)
    var self = this;
    this._ngxPicaService.resizeImages(files, 1200, 880)
      .subscribe((imageResized: File) => {
        let reader: FileReader = new FileReader();
        reader.addEventListener('load', (event: any) => {
          console.log('internal =', event);


          var image_file = event.target.result;
          const myArr = image_file.split(";");
          const myArr2 = myArr.split(":");
          console.log(myArr);
          console.log('detectMimeType ==', this.detectMimeType(image_file));
          image_file.action = type;
          if (self.allowedMimes.indexOf(image_file.type) == -1) {
            this.license_error = true;
          }
          else {
            this.license_file.push(event.target.result);
            self.license_file = image_file;
            console.log('image====>', this.license_file);

            self.license_image_url = window.URL.createObjectURL(image_file);
            self.is_license_uploaded = true;
          }

        }, false);
        reader.readAsDataURL(imageResized);
      }, (err) => {
        throw err.err;
      });
  }

  detectMimeType(b64) {
    var self = this;
    for (var s in self.allowedMimes) {
      if (b64.indexOf(s) === 0) {
        return self.allowedMimes[s];
      }
    }
  }

  ionViewDidEnter() {
    this.id = localStorage.getItem('user_auth_id');
    this.initLoginForm();
    this.getinterets();
    this.getusertypes();
    this.getcountries();
    // console.log("COUNTRIES......-->",  this.loginForm.)
  }

  getinterets() {
    this.userService.postData({}, config.API_URL + '/get_all_interest_user').subscribe((result) => {
      this.interests = result.data;
      
    });
  }

  getusertypes() {
    this.userService.postData({}, config.API_URL + '/get_all_usertypes').subscribe((result) => {
      this.usertypes = result.data;
    });
  }

  getcountries() {
    this.userService.getData(config.API_URL + '/get_countries').subscribe((result) => {
      this.countries = result.data;
      this.getprofile();
    });
  }

  getprofile() {
    this.userService.presentLoading();
    this.userService.postData({ _id: this.id }, config.API_URL + '/get_user_profile').subscribe((result) => {
      if(  result.data.profile_picture != undefined ){
        this.proshow = false
         this.proshow2 =true
      }
console.log("result.data-->",result.data)
      this.userService.stopLoading();
      if (result.status == 1) {
        this.post = result.data;
          this.license_file= this.post.profile_picture
        this.loginForm.patchValue({
          firstname: this.post.firstname,  
          lastname: this.post.lastname,
          email: this.post.email,
          sdcode: this.post.sdcode,
          gender: this.post.gender,
          address: this.post.address,
          country: this.post.country,
          interests: this.post.interests,
          usertype: this.post.usertype,
          phone: this.post.phone,
          about_me: this.post.about_me,
          dob: this.post.dob
        });
     
         this.fulladdress = this.post.country
        this.userSettings['inputString'] = this.fulladdress;
        this.userSettings = Object.assign({}, this.userSettings);

       

      

        this.fullname = this.post.firstname + ' ' + this.post.lastname;
        if (this.post.locations != undefined && this.post.locations.name != undefined) {
          console.log("if condition inside --->")
          this.fulladdress = this.post.locations.country
          // console.log("iiiiiiii--->",this.post.country)
          this.userSettings['inputPlaceholderText'] = this.fulladdress;
          this.userSettings['showRecentSearch'] = false;
          this.userSettings['inputString'] = this.fulladdress;
          this.userSettings = Object.assign({}, this.userSettings);

          let locate = {
            state: this.post.locations.state,
            country: this.post.locations.country,
            city: this.post.locations.city,
            town: this.post.locations.town,
            area: this.post.locations.area,
            zip_code: this.post.locations.zip_code,
            lat: this.post.locations.lat,
            lon: this.post.locations.lng,
            location: this.post.locations.location,
            place_id: this.post.locations.place_id,
            reference: this.post.locations.reference,
            name: this.post.locations.name,
            map_url: this.post.locations.map_url
          };

          this.lat = this.post.lat;
          this.lng = this.post.lon;
          this.location = locate;

        }
      }
      else {
        this.userService.stopLoading();
        this.userService.presentToast('Unable to send a request please try again later', 'danger');
      }
    },
      err => {
        this.userService.stopLoading();
        this.userService.presentToast('Unable to send a request please try again later', 'danger');
      });
  }



  autoCompleteCallback(data) {
    this.countryName = data.data.formatted_address;
    // console.log("AUTOCOMPLET --->",this.countryName)

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
    // console.log(data);
    var state = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.STATE);
    var country = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.COUNTRY);
    var city = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.CITY);
    var town = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.TOWN);
    var area = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.AREA);
    var zip_code = this.getAddressComponent(data.data.address_components, placeAddresCompoponent.ZIP_CODE);
    console.log(data.data.formatted_address)
    var lat = data.data.geometry.location.lat;
    var lng = data.data.geometry.location.lng;
    var location = data.data.formatted_address;
    var place_id = data.data.place_id;
    var reference = data.data.reference;
    var name = data.data.name;
    var map_url = data.data.url;

    if (this.errors.indexOf(location) >= 0) {
      return;
    } else {
      let locate = {
        state: state,
        country: country,
        city: city,
        town: town,
        area: area,
        zip_code: zip_code,
        lat: lat,
        lng: lng,
        location: location,
        place_id: place_id,
        reference: reference,
        name: name,
        map_url: map_url
      };

      this.lat = locate.lat;
      this.lng = locate.lng;
      this.location = locate;
      // console.log('full address = ', this.lat, this.lng, this.location)
    }
  }

  getAddressComponent(address_components, key) {
    var value = '';
    var postalCodeType = address_components.filter(aComp =>
      aComp.types.some(typesItem => typesItem === key))
    if (postalCodeType != null && postalCodeType.length > 0)
      value = postalCodeType[0]?.long_name
    return value;
  }


  handleImageUpload(event) {
    // console.log("EVENT -->",event)
    var self = this;
    var imageFile = event.target.files[0];
    console.log("------------>",)
    this.license_file = imageFile;
    console.log('imageFile =>>', imageFile);
    // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    var options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    imageCompression(imageFile, options)
      .then(function (compressedFile) {
        console.log("compression------>",imageFile)
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

        console.log(compressedFile);

        // return uploadToServer(compressedFile); // write your own logic
        self.uploadLicense_new(event, compressedFile, '');
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  uploadLicense_new(event, comprressimage, type = "profile") {
    console.log("upload compress--->",comprressimage)

    this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
    
      var reader = new FileReader();
      var image_file = event.target.files[0];
      

      image_file.action = type;
      if (self.allowedMimes.indexOf(image_file.type) == -1) {
        this.license_error = true;
      
      }
      else {
        // self.license_file = comprressimage;
        console.log('original = ', image_file);
        console.log('comprressimage = ', comprressimage);
        self.license_image_url = window.URL.createObjectURL(image_file);
        self.is_license_uploaded = true;
      }
    }
  }

  urlss(url) {
    // this.router.navigateByUrl(url;);
    window.location.href = url;
  }

}

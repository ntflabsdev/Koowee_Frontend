import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UserService } from "../services/user/user.service";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { config } from "../config";
import * as $ from "jquery";
import { DomSanitizer } from "@angular/platform-browser";
import { MenuController } from "@ionic/angular";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "app-signup",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  userSettings = { showCurrentLocation: true };
  current_date:any=new Date();
  reg_exp: any;
  loginForm: FormGroup;
  file: any;
  confirmpassworderror: boolean = false;
  fileupload: any = "";
  license_file: any;
  is_license_uploaded: Boolean = false;

  license_error: boolean = false;
  license_image_url: any;
  allowedMimes: any = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/svg",
  ];
  all_countries: any = [];

  errors: any = ["", null, undefined];
  eye_button1: any = false;
  eye_button2: any = false;
  lat: any;
  long: any;
  countryName: any;

  constructor(
    public alertController: AlertController,
    public userService: UserService,
    private router: Router,
    public sanitizer: DomSanitizer,
    public menuCtrl: MenuController,
    private fb: FormBuilder
  ) {
    this.userSettings["inputPlaceholderText"] = "Select your country";

    this.userSettings["Color"] = "red";
    this.userSettings["PlaceholderTextcolor"] = "white";
    this.userSettings["showRecentSearch"] = false;
    this.userSettings["showCurrentLocation"] = true;
    this.userSettings = Object.assign({}, this.userSettings);

    /* if(localStorage.vendor_auth_token != undefined)
      {
         this.router.navigate(['/tabs-vendor/home']);
      }*/
    if (localStorage.user_auth_token != undefined) {
      this.router.navigate(["/tabs/dashboard"]);
    }
    this.reg_exp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }

  ngOnInit() {
    this.initLoginForm();
    this.getcountries();
    
  }

  initLoginForm() {
    console.log("INIT FORM IS RUNNING----->")
    this.loginForm = this.fb.group({
      firstname: ["", Validators.compose([Validators.required])],
      lastname: ["", Validators.compose([Validators.required])],
      gender:["",Validators.compose([Validators.required])],
      dob:["",Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      sdcode: ["", Validators.compose([Validators.required])],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
          Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$"),
        ]),
      ],
      confirmpassword: ["", Validators.compose([Validators.required])],
      phone: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]+$"),
        ]),
      ],
    });
  }

  autoCompleteCallback(data) {
    this.countryName = data.data.formatted_address;
    this.lat = data.data.geometry.location.lat;
    this.long = data.data.geometry.location.lng;
    console.log("sign Up  lat lng --->", typeof( this.lat) ,  typeof( this.long) );
    console.log("sign Up country name --->", this.countryName);
  }

  register() {
    const controls = this.loginForm.controls;
    console.log("------------", controls);

    var frmdata = {
      firstname: controls["firstname"].value,
      lastname: controls["lastname"].value,
      dob:controls['dob'].value,
      gender:controls['gender'].value,
      email: controls["email"].value,
      password: controls["password"].value,
      phone: controls["phone"].value,
      sdcode: controls["sdcode"].value,
      country: this.countryName ? this.countryName : "",
      lat: this.lat ? this.lat : "",
      lon: this.long ? this.long : "",
      cords: {
        type: "Point",
        coordinates: [this.lat , this.long ],
      },
    };
    console.log("date value--->", typeof(frmdata.dob) )

    console.log("REGISTER FORM DATA---->", JSON.stringify(frmdata));
    if (
      controls["confirmpassword"].value != "" &&
      controls["confirmpassword"].value != undefined
    ) {
      if (controls["password"].value != controls["confirmpassword"].value) {
        this.confirmpassworderror = true;
        return;
      } else {
        this.confirmpassworderror = false;
      }
    }
    /** check form */

    if (this.loginForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      console.log("REGISTER FORM DATA---->", JSON.stringify(frmdata));
      console.log("there is an issue in this controller");
      console.log(controls);
      return;
    }

    this.userService.presentLoading();
    this.userService.postData(frmdata,config.API_URL+'/registeruser').subscribe((result) => {
    console.log("Data  aaya ki nahi",result)
      this.userService.stopLoading();
      if(result.status == 1){
        this.userService.presentToast('Your account has been registered successfully.','success');
        this.router.navigate(['/']);
      }
      else if(result.status == 2){
        this.userService.presentToast('Your email has been already exists','danger');
      }
       else if(result.status == 3){
        this.userService.presentToast('Mobile number already exists.','danger');
      }
      else if(result.status == 4){
        this.userService.presentToast(result.data,'danger');
      }
      else{
        this.userService.presentToast('Unable to send a request please try again later','danger');
      }
    },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Unable to send a request please try again later','danger');
    });
  }

  uploadLicense(event, type) {
    this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      image_file.action = type;
      if (self.allowedMimes.indexOf(image_file.type) == -1) {
        this.license_error = true;
      } else {
        if (type == "profile") {
          self.license_file = image_file;
          self.license_image_url = window.URL.createObjectURL(image_file);
          self.is_license_uploaded = true;
        }
      }
    }
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }
    const result =
      control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  getcountries() {
    // console.log("GET COUNTRY DATA --->",this.userService)
    this.userService
      .getData(config.API_URL + "/get_countries")
      .subscribe((result) => {
        this.all_countries = result.data;
        console.log("COUNTRY DATA--==>", result.data);
      });
  }

  passwordshow(param, cl, att) {
    if (param == "true") {
      if (att == "1") {
        this.eye_button1 = true;
      } else {
        this.eye_button2 = true;
      }
      $("." + cl).attr("type", "text");
    } else {
      if (att == "1") {
        this.eye_button1 = false;
      } else {
        this.eye_button2 = false;
      }
      $("." + cl).attr("type", "password");
    }
  }
}

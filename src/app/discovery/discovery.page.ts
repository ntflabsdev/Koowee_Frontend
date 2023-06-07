import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user/user.service";
import { config } from "../config";
import { AlertController } from '@ionic/angular';
import * as $ from "jquery";

@Component({
  selector: "app-discovery",
  templateUrl: "./discovery.page.html",
  styleUrls: ["./discovery.page.scss"],
})
export class DiscoveryPage implements OnInit {
  userSettings = { showCurrentLocation: true };
  countryname: any;
  dis: any= true
  lower: number = 10;
  Male: Boolean = false;
  Female: boolean = false;
  Both: boolean = false;
  greater: number = 100;
  data:any;
  country: any =
    localStorage.getItem("country") != undefined
      ? localStorage.getItem("country") == localStorage.getItem("country")
        ? true
        : false
      : false;

  show: any = localStorage.getItem("country") != undefined ? true : false;
  Town: any =
    localStorage.getItem("Town") != undefined
      ? JSON.parse(localStorage.getItem("Town"))
      : "";
  age: any =
    localStorage.getItem("age") != undefined
      ? JSON.parse(localStorage.getItem("age"))
      : "";
  discovery: any =
    localStorage.getItem("discovery") != undefined
      ? localStorage.getItem("discovery") == "true"
        ? true
        : false
      : false;
  distance: any =
    localStorage.getItem("distance") != undefined
      ? localStorage.getItem("distance")
      : "";
  gender: any =
    localStorage.getItem("gender") != undefined
      ? localStorage.getItem("gender") == "true"
        ? true
        : false
      : false;
  not_my_area: any =
    localStorage.getItem("area") != undefined
      ? localStorage.getItem("area") == "true"
        ? true
        : false
      : false;
  disablevl: any =
    localStorage.getItem("discovery") != undefined
      ? localStorage.getItem("discovery") == "true"
        ? false
        : true
      : true;
  constructor(private router: Router, public userService: UserService, public alertController: AlertController,) {
    this.countryname = localStorage.getItem("country");

    this.userSettings["inputPlaceholderText"] = "Select your country";
    this.userSettings["showRecentSearch"] = false;
    this.userSettings["inputString"] = this.countryname;
  }

  ngOnInit() {
    const data = localStorage.getItem("gender");
    if (!data) {
      this.Male = false;
      this.Female = false;
      this.Both = false;
    } else {
      data === "Male"
        ? (this.Male = true)
        : data === "Female"
        ? (this.Female = true)
        : data === "Both"
        ? (this.Both = true)
        : null;
    }
  }

  ionViewDidEnter() {
  const temp = localStorage.getItem('discovery')
  if(temp == 'true'){
    this.dis =false
  }else{
    this.dis =true
  }
  }

  logout() {
    localStorage.removeItem("discovery");
    localStorage.removeItem("distance");
    localStorage.removeItem("age");
    localStorage.removeItem("gender");
    localStorage.removeItem("area");
    localStorage.removeItem("country");

    localStorage.removeItem("user_auth_token");
    localStorage.removeItem("user_auth_id");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_firstname");
    localStorage.removeItem("user_lastname");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_phone");
    this.router.navigate(["/"]);
  }

  DeleteAccount(){
    this.data = localStorage.getItem('user_id')
    console.log("DATA--->",this.data)
    
  this.presentAlert()
  localStorage.removeItem("discovery");
    localStorage.removeItem("distance");
    localStorage.removeItem("age");
    localStorage.removeItem("gender");
    localStorage.removeItem("area");
    localStorage.removeItem("country");

    localStorage.removeItem("user_auth_token");
    localStorage.removeItem("user_auth_id");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_firstname");
    localStorage.removeItem("user_lastname");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_phone");
  
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Important message',
      message: 'Are you sure you want to delete your Account!',
      buttons: [
        {
        text : "Cancel",
        handler : () => {
          this.router.navigate(["/discovery"])
        }
      },
      {
        text : "Delete",
        handler : () => {
          this.userService.deleteloading()
          setTimeout(() => {
            this.userService.postData({},config.API_URL + `/deleteuser/${this.data}`).subscribe((result)=>{
              this.presentAlert2()
                 console.log("user deleted successfully")
                 this.userService.stopLoading()
              
            })
          },2000);
          // setTimeout(() => {
          //   this.userService.stopLoading()
          // }, 2000);
        
        
        }
      },
      
     
    
    ],
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Important message',
      message: 'your Account account has been deleted successfully',
      buttons: [
        {
        text : "OK",
        handler : () => {
          this.router.navigate(["/"])
        }
      },
    ],
    });

    await alert.present();
  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Important message',
      message: 'Are you sure you want to LOGOUT!',
      buttons: [
        {
        text : "Cancel",
        handler : () => {
          this.router.navigate(["/discovery"])
        }
      },
      {
        text : "Okay",
        handler : () => {
          this.userService.presentLoading()
          setTimeout(() => {
            this.logout()
            this.userService.stopLoading()
          },2000);
          // setTimeout(() => {
          //   this.userService.stopLoading()
          // }, 2000);
        
        
        }
      },
      
     
    
    ],
    });

    await alert.present();
  }



  autoCompleteCallback(data) {
    this.countryname = data.data.formatted_address;
    console.log("country name-->", this.countryname);
    if (this.show === true) {
      localStorage.setItem("country", data.data.formatted_address);
    }
  }

  changeFunctionweight(events) {
    this.lower = events.detail.value.lower;
    this.greater = events.detail.value.upper;
    this.age = { upper: this.greater, lower: this.lower };
    localStorage.setItem("age", JSON.stringify(this.age));
  }

  changedistance(events) {
    console.log("distance value ----->", events.detail.value);
    localStorage.setItem("distance", events.detail.value);
  }

  changediscovery(event) {
    console.log("toggle value ------->", event.detail.checked);
    if (event.detail.checked === false) {
      this.disablevl = true;
      this.dis = true;

      localStorage.setItem("discovery", "false");
    } else {
      this.disablevl = false;
      this.dis = false;

      localStorage.setItem("discovery", "true");
    }
  }

  // genderchange(event) {
  //   const gender = event.detail.value;
  //   const genderValue = localStorage.getItem("gender");
  //   console.log("GENDER----->", gender);
  //   console.log("genderValue", genderValue);

  //   if (gender === "Male") {
  //     if (event.detail.checked == true) {
  //       this.Female = false;
  //       this.Both = false;
  //       console.log("2");
  //       localStorage.setItem("gender", gender);
  //     } else {
  //       console.log("3", gender);
  //       if (gender === "Male" || gender === "Both") {
  //         console.log("4");
  //         if (event.detail.checked == false) {
  //           localStorage.removeItem("gender");
  //         }
  //         null;
  //       } else {
  //         console.log("5");
  //         localStorage.removeItem("gender");
  //       }
  //     }
  //   }
  //   if (gender === "Female") {
  //     console.log("female 1");
  //     if (event.detail.checked == true) {
  //       this.Male = false;
  //       this.Both = false;
  //       console.log("female 2");
  //       localStorage.setItem("gender", gender);
  //     } else {
  //       console.log("female 3", gender);
  //       if ((gender === "Female" || gender === "Both") && event.detail.checked == true  ) {
  //           console.log("female 4");
  //         null;
  //       } else {
  //         console.log("female 5");
  //         localStorage.removeItem("gender");
  //       }
  //     }
  //   }
  //   if (gender === "Both") {
  //     console.log("Both 1");
  //     if (event.detail.checked == true) {
  //       this.Male = false;
  //       this.Female = false;
  //       console.log("Both 2");
  //       localStorage.setItem("gender", gender);
  //     } else {
  //       console.log("Both 3", gender);
  //       if ((gender === "Both" || gender === "Both") && event.detail.checked == true  ) {
  //         console.log("Both 4");

  //         null;
  //       } else {
  //         console.log("Both 5");
  //         localStorage.removeItem("gender");
  //       }
  //     }
  //   }
  //   // this.checkTogglePosition(event);
  // }

  genderchange(event) {
    const gender = event.detail.value;
    const checked = event.detail.checked;
    const genderValue = localStorage.getItem("gender");
    console.log("GENDER----->", gender);
    console.log("genderValue", genderValue);

    if (gender === "Male") {
      if (genderValue == null && checked) {
        localStorage.setItem("gender", gender);
      } else if (genderValue === "Male" && !checked) {
        localStorage.removeItem("gender");
      } else if (
        (genderValue === "Male" ||
          genderValue === "Female" ||
          genderValue === "Both") &&
        checked
      ) {
        this.Female = false;
        this.Both = false;
        localStorage.setItem("gender", gender);
      }
    }
    if (gender === "Female") {
      if (genderValue == null && checked) {
        localStorage.setItem("gender", gender);
      } else if (genderValue === "Female" && !checked) {
        localStorage.removeItem("gender");
      } else if (
        (genderValue === "Male" ||
          genderValue === "Female" ||
          genderValue === "Both") &&
        checked
      ) {
        this.Male = false;
        this.Both = false;
        localStorage.setItem("gender", gender);
      }
    }
    if (gender === "Both") {
      if (genderValue == null && checked) {
        localStorage.setItem("gender", gender);
      } else if (genderValue === "Both" && !checked) {
        localStorage.removeItem("gender");
      } else if (
        (genderValue === "Male" ||
          genderValue === "Female" ||
          genderValue === "Both") &&
        checked
      ) {
        this.Male = false;
        this.Female = false;
        localStorage.setItem("gender", gender);
      }
    }
  }
  checkTogglePosition(event) {
    console.log(
      "event in toggle postion",
      event.detail.checked,
      event.detail.value
    );
  }

  checkcountry(event: any) {
    console.log("COUNTRY ---->", event.detail.checked);
    if (event.detail.checked === false) {
      this.show = false;
      localStorage.removeItem("country");
    } else {
      this.show = true;
    }
  }
  checktown(event) {
    console.log("Town---->", event.detail.checked);
    if (event.detail.checked === false) {
      localStorage.setItem("Town", "false");
    } else {
      localStorage.setItem("Town", "true");
    }
  }

  arecheck(event) {
    if (event.detail.checked === false) {
      this.dis = false;
      localStorage.setItem("area", "false");
    } else {
      this.dis = true;
      localStorage.setItem("area", "true");
    }
  }

  alerts() {
    alert();
  }
}

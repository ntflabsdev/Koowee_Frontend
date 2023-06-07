import { Component, OnInit, Directive, HostListener } from "@angular/core";
import { UserService } from "../services/user/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { config } from "../config";
import * as $ from "jquery";
import { Observable, Subject } from "rxjs";
import { AlertController } from "@ionic/angular";

import { SwipeService } from "../swipe.service";

import { isPlatform } from "@ionic/angular";
import { Plugins, registerWebPlugin } from "@capacitor/core";

@Component({
  selector: "app-future-connect",
  templateUrl: "./future-connect.page.html",
  styleUrls: ["./future-connect.page.scss"],
})
export class FutureConnectPage implements OnInit {
  subscribe: any = true;
  pageno: number = 1;
  totaldata: any = 0;
  id: any;
  IMAGES_URL: any = config.IMAGES_URL;
  IMAGES_URL_All: any = config.IMAGES_URL_All;
  images: any = [];
  errors: any = ["", null, undefined,'undefined'];
  users: any = [];
  lat: number;
  lng: number;
  btnArr: any = [];
  friendlist: any = [];
  finalArr: any = [];

  constructor(
    public userService: UserService,
    private router: Router,
    public SwipeService: SwipeService,
    public alertController: AlertController,
    public activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() { }

  lastslide() {
    console.log("last slide");
    // this.users.length < this.totaldata
    console.log("this.user.length-->", this.users.length)
    console.log("this.totaldata-->", this.totaldata);

    this.loadmore();
  }

  ionViewDidEnter() {
    this.users = [];
    this.pageno = 1;
    this.totaldata = 0;
    this.getprofiledata();
  }

  getusers() {
    this.users = [];
    this.btnArr = [];
    let data = {
      discovery: localStorage.getItem("discovery"),
      distance:
        localStorage.getItem("distance") != "NaN"
          ? localStorage.getItem("distance")
          : null,
      age: JSON.parse(localStorage.getItem("age")),
      gender: localStorage.getItem("gender"),
      country: localStorage.getItem("country"),
      area: localStorage.getItem("area"),
      skip: this.pageno,
      _id: localStorage.getItem("user_auth_id"),
      lat: this.lat,
      long: this.lng,
    };
    // console.log("SENDING data  to near user--->", data);
    this.userService.presentLoading();
    this.userService
      .postData(data, config.API_URL + "/get_near_users")
      .subscribe(
        (result) => {
          console.log("get near user---->", result);
          this.userService.stopLoading();
          if (result.length > 0) {
            this.users = result;
            console.log("MAtch profiles-->", result)
            this.btnArr = result
            // this.finalArr = this.users.filter((item) => !this.friendlist.includes(item.userinfo._id));
              this.finalArr = this.users
            

            console.log("final Array ===>", this.finalArr);


            // if ( this.friendlist.length > 0) {
            //   for (let i = 0; i < this.users.length; i++) {
            //     if (!this.friendlist.includes(this.users[i].userinfo._id)) {
            //       this.finalArr.push(this.users[i])
            //     }
            //   }
            // }else {
            //     this.finalArr =this.users
            // }

            this.pageno = result[0].pageNo;
            this.totaldata = result[0].total;
            var thiss = this;

            console.log("this.btnarray==>", this.btnArr)
          } else {
            console.log("something went wrong----->");
          }
        },
        (err) => {
          this.userService.stopLoading();
          this.userService.presentToast(
            "Failed to send request. Please try again",
            "danger"
          );
        }
      );
  }

  getdistanceuser() {

    this.users = [];
    let data = {
      discovery: localStorage.getItem("discovery"),
      distance:
        localStorage.getItem("distance") != "NaN"
          ? localStorage.getItem("distance")
          : null,
      age: JSON.parse(localStorage.getItem("age")),
      gender: localStorage.getItem("gender"),
      country: localStorage.getItem("country"),
      area: localStorage.getItem("area"),
      skip: this.pageno,
      _id: localStorage.getItem("user_auth_id"),
      lat: this.lat,
      lng: this.lng,
    };
    this.userService.presentLoading();
    this.userService
      .postData(data, config.API_URL + "/get_distance_users")
      .subscribe(
        (result) => {
          // console.log("get distance user---->", result);
          this.userService.stopLoading();
          if (result.data.length > 0) {
            this.pageno = result.pageno;
            this.totaldata = result.total;
            var thiss = this;
            this.users = result.data;
          }
        },
        (err) => {
          this.userService.stopLoading();
          this.userService.presentToast(
            "Failed to send request. Please try again",
            "danger"
          );
        }
      );
  }

  loadmore() {
    if (this.users.length < this.totaldata) {
      let data = {
        discovery: localStorage.getItem("discovery"),
        distance:
          localStorage.getItem("distance") != "NaN"
            ? localStorage.getItem("distance")
            : null,
        age: JSON.parse(localStorage.getItem("age")),
        gender: localStorage.getItem("gender"),
        area: localStorage.getItem("area"),
        skip: this.pageno,
        _id: localStorage.getItem("user_auth_id"),
        lat: this.lat,
        lng: this.lng,
      };
      this.userService.presentLoading();
      this.userService
        .postData(data, config.API_URL + "/get_near_users")
        .subscribe(
          (result) => {
            this.userService.stopLoading();
            if (result.length > 0) {
              this.pageno = result[0].pageNo;
              this.totaldata = result[0].total;
              var thiss = this;
              $.each(result, function (key, val) {
                thiss.users.push(val);
              });
              // this.finalArr = this.users.filter((item) => !this.friendlist.includes(item.userinfo._id));
             
                this.finalArr = this.users
              
              // console.log("------", this.users);
            }
          },
          (err) => {
            this.userService.stopLoading();
            this.userService.presentToast(
              "Failed to send request. Please try again",
              "danger"
            );
          }
        );
    }
  }

  getprofiledata() {
    this.friendlist = [];
    this.userService
      .postData(
        { _id: localStorage.getItem("user_auth_id") },
        config.API_URL + "/get_user_profile_detail"
      )
      .subscribe((result) => {
        console.log(" getprofiledata===>", result);
        this.friendlist = result.data.friendList;
        console.log("friendlist==>", this.friendlist)
        localStorage.setItem('connectionArray', JSON.stringify(this.friendlist))

        this.lat = Number(result.data.cords.coordinates[0]);
        this.lng = Number(result.data.cords.coordinates[1]);
        // console.log("latitude---->", this.lat, this.lng);
        if (
          localStorage.getItem("discovery") == "true" &&
          localStorage.getItem("area") == "true"
        ) {
          this.getdistanceuser();
        } else {
          this.getusers();
        }
      });
  }

  getage(dob) {
    dob = new Date(dob);
    var today: any = new Date();
    return Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
  }

  removetab(cl, indx) {
    $("." + cl).remove();
    $("." + indx).remove();
  }

  seletuser(id, userinfo) {

    if (this.SwipeService.subscribed && this.SwipeService.checkSubscriptionStatus()) {
      this.SwipeService.swipeUnlimited(id);
      localStorage.setItem("connected_user_infor", JSON.stringify(userinfo));
    } else {
      this.router.navigate(["/subscription"]);
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Important message",
      message: "you have reached your daily limit!",
      buttons: ["OK"],
    });

    await alert.present();
  }
}

export class UserComponent {
  name: string;
  age: number;
  dailyLimit: number = 10;
  swipeCount: number = 0;
  lastSwipeTime: Date = null;
  swipeRight() {
    if (
      this.lastSwipeTime === null ||
      Number(new Date()) - Number(this.lastSwipeTime) > 86400000
    ) {
      // reset the swipe count if it's a new day (86400000 milliseconds = 1 day)
      this.swipeCount = 0;
    }
    if (this.swipeCount < this.dailyLimit) {
      this.swipeCount++;
      this.lastSwipeTime = new Date();
      console.log(
        `${this.name} swiped right! (${this.swipeCount}/${this.dailyLimit})`
      );
    } else {
      console.log(`${this.name}, you've reached your daily swipe limit!`);
    }
  }
}

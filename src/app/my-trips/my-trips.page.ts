import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.page.html',
  styleUrls: ['./my-trips.page.scss'],
})
export class MyTripsPage implements OnInit {
errors:any=['',null,undefined,'undefined'];
profile_data:any=[];
trips:any=[];
IMAGES_URL:any = config.IMAGES_URL;
IMAGES_URL_All:any = config.IMAGES_URL_All;
pageno:any=1;
totaldata:any=0;
id:any;

page:number=1;
count:number=0;
total_result:number=0;

  constructor(public userService: UserService, 
    private router : Router, 
    public alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter()
  {   
    this.trips =[];
    this.total_result = 0;
    this.count = 0;
    this.id = localStorage.getItem('user_auth_id');
    this.getprofiledata(); 
    this.gettrips();
    localStorage.setItem('back_button_url','/my-trips');

  }

  getprofiledata()
  {
  this.userService.presentLoading();
    this.userService.postData({_id:this.id},config.API_URL+'/get_user_profile_detail').subscribe((result) => {
    this.userService.stopLoading();
       this.profile_data = result;
      if(this.profile_data.user_imgs!= undefined && this.profile_data.user_imgs.length > 0)
      {
        

      }
       
     },err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
  }

  gettrips()
  {
      this.userService.postData({skip:this.page,_id:this.id},config.API_URL+'/get_my_trips').subscribe((result) => {
        var thiss = this;
        if(result.data2 != undefined && result.data2.length > 0)
        {
         $.each(result.data2,function(key,bl){
             console.log(bl.location);
              console.log(bl.weather);
             thiss.trips.push(bl);
         });
          this.total_result = result.data;
          this.count += this.trips.length;
         // this.page = parseInt(result.pageno);     
           //alert(this.page);   
         }

       
     });
  }

  

  loadmore()
  {
    this.page += 1;
    this.gettrips();
  }


  


}

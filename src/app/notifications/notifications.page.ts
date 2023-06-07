import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';

import { isPlatform } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
notifications:any=[];
IMAGES_URL:any = config.IMAGES_URL;
IMAGES_URL_All:any = config.IMAGES_URL_All;
errors:any=['',null,undefined];
id:any;

  constructor(public userService: UserService, 
	private router : Router, 
	public sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.id = localStorage.getItem('user_auth_id');
  }

  ionViewDidEnter()
  {    
      this.id = localStorage.getItem('user_auth_id');
      this.getnotificatons();
  }

  getnotificatons()
  {
    this.userService.postData({_id:this.id},config.API_URL+'/get_notificatons').subscribe((result) => {
      console.log(result);
       if(result != undefined && result.length > 0)
       {
       	this.notifications = result;
       }
     });
  }

}

import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
//import { Observable, Subject } from 'rxjs';
import { AlertController } from '@ionic/angular';

import { isPlatform  } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-connected-user',
  templateUrl: './connected-user.page.html',
  styleUrls: ['./connected-user.page.scss'],
})
export class ConnectedUserPage implements OnInit {
users:any=[];
id:any;
IMAGES_URL:any = config.IMAGES_URL;
IMAGES_URL_All:any = config.IMAGES_URL_All;
images:any=[];
errors:any=['',null,undefined,'undefined'];
lat:number;
lng:number;
userinfo:any=[];

  constructor(public userService: UserService, 
    private router : Router, 
    public alertController: AlertController,
    public activatedRoute: ActivatedRoute,
    private socket: Socket
    ) { }

  ngOnInit() {
     console.log('----- line break');
     this.users = [];
     this.users.push(JSON.parse(localStorage.getItem('connected_user_infor')));
     console.log('--this.users',this.users);
  }

   ionViewDidEnter()
  {
     console.log('---11111--');
     this.users = [];
     this.users.push(JSON.parse(localStorage.getItem('connected_user_infor')));
     console.log('--this.users',this.users);
     this.getprofiledata();
  }

   getprofiledata()
  {
    this.userService.postData({_id:localStorage.getItem('user_auth_id')},config.API_URL+'/get_user_profile_detail').subscribe((result) => {
       console.log(result);
        this.lat = Number(result.data.lat);
        this.lng = Number(result.data.lon);
        this.userinfo = result.data;
        console.log("USERINFO--->",this.userinfo)
     });
  }

  joinChat(id) {
    this.socket.connect();
    this.socket.emit('set-nickname', id);
    this.router.navigate(['/chat-room/'+id]);
  }

  gotourl(url)
  {
      localStorage.setItem('redirect_page_profile','/connected-user/'+this.users[0].userinfo._id);
      this.router.navigate([url]);
  }

}
           

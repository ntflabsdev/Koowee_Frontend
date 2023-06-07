import { Component, OnInit } from '@angular/core';

import { config } from '../config';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-connected-user-profile',
  templateUrl: './connected-user-profile.page.html',
  styleUrls: ['./connected-user-profile.page.scss'],
})
export class ConnectedUserProfilePage implements OnInit {
  users:any=[];
id:any;
IMAGES_URL:any = config.IMAGES_URL;
IMAGES_URL_All:any = config.IMAGES_URL_All;
images:any=[];
errors:any=['',null,undefined,'undefined'];
lat:number;
lng:number;
userinfo:any=[];
  usersData: any;


  constructor(  private router : Router, 
    public userService: UserService, 
    public alertController: AlertController,
    public activatedRoute: ActivatedRoute,
    private socket: Socket) { }

    ngOnInit() {
      console.log('----- line break');
      this.users = [];
      this.users.push(JSON.parse(localStorage.getItem('connected_user_profile_info')));
      this.usersData =this.users[0]
      console.log('--this.users',this.users[0]);
   }

   ionViewDidEnter()
   {
      console.log('---11111--');
      this.users = [];
      this.users.push(JSON.parse(localStorage.getItem('connected_user_profile_info')));
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
   console.log("URl==>",url)
      localStorage.setItem('redirect_page_profile','/connected-user/'+this.users[0]._id);
      this.router.navigate([url]);
  }

}

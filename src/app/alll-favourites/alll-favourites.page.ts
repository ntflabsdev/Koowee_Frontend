import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';

@Component({
  selector: 'app-alll-favourites',
  templateUrl: './alll-favourites.page.html',
  styleUrls: ['./alll-favourites.page.scss'],
})
export class AlllFavouritesPage implements OnInit {
fav_places:any=[];

  constructor(public userService: UserService, 
    public sanitizer:DomSanitizer,private router : Router) { }

   ngOnInit() {
   
  }

  ionViewDidEnter()
  {
     this.get_fav_places();
  }

  get_fav_places()
  {
    this.userService.postData({_id:localStorage.getItem('user_auth_id')},config.API_URL+'/get_fav_places').subscribe((result) => {
    this.fav_places = result.data;
     });
  }

  removeplace(id,indx)
{
   $('.selectplaces'+indx).removeClass('selected');
   this.userService.presentLoading();
    this.userService.postData({_id:localStorage.getItem('user_auth_id'),place_id:id},config.API_URL+'/remove_fav_place').subscribe((result) => {
      this.userService.stopLoading();
      console.log(result);
      if(result.status == 1){
        this.userService.presentToast('Place has been removed from your favourite list successfully!','success');
        this.get_fav_places();
      }
      else{
         this.userService.presentToast('Error to send a request, try again later','danger');
      }
    },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
}

}

import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
services:any = [];
packages:any = [];
id:any;
del_id:any;
profiletab: string = "Basic";
  isAndroid: boolean = false;
    customAlertOptions: any = {
    header: 'Category',
  
    translucent: true
  };
    customAlertOptions1: any = {
    header: 'Breed',
  
    translucent: true
  };
    customAlertOptions2: any = {
    header: 'Service',
  
    translucent: true
  };
  category = {
   form:null
}; 
  category1 = {
   form:null
}; 
  category2 = {
   form:null
}; 
  constructor(public alertController: AlertController,
    public userService: UserService, 
    private router : Router, 
    public menuCtrl: MenuController,
    public sanitizer:DomSanitizer) {
	
	  this.category.form = "cat1";
	  this.category1.form = "breed1";
	  this.category2.form = "service1";
	  
  }
  ngOnInit(){
    this.id = localStorage.getItem('vendor_auth_id');
     this.get_services();
     this.get_packages();
  }

  ionViewDidEnter()
  {   
    this.id = localStorage.getItem('vendor_auth_id');
     this.get_services();
     this.get_packages();
  }

  get_services()
  {
    this.userService.postData({_id:this.id},config.API_URL+'/get_services').subscribe((result) => {
     this.services = result.data;
    });
  }

  get_packages()
  {
    this.userService.postData({_id:this.id},config.API_URL+'/get_packages').subscribe((result) => {
     this.packages = result.data;
     console.log('this.packages = ',this.packages);
    });
  }

  async deletesingleser(userid)
  {
     this.del_id = userid;
      const alert = await this.alertController.create({
      header: 'Er du sikker pa, du vil fjerne dette?',
      cssClass: 'alertfults',
      buttons: [
        {
        text: 'NEJ',
        role: 'cancel',
        cssClass: 'secondary',
       
        handler: () => {
            return false;
        }
       },
       {
        text: 'Bekræfte',
        handler: () => {
          this.deletesinglesers();
        }
      }
      ]
      });
      await alert.present();
  }

  async deletepackage(userid)
  {
      this.del_id = userid;
      const alert = await this.alertController.create({
      header: 'Er du sikker pa, du vil fjerne dette?',
      cssClass: 'alertfults',
      buttons: [
        {
        text: 'NEJ',
        role: 'cancel',
        cssClass: 'secondary',
       
        handler: () => {
            return false;
        }
       },
       {
        text: 'Bekræfte',
        handler: () => {
          this.deletepack();
        }
      }
      ]
      });
      await alert.present();
  }

  deletesinglesers()
  {
    this.userService.postData({_id:this.del_id},config.API_URL+'/del_singleservice').subscribe((result) => {
     this.userService.presentToast('Posten blev slettet!.','success');
       this.get_services();
    });
  }

  deletepack()
  {
    this.userService.postData({_id:this.del_id},config.API_URL+'/del_package').subscribe((result) => {
     this.userService.presentToast('Posten blev slettet!.','success');
       this.get_packages();
    });
  }

  

}

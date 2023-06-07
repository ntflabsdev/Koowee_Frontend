import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';

@Component({
  selector: 'app-emergency-button',
  templateUrl: './emergency-button.page.html',
  styleUrls: ['./emergency-button.page.scss'],
})
export class EmergencyButtonPage implements OnInit {
emergancy_contacts:any=[];

  constructor(public alertController: AlertController,
  public userService: UserService, 
	private router : Router) { }

  ngOnInit() {
     
  }

  ionViewDidEnter()
  {
    this.getemergancycontatcs();
  }


  getemergancycontatcs()
  {
      this.userService.presentLoading();
        this.userService.postData({_id:localStorage.getItem('user_auth_id')},config.API_URL+'/get_emergancy_contacts').subscribe((result) => {
        this.userService.stopLoading();
        if(result.status == 1)
        {

            this.emergancy_contacts = result.data;
        }else
        {
           this.userService.presentToast('Failed to send request. Please try again','danger');
        }    
     },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
  }


   async deletecontacts(userid)
  {
      const alert = await this.alertController.create({
      header: 'Are you sure you want to delete?',
    //  message: 'Your ad will be automatically activated after payment.',
      cssClass: 'alertfults',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
       
        handler: () => {
            return false;
        }
       },
       {
        text: 'Confirm',
        handler: () => {
          this.deletecontact(userid);
        }
      }
      ]
      });
      await alert.present();
  }


  deletecontact(id)
  {
     this.userService.presentLoading();
        this.userService.postData({userId:localStorage.getItem('user_auth_id'),id:id},config.API_URL+'/delete_emergancy_contacts').subscribe((result) => {
        this.userService.stopLoading();
        if(result.status == 1)
        {
             this.userService.presentToast('Contact has been deleted from your emergancy contacts successfully!.','success');
            this.getemergancycontatcs();
        }else
        {
           this.userService.presentToast('Failed to send request. Please try again','danger');
        }    
     },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
  }

}

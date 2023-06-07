import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';

import { isPlatform } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
dg1:any;
dg2:any;
dg3:any;
dg4:any;
otp_id:any;
_id:any;
errors : any = ['',null,undefined];
is_submit:Boolean = false;
email:any;
  constructor(public userService: UserService,private router : Router,public activatedRoute: ActivatedRoute) {
  this.email = activatedRoute.snapshot.paramMap.get('id'); 
  }

  ngOnInit() {
  }
  
  verify(){
    this.is_submit = true;
    if(this.errors.indexOf(this.dg1) >= 0 || this.errors.indexOf(this.dg2) >= 0 || this.errors.indexOf(this.dg3) >= 0
	 || this.errors.indexOf(this.dg4) >= 0){
      return false;
    }

     this.userService.presentLoading();
    this.userService.postData({email: this.email, otp:this.dg1+this.dg2+this.dg3+this.dg4},config.API_URL+'/verify_otp').subscribe((result) => {
     this.userService.stopLoading();
      if(result.status == 1){
        this.is_submit = false;
         this.userService.presentToast('OTP email verified successfully','success');
       this.router.navigate(['/change-password/'+result.data._id+'/'+this.dg1+this.dg2+this.dg3+this.dg4]);	
      }
      else{
        this.userService.presentToast('Invalid OTP, Please enter correct one','danger');
      }
    },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
  }

  otpController(event,next,prev){
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    }
 
 
  }

}

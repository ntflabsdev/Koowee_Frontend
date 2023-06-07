import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';

import { isPlatform } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
loginForm: FormGroup;
is_submit:Boolean=false;
reg_exp:any;
is_mobile_app:any = config.IS_MOBILE_APP;
fcm_token:any;
errors:any=['',null,undefined];

  constructor(public userService: UserService, 
    private router : Router, 
    private fb: FormBuilder) { }

  ngOnInit() {
  	 this.initLoginForm();
  }

    initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])
      ]
    });
  }

   login(){
    this.is_submit = true;
    const controls = this.loginForm.controls;
    /** check form */
    if (this.loginForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
    return;
   }
    
    const dict = {
      email: controls['email'].value
    };
    this.userService.presentLoading();
    this.userService.postData(dict,config.API_URL+'/forgetpassword').subscribe((result) => {
      this.userService.stopLoading();
      if(result.status == 1){
        this.is_submit = false;

        this.userService.presentToast('Email has been sent to your email address, please check.','success');
        this.router.navigate(['/reset-password/'+controls['email'].value]);
      }
      else if(result.status == 3){
        this.userService.presentToast('Your account has been blocked by admin','danger');
      }
      else if(result.status == 2){
        this.userService.presentToast("Your credentials do not match our record.",'danger');
      }
      else{
        this.userService.presentToast('Error logging in! Try later','danger');
      }
    },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
  }


  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.loginForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

}

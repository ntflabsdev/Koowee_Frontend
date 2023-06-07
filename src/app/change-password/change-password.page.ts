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
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
loginForm: FormGroup;
is_submit:Boolean=false;
reg_exp:any;
is_mobile_app:any = config.IS_MOBILE_APP;
fcm_token:any;
errors:any=['',null,undefined];
id:any;
otp:any;

  constructor(public userService: UserService, 
    private router : Router, 
    private fb: FormBuilder,
    public activatedRoute: ActivatedRoute) { 
     this.id = activatedRoute.snapshot.paramMap.get('email'); 
     this.otp = activatedRoute.snapshot.paramMap.get('otp');
  }

  ngOnInit() {
  	this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
     newpassword:['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$')])],
     confirmpassword:['', Validators.compose([ Validators.required])], 
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
    
    if(controls['newpassword'].value != controls['confirmpassword'].value)
      {
         return;
      } 

    const dict = {
      newpassword: controls['newpassword'].value,
       _id: this.id,
       otp: this.otp

    };
    this.userService.presentLoading();
    this.userService.postData(dict,config.API_URL+'/reset_password').subscribe((result) => {
      this.userService.stopLoading();
      if(result.status == 1){
        this.is_submit = false;

        this.userService.presentToast('Your password has been changed successfully!.','success');
        this.router.navigate(['/']);
      }
      else if(result.status == 3){
        this.userService.presentToast('Your account has been blocked by admin','danger');
      }
      else if(result.status == 2){
        this.userService.presentToast("Your credentials do not match our record.",'danger');
      }
      else{
        this.userService.presentToast('Failed to send request! Try later','danger');
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

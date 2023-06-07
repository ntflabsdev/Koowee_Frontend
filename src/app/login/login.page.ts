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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
loginForm: FormGroup;
is_submit:Boolean=false;
reg_exp:any;
is_mobile_app:any = config.IS_MOBILE_APP;
fcm_token:any;
errors:any=['',null,undefined];
eye_button:any=false;

  constructor(
    public userService: UserService, 
    private router : Router, 
    private fb: FormBuilder) {
        if(localStorage.user_auth_token != undefined)
        {   
           this.router.navigate(['/tabs/dashboard']);
        }
     }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])
      ],
      password: ['', Validators.compose([
        Validators.required
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
    if((controls.email.status == "VALID") && controls.password.status == "VALID")
    {

    }else
    {
      return;
    }
   }

    
    const dict = {
      email: controls['email'].value,
      password: controls['password'].value
    };
 

    this.userService.presentLoading();
    this.userService.postData(dict,config.API_URL+'/loginuser').subscribe((result) => {
      console.log("LOGIN api ---->",result)
      this.userService.stopLoading();
      if(result.status == 1){
        this.is_submit = false;
                                      
        this.userService.presentToast('Your account has been logged in successfully.','success');
        var userId = this.userService.encryptData(result.data._id,config.ENC_SALT);
          localStorage.setItem('user_auth_token',userId.toString());
          localStorage.setItem('user_auth_id',result.data._id);
          localStorage.setItem('user_id',result.data._id);
          localStorage.setItem('user_firstname',result.data.firstname);
          localStorage.setItem('user_lastname',result.data.lastname);
          localStorage.setItem('user_email',result.data.email);
          localStorage.setItem('user_phone',result.data.phone);
          this.router.navigate(['/dashboard']);
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

  passwordshow(param)
  {
    if(param == 'true')
    {
      this.eye_button = true;
      $('.password').attr('type','text');
    }else
    {
      this.eye_button = false;
       $('.password').attr('type','password');
    }
  }

}

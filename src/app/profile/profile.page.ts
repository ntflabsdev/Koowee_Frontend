import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { config } from '../config';
import * as $ from 'jquery';
import { Observable, Subject } from 'rxjs';
import { AlertController } from '@ionic/angular';

import { isPlatform } from '@ionic/angular';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import imageCompression from 'browser-image-compression';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
profilegroup: FormGroup;
loginForm: FormGroup;
loginForm2: FormGroup;
is_submit:Boolean=false;
reg_exp:any;
is_mobile_app:any = config.IS_MOBILE_APP;
fcm_token:any;
errors:any=['',null,undefined,'undefined'];
interests:any=[];
usertypes:any=[];
countries:any=[];
post:any=[];
license_file:any;
id:any;
fullname:any='';
fulladdress:any='';
profile_data:any=[];
age:any;

is_license_uploaded:Boolean=false;
license_image_url:any;
isLoading:Boolean=false;allowedMimes:any = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg', "video/mp4", "video/webm", "video/ogg"];
license_error:boolean=false;
IMAGES_URL:any = config.IMAGES_URL;
IMAGES_URL_All:any = config.IMAGES_URL_All;
images:any=[];
pageno:number=1;
totaldata:any=0;
user_id:any;
back_btn_url:any = localStorage.getItem('redirect_page_profile');



  constructor( public userService: UserService, 
    private router : Router, 
    private fb: FormBuilder,
    public alertController: AlertController,
    public activatedRoute: ActivatedRoute) {
      console.log('not done');
      if(activatedRoute.snapshot.paramMap.get('id') != undefined)
      {
        this.user_id = activatedRoute.snapshot.paramMap.get('id');
      }
     }

  ngOnInit() {
    console.log('this is working');
  }


  ionViewWillEnter() {
    
    console.log('ionViewWillEnter ')
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad ')
    }
   
    ionViewWillLeave() {
    console.log('ionViewWillLeave  ')
    }
    ionViewDidLeave() {
    console.log('ionViewDidLeave   ')
    }
    ionViewWillUnload() {
    console.log('ionViewWillUnload    ')
    }

    ionWillEnter() {
    console.log('ionWillEnter    ')
    }


  ionViewDidEnter()
  {   
    this.pageno  = 1;
    this.totaldata  = 0;
    console.log('ionViewDidEnter main')
    
    if(this.activatedRoute.snapshot.paramMap.get('id') != undefined)
      {
        this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
      }else
      {
        this.id = localStorage.getItem('user_auth_id');
      }
    this.getprofiledata(); 
    this.getimages();
  }

  getprofiledata()
  {
    this.userService.postData({_id:this.id},config.API_URL+'/get_user_profile_detail').subscribe((result) => {
   
       this.profile_data = result;
       console.log("profile_data-->",this.profile_data)
      if(this.profile_data.user_imgs!= undefined && this.profile_data.user_imgs.length > 0)
      {
        //  this.images = this.profile_data.user_imgs;
       }
       
     });
  }

  backButton(){
    this.router.navigate(['/search', {

    }]);
   }

  getimages()
  {
       this.images = [];
      this.userService.postData({skip:this.pageno,_id:this.id},config.API_URL+'/get_imgs').subscribe((result) => {
       this.pageno = result.pageNo;
      //  console.log("IMAGES FUNCTION==>",result)
        var thiss = this;
        if(result.data2 != undefined && result.data2.length > 0)
        {
         $.each(result.data2,function(key,bl){
             thiss.images.push(bl);
         });
           this.totaldata = result.data;
         }

       
     });
  }


 upload_img()
  {

     const frmData = new FormData(); 
		if(this.license_file=='')
		{
		  frmData.append("profile", "");
		}else{
		  frmData.append("file", this.license_file);  
		  frmData.append("type", this.license_file.type);  
		}   
		frmData.append("_id", localStorage.getItem('user_auth_id'));
		this.userService.presentLoading();
    this.userService.postData(frmData,config.API_URL+'/upload_img').subscribe((result) => {
        this.userService.stopLoading();
        this.pageno = 1;
        this.getimages();
       
     },
    err => {
      this.userService.stopLoading();
      this.userService.presentToast('Failed to send request. Please try again','danger');
    });
  }

  uploadLicense(event,type){
   
    this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
      image_file.action=type;
      if(self.allowedMimes.indexOf(image_file.type) == -1){
        this.license_error = true;
      }
      else{
        if(type=='profile'){
          self.license_file = image_file;
          this.upload_img();
          self.license_image_url = window.URL.createObjectURL(image_file);
          self.is_license_uploaded = true;
        }
      }
    }
  }

  async presentAlert(img) {
  let imgs = img.images;
  // console.log("imgs-->",imgs)
  let type = img.file_type+'/'+img.type;
  // console.log("file type-->",img.file_type)
   if(img.file_type ==  'image')
   {
      const alert = await this.alertController.create({
         message: `<img  src="${imgs}" alt="" />`,
      buttons: [{
        text: 'X',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }],
      cssClass: 'alert-helps'
    });
    await alert.present();
   }
   if(img.file_type ==  'video')
   {
            this.userService.presentLoading();
			const alert = await this.alertController.create({
			message: '<video autoplay="autoplay" webkit-playsinline="webkit-playsinline"><source src="'+imgs+'" type="'+type+'" /></video>',
			buttons: ['X'],
			cssClass: 'alert-helps',
			backdropDismiss: false
			});
			var self = this;
			setTimeout(function(){
		  	   self.userService.stopLoading();
		  	},1000);
		  	 await alert.present();

		  	 $('video').attr('controls','controls');
			
   }
   

    
    }

    loadmore()
    {
      this.userService.postData({skip:this.pageno,_id:this.id},config.API_URL+'/get_imgs').subscribe((result) => {
       this.pageno = result.pageNo;
        var thiss = this;
         if(result.data2 != undefined && result.data2.length > 0)
        {
         $.each(result.data2,function(key,bl){
             thiss.images.push(bl);
         });
           this.totaldata = result.data;
         }
         
         console.log('this.images =', this.images);
      });
    } 



    handleImageUpload(event) {
   var self = this;
  var imageFile = event.target.files[0];
  console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
  console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

  var options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  }
  imageCompression(imageFile, options)
    .then(function (compressedFile) {
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
         
         console.log(compressedFile);

     // return uploadToServer(compressedFile); // write your own logic
      self.uploadLicense_new(event,compressedFile,'');
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

uploadLicense_new(event,comprressimage,type="profile"){
   
    this.license_error = false;
    var self = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var image_file = event.target.files[0];
     
      image_file.action=type;
      if(self.allowedMimes.indexOf(image_file.type) == -1){
        this.license_error = true;
      }
      else{
          self.license_file = comprressimage;
          console.log('original = ', image_file);
          console.log('comprressimage = ',comprressimage);
          this.upload_img();
          self.license_image_url = window.URL.createObjectURL(image_file);
          self.is_license_uploaded = true;
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { SwipeService } from '../swipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  profile_data: any = [];
  id: any;
  errors: any = ['', null, undefined,'undefined'];
  images: any;
  IMAGES_URL: any = config.IMAGES_URL;
  value: any;
  subscription: any;
  isSubscriptionActive: boolean = false;

  constructor(
    public userService: UserService,
    public swipservice: SwipeService,
    private route: ActivatedRoute,
    public toastController: ToastController,
    private router: Router,
  ) {
    this.id = localStorage.getItem('user_auth_id');
  }

  ngOnInit() {
    let brand = this.route.snapshot.paramMap.get('brand');
    if (brand) {
      this.getprofiledata()
    }
    this.getprofiledata()
  }
  ionViewDidEnter() {

  }


  async checkSubscriptionExpiration() {
    const currentDate = moment();
    const endDate = moment(this.subscription.subcription_end_date
    );
    const daysRemaining = endDate.diff(currentDate, 'days');
    if (daysRemaining <= 4 && daysRemaining > 0 && this.subscription.isSubscribe) {
      const toast = await this.toastController.create({
        message: `Your subscription will expire in ${daysRemaining} days. Please renew your subscription to continue using our app.`,
        duration: 5000, // Duration in milliseconds
        position: 'bottom' // Position of the toast message
      });
      toast.present();
    }
    if (daysRemaining == 0) {
      if (this.subscription.isSubscribe) {
        const toast = await this.toastController.create({
          message: `Your subscription is expired. Please renew your subscription to continue using our app.`,
          duration: 5000, // Duration in milliseconds
          position: 'bottom' // Position of the toast message
        });
        const result = await this.userService.postData({ isSubscribe: false, _id: this.id }, config.API_URL + '/update_profile').toPromise()
        console.log("result-->", result)
        if (result.status == "1") {
          this.router.navigate(["/subscription"]);
        }
        toast.present();
      }
    }

  }



  getprofiledata() {
    this.userService.postData({ _id: this.id }, config.API_URL + '/get_user_profile_detail').subscribe(async (result) => {
      console.log("user detail-->",result)
      this.profile_data = result;
      this.subscription = result.data;
      this.swipservice.subscribed = result.data.isSubscribe
      // console.log("issubccribe-->", result.data.isSubscribe)
      this.isSubscriptionActive = await this.swipservice.checkSubscriptionStatus();
      if (this.isSubscriptionActive) {
        this.checkSubscriptionExpiration();
      }
      if (this.profile_data.user_imgs != undefined && this.profile_data.user_imgs.length > 0) {
        this.images = this.profile_data.user_imgs;
      }

    });
  }

}

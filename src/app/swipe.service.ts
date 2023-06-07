import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response,RequestOptions, RequestOptionsArgs } from '@angular/http';
import * as moment from 'moment';
import { UserService } from './services/user/user.service';
import { config } from './config';
@Injectable({
  providedIn: 'root'
})
export class SwipeService {

  name: string;
  age: number;
  dailyLimit: number= 5;
  swipeCount: number;
  lastSwipeTime: any = localStorage.getItem('lastSwipeTime');
  subscribed :any  = false
  detail:any ;
  id = localStorage.getItem('user_auth_id');



  constructor( 
    public alertController: AlertController,
    private http: Http,
    private router: Router,
    public userService: UserService
    ) { 
     
    }

postdata(data,endpoint){
this.http.post(endpoint ,data)
}
async checkSubscriptionStatus(): Promise<boolean> {
  const result = await this.userService.postData({ _id: this.id }, config.API_URL + '/get_user_profile_detail').toPromise();
  const subscription = result.data;
  const currentDate = moment();
  const startDate =  moment(subscription.subcription_start_date);
  const endDate = moment(subscription.subcription_end_date);
  const isSubscriptionActive = currentDate.isBetween(startDate, endDate, null, '[]');
  return isSubscriptionActive;
}



// swipeRight(userId) {
//   const value = JSON.parse(localStorage.getItem('swipeCount'));
//   console.log("value-->",value)
//   this.swipeCount = value;
//   const currentDate:any = new Date();
//   if (this.lastSwipeTime === null || (currentDate - this.lastSwipeTime) > 86400000) {
//     let sender =  localStorage.getItem('user_id')
//     // reset the swipe count if it's a new day (86400000 milliseconds = 1 day)
//     console.log("1");
//     this.swipeCount = 0;
//     localStorage.setItem('swipeCount',JSON.stringify(this.swipeCount));
//     this.userService.postData({friendId:userId},config.API_URL + `/addfriend/${sender}`).subscribe((res)=>{
//     })
//     this.router.navigate(['/connected-user/' + userId]);
//   } 
//    else if (this.swipeCount < this.dailyLimit) {
//     console.log("2");
//     let sender =  localStorage.getItem('user_id')
//     this.swipeCount++;
//     this.lastSwipeTime = currentDate;
//     // Save the swipe count in local storage
//     localStorage.setItem('swipeCount',JSON.stringify(this.swipeCount));
//     this.userService.postData({friendId:userId},config.API_URL + `/addfriend/${sender}`).subscribe((res)=>{
//     })
//     this.router.navigate(['/connected-user/' + userId]);
//     console.log(`swiped right! (${value}/${this.dailyLimit})`);
//   } else {
//     console.log("3");  
//     this.presentAlert()
//     localStorage.setItem('swipeCount',JSON.stringify(this.swipeCount));
//   }
//   localStorage.setItem('lastSwipeTime',this.lastSwipeTime);
// }

swipeRight(userId) {
  const value = JSON.parse(localStorage.getItem('swipeCount'));
  // console.log("value-->", value)
  this.swipeCount = value;
  const currentDate:any = new Date();
  const lastSwipeTime:any = new Date(localStorage.getItem('lastSwipeTime'));
  

  if (lastSwipeTime.getTime() === currentDate.getTime() || (currentDate - lastSwipeTime) > 86400000) {
    console.log("1");
    let sender = localStorage.getItem('user_id');
    this.swipeCount = 0;
    this.lastSwipeTime = currentDate;
    localStorage.setItem('swipeCount', JSON.stringify(this.swipeCount));
    localStorage.setItem('lastSwipeTime', this.lastSwipeTime);
    this.userService.postData({friendId:userId}, config.API_URL + `/addfriend/${sender}`).subscribe((res)=>{
    })
    this.router.navigate(['/connected-user/' + userId]);
  }
   else if (this.swipeCount < this.dailyLimit) {
    console.log("2");
    let sender = localStorage.getItem('user_id');
    this.swipeCount++;
    this.lastSwipeTime = currentDate;
    localStorage.setItem('swipeCount', JSON.stringify(this.swipeCount));
    localStorage.setItem('lastSwipeTime', this.lastSwipeTime);
    this.userService.postData({friendId:userId}, config.API_URL + `/addfriend/${sender}`).subscribe((res)=>{
    })
    this.router.navigate(['/connected-user/' + userId]);
    console.log(`swiped right! (${value}/${this.dailyLimit})`);
  }
   else {
    console.log("3");
    this.presentAlert();
    localStorage.setItem('swipeCount', JSON.stringify(this.swipeCount));
  }
}

swipeUnlimited(userId){
   let connectionsId =  localStorage.getItem('connectionArray')
  console.log("2");
  if(connectionsId.includes(userId)){
       this.presentAlert()
  }else{

    let sender = localStorage.getItem('user_id');
    this.userService.postData({friendId:userId}, config.API_URL + `/addfriend/${sender}`).subscribe((res)=>{
    })
    this.router.navigate(['/connected-user/' + userId]);
  }

  
}




 
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This user is already in your Friend list!',
      buttons: [{
        text : "Ok",
        handler : () => {
          this.router.navigate(["/future-connect"])
        }
      }],
    });

    await alert.present();
  }


}

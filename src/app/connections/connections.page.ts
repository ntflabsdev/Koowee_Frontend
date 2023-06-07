import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.page.html',
  styleUrls: ['./connections.page.scss'],
})
export class ConnectionsPage implements OnInit {
  profile_data: any = [];
  errors: any = ['', null, undefined,];

  constructor(  public userService: UserService, private router: Router,) { }

  ngOnInit() {
    this.Connecteduser()
    console.log("111")
  }

  Connecteduser(){
    let sender =localStorage.getItem('user_id')
    console.log("ID--->",sender)
    this.userService.postData({},config.API_URL + `/getallfriends/${sender}`).subscribe((res)=>{
      this.profile_data =res.data.friendList
      console.log("GET RESULT-->",this.profile_data)
    })
  }

  viewProfile(userID:any,userinfo){
    localStorage.setItem("connected_user_profile_info", JSON.stringify(userinfo));
    this.router.navigate(['/connected-user-profile/' + userID]);
  }

}
//
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import {
  AlertController,
  MenuController,
  IonInfiniteScroll,
} from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { config, socket_config } from '../config';
import * as $ from 'jquery';
import { DomSanitizer } from '@angular/platform-browser';
import { IonContent, ToastController, LoadingController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit {
  page: number = 1;
  count: number = 0;
  total_result: number = 0;
  pageno: any = 1;
  totaldata: any = 0;
  scroolltell: boolean = true;

  id: any;
  user_chat_id: any;
  user_data: any = [];
  message = '';
  first: number = 0;
  provider_detail: any;
  loading: any;
  messages_list: any = [];
  user_id: any;
  messageDateString: any;
  image_url = config.IMAGES_URL;
  public socketHost: any;
  public zone: any;
  public socket: any;
  errors: any = ['', null, undefined];
  IMAGES_URL: any = config.IMAGES_URL;
  @ViewChild('content', { static: true }) private content: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private socketserver: Socket,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public userService: UserService,
    private router: Router,
    private route: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.id = localStorage.getItem('user_auth_id');
    this.user_chat_id = activatedRoute.snapshot.paramMap.get('id');

    /*****************************************************/
    var self = this;
    this.getUpdates().subscribe((new_message) => {
      console.log('new_message');
      console.log(new_message);
      self.pushmessage(new_message);
    });
    /************************************************************/
  }

  ngOnInit() {
    this.id = localStorage.getItem('user_auth_id');
    this.user_chat_id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    this.id = localStorage.getItem('user_auth_id');
    this.user_chat_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.message_list();
  }

  pushmessage(new_message) {
    console.log('new messgae arriwe', new_message);
    if (localStorage.getItem('user_auth_id') == new_message.reciever_id) {
      this.messages_list.push(new_message);
      var self = this;
      setTimeout(function () {
        self.content.scrollToBottom(300);
      }, 100);
    }
  }

  send_message() {
    if (this.message == '') {
      this.presentToast('Sorry,Message can not be blank!');
    } else {
      var msgData = {
        sender_id: this.id,
        reciever_id: this.user_chat_id,
        message: this.message,
      };
      console.log(msgData);

      //call the api service for create new message or group
      this.userService
        .postData(msgData, config.API_URL + '/create_message')
        .subscribe((response) => {
          console.log(response);
          //this.messages_list.push(response.data)
          this.socketserver.emit('send-message', response.data);
          this.messages_list.push(response.data);

          this.message = '';
          var self = this;
          setTimeout(function () {
            self.content.scrollToBottom(300);
          }, 100);
        });
    }
  }

  message_list() {
    var data = {
      user_id: this.id,
      user_chat_id: this.user_chat_id,
      skip: this.page,
    };
    //call the api service for create new message or group
    this.userService
      .postData(data, config.API_URL + '/get_chat')
      .subscribe((response) => {
        this.messages_list = [];
        //this.messages_list = response.data;
        var self = this;
        $.each(response.data, function (key, val) {
          self.messages_list.unshift(val);
        });
        this.user_data = response.saloon_usr;
        this.totaldata = response.total;
        this.pageno = response.pageNo;
        console.log(
          'this.messages_list==>',
          this.messages_list,
          'this.user_data==>',
          this.user_data._id
        );
        var self = this;
        setTimeout(function () {
          // self.message_list();
          self.content.scrollToBottom(300);
        }, 100);
        setTimeout(function () {
          this.first = 1;
        }, 300);
      });
  }

  //toast appears
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      //showCloseButton: true
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    toast.present();
  }

  //loading appears
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      cssClass: 'my-loading-class',
    });
    await this.loading.present();
  }

  //stop the loading
  async stopLoading() {
    if (this.loading != undefined) {
      await this.loading.dismiss();
    } else {
      var self = this;
      setTimeout(function () {
        self.stopLoading();
      }, 1000);
    }
  }

  private isDifferentDay(messageIndex: number): boolean {
    if (messageIndex === 0) return true;

    const d1 = new Date(this.messages_list[messageIndex - 1].created_on);
    const d2 = new Date(this.messages_list[messageIndex].created_on);

    return (
      d1.getFullYear() !== d2.getFullYear() ||
      d1.getMonth() !== d2.getMonth() ||
      d1.getDate() !== d2.getDate()
    );
  }

  private getMessageDate(messageIndex: number): string {
    const wholeDate = new Date(
      this.messages_list[messageIndex].created_on
    ).toDateString();

    this.messageDateString = wholeDate;

    return this.messageDateString;
  }

  goto_profile() {
    this.router.navigate(['/profile']);
  }

  /*********************************/
  getUpdates() {
    var self = this;
    let observable = new Observable((observer) => {
      self.socketserver.on('message', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  logScrollEnd() {
    console.log('scroll end');
  }

  logScrolling(events) {
    if (events.detail.scrollTop == 0) {
      if (this.messages_list.length < this.totaldata) {
        var data = {
          user_id: this.id,
          user_chat_id: this.user_chat_id,
          skip: this.pageno,
        };
        this.userService
          .postData(data, config.API_URL + '/get_chat')
          .subscribe((response) => {
            var self = this;

            $.each(response.data, function (key, val) {
              self.messages_list.unshift(val);
            });
            this.totaldata = response.total;
            this.pageno = response.pageNo;
            console.log(
              'this.messages_list',
              this.messages_list,
              'this.user_data',
              this.user_data
            );

            setTimeout(function () {
              // self.message_list();
              self.content.scrollToBottom(300);
            }, 100);
          });
      }
    }
  }

  logScrollStart() {
    console.log('start');
  }

  loadData(event) {
    console.log('eventeventevent = ', event);
    setTimeout(() => {
      console.log('Done');

      console.log(
        'this.messages_list === ' +
          this.messages_list.length +
          ' , this.totaldata = ' +
          this.totaldata
      );
      if (
        this.messages_list.length == this.totaldata ||
        this.messages_list.length > this.totaldata
      ) {
        event.target.disabled = true;
        event.target.complete();
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  backbtn(id:any){
    console.log("IDD==>",id)
    this.router.navigate([`/connected-user-profile/${id}`,]);
  }

  
}

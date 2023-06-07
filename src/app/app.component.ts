import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalFooService } from './globalService';
import { UserService } from './services/user/user.service';
import { Router } from '@angular/router';
import { config } from './config';
import * as $ from 'jquery';
import { isPlatform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private globalFooService: GlobalFooService,
    public userService: UserService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => {
        document.addEventListener(
          'backbutton',
          function (event) {
            event.preventDefault();
            event.stopPropagation();
          },
          false
        );
      });

      //this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#4c8dff');
      this.statusBar.show();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
      if (localStorage.user_auth_token != undefined) {
        this.router.navigate(['/tabs/dashboard']);
      } else {
        this.router.navigate(['/']);
      }                                     
    });
  }
} 

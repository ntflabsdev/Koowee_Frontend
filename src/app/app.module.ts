import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { config } from './config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config1: SocketIoConfig = { url: config.SOCKET_URL, options: {} };

//IMPORT THE PLUGINS
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { NgxPicaModule } from 'ngx-pica';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { FileOpener } from '@ionic-native/file-opener/ngx';

import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
// import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config1),       
    NgxPicaModule,
  ],
  providers: [
    DatePipe,
    StatusBar,
    FileOpener,
    SplashScreen,
    InAppPurchase2,
    //ADD GEOLOCATION Y GEOCODER ON THE PROVIDERS.
    Geolocation,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing,
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

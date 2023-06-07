import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectedUserProfilePageRoutingModule } from './connected-user-profile-routing.module';

import { ConnectedUserProfilePage } from './connected-user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectedUserProfilePageRoutingModule
  ],
  declarations: [ConnectedUserProfilePage]
})
export class ConnectedUserProfilePageModule {}

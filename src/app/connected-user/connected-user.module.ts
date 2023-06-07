import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectedUserPageRoutingModule } from './connected-user-routing.module';

import { ConnectedUserPage } from './connected-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectedUserPageRoutingModule
  ],
  declarations: [ConnectedUserPage]
})
export class ConnectedUserPageModule {}

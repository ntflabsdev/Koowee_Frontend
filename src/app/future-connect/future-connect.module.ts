import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutureConnectPageRoutingModule } from './future-connect-routing.module';

import { FutureConnectPage } from './future-connect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutureConnectPageRoutingModule
  ],
  declarations: [FutureConnectPage]
})
export class FutureConnectPageModule {}

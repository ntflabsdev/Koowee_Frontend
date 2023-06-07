import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyButtonPageRoutingModule } from './emergency-button-routing.module';

import { EmergencyButtonPage } from './emergency-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergencyButtonPageRoutingModule
  ],
  declarations: [EmergencyButtonPage]
})
export class EmergencyButtonPageModule {}

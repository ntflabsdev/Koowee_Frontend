import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesOfInterestsPageRoutingModule } from './places-of-interests-routing.module';

import { PlacesOfInterestsPage } from './places-of-interests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesOfInterestsPageRoutingModule
  ],
  declarations: [PlacesOfInterestsPage]
})
export class PlacesOfInterestsPageModule {}

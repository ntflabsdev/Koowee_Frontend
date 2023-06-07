import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceInterestDetailsPageRoutingModule } from './place-interest-details-routing.module';

import { PlaceInterestDetailsPage } from './place-interest-details.page';

import { NgxStarsModule } from 'ngx-stars';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceInterestDetailsPageRoutingModule,
    NgxStarsModule
  ],
  declarations: [PlaceInterestDetailsPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PlaceInterestDetailsPageModule {}

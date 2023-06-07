import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripDetailsPageRoutingModule } from './trip-details-routing.module';

import { TripDetailsPage } from './trip-details.page';

import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripDetailsPageRoutingModule,
      NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [TripDetailsPage]
})
export class TripDetailsPageModule {}

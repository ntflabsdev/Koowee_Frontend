import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTripPageRoutingModule } from './search-trip-routing.module';
import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';
import { SearchTripPage } from './search-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchTripPageRoutingModule,
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [SearchTripPage]
})
export class SearchTripPageModule {}

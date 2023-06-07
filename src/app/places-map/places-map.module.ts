import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesMapPageRoutingModule } from './places-map-routing.module';

import { PlacesMapPage } from './places-map.page';

import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesMapPageRoutingModule,
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [PlacesMapPage]
})
export class PlacesMapPageModule {}

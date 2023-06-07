import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreMapPageRoutingModule } from './explore-map-routing.module';

import { ExploreMapPage } from './explore-map.page';

import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreMapPageRoutingModule,
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [ExploreMapPage]
})
export class ExploreMapPageModule {}

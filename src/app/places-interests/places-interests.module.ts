import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesInterestsPageRoutingModule } from './places-interests-routing.module';

import { PlacesInterestsPage } from './places-interests.page';
import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesInterestsPageRoutingModule,
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [PlacesInterestsPage]
})
export class PlacesInterestsPageModule {}

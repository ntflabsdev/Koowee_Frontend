import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesOfInterestsPageRoutingModule } from './places-of-interests-routing.module';

import { PlacesOfInterestsPage } from './places-of-interests.page';

import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';

import { NgxStarsModule } from 'ngx-stars';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxStarsModule,
    PlacesOfInterestsPageRoutingModule,
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [PlacesOfInterestsPage]
})
export class PlacesOfInterestsPageModule {}

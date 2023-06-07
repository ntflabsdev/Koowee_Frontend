import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStepMapPageRoutingModule } from './add-step-map-routing.module';

import { AddStepMapPage } from './add-step-map.page';

import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStepMapPageRoutingModule,
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [AddStepMapPage]
})
export class AddStepMapPageModule {}

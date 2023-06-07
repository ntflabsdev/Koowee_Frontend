import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTripMidPageRoutingModule } from './add-trip-mid-routing.module';

import { AddTripMidPage } from './add-trip-mid.page';

import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';

import { TagInputModule } from 'ngx-chips';

import { NgxDropzoneModule } from 'ngx-dropzone';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddTripMidPageRoutingModule,
    NgxDropzoneModule,
    TagInputModule,
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [AddTripMidPage]
})
export class AddTripMidPageModule {}

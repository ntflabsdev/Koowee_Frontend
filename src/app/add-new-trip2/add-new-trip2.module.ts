import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewTrip2PageRoutingModule } from './add-new-trip2-routing.module';

import { AddNewTrip2Page } from './add-new-trip2.page';

import { NgxDropzoneModule } from 'ngx-dropzone';

import { TagInputModule } from 'ngx-chips';

import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddNewTrip2PageRoutingModule,
	NgxDropzoneModule,
	TagInputModule,
	NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [AddNewTrip2Page]
})
export class AddNewTrip2PageModule {}

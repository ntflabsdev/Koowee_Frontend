import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSingleTripPageRoutingModule } from './edit-single-trip-routing.module';

import { EditSingleTripPage } from './edit-single-trip.page';

import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';

import { TagInputModule } from 'ngx-chips';

import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	IonicModule,
	ReactiveFormsModule,
	EditSingleTripPageRoutingModule,
	NgxDropzoneModule,
	TagInputModule,
	NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [EditSingleTripPage]
})
export class EditSingleTripPageModule {}

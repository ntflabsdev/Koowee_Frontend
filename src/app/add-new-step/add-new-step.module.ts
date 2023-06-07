import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewStepPageRoutingModule } from './add-new-step-routing.module';

import { AddNewStepPage } from './add-new-step.page';

import { NgxDropzoneModule } from 'ngx-dropzone';

import { TagInputModule } from 'ngx-chips';

import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddNewStepPageRoutingModule,
    NgxDropzoneModule,
	TagInputModule,
	NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [AddNewStepPage]
})
export class AddNewStepPageModule {}

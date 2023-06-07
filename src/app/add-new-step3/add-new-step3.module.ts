import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewStep3PageRoutingModule } from './add-new-step3-routing.module';

import { AddNewStep3Page } from './add-new-step3.page';

import { NgxDropzoneModule } from 'ngx-dropzone';

import { TagInputModule } from 'ngx-chips';

import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddNewStep3PageRoutingModule,
    NgxDropzoneModule,
	TagInputModule,
	// NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [AddNewStep3Page]
})
export class AddNewStep3PageModule {}

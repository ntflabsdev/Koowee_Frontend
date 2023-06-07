import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStepMap2PageRoutingModule } from './add-step-map2-routing.module';

import { AddStepMap2Page } from './add-step-map2.page';
import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStepMap2PageRoutingModule,
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [AddStepMap2Page]
})
export class AddStepMap2PageModule {}

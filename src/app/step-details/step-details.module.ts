import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepDetailsPageRoutingModule } from './step-details-routing.module';

import { StepDetailsPage } from './step-details.page';

import {TimeAgoPipe} from 'time-ago-pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepDetailsPageRoutingModule
  ],
  declarations: [StepDetailsPage,TimeAgoPipe]
})
export class StepDetailsPageModule {}

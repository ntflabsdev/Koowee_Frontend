import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestFiltersPageRoutingModule } from './interest-filters-routing.module';

import { InterestFiltersPage } from './interest-filters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestFiltersPageRoutingModule
  ],
  declarations: [InterestFiltersPage]
})
export class InterestFiltersPageModule {}

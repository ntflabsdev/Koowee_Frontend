import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}

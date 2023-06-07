import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoveryPageRoutingModule } from './discovery-routing.module';

import { DiscoveryPage } from './discovery.page';
import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoveryPageRoutingModule,
    NgxGeoautocompleteModule.forRoot()
  ],
  declarations: [DiscoveryPage]
})
export class DiscoveryPageModule {}

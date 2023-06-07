import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlllFavouritesPageRoutingModule } from './alll-favourites-routing.module';

import { AlllFavouritesPage } from './alll-favourites.page';

import { NgxStarsModule } from 'ngx-stars';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlllFavouritesPageRoutingModule,
    NgxStarsModule
  ],
  declarations: [AlllFavouritesPage]
})
export class AlllFavouritesPageModule {}

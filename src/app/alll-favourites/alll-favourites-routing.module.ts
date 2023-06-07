import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlllFavouritesPage } from './alll-favourites.page';

const routes: Routes = [
  {
    path: '',
    component: AlllFavouritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlllFavouritesPageRoutingModule {}

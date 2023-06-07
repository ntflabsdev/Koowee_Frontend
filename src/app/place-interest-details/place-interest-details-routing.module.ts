import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceInterestDetailsPage } from './place-interest-details.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceInterestDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceInterestDetailsPageRoutingModule {}

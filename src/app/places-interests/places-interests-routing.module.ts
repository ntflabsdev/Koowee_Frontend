import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesInterestsPage } from './places-interests.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesInterestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesInterestsPageRoutingModule {}

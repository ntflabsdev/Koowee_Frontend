import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesOfInterestsPage } from './places-of-interests.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesOfInterestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesOfInterestsPageRoutingModule {}

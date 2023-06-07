import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTripPage } from './search-trip.page';

const routes: Routes = [
  {
    path: '',
    component: SearchTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTripPageRoutingModule {}

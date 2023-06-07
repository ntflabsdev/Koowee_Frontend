import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTripMidPage } from './add-trip-mid.page';

const routes: Routes = [
  {
    path: '',
    component: AddTripMidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTripMidPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSingleTripPage } from './edit-single-trip.page';

const routes: Routes = [
  {
    path: '',
    component: EditSingleTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSingleTripPageRoutingModule {}

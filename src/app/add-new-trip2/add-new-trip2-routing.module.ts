import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewTrip2Page } from './add-new-trip2.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewTrip2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewTrip2PageRoutingModule {}

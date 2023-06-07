import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStepMapPage } from './add-step-map.page';

const routes: Routes = [
  {
    path: '',
    component: AddStepMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStepMapPageRoutingModule {}

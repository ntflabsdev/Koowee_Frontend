import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStepMap2Page } from './add-step-map2.page';

const routes: Routes = [
  {
    path: '',
    component: AddStepMap2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStepMap2PageRoutingModule {}

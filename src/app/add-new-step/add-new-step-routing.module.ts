import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewStepPage } from './add-new-step.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewStepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewStepPageRoutingModule {}

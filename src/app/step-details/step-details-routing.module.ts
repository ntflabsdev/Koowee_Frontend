import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepDetailsPage } from './step-details.page';

const routes: Routes = [
  {
    path: '',
    component: StepDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepDetailsPageRoutingModule {}

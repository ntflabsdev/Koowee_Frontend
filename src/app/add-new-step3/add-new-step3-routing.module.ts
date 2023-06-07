import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewStep3Page } from './add-new-step3.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewStep3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewStep3PageRoutingModule {}

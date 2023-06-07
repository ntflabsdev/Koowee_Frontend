import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterestFiltersPage } from './interest-filters.page';

const routes: Routes = [
  {
    path: '',
    component: InterestFiltersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterestFiltersPageRoutingModule {}

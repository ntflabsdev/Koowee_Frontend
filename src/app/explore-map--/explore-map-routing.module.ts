import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreMapPage } from './explore-map.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreMapPageRoutingModule {}

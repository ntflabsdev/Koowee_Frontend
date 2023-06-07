import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutureConnectPage } from './future-connect.page';

const routes: Routes = [
  {
    path: '',
    component: FutureConnectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutureConnectPageRoutingModule {}

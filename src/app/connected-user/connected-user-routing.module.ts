import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectedUserPage } from './connected-user.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectedUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectedUserPageRoutingModule {}

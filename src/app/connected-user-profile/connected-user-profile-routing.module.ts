import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectedUserProfilePage } from './connected-user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectedUserProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectedUserProfilePageRoutingModule {}

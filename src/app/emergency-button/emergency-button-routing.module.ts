import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyButtonPage } from './emergency-button.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyButtonPageRoutingModule {}

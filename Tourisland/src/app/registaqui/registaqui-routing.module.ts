import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistaquiPage } from './registaqui.page';

const routes: Routes = [
  {
    path: '',
    component: RegistaquiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistaquiPageRoutingModule {}

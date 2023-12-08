import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopayPage } from './topay.page';

const routes: Routes = [
  {
    path: '',
    component: TopayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopayPageRoutingModule {}

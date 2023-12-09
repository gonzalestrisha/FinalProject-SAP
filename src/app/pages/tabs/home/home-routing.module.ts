import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,

    children: [
      {
        path: 'maintenance',
        loadChildren: () => import('./maintenance/maintenance.module').then( m => m.MaintenancePageModule)
      }
    ]
  },  {
    path: 'topay',
    loadChildren: () => import('./topay/topay.module').then( m => m.TopayPageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

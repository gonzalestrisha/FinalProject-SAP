import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'tabs',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },

  {
    path: 'maintenance',
    loadChildren: () => import('./pages/tabs/home/maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },

  {
    path: 'complaint',
    loadChildren: () => import('./pages/tabs/home/complaint/complaint.module').then( m => m.ComplaintPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

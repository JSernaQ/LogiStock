import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./features/inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./features/sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../features/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('../features/inventory/inventory.module').then(m => m.InventoryPageModule)
      },
      {
        path: 'sales',
        loadChildren: () => import('../features/sales/sales.module').then(m => m.SalesPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../features/auth/auth.module').then(m => m.AuthPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/account',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

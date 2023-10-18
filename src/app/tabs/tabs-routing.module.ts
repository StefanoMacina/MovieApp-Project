import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        loadChildren: () => import('../Films/films.module').then(m => m.FilmsPageModule)
      },
      {
        path: 'celebrities',
        loadChildren: () => import('../Celebrities/celebrities.module').then(m => m.CelebritiesPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../Profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/films',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebritiesPage } from './celebrities.page';
import { CelebrityDetails } from './components/celebrityDetails/CelebrityDetails';
import { EditCelebrity } from './components/editCelebrity/EditCelebrity';

const routes: Routes = [
  {
    path: '',
    component: CelebritiesPage,
  },
  {
    path: 'details/:id',
    component: CelebrityDetails,
  },
  {
    path : 'edit-celebrity/:id',
    component : EditCelebrity
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebritiesPageRoutingModule {}

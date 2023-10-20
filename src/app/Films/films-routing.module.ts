import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPage } from './films.page';
import { FilmDetails } from './components/FilmDetails/FilmDetails';

const routes: Routes = [
  {
    path: '',
    component: FilmsPage,
  },
  {
    path: 'details/:id',
    component: FilmDetails,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsPageRoutingModule {}

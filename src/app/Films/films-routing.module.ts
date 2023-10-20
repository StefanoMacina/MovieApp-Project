import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPage } from './films.page';
import { FilmDetails } from './components/FilmDetails/FilmDetails';
import { EditFilm } from './components/EditFIlm/EditFilm';

const routes: Routes = [
  {
    path: '',
    component: FilmsPage,
  },
  {
    path: 'details/:id',
    component: FilmDetails,
  },
  {
    path : 'edit-film/:id',
    component : EditFilm
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsPageRoutingModule {}

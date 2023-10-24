import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPage } from './films.page';
import { FilmDetails } from './components/FilmDetails/FilmDetails';
import { EditFilm } from './components/EditFIlm/EditFilm';
import { addFilm } from './components/addMovie/addFIlm';

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
  },
  {
    path : 'add-film',
    component : addFilm
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsPageRoutingModule {}

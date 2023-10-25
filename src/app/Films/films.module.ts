import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmsPage } from './films.page';

import { FilmsPageRoutingModule } from './films-routing.module';
import { FilmList } from './components/FIlmList/FilmList';
import { FilmDetails } from './components/FilmDetails/FilmDetails';
import { EditFilm } from './components/EditFIlm/EditFilm';
import { addFilm } from './components/addFilm/addFilm';
import { HeaderComponent } from '../shared/header/header';





@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FilmsPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [FilmsPage, FilmList, FilmDetails, EditFilm,addFilm, HeaderComponent]
})
export class FilmsPageModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmsPage } from './films.page';

import { FilmsPageRoutingModule } from './films-routing.module';
import { FilmList } from './components/FilmList';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FilmsPageRoutingModule
  ],
  declarations: [FilmsPage, FilmList]
})
export class FilmsPageModule {}

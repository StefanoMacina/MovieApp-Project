import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilmsPage } from './films.page';
import { EditFilm } from './components/EditFIlm/EditFilm';
import { FilmList } from './components/FIlmList/FilmList';
import { ToIntegerPipe } from './components/FIlmList/toInt.pipe';
import { FilmDetails } from './components/FilmDetails/FilmDetails';
import { addFilm } from './components/addFilm/addFilm';
import { FilmsPageRoutingModule } from './films-routing.module';
import { OrderByPipe } from './components/FIlmList/sortBy.pipe';
import { RangeWrapperModule } from '../shared/range-wrapper/rangeBar.module';
import { CustomDirective } from '../custom-directive.directive';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FilmsPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RangeWrapperModule
    
  ],
  declarations: [
    CustomDirective,
    FilmsPage,
    FilmList,
    FilmDetails,
    EditFilm,
    addFilm,
    ToIntegerPipe,
    OrderByPipe,
    
  ],
})
export class FilmsPageModule {}

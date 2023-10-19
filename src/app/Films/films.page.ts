import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { films } from './interfaces/film.interfaces';

@Component({
  selector: 'app-films',
  templateUrl: 'films.page.html',
  styleUrls: ['films.page.scss']
})
export class FilmsPage {

  filmList: films [] = []

  constructor(private readonly _filmList : FilmService ) {
    this.filmList = this._filmList.getList();
  }




}

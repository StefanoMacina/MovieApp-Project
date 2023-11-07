import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../../shared/interfaces/film.interfaces';

@Component({
  selector: 'Film-details',
  templateUrl: './FilmDetails.html',
  styleUrls: ['./FilmDetails.scss'],
})
export class FilmDetails {
  filmId!: string;

  // inizializzo la variabile da inserire in html per mostrare i dati
  film: Film | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _filmService: FilmService
  ) {
    this._route.params.subscribe((params) => {
      this.filmId = params['id'];
      if (this.filmId) {
        
        this._filmService.getById(this.filmId).subscribe((getFilm: Film) => {
          this.film = getFilm;
        });
      }
    });
  }
}

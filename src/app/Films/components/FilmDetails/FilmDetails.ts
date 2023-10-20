import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';
import { films } from '../../interfaces/film.interfaces';

@Component({
  selector: 'Film-details',
  templateUrl: './FilmDetails.html',
  styleUrls: ['./FilmDetails.scss'],
})
export class FilmDetails {
  filmId: number | undefined;

  // inizializzo la variabile da inserire in html per mostrare i dati 
  film : films | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _filmService: FilmService,
  
  ) {
    this._route.params.subscribe((params) => {
      this.filmId = +params['id'];
      if (this.filmId) {

        // assegno a film ciò che estraggo con getById, l'ID del film
        this.film = this._filmService.getById(this.filmId);
        console.log(this.film?.title );
        
      }
    });
  }
}

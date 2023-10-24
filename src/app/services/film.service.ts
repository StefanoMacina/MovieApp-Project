import { Injectable } from '@angular/core';
import { films } from '../Films/interfaces/film.interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private films: films[] = [
    {
      id: 1,
      title: 'The Hangover I',
      year: 2011,
      genres: 'commedia',
    },
    {
      id: 2,
      title: 'American Pie',
      year: 2011,
      genres: 'Avventura',
    },
    {
      id: 3,
      title: 'Frankenstein Junior',
      year: 1974,
      genres: 'Drammatico',
    },
    {
      id: 4,
      title: 'Nowhere',
      year: 2023,
      genres: 'Thriller',
    },
    {
      id: 5,
      title: 'The hangover III',
      year: 2011,
      genres: 'commedia',
    },
    {
      id: 6,
      title: 'Fairplay',
      year: 2023,
      genres: 'Avventura',
    },
    {
      id: 7,
      title: 'Reptile',
      year: 2023,
      genres: 'Drammatico',
    },
    {
      id: 8,
      title: 'Useless',
      year: 2023,
      genres: 'Thriller',
    },
    {
      id: 9,
      title: 'The hangover II',
      year: 2011,
      genres: 'commedia',
    },
    {
      id: 10,
      title: 'Me',
      year: 2023,
      genres: 'Avventura',
    },
    {
      id: 11,
      title: 'No way',
      year: 2023,
      genres: 'Drammatico',
    },
    {
      id: 12,
      title: 'Now',
      year: 2023,
      genres: 'Thriller',
    },
    
  ];

  private _film$ = new Subject<films[]>();

  // fattorizzare questa funzione e il findindex
  private _next() {
    this._film$.next(this.films);
  }

  // permetto la lettura del film$ subject dall'esterno
  flmObs$ = this._film$.asObservable();

  getList(): void {
    this._film$.next(this.films);
  }

  getById(id: number): films | undefined {
    const film: films | undefined = this.films.find(
      (film: films) => film.id === id
    );
    return film;
  }

  // aggiornare i valori del form in ingresso
  update(formValues: films): void {
    const filmIndex = this.films.findIndex(
      (film: films) => film.id === formValues.id
    );
    if (filmIndex !== -1) {
      this.films[filmIndex] = formValues;
    }
    this._film$.next(this.films);
  }

  deleteById(id: number) {
    const index = this.films.findIndex((film) => film.id === id);
    if (index !== -1) {
      this.films.splice(index, 1);
      this._film$.next(this.films);
    }
  }

  addFilm(film: films) {
    film.id = this.films.length + 1;
    this.films.push(film);
    this._film$.next(this.films);
  }
}

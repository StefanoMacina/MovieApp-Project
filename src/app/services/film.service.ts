import { Injectable } from '@angular/core';
import { FilmForm, Film } from '../Films/interfaces/film.interfaces';
import { Observable, Subject, map, pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private _baseUrl = '';
  private _film$ = new Subject<Film[]>();
  private films: Film[] = [];

  constructor(private readonly _http: HttpClient) {
    this._baseUrl = environment.baseUrl;
  }

  // permetto la lettura del film$ subject dall'esterno
  flmObs$ = this._film$.asObservable();

  getList(): Observable<Film[]> {
    return this._http
      .get<Film[]>(`${this._baseUrl}/movies?order_by=id&page=0&size=25`)
      .pipe(
        map((film: any) => {
          return film.movies;
        })
      );
  }

  getById(id: string): Observable<Film> {
    return this._http.get<Film>(`${this._baseUrl}/movies/${id}`);
  }

  update(formValues: Film): Observable<Film> {
    return this._http.put<Film>(
      `${this._baseUrl}/movies/${formValues.id}`,
      formValues
    );
  }

  deleteById(id: string): Observable<Film> {
    return this._http.delete<Film>(`${this._baseUrl}/movies/${id}`);

    /* const index = this.films.findIndex((film) => film.id == id);
    if (index !== -1) {
      this.films.splice(index, 1);
      this._film$.next(this.films);
    } */
  }

  // Prendo i dati del form 'formValues' e li converto con formToDto per rimapparli in un interfaccia
  // compatibile con il backend, LE INTERFACCE SONO DIVERSE
  addFilm(formValues: FilmForm): Observable<Film> {
    const movieDto: Film = this.formToDto(formValues);

    return this._http.post<Film>(`${this._baseUrl}/movies`, movieDto);

    /* film.id = (this.films.length + 1).toString();
    this.films.push(film);
    this._film$.next(this.films); */
  }

  // rimappare i dati del form per passarli al backend in formato corretto
  formToDto(toDto: FilmForm): Film {
    return {
      id: toDto.id,
      title: toDto.title,
      rating: {
        averageRating: toDto.averageRating || 0,
        numVotes: toDto.numVotes || 0,
      },
      year: toDto.year,
      runningTime: toDto.runningTime,
      genres: toDto.genres,
    };
  }
}

import { Injectable } from '@angular/core';
import { films } from '../Films/interfaces/film.interfaces';
import { Observable, Subject, map, pluck } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilmService {

  private _baseUrl = ''
  private _film$ = new Subject<films[]>();  
  private films: films[] = [];

  // 1)  istanziare http client nel costruttoree richiamare il base url da environment.ts
  constructor(private readonly _http : HttpClient) {
    this._baseUrl = environment.baseUrl;
  }



  // permetto la lettura del film$ subject dall'esterno
  flmObs$ = this._film$.asObservable();

  getList(): Observable<films[]> {
    //dato che ricevo due oggetti dalla get, map per prendere solo l'array di films
    return this._http.get<films[]>(`${this._baseUrl}/movies?order_by=id&page=0&size=25`).pipe(
      map((film : any) => {

        /* this._film$.next(film.movies) */
        return film.movies
      })
    )

    //this._film$.next(this.films);
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
    film.id = (this.films.length + 1);
    this.films.push(film);
    this._film$.next(this.films);
  }
}

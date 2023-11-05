import { Injectable } from '@angular/core';
import { FilmForm, Film, ResponseDto } from '../shared/interfaces/film.interfaces';
import { Observable, Subject, map } from 'rxjs';
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
        //console.log(film.movies)
          return film.movies;
        })
      );
  }


  getByTitle(title : string | null) : Observable<Film[]> {
    return this._http.get<ResponseDto<Film>>(`${this._baseUrl}/movies?title=${title}`)
    .pipe(
      map((movies) => movies.movies)
    )
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

    
  }

  addFilm(formValues: FilmForm): Observable<Film> {
    const movieDto: Film = this.formToDto(formValues);

    return this._http.post<Film>(`${this._baseUrl}/movies`, movieDto);

    
  }

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

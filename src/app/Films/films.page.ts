import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  map,
  switchMap,
} from 'rxjs';
import { FilmService } from '../services/film.service';
import { Film } from '../shared/interfaces/film.interfaces';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-films',
  templateUrl: 'films.page.html',
  styleUrls: ['films.page.scss'],
})
export class FilmsPage {
  filmsList: Film[] = [];
  ratingRange$ = new BehaviorSubject<number>(0);
  formField = new FormControl<string>('');
  selectedId$ = new BehaviorSubject<string>('');
  unfilteredMovies: Film[] = [];
  selectedMovie: Film | undefined;
  // selectedFilmRating: number | undefined;
  // selectedMovie$ = new BehaviorSubject<Film | undefined>(undefined);
  // formField$ = new BehaviorSubject<string>('');
  // selectedItemDetail: string = '';

  constructor(
    private readonly _filmService: FilmService,
    private readonly _route: Router,
    private route: ActivatedRoute
  ) {
    this.selectedId$.subscribe((id) => {
      let movie = this.filmsList.find((movie) => movie.id === id);
      this.selectedMovie = movie;
    });
  }

  closeFooter(){
    this.selectedMovie = undefined
  }

  private _getListByTitle() {
    this.formField.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((searchText) => {
          return this._filmService.getByTitle(searchText);
        })
      )
      .subscribe((value) => (this.filmsList = value));
  }

  // defining optional parameter with def value of 0 to avoid undefined, defining parameter as number
  private _getFilmList(selectedRatingFilter = 0) {
    this._filmService
      .getList()
      .pipe(
        map((films) =>
          films.filter(
            (film) =>
              film.rating != undefined &&
              film.rating.averageRating >= selectedRatingFilter
          )
        )
      )
      .subscribe((films: Film[]) => {
        this.filmsList = films.map(
          ({ id, title, year, genres, rating, country, cast, runningTime }) => {
            return {
              id,
              title,
              year,
              genres,
              rating,
              country,
              cast,
              runningTime,
            };
          }
        );
      });
  }

  /**metto in sincronia i due observable con  combineLatest su getList e ratingRange,
   combina gli ultimi valori emessi da ratingRange e dalla getList del service per evitare 
   sovraccarichi di chiamate al backend, l'ultimo valore è il getList(), il valore che viene combinato
   è quello proveniente dal filtro del film (ratingRange)
   */
  private getMovieCombined() {
    combineLatest([this._filmService.getList(), this.ratingRange$]).subscribe(
      ([films, rating]) => {
        const filteredFilms = films.filter(
          (film) =>
            film.rating != undefined && film.rating.averageRating >= rating
        );

        this.filmsList = filteredFilms.map(
          ({ id, title, year, genres, rating, country, cast, runningTime }) => {
            return {
              id,
              title,
              year,
              genres,
              rating,
              country,
              cast,
              runningTime,
            };
          }
        );
      }
    );
  }

  onIonChange(ev: Event) {
    this.ratingRange$.next(Number((ev as RangeCustomEvent).detail.value));
  }

  ionViewWillEnter() {
    this.getMovieCombined();
    this._getListByTitle();
  }

  /**
   *  funzione per far comparire il footer con trigger al click sul film dalla lista,
   *  la vecchia funzione onSelect per vedere il dettaglio viene lanciata dal button nel footer
   */
  loadMovie(id: string): void {
    this.selectedId$.next(id);
  }

  onSelect(id: string) {
    this._route.navigate(['details', id], { relativeTo: this.route });
  }

  onEdit(id: string) {
    this._route.navigate(['edit-film', id], { relativeTo: this.route });
  }

  onDelete(id: string) {
    this._filmService.deleteById(id).subscribe(() => {
      this._getFilmList();
    });
  }

  onAdd() {
    this._route.navigate(['add-film'], { relativeTo: this.route });
  }
}

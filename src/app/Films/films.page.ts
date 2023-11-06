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
  // selectedFilmRating: number | undefined;
  // selectedMovie$ = new BehaviorSubject<Film | undefined>(undefined);
  // formField$ = new BehaviorSubject<string>('');
  // selectedItemDetail: string = '';

  constructor(
    private readonly _filmService: FilmService,
    private readonly _route: Router,
    private route: ActivatedRoute
  ) {}

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
  
  // metto in sincronia i due observable con  combineLatest su getList e ratingRange,
  // combina gli ultimi valori emessi da ratingRange e dalla getList del service
  private getMovieByRating() {
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
    this.getMovieByRating();
    this._getListByTitle();
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

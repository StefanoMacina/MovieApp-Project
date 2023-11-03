import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { BehaviorSubject, debounceTime, filter, map } from 'rxjs';
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
  formField = new FormControl<string>('')

  
  constructor(
    private readonly _filmService: FilmService,
    private readonly _route: Router,
    private route: ActivatedRoute
    ) {
      this.formField.valueChanges
      .pipe(
        debounceTime(500),
        
      ).subscribe(formInput => {

        if(formInput){
          // console.log(formInput)
          this._filmService.getList().pipe(
            map((films : Film[]) => {
              const filtered : Film[] = films.filter(film => film.title.toLowerCase().includes(formInput.toLowerCase()))
              return filtered
            })
            )
          }

      })
  }

  // defining optional parameter with def value of 0 to avoid undefined, defining parameter as number
  private _getFilmList(selectedRatingFilter = 0) {
    this._filmService
      .getList()
      .pipe(
        // filtering films dinamically using a ionic selector
        map((films) =>
          films.filter(
            (film) =>
              film.rating != undefined &&
              film.rating.averageRating >= selectedRatingFilter
          )
        ),
        // transforming films avg rating from integer to decimal
       /*  map((films) => {
          films.forEach((film) => {
            film.rating.averageRating = film.rating.averageRating / 10;
          });
          return films;
        }) */
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

  onIonChange(ev: Event) {
    this.ratingRange$.next(Number((ev as RangeCustomEvent).detail.value));
    /* const value = (ev as RangeCustomEvent).detail.value;
    this._getFilmList(+value); */
  }

  ionViewWillEnter() {
    this._getFilmList();
    this.ratingRange$.subscribe((val) => {
      this._getFilmList(val);
    });

    // metto in sincronia i due observable con combineLatest
    // combineLatest({
    //   movieList : this._filmService.getList(),
    //   rating : this.ratingRange$
    // }).subscribe(({movieList, rating}) => {
    //   console.log(movieList, rating);

    // })
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

import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from './interfaces/film.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: 'films.page.html',
  styleUrls: ['films.page.scss'],
})
export class FilmsPage {
  filmsList: Film[] = [];

  constructor(
    private readonly _filmService: FilmService,
    private readonly _route: Router,
    private route: ActivatedRoute
  ) {}

  private _getList(){
    this._filmService.getList().subscribe((films: Film[]) => {
      this.filmsList = films.map((values: Film) => {
        return {
          id: values.id,
          title: values.title,
          year: values.year,
          genres: values.genres,
          rating: values.rating,
          country: values.country,
          cast: values.cast,
          runningTime: values.runningTime,
        };
      });
    });
  }

  ionViewWillEnter() {
   this._getList()
  }

  

  onSelect(id: string) {
    this._route.navigate(['details', id], { relativeTo: this.route });
  }

  onEdit(id: string) {
    this._route.navigate(['edit-film', id], { relativeTo: this.route });
  }

  onDelete(id: string) {
    this._filmService.deleteById(id).subscribe(() => {
      this._getList()
    });
  }

  onAdd() {
    this._route.navigate(['add-film'], { relativeTo: this.route });
  }
}

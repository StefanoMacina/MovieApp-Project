import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { films } from './interfaces/film.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: 'films.page.html',
  styleUrls: ['films.page.scss'],
})
export class FilmsPage {
  filmsList: films[] = [];

  constructor(
    private readonly _filmService: FilmService,
    private readonly _route: Router,
    private route: ActivatedRoute
  ) {
    // metto in ascolto la lista di films
    this._filmService.flmObs$.subscribe((films: films[]) => {

      // map su ogni elemento della lista ricevuta 
      this.filmsList = films.map((values: films) => {
        return {
          id: values.id,
          title: values.title,
          year: values.year,
          genres: values.genres,
        };
      });
    });

    this._filmService.getList();
  }

  onSelect(id: any) {
    this._route.navigate(['details', id], { relativeTo: this.route });
  }

  onEdit(id: any) {
    this._route.navigate(['edit-film', id], { relativeTo: this.route });
  }

  onDelete(id: number) {
    this._filmService.deleteById(id);
    
  }

  onAdd(){
    this._route.navigate(['add-film'], {relativeTo:this.route})
  }
}

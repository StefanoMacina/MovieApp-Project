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

    this._filmService.getList().subscribe((films : films[]) => {
      this.filmsList = films.map((values: films) => {
        return {
          id: values.id,
          title: values.title,
          year: values.year,
          genres: values.genres,
        };
      });
    });
  }

  onSelect(id: string) {
    this._route.navigate(['details', id], { relativeTo: this.route });
  }

  onEdit(id: string) {
    this._route.navigate(['edit-film', id], { relativeTo: this.route });
  }

  onDelete(id: string) {
    this._filmService.deleteById(id);
    
  }

  onAdd(){
    this._route.navigate(['add-film'], {relativeTo:this.route})
  }
}

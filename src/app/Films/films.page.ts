import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { films } from './interfaces/film.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: 'films.page.html',
  styleUrls: ['films.page.scss']
})
export class FilmsPage {

  filmList: films [] = []

  constructor(
              private readonly _filmList : FilmService,
              private readonly _route: Router,
              private route:ActivatedRoute
              ){
    this.filmList = this._filmList.getList();
    }

  onSelect(id : any){
    this._route.navigate(["details", id], {relativeTo:this.route})
  }

  onEdit(id : any){
    this._route.navigate(['edit-film', id], {relativeTo:this.route} )
  }

}

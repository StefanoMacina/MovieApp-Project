import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../../shared/interfaces/film.interfaces';

@Component({
  selector: 'film-list',
  templateUrl: './FilmList.html',
  styleUrls: ['./FilmList.scss'],
})
export class FilmList {
  
  

  @Input() list: Film[] = [];
  @Output() film = new EventEmitter<string>();
  @Output() select = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();


  selectFilm(id: string) {
    this.film.emit(id);
  }

  editFilm(id: string) {
    this.select.emit(id);
  }

  deleteFilm(id: string) {
    this.delete.emit(id);
  }
}

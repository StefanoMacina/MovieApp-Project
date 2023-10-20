import { Component, EventEmitter, Input, Output } from "@angular/core";
import { films } from "../../interfaces/film.interfaces";
import { FilmService } from "src/app/services/film.service";

@Component({
    selector : 'film-list',
    templateUrl : './FilmList.html',
    styleUrls : ['./FilmList.scss']
})
export class FilmList{

    @Input() list : films [] = [];
    @Output() film = new EventEmitter<number>();

    constructor(private readonly _filmList : FilmService){
        
    }
    
    selectFilm(id:number){
        this.film.emit(id)
    }

}
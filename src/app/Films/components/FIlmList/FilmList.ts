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
    @Output() film = new EventEmitter<string>();
    @Output() select = new EventEmitter<string>();
    @Output() delete = new EventEmitter<string>();
   

    constructor(private readonly _filmList : FilmService){
              
        
    }
    
    selectFilm(id:string){
        console.log(id);
        
        this.film.emit(id)
    }

    editFilm(id:string){
        this.select.emit(id)
    }

    deleteFilm(id : string){
        this.delete.emit(id)
    }
    
    
}
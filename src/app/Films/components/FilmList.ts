import { Component, Input } from "@angular/core";
import { films } from "../interfaces/film.interfaces";

@Component({
    selector : 'film-list',
    templateUrl : './FilmList.html',
    styleUrls : ['./FilmList.scss']
})
export class FilmList{

    @Input() list : films [] = []

}
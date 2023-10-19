import { Injectable } from "@angular/core";
import { films } from "../Films/interfaces/film.interfaces";

@Injectable({
    providedIn : 'root'
})
export class FilmService {
    films : films [] = [
        {
            id : 1,
            title: "the hangover II",
            year : 2011,
            genres : "commedia"
        },
        {
            id : 2,
            title: "Fairplay",
            year : 2023,
            genres : "Avventura"
        },
        {
            id : 3,
            title: "the hangover II",
            year : 2011,
            genres : "commedia"
        },
        {
            id : 4,
            title: "the hangover II",
            year : 2011,
            genres : "commedia"
        }
    ]

    getList():films[]{
        return this.films;
    }

    
}
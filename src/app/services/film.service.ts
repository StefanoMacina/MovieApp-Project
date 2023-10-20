import { Injectable } from "@angular/core";
import { films } from "../Films/interfaces/film.interfaces";

@Injectable({
    providedIn : 'root'
})
export class FilmService {
    films : films [] = [
        {
            id : 1,
            title: "The hangover II",
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
            title: "Reptile",
            year : 2023,
            genres : "Drammatico"
        },
        {
            id : 4,
            title: "Nowhere",
            year : 2023,
            genres : "Thriller"
        }
    ]

    getList():films[]{
        return this.films;
    }

    getById(id:number) : films | undefined{
        const film : films | undefined = this.films.find(( film:films ) => film.id === id)
        return film
    }

    // aggiornare i valori del form in ingresso
    update(formValues : films) : void {
        const filmIndex = this.films.findIndex((film : films) => film.id === formValues.id)
        if(filmIndex !== -1){
            this.films[filmIndex] = formValues
        }
    }

    
}
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FilmService } from "src/app/services/film.service";
import { films } from "../../interfaces/film.interfaces";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";

@Component({
    selector : 'edit-film',
    templateUrl : './EditFilm.html',
    styleUrls : ['./EditFilm.scss']
})
export class EditFilm {
    filmId: number | undefined;
    film: films | undefined; 
    form : FormGroup | undefined;

    constructor(
        private route: ActivatedRoute,
        private readonly _filmService: FilmService,
         private readonly _location:Location
    ) {
        this.route.params.subscribe(params => {
            this.filmId = +params['id'];
            this.film = this._filmService.getById(this.filmId);
            this._setForm();
        });

    }

    // impostare campi del form da creare in html
    private _setForm(){
        this.form = new FormGroup({
            id : new FormControl(this.film?.id),
            title: new FormControl(this.film?.title,),
            year: new FormControl(this.film?.year)
        })
        
    }

    // funzione chiamata al submit del form sul button type=submit
    submitForm(){
        console.log(this.form?.value);
        // controllo se il form è valido
        if(this.form?.valid) {
            //chiamo update per sostiuire un oggetto
             this._filmService.update(this.form?.value);
             this._location.back()

            }
        }
        
    }


    

import { Location } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FilmService } from "src/app/services/film.service";
import { films } from "../../interfaces/film.interfaces";

@Component({
    selector : 'add-film',
    templateUrl : './addFilm.html',
    styleUrls : ['./addFilm.scss']
})
export class addFilm{
    form : FormGroup | undefined;
    film: films | undefined; 

    constructor(
        private readonly _filmService: FilmService,
        private readonly _location:Location
    ){
        this._setForm()
    }
    

    private _setForm(){
        this.form = new FormGroup({
            id : new FormControl(this.film?.id),
            title: new FormControl(this.film?.title,),
            year: new FormControl(this.film?.year)
        })
        
    }


    submitForm(){
        console.log(this.form?.value);
        // controllo se il form è valido
        if(this.form?.valid) {
            //chiamo update per sostiuire un oggetto
             this._filmService.addFilm(this.form?.value);
             this._location.back()

            }
        }
}

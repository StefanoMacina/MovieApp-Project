import { Location } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FilmService } from "src/app/services/film.service";
import { Film } from "../../../shared/interfaces/film.interfaces";

@Component({
    selector : 'add-film',
    templateUrl : './addFilm.html',
    styleUrls : ['./addFilm.scss']
})
export class addFilm{
    form : FormGroup | undefined;
    film: Film | undefined; 

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
            year: new FormControl(this.film?.year),
            genres :  new FormControl(this.film?.genres),
            rating : new FormControl(this.film?.rating)
        })
        
    }


    submitForm(){
        console.log(this.form?.value);
        if(this.form?.valid) {
            
             this._filmService.addFilm(this.form?.value).subscribe(() => {

                 this._location.back()
             });

            }
        }
}

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
    filmId!: string;
    film: films | undefined; 
    form : FormGroup | undefined;
   

    constructor(
        
        private route: ActivatedRoute,
        private readonly _filmService: FilmService,
        private readonly _location:Location
        
    ) {
        this.route.params.subscribe(params => {
            this.filmId = params['id'];
            this._filmService.getById(this.filmId).subscribe((getFilm : films) => {
                this.film = getFilm;
                this._setForm();
            });
        });
    }

    

    // impostare campi del form da creare in html
    private _setForm(){
        this.form = new FormGroup({
            id : new FormControl(this.film?.id,),
            title: new FormControl(this.film?.title,),
            year: new FormControl(this.film?.year),
            genres :  new FormControl(this.film?.genres),
            rating : new FormControl(this.film?.rating)
        })
        this.form.valueChanges.subscribe(x => {
            console.log(x.title);
            
        })
        
    }

    submitForm(){
        
        if(this.form?.valid) {
            
             this._filmService.update(this.form?.value).subscribe((putFilm : films) => {
                
                this._location.back()
             });

            }
        }


    }


    

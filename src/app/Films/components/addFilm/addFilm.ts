import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../../shared/interfaces/film.interfaces';
import { UniqueTitleValidator } from 'src/app/shared/validators/validator';
import { Route } from '@angular/router';

@Component({
  selector: 'add-film',
  templateUrl: './addFilm.html',
  styleUrls: ['./addFilm.scss'],
})
export class addFilm {
  form: FormGroup;
  film: Film | undefined;

   ErrorMessages = {
    required : 'Esiste gia un film con questo titolo',
    alreadyExist : 'REQUIRED'
  }

  getErrorMessage(errors : ValidationErrors | null){
    
  }


  constructor(
    private readonly _filmService: FilmService,
    private readonly _location: Location,
    private readonly _validator: UniqueTitleValidator,
    private fb: FormBuilder,
  
  ) {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      year: [''],
      genres: [''],
      rating: [''],
    });
    //aggiungere funzione validatore al campo input di mio interesse
    this.form.controls['title'].addAsyncValidators(this._validator.validate);
  }

  submitForm() {
    console.log(this.form?.value);

      this._filmService.addFilm(this.form?.value).subscribe(() => {
        this._location.back();
      });
    
  }

}

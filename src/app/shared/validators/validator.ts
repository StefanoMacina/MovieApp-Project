import { Injectable } from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    ValidationErrors,
} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FilmService } from 'src/app/services/film.service';

@Injectable({ providedIn: 'root' })
export class UniqueTitleValidator implements AsyncValidator {
  constructor(private _service: FilmService) {}

  validate(
    control: AbstractControl<string>
  ): Observable<ValidationErrors | null> {
    const { value } = control;
    return this._service.getByTitle(value).pipe(
      map((response) => {
         return response.length > 0 ? { key: true } : null;
      })
      );
      
  }
}

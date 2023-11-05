import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Celebrity } from 'src/app/shared/interfaces/celebrity.interface';
import { CelebrityService } from 'src/app/services/celebrity.service';

@Component({
  selector: 'add-celebrity',
  templateUrl: './addCelebrity.html',
  styleUrls: ['./addCelebrity.scss'],
})
export class addCelebrity {
  form: FormGroup | undefined;
  celebrity: Celebrity | undefined;

  constructor(
    private readonly _celebrityService: CelebrityService,
    private readonly _location: Location
  ) {
    this._setForm();
  }

  private _setForm() {
    this.form = new FormGroup({
      id: new FormControl(this.celebrity?.id),
      name: new FormControl(this.celebrity?.name),
      birthDate: new FormControl(this.celebrity?.birthDate),
      deathyear: new FormControl(this.celebrity?.death_year),
    });
  }

  submitForm() {
    console.log(this.form?.value);
    if (this.form?.valid) {
      this._celebrityService.addCelebrity(this.form?.value);
      this._location.back();
    }
  }
}

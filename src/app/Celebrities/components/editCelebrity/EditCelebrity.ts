import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Celebrity } from 'src/app/shared/interfaces/celebrity.interface';
import { CelebrityService } from 'src/app/services/celebrity.service';

@Component({
  selector: 'edit-celebrity',
  templateUrl: './EditCelebrity.html',
  styleUrls: ['./EditCelebrity.scss'],
})
export class EditCelebrity {
  celebrityId!: string;
  celebrity: Celebrity | undefined;
  form: FormGroup | undefined;

  constructor(
    private _route: ActivatedRoute,
    private readonly _celebrityService: CelebrityService,
    private readonly _location: Location
  ) {
    this._route.params.subscribe((params) => {
      this.celebrityId = params['id'];
      this._celebrityService
        .getById(this.celebrityId)
        .subscribe((getCelebrity: Celebrity) => {
          this.celebrity = getCelebrity;
          this._setForm();
        });
    });
  }

  private _setForm() {
    this.form = new FormGroup({
      id: new FormControl(this.celebrity?.id),
      name: new FormControl(this.celebrity?.name),
      birthDate: new FormControl(this.celebrity?.birthDate),
      deathyear: new FormControl(this.celebrity?.death_year),
    });
    this.form.valueChanges.subscribe((x) => {
      console.log(x.name);
    });
  }

  submitForm() {
    if (this.form?.valid) {
      this._celebrityService.update(this.form?.value).subscribe(() => {
        this._location.back();
      });
    }
  }
}

import { Injectable } from '@angular/core';
import { celebrities } from '../Films/interfaces/celebrity.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CelebrityService {
  celebrities: celebrities[] = [
    {
      id: '1',
      primary_name: 'Taylor swift',
      birthDate: 2011,
    },
    {
      id: '2',
      primary_name: 'Adam Sandler',
      birthDate: 1974,
      death_year: 2023,
    },
    {
      id: '3',
      primary_name: 'Jeezy',
      birthDate: 2011,
    },
    {
      id: '4',
      primary_name: 'Gwen Stefani',
      birthDate: 2011,
    },
  ];

  private _celebrities$ = new Subject<celebrities[]>();

  celebObs$ = this._celebrities$.asObservable();

  getList(): void {
    this._celebrities$.next(this.celebrities);
  }

  getById(id: any): celebrities | undefined {
    const celebrity: celebrities | undefined = this.celebrities.find(
      (celebrity: celebrities) => celebrity.id === id
    );
    return celebrity;
  }

  // aggiornare i valori del form in ingresso
  update(formValues: celebrities): void {
    const celebrityIndex = this.celebrities.findIndex(
      (celebrity: celebrities) => celebrity.id === formValues.id
    );
    if (celebrityIndex !== -1) {
      this.celebrities[celebrityIndex] = formValues;
    }
    this._celebrities$.next(this.celebrities);
  }


  deleteById(id : string){
    const index = this.celebrities.findIndex((celeb) => celeb.id === id)
    if(index !== -1){
        this.celebrities.splice(index,1)
        this._celebrities$.next(this.celebrities)
    }
  }

  addCelebrity(celebrity : celebrities){
    celebrity.id = (this.celebrities.length + 1).toString()
    this.celebrities.push(celebrity)
    this._celebrities$.next(this.celebrities)
  }

}

import { Injectable } from '@angular/core';
import { Celebrities } from '../shared/interfaces/celebrity.interface';
import { Observable, Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CelebrityService {
  private _baseUrl = '';
  celebrities: Celebrities[] = [];

  constructor(
    private readonly _http: HttpClient
    ){
      this._baseUrl = environment.baseUrl;
  }

  private _celebrities$ = new Subject<Celebrities[]>();
  celebObs$ = this._celebrities$.asObservable();



  getList(): Observable<Celebrities[]> {

    return this._http.get<Celebrities[]>(`${this._baseUrl}/celebrities?order_by=id&page=0&size=25`)
      .pipe(
        map((dataObj : any) => {
          return dataObj.celebrities
        })
      )


    /* this._celebrities$.next(this.celebrities); */
  }

  getById(id: any): Celebrities | undefined {
    const celebrity: Celebrities | undefined = this.celebrities.find(
      (celebrity: Celebrities) => celebrity.id === id
    );
    return celebrity;
  }

  // aggiornare i valori del form in ingresso
  update(formValues: Celebrities): void {
    const celebrityIndex = this.celebrities.findIndex(
      (celebrity: Celebrities) => celebrity.id === formValues.id
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

  addCelebrity(celebrity : Celebrities){
    celebrity.id = (this.celebrities.length + 1).toString()
    this.celebrities.push(celebrity)
    this._celebrities$.next(this.celebrities)
  }

}

import { Injectable } from '@angular/core';
import { Celebrity } from '../shared/interfaces/celebrity.interface';
import { Observable, Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CelebrityService {
  private _baseUrl = '';
  celebrities: Celebrity[] = [];

  constructor(
    private readonly _http: HttpClient
    ){
      this._baseUrl = environment.baseUrl;
  }

  private _celebrities$ = new Subject<Celebrity[]>();
  celebObs$ = this._celebrities$.asObservable();



  getList(): Observable<Celebrity[]> {

    return this._http.get<Celebrity[]>(`${this._baseUrl}/celebrities?order_by=id&page=0&size=25`)
      .pipe(
        map((data : any) => {
          return data.celebrities
        })
      )
  }


  getById(id: string): Observable<Celebrity> {
    return this._http.get<Celebrity>(`${this._baseUrl}/celebrities/${id}`)
  }


  update(formValues: Celebrity): Observable<Celebrity> {
    return this._http.put<Celebrity>(`${this._baseUrl}/celebrities/${formValues.id}`, formValues)
  }


  deleteById(id : string) : Observable<Celebrity>{
    return this._http.delete<Celebrity>(`${this._baseUrl}/celebrities/${id}`)
  } 

  addCelebrity(celebrity : Celebrity){
    celebrity.id = (this.celebrities.length + 1).toString()
    this.celebrities.push(celebrity)
    this._celebrities$.next(this.celebrities)
  }

}

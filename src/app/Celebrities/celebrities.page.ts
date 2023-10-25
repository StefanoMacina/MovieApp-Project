import { Component } from '@angular/core';
import { Celebrities } from '../shared/interfaces/celebrity.interface';
import { CelebrityService } from '../services/celebrity.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-celebrities',
  templateUrl: 'celebrities.page.html',
  styleUrls: ['celebrities.page.scss']
})
export class CelebritiesPage {

  celebrityList : Celebrities [] = [];


  constructor(
              private readonly _celebrityService : CelebrityService,
              private readonly _route : Router,
              private route : ActivatedRoute
  ) {}
  
  private _getList(){
    this._celebrityService.getList().subscribe((celebrities : Celebrities[]) => {
      this.celebrityList = celebrities.map((values : Celebrities) => {
                
        return {
          id : values.id,
          name : values.name,
          birthDate : values.birthDate,
          deathYear : values.death_year,
          films : values.films
        }
      })
    });
  }

  ionViewWillEnter(){
    this._getList()
  }


  onSelect(id : any){
    this._route.navigate(["details", id], {relativeTo:this.route})
  }

  onEdit(id : any){
    this._route.navigate(['edit-celebrity', id], {relativeTo:this.route} )
  }

  onDelete(id: string){
    this._celebrityService.deleteById(id).subscribe(()=> {
      this._getList()
    })
  }
  
  addCelebrity(){
    this._route.navigate(['add-celebrity'], {relativeTo:this.route} )
  }

}

import { Component } from '@angular/core';
import { celebrities } from '../Films/interfaces/celebrity.interface';
import { CelebrityService } from '../services/celebrity.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-celebrities',
  templateUrl: 'celebrities.page.html',
  styleUrls: ['celebrities.page.scss']
})
export class CelebritiesPage {

  celebrityList : celebrities [] = [];


  constructor(
              private readonly _celebrityService : CelebrityService,
              private readonly _route : Router,
              private route : ActivatedRoute
  ) {
    this._celebrityService.celebObs$.subscribe((celebrities : celebrities[]) => {
      this.celebrityList = celebrities.map((values : celebrities) => {
        return {
          id : values.id,
          primary_name : values.primary_name,
          birthDate : values.birthDate,
          deathYear : values.death_year,
        }
      })
    });
    this._celebrityService.getList()
  }

  onSelect(id : any){
    this._route.navigate(["details", id], {relativeTo:this.route})
  }

  onEdit(id : any){
    this._route.navigate(['edit-celebrity', id], {relativeTo:this.route} )
  }

  onDelete(id: string){
    this._celebrityService.deleteById(id)
  }
  
  addCelebrity(){
    this._route.navigate(['add-celebrity'], {relativeTo:this.route} )
  }

}

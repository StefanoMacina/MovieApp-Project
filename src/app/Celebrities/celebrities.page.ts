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
              private readonly _celebrityList : CelebrityService,
              private readonly _route : Router,
              private route : ActivatedRoute
  ) {
    this.celebrityList = this._celebrityList.getList()
  }

  onSelect(id : any){
    this._route.navigate(["details", id], {relativeTo:this.route})
  }

  onEdit(id : any){
    this._route.navigate(['edit-celebrity', id], {relativeTo:this.route} )
  }


}

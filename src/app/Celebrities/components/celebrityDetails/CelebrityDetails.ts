import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Celebrity } from "src/app/shared/interfaces/celebrity.interface";
import { CelebrityService } from "src/app/services/celebrity.service";

@Component({
    selector : 'celebrity-details',
    templateUrl : './CelebrityDetails.html',
    styleUrls : ['./CelebrityDetails.scss']
})
export class CelebrityDetails {
    CelebrityId! : string 
    celebrity : Celebrity | undefined

    constructor(
        private _route : ActivatedRoute,
        private _celebrityService : CelebrityService
    ) {
        // prendo id dalla route appena inizializzo il componente
        this._route.params.subscribe((params) => {
            this.CelebrityId = params['id'];
            if(this.CelebrityId) {
                // assegno il valore in base all'id
               this._celebrityService.getById(this.CelebrityId).subscribe((getCelebrity : Celebrity) => {
                this.celebrity = getCelebrity
                console.log(getCelebrity);
                
                
               })
            }
        })
    }
}
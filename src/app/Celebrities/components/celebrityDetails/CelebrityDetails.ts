import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { celebrities } from "src/app/Films/interfaces/celebrity.interface";
import { CelebrityService } from "src/app/services/celebrity.service";

@Component({
    selector : 'celebrity-details',
    templateUrl : './CelebrityDetails.html',
    styleUrls : ['./CelebrityDetails.scss']
})
export class CelebrityDetails {
    CelebrityId : string | undefined
    celebrity : celebrities | undefined

    constructor(
        private _route : ActivatedRoute,
        private _celebrityService : CelebrityService
    ) {
        this._route.params.subscribe((params) => {
            this.CelebrityId = params['id'];
            if(this.CelebrityId) {
                this.celebrity = this._celebrityService.getById(this.CelebrityId)
            }
        })
    }
}
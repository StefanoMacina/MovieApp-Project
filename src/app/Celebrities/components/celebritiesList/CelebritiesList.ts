import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Celebrity } from "src/app/shared/interfaces/celebrity.interface";


@Component({
    selector : 'celebrities-list',
    templateUrl : './CelebrityList.html',
    styleUrls : ['./CelebrityList.scss']
})
export class CelebritiesList{

    @Input() list : Celebrity [] = [];
    @Output() celebrity = new EventEmitter<string>();
    @Output() select = new EventEmitter<string>()
    @Output() delete = new EventEmitter<string>();


    selectCelebrity(id : string){
        this.celebrity.emit(id)
    }

    editCelebrity(id:string){
        this.select.emit(id)
    }

    deleteCelebrity(id : string){
        this.delete.emit(id)
    }
}
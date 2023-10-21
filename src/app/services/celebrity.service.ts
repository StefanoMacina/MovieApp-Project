import { Injectable } from "@angular/core";
import { celebrities } from "../Films/interfaces/celebrity.interface";

@Injectable({
    providedIn : 'root'
})
export class CelebrityService {
    celebrities : celebrities [] = [
        {
            id : "1",
            primary_name: "Taylor swift",
            birthDate : 2011,
        },
        {
            id : "2",
            primary_name: "Adam Sandler",
            birthDate : 1974,
            death_year : 2023
        },
        {
            id : "3",
            primary_name: "Jeezy",
            birthDate : 2011,
        },
        {
            id : "4",
            primary_name: "Gwen Stefani",
            birthDate : 2011,
        },
    ]

    getList():celebrities[]{
        return this.celebrities;
    }

    getById(id:any) : celebrities | undefined{
        const celebrity : celebrities | undefined = this.celebrities.find(( celebrity:celebrities ) => celebrity.id === id)
        return celebrity
    }

    // aggiornare i valori del form in ingresso
    update(formValues : celebrities) : void {
        const celebrityIndex = this.celebrities.findIndex((celebrity : celebrities) => celebrity.id === formValues.id)
        if(celebrityIndex !== -1){
            this.celebrities[celebrityIndex] = formValues
        }
    }

    
}
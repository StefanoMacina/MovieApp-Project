import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'toInt'
})
export class ToIntegerPipe implements PipeTransform{
    transform( val : number){
        return( val/2).toFixed(2)
    }
}
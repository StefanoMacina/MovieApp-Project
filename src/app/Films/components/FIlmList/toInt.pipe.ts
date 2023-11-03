import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'toInt'
})
export class ToIntegerPipe implements PipeTransform{
    transform( val : number){
        return val.toFixed(2)
    }
}
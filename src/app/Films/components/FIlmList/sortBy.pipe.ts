import { Pipe, PipeTransform } from '@angular/core';
import { Film } from 'src/app/shared/interfaces/film.interfaces';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: Film[], order: 'asc' | 'desc' = 'asc') {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return a.rating.averageRating - b.rating.averageRating;
      } else if (order === 'desc') {
        return b.rating.averageRating - a.rating.averageRating;
      }
      return 0;
    });
  }
}

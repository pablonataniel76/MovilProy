import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postulantes'
})
export class PostulantesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

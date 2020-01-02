import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publicar'
})
export class PublicarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

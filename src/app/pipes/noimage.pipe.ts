import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): string {
    if(!value) {
      return 'assets/img/noimage.png';
    } else if ( value.length > 0 ) {
      return value[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    if (value.length === 0) {
      return '../../assets/images/noimage.png';
    }
    return value[0].url;
  }

}

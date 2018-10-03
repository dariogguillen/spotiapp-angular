import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSecure'
})
export class DomSecurePipe implements PipeTransform {

  constructor (private domSanitizer: DomSanitizer) { }

  transform(value: any, args?: any): any {
    const url = 'https://open.spotify.com/embed/track/';
    console.log(value.split(':')[2]);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value.split(':')[2]);
  }

}

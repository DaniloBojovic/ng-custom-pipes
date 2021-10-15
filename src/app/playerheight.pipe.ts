import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerheight',
})
export class PlayerHeightPipe implements PipeTransform {
  transform(height: string, extension: string = 'cm') {
    return this.calculateCentimetersFromFeetAndInches(height) + ` ${extension}`;
  }

  calculateCentimetersFromFeetAndInches(height: string) {
    console.log(height);
    debugger;
    const cm =
      parseInt(height.split('-')[0]) * 30.48 +
      parseInt(height.split('-')[1]) * 2.54;
    return cm.toFixed(0);
  }
}

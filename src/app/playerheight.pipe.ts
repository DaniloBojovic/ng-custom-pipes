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
    let cm;
    debugger;
    const containInchesForHeight = /[-]/.test(height);
    if (containInchesForHeight) {
      cm =
        parseInt(height.split('-')[0]) * 30.48 +
        parseInt(height.split('-')[1]) * 2.54;
    } else {
      cm = parseInt(height) * 30.48;
    }

    return cm.toFixed(0);
  }
}

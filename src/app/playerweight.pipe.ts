import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerweight',
})
export class PlayerWeightPipe implements PipeTransform {
  transform(weight: number, extension: string = 'kg') {
    return (weight / 2.2046).toFixed(2) + ` ${extension}`;
  }
}

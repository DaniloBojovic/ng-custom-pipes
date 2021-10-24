import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { player: 'Frank Mason', age: '20', height: '6', weight: '215' },
      { player: 'Aaron Wiggins', age: '22', height: '6-5', weight: '190' },
      { player: 'Bones Hyland', age: '21', height: '6-2', weight: '169' },
      { player: 'Charles Bassey', age: '20', height: '6-10', weight: '230' },
      { player: 'Dalano Banton', age: '21', height: '6-9', weight: '204' },
      { player: 'Evan Mobley', age: '20', height: '7-0', weight: '215' },
      {
        player: 'Jericho Sims',
        age: '22',
        height: '6-9',
        weight: '250',
      },
    ];
    return { players };
  }
}

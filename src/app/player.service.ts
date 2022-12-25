import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Player } from './player';

const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playersUrl = `${BASE_PATH}/players`; // URL to web api
  players$ = this.http
    .get<Player[]>(this.playersUrl)
    .pipe(catchError((error) => of([])));

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  // getPlayers(): Observable<Player[]> {
  //   return this.http.get<Player[]>(this.playersUrl).pipe(
  //     tap((_) => console.log('fetched players')),
  //     catchError(this.handleError<Player[]>('getPlayers', []))
  //   );
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     console.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {




  private gameId = 254424;
  constructor(private http: HttpClient) { }

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(environment.ApiGames + `deals?storeID=1&upperPrice=500`).pipe(
      map((data) => data),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }

  getGameDestak(): Observable<any[]> {
    return this.http.get<any[]>(environment.ApiGames + `games?id=${this.gameId}`).pipe(
      map((data) => data),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
}



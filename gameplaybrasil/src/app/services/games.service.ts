import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { environment } from './../../environments/environment';
import { GamesModel } from '../model/games.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {



  public page: number = 1;
  private gameId = 254424;

  @Output() getPost = new EventEmitter<any>();
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

  getFreeGames(): Observable<GamesModel> {
    return this.http.get<GamesModel>(environment.ApiGamesFree + `?key=${environment.ApiKey}&page=${this.page}&page_size=5`).pipe(
      map((data) => data),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
}



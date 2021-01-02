import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { MessagesService } from './../messages/messages.service'

import { Hero } from './../../components/hero/hero'
import { HEROES } from './../../components/heroes/heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private messageService: MessagesService,
    private http: HttpClient
  ) {}
  private heroesUrl = 'api/heroes'

  /** Log a HeroService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error) // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`)

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes')

    setTimeout(() => {
      this.log('Thêm cái nữa nè')
    }, 2000)
    // return of(HEROES)
    // https://jsonplaceholder.typicode.com/users
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes: Hero[]) => {
        console.log('-----tap')
      }),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([])
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x =>
        x.length
          ? this.log(`found heroes matching "${term}"`)
          : this.log(`no heroes matching "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    )
  }
}

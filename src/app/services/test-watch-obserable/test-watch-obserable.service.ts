import { Injectable } from '@angular/core'
import { Observable, of, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TestWatchObserableService {
  constructor() {}
  private sizeSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'small'
  )
  size$: Observable<string> = this.sizeSubject.asObservable()

  setSize(sizeType: string): void {
    this.sizeSubject.next(sizeType)
  }
}

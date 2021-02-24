import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RouteService<T> {
  private subject: BehaviorSubject<T>;

  constructor() {
    this.subject = new BehaviorSubject<T>({} as T);
  }

  publish(t: T): void {
    this.subject.next(t);
  }

  subject$(): Observable<T> {
    return this.subject.asObservable();
  }
}

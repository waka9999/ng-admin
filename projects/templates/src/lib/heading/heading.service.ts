import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Heading } from './model';

@Injectable({
  providedIn: 'root',
})
export class HeadingService {
  private subject: BehaviorSubject<Heading>;

  constructor() {
    this.subject = new BehaviorSubject<Heading>({ text: '首页' });
  }

  next(heading: Heading): void {
    this.subject.next(heading);
  }

  subject$(): Observable<Heading> {
    return this.subject.asObservable();
  }
}

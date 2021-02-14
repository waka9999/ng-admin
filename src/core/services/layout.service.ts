import { Injectable } from '@angular/core';
import { Mobile } from '@core/models/layout';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private subject: BehaviorSubject<Mobile>;

  constructor() {
    this.subject = new BehaviorSubject<Mobile>({
      isHandset: false,
      isTablet: false,
    });
  }

  next(mobile: Mobile): void {
    this.subject.next(mobile);
  }

  subject$(): Observable<Mobile> {
    return this.subject.asObservable();
  }
}

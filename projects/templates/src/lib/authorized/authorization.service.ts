import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor() {}

  hasPermission$(tag: string | undefined): Observable<boolean> {
    return of(false);
  }
}

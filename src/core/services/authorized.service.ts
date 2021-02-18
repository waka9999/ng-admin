import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedService {
  constructor(private auth: AuthService) {}

  hasPermission$(tag: string | undefined): Observable<boolean> {
    return this.auth.current$().pipe(
      exhaustMap((user) => {
        const role = user.role;
        if (!role) {
          return of(false);
        }

        const permissions = user.role?.permissions;
        if (!permissions || permissions.length === 0) {
          return of(false);
        }

        if (
          permissions.find((p) => {
            return p === tag;
          })
        ) {
          return of(true);
        }
        return of(false);
      })
    );
  }
}

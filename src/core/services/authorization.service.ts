import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private auth: AuthenticationService) {}

  hasPermission$(permission: string | undefined): Observable<boolean> {
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
          permissions.find((p: string) => {
            return p === permission;
          })
        ) {
          return of(true);
        }
        return of(false);
      })
    );
  }
}

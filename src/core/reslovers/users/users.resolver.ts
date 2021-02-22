import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { User } from '@core/models/users';
import { UsersService } from '@core/services/users.service';
import { Observable, of } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable()
export class UsersResolver implements Resolve<User[]> {
  constructor(private service: UsersService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    return this.service.getUsers$().pipe(
      take(1),
      mergeMap((users) => {
        if (users) {
          return of(users);
        } else {
          const url = this.router.parseUrl(state.url).toString()
            ? this.router.parseUrl(state.url).toString()
            : '/about';
          this.router.navigate([url]);
          return of([]);
        }
      })
    );
  }
}

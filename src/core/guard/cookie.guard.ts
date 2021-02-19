import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthenticationService } from '@core/services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookieGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url = this.auth.redirect ? this.auth.redirect : '/dashboard';

    if (this.auth.hasLogin()) {
      if (route.data.skipAuth) {
        return true;
      }

      this.router.navigate([url]);
      return false;
    }

    if (this.auth.decryptCookie()) {
      if (route.data.skipAuth) {
        return true;
      }

      this.router.navigate([url]);
      return false;
    }

    return true;
  }
}

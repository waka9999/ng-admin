import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '@core/models/message';
import { BLANK_USER, User, USERS_DATA } from '@core/models/users';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';
import { Role } from '@core/models/roles';
import { NotifyService } from 'projects/templates/src/lib/notify';
import { CONNECTION_ERROR, CONNECTION_INFO } from '@core/models/notification';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user$: BehaviorSubject<User> = new BehaviorSubject(BLANK_USER);

  private readonly key = '12345678234567891234567823456789';
  private user!: User | undefined;
  private url!: string | undefined;

  constructor(
    private cookie: CookieService,
    private router: Router,
    private notify: NotifyService
  ) {}

  login$(cred: any): Observable<HttpResponse<Message>> {
    this.user = USERS_DATA.find(
      (user) =>
        user.username === cred.username && user.password === cred.password
    );

    if (!!this.user) {
      this.encryptCookie();
      return of(
        new HttpResponse<Message>({
          body: { code: 0, data: JSON.stringify(this.user) },
          status: 200,
        })
      ).pipe(
        take(1),
        tap(() => {
          this.user$.next(this.user!);
          this.router.navigateByUrl(this.generateUrl());
          this.notify.show(CONNECTION_INFO);
        })
      );
    }

    return of(
      new HttpResponse<Message>({
        body: { code: 1, error: '认证失败，用户名或密码不正确' },
        status: 200,
      })
    ).pipe(
      tap(() => {
        this.notify.show(CONNECTION_ERROR);
      })
    );
  }

  current$(): BehaviorSubject<User> {
    return this.user$;
  }

  current(): User {
    return this.user!;
  }

  userRole(): Role {
    return this.user!.role!;
  }

  userPermissions(): string[] {
    return this.user!.role!.permissions;
  }

  logout(): void {
    this.clear();
    location.replace('/auth');
    console.log(this.user?.name + '已注销。');
  }

  hasLogin(): boolean {
    return !!this.user;
  }

  clear(): void {
    this.cookie.set('authentication', '');
    this.cookie.deleteAll('/');
    this.user = undefined;
    this.url = undefined;
    this.user$.complete();
  }

  private generateUrl(): string {
    return this.url ? this.router.parseUrl(this.url).toString() : '/dashboard';
  }

  set redirect(url: string | undefined) {
    this.url = url;
  }

  get redirect() {
    return this.url;
  }

  private encryptCookie(): void {
    const cipher = CryptoJS.AES.encrypt(
      JSON.stringify(this.user),
      this.key
    ).toString();

    this.cookie.set('authentication', cipher);
  }

  decryptCookie(): boolean {
    const cipher = this.cookie.get('authentication');
    if (!cipher) {
      return false;
    }

    const clear = CryptoJS.AES.decrypt(cipher, this.key).toString(
      CryptoJS.enc.Utf8
    );

    if (!clear) {
      this.clear();
      return false;
    }

    const user = JSON.parse(clear);
    if (!user) {
      this.clear();
      return false;
    }

    this.user = user;

    this.user$.next(this.user!);

    return true;
  }
}

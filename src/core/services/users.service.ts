import { Injectable } from '@angular/core';
import { User, USERS_DATA } from '@core/models/users';
import { Observable, of } from 'rxjs';

@Injectable()
export class UsersService {
  constructor() {}

  getUsers$(): Observable<User[]> {
    return of(USERS_DATA);
  }
}

import { Injectable } from '@angular/core';
import { User, USERS_DATA } from '@core/models/users';
import { Observable, of } from 'rxjs';

@Injectable()
export class UsersService {
  private users: User[] = [];
  constructor() {}

  getUsers$(): Observable<User[]> {
    this.users = USERS_DATA;
    return of(USERS_DATA);
  }

  getUserByID(id: string): User | undefined {
    return USERS_DATA.find((user) => user.id === id);
  }
}

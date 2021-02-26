import { Injectable } from '@angular/core';
import { Role, ROLES_DATA } from '@core/models/roles';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private roles: Role[] = [];
  constructor() {}

  getRoles$(): Observable<Role[]> {
    this.roles = ROLES_DATA;
    return of(ROLES_DATA);
  }

  getUserByID(id: string): Role | undefined {
    return ROLES_DATA.find((role) => role.id === id);
  }
}

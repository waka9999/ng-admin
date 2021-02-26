import { Injectable } from '@angular/core';
import { Group, GROUPS_DATA } from '@core/models/groups';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private groups: Group[] = [];
  constructor() {}

  getGroups$(): Observable<Group[]> {
    this.groups = GROUPS_DATA;
    return of(GROUPS_DATA);
  }
}

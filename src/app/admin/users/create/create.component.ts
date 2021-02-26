import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { Group } from '@core/models/groups';
import { USERS_CREATE_HEADING } from '@core/models/heading';
import { Message } from '@core/models/message';
import { USER_CREATE_SUCCESS } from '@core/models/notification';
import { Role } from '@core/models/roles';
import { User } from '@core/models/users';
import { GroupsService } from '@core/services/groups.service';
import { RolesService } from '@core/services/roles.service';
import { InjectBase } from '@core/shared/inject.base';
import {
  customAnimation,
  Notification,
} from 'projects/templates/src/public-api';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-admin-users-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class CreateComponent extends InjectBase implements OnInit {
  user!: User;
  roles!: Role[];
  groups!: Group[];
  constructor(
    injector: Injector,
    private rolesService: RolesService,
    private groupsService: GroupsService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(USERS_CREATE_HEADING);
    this.initRoles();
    this.initGroups();
  }

  private initRoles(): void {
    this.rolesService
      .getRoles$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((roles) => (this.roles = roles));
  }

  private initGroups(): void {
    this.groupsService
      .getGroups$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((groups) => (this.groups = groups));
  }

  submit(message:Message): void {
    this.router.navigate(['/admin/users'], {
      state: { notification: USER_CREATE_SUCCESS },
    });
  }
}

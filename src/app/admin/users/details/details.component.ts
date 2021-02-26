import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { Group } from '@core/models/groups';
import { USERS_DETAIL_HEADING } from '@core/models/heading';
import { Message } from '@core/models/message';
import { USER_UPDATE_FAILED } from '@core/models/notification';
import { PERMISSIONS } from '@core/models/permission';
import { Role } from '@core/models/roles';
import { User } from '@core/models/users';
import { GroupsService } from '@core/services/groups.service';
import { RolesService } from '@core/services/roles.service';
import { UsersService } from '@core/services/users.service';
import { InjectBase } from '@core/shared/inject.base';
import { customAnimation } from 'projects/templates/src/public-api';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-admin-users-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
  host: {
    class: 'app-admin-users-details',
  },
})
export class DetailsComponent extends InjectBase implements OnInit {
  permission = PERMISSIONS.Admin.users.details;
  active: 'profile' | 'credentials' | 'services' | 'logs' = 'profile';
  user!: User;
  roles!: Role[];
  groups!: Group[];
  constructor(
    injector: Injector,
    private usersService: UsersService,
    private rolesService: RolesService,
    private groupsService: GroupsService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(USERS_DETAIL_HEADING);
    this.initTabsRoute();
    this.routerProcess();
    this.initRoles();
    this.initGroups();
  }

  private routerProcess(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data) {
        const user = this.usersService.getUserByID(data.id);
        if (user) {
          this.user = user;
          this.changeDetectorRef.markForCheck();
          return;
        }
      }

      this.router.navigateByUrl('/not-found');
    });
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

  private initTabsRoute(): void {
    if (this.router.url.endsWith('profile')) {
      this.active = 'profile';
      return;
    }

    if (this.router.url.endsWith('credentials')) {
      this.active = 'credentials';
      return;
    }

    if (this.router.url.endsWith('services')) {
      this.active = 'services';
      return;
    }

    if (this.router.url.endsWith('logs')) {
      this.active = 'logs';
      return;
    }
  }

  profile(): void {
    this.active = 'profile';
    this.router.navigate(['/admin/users/' + this.user.id + '/profile'], {
      state: { user: this.user },
    });
  }

  credentials(): void {
    this.active = 'credentials';
    this.router.navigate(['/admin/users/' + this.user.id + '/credentials'], {
      state: { user: this.user },
    });
  }

  services(): void {
    this.active = 'services';
    this.router.navigate(['/admin/users/' + this.user.id + '/services'], {
      state: { user: this.user },
    });
  }

  logs(): void {
    this.active = 'logs';
    this.router.navigate(['/admin/users/' + this.user.id + '/logs'], {
      state: { user: this.user },
    });
  }

  submit(message:Message): void {
    this.router.navigate(['/admin/users'], {
      state: { notification: USER_UPDATE_FAILED },
    });
  }
}

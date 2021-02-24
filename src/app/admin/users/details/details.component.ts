import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { USERS_DETAIL_HEADING } from '@core/models/heading';
import { PERMISSIONS } from '@core/models/permission';
import { User } from '@core/models/users';
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

  constructor(injector: Injector, private users: UsersService) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(USERS_DETAIL_HEADING);
    this.initTabsRoute();
    this.routerProcess();
  }

  private routerProcess(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data) {
        const user = this.users.getUserByID(data.id);
        if (user) {
          this.user = user;
          this.changeDetectorRef.markForCheck();
          return;
        }
      }

      this.router.navigateByUrl('/not-found');
    });
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
}

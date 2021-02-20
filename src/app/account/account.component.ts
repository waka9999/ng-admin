import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ACCOUNT_HEADING } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';
import { customAnimation } from 'projects/templates/src/public-api';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
  host: { class: 'app-account simple-page' },
})
export class AccountComponent extends InjectBase implements OnInit {
  active: 'profile' | 'password' = 'profile';

  constructor(injector: Injector, private router: Router) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(ACCOUNT_HEADING);
    this.initTabsRoute();
  }

  private initTabsRoute(): void {
    if (this.router.url.endsWith('profile')) {
      this.active = 'profile';
      return;
    }

    if (this.router.url.endsWith('password')) {
      this.active = 'password';
      return;
    }
  }

  profile(): void {
    this.active = 'profile';
    this.router.navigate(['/account/profile']);
  }

  password(): void {
    this.active = 'password';
    this.router.navigate(['/account/password']);
  }
}

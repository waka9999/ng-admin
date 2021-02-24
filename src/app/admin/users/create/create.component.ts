import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { USERS_CREATE_HEADING } from '@core/models/heading';
import { USER_CREATE_SUCCESS } from '@core/models/notification';
import { InjectBase } from '@core/shared/inject.base';
import { customAnimation } from 'projects/templates/src/public-api';

@Component({
  selector: 'app-admin-users-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class CreateComponent extends InjectBase implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(USERS_CREATE_HEADING);
  }
  click(): void {
    this.router.navigate(['/admin/users'], {
      state: { notification: USER_CREATE_SUCCESS },
    });
  }
}

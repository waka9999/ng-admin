import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { customAnimation } from '@core/animation/custom';
import { usersHeading } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class UsersComponent extends InjectBase implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(usersHeading);
  }
}

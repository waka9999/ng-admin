import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { customAnimation } from '@core/animation/custom';
import { rolesHeading } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';

@Component({
  selector: 'app-admin-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class RolesComponent extends InjectBase implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(rolesHeading);
  }
}

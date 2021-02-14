import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { customAnimation } from '@core/animation/custom';
import { groupsHeading } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class GroupsComponent extends InjectBase implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(groupsHeading);
  }
}

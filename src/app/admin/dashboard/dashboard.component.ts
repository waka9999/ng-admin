import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { customAnimation } from '@core/animation/custom';
import { dashboardHeading } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class DashboardComponent extends InjectBase implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(dashboardHeading);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { accountHeading } from '@core/models/heading';
import { Mobile } from '@core/models/layout';
import { InjectBase } from '@core/shared/inject.base';
import { customAnimation } from 'projects/templates/src/public-api';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
  host: { class: 'simple-page' },
})
export class AccountComponent extends InjectBase implements OnInit {
  mobile!: Mobile;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.layoutService
      .subject$()
      .pipe(distinctUntilChanged())
      .subscribe((mobile) => (this.mobile = mobile));
    this.initHeading(accountHeading);
  }
}

import { ChangeDetectionStrategy, Injector } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { aboutHeading } from '@core/models/heading';
import { Mobile } from '@core/models/layout';
import { InjectBase } from '@core/shared/inject.base';
import { customAnimation } from 'projects/templates/src/public-api';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class AboutComponent extends InjectBase implements OnInit {
  mobile!: Mobile;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.layoutService
      .subject$()
      .pipe(distinctUntilChanged())
      .subscribe((mobile) => (this.mobile = mobile));
    this.initHeading(aboutHeading);
  }
}

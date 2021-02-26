import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import { LOGS_HEADING } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';
import { customAnimation } from 'projects/templates/src/public-api';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
  host: { class: 'app-logs simple-page' },
})
export class LogsComponent extends InjectBase implements OnInit {
  title!: string;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(LOGS_HEADING);
  }
}

import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import { SERVICES_HEADING } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';
import { customAnimation } from 'projects/templates/src/public-api';

@Component({
  selector: 'app-platform-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
  host: {
    class: 'app-platform-services',
  },
})
export class ServicesComponent  extends InjectBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(SERVICES_HEADING);
  }
}

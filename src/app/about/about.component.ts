import { ChangeDetectionStrategy, Injector } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ABOUT_HEADING } from '@core/models/heading';
import { Mobile } from '@core/models/layout';
import { InjectBase } from '@core/shared/inject.base';
import { customAnimation } from 'projects/templates/src/public-api';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
  host: { class: 'app-about simple-page' },
})
export class AboutComponent extends InjectBase implements OnInit {
  title!: string;
  version!: string;
  date!: string;
  mobile!: Mobile;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(ABOUT_HEADING);
    this.initConfig();
  }
  private initConfig(): void {
    this.configService
      .subject$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((c) => {
        this.title = c.name;
        this.version = c.version;
        this.date = c.releaseDate;
      });
  }
}

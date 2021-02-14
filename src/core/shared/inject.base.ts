import {
  OnDestroy,
  Directive,
  Injector,
  ChangeDetectorRef,
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DestroyObservable } from './destroy.observable';
import {
  BreakpointObserver,
  Breakpoints,
  MediaMatcher,
} from '@angular/cdk/layout';
import { Heading, HeadingService } from 'projects/templates/src/public-api';
import { LayoutService } from '@core/services/layout.service';
import { ConfigService } from '@core/services/config.service';

@Directive()
export abstract class InjectBase
  extends DestroyObservable
  implements OnDestroy {
  private breakpointObserver!: BreakpointObserver;
  private mediaMatcher!: MediaMatcher;
  private removeEventListeners: { (): void }[];
  private headingService!: HeadingService;
  protected configService!: ConfigService;
  protected changeDetectorRef!: ChangeDetectorRef;
  protected layoutService!: LayoutService;
  constructor(injector: Injector) {
    super();
    this.breakpointObserver = injector.get(BreakpointObserver);
    this.mediaMatcher = injector.get(MediaMatcher);
    this.configService = injector.get(ConfigService);
    this.changeDetectorRef = injector.get(ChangeDetectorRef);
    this.removeEventListeners = [];
    this.layoutService = injector.get(LayoutService);
    this.headingService = injector.get(HeadingService);
  }

  ngOnDestroy(): void {
    this.removeEventListeners.forEach((remove, i, listeners) => {
      remove();
    });
    super.ngOnDestroy();
  }

  protected initLayout(breakpoint?: string, func?: () => void): void {
    if (func && breakpoint) {
      this.breakpointObserver
        .observe([breakpoint])
        .pipe(takeUntil(this.destroy$))
        .subscribe((c) => {
          if (this.breakpointObserver.isMatched(breakpoint)) {
            func();
          }
        });
      return;
    }
    if (func) {
      this.breakpointObserver
        .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
        .pipe(takeUntil(this.destroy$))
        .subscribe((c) => {
          func();
        });
      return;
    }
  }

  public mediaQuery(match: string, func: () => void): void {
    const mediaQueryList = this.mediaMatcher.matchMedia(match);
    const listener = () => {
      if (mediaQueryList.matches) {
        func();
        this.changeDetectorRef.detectChanges();
      }
    };
    mediaQueryList.addEventListener('change', listener);
    this.removeEventListeners.push(() => {
      console.log('removel change listener');
      mediaQueryList.removeEventListener('change', listener);
    });
  }

  protected initHeading(heading: Heading): void {
    this.headingService.next(heading);
  }
}

import { Breakpoints, LayoutModule } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injector,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  NavigationCancel,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { Container, Mobile } from '@core/models/layout';
import { brand, header } from '@core/models/header';
import { ConfigService } from '@core/services/config.service';
import { InjectBase } from '@core/shared/inject.base';
import { ProgressBarComponent } from 'projects/templates/src/public-api';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends InjectBase implements OnInit {
  brand = brand;
  header = header;
  mobile: Mobile = { isHandset: false, isTablet: false };

  @ViewChild('progressbar', { static: true })
  progressbar!: ProgressBarComponent;

  constructor(
    injector: Injector,
    private config: ConfigService,
    private title: Title,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {
    super(injector);
  }
  ngOnInit(): void {
    this.layoutService
      .subject$()
      .pipe(distinctUntilChanged())
      .subscribe((layout) => console.log(layout));
    this.initConfig();
    this.initProgressbar();

    this.initLayout(Breakpoints.Web, this.updateLayoutForWebChange.bind(this));
    this.initLayout(
      Breakpoints.Handset,
      this.updateLayoutForHandSetChange.bind(this)
    );
    this.initLayout(
      Breakpoints.Tablet,
      this.updateLayoutForTabletChange.bind(this)
    );
    this.mediaQuery(
      '(max-width: 960px)',
      this.updateLayoutForMediaChange.bind(this)
    );
  }
  private initConfig(): void {
    this.config
      .subject$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((c) => {
        this.title.setTitle(c!.name);
        this.brand.name = c!.name;
        this.renderer.addClass(this.elementRef.nativeElement, c.theme);
      });
  }

  private initProgressbar() {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.progressbar.show();
      }
      if (
        event instanceof RouteConfigLoadEnd ||
        event instanceof NavigationError ||
        event instanceof NavigationCancel
      ) {
        this.progressbar.hide();
      }
    });
  }

  private updateLayoutForMediaChange(): void {
    this.layoutPublish({ isHandset: false, isTablet: false });
    this.changeDetectorRef.markForCheck();
  }

  private updateLayoutForWebChange(): void {
    this.renderer.addClass(this.elementRef.nativeElement, Container.Web);
    this.renderer.removeClass(this.elementRef.nativeElement, Container.Tablet);
    this.renderer.removeClass(this.elementRef.nativeElement, Container.Handset);

    this.layoutPublish({ isHandset: false, isTablet: false });
    this.changeDetectorRef.markForCheck();
  }

  private updateLayoutForTabletChange(): void {
    this.renderer.addClass(this.elementRef.nativeElement, Container.Tablet);
    this.renderer.removeClass(this.elementRef.nativeElement, Container.Web);
    this.renderer.removeClass(this.elementRef.nativeElement, Container.Handset);
    this.layoutPublish({ isHandset: false, isTablet: true });
    this.changeDetectorRef.markForCheck();
  }

  private updateLayoutForHandSetChange(): void {
    this.renderer.addClass(this.elementRef.nativeElement, Container.Handset);
    this.renderer.removeClass(this.elementRef.nativeElement, Container.Tablet);
    this.renderer.removeClass(this.elementRef.nativeElement, Container.Web);

    this.layoutPublish({ isHandset: true, isTablet: false });
    this.changeDetectorRef.markForCheck();
  }

  private layoutPublish(mobile: Mobile) {
    this.mobile = mobile;
    this.layoutService.next(mobile);
  }
}

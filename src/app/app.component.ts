import { Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
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
import { InjectBase } from '@core/shared/inject.base';
import {
  DialogComponent,
  ProgressBarComponent,
} from 'projects/templates/src/public-api';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

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
    private title: Title,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private dialog: MatDialog
  ) {
    super(injector);
  }
  ngOnInit(): void {
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
    this.configService
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

  account(): void {
    this.router.navigate(['/account'])
  }

  logout(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '320px',
      data: {
        subject: '注销 ' + 'waka9999',
        message: '是否注销当前用户？',
      },
    });

    dialogRef.afterClosed().subscribe((ok) => {
      if (ok) {
        console.log('logout');
      }
    });
  }
}

import { Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  NavigationCancel,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
} from '@angular/router';
import { CONTAINER, Mobile } from '@core/models/layout';
import { BRAND, HEADER_NAVBAR_ITEMS } from '@core/models/header';
import { InjectBase } from '@core/shared/inject.base';
import {
  DialogComponent,
  NotifyService,
  ProgressBarComponent,
} from 'projects/templates/src/public-api';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends InjectBase implements OnInit {
  headerItems = HEADER_NAVBAR_ITEMS;
  brand = BRAND;
  username!: string;
  mobile: Mobile = { isHandset: false, isTablet: false };

  @ViewChild('progressbar', { static: true })
  progressbar!: ProgressBarComponent;

  @ViewChild('notify', { static: true, read: ViewContainerRef })
  notifyContainer!: ViewContainerRef;

  constructor(
    injector: Injector,
    private title: Title,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private dialog: MatDialog,
    private auth: AuthenticationService,
    private notify: NotifyService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.initConfig();
    this.initProgressbar();
    this.initLayout(Breakpoints.Web, this.updateLayoutForWebChange.bind(this));
    this.initLayout(
      Breakpoints.Tablet,
      this.updateLayoutForTabletChange.bind(this)
    );
    this.initLayout(
      Breakpoints.Handset,
      this.updateLayoutForHandSetChange.bind(this)
    );
    this.mediaQuery(
      '(max-width: 960px)',
      this.updateLayoutForMediaChange.bind(this)
    );
    this.initHeader();
    this.initNotify();
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
    this.renderer.addClass(this.elementRef.nativeElement, CONTAINER.Web);
    this.renderer.removeClass(this.elementRef.nativeElement, CONTAINER.Tablet);
    this.renderer.removeClass(this.elementRef.nativeElement, CONTAINER.Handset);

    this.layoutPublish({ isHandset: false, isTablet: false });
    this.changeDetectorRef.markForCheck();
  }

  private updateLayoutForTabletChange(): void {
    this.renderer.addClass(this.elementRef.nativeElement, CONTAINER.Tablet);
    this.renderer.removeClass(this.elementRef.nativeElement, CONTAINER.Web);
    this.renderer.removeClass(this.elementRef.nativeElement, CONTAINER.Handset);
    this.layoutPublish({ isHandset: false, isTablet: true });
    this.changeDetectorRef.markForCheck();
  }

  private updateLayoutForHandSetChange(): void {
    this.renderer.addClass(this.elementRef.nativeElement, CONTAINER.Handset);
    this.renderer.removeClass(this.elementRef.nativeElement, CONTAINER.Tablet);
    this.renderer.removeClass(this.elementRef.nativeElement, CONTAINER.Web);

    this.layoutPublish({ isHandset: true, isTablet: false });
    this.changeDetectorRef.markForCheck();
  }

  private layoutPublish(mobile: Mobile) {
    this.mobile = mobile;
    this.layoutService.next(mobile);
  }

  private initHeader(): void {
    this.auth
      .current$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        if (user.name !== '' || user.name) {
          this.username = user.name;
        }
        this.changeDetectorRef.markForCheck();
      });
  }

  private initNotify(): void {
    this.notify.initFactory(this.notifyContainer);
  }

  about(): void {
    this.router.navigate(['/about']);
  }

  account(): void {
    this.router.navigate(['/account']);
  }

  logout(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '320px',
      data: {
        subject: '注销 ' + this.auth.current().name,
        message: '是否注销当前用户？',
      },
    });

    dialogRef.afterClosed().subscribe((ok) => {
      if (ok) {
        this.username = '';
        this.auth.logout();
      }
    });
  }
}

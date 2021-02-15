import { Breakpoints } from '@angular/cdk/layout';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { navListItems } from '@core/models/sidenav';
import { InjectBase } from '@core/shared/inject.base';
import { MatSidenav } from '@angular/material/sidenav';
import { Mobile } from '@core/models/layout';
import { distinctUntilChanged } from 'rxjs/operators';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent extends InjectBase implements OnInit {
  mobile!: Mobile;

  showMenu = false;
  sideNavMode: 'over' | 'push' | 'side' = 'over';
  hasBackdrop: boolean = false;

  navItems = navListItems;

  @ViewChild('snav', { static: true })
  snav!: MatSidenav;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.layoutService
      .subject$()
      .pipe(distinctUntilChanged())
      .subscribe((mobile) => (this.mobile = mobile));
    this.initLayout(Breakpoints.Web, this.updateLayoutForWebChange.bind(this));
    this.initLayout(
      Breakpoints.Handset,
      this.updateLayoutForHandSetChange.bind(this)
    );
    this.initLayout(
      Breakpoints.Tablet,
      this.updateLayoutForTabletChange.bind(this)
    );
  }

  private updateLayoutForWebChange(): void {
    this.showMenu = true;
    this.sideNavMode = 'side';
    this.hasBackdrop = false;
    this.changeDetectorRef.markForCheck();
  }

  private updateLayoutForTabletChange(): void {
    this.showMenu = false;
    this.sideNavMode = 'push';
    this.hasBackdrop = true;
    this.changeDetectorRef.markForCheck();
  }

  private updateLayoutForHandSetChange(): void {
    this.showMenu = false;
    this.sideNavMode = 'over';
    this.hasBackdrop = true;
    this.changeDetectorRef.markForCheck();
  }

  sidenavClose(): void {
    if (!this.showMenu) {
      this.snav.close();
    }
  }
}

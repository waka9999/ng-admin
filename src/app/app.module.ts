import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'projects/templates/src/lib/header';
import {
  AuthorizedService,
  DialogModule,
  NotifyModule,
  ProgressBarModule,
} from 'projects/templates/src/public-api';
import { AppConfigModule } from './app.config.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { CookieService } from 'ngx-cookie-service';
import { MatButtonModule } from '@angular/material/button';
import { AuthorizationService } from '@core/services/authorization.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppConfigModule.forRoot(),
    ProgressBarModule,
    HeaderModule,
    NotifyModule,
    RouterModule,
    DialogModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [
    CookieService,
    { provide: AuthorizedService, useClass: AuthorizationService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('ng-light-theme');
  }
}

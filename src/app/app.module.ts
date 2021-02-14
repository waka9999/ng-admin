import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'projects/templates/src/lib/header';
import { ProgressBarModule } from 'projects/templates/src/public-api';
import { AppConfigModule } from './app.config.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppConfigModule.forRoot(),
    ProgressBarModule,
    HeaderModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('ng-light-theme');
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeadingModule, NavListModule } from 'projects/templates/src/public-api';


@NgModule({
  declarations: [PlatformComponent],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    MatSidenavModule,
    HeadingModule,
    NavListModule,
  ]
})
export class PlatformModule { }

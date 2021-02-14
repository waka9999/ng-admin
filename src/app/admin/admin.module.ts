import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {
  HeadingModule,
  NavListModule,
} from 'projects/templates/src/public-api';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    HeadingModule,
    NavListModule,
  ],
})
export class AdminModule {}

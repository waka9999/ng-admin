import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';
import { ErrorModule } from 'projects/templates/src/public-api';

@NgModule({
  declarations: [UnauthorizedComponent],
  imports: [CommonModule, UnauthorizedRoutingModule, ErrorModule],
})
export class UnauthorizedModule {}

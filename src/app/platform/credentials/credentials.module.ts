import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsRoutingModule } from './credentials-routing.module';
import { CredentialsComponent } from './credentials.component';
import { HeadingModule } from 'projects/templates/src/public-api';


@NgModule({
  declarations: [CredentialsComponent],
  imports: [
    CommonModule,
    CredentialsRoutingModule,
  ]
})
export class CredentialsModule { }

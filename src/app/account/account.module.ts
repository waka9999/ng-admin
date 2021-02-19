import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import {
  AuthorizedModule,
  HeadingModule,
} from 'projects/templates/src/public-api';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AccountComponent, ProfileComponent, PasswordComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeadingModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    AuthorizedModule,
  ],
})
export class AccountModule {}

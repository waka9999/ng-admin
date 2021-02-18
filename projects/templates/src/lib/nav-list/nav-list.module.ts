import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AuthorizedModule } from '../authorized';

@NgModule({
  declarations: [NavListComponent],
  imports: [CommonModule, RouterModule, MatListModule, AuthorizedModule],
  exports: [NavListComponent],
})
export class NavListModule {}

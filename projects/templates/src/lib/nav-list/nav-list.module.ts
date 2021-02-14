import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavListComponent],
  imports: [CommonModule, RouterModule, MatListModule],
  exports: [NavListComponent],
})
export class NavListModule {}

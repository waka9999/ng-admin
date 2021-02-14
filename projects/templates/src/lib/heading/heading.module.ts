import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeadingComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [HeadingComponent],
})
export class HeadingModule {}

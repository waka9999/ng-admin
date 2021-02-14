import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [ErrorComponent],
})
export class ErrorModule {}

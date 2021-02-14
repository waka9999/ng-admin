import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FilterComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule],
  exports: [FilterComponent],
})
export class FilterModule {}

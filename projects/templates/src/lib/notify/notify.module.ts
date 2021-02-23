import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyComponent } from './notify.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotifyComponent],
  imports: [CommonModule, RouterModule],
  exports: [NotifyComponent],
})
export class NotifyModule {}

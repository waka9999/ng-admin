import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DisableIfUnauthorizedDirective } from './disable-if-unauthorized.directive';
import { HideIfUnauthorizedDirective } from './hide-if-unauthorized.directive';

@NgModule({
  declarations: [HideIfUnauthorizedDirective, DisableIfUnauthorizedDirective],
  imports: [CommonModule],
  exports: [HideIfUnauthorizedDirective, DisableIfUnauthorizedDirective],
})
export class AuthorizedModule {}

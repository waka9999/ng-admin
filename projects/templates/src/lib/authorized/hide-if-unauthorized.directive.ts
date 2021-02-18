import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthorizationService } from './authorization.service';

@Directive({
  selector: '[ngHideIfUnauthorized]',
})
export class HideIfUnauthorizedDirective {
  @Input('ngHideIfUnauthorized') public permission!: string | undefined;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private authorized: AuthorizationService
  ) {}

  ngOnInit() {
    this.authorized
      .hasPermission$(this.permission)
      .pipe(take(2))
      .subscribe((b) => {
        if (!b) {
          this.renderer.addClass(this.elementRef.nativeElement, 'hidden');
        } else {
          this.renderer.removeClass(this.elementRef.nativeElement, 'hidden');
        }
      });
  }
}

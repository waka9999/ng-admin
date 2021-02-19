import { AfterViewInit } from '@angular/core';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthorizedService } from './authorized.service';

@Directive({
  selector: '[ngHideIfUnauthorized]',
})
export class HideIfUnauthorizedDirective implements AfterViewInit {
  @Input('ngHideIfUnauthorized') permission!: string | undefined;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private authorized: AuthorizedService
  ) {}
  ngAfterViewInit(): void {
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

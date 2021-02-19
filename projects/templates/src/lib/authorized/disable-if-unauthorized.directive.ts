import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { take } from 'rxjs/operators';
import { AuthorizedService } from './authorized.service';

@Directive({
  selector: '[ngDisableIfUnauthorized]',
})
export class DisableIfUnauthorizedDirective implements AfterViewInit {
  @Input('ngDisableIfUnauthorized') permission!: string | undefined;

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
        if (b) {
          this.renderer.removeClass(
            this.elementRef.nativeElement,
            'mat-button-disabled'
          );
          this.renderer.setProperty(
            this.elementRef.nativeElement,
            'disabled',
            false
          );
        } else {
          this.renderer.addClass(
            this.elementRef.nativeElement,
            'mat-button-disabled'
          );
          this.renderer.setProperty(
            this.elementRef.nativeElement,
            'disabled',
            true
          );
        }
      });
  }
}

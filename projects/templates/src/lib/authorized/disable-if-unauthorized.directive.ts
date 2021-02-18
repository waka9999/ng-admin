import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Directive({
  selector: '[appDisableIfUnauthorized]',
})
export class DisableIfUnauthorizedDirective implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private authorized: AuthorizationService
  ) {}

  ngOnInit() {
    this.authorized.hasPermission$('writeable').subscribe((b) => {
      if (b) {
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'disabled',
          false
        );
      } else {
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'disabled',
          true
        );
      }
    });
  }
}

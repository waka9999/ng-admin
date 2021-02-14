import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';
import { Error } from './model';

@Component({
  selector: 'ng-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ng-error' },
})
export class ErrorComponent implements OnInit {
  @Input() error!: Error;

  private start = 3000;
  redirect = true;

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    timer(0, 1000)
      .pipe(
        takeWhile((t) => {
          if (t < this.start) {
            return true;
          } else {
            if (this.redirect) {
              this.router.navigate([this.error.href]);
            }
            return false;
          }
        }),
        map((t) => {
          this.start = this.start - 1000;
          this.changeDetectorRef.markForCheck();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.redirect = false;
  }

  get time(): number {
    return this.start / 1000 + 1;
  }
}

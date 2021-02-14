import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'ng-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ng-filter' },
})
export class FilterComponent implements OnInit {
  @ViewChild('input', { static: true }) input!: ElementRef;

  private subject$ = new Subject<string>();
  @Output() filter = this.subject$.pipe(
    filter((text) => text.length > 2),
    debounceTime(300),
    distinctUntilChanged()
  );

  constructor() {}

  ngOnInit(): void {}

  enter(): void {
    this.subject$.next(this.input?.nativeElement.value.trim());
  }
}

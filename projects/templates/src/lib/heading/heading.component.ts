import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { HeadingService } from './heading.service';
import { Heading } from './model';

@Component({
  selector: 'ng-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ng-heading' },
})
export class HeadingComponent implements OnInit {
  heading!: Heading;
  @Output() toggle = new EventEmitter();

  constructor(
    private service: HeadingService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.service.subject$().subscribe((heading) => {
      this.heading = heading;
      this.changeDetection.detectChanges();
    });
  }

  click(): void {
    this.toggle.emit();
  }
}

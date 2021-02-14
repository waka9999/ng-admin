import { EventEmitter } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NavListItem } from './model';

@Component({
  selector: 'ng-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ng-nav-list' },
})
export class NavListComponent implements OnInit {
  @Input() items!: NavListItem[];
  @Output() close = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  click(): void {
    this.close.emit();
  }
}

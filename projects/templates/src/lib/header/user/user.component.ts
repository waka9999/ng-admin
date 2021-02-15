import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { HeaderUser } from '../model';

@Component({
  selector: 'ng-header-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ng-header-user' },
})
export class UserComponent implements OnInit {
  @Input() user!: HeaderUser;
  constructor() {}

  ngOnInit(): void {}
}

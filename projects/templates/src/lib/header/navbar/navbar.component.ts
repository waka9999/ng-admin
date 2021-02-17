import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { HeaderNavbarItem } from '../model';

@Component({
  selector: 'ng-header-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ng-header-navbar' },
})
export class NavbarComponent implements OnInit {
  @Input() items!: HeaderNavbarItem[] | undefined;
  constructor() {}

  ngOnInit(): void {}
}

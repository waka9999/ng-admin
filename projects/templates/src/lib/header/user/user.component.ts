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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  click(path?: string): void {
    this.router.navigate([path]);
  }

  beforeLogout(i: number): boolean {
    return this.user.menuItems.length - 1 === i;
  }
}

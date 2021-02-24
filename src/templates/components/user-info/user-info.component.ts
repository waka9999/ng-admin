import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { User } from '@core/models/users';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-user-info' },
})
export class UserInfoComponent implements OnInit {
  @Input() user!: User;

  constructor() {}

  ngOnInit(): void {
    console.log(this.user);
  }
}

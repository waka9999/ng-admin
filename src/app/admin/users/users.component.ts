import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { usersHeading } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';
import { User, USERS_DATA } from '@core/models/users';
import { Router } from '@angular/router';
import {
  customAnimation,
  listSlideUp,
} from 'projects/templates/src/public-api';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation, listSlideUp],
})
export class UsersComponent extends InjectBase implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'state'];
  dataSource = new MatTableDataSource<User>(USERS_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(injector: Injector, private router: Router) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(usersHeading);
    this.dataSource.paginator = this.paginator;
  }

  create(): void {
    this.router.navigate(['/admin/users/create']);
  }

  filter(value: string): void {
    if (value) {
      console.log(value);
    }
  }
}

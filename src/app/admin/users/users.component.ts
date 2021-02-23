import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { USERS_HEADING } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';
import { User } from '@core/models/users';
import { ActivatedRoute, Router } from '@angular/router';
import {
  customAnimation,
  NotifyComponent,
} from 'projects/templates/src/public-api';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { takeUntil } from 'rxjs/operators';
import { USERS_INFO } from '@core/models/notification';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class UsersComponent extends InjectBase implements OnInit {
  @ViewChild('notify', { static: true, read: NotifyComponent })
  notify!: NotifyComponent;

  displayedColumns: string[] = ['id', 'name', 'state'];
  dataSource!: MatTableDataSource<User>;
  pageSize!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    injector: Injector,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.initUsers();
    this.initHeading(USERS_HEADING);
  }

  private initTable(): void {
    this.dataSource.paginator = this.paginator;
    this.configService
      .subject$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((c) => (this.pageSize = c.pageSize));
  }

  private initUsers(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.dataSource = new MatTableDataSource<User>(data.users);
      this.initTable();
      this.notify.show(USERS_INFO);
    });
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

import {
  AfterViewInit,
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
import { Breakpoints } from '@angular/cdk/layout';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class UsersComponent
  extends InjectBase
  implements OnInit, AfterViewInit {
  @ViewChild('notify', { static: true, read: NotifyComponent })
  notify!: NotifyComponent;

  displayedColumns: string[] = [
    'name',
    'username',
    'email',
    'department',
    'organization',
    'role',
    'state',
    'inputDate',
    'updateDate',
  ];
  filterSource!: MatTableDataSource<User>;
  dataSource!: MatTableDataSource<User>;
  pageSize!: number;

  @ViewChild(MatSort) sort!: MatSort;
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
    this.routerProcess();
    this.initHeading(USERS_HEADING);
    this.initNotify();
    this.initLayout(
      Breakpoints.Handset,
      this.updateLayoutForHandSetChange.bind(this)
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private initTable(): void {
    this.configService
      .subject$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((c) => {
        this.pageSize = c.pageSize;
      });
  }

  private initUsers(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.filterSource = new MatTableDataSource<User>(data.users);
      this.dataSource = new MatTableDataSource<User>(data.users);
      this.initTable();
    });
  }

  private initNotify(): void {
    if (history.state.notification) {
      this.notify.show(history.state.notification);
    }
  }

  private updateLayoutForHandSetChange(): void {
    this.displayedColumns = ['name', 'username', 'role', 'state'];
    this.changeDetectorRef.markForCheck();
  }

  private routerProcess(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data) {
        switch (data.filter) {
          case 'admin':
            this.dataSource.data = this.filterSource.data.filter(
              (data) => data?.role?.name === 'admin'
            );
            break;
          case 'enable':
            this.dataSource.data = this.filterSource.data.filter(
              (data) => data.state === 1
            );
            break;
        }
        this.changeDetectorRef.markForCheck();
      }
    });
  }

  create(): void {
    this.router.navigate(['/admin/users/create']);
  }

  filter(value: string): void {
    if (value) {
      this.dataSource.data = this.filterSource.data.filter(
        (data) => data.name.includes(value) || data.username.includes(value)
      );
    } else {
      this.refresh();
    }
  }
  refresh(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.dataSource = new MatTableDataSource<User>(data.users);
    });
  }

  adminUsers(): number {
    return this.filterSource.data.filter((data) => data.role?.name === 'admin')
      .length;
  }

  adminUserFilter(): string {
    return '/admin/users/admin';
  }

  enableUsers(): number {
    return this.filterSource.data.filter((data) => data.state === 1).length;
  }

  enableUserFilter(): string {
    return '/admin/users/enable';
  }
}

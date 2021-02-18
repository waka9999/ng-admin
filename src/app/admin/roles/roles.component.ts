import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ROLES_HEADING } from '@core/models/heading';
import { Role, ROLES_DATA } from '@core/models/roles';
import { InjectBase } from '@core/shared/inject.base';
import {
  customAnimation,
} from 'projects/templates/src/public-api';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-admin-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class RolesComponent extends InjectBase implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'readonly'];
  dataSource = new MatTableDataSource<Role>(ROLES_DATA);
  pageSize!:number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(injector: Injector, private router: Router) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(ROLES_HEADING);
    this.initTable();
  }

  private initTable(): void {
    this.dataSource.paginator = this.paginator;
    this.configService
      .subject$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((c) => (this.pageSize = c.pageSize));
  }
  create(): void {
    this.router.navigate(['/admin/roles/create']);
  }

  filter(value: string): void {
    if (value) {
      console.log(value);
    }
  }
}

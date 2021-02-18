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
import { Group } from '@core/models/groups';
import { GROUPS_HEADING } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';
import { customAnimation } from 'projects/templates/src/public-api';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
})
export class GroupsComponent extends InjectBase implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'department', 'organization'];
  // dataSource = GROUPS_DATA;
  dataSource = new MatTableDataSource<Group>([]);
  pageSize!: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(injector: Injector, private router: Router) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(GROUPS_HEADING);
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
    this.router.navigate(['/admin/groups/create']);
  }

  filter(value: string): void {
    if (value) {
      console.log(value);
    }
  }
}

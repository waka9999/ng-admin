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
import { Group, GROUPS_DATA } from '@core/models/groups';
import { groupsHeading } from '@core/models/heading';
import { InjectBase } from '@core/shared/inject.base';
import {
  customAnimation,
  listSlideUp,
} from 'projects/templates/src/public-api';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation, listSlideUp],
})
export class GroupsComponent extends InjectBase implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'department', 'organization'];
  // dataSource = GROUPS_DATA;
  dataSource = new MatTableDataSource<Group>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(injector: Injector, private router: Router) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(groupsHeading);
    this.dataSource.paginator = this.paginator;
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

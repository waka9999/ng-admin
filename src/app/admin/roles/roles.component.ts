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
import { rolesHeading } from '@core/models/heading';
import { Role, ROLES_DATA } from '@core/models/roles';
import { InjectBase } from '@core/shared/inject.base';
import {
  customAnimation,
  listSlideUp,
} from 'projects/templates/src/public-api';

@Component({
  selector: 'app-admin-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation, listSlideUp],
})
export class RolesComponent extends InjectBase implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'readonly'];
  dataSource = new MatTableDataSource<Role>(ROLES_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(injector: Injector, private router: Router) {
    super(injector);
  }

  ngOnInit(): void {
    this.initHeading(rolesHeading);
    this.dataSource.paginator = this.paginator;
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

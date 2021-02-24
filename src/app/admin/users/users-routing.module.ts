import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolver } from '@core/reslovers/users/users.resolver';
import { CreateComponent } from './create/create.component';
import { UsersComponent } from './users.component';
import { PERMISSIONS } from '@core/models/permission';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
    data: { permission: PERMISSIONS.Admin.users.create },
  },
  {
    path: ':id',
    component: DetailsComponent,
    data: { permission: PERMISSIONS.Admin.users.details },
  },
  {
    path: '',
    component: UsersComponent,
    data: { permission: PERMISSIONS.Admin.users.base },
    resolve: {
      users: UsersResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from '@core/guards/authorization.guard';
import { PERMISSIONS } from '@core/models/permission';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/users',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthorizationGuard],
    canActivateChild: [AuthorizationGuard],
    data: { permission: PERMISSIONS.Admin.base },
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((mod) => mod.UsersModule),
        data: { permission: PERMISSIONS.Admin.users.base },
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('./roles/roles.module').then((mod) => mod.RolesModule),
        data: { permission: PERMISSIONS.Admin.roles.base },
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('./groups/groups.module').then((mod) => mod.GroupsModule),
        data: { permission: PERMISSIONS.Admin.groups.base },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

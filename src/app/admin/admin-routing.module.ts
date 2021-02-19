import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from '@core/guard/authorization.guard';
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
    data: { permission: PERMISSIONS.Admin },
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((mod) => mod.UsersModule),
        data: { permission: PERMISSIONS.Users },
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('./roles/roles.module').then((mod) => mod.RolesModule),
        data: { permission: PERMISSIONS.Roles },
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('./groups/groups.module').then((mod) => mod.GroupsModule),
        data: { permission: PERMISSIONS.Groups },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

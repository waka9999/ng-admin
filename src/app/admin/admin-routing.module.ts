import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (mod) => mod.DashboardModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((mod) => mod.UsersModule),
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('./roles/roles.module').then((mod) => mod.RolesModule),
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('./groups/groups.module').then((mod) => mod.GroupsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from '@core/guards/authorization.guard';
import { PERMISSIONS } from '@core/models/permission';
import { PlatformComponent } from './platform.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/platform/services',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PlatformComponent,
    canActivate: [AuthorizationGuard],
    canActivateChild: [AuthorizationGuard],
    data: { permission: PERMISSIONS.Platform.base },
    children: [
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then(
            (mod) => mod.ServicesModule
          ),
        data: { permission: PERMISSIONS.Platform.services.base },
      },
      {
        path: 'credentials',
        loadChildren: () =>
          import('./credentials/credentials.module').then(
            (mod) => mod.CredentialsModule
          ),
        data: { permission: PERMISSIONS.Platform.credentials.base },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}

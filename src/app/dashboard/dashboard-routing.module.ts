import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from '@core/guards/authorization.guard';
import { PERMISSIONS } from '@core/models/permission';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthorizationGuard],
    component: DashboardComponent,
    data: { permission: PERMISSIONS.Dashboard.base },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

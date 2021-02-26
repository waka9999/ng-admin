import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from '@core/guards/authorization.guard';
import { PERMISSIONS } from '@core/models/permission';
import { LogsComponent } from './logs.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthorizationGuard],
    component: LogsComponent,
    data: { permission: PERMISSIONS.Logs.base },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogsRoutingModule {}

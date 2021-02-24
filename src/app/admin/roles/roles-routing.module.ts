import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PERMISSIONS } from '@core/models/permission';
import { RolesComponent } from './roles.component';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent,
    data: { permission: PERMISSIONS.Admin.roles.base },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PERMISSIONS } from '@core/models/permission';
import { GroupsComponent } from './groups.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
    data: { permission: PERMISSIONS.Admin.groups.base },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule {}

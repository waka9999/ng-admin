import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PERMISSIONS } from '@core/models/permission';
import { CredentialsComponent } from './credentials.component';

const routes: Routes = [
  {
    path: '',
    component: CredentialsComponent,
    data: { permission: PERMISSIONS.Platform.credentials.base },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialsRoutingModule {}

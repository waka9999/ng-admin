import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolver } from '@core/reslovers/users/users.resolver';
import { CreateComponent } from './create/create.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {
      users: UsersResolver,
    },
  },
  {
    path: 'create',
    component: CreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

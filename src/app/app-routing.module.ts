import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'unauthorized',
    loadChildren: () =>
      import('./unauthorized/unauthorized.module').then(
        (mod) => mod.UnauthorizedModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then((mod) => mod.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

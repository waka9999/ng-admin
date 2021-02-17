import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guard/auth.guard';
import { CookieGuard } from '@core/guard/cookie.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((mod) => mod.AboutModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((mod) => mod.AccountModule),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'auth',
    canActivate: [CookieGuard],
    loadChildren: () =>
      import('./auth/auth.module').then((mod) => mod.AuthModule),
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

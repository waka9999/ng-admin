import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '@core/guards/authentication.guard';
import { CookieGuard } from '@core/guards/cookie.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'about',
    canActivate: [CookieGuard],
    loadChildren: () =>
      import('./about/about.module').then((mod) => mod.AboutModule),
    data: { skipAuth: true },
  },
  {
    path: 'account',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./account/account.module').then((mod) => mod.AccountModule),
  },
  {
    path: 'admin',
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
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
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  },
  {
    path: 'unauthorized',
    canActivate: [CookieGuard],
    loadChildren: () =>
      import('./unauthorized/unauthorized.module').then(
        (mod) => mod.UnauthorizedModule
      ),
    data: { skipAuth: true },
  },
  {
    path: '**',
    canActivate: [CookieGuard],
    loadChildren: () =>
      import('./not-found/not-found.module').then((mod) => mod.NotFoundModule),
    data: { skipAuth: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

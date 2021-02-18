import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrandComponent } from './brand/brand.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AuthorizedModule } from '../authorized';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    BrandComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    AuthorizedModule,
  ],
  exports: [HeaderComponent, BrandComponent, MenuComponent, NavbarComponent],
})
export class HeaderModule {}

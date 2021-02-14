import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreateComponent } from './create/create.component';
import { FilterModule } from 'projects/templates/src/lib/filter';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {
  MatPaginatorModule,
  MatPaginatorIntl,
} from '@angular/material/paginator';
import { NgPaginatorService } from '@core/services/paginator.service';
import { BlankModule } from 'projects/templates/src/lib/blank';

@NgModule({
  declarations: [UsersComponent, CreateComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FilterModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    BlankModule,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: NgPaginatorService,
    },
  ],
})
export class UsersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { FilterModule } from 'projects/templates/src/lib/filter';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BlankModule } from 'projects/templates/src/public-api';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { NgPaginatorService } from '@core/services/paginator.service';

@NgModule({
  declarations: [GroupsComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    FilterModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    BlankModule,
  ],
  providers:[
    {
			provide: MatPaginatorIntl,
			useClass: NgPaginatorService,
		},
  ]
})
export class GroupsModule {}

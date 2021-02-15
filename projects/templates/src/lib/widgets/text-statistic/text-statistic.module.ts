import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextStatisticComponent } from './text-statistic.component';



@NgModule({
  declarations: [TextStatisticComponent],
  imports: [
    CommonModule
  ],
  exports:[TextStatisticComponent]
})
export class TextStatisticModule { }

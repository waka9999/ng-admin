import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { HeaderBrand } from '../model';

@Component({
  selector: 'ng-header-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'ng-header-brand' },
})
export class BrandComponent implements OnInit {
  @Input() brand!: HeaderBrand;
  constructor() {}

  ngOnInit(): void {}
}

import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { unauthorized } from '@core/models/error';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-page column-center-center' },
})
export class UnauthorizedComponent implements OnInit {
  unauthorized = unauthorized;

  constructor() {}

  ngOnInit(): void {}
}

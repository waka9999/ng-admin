import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NOT_FOUND } from '@core/models/error';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-page column-center-center' },
})
export class NotFoundComponent implements OnInit {
  notfound = NOT_FOUND;
  constructor() {}

  ngOnInit(): void {}
}

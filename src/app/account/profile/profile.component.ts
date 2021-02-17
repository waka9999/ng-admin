import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-account-profile' },
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

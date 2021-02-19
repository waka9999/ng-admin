import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/users';
import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'app-account-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-account-profile' },
})
export class ProfileComponent implements OnInit {
  user!: User;
  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.user = this.auth.current();
  }
}

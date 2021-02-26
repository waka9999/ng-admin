import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ACCOUNT_HEADING } from '@core/models/heading';
import { ACCOUNT_CHANGE_PASSWORD_SUCCESS } from '@core/models/notification';
import { User } from '@core/models/users';
import { AuthenticationService } from '@core/services/authentication.service';
import { confirmValidator, FormBase } from '@core/shared/form.base';
import { customAnimation, NotifyComponent } from 'projects/templates/src/public-api';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
  host: { class: 'app-account simple-page' },
})
export class AccountComponent extends FormBase implements OnInit {
  @ViewChild('notify', { static: true, read: NotifyComponent })
  notify!: NotifyComponent;
  
  user!: User;
  password = new FormControl('', [Validators.required]);
  password1 = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  password2 = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    confirmValidator(this.password1),
  ]);

  constructor(
    injector: Injector,
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
  ) {
    super(injector);
    this.formGroup = this.formBuilder.group({
      password: this.password,
      password1: this.password1,
      password2: this.password2,
    });
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initUser();
    this.initHeading(ACCOUNT_HEADING);
  }

  private initUser(): void {
    this.user = this.auth.current();
  }

  changePassword(): void {
    this.notify.show(ACCOUNT_CHANGE_PASSWORD_SUCCESS);
  }

  change(): void {
    this.formGroup.reset();
  }
}

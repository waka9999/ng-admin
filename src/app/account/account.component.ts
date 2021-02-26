import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ACCOUNT_HEADING } from '@core/models/heading';
import { Role } from '@core/models/roles';
import { User } from '@core/models/users';
import { AuthenticationService } from '@core/services/authentication.service';
import { RolesService } from '@core/services/roles.service';
import { confirmValidator, FormBase } from '@core/shared/form.base';
import { customAnimation } from 'projects/templates/src/public-api';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [customAnimation],
  host: { class: 'app-account simple-page' },
})
export class AccountComponent extends FormBase implements OnInit {
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

  submit(): void {
    console.log(this.formGroup.value);
  }

  change(): void {
    this.formGroup.reset();
  }
}

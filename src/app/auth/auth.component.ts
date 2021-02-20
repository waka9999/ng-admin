import { Injector } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '@core/services/authentication.service';
import { FormBase } from '@core/shared/form.base';
import { take, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-auth' },
})
export class AuthComponent extends FormBase implements OnInit {
  message!: string;

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
    injector: Injector,
    private formBuilder: FormBuilder,
    private auth: AuthenticationService
  ) {
    super(injector);
    this.formGroup = this.formBuilder.group({
      username: this.username,
      password: this.password,
    });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  submit(): void {
    this.formGroup.disable();
    this.auth
      .login$(this.formGroup.value)
      .pipe(
        take(1),
        finalize(() => {
          setTimeout(() => {
            this.formGroup.enable();
          }, 500);
        })
      )
      .subscribe((resp) => {
        if (resp.status === 200) {
          if (resp!.body!.code !== 0) {
            this.message = resp!.body!.error!;
          }
        }
      });
  }
}

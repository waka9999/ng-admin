import { ChangeDetectionStrategy, Injector } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { confirmValidator, FormBase } from '@core/shared/form.base';

@Component({
  selector: 'app-account-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordComponent extends FormBase implements OnInit {
  password = new FormControl('', [Validators.required]);
  password1 = new FormControl('', [Validators.required]);
  password2 = new FormControl('', [
    Validators.required,
    confirmValidator(this.password1),
  ]);

  constructor(injector: Injector, private formBuilder: FormBuilder) {
    super(injector);
    this.formGroup = this.formBuilder.group({
      password: this.password,
      password1: this.password1,
      password2: this.password2,
    });
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  submit(): void {
    console.log(this.formGroup.value)
  }
}

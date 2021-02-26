import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Group } from '@core/models/groups';
import { Role } from '@core/models/roles';
import { User } from '@core/models/users';
import { FormBase } from '@core/shared/form.base';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-user-info' },
})
export class UserInfoComponent extends FormBase implements OnInit {
  appearance: 'fill' = 'fill';
  @Input() editable!: boolean;
  @Input() user!: User;
  @Input() roles!: Role[];
  @Input() groups!: Group[];

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(4),
  ]);
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(12),
  ]);
  department = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
  ]);
  organization = new FormControl('', [
    Validators.required,
    Validators.maxLength(64),
  ]);

  constructor(injector: Injector, private formBuilder: FormBuilder) {
    super(injector);
    this.formGroup = this.formBuilder.group({
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email,
      department: this.department,
      organization: this.organization,
    });
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.initFormGroup();
    console.log(this.user);
    console.log(this.roles);
    console.log(this.groups);
  }

  private initFormGroup(): void {
    if (!this.editable) {
      this.formGroup.disable();
    }
    this.name.setValue(this.user?.name);
    this.username.setValue(this.user?.username);
    this.password.setValue(this.user?.password);
    this.email.setValue(this.user?.email);
    this.department.setValue(this.user?.department);
    this.organization.setValue(this.user?.organization);
  }

  inGroup(id: string | undefined): boolean {
    if (this.user?.groups && id) {
      const group = this.user.groups.find((group) => group.id === id);
      if (group) {
        return true;
      }
    }
    return false;
  }

  submit(): void {}
}

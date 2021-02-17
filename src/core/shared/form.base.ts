import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormGroup,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import {
  ViewChild,
  ElementRef,
  OnInit,
  Directive,
} from '@angular/core';
import { InjectBase } from './inject.base';
import { Injector } from '@angular/core';

@Directive()
export class FormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

const numberReg = /^\+?[1-9][0-9]*$/;

export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const invalid = !numberReg.test(control.value);
    // tslint:disable-next-line: object-literal-key-quotes
    return invalid ? { invalidNumber: { value: control.value } } : null;
  };
}

// tslint:disable-next-line: max-line-length
const ipReg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;

export function ipValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const invalid = !ipReg.test(control.value);
    // tslint:disable-next-line: object-literal-key-quotes
    return invalid ? { invalidIP: { value: control.value } } : null;
  };
}

export function confirmValidator(target: AbstractControl): ValidatorFn {
  return (source: AbstractControl): { [key: string]: any } | null => {
    return source.value === target.value
      ?null
      :  { notMatch: { value: true } };
  };
}

@Directive()
export abstract class FormBase extends InjectBase implements OnInit {
  public formGroup!: FormGroup;
  public matcher: ErrorStateMatcher;
  @ViewChild('focus', { static: true, read: ElementRef })
  public focus!: ElementRef;

  constructor(injector: Injector) {
    super(injector);
    this.matcher = new FormErrorStateMatcher();
  }

  ngOnInit(): void {
    this.focusOn();
  }

  private focusOn(): void {
    if (this.focus) {
      this.focus.nativeElement.focus();
    }
  }
}

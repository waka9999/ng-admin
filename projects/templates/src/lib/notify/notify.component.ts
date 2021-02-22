import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NotifyType, Notification, NotifyLevel } from './model';

@Component({
  selector: 'ng-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-notify]': 'isAppLevel()',
    '[class.comp-notify]': 'isCompLevel()',
    '[class.notify-visible]': 'isVisible()',
    '[class.notify-success]': 'isSuccess()',
    '[class.notify-info]': 'isInfo()',
    '[class.notify-warn]': 'isWarn()',
    '[class.notify-error]': 'isError()',
    class: 'ng-notify',
  },
})
export class NotifyComponent implements OnInit {
  @Input() notification!: Notification;
  @Input() autoClose: boolean = true;
  type: typeof NotifyType = NotifyType;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  isAppLevel(): boolean {
    return this.notification?.level === NotifyLevel.App;
  }

  isCompLevel(): boolean {
    return this.notification?.level === NotifyLevel.Component;
  }

  isSuccess(): boolean {
    return this.notification?.type === NotifyType.Success;
  }

  isInfo(): boolean {
    return this.notification?.type === NotifyType.Info;
  }

  isWarn(): boolean {
    return this.notification?.type === NotifyType.Warn;
  }

  isError(): boolean {
    return this.notification?.type === NotifyType.Error;
  }

  isVisible(): boolean {
    return this.notification?.visible;
  }

  show(): void {
    this.notification.visible = true;
    if (this.notification?.type !== this.type.Error) {
      setTimeout(() => {
        this.close();
      }, 3000);
    }
    this.changeDetectorRef.markForCheck();
  }

  close(): void {
    this.notification.visible = false;
    this.changeDetectorRef.markForCheck();
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NotifyType, Notification } from './model';

@Component({
  selector: 'ng-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.app-notify]': 'isAppLevel()',
    '[class.comp-notify]': '!isAppLevel()',
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
  appLevel: boolean = false;
  type: typeof NotifyType = NotifyType;
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  isAppLevel(): boolean {
    return this.appLevel;
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

  show(notification: Notification): void {
    this.notification = notification;
    this.notification.visible = true;
    if (this.notification?.type !== this.type.Error) {
      setTimeout(() => {
        this.close();
      }, 3000);
    }else{
      setTimeout(() => {
        this.close();
      }, 10000);
    }
    this.changeDetectorRef.markForCheck();
  }

  close(): void {
    this.notification.visible = false;
    this.changeDetectorRef.markForCheck();
  }
}

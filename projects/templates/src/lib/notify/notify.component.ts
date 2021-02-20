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
    '[class.notify-visible]': 'isVisible()',
    '[class.notify-success]': 'isSuccess()',
    '[class.notify-info]': 'isInfo()',
    '[class.notify-warn]': 'isWarn()',
    class: 'ng-notify',
  },
})
export class NotifyComponent implements OnInit {
  visible!: boolean;
  notification!: Notification;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  isAppLevel(): boolean {
    return this.notification?.level === NotifyLevel.App;
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

  isVisible(): boolean {
    return this.visible;
  }

  show(notification: Notification): void {
    this.notification = notification;
    this.visible = true;
    this.changeDetectorRef.markForCheck();
  }

  close(): void {
    this.visible = false;
    this.changeDetectorRef.markForCheck();
  }
}

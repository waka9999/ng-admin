import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { NotifyComponent } from './notify.component';
import {
  appNotifySuccess,
  appNotifyInfo,
  appNotifyWarn,
  Notification,
} from './model';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  private component!: ComponentRef<NotifyComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  initFactory(container: ViewContainerRef): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      NotifyComponent
    );
    this.component = container.createComponent(factory);
  }

  private show(notification: Notification): void {
    this.component.instance.show(notification);
    setTimeout(() => {
      this.component.instance.close();
    }, 300000);
  }

  success(message?: string): void {
    const notification = appNotifySuccess;
    if (message) {
      notification.message = message;
    }
    this.show(notification);
  }

  info(message?: string): void {
    const notification = appNotifyInfo;
    if (message) {
      notification.message = message;
    }
    this.show(notification);
  }

  warn(message?: string): void {
    const notification = appNotifyWarn;
    if (message) {
      notification.message = message;
    }
    this.show(notification);
  }
}

import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import { NotifyComponent } from './notify.component';
import { Notification } from './model';

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
    this.component.instance.appLevel = true;
  }

  show(notification: Notification): void {
    this.component.instance.show(notification);
  }
}

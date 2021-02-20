export interface Notification {
  level: NotifyLevel;
  type: NotifyType;
  icon: string;
  message?: string;
  link?: string;
}
export enum NotifyLevel {
  App,
  Component,
}

export enum NotifyType {
  Info,
  Success,
  Warn,
}

export const appNotifySuccess: Notification = {
  level: NotifyLevel.App,
  type: NotifyType.Success,
  icon: 'check_circle',
};

export const appNotifyInfo: Notification = {
  level: NotifyLevel.App,
  type: NotifyType.Info,
  icon: 'info',
};

export const appNotifyWarn: Notification = {
  level: NotifyLevel.App,
  type: NotifyType.Warn,
  icon: 'warning',
};

export const compNotifySuccess: Notification = {
  level: NotifyLevel.Component,
  type: NotifyType.Success,
  icon: 'check_circle',
};

export const compNotifyInfo: Notification = {
  level: NotifyLevel.Component,
  type: NotifyType.Info,
  icon: 'info',
};

export const compNotifyWarn: Notification = {
  level: NotifyLevel.Component,
  type: NotifyType.Warn,
  icon: 'warning',
};

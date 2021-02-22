export interface Notification {
  level: NotifyLevel;
  type: NotifyType;
  visible: boolean;
  message?: string;
}
export enum NotifyLevel {
  App,
  Component,
}

export enum NotifyType {
  Info,
  Success,
  Warn,
  Error,
}
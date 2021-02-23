export interface Notification {
  type: NotifyType;
  visible: boolean;
  message?: string;
  detail?: string;
  log?: string;
}

export enum NotifyType {
  Info,
  Success,
  Warn,
  Error,
}

export const blankNotification: Notification = {
  type: NotifyType.Warn,
  visible: false,
};

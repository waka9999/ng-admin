import { Notification, NotifyType } from 'projects/templates/src/lib/notify';

export const CONNECTION_ERROR: Notification = {
  type: NotifyType.Error,
  visible: false,
  message: '新建服务器连接失败。',
};

export const CONNECTION_INFO: Notification = {
  type: NotifyType.Info,
  visible: false,
  message: '新建服务器连接失败。',
};

export const USERS_INFO: Notification = {
  type: NotifyType.Info,
  visible: true,
  message: '获取用户成功。',
};

export const USERS_WARN: Notification = {
  type: NotifyType.Warn,
  visible: true,
  message: '获取用户失败。',
};

export const USER_CREATE_SUCCESS: Notification = {
  type: NotifyType.Success,
  visible: true,
  message: '新建用户成功。',
};

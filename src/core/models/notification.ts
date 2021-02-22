import {
  Notification,
  NotifyLevel,
  NotifyType,
} from 'projects/templates/src/lib/notify';

export const CONNECTION_ERROR: Notification = {
  level: NotifyLevel.App,
  type: NotifyType.Error,
  visible: false,
  message: '新建服务器连接失败',
};

export const CONNECTION_INFO: Notification = {
  level: NotifyLevel.App,
  type: NotifyType.Info,
  visible: false,
  message: '新建服务器连接失败',
};

export const USERS_INFO: Notification = {
  level: NotifyLevel.Component,
  type: NotifyType.Info,
  visible: true,
  message: '获取用户成功',
};

export const USERS_WARN: Notification = {
    level: NotifyLevel.Component,
    type: NotifyType.Warn,
    visible: true,
    message: '获取用户失败',
  };
  
import { Heading } from 'projects/templates/src/public-api';

export const DASHBOARD_HEADING: Heading = {
  text: '仪表盘',
  level: -1,
  icon: 'assessment',
};

export const USERS_HEADING: Heading = {
  text: '用户',
  level: 0,
  icon: 'menu',
};

export const USERS_CREATE_HEADING: Heading = {
  text: '创建用户',
  level: 1,
  icon: 'arrow_back_ios_new',
  returnLink: '/admin/users',
};

export const USERS_DETAIL_HEADING: Heading = {
  text: '用户详细',
  level: 1,
  icon: 'arrow_back_ios_new',
  returnLink: '/admin/users',
};

export const ROLES_HEADING: Heading = {
  text: '角色',
  level: 0,
  icon: 'menu',
};

export const GROUPS_HEADING: Heading = {
  text: '项目组',
  level: 0,
  icon: 'menu',
};

export const ABOUT_HEADING: Heading = {
  text: '关于',
  level: -1,
  icon: 'copyright',
};

export const ACCOUNT_HEADING: Heading = {
  text: '账号',
  level: -1,
  icon: 'person',
};

export const LOGS_HEADING: Heading = {
  text: '日志',
  level: -1,
  icon: 'text_snippet',
};

export const SERVICES_HEADING: Heading = {
  text: '服务',
  level: 0,
  icon: 'menu',
};

export const CREDENTIALS_HEADING: Heading = {
  text: '凭据',
  level: 0,
  icon: 'menu',
};

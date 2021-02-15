import { Heading } from 'projects/templates/src/public-api';

export const dashboardHeading: Heading = {
  text: '仪表盘',
  level: 0,
  icon: 'menu',
};

export const usersHeading: Heading = {
  text: '用户',
  level: 0,
  icon: 'menu',
};

export const usersCreateHeading: Heading = {
  text: '创建用户',
  level: 1,
  icon: 'arrow_back_ios_new',
  returnLink: '/admin/users',
};

export const rolesHeading: Heading = {
  text: '角色',
  level: 0,
  icon: 'menu',
};

export const groupsHeading: Heading = {
  text: '项目组',
  level: 0,
  icon: 'menu',
};

export const aboutHeading: Heading = {
  text: '关于',
  level: -1,
  icon: 'copyright',
};

export const accountHeading: Heading = {
  text: '账号',
  level: -1,
  icon: 'person',
};

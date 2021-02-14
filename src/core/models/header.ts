import {
  Header,
  HeaderNavbarItem,
  HeaderUser,
  HeaderUserMenuItem,
  HeaderBrand,
} from 'projects/templates/src/public-api';

const navbarItems: HeaderNavbarItem[] = [
  { id: 1, href: '/admin', title: '管理', text: '管理' },
  { id: 2, href: '/logs', title: '日志', text: '日志' },
  { id: 3, href: '/about', title: '关于', text: '关于' },
];

const userMenuItems: HeaderUserMenuItem[] = [
  { id: 1, href: '/auth/preferences', title: '首选项', text: '首选项' },
  { id: 2, href: '/auth/logout', title: '注销', text: '注销' },
];

export const headerUser: HeaderUser = {
  username: 'waka9999',
  menuItems: userMenuItems,
};

export const header: Header = {
  navbarItems: navbarItems,
  user: headerUser,
};

export const brand: HeaderBrand = {
  icon: 'category',
  name: 'Ng Admin',
};

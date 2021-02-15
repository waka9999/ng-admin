import {
  Header,
  HeaderNavbarItem,
  HeaderUser,
  HeaderBrand,
} from 'projects/templates/src/public-api';

const navbarItems: HeaderNavbarItem[] = [
  { id: 1, href: '/admin', title: '管理', text: '管理' },
  { id: 2, href: '/logs', title: '日志', text: '日志' },
  { id: 3, href: '/about', title: '关于', text: '关于' },
];

export const headerUser: HeaderUser = {
  username: 'waka9999',
};

export const header: Header = {
  navbarItems: navbarItems,
  user: headerUser,
};

export const brand: HeaderBrand = {
  icon: 'category',
  name: 'Ng Admin',
};

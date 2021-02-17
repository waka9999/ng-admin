import {
  Header,
  HeaderNavbarItem,
  HeaderBrand,
} from 'projects/templates/src/public-api';

export const adminItems: HeaderNavbarItem[] = [{
  id: 1,
  href: '/admin',
  title: '管理',
  text: '管理',
}];

export const navbarItems: HeaderNavbarItem[] = [
  { id: 2, href: '/logs', title: '日志', text: '日志' },
  { id: 3, href: '/about', title: '关于', text: '关于' },
];

export const defaultHeader: Header = {
  navbarItems: navbarItems,
  name: '',
};

export const brand: HeaderBrand = {
  icon: 'category',
  name: 'Ng Admin',
};

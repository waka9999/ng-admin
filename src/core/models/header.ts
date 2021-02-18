import {
  HeaderBrand,
  HeaderNavbarItem,
} from 'projects/templates/src/public-api';
import { PERMISSIONS } from './permission';

export const HEADER_NAVBAR_ITEMS: HeaderNavbarItem[] = [
  {
    id: 1,
    href: '/admin',
    title: '管理',
    text: '管理',
    permission: PERMISSIONS.Admin
  },
  {
    id: 2,
    href: '/logs',
    title: '日志',
    text: '日志',
  },
  {
    id: 3,
    href: '/about',
    title: '关于',
    text: '关于',
  },
];

export const BRAND: HeaderBrand = {
  icon: 'category',
  name: 'Ng Admin',
};

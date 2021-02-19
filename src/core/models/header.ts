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
    permission: PERMISSIONS.Admin,
  },
  {
    id: 2,
    href: '/dashboard',
    title: '仪表盘',
    text: '仪表盘',
    permission: PERMISSIONS.Dashboard,
  },
  {
    id: 3,
    href: '/logs',
    title: '日志',
    text: '日志',
    permission: PERMISSIONS.Logs,
  },
  {
    id: 4,
    href: '/about',
    title: '关于',
    text: '关于',
  },
];

export const BRAND: HeaderBrand = {
  icon: 'category',
  name: 'Ng Admin',
};

import { NavListItem } from 'projects/templates/src/public-api';

export const navListItems: NavListItem[] = [
  {
    id: 1,
    href: '/admin/dashboard',
    title: '仪表盘',
    text: '仪表盘',
    visible: true,
  },
  {
    id: 2,
    href: '/admin/users',
    title: '用户',
    text: '用户',
    visible: true,
  },
  {
    id: 3,
    href: '/admin/roles',
    title: '角色',
    text: '角色',
    visible: true,
  },
  {
    id: 4,
    href: '/admin/groups',
    title: '项目组',
    text: '项目组',
    visible: true,
  },
];

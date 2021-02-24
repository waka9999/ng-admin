import { NavListItem } from 'projects/templates/src/public-api';
import { PERMISSIONS } from './permission';

export const NAV_LIST_ITEMS: NavListItem[] = [
  {
    id: 1,
    href: '/admin/users',
    title: '用户',
    text: '用户',
    permission: PERMISSIONS.Admin.users.base,
  },
  {
    id: 2,
    href: '/admin/roles',
    title: '角色',
    text: '角色',
    permission: PERMISSIONS.Admin.roles.base,
  },
  {
    id: 3,
    href: '/admin/groups',
    title: '项目组',
    text: '项目组',
    permission: PERMISSIONS.Admin.groups.base,
  },
];

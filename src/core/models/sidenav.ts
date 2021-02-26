import { NavListItem } from 'projects/templates/src/public-api';
import { PERMISSIONS } from './permission';

export const ADMIN_NAV_LIST_ITEMS: NavListItem[] = [
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

export const PLATFORM_NAV_LIST_ITEMS: NavListItem[] = [
  {
    id: 1,
    href: '/platform/services',
    title: '服务',
    text: '服务',
    permission: PERMISSIONS.Platform.services.base,
  },
  {
    id: 2,
    href: '/platform/credentials',
    title: '凭据',
    text: '凭据',
    permission: PERMISSIONS.Platform.credentials.base,
  },
];

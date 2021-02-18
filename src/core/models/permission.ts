export interface Permission {
  id: number;
  href: string;
  name: string;
  description: string;
  inputDate: string;
  updateDate: string;
}

export const PERMISSIONS_DATA: Permission[] = [
  {
    id: 1,
    href: '/admin/dashboard',
    name: 'dashboard',
    description: '仪表盘',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 2,
    href: '/admin/users',
    name: 'users',
    description: '用户',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 3,
    href: '/admin/roles',
    name: 'roles',
    description: '角色',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 4,
    href: '/admin/groups',
    name: 'groups',
    description: '项目组',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

export const PERMISSIONS = {
  Writeable: 'writeable',
  Admin: 'admin',
  Dashboard: 'dashboard',
  Users: 'users',
  Roles: 'roles',
  Groups: 'groups',
};

export interface Permission {
  id: string;
  href: string;
  name: string;
  description: string;
  inputDate: string;
  updateDate: string;
}

export const PERMISSIONS_DATA: Permission[] = [
  {
    id: '1',
    href: '/admin/dashboard',
    name: 'dashboard',
    description: '仪表盘',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: '2',
    href: '/admin/users',
    name: 'users',
    description: '用户',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: '3',
    href: '/admin/roles',
    name: 'roles',
    description: '角色',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: '4',
    href: '/admin/groups',
    name: 'groups',
    description: '项目组',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

const AdminUsers = {
  base: 'admin_users',
  create: 'admin_users_create',
  details: 'admin_users_details',
};

const AdminRoles = {
  base: 'admin_roles',
};
const AdminGroups = {
  base: 'admin_groups',
};

const Admin = {
  base: 'admin',
  users: AdminUsers,
  roles: AdminRoles,
  groups: AdminGroups,
};

const Dashboard = {
  base: 'dashboard',
};

const Logs = {
  base: 'logs',
};

export const PERMISSIONS = {
  Writable: 'writable',
  Dashboard,
  Logs,
  Admin,
};

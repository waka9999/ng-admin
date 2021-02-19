import { PERMISSIONS } from './permission';

export interface Role {
  id: number;
  name: string;
  description: string;
  permissions: string[];
  readonly: boolean;
  inputDate: string;
  updateDate: string;
}

export const roleAdmin = {
  id: 1,
  name: 'Admin',
  description: '管理员',
  permissions: [
    PERMISSIONS.Writable,
    PERMISSIONS.Admin,
    PERMISSIONS.Dashboard,
    PERMISSIONS.Logs,
    PERMISSIONS.Users,
    PERMISSIONS.Roles,
    PERMISSIONS.Groups,
  ],
  readonly: false,
  inputDate: Date.now().toString(),
  updateDate: Date.now().toString(),
};

export const roleUser = {
  id: 2,
  name: 'User',
  description: '用户',
  permissions: [PERMISSIONS.Dashboard, PERMISSIONS.Logs],
  readonly: false,
  inputDate: Date.now().toString(),
  updateDate: Date.now().toString(),
};

export const roleReadonly = {
  id: 3,
  name: 'Readonly',
  description: '只读',
  permissions: [
    PERMISSIONS.Admin,
    PERMISSIONS.Dashboard,
    PERMISSIONS.Users,
    PERMISSIONS.Roles,
    PERMISSIONS.Groups,
  ],
  readonly: true,
  inputDate: Date.now().toString(),
  updateDate: Date.now().toString(),
};

export const ROLES_DATA: Role[] = [roleAdmin, roleUser, roleReadonly];

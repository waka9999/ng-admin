import { PERMISSIONS } from './permission';

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  readonly: boolean;
  inputDate: string;
  updateDate: string;
}

export const roleAdmin = {
  id: '1',
  name: 'admin',
  description: '管理员',
  permissions: [
    PERMISSIONS.Writable,
    PERMISSIONS.Dashboard.base,
    PERMISSIONS.Logs.base,
    PERMISSIONS.Admin.base,
    PERMISSIONS.Admin.users.base,
    PERMISSIONS.Admin.users.create,
    PERMISSIONS.Admin.users.details,
    PERMISSIONS.Admin.roles.base,
    PERMISSIONS.Admin.groups.base,
  ],
  readonly: false,
  inputDate: Date.now().toString(),
  updateDate: Date.now().toString(),
};

export const roleReadonly = {
  id: '2',
  name: 'readonly',
  description: '只读',
  permissions: [
    PERMISSIONS.Dashboard.base,
    PERMISSIONS.Logs.base,
    PERMISSIONS.Admin.base,
    PERMISSIONS.Admin.users.base,
    PERMISSIONS.Admin.users.create,
    PERMISSIONS.Admin.users.details,
    PERMISSIONS.Admin.roles.base,
    PERMISSIONS.Admin.groups.base,
  ],
  readonly: true,
  inputDate: Date.now().toString(),
  updateDate: Date.now().toString(),
};

export const roleUser = {
  id: '3',
  name: 'user',
  description: '用户',
  permissions: [PERMISSIONS.Dashboard.base, PERMISSIONS.Logs.base],
  readonly: false,
  inputDate: Date.now().toString(),
  updateDate: Date.now().toString(),
};

export const ROLES_DATA: Role[] = [roleAdmin, roleUser, roleReadonly];

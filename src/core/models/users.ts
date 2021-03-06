import { Group, GROUPS_DATA } from './groups';
import { Role, roleAdmin, roleReadonly, roleUser } from './roles';

export interface UserResult {
  user: User;
  result: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  password?: string;
  email: string;
  department: string;
  organization: string;
  role?: Role;
  state: number;
  groups?: Group[];
  inputDate?: string;
  updateDate?: string;
}

export const BLANK_USER: User = {
  id: '',
  name: '',
  username: '',
  email: '',
  department: '',
  organization: '',
  state: -1,
};

export const USERS_DATA: User[] = [
  {
    id: '1',
    name: '哇咔',
    username: 'waka9999',
    password: '123456',
    email: 'foo@bar.com',
    department: '部门',
    organization: '组织',
    role: roleAdmin,
    groups:[GROUPS_DATA[0]],
    state: 1,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: '2',
    name: '只读',
    username: 'readonly',
    password: '123456',
    email: 'foo@bar.com',
    department: '部门',
    organization: '组织',
    role: roleReadonly,
    groups:[GROUPS_DATA[0]],
    state: 1,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: '3',
    name: '用户',
    username: 'user',
    password: '123456',
    email: 'foo@bar.com',
    department: '部门',
    organization: '组织',
    role: roleUser,
    state: 1,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

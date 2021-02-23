import { Group } from './groups';
import { Role, roleAdmin, roleReadonly, roleUser } from './roles';

export interface UserResult {
  user: User;
  result: string;
}

export interface User {
  id: number;
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
  id: -1,
  name: '',
  username: '',
  email: '',
  department: '',
  organization: '',
  state: -1,
};

export const USERS_DATA: User[] = [
  {
    id: 1,
    name: '哇咔',
    username: 'waka9999',
    password: '123456',
    email: 'foo@bar.com',
    department: '部门',
    organization: '组织',
    role: roleAdmin,
    state: 1,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 2,
    name: '只读',
    username: 'readonly',
    password: '123456',
    email: 'foo@bar.com',
    department: '部门',
    organization: '组织',
    role: roleReadonly,
    state: 1,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 3,
    name: '用户',
    username: 'user',
    password: '123456',
    email: 'foo@bar.com',
    department: '部门',
    organization: '组织',
    role: roleUser,
    state: 0,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

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
  orgnazation: string;
  state: number;
  role?: Role;
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
  orgnazation: '',
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
    orgnazation: '组织',
    state: 1,
    role: roleAdmin,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 2,
    name: '用户',
    username: 'user',
    password: '123456',
    email: 'foo@bar.com',
    department: '部门',
    orgnazation: '组织',
    state: 1,
    role: roleUser,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 3,
    name: '只读',
    username: 'readonly',
    password: '123456',
    email: 'foo@bar.com',
    department: '部门',
    orgnazation: '组织',
    state: 1,
    role: roleReadonly,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

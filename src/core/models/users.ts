export interface User {
  id: number;
  name: string;
  username: string;
  password?: string;
  state: number;
  roleId?: number;
  groupsId?: number[];
  inputDate?: string;
  updateDate?: string;
}

export const blankUser = {
  id: 0,
  name: '',
  username: '',
  state: 0,
};

export const USERS_DATA: User[] = [
  {
    id: 1,
    name: '哇咔',
    username: 'waka9999',
    password: '123456',
    state: 1,
    roleId: 1,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 2,
    name: '用户',
    username: 'user',
    password: '123456',
    state: 1,
    roleId: 2,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 3,
    name: '只读',
    username: 'readonly',
    password: '123456',
    state: 1,
    roleId: 3,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

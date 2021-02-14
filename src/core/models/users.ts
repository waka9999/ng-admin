export interface User {
  id: number;
  name: string;
  state: number;
  roleId?: number;
  groupsId?: number[];
  inputDate: string;
  updateDate: string;
}

export const USERS_DATA: User[] = [
  {
    id: 1,
    name: 'waka9999',
    state: 1,
    roleId: 1,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 2,
    name: 'user',
    state: 1,
    roleId: 2,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 3,
    name: 'readonly',
    state: 1,
    roleId: 3,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

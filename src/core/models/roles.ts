import { Permission } from './permission';

export interface Role {
  id: number;
  name: string;
  permissionsId: number[];
  readonly: boolean;
  inputDate: string;
  updateDate: string;
}

export const ROLES_DATA: Role[] = [
  {
    id: 1,
    name: 'Admin',
    permissionsId: [1, 2, 3, 4],
    readonly: false,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 2,
    name: 'User',
    permissionsId: [1, 2],
    readonly: false,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 3,
    name: 'Readonly',
    permissionsId: [1, 2, 3, 4],
    readonly: true,
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

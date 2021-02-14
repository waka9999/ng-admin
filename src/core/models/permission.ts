export interface Permission {
  id: number;
  href: string;
  title: string;
  text: string;
  inputDate: string;
  updateDate: string;
}

export const PERMISSIONS_DATA: Permission[] = [
  {
    id: 1,
    href: '/admin/dashboard',
    title: '仪表盘',
    text: '仪表盘',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 2,
    href: '/admin/users',
    title: '用户',
    text: '用户',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 3,
    href: '/admin/roles',
    title: '角色',
    text: '角色',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: 4,
    href: '/admin/groups',
    title: '项目组',
    text: '项目组',
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

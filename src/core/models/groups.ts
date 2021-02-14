export interface Group {
  id: number;
  name: string;
  department: string;
  organization: string;
  servicesId?: number[];
  inputDate: string;
  updateDate: string;
}

export const GROUPS_DATA: Group[] = [
  {
    id: 1,
    name: '研发',
    department: '容器服务',
    organization: '研发中心',
    servicesId: [1],
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

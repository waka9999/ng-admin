export interface Group {
  id: string;
  name: string;
  description: string;
  memo: string;
  servicesId?: number[];
  inputDate: string;
  updateDate: string;
}

export const GROUPS_DATA: Group[] = [
  {
    id: '1',
    name: 'development',
    description: '研发',
    memo: 'Service-1,Service-2,Service-3',
    servicesId: [1],
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
  {
    id: '2',
    name: 'operations',
    description: '运维',
    memo: '服务-1,服务-2,服务-3',
    servicesId: [1],
    inputDate: Date.now().toString(),
    updateDate: Date.now().toString(),
  },
];

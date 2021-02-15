export interface Config {
  name: string;
  theme: string;
  pageSize: number;
}

export const defaultConfig: Config = {
  name: 'Ng Admin',
  theme: 'ng-light-theme',
  pageSize: 10,
};

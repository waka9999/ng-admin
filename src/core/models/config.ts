export interface Config {
  name: string;
  version: string;
  releaseDate: string;
  theme: string;
  pageSize: number;
}

export const defaultConfig: Config = {
  name: 'Ng Admin',
  version: '1.0.0',
  releaseDate: Date.now().toString(),
  theme: 'ng-light-theme',
  pageSize: 10,
};

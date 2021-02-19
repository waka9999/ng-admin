import { Error } from 'projects/templates/src/public-api';
export const NOT_FOUND: Error = {
  code: '404',
  message: 'Page Not Found',
  text: '访问的页面不存在',
  href: '/about',
};

export const UNAUTHORIZED: Error = {
  code: '401',
  message: 'Unauthorized',
  text: '未授权访问的页面',
  href: '/about',
};

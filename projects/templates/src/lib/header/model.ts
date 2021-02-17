import { User } from '@core/models/users';

export interface HeaderNavbarItem {
  id: number;
  href: string;
  title: string;
  text: string;
}
export interface Header {
  name: string | undefined;
  navbarItems: HeaderNavbarItem[];
}

export interface HeaderBrand {
  name?: string;
  icon?: string;
}

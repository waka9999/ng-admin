export interface HeaderNavbarItem {
  id: number;
  href: string;
  title: string;
  text: string;
}
export interface HeaderUser {
  username: string;
}

export interface Header {
  navbarItems: HeaderNavbarItem[];
  user: HeaderUser;
}

export interface HeaderBrand {
  name?: string;
  icon?: string;
}

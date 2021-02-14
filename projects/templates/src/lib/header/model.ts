export interface HeaderNavbarItem {
  id: number;
  href: string;
  title: string;
  text: string;
}

export interface HeaderUserMenuItem {
  id: number;
  href: string;
  title: string;
  text: string;
}

export interface HeaderUser {
  username: string;
  menuItems: HeaderUserMenuItem[];
}

export interface Header {
  navbarItems: HeaderNavbarItem[];
  user: HeaderUser;
}

export interface HeaderBrand {
  icon?: string;
  name?: string;
}

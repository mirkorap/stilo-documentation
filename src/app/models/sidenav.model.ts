export interface SidenavItem {
  title: string;
  children: SidenavItemLink[];
}

export interface SidenavItemLink {
  title: string;
  link: string;
  externalLink?: boolean;
}

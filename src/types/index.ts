export interface Launcher {
  id: string;
  name: string;
  description: string;
  bgClass: string;
  bgImage?: string;
  accentColor: string;
  glowClass: string;
  textClass: string;
  iconBg: string;
  navBg: string;
  navTextClass: string;
  topBarBg: string;
  wallpaperUrl?: string;
}

export interface AppIcon {
  id: string;
  name: string;
  icon: string;
  url?: string;
  emoji?: string;
  color: string;
}

export interface SidebarItem {
  label: string;
  icon: string;
  url?: string;
}

export type ActiveTab = 'home' | 'guests' | 'global' | 'esmart' | 'paradise' | 'esonewworld';

export interface Theme {
  id: string;
  name: string;
  bodyClass: string;
  label: string;
}

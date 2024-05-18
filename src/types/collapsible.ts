export interface MenuItem {
  path?: string;
  label: string;
  submenu?: MenuItem[];
}

export interface CollapsibleMenuItemProps extends MenuItem {
  onToggle: () => void;
  isOpen: boolean;
  pathname: string;
}

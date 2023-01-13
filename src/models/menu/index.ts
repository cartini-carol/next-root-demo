import { Commons } from "models";

export interface MenuInfo extends Commons {
  name: string;
  sortNumber: number;
}

interface MenuListInfo extends MenuInfo {
  menus: Array<MenuInfo>;
}

export default MenuListInfo;

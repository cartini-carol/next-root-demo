import MenuListInfo from "models/menu";
import { getApi } from "utils/axios";

const originUrl = "/admin";

const fetchMenuList = async (): Promise<MenuListInfo[]> => {
  const url = `${originUrl}/bosmenu`;

  const {
    data: { rows },
  } = await getApi(url);

  return rows;
};

export { fetchMenuList };

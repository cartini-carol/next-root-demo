import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import ArrowDown from "general/arrow-down.svg";
import ArrowUp from "general/arrow-up.svg";
import Logo from "logo/custom-logo.svg";

import { fetchMenuList } from "api/menu";
import theme from "components/theme";
import { MenuProps, MENUS } from "contants/menu";
import {
  DropdownBox,
  DropdownIcon,
  LogoBox,
  MenuBox,
  MenuIcon,
  MenuTitle,
  SubMenuBox,
  SubMenuItem,
} from "./index.styled";

const Menu = () => {
  const { asPath } = useRouter();
  const { data } = useQuery("menu", fetchMenuList);

  const [menus, setMenus] = useState<Array<MenuProps>>();
  const [open, setOpen] = useState<string>();

  const handleClick = (value: string) => {
    console.log(value);
    setOpen((old) => (old !== value ? value : undefined));
  };

  useEffect(() => {
    if (data) {
      const list = MENUS.map((menu) => {
        const dbMenu = data.find(
          (item) => item.name.replace(/ /g, "") === menu.name.replace(/ /g, "")
        );
        const children = menu.children.reduce((a, b) => {
          const subMenu = dbMenu.menus.find(
            (item) => item.name.replace(/ /g, "") === b.name.replace(/ /g, "")
          );
          if (subMenu) {
            a.push({ ...b, auth: subMenu.id, order: subMenu.sortNumber });
          }
          return a;
        }, []);
        return { ...menu, auth: dbMenu.id, order: dbMenu.sortNumber, children };
      });

      setMenus(list);
    }
  }, [data]);

  useEffect(() => {
    console.log(asPath);
    if (menus?.length && asPath) {
      const path = asPath.split("/")[1];
      const id = menus.find((menu) => menu.path === path)?.id || menus[0].id;
      setOpen(id);
    }
  }, [asPath, menus]);

  return (
    <>
      <LogoBox>
        <Link href="/">
          <Logo width={182} height={24} fill={theme.colors.white} />
        </Link>
      </LogoBox>
      {menus &&
        menus!.map((menu: any) => {
          return (
            <DropdownBox key={menu.id}>
              <MenuBox key={menu.id} onClick={() => handleClick(menu.id)}>
                <MenuIcon>{menu.icon}</MenuIcon>
                <MenuTitle>{menu.name}</MenuTitle>
                <DropdownIcon>
                  {open === menu.id ? (
                    <ArrowUp className="dropdown" />
                  ) : (
                    <ArrowDown className="dropdown" />
                  )}
                </DropdownIcon>
              </MenuBox>
              <SubMenuBox>
                {menu.children.map((sub: any) => (
                  <Link
                    href={`/${menu.path}${sub.path ? `/${sub.path}` : ""}`}
                    passHref
                  >
                    <SubMenuItem
                      key={sub.id}
                      open={menu.id === open}
                      aria-current={
                        asPath ===
                        `/${menu.path}${sub.path ? `/${sub.path}` : ""}`
                          ? "page"
                          : null
                      }
                    >
                      {sub.name}
                    </SubMenuItem>
                  </Link>
                ))}
              </SubMenuBox>
            </DropdownBox>
          );
        })}
    </>
  );
};

export default Menu;

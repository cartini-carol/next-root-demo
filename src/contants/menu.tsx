import Box from "lnb/Box.svg";
import Buliding from "lnb/Buliding.svg";
import Cart from "lnb/Cart.svg";
import Chart from "lnb/Chart.svg";
import Discount from "lnb/Discount.svg";
import Paper from "lnb/Paper.svg";
import Person from "lnb/Person.svg";
import Report from "lnb/Report.svg";
import Send from "lnb/Send.svg";
import Setting from "lnb/Setting.svg";
import Vendor from "lnb/Vendor.svg";

import theme from "components/theme";

interface MenuItemProps {
  id: string;
  name: string;
  path: string;
  auth?: number;
  order?: number;
}

export interface MenuProps extends MenuItemProps {
  icon?: React.ReactNode;
  children?: MenuItemProps[];
}

const opts = {
  stroke: theme.colors.gray6,
  width: 24,
  height: 24,
};

const MENUS: Array<MenuProps> = [
  {
    id: "100000",
    name: "대시보드",
    icon: <Chart {...opts} />,
    path: "dashboard",
    children: [
      { id: "100010", name: "대시보드", path: "" },
      { id: "100020", name: "대시보드(TV)", path: "tv" },
    ],
  },
  {
    id: "110000",
    name: "리포트",
    icon: <Report {...opts} />,
    path: "report",
    children: [{ id: "110010", name: "데이터 관리", path: "data" }],
  },
  {
    id: "120000",
    name: "주문관리",
    icon: <Paper {...opts} />,
    path: "order",
    children: [
      {
        id: "120010",
        name: "주문 현황",
        path: "list",
      },
      { id: "120020", name: "반품 처리", path: "return" },
      {
        id: "120030",
        name: "매입매출현황",
        path: "transaction",
      },
    ],
  },
  {
    id: "130000",
    name: "회원관리",
    icon: <Person {...opts} />,
    path: "customer",
    children: [
      {
        id: "130010",
        name: "회원 현황",
        path: "list",
      },
      {
        id: "130020",
        name: "상담 처리",
        path: "inqury",
      },
    ],
  },
  {
    id: "140000",
    name: "제품/재고 관리",
    icon: <Box {...opts} />,
    path: "catalog",
    children: [
      {
        id: "140010",
        name: "제품 분류",
        path: "category",
      },
      {
        id: "140020",
        name: "제품 그룹",
        path: "group",
      },
      { id: "140030", name: "제품 현황", path: "list" },
      { id: "140040", name: "재고 현황", path: "stock" },
      {
        id: "140050",
        name: "입고 현황",
        path: "warehousing",
      },
    ],
  },
  {
    id: "150000",
    name: "상품관리",
    icon: <Cart {...opts} />,
    path: "product",
    children: [
      {
        id: "150010",
        name: "상품 분류",
        path: "category",
      },
      {
        id: "150020",
        name: "배송 템플릿",
        path: "delivery-templates",
      },
      { id: "150030", name: "판매상품 운영", path: "list" },
    ],
  },
  {
    id: "160000",
    name: "장착점관리",
    icon: <Buliding {...opts} />,
    path: "repairshop",
    children: [
      {
        id: "160010",
        name: "장착점 현황",
        path: "list",
      },
      {
        id: "160020",
        name: "장착 매입가 현황",
        path: "purchase",
      },
      {
        id: "160030",
        name: "장착점 상담 처리",
        path: "inqury",
      },
    ],
  },
  {
    id: "170000",
    name: "마케팅관리",
    icon: <Discount {...opts} />,
    path: "marketing",
    children: [
      { id: "170010", name: "이벤트 운영", path: "event" },
      { id: "170020", name: "공지 사항", path: "notice" },
      { id: "170030", name: "쿠폰 운영", path: "coupon" },
      { id: "170040", name: "배너 운영", path: "banner" },
      { id: "170050", name: "리뷰 현황", path: "review" },
    ],
  },
  {
    id: "180",
    name: "발송관리",
    icon: <Send {...opts} />,
    path: "delivery",
    children: [
      {
        id: "180010",
        name: "템플릿 운영",
        path: "template",
      },
      {
        id: "180020",
        name: "발송 현황",
        path: "list",
      },
    ],
  },
  {
    id: "190000",
    name: "매입처관리",
    icon: <Vendor {...opts} />,
    path: "vendor",
    children: [{ id: "190010", name: "매입처 현황", path: "list" }],
  },
  {
    id: "200000",
    name: "운영관리",
    icon: <Setting {...opts} />,
    path: "admin",
    children: [
      { id: "200010", name: "사용자 현황", path: "list" },
      {
        id: "200020",
        name: "권한 운영",
        path: "auth",
      },
      { id: "200030", name: "이용약관", path: "terms" },
      { id: "200040", name: "앱버전", path: "app-version" },
      { id: "200050", name: "FAQ", path: "faq" },
    ],
  },
];

export { MENUS };

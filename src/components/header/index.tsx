import { useRouter } from "next/router";
import { HeaderBtnBox, HeaderTitleBox } from "./index.styled";

const Header = () => {
  const { asPath } = useRouter();

  // const { data: menuList } = useQuery("Menu");

  // useEffect(() => {
  //   console.log(asPath, menuList);
  // }, [asPath, menuList]);

  return (
    <>
      <HeaderTitleBox>header</HeaderTitleBox>
      <HeaderBtnBox>
        carol
        <button>로그아웃</button>
      </HeaderBtnBox>
    </>
  );
};

export default Header;

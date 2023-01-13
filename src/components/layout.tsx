import { dehydrate, QueryClient } from "react-query";

import { fetchMenuList } from "api/menu";
import Menu from "./menu";

import { Container, Content, GNB, LNB, Main } from "./styles/sharedstyles";
import Header from "./header";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Main>
        <LNB>
          <Menu />
        </LNB>
        <GNB>
          <Header />
        </GNB>
        <Content>{children}</Content>
      </Main>
    </Container>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("menu", fetchMenuList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Layout;

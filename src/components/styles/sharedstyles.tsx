import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  min-width: 100vw;
`;

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template:
    "menu header header header header header"
    "menu main main main main main"
    "menu main main main main main";
  gap: 0;
  grid-template-columns: [menu] 260px;
  grid-template-rows: [header] 72px;

  background-color: #f3f3f3;
  box-shadow: ${({ theme }) => theme.shadow.dp16};
`;

interface FlexGapProps {
  gap?: number;
}

const ColDiv = styled.div<FlexGapProps>`
  display: flex;
  flex-direction: column;
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
  position: relative;
`;

const RowDiv = styled.div<FlexGapProps>`
  display: flex;
  flex-direction: column;
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap}px;
    `}
  position: relative;
`;

const LNB = styled.div`
  grid-area: menu;
  /* width: 260px; */
  background-color: ${({ theme }) => theme.colors.gray1};
`;

const GNB = styled(ColDiv)`
  grid-area: header;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 10px;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Content = styled(ColDiv)`
  grid-area: main;
  padding: 20px;
  align-items: flex-start;
  overflow: auto;
`;

export { Container, Main, LNB, GNB, Content, RowDiv, ColDiv };

import { RowDiv } from "components/styles/sharedstyles";
import styled from "styled-components";

const HeaderTitleBox = styled(RowDiv)`
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  order: 0;

  flex: 8;
`;

const HeaderBtnBox = styled(RowDiv)`
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  flex: 1;
`;

export { HeaderTitleBox, HeaderBtnBox };

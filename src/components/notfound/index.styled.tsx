import { ColDiv } from "components/styles/sharedstyles";
import styled from "styled-components";

const NotFoundBox = styled(ColDiv)`
  justify-content: center;
  align-items: center;

  gap: 32px;

  width: 100%;
  height: 100%;
`;

const NotFoundContent = styled(ColDiv)`
  align-items: center;

  gap: 16px;
  color: ${({ theme }) => theme.colors.gray3};
  cursor: default;
`;

const NotFoundText = styled.div`
  ${({ theme }) => theme.typo.bd3r};
  text-align: center;
`;

export { NotFoundBox, NotFoundContent, NotFoundText };

import { ColDiv, RowDiv } from "components/styles/sharedstyles";
import styled from "styled-components";

/**
 * lnb style
 */
const LogoBox = styled(ColDiv)`
  padding: 24px;
  gap: 10px;
  height: 72px;
  width: 100%;
  align-items: stretch;
`;

const DropdownBox = styled.div`
  position: relative;
  width: 100%;
`;

const MenuBox = styled(RowDiv)`
  align-items: center;
  width: 100%;
  padding: 20px 8px 20px 16px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray6};
  ${({ theme }) => theme.typo.bd3m};

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none;
  cursor: pointer;

  stroke: ${({ theme }) => theme.colors.gray6};
  & svg.dropdown {
    fill: ${({ theme }) => theme.colors.gray6};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    & svg {
      &:not(.dropdown) {
        stroke: ${({ theme }) => theme.colors.white};
      }
      &.dropdown {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const MenuIcon = styled.div`
  flex: 1;
`;

const MenuTitle = styled.div`
  flex: 10;
`;

const DropdownIcon = styled.div`
  flex: 1;
`;

const SubMenuBox = styled(ColDiv)`
  position: relative;
  align-items: flex-start;
  padding: 0;
  margin: 0 10px;
  ${({ theme }) => theme.typo.bd3r};

  & a {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  & div[aria-current] {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const SubMenuItem = styled(RowDiv)<{ open?: boolean; active?: boolean }>`
  width: 100%;
  align-items: center;
  cursor: pointer;
  gap: 16px;
  border-radius: 8px;
  height: ${({ open }) => (open ? "48px" : 0)};
  color: ${({ theme }) => theme.colors.gray6};
  box-sizing: border-box;
  padding: ${({ open }) => (open ? "12px 8px 12px 40px" : "0 0 0 40px")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: all 0.3s, opacity 0.1s, padding 0.1s ease-in;

  &:hover {
    color: ${({ theme, active }) =>
      active ? theme.colors.black : theme.colors.white};
  }
`;

export {
  LogoBox,
  DropdownBox,
  MenuBox,
  MenuIcon,
  MenuTitle,
  DropdownIcon,
  SubMenuBox,
  SubMenuItem,
};

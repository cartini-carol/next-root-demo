import theme from "components/theme";
import NotFoundIcon from "illust/404-error.svg";
import NotFoundTextIcon from "illust/404-text.svg";

import { NotFoundBox, NotFoundContent, NotFoundText } from "./index.styled";

const NotFound = () => {
  return (
    <NotFoundBox>
      <NotFoundIcon />
      <NotFoundContent>
        <NotFoundTextIcon fill={theme.colors.gray3} />
        <NotFoundText>
          페이지를 찾을 수 없습니다. 다시 시도해주세요.
        </NotFoundText>
      </NotFoundContent>
    </NotFoundBox>
  );
};

export default NotFound;

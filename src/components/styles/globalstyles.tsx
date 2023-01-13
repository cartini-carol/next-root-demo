import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    position: relative;
    color: ${({ theme }) => theme.colors.black};
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.family};
    font-style: ${({ theme }) => theme.fonts.style};
    /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    position: relative;
  }
`;

export default GlobalStyle;

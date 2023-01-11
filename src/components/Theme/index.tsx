import { DefaultTheme } from "styled-components";

const fw = "font-weight";
const fs = "font-size";
const lh = "line-height";

const b = "bold";
const m = "medium";
const r = "regular";

/**
 * shadow
 */
const bs = "box-shadow";

const theme: DefaultTheme = {
  fonts: {
    family: "Pretendard",
    style: "normal",
  },
  colors: {
    primary1: "#380A8A",
    primary2: "#48189E",
    /**
     * @color default
     */
    primary3: "#7B3FF1",
    primary4: "#9564F4",
    primary5: "#B08CF7",
    /**
     * @color hover
     */
    primary6: "#CAB2F9",
    primary7: "#E5D9FC",
    primary8: "#F2EBFE",
    primary9: "#F7F3FF",

    black: "#000000",
    /**
     * @color text
     */
    gray1: "#242426",
    gray2: "#464646",
    gray3: "#6E6E6E",
    gray4: "#8C8C8C",
    gray5: "#AAAAAA",
    /**
     * @color input border
     */
    gray6: "#CDCDCD",
    /**
     * @color border
     */
    gray7: "#DCDCDC",
    gray8: "#EFEFEF",
    gray9: "#F8F8F8",
    white: "#FFFFFF",
    /**
     * @TODO 확인 후 대체할 것
     */
    secondary9: "#F1FFFE",

    red1: "#BE0000",
    red2: "#D20000",
    /**
     * @color default
     */
    red3: "#E60000",
    red4: "#FF6464",
    red5: "#FEE5E6",
    red6: "#FFF8F7",

    pink1: "#D7052D",
    /**
     * @color default
     */
    pink2: "#FF2D55",
    pink3: "#FF87AF",
    pink4: "#FFB9E1",
    pink5: "#FFEBFF",

    orange1: "#FF9500",
    /**
     * @color default
     */
    orange2: "#FFA905",
    orange3: "#FFBF66",
    orange4: "#FFDFB3",
    orange5: "#FFF4E5",

    yellow1: "#E1AE00",
    /**
     * @color default
     */
    yellow2: "#FFCC00",
    yellow3: "#FFE066",
    yellow4: "#FFF0B3",
    yellow5: "#FFF9E2",

    green1: "#006E1D",
    /**
     * @color default
     */
    green2: "#009645",
    green3: "#86DF9C",
    green4: "#C2EFCE",
    green5: "#E4FBEA",

    teal1: "#3CAADC",
    /**
     * @color default
     */
    teal2: "#5AC8FA",
    teal3: "#93D8FF",
    /**
     * @name Teal4
     */
    teal4: "#CDEEFE",
    /**
     * @name Teal5
     */
    teal5: "#E6F7FE",

    blue1: "#005CE1",
    /**
     * @color default
     */
    blue2: "#007AFF",
    blue3: "#52A5FF",
    blue4: "#B3D7FF",
    blue5: "#E5F2FF",

    mint1: "#284A5E",
    mint2: "#3B8C92",
    /**
     * @default
     */
    mint3: "#78BEC2",
    mint4: "#BADEE0",
    mint5: "#E8F9FA",
    shadow: "#19191E",
  },
  typo: {
    hd1b: `${fw}: ${b}; ${fs}: 32px; ${lh}: 48px`,
    hd2b: `${fw}: ${b}; ${fs}: 24px; ${lh}: 32px`,
    hd3b: `${fw}: ${b}; ${fs}: 20px; ${lh}: 32px`,
    hd4b: `${fw}: ${b}; ${fs}: 18px; ${lh}: 28px`,
    hd5b: `${fw}: ${b}; ${fs}: 16px; ${lh}: 24px`,
    hd6b: `${fw}: ${b}; ${fs}: 14px; ${lh}: 24px`,
    bd1m: `${fw}: ${m}; ${fs}: 18px; ${lh}: 28px`,
    bd2m: `${fw}: ${m}; ${fs}: 16px; ${lh}: 24px`,
    bd3m: `${fw}: ${m}; ${fs}: 14px; ${lh}: 24px`,
    bd4m: `${fw}: ${m}; ${fs}: 12px; ${lh}: 18px`,
    bd1r: `${fw}: ${r}; ${fs}: 18px; ${lh}: 28px`,
    bd2r: `${fw}: ${r}; ${fs}: 16px; ${lh}: 24px`,
    bd3r: `${fw}: ${r}; ${fs}: 14px; ${lh}: 24px`,
    bd4r: `${fw}: ${r}; ${fs}: 12px; ${lh}: 18px`,
    bt1m: `${fw}: ${m}; ${fs}: 18px; ${lh}: 22px`,
    bt2m: `${fw}: ${m}; ${fs}: 16px; ${lh}: 20px`,
    bt3m: `${fw}: ${m}; ${fs}: 14px; ${lh}: 16px`,
    bt4m: `${fw}: ${m}; ${fs}: 12px; ${lh}: 14px`,
  },
  shadow: {
    dp1: `${bs}: 0px 1px 1px rgba(25, 25, 30, ${5 / 100})`,
    dp2: `${bs}: 0px 2px 10px rgba(25, 25, 30, ${10 / 100})`,
    dp4: `${bs}: 0px 4px 20px rgba(25, 25, 30, ${15 / 100})`,
    dp8: `${bs}: 4px 4px 40px rgba(25, 25, 30, ${15 / 100})`,
    dp16: `${bs}: 0px 8px 40px rgba(25, 25, 30, ${20 / 100})`,
  },
};

export default theme;

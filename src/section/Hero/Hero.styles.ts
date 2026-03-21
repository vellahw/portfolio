import { css } from "../../../styled-system/css";

// 배너 영역 =======================================
export const bannerSection = css({
  w: "100%",
  h: "100svh",
  m: "0 auto",
  pos: "relative",
});

export const roundTxtEl = css({
  rounded: "5555555px",
  border: "1px solid",
  borderColor: "border",
  color: "primary",
  bg: "gray100",
  textAlign: "center",
  whiteSpace: "nowrap",
  p: "0 3.4rem",
  fontWeight: 500,
  pos: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&._dark": {
    borderColor: "primary",
    bg: "#f0eeed39",
  },

  sm: {
    w: "fit-content",
    height: "6rem",
    fontSize: "2.8rem",
  },
  md: {
    w: "auto",
    height: "6.2rem",
    fontSize: "2.6rem",
  },
});

export const sloganTxt = css({
  top: "26rem",

  sm: {
    left: "50%",
    transform: "translate3d(-50%, 0, 0)",
  },
  md: {
    left: "50%",
  },
  lg: {
    left: "calc(50% - 39vw)",
    transform: "none",
  },
});

export const positionTxt = css({
  left: "50%",
  transform: "translateX(-50%)",

  _after: {
    content: '""',
    pos: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    w: "1px",
    bg: "border",

    sm: {
      h: "33rem",
      bottom: "calc(-33rem - 1px)",
    },

    md: {
      h: "25rem",
      bottom: "calc(-25rem - 1px)",
    },
  },

  sm: {
    bottom: "24rem",
  },
  md: {
    bottom: "16rem",
  },
});

export const myName = css({
  pos: "absolute",
  top: "50%",
  left: "50%",

  md: {
    display: "flex",
    "& .last": {
      pl: "5rem",
    },
  },
  lg: {
    display: "unset",
  },

  "& img": {
    sm: {
      maxW: "320px",
    },
    md: {
      maxW: "80vw",
    },
    lg: {
      maxW: "unset",
    },
  },
});

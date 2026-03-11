import { css } from "../../styled-system/css";

export const backDrop = css({
  position: "fixed",
  inset: 0,
  bg: "rgba(0,0,0,0.4)",
  zIndex: 998,
});

export const modalEl = css({
  position: "fixed",
  top: "50%",
  left: "50%",
  bg: "white",
  // bg: "#dddddd",
  borderRadius: "2rem",
  p: "2.4rem",
  zIndex: 999,
  w: "100%",

  sm: {
    maxW: "340px",
    h: "auto",
  },
  md: {
    maxW: "101.56rem",
  },
  lg: {
    maxW: "1300px",
    h: "700px",
  },
});

export const closeBtn = css({
  pos: "absolute",
  // top: "-2.4rem",
  zIndex: 2,
  sm: {
    top: "-4.8rem",
    right: 0,
    w: "24px",
    h: "24px",

    "& svg": {
      w: "100%",
      h: "100%",
    },
  },
  md: {
    right: "-7rem",
    top: "1rem",
    w: "unset",
    h: "unset",

    "& svg": {
      w: "unset",
      h: "unset",
    },
  },
  lg: {
    right: "-5rem",
  },
});

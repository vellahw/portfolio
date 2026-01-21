import { css } from "../../styled-system/css";

export const header = css({
  pos: "fixed",
  left: "50%",
  transform: "translate3d(-50%, 0, 0)",
  zIndex: 999,

  borderBottom: "2px solid",
  borderBottomColor: "black",

  sm: {
    // top: ".9rem",
    w: "100%",
    h: "7.8rem",
    bg: "#f9f9f8",
  },

  md: {
    top: "1.9rem",
    h: "5.4rem",
    p: "3rem",
    bg: "#f9f9f881",
    borderTop: "1px solid",
    w: "90%",
  },

  lg: {},
});

export const headerContainer = css({
  display: "flex",
  h: "100%",
  alignItems: "center",
  pos: "relative",
});

export const mail = css({
  fontFamily: "montserrat",
  fontWeight: 500,
  fontSize: "1.5rem",
  pos: "absolute",
  top: "50%",
  transform: "translate3d(0, -50%, 0)",
  left: "3.5rem",
  opacity: 0.8,

  sm: {
    display: "none",
  },
  "@media screen and (min-width: 691px)": {
    display: "unset",
  },
});

export const navigator = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  m: "0 auto",
  h: "100%",
  // rounded: "55555px",
  // bg: "#ffffffe3",
  // boxShadow: "#15151a12 0px 2px 24px",
  // backdropFilter: "blur(14px)",
  // border: "1px solid",
  // borderColor: "#82828290",
  minW: "275px",

  sm: {
    w: "80%",
    gap: "3.5rem",
    fontSize: "14px",
  },
  md: {
    w: "54rem",
    gap: "4rem",
    fontSize: "2rem",
  },
  lg: {
    fontSize: "1.8rem",
  },
});

export const menuWrapper = css({
  display: "flex",
  alignItems: "center",
});

export const slash = css({
  fontFamily: "darker",
  fontSize: "1.8rem",
  opacity: 0.7,

  sm: {
    ml: "3.5rem",
  },
  md: {
    ml: "4rem",
  },
});

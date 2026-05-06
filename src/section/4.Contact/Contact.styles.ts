import { css } from "../../../styled-system/css";

export const contactSection = css({
  borderRight: "1px solid",
  borderLeft: "1px solid",
  borderLeftColor: "border",
  borderRightColor: "border",

  sm: {
    p: "15rem 2rem 5rem 2rem",
  },
  md: {
    p: "20rem 0 5rem 0",
  },
});

export const contactTitleContainer = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pos: "relative",
  borderBottom: "1px solid",
  borderBottomColor: "border",
  pb: "2.5rem",

  sm: {
    m: "0",
  },
  md: {
    m: "0 2.5rem",
  },
});

export const contactTitle = css({
  fontFamily: "darker",
  fontSize: "4rem",
  fontWeight: "700",
  letterSpacing: "-0.12rem",
});

export const rightContactTitle = css({
  fontSize: "2.4rem",
  fontFamily: "pretendard",
  fontWeight: "700",
  mt: ".8rem",
});

export const contactMark = css({
  lineHeight: 1,
  fontSize: "6.9rem",
  fontFamily: "darker",
  pos: "absolute",
  top: "-.9rem",
  left: "20rem",
});

export const mailContainer = css({
  pos: "relative",
  m: "20rem 0",
});

export const contactMail = css({
  fontFamily: "montserrat",
  fontWeight: 700,
  w: "fit-content",
  ml: 0,
  display: "block",
  pos: "relative",
  left: "50%",
  transform: "translate3d(-50%, 0, 0)",

  sm: {
    fontSize: "6vw",
  },
  lg: {
    fontSize: "9rem",
  },
});

export const footerTxt = css({
  fontSize: "1.4rem",
  opacity: 0.8,
  w: "100%",
  textAlign: "center",
});

import { css } from "../../../styled-system/css";

export const profileSection = css({
  border: "1px solid",
  borderColor: "border",
  mt: "9rem",

  sm: {
    p: "5.8rem 3rem 0 3rem",
  },
  md: {
    p: "5.8rem 5.5rem 0 5.5rem",
  },
});

export const profileTitleContainer = css({
  display: "flex",
  justifyContent: "space-between",
  pos: "relative",
  zIndex: "2",
  sm: {
    flexDirection: "column",
  },
  md: {
    flexDirection: "row",
  },
});

export const profileTitle = css({
  fontFamily: "darker",
  fontSize: "4rem",
  fontWeight: "700",
  letterSpacing: "-0.12rem",
});

export const profileHelloTitleContainer = css({
  sm: {
    w: "100%",
    fontSize: "4rem",
    alignItems: "flex-end",
    textAlign: "left",
    mt: "8rem",
  },

  md: {
    w: "55%",

    fontSize: "4.8rem",
    alignItems: "unset",
    textAlign: "unset",
    mt: "unset",

    "& .hello": {
      pl: "3.8rem",
    },

    "& .name": {
      pl: "20rem",
    },
  },

  lg: {
    w: "50%",

    fontSize: "5.8rem",

    "& .name": {
      pl: "24.7rem",
    },
  },
});

export const profileBodyContainer = css({
  display: "flex",

  sm: {
    flexDirection: "column",
    mt: "5rem",
  },
  md: {
    flexDirection: "row",
  },
  lg: {
    mt: "0",
  },
});

export const myProfileImg = css({
  mr: "3.8rem",

  sm: {
    w: "100%",
    h: "fit-content",
  },
  md: {
    w: "50%",
    h: "fit-content",
  },
  lg: {
    w: "60.9rem",
    h: "70.2rem",
  },
});

export const profileBodyWrapper = css({
  mt: "5.1rem",
  pos: "relative",

  _after: {
    content: '""',
    h: "1px",
    bg: "border",
    display: "block",
    pos: "absolute",
    top: "0",
    right: "0",
  },

  sm: {
    w: "100%",
    p: "5.8rem 0 0 0",

    _after: {
      w: "90%",
    },
  },

  md: {
    w: "50%",
    p: "5.8rem 0 0 3.8rem",

    _before: {
      content: '""',
      w: "1px",
      h: "97%",
      bg: "border",
      display: "block",
      pos: "absolute",
      bottom: "0",
      left: "0",
    },

    _after: {
      w: "95%",
    },
  },
});

export const mark = css({
  lineHeight: 1,
  fontSize: "6.9rem",
  fontFamily: "darker",
  pos: "relative",
  top: "-9.1rem",

  sm: {
    left: "0rem",
  },
  md: {
    left: "-5.05rem",
  },
});

export const IntroduceContainer = css({
  mb: "5.3rem",
  mt: "-7.8rem",

  "& p": {
    lineHeight: "2",
    pos: "relative",
    mb: "1.4rem",

    sm: {
      fontSize: "16px",
    },
    md: {
      fontSize: "2rem",
    },
  },
});

export const IntroduceBold = css({
  fontWeight: 600,
  pos: "relative",
  background: "linear-gradient(180deg,rgba(255,255,255,0) 50%, #6c7ccd2d 50%)",
});

export const profileLink = css({
  rounded: "55555px",
  minW: "116px",
  bg: "text",
  color: "white",
  border: "none",

  sm: {
    w: "18rem",
    h: "5rem",
    fontSize: "14px",
  },
  md: {
    w: "16rem",
    h: "4.6rem",
    fontSize: "1.8rem",
  },
});

export const history = css({
  gap: "6rem",
  m: "6.2rem 0 5.8rem 0",

  sm: {
    fontSize: "14px",
  },
  md: {
    fontSize: "2rem",
  },
});

export const historyTitle = css({
  fontWeight: 600,
  mb: "3rem",

  sm: {
    fontSize: "16px",
  },
  md: {
    fontSize: "2.4rem",
  },
});

export const historyContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
});

export const eachHistory = css({
  display: "flex",
  justifyContent: "space-between",
  mb: "1rem",

  "& .date": {
    sm: {
      maxW: "unset",
      lineHeight: "1.4",
    },

    md: {
      maxW: "50%",
      lineHeight: "1",
    },

    lg: {
      minW: "40%",
      maxW: "unset",
    },
  },

  "& .group": {
    fontWeight: 600,
    textAlign: "right",

    sm: {
      maxW: "43%",
    },

    md: {
      maxW: "50%",
    },

    lg: {
      maxW: "unset",
    },
  },

  "& .job": {
    fontSize: "1.6rem",
  },
});

export const date5 = css({
  opacity: 0.8,

  sm: {
    lineHeight: "1.5",
    display: "flex",
  },
  md: {
    pl: "15rem",
    display: "unset",
    lineHeight: "1",
  },
});

export const smallHistoryTxt = css({
  fontWeight: 400,
  mt: "1rem",

  sm: {
    fontSize: "12px",
  },
  md: {
    fontSize: "1.5rem",
  },
});

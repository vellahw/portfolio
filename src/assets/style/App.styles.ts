import { css } from "../../../styled-system/css";

// 메인 컨테이너
export const main = css({
  m: "0 auto",
  w: "100%",

  sm: {
    w: "calc(100% - 6rem)",
  },
  md: {
    w: "90%",
  },
  lg: {
    maxW: "140.4rem",
  },
});

// 섹션
export const section = css({
  lg: {
    minH: "800px",
  },
});

// 섹션 제목
export const sectionTitle = css({
  fontFamily: "darker",
  letterSpacing: "-.27rem",

  sm: {
    fontSize: "7rem",
  },
  md: {
    fontSize: "9.8rem",
    ml: "2rem",
  },
});

// 이동 버튼
export const goBtn = css({
  pos: "absolute",
  bottom: "1.5rem",
  right: "1.5rem",
  zIndex: "3",
  color: "text",
  rounded: ".5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  h: "4rem",
  bg: "#ffffff",

  sm: {
    w: " 18.4rem",
    fontSize: "12px",
  },
  md: {
    fontSize: "1.6rem",
    w: " 16.4rem",
  },

  "& img": {
    w: "2.8rem",
  },
});

// 업무경험, 프로젝트 그리드 아이템 ===============
export const gridArea = css({
  display: "grid",
  gap: "2.5rem",
  borderTop: "1px solid",
  borderTopColor: "border",
  pt: "6rem",

  sm: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  md: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

export const gridItem = css({
  p: "4rem 2rem",
  rounded: "1.5rem",
  border: "1px solid",
  borderColor: "border",
  bg: "gray100",
  overflow: "hidden",
  display: "flex",
  flexFlow: "column",
});

export const itemImgOverlay = css({
  _after: {
    content: "''",
    pos: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    w: "100%",
    h: "100%",
    rounded: "1.5rem",
    overflow: "hidden",
    background:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.32) 0%, rgba(255, 255, 255, 0) 100%)",
  },
});

export const gridItemTitleContainer = css({
  display: "flex",
  alignItems: "center",

  "& .wrap": {
    display: "flex",
    alignItems: "center",
    gap: "1.4rem",
  },

  sm: {
    justifyContent: "unset",
    gap: 0,
    mb: "1rem",
  },

  md: {
    justifyContent: "unset",
    mb: "0",
  },
});

export const itemProjectName = css({
  fontWeight: 600,
  m: "1.8rem 0",
  whiteSpace: "nowrap",

  sm: {
    fontSize: "16px",
  },
  md: {
    fontSize: "2.2rem",
  },
});

export const gridItemBody = css({
  "&.slash": {
    display: "block",
    fontWeight: 500!,
    fontSize: "14px",
  },

  "&.year": {
    fontWeight: 500!,
    pl: ".6rem",
  },

  sm: {
    fontSize: "14px",

    "& .slash": {
      display: "none",
    },
  },

  md: {
    fontSize: "2rem",
    fontWeight: 600,
  },
});

export const itemBodyMore = css({
  whiteSpace: "pre-line",
  lineHeight: "1.8",

  sm: {
    fontSize: "14px",
  },
  md: {
    fontSize: "1.6rem",
  },
});

export const roundElList = css({
  display: "flex",
  flexWrap: "wrap",
  gap: ".8rem",

  sm: {
    mt: "2.5rem",
    fontSize: "14px",
  },
  md: {
    mt: "1.5rem",
    fontSize: "1.6rem",
  },
});

export const eachRoundEl = css({
  rounded: "5555555px",
  textAlign: "center",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // bg: "#dbdbdbff",
  bg: "#E8E8E5",
  color: "text",
  border: "1px solid",
  borderColor: "border",
  whiteSpace: "nowrap",

  sm: {
    p: "0 2rem",
    fontSize: "13px !",
    height: "4.4rem",
    gap: "1rem",
  },
  md: {
    p: "0 1.7rem",
    fontSize: "1.5rem !",
    height: "3.8rem",
    gap: ".5rem",
  },
});

// 최상단으로 이동
export const toTopBtn = css({
  pos: "fixed",
  zIndex: 997,
  rounded: "555555555px",
  justifyContent: "center",
  alignItems: "center",
  bg: "#ffffffe3",
  border: "1px solid",
  borderColor: "border",
  boxShadow: "#15151a12 0px 2px 24px",

  sm: {
    display: "none",
  },
  md: {
    display: "flex",
    w: "8rem",
    h: "8rem",
    right: "5rem",
    bottom: "5rem",
  },

  "& img": {
    transform: "rotate(-45deg)",
  },
});

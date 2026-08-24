import { css } from "../../../styled-system/css";

export const workSection = css({
  w: "100%",
  m: "0 auto",

  sm: {
    pt: "15rem",
  },
  md: {
    pt: "19rem",
  },
});

export const workSectionTitleContainer = css({
  pb: "4.5rem",
  justifyContent: "space-between",
  pos: "relative",
  lineHeight: "1",
});

export const workSectionTitle = css({
  "&.sec": {
    sm: {
      pl: "5rem",
    },
    md: {
      pl: "10rem",
    },
  },
});

export const workSectionTitleTxt = css({
  pos: "absolute",
  left: "49%",
  bottom: "46%",
  transform: "translate3d(0, -50%, 0)",
  padding: "1rem 1.8rem",
  rounded: "4444444px",
  bg: "gray100",
  border: "1px solid",
  borderColor: "border",
  fontSize: "1.4rem",
  opacity: "0.8",

  sm: {
    display: "none",
  },
  lg: {
    display: "block",
  },
});

export const workThumbnail = css({
  pos: "relative",
  width: "100%",
  aspectRatio: "16 / 9",
  flexShrink: 0,
  overflow: "hidden",
  display: "block",
});

export const workVideoContainer = css({
  rounded: "1.5rem",
  overflow: "hidden",
  width: "100%",
  height: "100%",

  "& img, & video": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
});

export const workVideo = css({
  objectFit: "cover",
  objectPosition: "center",
  width: "100%",
  height: "101%",
});

export const workGoBtn = css({
  outline: "1px solid",
  outlineColor: "#0a090f52",
});

export const number = css({
  fontWeight: 500,
  pl: "1.2rem",
  mb: "1.2rem",

  sm: {
    fontSize: "9px",
  },
  md: {
    fontSize: "1.2rem",
  },
});

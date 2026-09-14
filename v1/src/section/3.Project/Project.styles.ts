import { css } from "../../../styled-system/css";

export const projectSectionTitle = css({
  pb: "4.5rem",
  ml: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",

  sm: {
    pt: "15rem",
  },
  md: {
    pt: "19rem",
  },
});

export const projectImgContainer = css({
  pos: "relative",
});

export const projectDes = css({
  lineHeight: "2",
  minH: "15rem",

  sm: {
    fontSize: "14px",
  },
});

export const projectRoleList = css({
  flexDirection: "column",
  mb: "1.5rem",
});

export const projectRole = css({
  fontSize: "1.6rem !",
  w: "fit-content",
});

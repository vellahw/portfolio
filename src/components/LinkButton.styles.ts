import { css } from "../../styled-system/css";

export const LinkButtonStyle = css({
  _hover: {
    "& svg": {
      transform: "translateX(6px)",
    },
  },

  "& svg": {
    transition: "transform 0.3s ease-out",
    ml: "1rem",
  },
});

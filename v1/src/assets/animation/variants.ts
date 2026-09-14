import type { Variants } from "motion/react";

/**
 * Framer Motion variants를 정의
 */

export const LinesContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // 줄간격
    },
  },
};

export const lineVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // 글자 간격
    },
  },
};

export const charVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" },
  },
};

export const mailTxtVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

import { cx } from "../../../styled-system/css";
import { center, flex, stack } from "../../../styled-system/patterns";
import { lineVariants, mailTxtVariants } from "../../assets/animation/variants";
import Section from "../../components/Section";
import * as s from "./Contact.styles";
import { motion } from "motion/react";

export default function Contact({ isLoaded }: { isLoaded: boolean }) {
  const mailTxt = "iamhanwon@gmail.com";

  return (
    <Section className={s.contactSection} id="4">
      <div className={s.contactTitleContainer}>
        <h1 className={s.contactTitle}>CONTACT</h1>
        <h1 className={s.rightContactTitle}>함께 일하고 싶어요!</h1>
      </div>
      <div className={s.mailContainer}>
        {isLoaded && (
          <motion.a
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            href="mailto:iamhanwon@gmail.com"
            className={s.contactMail}
          >
            {mailTxt.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={mailTxtVariants}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.a>
        )}
      </div>
      <div className={cx(stack(), center())}>
        <div className={cx(flex(), s.iconContainer)}>
          <a href="https://github.com/vellahw" target="_blank">
            <img src={"/img/icon/github.svg"} alt="깃허브 아이콘" />
          </a>
          <a href="https://tavi.tistory.com/" target="_blank">
            <img src={"/img/icon/blog.svg"} alt="블로그 아이콘" />
          </a>
        </div>
        <p className={s.footerTxt}>© 2026 장한원. All rights reserved.</p>
      </div>
    </Section>
  );
}

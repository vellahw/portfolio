import { useEffect, useRef } from "react";
import { css, cx } from "../styled-system/css";
import * as s from "./assets/App.styles";
import gsap from "gsap";
import { motion } from "motion/react";

interface SectionBannerProps {
  isLoaded: boolean;
  isDark: boolean;
}

function SectionBanner({ isLoaded, isDark }: SectionBannerProps) {
  const sloganRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const positionRef = useRef<HTMLDivElement>(null);

  const slogan = "책임감 있는 자세로 결과를 만드는";

  const letterContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (!isLoaded) return;
    const tl = gsap.timeline();

    // 슬로건 등장
    tl.fromTo(
      sloganRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.out" },
    );

    // 포지션 등장
    tl.fromTo(
      positionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "power3.out" },
      "+=0.5", // 이전 애니메이션 끝난 뒤 0.2초 후 시작
    );

    // 이름 등장
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );

    return () => {
      tl.kill();
    };
  }, [isLoaded]);

  return (
    <section className={cx(s.section, s.bannerSection)}>
      {isLoaded && (
        <motion.div
          variants={letterContainer}
          initial="hidden"
          animate="visible"
          className={cx(s.roundTxtEl, s.sloganTxt, isDark && "_dark")}
          ref={sloganRef}
        >
          {slogan.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      )}

      <div ref={nameRef} className={s.myName}>
        <img
          src={isDark ? "/img/name-w.svg" : "/img/name-b.svg"}
          alt="name logo"
          className={css({ maxW: "none" })}
        />
      </div>
      <div
        className={cx(s.roundTxtEl, s.positionTxt, isDark && "_dark")}
        ref={positionRef}
      >
        <span>웹 프론트엔드 개발자</span>
      </div>
    </section>
  );
}

export default SectionBanner;

import { useEffect, useRef } from "react";
import * as s from "./assets/Header.styles";
import gsap from "gsap";

function Header() {
  const headerRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const playAnimation = () => {
      const tl = gsap.timeline();

      // 헤더 등장
      tl.fromTo(
        headerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power3.out" },
      );
    };

    document.fonts.ready.then(() => {
      playAnimation();
    });
  }, []);

  return (
    <header className={s.header} ref={headerRef}>
      <div className={s.headerContainer}>
        <a href="mailto:iamhanwon@gmail.com" className={s.mail}>
          iamhanwon@gmail.com
        </a>
        <nav className={s.navigator}>
          <div className={s.menuWrapper}>
            <button type="button" onClick={() => scrollToSection("1")}>
              프로필
            </button>
            <span className={s.slash}>*</span>
          </div>
          <div className={s.menuWrapper}>
            <button type="button" onClick={() => scrollToSection("2")}>
              이력
            </button>
            <span className={s.slash}>*</span>
          </div>
          <div className={s.menuWrapper}>
            <button type="button" onClick={() => scrollToSection("3")}>
              경험
            </button>
            <span className={s.slash}>*</span>
          </div>
          <button type="button" onClick={() => scrollToSection("4")}>
            연락하기
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

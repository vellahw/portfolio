import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import * as s from "./assets/style/App.styles";
import LoadingScreen from "./LoadingScreen";
import Hero from "./section/0.Hero/Hero";
import Profile from "./section/1.Profile/Profile";
import Work from "./section/2.Work/Work";
import Project from "./section/3.Project/Project";
import Contact from "./section/4.Contact/Contact";

function App() {
  // 로드 여부
  const [isLoaded, setIsLoaded] = useState(false);
  // dark 상태 여부
  const [isDark, setIsDark] = useState(true);

  // 최상단 이동 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 로드 상태 변경
  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsLoaded(true);
    });
  }, []);

  // 스크롤에 따른 dark 상태 감지
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 5;
      setIsDark(isTop);

      document.documentElement.dataset.theme = isTop ? "dark" : "light";
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen />}

      {isLoaded && (
        <>
          {/* 헤더 */}
          <Header isDark={isDark} />

          {/* 메인 */}
          <main className={s.main}>
            {/* 히어로 섹션 */}
            <Hero isLoaded={isLoaded} isDark={isDark} />

            {/* 프로필 섹션 */}
            <Profile isLoaded={isLoaded} />

            {/* 업무 경험 섹션 */}
            <Work isLoaded={isLoaded} />

            {/* 프로젝트 섹션 */}
            <Project isLoaded={isLoaded} />

            {/* 컨택트 섹션 */}
            <Contact isLoaded={isLoaded} />
          </main>

          {/* 최상단으로 이동 버튼 */}
          <button type="button" onClick={scrollToTop} className={s.toTopBtn}>
            <img src={"/img/icon/arrow-b.svg"} alt="화살표 아이콘" />
          </button>
        </>
      )}
    </>
  );
}

export default App;

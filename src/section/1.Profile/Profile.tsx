import * as s from "./Profile.styles";
import Section from "../../components/Section";
import { motion } from "motion/react";
import {
  LinesContainer,
  lineVariants,
  charVariants,
} from "../../assets/animation/variants";
import { center, flex, stack } from "../../../styled-system/patterns";
import LinkButton from "../../components/LinkButton/LinkButton";
import { cx } from "../../../styled-system/css";

export default function Profile({ isLoaded }: { isLoaded: boolean }) {
  const profileLines = [
    { text: "안녕하세요!", className: "hello" },
    { text: "2년차 프론트엔드 개발자", className: "" },
    { text: "장한원입니다", className: "name" },
  ];

  return (
    <Section className={s.profileSection} id="1">
      <div className={s.profileTitleContainer}>
        <h1 className={s.profileTitle}>PROFILE</h1>

        {isLoaded && (
          <motion.div
            variants={LinesContainer}
            initial="hidden"
            className={s.profileHelloTitleContainer}
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {profileLines.map((line, lineIndex) => (
              <motion.div
                key={lineIndex}
                variants={lineVariants}
                style={{ overflow: "hidden" }}
                className={line.className}
              >
                {line.text.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={charVariants}
                    style={{
                      display: "inline-block",
                      marginRight: char === " " ? 6 : 0,
                      fontWeight: 700,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <div className={s.profileBodyContainer}>
        <div className={s.myProfileImg}>
          <img src={"/img/profile.png"} alt="프로필" />
        </div>

        <div className={s.profileBodyWrapper}>
          <span className={s.mark}>*</span>
          <div className={s.IntroduceContainer}>
            <p>
              에이전시 환경에서 다양한 국내외 병의원 홈페이지 리뉴얼 프로젝트의{" "}
              <span className={s.IntroduceBold}>
                프론트엔드 개발을 전담하고 주도했습니다.
              </span>
            </p>
            <p>
              <span className={s.IntroduceBold}>
                아름다운 UI와 자연스러운 애니메이션
              </span>
              을 구현하는 과정을 즐깁니다. 단순 디자인 구현을 넘어 사용자 경험을
              개선하는 방향으로 개발하는 것을 중요하게 생각합니다.{" "}
              <span className={s.IntroduceBold}>
                실제 프로젝트에서도 UX적으로 더 적합하다고 판단되는 부분을
                제안하고 적용
              </span>
              함으로써 서비스 완성도를 높인 경험이 있습니다.
            </p>
            <p>
              기존의 그누보드 환경에서{" "}
              <span className={s.IntroduceBold}>단순 구현에 그치지 않고 </span>
              매 프로젝트에서 재사용 가능한 구조를 만드는 등{" "}
              <span className={s.IntroduceBold}>
                개발 효율을 높이고 개선하는 데 집중{" "}
              </span>
              해왔습니다. 코드를 작성할 때마다 협업과 유지보수를 고려 해{" "}
              <span className={s.IntroduceBold}>
                읽기 쉽고 범용성 있는 구조를 고민
              </span>
              합니다.
            </p>
            <p>
              업무에 필요한 기술은 익숙하지 않더라도 직접 적용해보며 빠르게
              적응하고, React와 TypeScript 기반의 웹 개발을 별도로 학습하며
              역량을 확장해왔습니다.
            </p>
          </div>
          <div className={stack({ gap: "2.6rem" })}>
            <LinkButton
              link="https://my.surfit.io/w/1415583333"
              className={cx(s.profileLink, center())}
            >
              이력서 보기
            </LinkButton>
            <div className={flex({ gap: "8px" })}>
              {/* <LinkButton
                            link="https://github.com/vellahw"
                            className={cx(s.profileLink, center())}
                          >
                            Github
                          </LinkButton> */}
              {/* <LinkButton
                            link="https://tavi.tistory.com/"
                            className={cx(s.profileLink, center())}
                          >
                            Blog
                          </LinkButton> */}
            </div>
          </div>

          {/* 이력사항 */}
          <div className={cx(s.history, stack())}>
            <div>
              <h1 className={s.historyTitle}>경력</h1>
              <div className={s.historyContainer}>
                <div className={s.eachHistory}>
                  <p className="date">2024.04 ~ 2025.12</p>
                  <p className="group">(주)엔셀텍바이오랩스</p>
                </div>
                <div className={s.eachHistory}>
                  <p className="date">2023.08 ~ 2023.09</p>
                  <p className="group">해커스홀딩스</p>
                </div>
              </div>
            </div>

            <div>
              <h1 className={s.historyTitle}>학력·교육이수</h1>
              <div className={s.historyContainer}>
                <div className={cx(s.eachHistory, "edu")}>
                  <p className="date">2024.03 ~ 재학중*</p>
                  <p className="group">한국방송통신대학교 컴퓨터과학과</p>
                </div>
                <div className={cx(s.eachHistory, "edu")}>
                  <p className="date">2023.05 ~ 2023.07</p>
                  <div className="group">
                    <p>한국에이아이블록체인융합원</p>
                    <p className={s.smallHistoryTxt}>
                      (블록체인 기반의 기술 사업화 전문 인력 양성 과정)
                    </p>
                  </div>
                </div>
                <div className={cx(s.eachHistory, "edu")}>
                  <p className="date">2022.07 ~ 2023.03</p>
                  <div className="group">
                    <p>이젠컴퓨터아카데미</p>
                    <p className={s.smallHistoryTxt}>
                      (AWS클라우드 기반 JAVA 개발자 과정)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className={s.historyTitle}>자격증</h1>
              <p>정보처리기능사</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

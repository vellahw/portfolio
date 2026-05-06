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
                디자인 시안이 없는 영역까지 포함해 반응형·적응형 UI를 스스로
                판단해 구현
              </span>
              할 수 있으며 기획과 디자인 의도를 정확히 이해하고 이를 충실히 반영
              할 수 있습니다.
            </p>
            <p>
              구현 과정에서{" "}
              <span className={s.IntroduceBold}>
                사용자 경험 측면의 개선점을 제안을 진행하고 실제 프로젝트에 반영
              </span>
              한 경험이 있습니다.
            </p>
            <p>
              레거시 그누보드 환경을 개선하며{" "}
              <span className={s.IntroduceBold}>
                단순 구현에 그치지 않고 이후 작업이 수월하도록 개선하는 데 집중
              </span>
              해왔습니다.{" "}
              <span className={s.IntroduceBold}>
                코드를 작성할 때마다 협업과 유지보수를 고려
              </span>
              해 읽기 쉽고 범용성 있는 구조를 고민합니다.
            </p>
            <p>
              업무에 필요한 기술은 익숙하지 않더라도 직접 적용해보며 익히고,
              React와 TypeScript 기반의 웹 개발을 별도로 학습하며 역량을
              확장해왔습니다.
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

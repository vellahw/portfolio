import * as s from "./Profile.styles";
import Section from "../../components/Section";
import { motion } from "motion/react";
import {
  LinesContainer,
  lineVariants,
  charVariants,
} from "../../assets/animation/variants";
import { center, stack } from "../../../styled-system/patterns";
import LinkButton from "../../components/LinkButton/LinkButton";
import { cx } from "../../../styled-system/css";

export default function Profile({ isLoaded }: { isLoaded: boolean }) {
  const profileLines = [
    { text: "안녕하세요!", className: "hello" },
    { text: "3년차 프론트엔드 개발자", className: "" },
    { text: "장한원입니다", className: "name" },
  ];

  const resumeLink = 'https://my.surfit.io/w/1415583333'

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
                프론트엔드 개발을 전담하고 주도한 경험이 있습니다.
              </span>
            </p>
           <p>
             이후 <span className={s.IntroduceBold}>서비스 개발 환경으로 영역을 넓혀 Nuxt와 TypeScript 기반 환경에서 콘텐츠 언어 학습 기능, 다국어 지원, 멀티 PG 결제 시스템 등의 기능을 개발</span>했습니다.
           </p>
            <p>
              단순한 화면 구현을 넘어 사용자의 상태와 서비스 정책에 따라 달라지는 흐름을 이해하고 설계하는 데 집중합니다.
            </p>
            <p>사용자 경험을 개선하는 방안을 직접 제안하고 적용하여{" "}
              <span className={s.IntroduceBold}>Lighthouse SEO 점수를 90~100점대로 향상</span> 시키며 프로젝트의 완성도를 높이는 데 기여했습니다.
            </p>

            <p><span className={s.IntroduceBold}>팀 프로젝트에서 대상 수상과 교육과정 우수상 수상</span>의 성과를 거두며 협업과 문제 해결 능력을 입증한 바 있습니다. </p>

            <p>실무와 프로젝트 경험을 바탕으로 새로운 기술 도입과 효율적인 개발 프로세스 개선에 적극적으로 기여할 수 있습니다.</p>
          </div>
          <div className={stack({ gap: "2.6rem" })}>
            <LinkButton
              link={resumeLink}
              className={cx(s.profileLink, center())}
            >
              이력서 보기
            </LinkButton>
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

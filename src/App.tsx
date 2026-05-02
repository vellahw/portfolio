import { useEffect, useState } from "react";
import Header from "./Header";
import * as s from "./assets/App.styles";
import { projectData, worksData } from "./assets/data/Datas";
import { css, cx } from "../styled-system/css";
// import gsap from "gsap";
import { center, flex, stack } from "../styled-system/patterns";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import LoadingScreen from "./LoadingScreen";
import Hero from "./section/Hero/Hero";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";
import LinkButton from "./components/LinkButton";
type Project = {
  name: string;
  thumbSrc: string;
  what: string;
  des: string;
  role: string[];
  tech: string[];
  href: string;
  year: string;
  slideCount: number;
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [open, setOpen] = useState(false); // 모달
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // 모달 오픈된 프로젝트
  const profileLines = [
    { text: "안녕하세요!", className: "hello" },
    { text: "2년차 프론트엔드 개발자", className: "" },
    { text: "장한원입니다", className: "name" },
  ];

  const profileLinesContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // 줄간격
      },
    },
  };

  const lineVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // 글자 간격
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut" },
    },
  };

  const workTitle = [
    { text: "WORK", className: "" },
    { text: "EXPERIENCES", className: "sec" },
  ];

  const ProjectTitle = "PROJECTS";

  const mailTxt = "iamhanwon@gmail.com";
  const mailTxtVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsLoaded(true);
    });
  }, []);

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
          <Header isDark={isDark} />
          <main className={s.main}>
            {/* 히어로 섹션 */}
            <Hero isLoaded={isLoaded} isDark={isDark} />

            {/* 프로필 */}
            <section className={cx(s.section, s.profileSection)} id="1">
              <div className={s.profileTitleContainer}>
                <h1 className={s.profileTitle}>PROFILE</h1>

                {isLoaded && (
                  <motion.div
                    variants={profileLinesContainer}
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
                      에이전시 환경에서 다양한 국내외 병의원 홈페이지 리뉴얼
                      프로젝트의{" "}
                      <span className={s.IntroduceBold}>
                        프론트엔드 개발을 전담하고 주도했습니다.
                      </span>
                    </p>
                    <p>
                      <span className={s.IntroduceBold}>
                        디자인 시안이 없는 영역까지 포함해 반응형·적응형 UI를
                        스스로 판단해 구현
                      </span>
                      할 수 있으며 기획과 디자인 의도를 정확히 이해하고 이를
                      충실히 반영 할 수 있습니다.
                    </p>
                    <p>
                      구현 과정에서{" "}
                      <span className={s.IntroduceBold}>
                        사용자 경험 측면의 개선점을 제안을 진행하고 실제
                        프로젝트에 반영
                      </span>
                      한 경험이 있습니다.
                    </p>
                    <p>
                      레거시 그누보드 환경을 개선하며{" "}
                      <span className={s.IntroduceBold}>
                        단순 구현에 그치지 않고 이후 작업이 수월하도록 개선하는
                        데 집중
                      </span>
                      해왔습니다.{" "}
                      <span className={s.IntroduceBold}>
                        코드를 작성할 때마다 협업과 유지보수를 고려
                      </span>
                      해 읽기 쉽고 범용성 있는 구조를 고민합니다.
                    </p>
                    <p>
                      업무에 필요한 기술은 익숙하지 않더라도 직접 적용해보며
                      익히고, React와 TypeScript 기반의 웹 개발을 별도로
                      학습하며 역량을 확장해왔습니다.
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
                      <LinkButton
                        link="https://github.com/vellahw"
                        className={cx(s.profileLink, center())}
                      >
                        Github
                      </LinkButton>
                      <LinkButton
                        link="https://tavi.tistory.com/"
                        className={cx(s.profileLink, center())}
                      >
                        Blog
                      </LinkButton>
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
                          <p className="group">
                            한국방송통신대학교 컴퓨터과학과
                          </p>
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
                      {/* <p>성동글로벌경영고등학교 패션디자인과&nbsp;&nbsp;&nbsp;&nbsp;2014.03 ~ 2017.02</p> */}
                    </div>

                    <div>
                      <h1 className={s.historyTitle}>자격증</h1>
                      <p>정보처리기능사</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className={cx(s.section, s.workSection)} id="2">
              {isLoaded && (
                <motion.div
                  variants={profileLinesContainer}
                  initial="hidden"
                  className={s.workSectionTitleContainer}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {workTitle.map((line, lineIndex) => (
                    <motion.div
                      key={lineIndex}
                      variants={lineVariants}
                      style={{ overflow: "hidden" }}
                      className={cx(
                        line.className,
                        s.sectionTitle,
                        s.workSectionTitle,
                      )}
                    >
                      {line.text.split("").map((char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          variants={charVariants}
                          style={{
                            display: "inline-block",
                            marginRight: char === " " ? 6 : 0,
                            fontWeight: 700,
                            lineHeight: 1,
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.div>
                  ))}

                  {/* <span className={s.workSectionTitleTxt}>
                    이미지에 마우스를 올려보세요!
                  </span> */}
                </motion.div>
              )}

              <div className={s.gridArea}>
                {worksData.map((item, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={s.gridItem}
                      key={index}
                    >
                      {/* <div className={s.gridItem} key={index}> */}
                      <p className={s.number}>[0{index + 1}]</p>
                      <div className={s.workThumbnail}>
                        <div className={s.workImgContainer}>
                          {/* <img
                            src={`/img/work-${item.src}.png`}
                            alt={item.name}
                          /> */}
                          <video
                            muted
                            loop
                            autoPlay
                            className={cx(s.workImgGif, "gif")}
                          >
                            <source
                              src={`/img/work-${item.src}.mp4`}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        {item.href && (
                          <a
                            href={item.href}
                            target="_blank"
                            className={cx(s.goBtn, s.workGoBtn)}
                          >
                            <span>사이트 바로가기</span>
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.7975 8.22011L17.2358 8.22011L17.2358 14.6583"
                                stroke="#15151aac"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8.22009 17.2357L17.1455 8.31028"
                                stroke="#15151aac"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                      <div>
                        <div className={s.projectTitleContainer}>
                          <div className="wrap">
                            <h1 className={s.projectName}>{item.name}</h1>
                            <span className={cx(s.projectBody, "slash")}>
                              |
                            </span>
                            <span className={s.projectBody}>
                              {item.what ? item.what : "홈페이지 전체 리뉴얼"}
                            </span>
                          </div>
                        </div>
                        {item.more && (
                          <p className={s.projectBodyMore}>{`${item.more}`}</p>
                        )}
                        <div className={s.roundElList}>
                          <div className={s.eachRoundEl}>{item.tech}</div>
                          <div className={s.eachRoundEl}>HTML/CSS</div>
                          <div className={s.eachRoundEl}>JavaScript</div>
                        </div>
                      </div>
                      {/* </div> */}
                    </motion.div>
                  );
                })}
              </div>
            </section>

            <section id="3" className={s.section}>
              <div className={cx(s.projectSectionTitle)}>
                {isLoaded && (
                  <motion.div
                    variants={lineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    className={s.sectionTitle}
                    style={{ lineHeight: "1" }}
                  >
                    {ProjectTitle.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        variants={mailTxtVariants}
                        style={{ display: "inline-block", fontWeight: 700 }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>

              <div className={s.gridArea}>
                {projectData.map((item, index) => {
                  return (
                    <div className={s.gridItem} key={index}>
                      <p className={s.number}>[0{index + 1}]</p>
                      <div className={css({ pos: "relative" })}>
                        <img
                          src={`/img/project/project-${item.thumbSrc}.png`}
                          alt={item.name}
                        />
                        <button
                          onClick={() => {
                            setSelectedProject(item);
                            setOpen(true);
                          }}
                          className={cx(s.projectViewBtn, s.goBtn)}
                        >
                          프로젝트 둘러보기
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.7975 8.22011L17.2358 8.22011L17.2358 14.6583"
                              stroke="#15151aac"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.22009 17.2357L17.1455 8.31028"
                              stroke="#15151aac"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div>
                        <div>
                          <div className={s.projectTitleContainer}>
                            <div className="wrap">
                              <h1 className={s.projectName}>{item.name}</h1>
                              <span className={cx(s.projectBody, "slash")}>
                                |
                              </span>
                              <span className={s.projectBody}>{item.what}</span>
                            </div>
                            <span className={cx(s.projectBody, "year")}>
                              ({item.year})
                            </span>
                          </div>
                          <p className={cx(s.projectDes, s.projectBodyMore)}>
                            {item.des}
                          </p>
                        </div>

                        <div>
                          <div className={cx(s.roundElList, s.projectRoleList)}>
                            {item.role.map((role) => (
                              <div
                                className={cx(s.eachRoundEl, s.projectRole)}
                                key={role}
                              >
                                {role}
                              </div>
                            ))}
                          </div>
                          <div className={s.roundElList}>
                            <div className={s.eachRoundEl}>
                              {item.tech.map((tech, index) => (
                                <>
                                  {tech}
                                  {index !== item.tech.length - 1 ? " · " : ""}
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <AnimatePresence mode="wait">
                {open && selectedProject && (
                  <Modal
                    open={open}
                    onClose={() => {
                      setOpen(false);
                      setSelectedProject(null);
                    }}
                    slideCount={selectedProject.slideCount}
                    slideName={selectedProject.thumbSrc}
                  />
                )}
              </AnimatePresence>
            </section>

            <section className={s.contactSection} id="4">
              <div className={s.contactTitleContainer}>
                <h1 className={s.contactTitle}>CONTACT</h1>
                <h1 className={s.rightContactTitle}>함께 일하고 싶어요!</h1>
              </div>
              <div className={s.mailContainer}>
                {/* <div className={cx(s.eachRoundEl, s.myType, '_1')}>책임감있는🙋‍♀️</div>
              <div className={cx(s.eachRoundEl, s.myType, '_2')}>끈기있는💪</div>
              <div className={cx(s.eachRoundEl, s.myType, '_3')}>몰두하는🧐</div> */}
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

                {/* <div className={cx(s.eachRoundEl, s.myType, '_4')}>외향적인😁</div>
              <div className={cx(s.eachRoundEl, s.myType, '_5')}>긍정적인🎶</div> */}
              </div>
              <p className={s.footerTxt}>
                © 2026 장한원. All rights reserved.
              </p>
            </section>
          </main>

          <button type="button" onClick={scrollToTop} className={s.toTopBtn}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.91833 11.1641L14 4.0824L21.0817 11.1641"
                stroke="#15151A"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 23.916L14 4.28102"
                stroke="#15151A"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}
    </>
  );
}

export default App;

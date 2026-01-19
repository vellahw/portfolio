import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import * as s from "./assets/App.styles";
import { projectData, worksData } from "./assets/data/Datas";
import { cx } from "../styled-system/css";
import gsap from "gsap";
import { center, stack } from "../styled-system/patterns";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<HTMLDivElement>(null);

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
    if (!isLoaded) return;
    const tl = gsap.timeline();

    // 이름 등장
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 90 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
    );

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
      { opacity: 1, duration: 0.5, ease: "power3.out" },
      "<",
    );

    return () => {
      tl.kill();
    };
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen />}

      {isLoaded && (
        <>
          <Header />
          <main className={s.main}>
            {/* 배너 */}
            <section className={cx(s.section, s.bannerSection)}>
              <div className={cx(s.roundTxtEl, s.sloganTxt)} ref={sloganRef}>
                <span>책임감 있는 자세로 결과를 만드는</span>
              </div>
              <div ref={nameRef} className={s.myName}>
                <h1>Hanwon</h1>
                <h1 className="last">Jang</h1>
              </div>
              <div
                className={cx(s.roundTxtEl, s.positionTxt)}
                ref={positionRef}
              >
                <span>웹 프론트엔드 개발자</span>
              </div>
            </section>

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
                  <p className={s.profileBody}>
                    {`웹 프론트엔드 개발자로 근무하며 국내외 병의원 홈페이지 리뉴얼 프로젝트에서 프론트엔드 개발을 전담하고 주도적으로 진행했습니다.
반응형 웹과 정교한 마크업을 기반으로 사용자 경험을 개선하고, JavaScript를 활용한 인터랙션 구현으로 서비스 완성도를 높였습니다.
레거시 그누보드 환경의 스크립트와 마크업을 표준 코드로 개선하며 단기적인 구현에 그치지 않고, 유지보수와 개선까지 책임지는 관점으로 프로젝트에 임해왔습니다.
디자인 시안을 높은 정확도로 구현하며, 간단한 UI 및 정적 랜딩페이지 디자인에도 참여해 기획과 디자인의 의도를 이해하고 구현하는 역량을 쌓아왔습니다.
디자이너를 곧 클라이언트로 생각하며, 원활한 소통을 통해 더 나은 결과를 만들어가는 협업 과정에 즐거움을 느낍니다.
`}
                  </p>
                  <div className={stack({ gap: "2.6rem" })}>
                    <a
                      href="https://my.surfit.io/w/1415583333"
                      target="_blank"
                      className={cx(s.profileLink, center())}
                    >
                      <span>이력서 보기</span>
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
                    {/* <div className={flex({ gap: '1.6rem' })}>
                  <a href="" className={cx(s.profileLink, s.showResume, center())}>
                    <span>노션 이력서 보기</span>
                  </a>
                  <a href="" className={cx(s.profileLink, s.showResume, center())}>
                    <span>PDF 이력서 보기</span>
                  </a>
                </div> */}

                    <a
                      href="https://github.com/vellahw"
                      target="_blank"
                      className={cx(s.profileLink, center())}
                    >
                      <span>Github</span>
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
                  </div>

                  {/* 이력사항 */}
                  <div className={cx(s.history, stack())}>
                    <div>
                      <h1 className={s.historyTitle}>경력</h1>
                      <div className={s.historyContainer}>
                        <div className={s.eachHistory}>
                          <p className="group">(주)엔셀텍바이오랩스</p>
                          <p className="date">2024.04 ~ 2025.12</p>
                        </div>
                        <div className={s.eachHistory}>
                          <p className="group">
                            해커스홀딩스 <span className="job">(인턴)</span>
                          </p>
                          <p className="date">2023.08 ~ 2023.09</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h1 className={s.historyTitle}>학력·교육이수</h1>
                      <div className={s.historyContainer}>
                        <div className={s.eachHistory}>
                          <p className="group">
                            한국방송통신대학교 컴퓨터과학과
                          </p>
                          <p className="date">2024.03 ~ 재학중*</p>
                        </div>
                        <div className={s.eachHistory}>
                          <div className="group">
                            <p>한국에이아이블록체인융합원</p>
                            <p className={s.smallHistoryTxt}>
                              (블록체인 기반의 기술 사업화 전문 인력 양성 과정)
                            </p>
                          </div>
                          <p className="date">2023.05 ~ 2023.07</p>
                        </div>
                        <div className={s.eachHistory}>
                          <div className="group">
                            <p>이젠컴퓨터아카데미</p>
                            <p className={s.smallHistoryTxt}>
                              (AWS클라우드 기반 JAVA 개발자 과정)
                            </p>
                          </div>
                          <p className="date">2022.07 ~ 2023.03</p>
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
              {/* <div className={s.workSectionTitleContainer}> */}
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

                  <span className={s.workSectionTitleTxt}>
                    이미지에 마우스를 올려보세요!
                  </span>
                </motion.div>
              )}

              {/* <h1 className={s.sectionTitle}>WORK</h1>
                  <h1 className={cx(s.sectionTitle, s.workSectionTitle2)}>
                    EXPERIENCES
                  </h1> */}

              {/* </div> */}
              {/* <h1 className={s.smallSectionTitle}>이력</h1> */}

              <div className={s.gridArea}>
                {worksData.map((item, index) => {
                  return (
                    <div className={s.gridItem} key={index}>
                      <p className={s.number}>[0{index + 1}]</p>
                      <div className={s.workThumbnail}>
                        <div className={s.workImgContainer}>
                          <img
                            src={`/img/work-${item.src}.png`}
                            alt={item.name}
                          />
                          {/* <img
                          src={`/img/work-${item.src}-g.gif`}
                          className={cx(s.workImgGif, "gif")}
                          alt={item.name}
                          loading="lazy"
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
                    </div>
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
                      <div className={s.workImgContainer}>
                        <img
                          src={`/img/project-${item.src}.png`}
                          alt={item.name}
                        />
                        {item.href && (
                          <a
                            href={item.href}
                            target="_blank"
                            className={cx(
                              s.projectGitBtn,
                              s.goBtn,
                              s.workGoBtn,
                            )}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 0.833984C4.93587 0.833984 0.833374 4.93648 0.833374 10.0007C0.833374 14.0565 3.45754 17.4832 7.10087 18.6973C7.55921 18.7773 7.73088 18.5032 7.73088 18.2623C7.73088 18.044 7.72004 17.3223 7.72004 16.5548C5.41671 16.979 4.82087 15.9932 4.63754 15.4782C4.53421 15.214 4.08754 14.4007 3.69837 14.1832C3.37754 14.0107 2.91837 13.5873 3.68671 13.5757C4.40837 13.564 4.92421 14.2398 5.09587 14.5157C5.92087 15.9015 7.23837 15.5123 7.76588 15.2715C7.84588 14.6757 8.08671 14.2748 8.35004 14.0457C6.31004 13.8165 4.17921 13.0257 4.17921 9.51898C4.17921 8.52232 4.53421 7.69732 5.11921 7.05565C5.02671 6.82648 4.70587 5.88732 5.21087 4.62648C5.21087 4.62648 5.97838 4.38648 7.73088 5.56648C8.4771 5.35945 9.24813 5.25543 10.0225 5.25732C10.8025 5.25732 11.5817 5.35982 12.3142 5.56648C14.0675 4.37482 14.835 4.62648 14.835 4.62648C15.3392 5.88732 15.0192 6.82648 14.9275 7.05565C15.5117 7.69732 15.8667 8.51148 15.8667 9.51898C15.8667 13.0373 13.7242 13.8165 11.6842 14.0457C12.0167 14.3323 12.3034 14.8823 12.3034 15.7415C12.3034 16.9673 12.2917 17.9532 12.2917 18.2623C12.2917 18.5032 12.4634 18.789 12.9217 18.6973C16.5425 17.4832 19.1667 14.0457 19.1667 10.0007C19.1667 4.93648 15.065 0.833984 10 0.833984Z"
                                fill="#15151ac6"
                              />
                            </svg>
                            GitHub
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
                            <span className={s.projectBody}>{item.what}</span>
                          </div>
                          <span className={cx(s.projectBody, "year")}>
                            ({item.year})
                          </span>
                        </div>
                        <p className={cx(s.projectDes, s.projectBodyMore)}>
                          {item.des}
                        </p>

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
                            {item.tech.map((tech) => (
                              <div className={s.eachRoundEl} key={tech}>
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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

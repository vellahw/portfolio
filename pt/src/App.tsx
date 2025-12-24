import React, { useEffect, useRef } from 'react';
import { header, navigator } from './assets/Header.styles';
import * as s from './assets/App.styles';
import { projectData, worksData } from './assets/data/Datas';
import { cx } from '../styled-system/css';
import gsap from 'gsap';
import { center, flex, stack } from '../styled-system/patterns';

function App() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => { 
      const tl = gsap.timeline();
  
      // 이름 등장
      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 90 },
        { opacity: 1, y: 0, duration: .8, ease: 'power3.out' }
      );
  
      // 헤더 등장
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: .6, ease: 'power3.out' },
      );

    })
  })

  return (
    <>
      <header className={header} ref={headerRef}>
        {/* <div className={container}> */}
        {/* <a href="" className={logo}>
            <p className="name">Hanwon Jang</p>
            <p className="small">Front-End Developer</p>
          </a> */}
        <nav className={navigator}>
          <a href="#1">#프로필</a>
          <a href="#2">#이력·경험</a>
          <a href="#3">#연락하기</a>
        </nav>
        {/* <a href="mailto:iamhanwon@gmail.com" className={mail}>
            iamhanwon@gmail.com
          </a> */}
        {/* </div> */}
      </header>
      <main className={s.main}>
        {/* 배너 */}
        <section className={s.bannerSection}>
          <div className={cx(s.bannerTxtSquare, s.sloganTxt)}>
            <span>책임감 있는 자세로 결과를 만드는</span>
          </div>
          <h1 ref={nameRef} className={s.myName}>
            Hanwon Jang
          </h1>
          <div className={cx(s.bannerTxtSquare, s.positionTxt)}>
            <span>웹 프론트엔드 개발자</span>
          </div>
        </section>

        {/* 프로필 */}
        <section className={s.profileSection} id="1">
          <div className={s.profileTitleContainer}>
            <h1 className={s.profileTitle}>PROFILE</h1>
            <div className={cx(stack(), s.profileHelloTitleContainer)}>
              <h1 className={s.helloFirst}>안녕하세요!</h1>
              <h1>2년차 프론트엔드 개발자</h1>
              <h1 className={s.helloLast}>장한원입니다</h1>
            </div>
          </div>

          <div className={flex()}>
            <div className={s.myProfileImg}>
              <img src="" alt="" />
            </div>

            <div className={s.profileBodyContainer}>
              <span className={s.mark}>*</span>
              <p className={s.profileBody}>
                {`HTML·CSS·JavaScript 기반의 퍼블리싱에 능숙하며,
React와 TypeScript 환경의 컴포넌트 단위 개발 경험이 있습니다.
반응형 웹, 웹 표준, 웹 접근성을 고려한 사용자 경험을 중요하게 생각합니다. 
개발뿐만 아니라 간단한 UI 디자인에도 참여하며
기획과 디자인의 의도를 이해하고 구현하는 경험을 쌓아왔습니다.
디자이너를 곧 클라이언트라고 생각하며
원활한 소통을 통해 더 나은 결과를 만드는 협업에 즐거움을 느낍니다.`}
              </p>
              <div className={stack({ gap: '2.6rem' })}>
                <div className={flex({ gap: '1.6rem' })}>
                  <a href="" className={cx(s.profileLink, s.showResume, center())}>
                    <span>노션 이력서 보기</span>
                  </a>
                  <a href="" className={cx(s.profileLink, s.showResume, center())}>
                    <span>PDF 이력서 보기</span>
                  </a>
                </div>
                <a href="https://github.com/vellahw" target='_blank' className={cx(s.profileLink, s.goGithub, center())}>
                  <span>Github</span>
                </a>
              </div>

              {/* 경력 */}
              <div className={cx(s.history, stack())}>
                <div>
                  <h1 className={s.historyTitle}>경력</h1>
                  <p>(주)엔셀텍바이오랩스 2024.04 ~ 2025.12</p>
                </div>
                <div>
                  <h1 className={s.historyTitle}>학력</h1>
                  <p>2024.03 ~ 재학중&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;한국방송통신대학교 컴퓨터과학과</p>
                  {/* <p>2023.05 ~ 2023.07&nbsp;&nbsp;블록체인 기반의 기술 사업화 전문 인력 양성 과정 이수</p>
                  <p>
                    2022.07 ~ 2023.03&nbsp;&nbsp;&nbsp;&nbsp;이젠컴퓨터아카데미
                    <span>&nbsp;(AWS클라우드 기반 JAVA 개발자 과정 이수)</span>
                  </p> */}
                  <p>2014.03 ~ 2017.02&nbsp;&nbsp;&nbsp;&nbsp;성동글로벌경영고등학교</p>
                </div>
                <div>
                  <h1 className={s.historyTitle}>자격증</h1>
                  <p>정보처리기능사</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.workSection} id="2">
          <div className={s.workSectionTitleContainer}>
            <h1 className={s.sectionTitle}>WORK</h1>
            <h1 className={cx(s.sectionTitle, s.workSectionTitle2)}>EXPERIENCES</h1>
          </div>

          <div className={s.gridArea}>
            {worksData.map((item, index) => {
              return (
                <div className={s.gridItem} key={index}>
                  <p className={s.number}>[0{index + 1}]</p>
                  <div className={s.workImgContainer}>
                    <img src={`/img/work${index + 1}.png`} alt={item.name} />
                    {item.href && (
                      <a href={item.href} className={cx(s.goBtn, s.workGoBtn)}>
                        <span>사이트 바로가기</span>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.7975 8.22011L17.2358 8.22011L17.2358 14.6583"
                            stroke="#F0EEED"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.22009 17.2357L17.1455 8.31028"
                            stroke="#F0EEED"
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
                      <h1 className={s.projectName}>{item.name}</h1>
                      <span className={s.projectBody}>{item.what}</span>
                    </div>
                    <div className={s.techList}>
                      <div className={s.eachTech}>
                        <img src={'/img/techIcon-php.svg'} alt="tech icon" />
                        {item.tech}
                      </div>
                      <div className={s.eachTech}>
                        <img src={'/img/techIcon-html.svg'} alt="tech icon" />
                        HTML/CSS
                      </div>
                      <div className={s.eachTech}>
                        <img src={'/img/techIcon-js.svg'} alt="tech icon" />
                        JavaScript
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h1 className={s.sectionTitle}>PROJECTS</h1>

          <div className={s.gridArea}>
            {projectData.map((item, index) => {
              return (
                <div className={s.gridItem} key={index}>
                  <p className={s.number}>[0{index + 1}]</p>
                  <div className={s.workImgContainer}>
                    <img src={`/img/work${index + 1}.png`} alt={item.name} />
                    {item.href && (
                      <a href={item.href} className={s.goBtn}>
                        <svg
                          height="32"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          version="1.1"
                          width="32"
                          data-view-component="true"
                        >
                          <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                  <div>
                    <div className={s.projectTitleContainer}>
                      <h1 className={s.projectName}>{item.name}</h1>
                      <span className={s.projectBody}>{item.what}</span>
                    </div>
                    <div className={s.techList}>
                      {item.tech.map((tech, idx) => (
                        <div className={s.eachTech} key={tech}>
                          <img src={`/img/techIcon-${item.src[idx]}.svg`} alt="tech icon" />
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="3"></section>
      </main>
    </>
  );
}

export default App;

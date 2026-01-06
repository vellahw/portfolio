import React, { useEffect, useRef } from 'react';
import { header, navigator } from './assets/Header.styles';
import * as s from './assets/App.styles';
import { projectData, worksData } from './assets/data/Datas';
import { css, cx } from '../styled-system/css';
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
                  <p>(주)엔셀텍바이오랩스&nbsp;&nbsp;&nbsp;&nbsp;2024.04 ~ 2025.12</p>
                  <p>해커스홀딩스&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023.08 ~ 2023.09</p>
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
            <div>
              <h1 className={s.sectionTitle}>WORK</h1>
              <h1 className={cx(s.sectionTitle, s.workSectionTitle2)}>EXPERIENCES</h1>
            </div>
            <h1>이력</h1>
          </div>

          <div className={s.gridArea}>
            {worksData.map((item, index) => {
              return (
                <div className={s.gridItem} key={index}>
                  <p className={s.number}>[0{index + 1}]</p>
                  <div className={s.workImgContainer}>
                    <img src={`/img/work-${item.src}.png`} alt={item.name} />
                    {item.href && (
                      <a href={item.href} target='_blank' className={cx(s.goBtn, s.workGoBtn)}>
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
                      <span>|</span>
                      <span className={s.projectBody}>{item.what ? item.what : '홈페이지 전체 퍼블리싱'}</span>
                    </div>
                    {item.more && (
                      <p className={s.projectBodyMore}>{`${item.more}`}</p>
                    )}
                    <div className={s.roundElList}>
                      <div className={s.eachRoundEl}>
                        {item.tech}
                      </div>
                      <div className={s.eachRoundEl}>
                        HTML/CSS
                      </div>
                      <div className={s.eachRoundEl}>
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
          <div>
            <h1 className={cx(s.sectionTitle, s.projectSectionTitle)}>PROJECTS</h1>
            <h1>프로젝트 경험</h1>
          </div>

          <div className={s.gridArea}>
            {projectData.map((item, index) => {
              return (
                <div className={s.gridItem} key={index}>
                  <p className={s.number}>[0{index + 1}]</p>
                  <div className={s.workImgContainer}>
                    <img src={`/img/project-${item.src}.png`} alt={item.name} />
                    {item.href && (
                      <a href={item.href} className={cx(s.projectGitBtn, s.goBtn, s.workGoBtn)}>
                        {/* <svg className={css({mr: '.5rem'})} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 0.833984C4.93587 0.833984 0.833374 4.93648 0.833374 10.0007C0.833374 14.0565 3.45754 17.4832 7.10087 18.6973C7.55921 18.7773 7.73088 18.5032 7.73088 18.2623C7.73088 18.044 7.72004 17.3223 7.72004 16.5548C5.41671 16.979 4.82087 15.9932 4.63754 15.4782C4.53421 15.214 4.08754 14.4007 3.69837 14.1832C3.37754 14.0107 2.91837 13.5873 3.68671 13.5757C4.40837 13.564 4.92421 14.2398 5.09587 14.5157C5.92087 15.9015 7.23837 15.5123 7.76588 15.2715C7.84588 14.6757 8.08671 14.2748 8.35004 14.0457C6.31004 13.8165 4.17921 13.0257 4.17921 9.51898C4.17921 8.52232 4.53421 7.69732 5.11921 7.05565C5.02671 6.82648 4.70587 5.88732 5.21087 4.62648C5.21087 4.62648 5.97838 4.38648 7.73088 5.56648C8.4771 5.35945 9.24813 5.25543 10.0225 5.25732C10.8025 5.25732 11.5817 5.35982 12.3142 5.56648C14.0675 4.37482 14.835 4.62648 14.835 4.62648C15.3392 5.88732 15.0192 6.82648 14.9275 7.05565C15.5117 7.69732 15.8667 8.51148 15.8667 9.51898C15.8667 13.0373 13.7242 13.8165 11.6842 14.0457C12.0167 14.3323 12.3034 14.8823 12.3034 15.7415C12.3034 16.9673 12.2917 17.9532 12.2917 18.2623C12.2917 18.5032 12.4634 18.789 12.9217 18.6973C16.5425 17.4832 19.1667 14.0457 19.1667 10.0007C19.1667 4.93648 15.065 0.833984 10 0.833984Z" fill="white"/>
                        </svg> */}
                        GitHub
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
                      <span>|</span>
                      <span className={s.projectBody}>{item.what}</span>
                    </div>
                    <p className={cx(s.projectDes, s.projectBodyMore)}>{item.des}</p>
                    <div className={cx(s.roundElList, s.projectRoleList)}>
                      {item.role.map((role) => (
                        <div className={cx(s.eachRoundEl, css({w:'fit-content', bg: '#1d1d23ff'}))} key={role}>{role}</div>
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

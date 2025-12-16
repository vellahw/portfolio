import React, { useEffect, useRef } from 'react';
import { header, navigator } from './assets/Header.styles';
import * as s from './assets/App.styles';
import { projectData, worksData } from './assets/data/Datas';
import { cx } from '../styled-system/css';
import gsap from 'gsap';

function App() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => { 
      const tl = gsap.timeline();
  
      // 이름 등장
      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
  
      // 헤더 등장
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '+=0.1'
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
        <section className={s.bannerSection}>
          <h1 ref={nameRef} className={s.myName}>
            Hanwon Jang
          </h1>
        </section>

        <section id="#1"></section>

        <section className={s.workSection} id="2">
          <div>
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

        <section id="3">
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
      </main>
    </>
  );
}

export default App;

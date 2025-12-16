import React from 'react';
import { header, navigator } from './assets/Header.styles';
// import PopTextGSAP from './PopText';
import { banner, eachTech, goBtn, main, number, projectBody, projectName, projectTitleContainer, sectionTitle, techList, workImgContainer, workItem, works, workSection } from './assets/App.styles';
import { worksData } from './assets/data/Datas';

function App() {
  return (
    <>
      <header className={header}>
        {/* <div className={container}> */}
        {/* <a href="" className={logo}>
            <p className="name">Hanwon Jang</p>
            <p className="small">Front-End Developer</p>
          </a> */}
        <nav className={navigator}>
          <a href="">#프로필</a>
          <a href="#2">#이력·경험</a>
          <a href="">#연락하기</a>
        </nav>
        {/* <a href="mailto:iamhanwon@gmail.com" className={mail}>
            iamhanwon@gmail.com
          </a> */}
        {/* </div> */}
      </header>
      <main className={main}>
        <section className={banner}>
          {/* <PopTextGSAP text="Hanwon Jang" delayPerChar={0.08} className={popText} /> */}
        </section>
        <section className={workSection} id="2">
          <h1 className={sectionTitle}>WORK EXPERIENCES</h1>

          <div className={works}>
            {worksData.map((item, index) => {
              return (
                <div className={workItem} key={index}>
                  <p className={number}>[0{index + 1}]</p>
                  <div className={workImgContainer}>
                    <img src={`/img/work${index + 1}.png`} alt={item.name} />
                    {item.href && (
                      <a href={item.href} className={goBtn}>
                        <span>사이트 바로가기</span>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.7975 8.22011L17.2358 8.22011L17.2358 14.6583"
                            stroke="#F0EEED"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.22009 17.2357L17.1455 8.31028"
                            stroke="#F0EEED"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div>
                    <div className={projectTitleContainer}>
                      <h1 className={projectName}>{item.name}</h1>
                      <span className={projectBody}>{item.what}</span>
                    </div>
                    <div className={techList}>
                      <div className={eachTech}>
                        <img src={'/img/techIcon-php.svg'} alt="tech icon" />
                        {item.tech}
                      </div>
                      <div className={eachTech}>
                        <img src={'/img/techIcon-html.svg'} alt="tech icon" />
                        HTML/CSS
                      </div>
                      <div className={eachTech}>
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
      </main>
    </>
  );
}

export default App;

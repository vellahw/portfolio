import React from 'react';
import { container, header, logo, mail, navigator } from './assets/Header.styles';
// import PopTextGSAP from './PopText';
import { main, workItem, works, workSection } from './assets/App.styles';
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
            <a href="">PROFILE</a>
            <a href="">WORK</a>
            <a href="">CONTACT</a>
          </nav>
          {/* <a href="mailto:iamhanwon@gmail.com" className={mail}>
            iamhanwon@gmail.com
          </a> */}
        {/* </div> */}
      </header>
      <main className={main}>
        {/* <section className="banner">
          <PopTextGSAP text="Hanwon Jang" delayPerChar={0.08} className={popText} />
        </section> */}
        
      </main>
    </>
  );
}

export default App;

import * as s from "./Work.styles";
import * as as from "../../assets/style/App.styles";
import Section from "../../components/Section";
import { motion } from "motion/react";
import {
  LinesContainer,
  lineVariants,
  charVariants,
} from "../../assets/animation/variants";
import { cx } from "../../../styled-system/css";
import { worksData } from "../../assets/data/Datas";

export default function Work({ isLoaded }: { isLoaded: boolean }) {
  const workTitle = [
    { text: "WORK", className: "" },
    { text: "EXPERIENCES", className: "sec" },
  ];

  return (
    <Section className={s.workSection} id="2">
      {isLoaded && (
        <motion.div
          variants={LinesContainer}
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
                as.sectionTitle,
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
        </motion.div>
      )}

      <div className={as.gridArea}>
        {worksData.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={as.gridItem}
              key={index}
            >
              <p className={s.number}>[0{index + 1}]</p>
              <div className={s.workThumbnail}>
                <div className={cx(s.workVideoContainer, as.itemImgOverlay)}>
                  <video muted loop autoPlay className={cx(s.workVideo, "gif")}>
                    <source
                      src={`/img/work/work-${item.src}.mp4`}
                      type="video/mp4"
                    />
                  </video>
                </div>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    className={cx(as.goBtn, s.workGoBtn)}
                  >
                    <span>사이트 바로가기</span>
                    <img src={"/img/icon/arrow-b.svg"} alt="화살표 아이콘" />
                  </a>
                )}
              </div>
              <div>
                <div className={as.gridItemTitleContainer}>
                  <div className="wrap">
                    <h1 className={as.itemProjectName}>{item.name}</h1>
                    <span className={cx(as.gridItemBody, "slash")}>|</span>
                    <span className={as.gridItemBody}>
                      {item.what ? item.what : "홈페이지 전체 리뉴얼"}
                    </span>
                  </div>
                </div>
                {item.more && (
                  <p className={as.itemBodyMore}>{`${item.more}`}</p>
                )}
                <div className={as.roundElList}>
                  <div className={as.eachRoundEl}>{item.tech}</div>
                  <div className={as.eachRoundEl}>HTML/CSS</div>
                  <div className={as.eachRoundEl}>JavaScript</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

import { cx } from "../../../styled-system/css";
import Section from "../../components/Section";
import * as s from "./Project.styles";
import * as as from "../../assets/style/App.styles";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
import { lineVariants, mailTxtVariants } from "../../assets/animation/variants";
import { number } from "../2.Work/Work.styles";
import { projectData } from "../../assets/data/Datas";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

type ProjectItemTypes = {
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

export default function Project({ isLoaded }: { isLoaded: boolean }) {
  // 섹션 타이틀
  const Title = "PROJECTS";
  // 모달 open 여부
  const [open, setOpen] = useState(false);
  // 모달 오픈된 프로젝트
  const [selectedProject, setSelectedProject] =
    useState<ProjectItemTypes | null>(null);

  return (
    <Section id="3">
      <div className={cx(s.projectSectionTitle)}>
        {isLoaded && (
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            className={as.sectionTitle}
            style={{ lineHeight: "1" }}
          >
            {Title.split("").map((char, index) => (
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

      <div className={as.gridArea}>
        {projectData.map((item, index) => {
          return (
            <div className={as.gridItem} key={index}>
              <p className={number}>[0{index + 1}]</p>
              <div className={cx(as.itemImgOverlay, s.projectImgContainer)}>
                <img
                  src={`/img/project/project-${item.thumbSrc}.png`}
                  alt={item.name}
                />
                <button
                  onClick={() => {
                    setSelectedProject(item);
                    setOpen(true);
                  }}
                  className={as.goBtn}
                >
                  프로젝트 둘러보기
                  <img src={"/img/icon/arrow-b.svg"} alt="화살표 아이콘" />
                </button>
              </div>
              <div>
                <div>
                  <div className={as.gridItemTitleContainer}>
                    <div className="wrap">
                      <h1 className={as.itemProjectName}>{item.name}</h1>
                      <span className={cx(as.gridItemBody, "slash")}>|</span>
                      <span className={as.gridItemBody}>{item.what}</span>
                    </div>
                    <span className={cx(as.gridItemBody, "year")}>
                      ({item.year})
                    </span>
                  </div>
                  <p className={cx(s.projectDes, as.itemBodyMore)}>
                    {item.des}
                  </p>
                </div>

                <div>
                  <div className={cx(as.roundElList, s.projectRoleList)}>
                    {item.role.map((role) => (
                      <div
                        className={cx(as.eachRoundEl, s.projectRole)}
                        key={role}
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                  <div className={as.roundElList}>
                    <div className={as.eachRoundEl}>
                      {item.tech.map((tech, index) => (
                        <span key={index}>
                          {tech}
                          {index !== item.tech.length - 1 ? " · " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* 모달 */}
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
    </Section>
  );
}

import { useEffect, useState, type ReactNode } from "react";
import portrait from "./assets/hero-illustration.png";
import { experienceData, projectData } from "./assets/data/Datas";

const words = ["Frontend", "UI/UX", "Java"];

function App() {
  return (
    <>
      <header className="sticky top-0 z-20 mx-auto flex h-16 w-[calc(100%-2.5rem)] max-w-[720px] items-center justify-between border-b border-neutral-100 bg-white/95 backdrop-blur">
        <a className="text-lg font-semibold tracking-[-0.04em]" href="#top" aria-label="장한원 포트폴리오 처음으로">
          iamhanwon
        </a>
        <nav aria-label="주요 메뉴" className="flex gap-5 font-bold tracking-[-0.04em] sm:gap-7 sm:text-sm md:text-lg">
          <a className="hover:text-neutral-500" href="#projects">Project</a>
          <a className="hover:text-neutral-500" href="#experience">Career</a>
          <a className="hover:text-neutral-500" href="#education">Education</a>
        </nav>
      </header>

      <main id="top" className="mx-auto w-[calc(100%-2.5rem)] max-w-[720px]">
        <section className="relative items-center py-16 sm:py-20" aria-labelledby="hero-title">
          <div className="relative mb-12">
            <div className="z-10 relative ">
              <h1 id="hero-title" className="text-[clamp(2.2rem,8vw,4.2rem)] font-extrabold leading-[1.3] tracking-[-0.075em]">
                안녕하세요,<br />
                <span><RotatingWord />를 좋아하는</span><br />
                개발자 장한원입니다<span className="text-neutral-400">.</span>
              </h1>
            </div>
            <img className="pointer-events-none absolute right-0 z-0 w-28 -translate-y-1/2 object-contain sm:w-40 sm:top-[72px] md:w-56 md:top-1/2 " src={portrait} alt="캐릭터 일러스트" />
          </div>
          <div className="space-y-3 text-xl font-medium">
            <p>사용자가 고민하지 않아도 자연스럽게 이용할 수 있는 웹을 지향합니다.</p>
            <p>작은 불편도 놓치지 않고 더 나은 흐름과 인터랙션으로 개선하는 과정을 좋아합니다.</p>
            <p>Java와 Spring 기반의 개인 프로젝트를 통해 화면 너머의 서비스 구조와 데이터 흐름을 이해하는 개발자로 성장하고 있습니다.</p>
          </div>

          <div className="mt-9 grid justify-items-start gap-y-3 text-md ">
            <div className="flex gap-6">
              <a className="link-arrow font-semibold" href="https://github.com/vellahw" target="_blank" rel="noreferrer">
                <span className="link-arrow-label">Github</span><span className="link-arrow-icon" aria-hidden="true">↗</span>
              </a>
              <a className="link-arrow font-semibold" href="https://tavi.tistory.com/" target="_blank" rel="noreferrer">
                <span className="link-arrow-label">Blog</span><span className="link-arrow-icon" aria-hidden="true">↗</span>
              </a>
              <a className="link-arrow font-semibold" href="https://my.surfit.io/w/1415583333" target="_blank" rel="noreferrer">
                <span className="link-arrow-label">Resume</span><span className="link-arrow-icon" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-b border-neutral-100 py-16 sm:py-20" aria-labelledby="projects-title">
          <SectionHeading title="Project" id="projects-title"/>
          <div className="divide-y divide-neutral-100">
            {projectData.map((project) => (
              <article className="py-7" key={project.thumbSrc}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-3 sm:grid-cols-[5rem_1fr] sm:gap-4">
                  <span className="pt-1 text-sm tabular-nums text-neutral-500">{project.year}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                      <h3 className="font-bold text-3xl">{project.name}</h3>
                      {project.liveHref &&
                          <a className="link-arrow text-lg" href={project.liveHref} target="_blank" rel="noreferrer">
                              <span className="link-arrow-label">sadaribooks.com</span>
                              <span className="link-arrow-icon" aria-hidden="true">↗</span>
                          </a>
                      }
                    </div>
                  </div>
                </div>
                <div className="ml-[4.25rem] mt-5 space-y-2 text-lg leading-7 sm:ml-24">
                  {project.des.map((line) => <p key={line}>{line}</p>)}
                </div>
                <div className="ml-[4.25rem] mt-6 space-y-6 sm:ml-24">
                  {project.team && <div>
                    <h4 className="mb-2 text-lg font-bold  text-neutral-700">개발 인원</h4>
                    <p className="text-lg leading-6">{project.team}</p>
                  </div>}
                  <div>
                    <h4 className="mb-2 text-lg font-bold  text-neutral-700">맡은 역할</h4>
                    <ul className="list-disc space-y-1 pl-4 text-lg leading-6">{project.role.map((role) => <li key={role}>{role}</li>)}</ul>
                  </div>
                  {project.features && <div>
                    <h4 className="mb-2 text-lg font-bold  text-neutral-700">기능 구현</h4>
                    <ul className="list-disc space-y-2 pl-4 text-lg leading-7 ">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  </div>}
                  <div>
                    <h4 className="mb-2 text-lg font-bold  text-neutral-700">개발 환경</h4>
                    <TagList items={project.tech} />
                    <div className="mt-4 flex flex-wrap gap-5 text-sm text-neutral-600">
                      <a className="link-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 저장소 열기`}><span className="link-arrow-label">GitHub</span><span className="link-arrow-icon" aria-hidden="true">↗</span></a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 border-b border-neutral-100 py-16 sm:py-20" aria-labelledby="experience-title">
          <SectionHeading title="Career" id="experience-title" note="2023 — 2026" />
          <div className="divide-y divide-neutral-100">
            {experienceData.map((experience) => (
              <Experience key={experience.company} period={experience.period} company={experience.company} role={experience.role}>
                {experience.description && <p className="mb-5 text-sm leading-7 text-neutral-600">{experience.description} {experience.website && <a className="link-arrow" href={experience.website.href} target="_blank" rel="noreferrer"><span className="link-arrow-label">{experience.website.label}</span><span className="link-arrow-icon" aria-hidden="true">↗</span></a>}</p>}
                {experience.groups.map((group) => <ExperienceGroup key={group.title} title={group.title}>{group.items.map((item) => <li key={item}>{item}</li>)}</ExperienceGroup>)}
                {experience.projects && <div className="mt-5 border-t border-neutral-100 pt-4">
                  <h4 className="mb-2 text-base font-medium text-neutral-500">주요 프로젝트</h4>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-base text-neutral-700">
                    {experience.projects.map((project) => <li key={project.src}>{project.href ? <a className="link-arrow" href={project.href} target="_blank" rel="noreferrer"><span className="link-arrow-label">{project.name}</span><span className="link-arrow-icon" aria-hidden="true">↗</span></a> : <span>{project.name}</span>}</li>)}
                  </ul>
                </div>}
                {experience.tech && <TagList items={experience.tech} />}
              </Experience>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-20 border-b border-neutral-100 py-16 sm:py-20" aria-labelledby="education-title">
          <SectionHeading title="Education & Certification" id="education-title" />
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-sm font-semibold">학력 · 교육</h3>
              <ul className="divide-y divide-neutral-100 border-t border-neutral-100 text-base">
                <Fact period="2024.03 — 재학 중" name="한국방송통신대학교" detail="컴퓨터과학과" />
                <Fact period="2023.05 — 2023.07" name="한국에이아이블록체인융합원" detail="블록체인 기반 기술 사업화 전문 인력 양성 과정" />
                <Fact period="2022.07 — 2023.03" name="이젠컴퓨터아카데미" detail="AWS 클라우드 기반 Java 개발자 과정" />
              </ul>
            </div>
            <div className="border-t border-neutral-100 pt-3 text-sm">
              <h3 className="font-semibold">자격</h3>
              <p className="mt-1 text-neutral-600">정보처리기능사</p>
            </div>
          </div>
        </section>

        <footer className="flex justify-between py-5 text-xs text-neutral-500">
          <span>© 2026 장한원 <a className="transition-colors hover:text-neutral-500" href="mailto:iamhanwon@gmail.com">iamhanwon@gmail.com</a></span>
          <a className="link-arrow link-arrow-up" href="#top">
            <span className="link-arrow-label">맨 위로</span>
            <span className="link-arrow-icon" aria-hidden="true">↑</span>
          </a>
        </footer>
      </main>
    </>
  );
}

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const pause = !deleting && value === word ? 1100 : deleting && value === "" ? 250 : deleting ? 55 : 95;
    const timer = window.setTimeout(() => {
      if (!deleting && value === word) setDeleting(true);
      else if (deleting && value === "") {
        setDeleting(false);
        setIndex((current) => (current + 1) % words.length);
      } else setValue((current) => deleting ? current.slice(0, -1) : word.slice(0, current.length + 1));
    }, pause);
    return () => window.clearTimeout(timer);
  }, [deleting, index, value]);

  return <span className="text-neutral-400" aria-label={words[index]}>{value}<span className="ml-0.5 inline-block h-[.9em] w-px translate-y-1 bg-neutral-500 animate-pulse" aria-hidden="true" /></span>;
}

function SectionHeading({ title, id, note }: { title: string; id: string; note?: string }) {
  return <div className="mb-7 flex items-end justify-between gap-5 border-b border-neutral-900 pb-4">
    <div className="flex items-baseline gap-3"><h2 id={id} className="text-3xl font-bold tracking-[-0.05em]">{title}</h2></div>{note && <span className="text-right text-[11px] text-neutral-500">{note}</span>}</div>;
}

function Fact({ period, name, detail }: { period: string; name: string; detail: string }) {
  return <li className="grid grid-cols-[7rem_1fr] gap-2 py-2"><time className="text-xs text-neutral-500">{period}</time><span>{name}<small className="block text-neutral-500">{detail}</small></span></li>;
}

function Experience({ period, company, role, children }: { period: string; company: string; role?: string; children?: ReactNode }) {
  return <article className="grid gap-3 py-7 sm:grid-cols-[8.5rem_1fr] sm:gap-6"><time className="pt-1 text-xs tabular-nums text-neutral-500">{period}</time><div><h3 className="text-lg font-semibold tracking-[-0.03em]">{company}</h3>{role && <p className="mb-4 mt-1 text-base text-neutral-500">{role}</p>}{children}</div></article>;
}

function ExperienceGroup({ title, children }: { title: string; children: ReactNode }) {
  return <div className="mb-4"><h4 className="mb-1.5 text-base font-semibold">{title}</h4><ul className="list-disc space-y-1 pl-4 text-base leading-6 text-neutral-600">{children}</ul></div>;
}

function TagList({ items }: { items: string[] }) {
  return <ul className="mt-4 flex flex-wrap gap-1.5">{items.map((item) => <li className="rounded-sm border border-neutral-100 px-2 py-0.5 text-sm text-neutral-600" key={item}>{item}</li>)}</ul>;
}

export default App;

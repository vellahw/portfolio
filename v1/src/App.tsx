import { useEffect, useState, type ReactNode } from "react";
import portrait from "./assets/hero-illustration.png";
import { projectData, worksData } from "./assets/data/Datas";

const words = ["Frontend", "UI/UX", "Java"];
const clinicProjects = worksData.filter((work) => work.src !== "xesnara");
const projectTech = ["JavaScript", "PHP", "그누보드", "WordPress", "React", "TypeScript"];

function App() {
  return (
    <>
      <header className="sticky top-0 z-20 mx-auto flex h-16 w-[calc(100%-2.5rem)] max-w-[720px] items-center justify-between border-b border-neutral-200 bg-white/95 backdrop-blur">
        <a className="text-lg font-semibold tracking-[-0.08em]" href="#top" aria-label="장한원 포트폴리오 처음으로">HW<span className="text-neutral-400">.</span></a>
        <nav aria-label="주요 메뉴" className="flex gap-5 text-xs text-neutral-600 sm:gap-7 sm:text-sm">
          <a className="hover:text-black" href="#profile">소개</a>
          <a className="hover:text-black" href="#experience">경력</a>
          <a className="hover:text-black" href="#projects">프로젝트</a>
        </nav>
      </header>

      <main id="top" className="mx-auto w-[calc(100%-2.5rem)] max-w-[720px]">
        <section className="relative items-center border-b border-neutral-200 py-16 sm:py-20" aria-labelledby="hero-title">
          <div className="z-10 relative">
            <h1 id="hero-title" className="text-[clamp(2.2rem,8vw,4rem)] font-semibold leading-[1.3] tracking-[-0.075em]">
              안녕하세요,<br />
              <span><RotatingWord />를 좋아하는</span><br />
              개발자 장한원입니다.
            </h1>
            <div className="mt-7 grid justify-items-start gap-y-2 text-sm">
              <a className="transition-colors hover:text-neutral-500" href="mailto:iamhanwon@gmail.com">iamhanwon@gmail.com <span aria-hidden="true">↗</span></a>
              <div className="flex gap-5">
                <a className="transition-colors hover:text-neutral-500" href="https://github.com/vellahw" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                <a className="transition-colors hover:text-neutral-500" href="https://tavi.tistory.com/" target="_blank" rel="noreferrer">Blog <span aria-hidden="true">↗</span></a>
              </div>
              <a className="transition-colors hover:text-neutral-500" href="https://my.surfit.io/w/1415583333" target="_blank" rel="noreferrer">이력서 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <img className="pointer-events-none absolute right-0 z-0 w-28 -translate-y-1/2 object-contain sm:w-40 sm:top-[143px] md:w-60 md:top-1/2 " src={portrait} alt="캐릭터 일러스트" />
        </section>

        <section id="profile" className="scroll-mt-20 border-b border-neutral-200 py-16 sm:py-20" aria-labelledby="profile-title">
          <SectionHeading index="01" title="프로필" id="profile-title" />
          <div className="grid gap-10 sm:grid-cols-[1.1fr_.9fr] sm:gap-12">
            <div className="space-y-4 text-sm leading-7 text-neutral-600">
              <p>에이전시에서 국내외 병·의원 홈페이지 리뉴얼의 프론트엔드 개발을 주도했고, 이후 Nuxt와 TypeScript 기반 서비스 개발로 영역을 넓혔습니다.</p>
              <p>다국어 콘텐츠 학습, 구독 결제, 통합 인증처럼 사용자 상태와 서비스 정책에 따라 달라지는 흐름을 설계하고 구현합니다.</p>
              <p>사용자 경험 개선을 통해 Lighthouse SEO 점수를 90~100점대로 높였으며, 팀 프로젝트 대상과 교육과정 우수상을 수상했습니다.</p>
            </div>
            <aside aria-label="학력 및 자격" className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-semibold">학력 · 교육</h3>
                <ul className="divide-y divide-neutral-100 border-t border-neutral-200 text-xs">
                  <Fact period="2024.03 — 재학 중" name="한국방송통신대학교" detail="컴퓨터과학과" />
                  <Fact period="2023.05 — 2023.07" name="한국에이아이블록체인융합원" detail="블록체인 기반 기술 사업화 전문 인력 양성 과정" />
                  <Fact period="2022.07 — 2023.03" name="이젠컴퓨터아카데미" detail="AWS 클라우드 기반 Java 개발자 과정" />
                </ul>
              </div>
              <div className="border-t border-neutral-200 pt-3 text-sm"><h3 className="font-semibold">자격</h3><p className="mt-1 text-neutral-600">정보처리기능사</p></div>
            </aside>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 border-b border-neutral-200 py-16 sm:py-20" aria-labelledby="experience-title">
          <SectionHeading index="02" title="Career" id="experience-title" note="2023 — 2026" />
          <div className="divide-y divide-neutral-200">
            <Experience period="2026.06 — 2026.08" company="(주)한국심리교육원" role="프론트엔드 개발 · 제스나라">
              <p className="mb-5 text-sm leading-7 text-neutral-600">마음·행복, 부부, 성에너지 등 지식 콘텐츠를 제공하는 플랫폼에서 Nuxt.js와 TypeScript로 다국어 콘텐츠, 구독 결제, 사용자 인증을 개발했습니다. <a className="underline decoration-neutral-400 underline-offset-4 hover:text-neutral-500" href="https://www.xesnara.com/" target="_blank" rel="noreferrer">xesnara.com ↗</a></p>
              <ExperienceGroup title="다국어 콘텐츠 비교 학습">
                <li>한국어 원문과 선택 언어 번역본을 좌우 패널에 제공하고, 패널별 상태 모델로 언어·API 응답 불일치 문제를 해결했습니다.</li>
                <li>언어별 문장 길이와 HTML 구조 차이를 고려해 태그를 보존하며 본문을 안정적으로 분할하고, 보기 모드 전환 시 언어 상태를 자연스럽게 복원했습니다.</li>
              </ExperienceGroup>
              <ExperienceGroup title="NICEPAY · Payletter 구독 결제">
                <li>PG별 요청과 결과 조회를 분리하고 성공·실패·대기 상태를 공통 모델로 통합해 하나의 체크아웃 흐름을 구축했습니다.</li>
                <li>오류 응답을 사용자 관점의 실패 유형으로 정리하고, 재시도 가능 여부와 고객센터 안내를 제공했습니다.</li>
              </ExperienceGroup>
              <ExperienceGroup title="이메일 · Google 통합 인증">
                <li>중복 가입, 재가입 제한, 인증 만료를 구분해 회원가입과 인증 메일 재발송 흐름을 구현하고 검증 정책을 공통화했습니다.</li>
                <li>기기별 활성 세션을 감지해 사용자가 확인한 뒤 기존 세션을 전환하는 중복 로그인 흐름을 구현했습니다.</li>
              </ExperienceGroup>
              <TagList items={["Nuxt.js", "TypeScript", "i18n", "NICEPAY", "Payletter"]} />
            </Experience>

            <Experience period="2024.04 — 2026.01" company="주식회사 엔셀텍바이오랩" role="프론트엔드 개발">
              <p className="mb-4 text-sm leading-7 text-neutral-600">국내외 병·의원 홈페이지 리뉴얼에서 반응형·적응형 UI와 동적 인터랙션, 사용자 기능 개발 및 운영 유지보수를 주도했습니다.</p>
              <ExperienceGroup title="주요 개발 경험">
                <li>예약·상담 전환이 중요한 페이지의 UI와 CTA 배치를 구성·개선하고, SEO 작업으로 Lighthouse 점수를 90~100점대로 높였습니다.</li>
                <li>로그인·회원가입·소셜 로그인·페이징 기능을 개발하고, 그누보드·WordPress CMS 수정과 운영 이슈 대응을 맡았습니다.</li>
                <li>React·TypeScript 기반 컴포넌트 개발에도 참여했습니다.</li>
              </ExperienceGroup>
              <div className="mt-5 border-t border-neutral-100 pt-4">
                <h4 className="mb-2 text-xs font-medium text-neutral-500">주요 프로젝트</h4>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-700">
                  {clinicProjects.map((work) => <li key={work.src}>{work.href ? <a className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-500" href={work.href} target="_blank" rel="noreferrer">{work.name} <span aria-hidden="true">↗</span></a> : <span>{work.name}</span>}</li>)}
                </ul>
              </div>
              <TagList items={projectTech} />
            </Experience>

            <Experience period="2023.08 — 2023.09" company="해커스홀딩스">

            </Experience>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-b border-neutral-200 py-16 sm:py-20" aria-labelledby="projects-title">
          <SectionHeading index="03" title="프로젝트" id="projects-title" note="개인 및 팀 프로젝트" />
          <div className="divide-y divide-neutral-200 border-t border-neutral-200">
            {projectData.map((project, index) => (
              <article className="py-7" key={project.thumbSrc}>
                <div className="grid grid-cols-[3.5rem_1fr_1.5rem] gap-3 sm:grid-cols-[5rem_1fr_1.5rem] sm:gap-4">
                  <span className="pt-1 text-xs tabular-nums text-neutral-500">{String(index + 1).padStart(2, "0")} / {project.year}</span>
                  <div><h3 className="font-semibold">{project.name}</h3><p className="mt-1 text-xs text-neutral-500">{project.what}</p></div>
                  <a className="justify-self-end text-neutral-600 hover:text-black" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub 저장소 열기`}>↗</a>
                </div>
                <ul className="ml-[4.25rem] mt-4 list-disc space-y-1 pl-4 text-xs leading-6 text-neutral-600 sm:ml-24">{project.des.split("\n").map((line) => <li key={line}>{line.replace(/^-\s*/, "")}</li>)}</ul>
                <div className="ml-[4.25rem] mt-5 grid gap-5 sm:ml-24 sm:grid-cols-[1fr_auto]">
                  <div><h4 className="mb-2 text-xs text-neutral-500">담당 역할</h4><ul className="space-y-1 text-xs leading-5 text-neutral-600">{project.role.map((role) => <li key={role}>{role}</li>)}</ul></div>
                  <div><h4 className="mb-2 text-xs text-neutral-500">기술</h4><TagList items={project.tech} /></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex justify-between py-5 text-xs text-neutral-500"><span>© 2026 장한원</span><a className="hover:text-black" href="#top">맨 위로 ↑</a></footer>
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

  return <span className="text-neutral-500" aria-label={words[index]}>{value}<span className="ml-0.5 inline-block h-[.9em] w-px translate-y-1 bg-neutral-500 animate-pulse" aria-hidden="true" /></span>;
}

function SectionHeading({ index, title, id, note }: { index: string; title: string; id: string; note?: string }) {
  return <div className="mb-7 flex items-end justify-between gap-5 border-b border-neutral-900 pb-4"><div className="flex items-baseline gap-3"><span className="text-xs tabular-nums text-neutral-500">{index} /</span><h2 id={id} className="text-2xl font-semibold tracking-[-0.05em]">{title}</h2></div>{note && <span className="text-right text-[11px] text-neutral-500">{note}</span>}</div>;
}

function Fact({ period, name, detail }: { period: string; name: string; detail: string }) {
  return <li className="grid grid-cols-[7rem_1fr] gap-2 py-2"><time className="text-neutral-500">{period}</time><span>{name}<small className="block text-neutral-500">{detail}</small></span></li>;
}

function Experience({ period, company, role, children }: { period: string; company: string; role?: string; children?: ReactNode }) {
  return <article className="grid gap-3 py-7 sm:grid-cols-[8.5rem_1fr] sm:gap-6"><time className="pt-1 text-xs tabular-nums text-neutral-500">{period}</time><div><h3 className="text-lg font-semibold tracking-[-0.03em]">{company}</h3>{role && <p className="mb-4 mt-1 text-xs text-neutral-500">{role}</p>}{children}</div></article>;
}

function ExperienceGroup({ title, children }: { title: string; children: ReactNode }) {
  return <div className="mb-4"><h4 className="mb-1.5 text-xs font-semibold">{title}</h4><ul className="list-disc space-y-1 pl-4 text-xs leading-6 text-neutral-600">{children}</ul></div>;
}

function TagList({ items }: { items: string[] }) {
  return <ul className="mt-4 flex flex-wrap gap-1.5">{items.map((item) => <li className="rounded-sm border border-neutral-200 px-2 py-0.5 text-[10px] text-neutral-600" key={item}>{item}</li>)}</ul>;
}

export default App;

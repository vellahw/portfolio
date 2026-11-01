import type { ReactNode } from "react";
import { projectData } from "../../assets/data/Datas";
import { ArrowLink, PageSection, TagList } from "../shared";

const projectImages = import.meta.glob("../../assets/project-*.png", { eager: true, import: "default", query: "?url" }) as Record<string, string>;

function getProjectImage(project: string, thumbSrc?: string) {
  return projectImages[`../../assets/project-${project}${thumbSrc ? `-${thumbSrc}` : ""}.png`];
}

function ProjectsSection() {
  return (
    <PageSection id="projects" title="개인 프로젝트">
    <div className="divide-y divide-neutral-100">
      {projectData.map((project) => <article className="py-7" key={project.thumbSrc}>
        <div className="grid grid-column-[1fr] gap-3 sm:gap-4">
          <span className="pt-1 text-sm tabular-nums text-neutral-500">{project.year}</span>
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                <h3 className="text-3xl font-bold">{project.name}</h3>
                {project.liveHref && <ArrowLink className="featured-link text-lg" href={project.liveHref} label="sadaribooks.com" />}
              </div>
              <ProjectGitHubLink href={project.href} name={project.name} />
            </div>
            {project.thumbSrc === "sadari" && <img className="mt-6 block h-auto w-full" src={getProjectImage(project.thumbSrc)} width="664" height="324" alt="SADARI 독서 플랫폼 주요 화면" />}
          </div>
        </div>

        <div className="ml-0 mt-5 space-y-2 text-lg leading-7">
          {project.des.map((line) => <p key={line}>{line}</p>)}
        </div>

        <div className="ml-0 mt-6 space-y-6">
          {project.period &&
              <ProjectBlock title="개발 기간">
                  <p className="text-lg leading-6">{project.period}</p>
              </ProjectBlock>
          }<>
          {project.team &&
              <ProjectBlock title="개발 인원">
                  <p className="text-lg leading-6">{project.team}</p>
              </ProjectBlock>
          }
          <ProjectBlock title="맡은 역할">
            <ul className="list-disc space-y-1 pl-4 text-lg leading-6">{project.role.map((role) => <li
              key={role}>{role}</li>)}</ul>
          </ProjectBlock>
        </>
          {project.sections?.map((section) => <ProjectBlock title={section.title} key={section.title}>
            <ul className="list-disc space-y-2 pl-4 text-lg leading-7">
              {section.items.map((item) => <li className={typeof item === "string" ? "leading-8" : "list-none"} key={typeof item === "string" ? item : item.thumbSrc}>
                {typeof item === "string" ? item : <div className="mb-4">
                  <h5 className="mb-3 text-xl font-bold text-neutral-900">{item.title}</h5>
                  <img className="mb-3 block h-auto rounded-md border border-neutral-100" src={getProjectImage(project.thumbSrc, item.thumbSrc)} alt={`${item.title} 화면`} width={500} />
                  <ul className="list-disc text-[#171717]"><li className="leading-8">{item.des}</li></ul>
                </div>}
              </li>)}
            </ul>
          </ProjectBlock>)}

          {project.features && <ProjectBlock title="기능 구현">
            <ul className="list-disc space-y-2 pl-4 text-lg leading-7">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </ProjectBlock>}
          <ProjectBlock title="개발 환경"><TagList items={project.tech} /></ProjectBlock>
        </div>
      </article>)}
    </div>
  </PageSection>
  );
}

function ProjectBlock({ title, children }: { title: string; children: ReactNode }) {
  return <div><h4 className="mb-2 text-lg font-bold text-neutral-700">{title}</h4>{children}</div>;
}

function GitHubIcon() {
  return <svg aria-hidden="true" className="shrink-0" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.726 16.284C6.761 15.924 4.672 13.791 4.672 11.028C4.672 9.905 5.076 8.692 5.75 7.884C5.458 7.143 5.503 5.57 5.84 4.919C6.738 4.807 7.951 5.279 8.67 5.929C9.523 5.66 10.422 5.525 11.523 5.525C12.623 5.525 13.522 5.66 14.33 5.907C15.026 5.278 16.262 4.807 17.16 4.919C17.475 5.525 17.52 7.098 17.227 7.861C17.947 8.715 18.328 9.861 18.328 11.028C18.328 13.791 16.239 15.88 13.23 16.262C13.993 16.756 14.51 17.834 14.51 19.069V21.405C14.51 22.079 15.071 22.461 15.745 22.191C19.811 20.641 23 16.576 23 11.545C23 5.188 17.834 0 11.478 0C5.12 0 0 5.188 0 11.545C0 16.531 3.167 20.665 7.435 22.214C8.041 22.439 8.625 22.034 8.625 21.428V19.63C8.28327 19.7728 7.91734 19.8489 7.547 19.854C6.064 19.854 5.188 19.046 4.56 17.541C4.313 16.934 4.043 16.575 3.526 16.508C3.256 16.485 3.167 16.373 3.167 16.238C3.167 15.968 3.617 15.767 4.065 15.767C4.717 15.767 5.278 16.171 5.862 17.002C6.312 17.653 6.783 17.945 7.345 17.945C7.906 17.945 8.265 17.743 8.782 17.226C9.164 16.845 9.456 16.509 9.726 16.284Z" fill="currentColor" /></svg>;
}

function ProjectGitHubLink({ href, name }: { href: string; name: string }) {
  return <a className="github-link inline-flex shrink-0" href={href} target="_blank" rel="noreferrer" aria-label={`${name} GitHub 저장소 열기`}><GitHubIcon /></a>;
}

export default ProjectsSection;

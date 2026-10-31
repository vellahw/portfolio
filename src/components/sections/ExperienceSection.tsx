import type { ReactNode } from "react";
import { experienceData } from "../../assets/data/Datas";
import { ArrowLink, PageSection, TagList } from "../shared";

function ExperienceSection() {
  return <PageSection id="experience" title="커리어" note="2023 — 2026">
    <div className="divide-y divide-neutral-100">
      {experienceData.map((experience) => <Experience key={experience.company} period={experience.period} company={experience.company} role={experience.role}>
        {experience.description && <ExperienceDescription description={experience.description} website={experience.website} />}
        {experience.groups.map((group) => <ExperienceGroup key={group.title} title={group.title}>{group.items.map((item) => <li key={item}>{item}</li>)}</ExperienceGroup>)}
        {experience.projects && <div className="mb-6 mt-5 border-t border-neutral-100 pt-4">
          <h4 className="mb-2 text-lg font-bold text-neutral-700">주요 프로젝트</h4>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-md">
            {experience.projects.map((project) => <li key={project.src}>{project.href ? <ArrowLink href={project.href} label={project.name} /> : <span>{project.name}</span>}</li>)}
          </ul>
        </div>}
        {experience.tech && <TagList items={experience.tech} />}
      </Experience>)}
    </div>
  </PageSection>;
}

function Experience({ period, company, role, children }: { period: string; company: string; role?: string; children?: ReactNode }) {
  return <article className="grid gap-3 py-7 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
    <div><time className="block pt-1 text-sm tabular-nums text-neutral-500">{period}</time>{role && <p className="mt-1 text-sm text-neutral-500">{role}</p>}</div>
    <div><h3 className="text-2xl font-bold">{company}</h3><div className="mt-5">{children}</div></div>
  </article>;
}

function ExperienceGroup({ title, children }: { title: string; children: ReactNode }) {
  return <div className="mb-6"><h4 className="mb-2 text-xl font-bold">{title}</h4><ul className="list-disc space-y-2 pl-4 text-lg leading-7">{children}</ul></div>;
}

function ExperienceDescription({ description, website }: { description: string; website?: { href: string; label: string } }) {
  const linkIndex = website ? description.indexOf(website.label) : -1;
  if (!website || linkIndex === -1) return <p className="mb-5 text-lg leading-7">{description}</p>;

  return <p className="mb-7 text-lg leading-7">
    {description.slice(0, linkIndex)}
    <a className="featured-link link-arrow" href={website.href} target="_blank" rel="noreferrer"><span className="link-arrow-label">{website.label}</span></a>
    {description.slice(linkIndex + website.label.length)}
  </p>;
}

export default ExperienceSection;

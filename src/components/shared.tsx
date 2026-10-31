import type { ReactNode } from "react";

export function PageSection({ id, title, note, children }: { id: string; title: string; note?: string; children: ReactNode }) {
  const titleId = `${id}-title`;

  return <section id={id} className="scroll-mt-20 py-16 sm:py-20" aria-labelledby={titleId}>
    <div className="mb-7 flex items-end justify-between gap-5 border-b border-neutral-900 pb-4">
      <h2 id={titleId} className="text-3xl font-bold tracking-[-0.05em]">{title}</h2>
      {note && <span className="text-right text-[11px] text-neutral-500">{note}</span>}
    </div>
    {children}
  </section>;
}

export function ArrowLink({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return <a className={`link-arrow ${className}`} href={href} target="_blank" rel="noreferrer">
    <span className="link-arrow-label">{label}</span>
    <span className="link-arrow-icon" aria-hidden="true">↗</span>
  </a>;
}

export function TagList({ items }: { items: string[] }) {
  return <ul className="mt-4 flex flex-wrap gap-2">
    {items.map((item) => <li className="rounded-sm bg-neutral-100 px-2 py-0.5 text-md" key={item}>{item}</li>)}
  </ul>;
}

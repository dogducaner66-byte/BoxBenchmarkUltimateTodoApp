import type { ReactNode } from 'react';

type ContentSectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  children: ReactNode;
  accent?: boolean;
};

export function ContentSection({
  accent = false,
  children,
  description,
  eyebrow,
  id,
  title,
}: ContentSectionProps) {
  return (
    <section className={`panel ${accent ? 'panel--accent' : 'panel--framed'}`} aria-labelledby={id}>
      <div className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

import type { ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
};

export function PageHero({
  actions,
  aside,
  children,
  description,
  eyebrow,
  title,
}: PageHeroProps) {
  return (
    <section className="panel panel--accent route-hero">
      <div className="route-hero__content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="hero-copy">{description}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
        {children}
      </div>
      {aside ? <div className="route-hero__aside">{aside}</div> : null}
    </section>
  );
}

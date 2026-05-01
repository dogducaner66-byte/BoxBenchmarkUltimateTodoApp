import type { CommerceCard } from '../../content/cafeContent';

type InfoCardGridProps = {
  items: CommerceCard[];
  cardClassName?: string;
  stacked?: boolean;
};

export function InfoCardGrid({
  cardClassName = '',
  items,
  stacked = false,
}: InfoCardGridProps) {
  return (
    <div className={`card-grid${stacked ? ' card-grid--stacked' : ''}`}>
      {items.map((item) => (
        <article className={`card ${cardClassName}`.trim()} key={item.title}>
          {item.eyebrow ? <span className="card__eyebrow">{item.eyebrow}</span> : null}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.details?.length ? (
            <ul className="feature-list">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          ) : null}
          {item.links?.length ? (
            <div className="link-list">
              {item.links.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  rel={link.external ? 'noreferrer' : undefined}
                  target={link.external ? '_blank' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

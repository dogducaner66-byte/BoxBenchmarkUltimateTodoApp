import { Link } from 'react-router-dom';
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
              {item.links.map((link) =>
                link.external ? (
                  <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} to={link.href}>
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

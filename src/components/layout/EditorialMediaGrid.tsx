import type { EditorialMediaItem } from '../../content/cafeContent';

type EditorialMediaGridProps = {
  items: EditorialMediaItem[];
};

export function EditorialMediaGrid({ items }: EditorialMediaGridProps) {
  return (
    <div className="media-grid">
      {items.map((item) => (
        <figure className="media-card" key={`${item.imageSrc}-${item.title}`}>
          <img alt={item.imageAlt} loading="lazy" src={item.imageSrc} />
          <figcaption>
            <span className="card__eyebrow">{item.eyebrow}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

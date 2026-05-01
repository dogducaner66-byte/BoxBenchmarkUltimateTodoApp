import type { EditorialMediaItem } from '../../content/cafeContent';
import { StorefrontImage } from './StorefrontImage';

type EditorialMediaGridProps = {
  items: EditorialMediaItem[];
};

export function EditorialMediaGrid({ items }: EditorialMediaGridProps) {
  return (
    <div className="media-grid">
      {items.map((item) => (
        <figure className="media-card" key={`${item.image.src}-${item.title}`}>
          <StorefrontImage asset={item.image} className="media-card__media" />
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

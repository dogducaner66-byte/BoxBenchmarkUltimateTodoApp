import type { ProductSpec } from '../../content/cafeContent';

type SpecListProps = {
  title: string;
  specs: ProductSpec[];
};

export function SpecList({ specs, title }: SpecListProps) {
  return (
    <article className="card spec-card">
      <span className="card__eyebrow">Teknik ozellikler</span>
      <h3>{title}</h3>
      <dl className="spec-list">
        {specs.map((spec) => (
          <div className="spec-list__item" key={spec.label}>
            <dt>{spec.label}</dt>
            <dd>{spec.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

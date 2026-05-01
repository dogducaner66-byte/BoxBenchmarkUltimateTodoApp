import { BookingLink } from '../components/BookingLink';
import { ContentSection } from '../components/layout/ContentSection';
import { PageHero } from '../components/layout/PageHero';
import { bookingTarget, menuPageIntro, menuSections } from '../content/cafeContent';

export function MenuPage() {
  return (
    <>
      <PageHero
        actions={<BookingLink className="button button--primary" label={bookingTarget.heroLabel} />}
        description={menuPageIntro.description}
        eyebrow={menuPageIntro.eyebrow}
        title={menuPageIntro.title}
      />

      {menuSections.map((section) => (
        <ContentSection
          accent={section.eyebrow === 'Kahve bari'}
          eyebrow={section.eyebrow}
          key={section.title}
          title={section.title}
          description={section.description}
        >
          <div className="card-grid">
            {section.items.map((item) => (
              <article className="card card--detail" key={item.name}>
                <span className="card__eyebrow">{item.price}</span>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </ContentSection>
      ))}
    </>
  );
}

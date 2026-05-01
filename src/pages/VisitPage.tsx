import { BookingLink } from '../components/BookingLink';
import { ContentSection } from '../components/layout/ContentSection';
import { InfoCardGrid } from '../components/layout/InfoCardGrid';
import { PageHero } from '../components/layout/PageHero';
import { bookingTarget, visitCards, visitPageIntro } from '../content/cafeContent';

export function VisitPage() {
  return (
    <>
      <PageHero
        actions={<BookingLink className="button button--primary" label={bookingTarget.sectionLabel} />}
        description={visitPageIntro.description}
        eyebrow={visitPageIntro.eyebrow}
        title={visitPageIntro.title}
      />

      <ContentSection
        accent
        description="Adres, saat ve iletisim ayni gorsel hiyerarsi ile sunuldugunda ilk ziyaretin friksiyonu azalir."
        eyebrow="Ziyaret rehberi"
        id="visit-cards"
        title="Konum, saatler ve temas bilgileri farkli ziyaret niyetlerine gore ayriliyor."
      >
        <InfoCardGrid cardClassName="card--detail" items={visitCards} />
      </ContentSection>
    </>
  );
}

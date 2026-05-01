import { Link } from 'react-router-dom';
import { BookingLink } from '../components/BookingLink';
import { ContentSection } from '../components/layout/ContentSection';
import { InfoCardGrid } from '../components/layout/InfoCardGrid';
import { PageHero } from '../components/layout/PageHero';
import {
  bookingTarget,
  reservationDetails,
  reservationMoments,
  reservationPageIntro,
} from '../content/cafeContent';

export function ReservationsPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <BookingLink className="button button--primary" label={bookingTarget.sectionLabel} />
            <Link className="button button--secondary" to="/ziyaret">
              Ulasimi gor
            </Link>
          </>
        }
        description={reservationPageIntro.description}
        eyebrow={reservationPageIntro.eyebrow}
        title={reservationPageIntro.title}
      />

      <ContentSection
        accent
        description="Her kart rezervasyon oncesi en cok sorulan konulardan birini bagimsiz olarak cevaplar."
        eyebrow="Seans yapisi"
        id="reservation-moments"
        title="Brunch, gun batimi ve kucuk bulusma akislari ayri maddelerle tanimlaniyor."
      >
        <InfoCardGrid items={reservationMoments} />
      </ContentSection>

      <ContentSection
        description="Telefon ve sayfa icerigi birbiriyle celismedigi icin ekip daha az tekrar eden soruya maruz kalir."
        eyebrow="Politika notlari"
        id="reservation-notes"
        title="Rezervasyon rotasi ekip operasyonunu destekleyen net bir bilgilendirme katmani ekliyor."
      >
        <div className="card-grid card-grid--stacked">
          <article className="card">
            <h3>Misafirin gordugu standartlar</h3>
            <ul className="feature-list">
              {reservationDetails.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </ContentSection>
    </>
  );
}

import { Link } from 'react-router-dom';
import { ContentSection } from '../components/layout/ContentSection';
import { InfoCardGrid } from '../components/layout/InfoCardGrid';
import { PageHero } from '../components/layout/PageHero';
import { contactCards, contactPageIntro, showroomNotes } from '../content/cafeContent';

export function ContactPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <Link className="button button--primary" to="/kategoriler">
              Koleksiyona don
            </Link>
            <Link className="button button--secondary" to="/teslimat-iade">
              Kargo sorulari
            </Link>
          </>
        }
        description={contactPageIntro.description}
        eyebrow={contactPageIntro.eyebrow}
        title={contactPageIntro.title}
      />

      <ContentSection
        accent
        description="Her temas noktasi farkli bir ihtiyac icin tasarlandigi icin kullanici dogru ekibe en kisa yoldan ulasir."
        eyebrow="Temas kanallari"
        id="contact-cards"
        title="Showroom, destek ve kurumsal talepler ayri kartlarda toplanir."
      >
        <InfoCardGrid cardClassName="card--detail" items={contactCards} />
      </ContentSection>

      <ContentSection
        description="Showroom deneyimini acik anlatmak, premium urunde beden ve doku tereddudunu belirgin sekilde dusurur."
        eyebrow="Randevu notlari"
        id="showroom-notes"
        title="Deneme randevusu once net beklenti, sonra rahat karar ortami sunuyor."
      >
        <div className="split-layout">
          <article className="card">
            <span className="card__eyebrow">Showroom akisi</span>
            <h3>Bomonti'de sakin ve rehberli bir deneme alani</h3>
            <p>
              Teknik katmanlar, botlar ve kamp aksesuarlarinin ayni yerde gorulebildigi showroom
              randevularinda ekip kullanim senaryonuza gore kombinasyon tavsiyesi de verir.
            </p>
          </article>
          <article className="card">
            <span className="card__eyebrow">Hazirlik listesi</span>
            <ul className="feature-list">
              {showroomNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        </div>
      </ContentSection>
    </>
  );
}

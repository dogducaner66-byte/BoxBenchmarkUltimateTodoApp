import { Link } from 'react-router-dom';
import { BookingLink } from '../components/BookingLink';
import { ContentSection } from '../components/layout/ContentSection';
import { InfoCardGrid } from '../components/layout/InfoCardGrid';
import { PageHero } from '../components/layout/PageHero';
import {
  bookingTarget,
  collectionCards,
  heroMedia,
  homeHero,
  homeMetrics,
  reservationBenefits,
  reservationDetails,
  serviceCards,
  storefrontHighlights,
} from '../content/cafeContent';

export function HomePage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <BookingLink className="button button--primary" label={bookingTarget.heroLabel} />
            <Link className="button button--secondary" to={homeHero.secondaryHref}>
              {homeHero.secondaryLabel}
            </Link>
          </>
        }
        aside={
          <aside className="showcase-card" aria-label="Gunluk vitrin">
            <picture className="showcase-card__media">
              <source media="(min-width: 720px)" srcSet={heroMedia.desktopSrc} />
              <img
                alt={heroMedia.alt}
                decoding="async"
                fetchPriority="high"
                height={heroMedia.height}
                loading="eager"
                sizes={heroMedia.sizes}
                src={heroMedia.mobileSrc}
                width={heroMedia.width}
              />
            </picture>
            <span className="showcase-card__label">{homeHero.showcaseLabel}</span>
            <h2>{homeHero.showcaseTitle}</h2>
            <p>{homeHero.showcaseDescription}</p>
            <div className="showcase-card__details">
              {homeHero.showcaseDetails.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <BookingLink className="button button--primary" label={bookingTarget.showcaseLabel} />
          </aside>
        }
        description={homeHero.description}
        eyebrow={homeHero.eyebrow}
        title={homeHero.title}
      >
        <dl className="hero-metrics" aria-label="Storefront olculeri">
          {homeMetrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <ContentSection
        eyebrow="Neden bu kurgu"
        id="storefront-highlights"
        title="Turkce rota yapisi cafe vitrini ile operasyon akisini ayni yerde tutuyor."
      >
        <InfoCardGrid items={storefrontHighlights} />
      </ContentSection>

      <ContentSection
        accent
        description="Farkli satin alma niyetleri tek landing sayfada carpismaz; her hizmet bicimi kendi kartlariyla okunur."
        eyebrow="Servis katmanlari"
        id="service-modes"
        title="Masada servis, al-gotur ve raf urunleri ayni marka diliyle ayrisiyor."
      >
        <InfoCardGrid items={serviceCards} />
      </ContentSection>

      <ContentSection
        description="Magaza deneyimi sadece masada bitmiyor; kasa ve raf tarafinda ek gelir yaratan urunler de acikca listeleniyor."
        eyebrow="Yapisal commerce icerigi"
        id="collections"
        title="Gunun vitrini ve raf secimi, tekrar kullanilabilir kartlar halinde saklaniyor."
      >
        <InfoCardGrid items={collectionCards} />
      </ContentSection>

      <ContentSection
        description="Rezervasyon rotasina gitmeden once bile ziyaretci ayni operasyon mantigini anlar."
        eyebrow="Rezervasyon zemini"
        id="reservation-foundation"
        title="Tek rezervasyon hedefi hem kullanici hem ekip icin daha temiz bir akisa donusur."
      >
        <div className="split-layout">
          <InfoCardGrid items={reservationBenefits} />
          <aside className="reservation-card" aria-label="Rezervasyon notlari">
            <span className="story-note__label">CTA standartlari</span>
            <h3>Butonlar rota degisse de ayni aksiyona gider.</h3>
            <p>
              Header, mobil bar, anasayfa ve rezervasyon rotasi tek rezervasyon hedefini kullandigi
              icin ileride saglayici degisse bile davranis tum storefront boyunca korunur.
            </p>
            <ul className="feature-list">
              {reservationDetails.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </ContentSection>
    </>
  );
}

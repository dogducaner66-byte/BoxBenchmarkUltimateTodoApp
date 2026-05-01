import { Link } from 'react-router-dom';
import { EditorialMediaGrid } from '../components/layout/EditorialMediaGrid';
import { ContentSection } from '../components/layout/ContentSection';
import { InfoCardGrid } from '../components/layout/InfoCardGrid';
import { PageHero } from '../components/layout/PageHero';
import {
  categoryCards,
  featuredProductSlug,
  heroMedia,
  homeEditorialMedia,
  homeHero,
  homeMetrics,
  primaryAction,
  shoppingBenefits,
  storefrontHighlights,
} from '../content/cafeContent';

export function HomePage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <Link className="button button--primary" title={primaryAction.title} to={primaryAction.to}>
              {primaryAction.heroLabel}
            </Link>
            <Link className="button button--secondary" to={`/urun/${featuredProductSlug}`}>
              {homeHero.secondaryLabel}
            </Link>
          </>
        }
        aside={
          <aside className="showcase-card" aria-label="One cikan urun sahnesi">
            <picture className="showcase-card__media">
              <img alt={heroMedia.alt} decoding="async" fetchPriority="high" loading="eager" src={heroMedia.src} />
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
            <Link className="button button--primary" to={`/urun/${featuredProductSlug}`}>
              Urun detayini ac
            </Link>
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
        eyebrow="Neden bu storefront"
        id="storefront-highlights"
        title="Premium outdoor retail deneyimi kategori, urun ve destek rotalarinda ayni netlikle ilerliyor."
      >
        <InfoCardGrid items={storefrontHighlights} />
      </ContentSection>

      <ContentSection
        accent
        description="Kategori listing yalnizca urun cinsi gostermiyor; saha senaryosu, malzeme hissi ve sepete giris nedeni ayni kartta anlatiliyor."
        eyebrow="Kategori vitrini"
        id="category-preview"
        title="Outdoor kategorileri fiyat duygusunu destekleyen metin ve detay bloklariyla sunuluyor."
      >
        <InfoCardGrid items={categoryCards} />
      </ContentSection>

      <ContentSection
        description="Gercek fotograf kullanan moduler bolumler; hero, kategori ve operasyon sayfalarinda ayni premium algiyi koruyor."
        eyebrow="Foto-ready bloklar"
        id="editorial-grid"
        title="Her rota, merch hissini tasiyan editorial karelerle besleniyor."
      >
        <EditorialMediaGrid items={homeEditorialMedia} />
      </ContentSection>

      <ContentSection
        accent
        description="Guven notlari landing bolumlerinde gorunur oldugu icin ziyaretci urun detayina daha hazir ilerliyor."
        eyebrow="Satin alma zemini"
        id="shopping-benefits"
        title="Hizli teslimat, showroom destegi ve tek amiral urun hikayesi guveni yukseltiyor."
      >
        <InfoCardGrid items={shoppingBenefits} />
      </ContentSection>
    </>
  );
}

import { Navigate, Link, useParams } from 'react-router-dom';
import { EditorialMediaGrid } from '../components/layout/EditorialMediaGrid';
import { ContentSection } from '../components/layout/ContentSection';
import { InfoCardGrid } from '../components/layout/InfoCardGrid';
import { PageHero } from '../components/layout/PageHero';
import { SpecList } from '../components/layout/SpecList';
import { StorefrontImage } from '../components/layout/StorefrontImage';
import { featuredProductSlug, findProductBySlug } from '../content/cafeContent';

export function ProductPage() {
  const { slug = featuredProductSlug } = useParams();
  const product = findProductBySlug(slug);

  if (!product) {
    return <Navigate replace to={`/urun/${featuredProductSlug}`} />;
  }

  return (
    <>
      <PageHero
        actions={
          <>
            <Link className="button button--primary" to="/kategoriler">
              Kategorilere don
            </Link>
            <Link className="button button--secondary" to="/teslimat-iade">
              Teslimat ve iade
            </Link>
          </>
        }
        aside={
          <aside className="showcase-card purchase-card" aria-label="Urun satin alma ozeti">
            <StorefrontImage asset={product.heroImage} className="showcase-card__media" />
            <span className="showcase-card__label">{product.eyebrow}</span>
            <h2>{product.name}</h2>
            <p>{product.summary}</p>
            <div className="purchase-card__price-row">
              <strong className="price-tag">{product.price}</strong>
              <span className="availability-pill">{product.availability}</span>
            </div>
            <ul className="badge-list" aria-label="Urun avantajlari">
              {product.badges.map((badge) => (
                <li className="badge-list__item" key={badge}>
                  {badge}
                </li>
              ))}
            </ul>
          </aside>
        }
        description={product.description}
        eyebrow={product.eyebrow}
        title={product.name}
      />

      <ContentSection
        eyebrow="Gorsel anlatim"
        id="product-gallery"
        title="Urun detayi malzeme, siluet ve saha kullanimi acilarindan ayriliyor."
      >
        <EditorialMediaGrid items={product.gallery} />
      </ContentSection>

      <ContentSection
        accent
        description="Teknik ozellikler ve fayda kartlari ayni alanda bulustugu icin karar vermek icin ayrica teknik dokuman acmaya gerek kalmaz."
        eyebrow="Teknik derinlik"
        id="product-specs"
        title="Koruma, konfor ve paketlenebilirlik urun sayfasinda net bir dille aciklanir."
      >
        <div className="split-layout">
          <SpecList specs={product.specs} title="Zirve Shell teknik tablo" />
          <InfoCardGrid items={product.featureCards} stacked />
        </div>
      </ContentSection>

      <ContentSection
        description="Bakim notlari ve operasyon CTA'lari ayni section icinde bulustugu icin satin alma sonrasi friksiyon da dusurulur."
        eyebrow="Kullanim ve servis"
        id="product-support"
        title="Bakim, teslimat ve destek bilgileri premium urun deneyimini tamamliyor."
      >
        <div className="split-layout">
          <article className="card">
            <span className="card__eyebrow">Bakim notlari</span>
            <h3>Teknik performansi uzun sure koruyun</h3>
            <ul className="feature-list">
              {product.careNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <span className="card__eyebrow">Sonraki adim</span>
            <h3>Teslimat ve beden destegi hazir</h3>
            <p>
              Kargo cikis ritmi, iade penceresi ve showroom yardimi ayri sayfalarda detaylandirilir;
              satin alma karari tek urun sayfasinda tikandiginda kullanici dogrudan ilgili rotaya gecis
              yapabilir.
            </p>
            <div className="link-list">
              <Link to="/teslimat-iade">Teslimat ve iade politikasini gor</Link>
              <Link to="/iletisim">Beden destegi iste</Link>
            </div>
          </article>
        </div>
      </ContentSection>
    </>
  );
}

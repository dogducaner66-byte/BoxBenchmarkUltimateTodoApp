import { Link } from 'react-router-dom';
import { EditorialMediaGrid } from '../components/layout/EditorialMediaGrid';
import { ContentSection } from '../components/layout/ContentSection';
import { InfoCardGrid } from '../components/layout/InfoCardGrid';
import { PageHero } from '../components/layout/PageHero';
import {
  categoryCards,
  categoryEditorialMedia,
  categoryPageIntro,
  featuredProductSlug,
} from '../content/cafeContent';

export function CategoriesPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <Link className="button button--primary" to={`/urun/${featuredProductSlug}`}>
              One cikan urunu ac
            </Link>
            <Link className="button button--secondary" to="/teslimat-iade">
              Teslimat bilgisini gor
            </Link>
          </>
        }
        description={categoryPageIntro.description}
        eyebrow={categoryPageIntro.eyebrow}
        title={categoryPageIntro.title}
      />

      <ContentSection
        accent
        description="Kategoriler, filtre yiginindan once merchandising mantigini ve urun kapsamını anlatir."
        eyebrow="Koleksiyon bloklari"
        id="category-list"
        title="Katman, ayakkabi, kamp ve aksesuar zonlari birbirinden net ayriliyor."
      >
        <InfoCardGrid cardClassName="card--detail" items={categoryCards} />
      </ContentSection>

      <ContentSection
        description="Kategori yapisi yalnizca kartlarla degil, malzeme ve kullanimi gosteren fotograf kompozisyonlariyla da desteklenir."
        eyebrow="Editorial secim"
        id="category-editorial"
        title="Kategori listing sayfasi urun kalitesini gorsel olarak onceden hissettiriyor."
      >
        <EditorialMediaGrid items={categoryEditorialMedia} />
      </ContentSection>
    </>
  );
}

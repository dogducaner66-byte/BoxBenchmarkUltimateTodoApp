import { Link } from 'react-router-dom';
import { EditorialMediaGrid } from '../components/layout/EditorialMediaGrid';
import { ContentSection } from '../components/layout/ContentSection';
import { InfoCardGrid } from '../components/layout/InfoCardGrid';
import { PageHero } from '../components/layout/PageHero';
import {
  aboutEditorialMedia,
  aboutPageIntro,
  aboutValues,
  brandTimeline,
} from '../content/cafeContent';

export function AboutPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <Link className="button button--primary" to="/kategoriler">
              Kategorileri kesfet
            </Link>
            <Link className="button button--secondary" to="/iletisim">
              Ekiple iletisime gec
            </Link>
          </>
        }
        description={aboutPageIntro.description}
        eyebrow={aboutPageIntro.eyebrow}
        title={aboutPageIntro.title}
      />

      <ContentSection
        accent
        description="Marka anlatisi yalnizca stil soyleminden degil; test, malzeme ve gorsel secim ilkelerinden olusur."
        eyebrow="Cekirdek ilkeler"
        id="brand-values"
        title="Kuzey Patika premium algisini saha gercegiyle destekliyor."
      >
        <InfoCardGrid items={aboutValues} />
      </ContentSection>

      <ContentSection
        description="Koleksiyonun buyume ritmi ve storefront kararlari ayni zaman cizelgesinde aciklandiginda marka daha inandirici hale gelir."
        eyebrow="Zaman cizgisi"
        id="brand-timeline"
        title="Marka yolculugu capsule urunden operasyonel olgunluga uzaniyor."
      >
        <InfoCardGrid cardClassName="card--detail" items={brandTimeline} />
      </ContentSection>

      <ContentSection
        accent
        description="Editorial gorseller marka metnini sadece suslemiyor; premium deger onerisini ve kullanim alanini ayni anda kuruyor."
        eyebrow="Marka gorselleri"
        id="brand-media"
        title="Sehirden rotaya uzanan hikaye foto odakli bloklarla anlatiliyor."
      >
        <EditorialMediaGrid items={aboutEditorialMedia} />
      </ContentSection>
    </>
  );
}

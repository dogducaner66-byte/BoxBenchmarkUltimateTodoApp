import { Link } from 'react-router-dom';
import { EditorialMediaGrid } from '../components/layout/EditorialMediaGrid';
import { ContentSection } from '../components/layout/ContentSection';
import { InfoCardGrid } from '../components/layout/InfoCardGrid';
import { PageHero } from '../components/layout/PageHero';
import {
  deliveryCards,
  deliveryFaqCards,
  deliveryPageIntro,
  featuredProductSlug,
  returnSteps,
} from '../content/cafeContent';

const deliveryStoryMedia = [
  {
    eyebrow: 'Operasyon fotografi',
    title: 'Paketleme ve rota hazirligi ayni premium hisle gosteriliyor',
    description:
      'Teslimat sayfasi da editorial olarak ele alindiginda urun deneyiminin yalnizca sepete kadar surmedigi anlasilir.',
    imageSrc: '/delivery-field.jpg',
    imageAlt: 'Teslimata hazir premium outdoor ekipman duygusunu tasiyan fotograf.',
  },
];

export function DeliveryReturnsPage() {
  return (
    <>
      <PageHero
        actions={
          <>
            <Link className="button button--primary" to={`/urun/${featuredProductSlug}`}>
              One cikan urune don
            </Link>
            <Link className="button button--secondary" to="/iletisim">
              Destek ekibine yaz
            </Link>
          </>
        }
        description={deliveryPageIntro.description}
        eyebrow={deliveryPageIntro.eyebrow}
        title={deliveryPageIntro.title}
      />

      <ContentSection
        accent
        description="Kargo, paketleme ve iade bloklari satin alma sonrasi guvensizligi azaltmak icin ilk ekranda gorunur."
        eyebrow="Operasyon ozeti"
        id="delivery-cards"
        title="Sevkiyat standardi premium urun algisiyla uyumlu bir servis katmani kuruyor."
      >
        <InfoCardGrid items={deliveryCards} />
      </ContentSection>

      <ContentSection
        description="Iade deneyimi net bir akisa dondugunde premium perakendede en kritik guven bariyerlerinden biri ortadan kalkar."
        eyebrow="Iade adimlari"
        id="return-steps"
        title="Talep, paketleme ve sonuc bildirimi uc basit adimda tamamlanir."
      >
        <InfoCardGrid cardClassName="card--detail" items={returnSteps} />
      </ContentSection>

      <ContentSection
        accent
        description="Sik sorulan sorular ile operasyon fotografi ayni section altinda toplanarak bilgi ve his birlikte verilir."
        eyebrow="Sik sorulanlar"
        id="delivery-faq"
        title="Kargo ve iade sorulari hizli cevaplarla destekleniyor."
      >
        <div className="split-layout">
          <InfoCardGrid items={deliveryFaqCards} stacked />
          <EditorialMediaGrid items={deliveryStoryMedia} />
        </div>
      </ContentSection>
    </>
  );
}

export type NavigationItem = {
  to: string;
  label: string;
  end?: boolean;
};

export type LinkItem = {
  href: string;
  label: string;
  external?: boolean;
};

export type CommerceCard = {
  eyebrow?: string;
  title: string;
  description: string;
  details?: string[];
  links?: LinkItem[];
};

export type EditorialMediaItem = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  eyebrow: string;
  name: string;
  price: string;
  description: string;
  summary: string;
  availability: string;
  heroImageSrc: string;
  heroImageAlt: string;
  badges: string[];
  specs: ProductSpec[];
  featureCards: CommerceCard[];
  gallery: EditorialMediaItem[];
  careNotes: string[];
};

export const brand = {
  name: 'Kuzey Patika',
  tagline:
    'Dort mevsim saha kullanimi icin tasarlanan premium outdoor katmanlar, kamp ekipmanlari ve sehirden rotaya gecen aksesuarlari tek vitrinde toplar.',
  notice:
    'Anasayfa, kategori, urun, marka, iletisim ve teslimat rotalari ayni premium merchandising omurgasinda bulustu.',
};

export const navigationItems: NavigationItem[] = [
  { to: '/', label: 'Anasayfa', end: true },
  { to: '/kategoriler', label: 'Kategoriler' },
  { to: '/hakkimizda', label: 'Hakkimizda' },
  { to: '/iletisim', label: 'Iletisim' },
  { to: '/teslimat-iade', label: 'Teslimat & Iade' },
];

export const primaryAction = {
  to: '/kategoriler',
  navLabel: 'Koleksiyonu kesfet',
  heroLabel: 'Yeni sezonu kesfet',
  mobileLabel: 'Alisverise basla',
  title: 'Kuzey Patika kategori vitrini',
};

export const featuredProductSlug = 'zirve-shell-ceket';

export const heroMedia = {
  src: '/outdoor-hero.jpg',
  alt: 'Yuksek rakimda teknik katmanlariyla yuruyen outdoor ekip.',
};

export const homeHero = {
  eyebrow: 'Premium outdoor storefront',
  title: 'Dort mevsim saha kullanimi icin tasarlanan premium outdoor katmanlar.',
  description:
    'Kuzey Patika; teknik dis katmanlar, rota ayakkabilari, kamp ekipmanlari ve saha servis bilgisini ayni modern perakende kurgusunda sunar. Her sayfa foto-odakli merch deneyimini korurken satin alma kararini hizlandirir.',
  secondaryHref: `/urun/${featuredProductSlug}`,
  secondaryLabel: 'Zirve Shell Ceketi incele',
  showcaseLabel: 'Saha icin secildi',
  showcaseTitle: 'Zirve Shell Ceket ile kamp tezgahindan zirve hattina ayni ritim.',
  showcaseDescription:
    '20K su gecirmezlik, ayarlanabilir firtina basligi ve geri donusumlu dis yuzeyiyle en cok istenen katman; kamp sabahi, yagmurlu yuruyus ve sehir gecisinde ayni premium silueti korur.',
  showcaseDetails: [
    { label: 'Membran', value: '3 katmanli 20K / 20K koruma' },
    { label: 'Sevkiyat', value: 'Saat 15.00 oncesi siparislerde ayni gun cikis' },
  ],
};

export const homeMetrics = [
  { value: '5 kategori', label: 'net merchandising zonu' },
  { value: '48 saat', label: 'Turkiye ici hizli teslimat hedefi' },
  { value: '30 gun', label: 'sorunsuz iade penceresi' },
];

export const storefrontHighlights: CommerceCard[] = [
  {
    eyebrow: 'Merchandising',
    title: 'Kategori, urun ve operasyon bilgisi ayni premium sistemde okunuyor',
    description:
      'Anasayfa ilham verirken kategori sayfasi karari hizlandiriyor; urun detayi ise malzeme, kullanim ve teslimat bilgisini dagitmadan sunuyor.',
  },
  {
    eyebrow: 'Gorsel dil',
    title: 'Gercek fotograf ve editorial bloklar birlikte calisiyor',
    description:
      'Hero, kategori ve marka bloklari raster fotograf uzerine kuruldugu icin marka daha credible, urunler ise daha premium gorunuyor.',
  },
  {
    eyebrow: 'Guven',
    title: 'Teslimat, iade ve temas rotalari satin alma tereddudunu azaltiyor',
    description:
      'Iletisim ve lojistik bilgisi ayrica sunuldugu icin ziyaretci urun sayfasinda cevapsiz kalmiyor; destek icin yeni sekme veya harici akisa ihtiyac duymuyor.',
  },
];

export const categoryCards: CommerceCard[] = [
  {
    eyebrow: 'Teknik katmanlar',
    title: 'Ruzgar, yagmur ve irtifa gecisleri icin dis katmanlar',
    description:
      'Shell ceketler, ince yelekler ve isil katmanlar performans ihtiyacina gore ayrildi; renk ve beden karari editorial gorsellerle desteklendi.',
    details: ['3 katmanli shell ceketler', 'Hibrit fleece ara katmanlar', 'Paketlenebilir kamp yelekleri'],
    links: [{ href: `/urun/${featuredProductSlug}`, label: 'One cikan urunu ac' }],
  },
  {
    eyebrow: 'Ayakkabi ve rota',
    title: 'Kayalik zemin, islak patika ve gunluk gecisler icin ayakkabilar',
    description:
      'Kisa trekking, yaklasim rotasi ve sehir-camp arasi kullanim icin taban sertligi ile tutus seviyesi ayri bloklarda anlatildi.',
    details: ['Vibram tabanli botlar', 'Su itici approach modelleri', 'Merino corap ve gaiter secimi'],
  },
  {
    eyebrow: 'Kamp kurulum',
    title: 'Hafta sonu kampini hafif ve duzenli tutan ekipmanlar',
    description:
      'Cadir, mat, cook set ve aydinlatma sistemleri hacim yerine kullanim senaryosuna gore listelendi.',
    details: ['Uc mevsim cadirlar', 'Sikistirilabilir uyku sistemleri', 'Minimal kamp mutfagi'],
  },
  {
    eyebrow: 'Aksesuar',
    title: 'Rota sonrasina kadar kullanilan tamamlayici urunler',
    description:
      'Termos, dry bag, kucuk sling ve saha defteri gibi tamamlayici urunler daha kucuk sepetleri premium hissi bozmadan buyutuyor.',
    details: ['Paslanmaz termoslar', 'Dry bag ve packing cube setleri', 'UV korumali sapkalar'],
  },
];

export const homeEditorialMedia: EditorialMediaItem[] = [
  {
    eyebrow: 'Hero sahnesi',
    title: 'Yeni sezon lansmani gercek rota fotografi ile aciliyor',
    description:
      'Premium dis mekan hissi soyut cizimler yerine gercek dag ve yuruyus fotografi uzerinden kuruluyor.',
    imageSrc: '/outdoor-hero.jpg',
    imageAlt: 'Dag yamacinda yuruyen teknik giyim ekibi.',
  },
  {
    eyebrow: 'Kategori vitrini',
    title: 'Katman kategorisi editorial crop ile daha pahali hissettiriyor',
    description:
      'Kategori sayfasindaki gorsel blok, malzeme ve silueti yakin planda gosteren moda-editoryal bir kesit olarak kullaniliyor.',
    imageSrc: '/category-layers.jpg',
    imageAlt: 'Premium outdoor katmanini yakin planda gosteren editorial cekim.',
  },
  {
    eyebrow: 'Lojistik duygusu',
    title: 'Teslimat ve iade rotasi da ayni gorsel sistemde kaliyor',
    description:
      'Operasyon sayfalari sadece metin degil; sahaya cikmaya hazir paketleme hissiyle urun guvenini destekliyor.',
    imageSrc: '/delivery-field.jpg',
    imageAlt: 'Doga manzarasi esliginde saha ekipmani ve rotaya hazir paket.',
  },
];

export const shoppingBenefits: CommerceCard[] = [
  {
    eyebrow: 'Hizli karar',
    title: 'Kategori kartlari alisveris niyetine gore ayrildi',
    description:
      'Ziyaretci once urun tipini, sonra malzeme ve fiyat araligini okur; gereksiz filtre kalabaligi olmadan satin alma yoluna girer.',
  },
  {
    eyebrow: 'Tek urun hikayesi',
    title: 'One cikan urun tum vitrinin referansi oluyor',
    description:
      'Anasayfa, kategori ve teslimat sayfasi ayni amiral urunu gosterdigi icin storytelling dagilmiyor.',
  },
  {
    eyebrow: 'Destek',
    title: 'Showroom ve ekip destegi urun deneyimini tamamliyor',
    description:
      'Iletisim sayfasi showroom randevusu, ekip tavsiyesi ve kargo sorularini ayri kanallarda topluyor.',
  },
];

export const categoryPageIntro = {
  eyebrow: 'Kategori vitrini',
  title: 'Teknik katmanlar, ayakkabi ve kamp ekipmanlari ayni premium merchandising diliyle ayrisiyor.',
  description:
    'Kategori sayfasi; editorial fotograf, kullanim senaryosu ve guven notlarini ayni duzende sunar. Boylece ziyaretci urunlere girmeden once hangi setin kendi rotasina uydugunu anlar.',
};

export const categoryEditorialMedia: EditorialMediaItem[] = [
  {
    eyebrow: 'Katman duygusu',
    title: 'Yakin plan malzeme hissi satin alma kararini destekliyor',
    description:
      'Dis kumasin dokusu, fermuar kalitesi ve fit hissi gorsel hikayede ilk siraya alininca premium algi daha dogrudan kurulur.',
    imageSrc: '/product-shell.jpg',
    imageAlt: 'Teknik shell ceket kumasini ve dikis detayini gosteren urun cekimi.',
  },
  {
    eyebrow: 'Alan kullanimi',
    title: 'Kategori bloklari field use notlariyla esleniyor',
    description:
      'Her kategori yalnizca urun listesi degil; sabah cikisi, kamp kurulumu veya gunluk sehir rotasi gibi kullanim anlariyla okunuyor.',
    imageSrc: '/delivery-field.jpg',
    imageAlt: 'Acik arazide premium ekipman kullanimina dair editorial sahne.',
  },
];

export const aboutPageIntro = {
  eyebrow: 'Marka hikayesi',
  title: 'Kuzey Patika, sehirle dag arasindaki gecis icin tasarlanan premium bir outdoor markasi.',
  description:
    'Marka sayfasi malzeme secimi, saha test disiplini ve gorsel dunyanin arkasindaki ekip kararlarini aciklar. Boylece premium durusun yalnizca tasarim dili degil, operasyon ilkesi oldugu da gorunur.',
};

export const aboutValues: CommerceCard[] = [
  {
    eyebrow: 'Malzeme',
    title: 'Teknik performans ile gunluk kullanim dengeleniyor',
    description:
      'Lamine kumas, hafif dolgu ve geri donusumlu aksesuar secimi sadece katalog notu degil; saha kosullarinda tekrar tekrar test edilen cekirdek kriterler.',
  },
  {
    eyebrow: 'Test ritmi',
    title: 'Urunler once sahada, sonra vitrinde karar aliyor',
    description:
      'Numuneler Ilgaz ve Uludag yuruyuslerinde kullaniliyor; fit, nefes alabilirlik ve paketlenebilirlik notlari satis metninden once urune isleniyor.',
  },
  {
    eyebrow: 'Gorsel secim',
    title: 'Foto-odakli kimlik urunun premium degerini dogru tasiyor',
    description:
      'Editoryal crop, malzeme yakin plani ve genis aci saha sahnesi birlikte kullanilarak urunlerin fiyat segmenti acikca hissettiriliyor.',
  },
];

export const brandTimeline: CommerceCard[] = [
  {
    eyebrow: '2022',
    title: 'Ilk capsule koleksiyon',
    description:
      'Kucuk bir shell ceket ve kamp aksesuar seti ile marka cekirdegi kuruldu; butun stok showroom ustunden yonetildi.',
  },
  {
    eyebrow: '2024',
    title: 'Turkiye ici hızlı kargo sistemi kuruldu',
    description:
      'Ayni gun cikis, takip maili ve sade iade akisi; premium algiyi sadece urunde degil hizmette de gorunur hale getirdi.',
  },
  {
    eyebrow: 'Bugun',
    title: 'Daha net rota yapisina sahip dijital storefront',
    description:
      'Yeni storefront; kategori, urun, marka ve destek sayfalarini ayrisarak premium alisveris deneyimini daha ikna edici hale getiriyor.',
  },
];

export const aboutEditorialMedia: EditorialMediaItem[] = [
  {
    eyebrow: 'Atolye ve rota',
    title: 'Marka, saha notlariyla desteklenen bir tasarim masasi etrafinda buyuyor',
    description:
      'Gorseller atolyeden ziyade sahaya cikan, malzemeyi dogada gosteren bir dille seciliyor.',
    imageSrc: '/brand-story.jpg',
    imageAlt: 'Outdoor marka hikayesine uygun saha ve ekip anlatimi fotografi.',
  },
  {
    eyebrow: 'Gecis alanlari',
    title: 'Sehir kullanimi ve hafta sonu kampi tek hikayede bulusuyor',
    description:
      'Koleksiyonlar yalnizca yuksek irtifa icin degil; hafta ici sehir ritmini de premium bir katman hissiyle tasiyor.',
    imageSrc: '/outdoor-hero.jpg',
    imageAlt: 'Sehirden dogaya uzanan premium outdoor atmosferi.',
  },
];

export const contactPageIntro = {
  eyebrow: 'Iletisim',
  title: 'Showroom, saha tavsiyesi ve siparis destegi icin net bir temas rotasi.',
  description:
    'Iletisim sayfasi dogru kanala yonlendirir: beden ve urun secimi icin ekip, showroom deneyimi icin randevu, kargo takibi icin destek. Premium alisveris hissi temas sonrasinda da korunur.',
};

export const contactCards: CommerceCard[] = [
  {
    eyebrow: 'Showroom',
    title: 'Bomonti showroom randevusu',
    description:
      'Teknik katmanlari denemek, fit karsilastirmasi yapmak ve kamp ekipmanlarini elde gormek isteyenler icin hafta ici ozel slotlar acik.',
    details: ['Pzt-Cum | 10.00 - 19.00', 'Randevu ile sakin deneme alani', 'Ayni gun urun teslimi uygun'],
    links: [{ href: 'https://maps.google.com/?q=Bomonti+Istanbul', label: 'Yol tarifi ac', external: true }],
  },
  {
    eyebrow: 'Destek ekibi',
    title: 'Beden ve malzeme danismanligi',
    description:
      'Yagmur, soguk hava veya hafif kamp senaryolarina gore ekip en uygun katmani ve kombinasyonlari onerir.',
    details: ['Telefon | +90 (850) 305 76 24', 'E-posta | destek@kuzeypatika.com', 'WhatsApp donusu | 2 saat icinde'],
    links: [
      { href: 'tel:+908503057624', label: 'Hemen ara +90 (850) 305 76 24' },
      { href: 'mailto:destek@kuzeypatika.com', label: 'E-posta gonder' },
    ],
  },
  {
    eyebrow: 'Toptan ve produksiyon',
    title: 'Kurumsal ekipman ve cekim talepleri',
    description:
      'Outdoor etkinlikleri, marka is birlikleri ve cekim produksiyonlari icin ayri bir ekip calisir.',
    details: ['Kurumsal set hazirlama', 'Cekim ve sample odakli talepler', '7 is gununde teklif donusu'],
    links: [{ href: 'mailto:studio@kuzeypatika.com', label: 'Studio ekibine yaz' }],
  },
];

export const showroomNotes = [
  'Randevu oncesi beden araliginizi iletirseniz ekip uygun numuneleri hazirlar.',
  'Kargo kaynakli beden degisimi yerine showroom degisimi ayni gun yapilabilir.',
  'Kamp ekipmanlarinda kurulum gostermeli mini demo slotlari ayrilabilir.',
];

export const deliveryPageIntro = {
  eyebrow: 'Teslimat ve iade',
  title: 'Hizli sevkiyat, sade iade ve outdoor kullanimina uygun paketleme.',
  description:
    'Teslimat ve iade sayfasi; kargo cikis ritmi, paketleme standardi ve iade adimlarini tek yerde toplayarak premium siparis deneyimini tamamlar.',
};

export const deliveryCards: CommerceCard[] = [
  {
    eyebrow: 'Sevkiyat',
    title: 'Saat 15.00 oncesi siparislerde ayni gun cikis',
    description:
      'Istanbul cikisli siparisler operasyon gunlerinde ayni gun depodan ayrilir; takip maili ve SMS ayni anda iletilir.',
    details: ['Standart teslimat | 1-3 is gunu', 'Hizli teslimat | Secili illerde ertesi gun', 'Kargo takip linki otomatik iletilir'],
  },
  {
    eyebrow: 'Paketleme',
    title: 'Neme ve darbelere karsi cift kat koruma',
    description:
      'Teknik katmanlar nefes alabilir kılıf ve dis kutu ile, kamp ekipmanlari ise sarsinti engelleyici yerlesimle paketlenir.',
    details: ['Su itici ic kilif', 'Tekrar kullanilabilir kilitli dosya', 'Bakim karti ve iade fisi'],
  },
  {
    eyebrow: 'Iade',
    title: '30 gun icinde kolay iade veya beden degisimi',
    description:
      'Kullanilmamis urunlerde online iade formu tek ekran uzerinden acilir; beden degisimleri stok varsa ayni gun ayrilir.',
    details: ['Etiketli ve kullanilmamis urun', 'Ucretsiz degisim kargosu', 'Iade onayi sonrasi 3-5 is gununde geri odeme'],
  },
];

export const returnSteps: CommerceCard[] = [
  {
    eyebrow: '1. Adim',
    title: 'Talep formunu doldurun',
    description:
      'Siparis numarasi ve iade nedenini secerek talebi baslatin; ekip ayni kanal uzerinden kargo kodunu iletir.',
  },
  {
    eyebrow: '2. Adim',
    title: 'Urunu original paketiyle hazirlayin',
    description:
      'Teknik urunleri ic kilifinda, aksesuar ve aparatlari tam olacak sekilde kutulayarak premium koruma standardini koruyun.',
  },
  {
    eyebrow: '3. Adim',
    title: 'Sonucu takip edin',
    description:
      'Depo kabulunden sonra iade, degisim veya store credit secenegiyle durum maili ayni gunde guncellenir.',
  },
];

export const deliveryFaqCards: CommerceCard[] = [
  {
    eyebrow: 'Kargo sorusu',
    title: 'Cumartesi verilen siparisler ne zaman cikar?',
    description:
      'Cumartesi saat 12.00 sonrasinda verilen siparisler pazartesi operasyonunun ilk bandinda cikisa girer.',
  },
  {
    eyebrow: 'Iade sorusu',
    title: 'Kullanilmis teknik urun iade edilebilir mi?',
    description:
      'Saha kullanimi gormus urunler iade kapsaminda degildir; ancak urun performans problemi varsa inceleme sureci acilir.',
  },
  {
    eyebrow: 'Destek sorusu',
    title: 'Degisim icin bedeni kim oneriyor?',
    description:
      'Ekip, mevcut urun notlariniza ve kullanim senaryonuza gore dogru beden tavsiyesini telefon ya da e-posta ile iletir.',
  },
];

export const products: Product[] = [
  {
    slug: featuredProductSlug,
    eyebrow: 'Amiral urun',
    name: 'Zirve Shell Ceket',
    price: '14.900 TL',
    description:
      'Yagmurlu rota, ruzgarli zirve ve sehir gecisinde ayni premium hissi koruyan, uc mevsim odakli teknik shell katman.',
    summary:
      'Geri donusumlu ripstop dis yuzey, 20K / 20K membran ve kask uyumlu baslik ile tasarlanan Zirve Shell Ceket; hafiflik ile korumayi ayni siluette dengeler.',
    availability: 'Stokta ve ayni gun cikisa uygun',
    heroImageSrc: '/product-shell.jpg',
    heroImageAlt: 'Teknik shell ceketin premium malzeme ve siluet detayini gosteren urun fotografi.',
    badges: ['3 katmanli membran', '20K / 20K koruma', 'Unisex teknik fit'],
    specs: [
      { label: 'Kumas', value: 'Geri donusumlu ripstop nylon' },
      { label: 'Membran', value: '20K su gecirmezlik / 20K nefes alabilirlik' },
      { label: 'Agirlik', value: '460 g' },
      { label: 'Beden', value: 'XS - XL' },
      { label: 'Kullanim', value: 'Trekking, kamp ve gunluk sehir gecisi' },
      { label: 'Bakim', value: 'Dusuk isi ve teknik temizleyici ile yikama' },
    ],
    featureCards: [
      {
        eyebrow: 'Koruma',
        title: 'Ayarlanabilir firtina basligi ve cene korumasi',
        description:
          'Baslik kaskla uyumlu olacak kadar hacimli, sehirde ise iki noktali ayarla yuzde sabit kalacak kadar dengeli tasarlandi.',
      },
      {
        eyebrow: 'Konfor',
        title: 'Yandan havalandirma ve hareketli omuz hattı',
        description:
          'Pit zip havalandirmasi ve eklemli kalip, ritim yukselen yuruyuslerde nefes almayi ceketin yapisina entegre eder.',
      },
      {
        eyebrow: 'Paketlenebilirlik',
        title: 'Kamp sabahi icin hafif ama tavizsiz',
        description:
          'Kendi ic cebine sigan yapi, trekking sirt cantasinda gereksiz hacim olusturmadan tasinabilir.',
      },
    ],
    gallery: [
      {
        eyebrow: 'Malzeme',
        title: 'Yakin plan doku ve su korumasi',
        description:
          'Premium dikis duzeni, fermuar parcasi ve yuzey dokusu urunun fiyat segmentini dogru yansitir.',
        imageSrc: '/product-shell.jpg',
        imageAlt: 'Shell ceketin malzeme ve su koruma hissini gosteren yakin plan.',
      },
      {
        eyebrow: 'Kullanim ani',
        title: 'Gercek rota sahnesinde siluet',
        description:
          'Urun yalnizca studio cekimiyle degil, arazi icindeki durusuyla da ikna eder.',
        imageSrc: '/outdoor-hero.jpg',
        imageAlt: 'Dag yamacinda shell ceket ile yuruyen outdoor ekip.',
      },
      {
        eyebrow: 'Stil dengesi',
        title: 'Sehir ile saha arasinda premium bir gecis',
        description:
          'Ceketin kesimi ve renk bloklamasi, teknik fonksiyonu korurken gunluk kullanimda da rafine gorunur.',
        imageSrc: '/category-layers.jpg',
        imageAlt: 'Premium outdoor katmanin sehir ve saha arasindaki gecisini gosteren editorial kare.',
      },
    ],
    careNotes: [
      'Teknik membran performansini korumak icin yumusatici kullanmayin.',
      'Islak rota sonrasi ceketi acik sekilde kurutun ve uzun sure sikistirarak saklamayin.',
      'Performans dususunde DWR yenileyici sprey ile dis yuzeyi canlandirin.',
    ],
  },
];

export function findProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const footerColumns = [
  {
    title: 'Alisveris rotalari',
    items: ['Anasayfa vitrini', 'Kategori listing', 'Urun detay anlatimi', 'Teslimat ve iade bilgisi'],
  },
  {
    title: 'Kategori sistemi',
    items: ['Teknik katmanlar', 'Rota ayakkabilari', 'Kamp kurulumu', 'Outdoor aksesuarlar'],
  },
  {
    title: 'Guven bloklari',
    items: ['Ayni gun cikis notu', '30 gun iade penceresi', 'Showroom destegi', 'Gercek fotograf kullanimı'],
  },
];

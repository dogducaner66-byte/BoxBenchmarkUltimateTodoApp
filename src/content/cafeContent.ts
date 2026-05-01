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

export type MenuItem = {
  name: string;
  detail: string;
  price: string;
};

export type MenuSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: MenuItem[];
};

export const brand = {
  name: 'Harbor & Hearth',
  tagline: 'Kadikoy sahilinde kahve, firin ve rezervasyon odakli mahalle dukkan deneyimi.',
  notice: 'Magaza vitrini, menu ve rezervasyon akisi ayni dijital omurgada birlesti.',
};

export const navigationItems: NavigationItem[] = [
  { to: '/', label: 'Anasayfa', end: true },
  { to: '/menu', label: 'Menu' },
  { to: '/rezervasyon', label: 'Rezervasyon' },
  { to: '/ziyaret', label: 'Ziyaret' },
];

export const bookingTarget = {
  href: 'https://reserve.harborandhearth.cafe',
  navLabel: 'Masa ayirt',
  heroLabel: 'Rezervasyon baslat',
  showcaseLabel: 'Aksam servisini gor',
  sectionLabel: 'Masa ayirt',
  mobileLabel: 'Masa ayirt',
  title: 'Harbor & Hearth rezervasyon akisini yeni sekmede acar.',
};

export const heroMedia = {
  mobileSrc: '/hero-scene-mobile.svg',
  desktopSrc: '/hero-scene-desktop.svg',
  alt: 'Harbor and Hearth masasinda kahvalti tabagi, kahve servisi ve sabah isigi.',
  width: 1280,
  height: 960,
  sizes: '(min-width: 1024px) 28rem, (min-width: 720px) 34vw, 100vw',
};

export const homeHero = {
  eyebrow: 'Turkce storefront temeli',
  title: 'Kadikoy sahilinde kahve, kahvalti ve raf urunleri tek route omurgasinda.',
  description:
    'Harbor & Hearth artik tek sayfa tanitim yerine; menu, rezervasyon ve ziyaret bilgilerini ayri rotalarda toplayan, ama ayni marka hissini koruyan Turkce bir dukkan vitrini sunuyor.',
  secondaryHref: '/menu',
  secondaryLabel: 'Menuyu incele',
  showcaseLabel: 'Bugunun servisi',
  showcaseTitle: 'Sabah kahvaltisindan aksam rezervasyonuna kadar ayni sakin ritim.',
  showcaseDescription:
    'Vitrin, oturma alani, al-gotur akisi ve paket kahve urunleri birlikte konumlanir; ziyaretci ilk bakista ne satin alabilecegini ve nasil rezervasyon yapacagini anlar.',
  showcaseDetails: [
    { label: 'Odak', value: 'Kahvalti tabaklari, tatli vitrini ve kahve cekirdegi paketleri' },
    { label: 'Servis', value: 'Haftanin 7 gunu masada servis, al-gotur ve rezervasyon' },
  ],
};

export const homeMetrics = [
  { value: '4 rota', label: 'moduler storefront kurgusu' },
  { value: '12 urun', label: 'gunluk vitrin ve raf secimi' },
  { value: '1 hedef', label: 'tutarlı rezervasyon cagrisi' },
];

export const storefrontHighlights: CommerceCard[] = [
  {
    eyebrow: 'Vitrin',
    title: 'Dukkan mantigi tek bakista okunuyor',
    description:
      'Anasayfa artik bir lansman metni degil; menu, fiziksel ziyaret ve rezervasyon akislari icin yonlendirici bir storefront katmani gibi davranir.',
  },
  {
    eyebrow: 'Route modeli',
    title: 'Her niyet icin ayri rota var',
    description:
      'Menu arayan, masa ayirtmak isteyen veya adres kontrol eden ziyaretci kendi rotasina ayriliyor; bilgi yogunlugu her sayfada daha saglikli dagitiliyor.',
  },
  {
    eyebrow: 'Icerik modeli',
    title: 'Ticari veriler tekrar kullanilabilir hale geldi',
    description:
      'Menu bolumleri, ziyaret kartlari ve rezervasyon maddeleri artik yapisal veri olarak saklaniyor; yeni sayfalar ayni veri modelini kolayca genisletebilir.',
  },
];

export const serviceCards: CommerceCard[] = [
  {
    eyebrow: 'Masada servis',
    title: 'Kahvalti ve ogle arasi sakin masa akisi',
    description:
      'Penceredeki uzun masa, iki kisilik kose masalari ve prizli calisma noktasi gunluk ziyareti rahatlatir.',
    details: ['Hafta ici 08.00 itibariyle filtre ve kahvalti servisi', 'Laptop dostu sessiz bolge', 'Rezervasyona uygun gun batimi seanslari'],
  },
  {
    eyebrow: 'Al-gotur',
    title: 'Ofise donen misafir icin hizli pickup',
    description:
      'Kasadaki hazir urun sirasi ve kahve bekleme suresi tek kartta anlatilir; yogun saatlerde bile satin alma karari kolaylasir.',
    details: ['On hazir sandvic ve tatli vitrini', '8 dakikada hazir icecek hedefi', 'Kurye teslimina uygun paketleme'],
  },
  {
    eyebrow: 'Raf urunleri',
    title: 'Dukkan deneyimi paket kahve ve ev urunlerine tasiniyor',
    description:
      'Cekirdek kahve, granola ve seramik kupa secimi; cafe markasini kucuk bir perakende deneyimine donusturur.',
    details: ['250 g gunluk kavrum paketleri', 'Evde demleme rehberi kartlari', 'Sinirli sayida masaustu seramik seri'],
  },
];

export const collectionCards: CommerceCard[] = [
  {
    eyebrow: 'Sabah vitrini',
    title: 'Firin tezgahi',
    description: 'Cruffin, focaccia ve mevsim recelli buns gunun ilk trafigini tasir.',
    details: ['Tahinli cruffin', 'Eski kasarli focaccia', 'Portakal recelli sabah bun'],
  },
  {
    eyebrow: 'Kahve bar',
    title: 'Imza icecekler',
    description: 'Filtre kahve, narenciye tonic ve maple oat cortado ana siparis omurgasini kurar.',
    details: ['Single origin V60', 'Narenciye espresso tonic', 'Maple oat cortado'],
  },
  {
    eyebrow: 'Raf secimi',
    title: 'Eve tasinan urunler',
    description: 'Paket cekirdek, granola ve seramik kupa secimi kasadan cikarken sepeti buyutur.',
    details: ['Etiyopya filtre paketleri', 'Ev yapimi badem granola', 'Mat glaze kupa serisi'],
  },
];

export const menuPageIntro = {
  eyebrow: 'Menu rotasi',
  title: 'Servisi, vitrin urunlerini ve fiyat bandini ayri bir rota uzerinden sunun.',
  description:
    'Bu sayfa kahvalti masasi, kahve bari ve raf urunlerini birbirinden ayirir; ekip yeni kategori eklemek istediginde ayni veri seklini kullanabilir.',
};

export const menuSections: MenuSection[] = [
  {
    eyebrow: 'Kahvalti tabaklari',
    title: 'Masaya gelen ana urunler',
    description: 'Uzun brunch oturumlarinda siparis kararini hizlandiran cekirdek tabaklar.',
    items: [
      { name: 'Narenciyeli ricotta toast', detail: 'Cekirdek ekmek, cirpilmis ricotta, kizarmis uzum ve bal.', price: '360 TL' },
      { name: 'Yumusak yumurtali focaccia', detail: 'Karamel sogan, taze otlar ve eski kasar ile servis edilir.', price: '410 TL' },
      { name: 'Sahil granola kasesi', detail: 'Ev yapimi granola, suzme yogurt ve mevsim meyvesi.', price: '295 TL' },
    ],
  },
  {
    eyebrow: 'Kahve bari',
    title: 'Gun boyu donen icecek akisi',
    description: 'Bar tarafinda en hizli karar verilen ve tekrar siparis uretilen icecekler.',
    items: [
      { name: 'Maple oat cortado', detail: 'Yumusak icim espresso, yulaf sut ve akcaagac dokunusu.', price: '180 TL' },
      { name: 'Narenciye espresso tonic', detail: 'Portakal kabugu ve tonik ile soguk servis.', price: '205 TL' },
      { name: 'Tek ciftlik V60', detail: 'Haftalik kavrum secimiyle hazirlanan filtre servis.', price: '195 TL' },
    ],
  },
  {
    eyebrow: 'Raf ve paket',
    title: 'Kasada buyuyen sepet',
    description: 'Ziyaret sonu ek satin alim yaratan paket urunler ve kucuk hediyelikler.',
    items: [
      { name: '250 g gunluk kavrum', detail: 'Evde filtre ya da espresso icin iki farkli cekirdek profili.', price: '420 TL' },
      { name: 'Bademli granola kavanozu', detail: 'Kahvalti ve ara ogun icin dukkan imzali cam kavanoz.', price: '240 TL' },
      { name: 'Mat glaze kupa', detail: 'Sadece magazada satilan kisitli seramik seri.', price: '520 TL' },
    ],
  },
];

export const reservationPageIntro = {
  eyebrow: 'Rezervasyon rotasi',
  title: 'Masa ayirma karari tek hedefte toplansin, ekip ise politikayi acikca gosterebilsin.',
  description:
    'Rezervasyon sayfasi; seans saatlerini, grup limitlerini ve iletisim yedegini tek yerde anlatir. Bu sayede ziyaretci ekrana bakarak karar verir, ekip telefonla ayni bilgiyi tekrar etmek zorunda kalmaz.',
};

export const reservationMoments: CommerceCard[] = [
  {
    eyebrow: 'Aksam seansi',
    title: 'Gun batimi masalari',
    description: 'Iki ila dort kisilik rezervasyonlar gun batimindan kapanisa kadar aciktir.',
    details: ['17.30, 19.00 ve 20.30 giris saatleri', 'Cam kenari ve sakin kose talepleri not alanina eklenir'],
  },
  {
    eyebrow: 'Hafta sonu',
    title: 'Brunch yogunlugu',
    description: 'Cumartesi ve pazar sabahlarinda rezervasyonlu masa akisi kuyruk bekleme ihtiyacini azaltir.',
    details: ['10.00 oncesi walk-in icin ayrilan masa payi', '90 dakikalik standart brunch seansi'],
  },
  {
    eyebrow: 'Kucuk bulusmalar',
    title: 'Ekip kahvesi ve mini kutlamalar',
    description: 'Alti ile sekiz kisilik gruplar icin on siparis ve masa birlestirme notlari ayrica iletilir.',
    details: ['Tatli ve kahve on siparisi eklenebilir', 'Grup rezervasyonlari icin ayni gun teyit aranir'],
  },
];

export const reservationDetails = [
  'Tum birincil CTA butonlari ayni rezervasyon hedefine baglanir; route degisse bile davranis sabit kalir.',
  'Telefon destegi, son dakika degisiklikleri ve erisim talepleri icin yedek kanal olarak korunur.',
  'Politika maddeleri Turkce ve kisa tutuldugu icin ilk ziyaret oncesi karar verme suresi kisalir.',
];

export const reservationBenefits: CommerceCard[] = [
  {
    eyebrow: 'Netlik',
    title: 'Tek hedef, daha az tereddut',
    description: 'Header, anasayfa, rezervasyon sayfasi ve mobil bar ayni aksiyona cikar.',
  },
  {
    eyebrow: 'Operasyon',
    title: 'Ekibin anlattigi bilgiler sayfada hazir',
    description: 'Seans saatleri, grup kurallari ve iletisim secenekleri bir aradadir.',
  },
  {
    eyebrow: 'Gelecek hazirligi',
    title: 'Yeni rezervasyon saglayicisi tek noktadan degistirilebilir',
    description: 'Rezervasyon linki veri katmaninda tanimli oldugu icin yeni saglayiciya gecis kolaydir.',
  },
];

export const visitPageIntro = {
  eyebrow: 'Ziyaret rotasi',
  title: 'Adres, saat ve iletisim bilgisi ayri bir rota ile daha hizli taranir.',
  description:
    'Ziyaret sayfasi; ilk kez gelen misafir, kurye ve rezervasyonlu grup icin ayni anda calisir. Harita, saat ve iletisim bilgileri kart yapisinda okuması kolay sekilde sunulur.',
};

export const hostStandContact = {
  href: 'tel:+902125550456',
  label: 'Dukkani ara',
  value: '+90 (212) 555 04 56',
};

export const visitCards: CommerceCard[] = [
  {
    eyebrow: 'Adres',
    title: 'Moda Caddesi 18, Kadikoy / Istanbul',
    description: 'Iskelenin iki sokak gerisinde, sabah yuruyusu ve aksam yemegi trafiginin ortasinda.',
    details: ['Bahariye ve Moda hattina yuruyus mesafesi', 'Zemin giris ve bebek arabasi icin uygun gecis', 'Bisiklet park noktasi kapinin yaninda'],
    links: [{ href: 'https://maps.google.com/?q=Moda+Caddesi+18+Kadikoy+Istanbul', label: 'Yol tarifi ac', external: true }],
  },
  {
    eyebrow: 'Saatler',
    title: 'Hafta ici kahvaltidan gece servisine',
    description: 'Yaya trafiginin zirve yaptigi saatler ve rezervasyon araliklari birlikte dusunuldu.',
    details: ['Pzt-Per | 08.00 - 22.00', 'Cum-Cmt | 08.00 - 23.00', 'Paz | 09.00 - 21.00'],
  },
  {
    eyebrow: 'Iletisim',
    title: 'Rezervasyon disi sorular icin hizli temas',
    description: 'Erisilebilirlik, kurye teslimi ve grup planlamasi icin iki farkli kanal hazir.',
    details: [`Telefon | ${hostStandContact.value}`, 'E-posta | merhaba@harborandhearth.cafe', 'Kurye pickup penceresi | 11.00 - 16.00'],
    links: [
      { href: hostStandContact.href, label: `${hostStandContact.label} ${hostStandContact.value}` },
      { href: 'mailto:merhaba@harborandhearth.cafe', label: 'E-posta gonder' },
    ],
  },
];

export const footerColumns = [
  {
    title: 'Storefront rotalari',
    items: ['Anasayfa vitrini', 'Menu rotasi', 'Rezervasyon merkezi', 'Ziyaret bilgileri'],
  },
  {
    title: 'Ticari icerik',
    items: ['Kahvalti tabaklari', 'Kahve bari', 'Raf urunleri', 'Pickup ve grup notlari'],
  },
  {
    title: 'Operasyon',
    items: ['Tek rezervasyon hedefi', 'Moduler veri yapisi', 'Turkce navigasyon', 'Mobil hizli CTA'],
  },
];

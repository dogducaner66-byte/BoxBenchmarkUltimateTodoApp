import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';

function renderApp(initialEntries: string[] = ['/']) {
  render(
    React.createElement(
      MemoryRouter,
      { initialEntries },
      React.createElement(App),
    ),
  );
}

describe('outdoor storefront shell', () => {
  it('renders the home route with premium outdoor navigation, hero media, and primary CTA', () => {
    renderApp();

    expect(
      screen.getByRole('heading', {
        name: /dort mevsim saha kullanimi icin tasarlanan premium outdoor katmanlar/i,
      }),
    ).toBeInTheDocument();

    const primaryNavigation = screen.getByRole('navigation', { name: /birincil/i });

    expect(primaryNavigation).toBeInTheDocument();
    expect(within(primaryNavigation).getByRole('link', { name: /anasayfa/i })).toHaveAttribute(
      'href',
      '/',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /kategoriler/i })).toHaveAttribute(
      'href',
      '/kategoriler',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /hakkimizda/i })).toHaveAttribute(
      'href',
      '/hakkimizda',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /iletisim/i })).toHaveAttribute(
      'href',
      '/iletisim',
    );
    expect(
      within(primaryNavigation).getByRole('link', { name: /teslimat & iade/i }),
    ).toHaveAttribute('href', '/teslimat-iade');
    expect(
      within(primaryNavigation).getByRole('link', { name: /koleksiyonu kesfet/i }),
    ).toHaveAttribute('href', '/kategoriler');
    expect(screen.getByRole('link', { name: /yeni sezonu kesfet/i })).toHaveAttribute(
      'href',
      '/kategoriler',
    );
    expect(screen.getByRole('link', { name: /zirve shell ceketi incele/i })).toHaveAttribute(
      'href',
      '/urun/zirve-shell-ceket',
    );
    expect(
      screen.getByRole('img', {
        name: /yuksek rakimda teknik katmanlariyla yuruyen outdoor ekip/i,
      }),
    ).toHaveAttribute('loading', 'eager');
    expect(
      screen.getByRole('heading', {
        name: /premium outdoor retail deneyimi kategori, urun ve destek rotalarinda ayni netlikle ilerliyor/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the category route with outdoor collection sections and editorial imagery', () => {
    renderApp(['/kategoriler']);

    expect(
      screen.getByRole('heading', {
        name: /teknik katmanlar, ayakkabi ve kamp ekipmanlari ayni premium merchandising diliyle ayrisiyor/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /katman, ayakkabi, kamp ve aksesuar zonlari birbirinden net ayriliyor/i })).toBeInTheDocument();
    expect(screen.getByText(/vibram tabanli botlar/i)).toBeInTheDocument();
    expect(screen.getByText(/su itici approach modelleri/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /kategori listing sayfasi urun kalitesini gorsel olarak onceden hissettiriyor/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the product detail route with price, specs, and support links', () => {
    renderApp(['/urun/zirve-shell-ceket']);

    expect(screen.getByRole('heading', { level: 1, name: /zirve shell ceket/i })).toBeInTheDocument();
    expect(screen.getByText(/14.900 TL/i)).toBeInTheDocument();
    expect(screen.getByText(/20K \/ 20K koruma/i)).toBeInTheDocument();
    expect(screen.getByText(/geri donusumlu ripstop nylon/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /teslimat ve iade politikasini gor/i })).toHaveAttribute(
      'href',
      '/teslimat-iade',
    );
    expect(screen.getByRole('link', { name: /beden destegi iste/i })).toHaveAttribute(
      'href',
      '/iletisim',
    );
  });

  it('renders the about route with values, timeline, and brand imagery', () => {
    renderApp(['/hakkimizda']);

    expect(
      screen.getByRole('heading', {
        name: /kuzey patika, sehirle dag arasindaki gecis icin tasarlanan premium bir outdoor markasi/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /kuzey patika premium algisini saha gercegiyle destekliyor/i })).toBeInTheDocument();
    expect(screen.getByText(/ilgaz ve uludag yuruyuslerinde kullaniliyor/i)).toBeInTheDocument();
    expect(screen.getByText(/ilk capsule koleksiyon/i)).toBeInTheDocument();
  });

  it('renders the contact route with showroom and support channels', () => {
    renderApp(['/iletisim']);

    expect(
      screen.getByRole('heading', {
        name: /showroom, saha tavsiyesi ve siparis destegi icin net bir temas rotasi/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/bomonti showroom randevusu/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /hemen ara \+90 \(850\) 305 76 24/i })).toHaveAttribute(
      'href',
      'tel:+908503057624',
    );
    expect(screen.getByRole('link', { name: /e-posta gonder/i })).toHaveAttribute(
      'href',
      'mailto:destek@kuzeypatika.com',
    );
    expect(screen.getByText(/kargo kaynakli beden degisimi yerine showroom degisimi ayni gun yapilabilir/i)).toBeInTheDocument();
  });

  it('renders the delivery and returns route with shipping, return steps, and FAQs', () => {
    renderApp(['/teslimat-iade']);

    expect(
      screen.getByRole('heading', {
        name: /hizli sevkiyat, sade iade ve outdoor kullanimina uygun paketleme/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /saat 15.00 oncesi siparislerde ayni gun cikis/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /talep, paketleme ve sonuc bildirimi uc basit adimda tamamlanir/i })).toBeInTheDocument();
    expect(screen.getByText(/cumartesi saat 12.00 sonrasinda verilen siparisler/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /destek ekibine yaz/i })).toHaveAttribute(
      'href',
      '/iletisim',
    );
  });
});

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

describe('cafe storefront shell', () => {
  it('renders the Turkish storefront home route with internal navigation and a shared reservation CTA', () => {
    renderApp();
    const bookingHref = 'https://reserve.harborandhearth.cafe';

    expect(
      screen.getByRole('heading', {
        name: /kadikoy sahilinde kahve, kahvalti ve raf urunleri tek route omurgasinda/i,
      }),
    ).toBeInTheDocument();

    const primaryNavigation = screen.getByRole('navigation', { name: /birincil/i });

    expect(primaryNavigation).toBeInTheDocument();
    expect(within(primaryNavigation).getByRole('link', { name: /anasayfa/i })).toHaveAttribute(
      'href',
      '/',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /^menu$/i })).toHaveAttribute(
      'href',
      '/menu',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /^rezervasyon$/i })).toHaveAttribute(
      'href',
      '/rezervasyon',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /ziyaret/i })).toHaveAttribute(
      'href',
      '/ziyaret',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /masa ayirt/i })).toHaveAttribute(
      'href',
      bookingHref,
    );
    expect(within(primaryNavigation).getByRole('link', { name: /masa ayirt/i })).toHaveAttribute(
      'target',
      '_blank',
    );
    expect(screen.getByRole('link', { name: /rezervasyon baslat/i })).toHaveAttribute(
      'href',
      bookingHref,
    );
    expect(screen.getByRole('link', { name: /rezervasyon baslat/i })).toHaveAttribute(
      'title',
      'Harbor & Hearth rezervasyon akisini yeni sekmede acar.',
    );
    expect(
      screen.getByRole('heading', {
        name: /sabah kahvaltisindan aksam rezervasyonuna kadar ayni sakin ritim/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /aksam servisini gor/i })).toHaveAttribute(
      'href',
      bookingHref,
    );
    expect(
      screen.getByRole('heading', {
        name: /turkce rota yapisi cafe vitrini ile operasyon akisini ayni yerde tutuyor/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /gunun vitrini ve raf secimi, tekrar kullanilabilir kartlar halinde saklaniyor/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /tek rezervasyon hedefi hem kullanici hem ekip icin daha temiz bir akisa donusur/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/paket kahve ve ev urunlerine tasiniyor/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /menuyu incele/i })).toHaveAttribute(
      'href',
      '/menu',
    );
    expect(
      screen.getByText(/masa ayirma akisini tum rotalarda tek dokunusla koruyun/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: /harbor and hearth masasinda kahvalti tabagi, kahve servisi ve sabah isigi/i,
      }),
    ).toHaveAttribute('loading', 'eager');
  });

  it('renders the menu route with structured categories and prices', () => {
    renderApp(['/menu']);

    expect(
      screen.getByRole('heading', {
        name: /servisi, vitrin urunlerini ve fiyat bandini ayri bir rota uzerinden sunun/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /masaya gelen ana urunler/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /gun boyu donen icecek akisi/i })).toBeInTheDocument();
    expect(screen.getByText(/narenciyeli ricotta toast/i)).toBeInTheDocument();
    expect(screen.getByText(/420 TL/i)).toBeInTheDocument();
  });

  it('renders the reservation route with session and policy content', () => {
    renderApp(['/rezervasyon']);

    expect(
      screen.getByRole('heading', {
        name: /masa ayirma karari tek hedefte toplansin, ekip ise politikayi acikca gosterebilsin/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /gun batimi masalari/i })).toBeInTheDocument();
    expect(
      screen.getByText(/tum birincil cta butonlari ayni rezervasyon hedefine baglanir/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^ulasimi gor$/i })).toHaveAttribute(
      'href',
      '/ziyaret',
    );
  });

  it('renders the visit route with address, hours, and direct contact options', () => {
    renderApp(['/ziyaret']);

    expect(
      screen.getByRole('heading', {
        name: /adres, saat ve iletisim bilgisi ayri bir rota ile daha hizli taranir/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/moda caddesi 18, kadikoy \/ istanbul/i)).toBeInTheDocument();
    expect(screen.getByText(/cum-cmt \| 08.00 - 23.00/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /yol tarifi ac/i })).toHaveAttribute(
      'href',
      'https://maps.google.com/?q=Moda+Caddesi+18+Kadikoy+Istanbul',
    );
    expect(
      screen.getByRole('link', { name: /dukkani ara \+90 \(212\) 555 04 56/i }),
    ).toHaveAttribute('href', 'tel:+902125550456');
    expect(screen.getByRole('link', { name: /e-posta gonder/i })).toHaveAttribute(
      'href',
      'mailto:merhaba@harborandhearth.cafe',
    );
    expect(
      screen.getAllByRole('link', {
        name: /masa ayirt\s*harbor and hearth rezervasyon akisini yeni sekmede acar/i,
      })[0],
    ).toHaveAttribute(
      'href',
      'https://reserve.harborandhearth.cafe',
    );
  });
});

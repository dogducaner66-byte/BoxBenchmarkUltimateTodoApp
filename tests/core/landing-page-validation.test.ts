import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';
import { buildSmokeTokens, validateLandingPageBuild } from '../../scripts/verifyLandingPageBuild.mjs';

describe('landing page build and smoke validation', () => {
  it('renders the outdoor storefront home route with a consistent collection CTA', () => {
    render(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/'] },
        React.createElement(App),
      ),
    );

    expect(
      screen.getByRole('heading', {
        name: /premium outdoor retail deneyimi kategori, urun ve destek rotalarinda ayni netlikle ilerliyor/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /outdoor kategorileri fiyat duygusunu destekleyen metin ve detay bloklariyla sunuluyor/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /hizli teslimat, showroom destegi ve tek amiral urun hikayesi guveni yukseltiyor/i,
      }),
    ).toBeInTheDocument();

    const primaryNavigation = screen.getByRole('navigation', { name: /birincil/i });
    expect(within(primaryNavigation).getByRole('link', { name: /koleksiyonu kesfet/i })).toHaveAttribute(
      'href',
      '/kategoriler',
    );
    expect(screen.getByRole('link', { name: /yeni sezonu kesfet/i })).toHaveAttribute(
      'href',
      '/kategoriler',
    );
    expect(screen.getByRole('link', { name: /urun detayini ac/i })).toHaveAttribute(
      'href',
      '/urun/zirve-shell-ceket',
    );
  });

  it('validates the built landing page output for the MVP smoke contract', () => {
    expect(validateLandingPageBuild(process.cwd())).toMatchObject({
      checkedTokens: buildSmokeTokens.length,
    });
  });

  it('fails clearly when the built primary CTA contract is missing', () => {
    const tempRoot = mkdtempSync(path.join(os.tmpdir(), 'landing-page-build-validation-'));
    const distDirectory = path.join(tempRoot, 'dist');
    const assetsDirectory = path.join(distDirectory, 'assets');
    const partialSmokeTokens = buildSmokeTokens.slice(0, buildSmokeTokens.length - 1);

    try {
      mkdirSync(assetsDirectory, { recursive: true });
      writeFileSync(
        path.join(distDirectory, 'index.html'),
        [
          '<!doctype html>',
          '<html lang="tr">',
          '  <head>',
          '    <link rel="stylesheet" href="/assets/index-test.css" />',
          '  </head>',
          '  <body>',
          '    <div id="root"></div>',
          '    <script type="module" src="/assets/index-test.js"></script>',
          '  </body>',
          '</html>',
        ].join('\n'),
        'utf8',
      );
      writeFileSync(
        path.join(assetsDirectory, 'index-test.js'),
        partialSmokeTokens.join('\n'),
        'utf8',
      );
      writeFileSync(
        path.join(assetsDirectory, 'index-test.css'),
        '.mobile-booking-bar{display:grid;}',
        'utf8',
      );

      expect(() => validateLandingPageBuild(tempRoot)).toThrow(
        `Missing build smoke token "${buildSmokeTokens.at(-1)}"`,
      );
    } finally {
      rmSync(tempRoot, { force: true, recursive: true });
    }
  });
});

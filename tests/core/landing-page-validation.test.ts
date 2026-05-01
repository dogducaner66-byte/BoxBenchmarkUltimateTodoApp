import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';
import { bookingTarget } from '../../src/content/cafeContent';
import { buildSmokeTokens, validateLandingPageBuild } from '../../scripts/verifyLandingPageBuild.mjs';

describe('landing page build and smoke validation', () => {
  it('renders the storefront home route with a consistent reservation CTA', () => {
    render(
      React.createElement(
        MemoryRouter,
        { initialEntries: ['/'] },
        React.createElement(App),
      ),
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

    const primaryNavigation = screen.getByRole('navigation', { name: /birincil/i });
    expect(within(primaryNavigation).getByRole('link', { name: /masa ayirt/i })).toHaveAttribute(
      'href',
      bookingTarget.href,
    );
    expect(screen.getByRole('link', { name: /rezervasyon baslat/i })).toHaveAttribute(
      'href',
      bookingTarget.href,
    );
    expect(screen.getAllByRole('link', { name: /masa ayirt/i })[0]).toHaveAttribute(
      'href',
      bookingTarget.href,
    );
  });

  it('validates the built landing page output for the MVP smoke contract', () => {
    expect(validateLandingPageBuild(process.cwd())).toMatchObject({
      checkedTokens: buildSmokeTokens.length,
    });
  });

  it('fails clearly when the built reservation CTA contract is missing', () => {
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
        '.mobile-booking-bar{display:flex;}',
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

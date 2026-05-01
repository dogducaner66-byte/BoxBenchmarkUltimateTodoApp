import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';
import {
  storefrontBuildSmokeTokens,
  validateStorefrontBuild,
} from '../../scripts/verifyLandingPageBuild.mjs';

function renderApp(initialEntries: string[] = ['/']) {
  return render(
    React.createElement(
      MemoryRouter,
      { initialEntries },
      React.createElement(App),
    ),
  );
}

function writeStorefrontBuildFixture(
  tempRoot: string,
  {
    indexHtmlTokens = storefrontBuildSmokeTokens.indexHtml,
    scriptTokens = storefrontBuildSmokeTokens.script,
    styleTokens = storefrontBuildSmokeTokens.style,
  }: {
    indexHtmlTokens?: string[];
    scriptTokens?: string[];
    styleTokens?: string[];
  } = {},
) {
  const distDirectory = path.join(tempRoot, 'dist');
  const assetsDirectory = path.join(distDirectory, 'assets');

  mkdirSync(assetsDirectory, { recursive: true });
  writeFileSync(
    path.join(distDirectory, 'index.html'),
    [
      '<!doctype html>',
      `<html lang="tr">`,
      '  <head>',
      '    <meta charset="UTF-8" />',
      `    <meta name="description" content="${indexHtmlTokens[2] ?? ''}" />`,
      '    <meta property="og:locale" content="tr_TR" />',
      '    <link rel="canonical" href="https://kuzeypatika.com/" />',
      '    <link rel="stylesheet" href="/assets/index-test.css" />',
      '  </head>',
      '  <body>',
      '    <div id="root"></div>',
      '    <script type="module" src="/assets/index-test.js"></script>',
      '  </body>',
      '</html>',
      ...indexHtmlTokens.filter(
        (token) =>
          ![
            '<html lang="tr">',
            'name="description"',
            'Turkiye geneline teslimat yapan premium outdoor katmanlar',
            'property="og:locale" content="tr_TR"',
            'rel="canonical" href="https://kuzeypatika.com/"',
          ].includes(token),
      ),
    ].join('\n'),
    'utf8',
  );
  writeFileSync(path.join(assetsDirectory, 'index-test.js'), scriptTokens.join('\n'), 'utf8');
  writeFileSync(path.join(assetsDirectory, 'index-test.css'), styleTokens.join('\n'), 'utf8');
}

describe('turkish outdoor storefront smoke contract', () => {
  it('renders storefront routes with commerce-aware CTAs and purchase state', () => {
    renderApp(['/urun/zirve-shell-ceket']);

    expect(screen.getByRole('heading', { level: 1, name: /zirve shell ceket/i })).toBeInTheDocument();
    expect(screen.getByText(/14.900 TL/i)).toBeInTheDocument();
    expect(screen.getByText(/stokta ve ayni gun cikisa uygun/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /kategorilere don/i })).toHaveAttribute('href', '/kategoriler');
    expect(screen.getByRole('link', { name: /^teslimat ve iade$/i })).toHaveAttribute('href', '/teslimat-iade');
    expect(screen.getByRole('link', { name: /beden destegi iste/i })).toHaveAttribute('href', '/iletisim');
  });

  it('redirects unsupported routes and missing product slugs back into valid storefront pages', () => {
    const missingRoute = renderApp(['/olmayan-rota']);

    expect(
      screen.getByRole('heading', {
        name: /dort mevsim saha kullanimi icin tasarlanan premium outdoor katmanlar/i,
      }),
    ).toBeInTheDocument();

    missingRoute.unmount();

    renderApp(['/urun/bilinmeyen-shell']);

    expect(screen.getByRole('heading', { level: 1, name: /zirve shell ceket/i })).toBeInTheDocument();
    expect(screen.getByText(/stokta ve ayni gun cikisa uygun/i)).toBeInTheDocument();
  });

  it('validates the built storefront output across SEO, routing, and commerce smoke tokens', () => {
    expect(validateStorefrontBuild(process.cwd())).toMatchObject({
      checkedIndexTokens: storefrontBuildSmokeTokens.indexHtml.length,
      checkedScriptTokens: storefrontBuildSmokeTokens.script.length,
      checkedStyleTokens: storefrontBuildSmokeTokens.style.length,
      checkedTokens:
        storefrontBuildSmokeTokens.indexHtml.length +
        storefrontBuildSmokeTokens.script.length +
        storefrontBuildSmokeTokens.style.length,
    });
  });

  it('fails clearly when a storefront route token is missing from the built script asset', () => {
    const tempRoot = mkdtempSync(path.join(os.tmpdir(), 'storefront-build-validation-'));

    try {
      writeStorefrontBuildFixture(tempRoot, {
        scriptTokens: storefrontBuildSmokeTokens.script.slice(0, storefrontBuildSmokeTokens.script.length - 1),
      });

      expect(() => validateStorefrontBuild(tempRoot)).toThrow(
        `Missing build smoke token "${storefrontBuildSmokeTokens.script.at(-1)}"`,
      );
    } finally {
      rmSync(tempRoot, { force: true, recursive: true });
    }
  });

  it('fails clearly when required storefront styling hooks are missing from the built css asset', () => {
    const tempRoot = mkdtempSync(path.join(os.tmpdir(), 'storefront-build-validation-'));

    try {
      writeStorefrontBuildFixture(tempRoot, {
        styleTokens: storefrontBuildSmokeTokens.style.slice(0, storefrontBuildSmokeTokens.style.length - 1),
      });

      expect(() => validateStorefrontBuild(tempRoot)).toThrow(
        `Missing build smoke token "${storefrontBuildSmokeTokens.style.at(-1)}"`,
      );
    } finally {
      rmSync(tempRoot, { force: true, recursive: true });
    }
  });
});

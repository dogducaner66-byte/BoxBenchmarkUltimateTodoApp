import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from '../../src/App';
import { bookingTarget } from '../../src/content/cafeContent';
import { buildSmokeTokens, validateLandingPageBuild } from '../../scripts/verifyLandingPageBuild.mjs';

describe('landing page build and smoke validation', () => {
  it('renders the core MVP sections with a consistent reservation CTA', () => {
    render(React.createElement(App));

    expect(
      screen.getByRole('heading', {
        name: /menu highlights that make the room feel worth reserving/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /location, hours, and contact details that remove first-visit friction/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /give launch-week traffic one booking target and a confident reason to use it/i,
      }),
    ).toBeInTheDocument();

    const primaryNavigation = screen.getByRole('navigation', { name: /primary/i });
    expect(within(primaryNavigation).getByRole('link', { name: /book online/i })).toHaveAttribute(
      'href',
      bookingTarget.href,
    );
    expect(screen.getByRole('link', { name: /reserve a table/i })).toHaveAttribute(
      'href',
      bookingTarget.href,
    );
    expect(screen.getByRole('link', { name: /start online reservation/i })).toHaveAttribute(
      'href',
      bookingTarget.href,
    );
    expect(screen.getByRole('link', { name: /book now/i })).toHaveAttribute(
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
          '<html lang="en">',
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

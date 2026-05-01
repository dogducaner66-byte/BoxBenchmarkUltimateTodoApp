import { readFileSync } from 'node:fs';
import path from 'node:path';

describe('landing page metadata shell', () => {
  it('ships crawlable metadata, social preview tags, and store schema in index.html', () => {
    const indexHtml = readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');

    expect(indexHtml).toContain('<html lang="tr">');
    expect(indexHtml).toContain('name="description"');
    expect(indexHtml).toContain('Turkiye geneline teslimat yapan premium outdoor katmanlar');
    expect(indexHtml).toContain('property="og:title"');
    expect(indexHtml).toContain('property="og:locale" content="tr_TR"');
    expect(indexHtml).toContain('name="twitter:card" content="summary_large_image"');
    expect(indexHtml).toContain('rel="canonical" href="https://kuzeypatika.com/"');
    expect(indexHtml).toContain('rel="preload" as="image" href="/media/hero/outdoor-hero.jpg"');
    expect(indexHtml).toContain(
      'content="https://kuzeypatika.com/media/social/kuzey-patika-storefront-og.jpg"',
    );
    expect(indexHtml).toContain('property="og:image:width" content="1200"');
    expect(indexHtml).toContain('name="twitter:image:alt"');

    const schemaMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

    expect(schemaMatch).not.toBeNull();

    const schema = JSON.parse(schemaMatch?.[1].trim() ?? '{}');

    expect(schema['@context']).toBe('https://schema.org');
    expect(Array.isArray(schema['@graph'])).toBe(true);

    const graph = schema['@graph'] as Array<Record<string, unknown>>;
    const store = graph.find((node) => {
      const nodeType = node['@type'];

      return Array.isArray(nodeType) && nodeType.includes('OnlineStore');
    });
    const product = graph.find((node) => node['@type'] === 'Product');
    const website = graph.find((node) => node['@type'] === 'WebSite');

    expect(website).toMatchObject({
      '@id': 'https://kuzeypatika.com/#website',
      inLanguage: 'tr-TR',
    });
    expect(store).toMatchObject({
      name: 'Kuzey Patika',
      telephone: '+90-850-305-7624',
      areaServed: 'TR',
      currenciesAccepted: 'TRY',
    });
    expect((store?.hasOfferCatalog as { url: string }).url).toBe('https://kuzeypatika.com/kategoriler');
    expect((store?.hasMerchantReturnPolicy as { merchantReturnDays: number }).merchantReturnDays).toBe(30);
    expect((store?.address as { streetAddress: string }).streetAddress).toBe('Bomonti Silahsor Caddesi 42');
    expect((store?.openingHoursSpecification as unknown[])).toHaveLength(2);
    expect(product).toMatchObject({
      name: 'Zirve Shell Ceket',
      material: 'Geri donusumlu ripstop nylon',
    });
  });
});

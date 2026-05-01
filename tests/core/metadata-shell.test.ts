import { readFileSync } from 'node:fs';
import path from 'node:path';

describe('landing page metadata shell', () => {
  it('ships crawlable metadata, social preview tags, and store schema in index.html', () => {
    const indexHtml = readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');

    expect(indexHtml).toContain('<html lang="tr">');
    expect(indexHtml).toContain('name="description"');
    expect(indexHtml).toContain('Kuzey Patika, premium outdoor katmanlar');
    expect(indexHtml).toContain('property="og:title"');
    expect(indexHtml).toContain('name="twitter:card" content="summary_large_image"');
    expect(indexHtml).toContain('rel="canonical" href="https://kuzeypatika.com/"');
    expect(indexHtml).toContain('rel="preload" as="image" href="/outdoor-hero.jpg"');

    const schemaMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

    expect(schemaMatch).not.toBeNull();

    const schema = JSON.parse(schemaMatch?.[1].trim() ?? '{}');

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toEqual(['Store', 'SportingGoodsStore']);
    expect(schema.name).toBe('Kuzey Patika');
    expect(schema.hasOfferCatalog.url).toBe('https://kuzeypatika.com/kategoriler');
    expect(schema.telephone).toBe('+90-850-305-7624');
    expect(schema.address.streetAddress).toBe('Bomonti Silahsor Caddesi 42');
    expect(schema.openingHoursSpecification).toHaveLength(2);
  });
});

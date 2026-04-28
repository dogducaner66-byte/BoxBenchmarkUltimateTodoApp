import { readFileSync } from 'node:fs';
import path from 'node:path';

describe('landing page metadata shell', () => {
  it('ships crawlable metadata, social preview tags, and local business schema in index.html', () => {
    const indexHtml = readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');

    expect(indexHtml).toContain('name="description"');
    expect(indexHtml).toContain('Harbor & Hearth is a waterfront neighborhood cafe');
    expect(indexHtml).toContain('property="og:title"');
    expect(indexHtml).toContain('name="twitter:card" content="summary_large_image"');
    expect(indexHtml).toContain('rel="canonical" href="https://harborandhearth.cafe/"');
    expect(indexHtml).toContain('rel="preload" as="image" href="/hero-scene-mobile.svg"');
    expect(indexHtml).toContain('rel="preload" as="image" href="/hero-scene-desktop.svg"');

    const schemaMatch = indexHtml.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    );

    expect(schemaMatch).not.toBeNull();

    const schema = JSON.parse(schemaMatch?.[1].trim() ?? '{}');

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toEqual(['CafeOrCoffeeShop', 'LocalBusiness']);
    expect(schema.name).toBe('Harbor & Hearth');
    expect(schema.acceptsReservations).toBe(true);
    expect(schema.menu).toBe('https://harborandhearth.cafe/#menu');
    expect(schema.telephone).toBe('+1-555-010-2456');
    expect(schema.address.streetAddress).toBe('22 Harbor Lane');
    expect(schema.openingHoursSpecification).toHaveLength(3);
  });
});

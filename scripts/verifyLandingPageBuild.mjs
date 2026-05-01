import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const storefrontBuildSmokeTokens = {
  indexHtml: [
    '<html lang="tr">',
    'name="description"',
    'Turkiye geneline teslimat yapan premium outdoor katmanlar',
    'property="og:locale" content="tr_TR"',
    'rel="canonical" href="https://kuzeypatika.com/"',
  ],
  script: [
    'Dort mevsim saha kullanimi icin tasarlanan premium outdoor katmanlar.',
    'Premium outdoor retail deneyimi kategori, urun ve destek rotalarinda ayni netlikle ilerliyor.',
    'Zirve Shell Ceket',
    '14.900 TL',
    'Stokta ve ayni gun cikisa uygun',
    'Bomonti showroom randevusu',
    '/kategoriler',
    '/urun/',
    '/iletisim',
    '/teslimat-iade',
  ],
  style: ['.site-shell', '.showcase-card', '.purchase-card', '.button--primary'],
};

function readRequiredFile(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`Expected build artifact at ${filePath}. Run "npm run build" first.`);
  }

  return readFileSync(filePath, 'utf8');
}

function findBuildAsset(assetsDirectory, extension) {
  if (!existsSync(assetsDirectory)) {
    throw new Error(`Expected assets directory at ${assetsDirectory}. Run "npm run build" first.`);
  }

  const matchingAsset = readdirSync(assetsDirectory).find((entry) =>
    new RegExp(`^index-[^.]+\\.${extension}$`).test(entry),
  );

  if (!matchingAsset) {
    throw new Error(`Expected a built ${extension} asset in ${assetsDirectory}.`);
  }

  return path.join(assetsDirectory, matchingAsset);
}

function assertContains(content, token, filePath) {
  if (!content.includes(token)) {
    throw new Error(`Missing build smoke token "${token}" in ${filePath}.`);
  }
}

export function validateStorefrontBuild(rootDirectory = process.cwd()) {
  const distDirectory = path.join(rootDirectory, 'dist');
  const assetsDirectory = path.join(distDirectory, 'assets');
  const indexHtmlPath = path.join(distDirectory, 'index.html');
  const scriptAssetPath = findBuildAsset(assetsDirectory, 'js');
  const styleAssetPath = findBuildAsset(assetsDirectory, 'css');

  const indexHtml = readRequiredFile(indexHtmlPath);
  const scriptAsset = readRequiredFile(scriptAssetPath);
  const styleAsset = readRequiredFile(styleAssetPath);

  assertContains(indexHtml, path.basename(scriptAssetPath), indexHtmlPath);
  assertContains(indexHtml, path.basename(styleAssetPath), indexHtmlPath);
  assertContains(indexHtml, '<div id="root"></div>', indexHtmlPath);
  for (const token of storefrontBuildSmokeTokens.indexHtml) {
    assertContains(indexHtml, token, indexHtmlPath);
  }

  for (const token of storefrontBuildSmokeTokens.script) {
    assertContains(scriptAsset, token, scriptAssetPath);
  }

  for (const token of storefrontBuildSmokeTokens.style) {
    assertContains(styleAsset, token, styleAssetPath);
  }

  return {
    checkedIndexTokens: storefrontBuildSmokeTokens.indexHtml.length,
    checkedScriptTokens: storefrontBuildSmokeTokens.script.length,
    checkedStyleTokens: storefrontBuildSmokeTokens.style.length,
    checkedTokens:
      storefrontBuildSmokeTokens.indexHtml.length +
      storefrontBuildSmokeTokens.script.length +
      storefrontBuildSmokeTokens.style.length,
    indexHtmlPath,
    scriptAssetPath,
    styleAssetPath,
  };
}

export const buildSmokeTokens = storefrontBuildSmokeTokens.script;
export const validateLandingPageBuild = validateStorefrontBuild;

const commandPath = process.argv[1];
const isDirectExecution = Boolean(commandPath) && import.meta.url === pathToFileURL(commandPath).href;

if (isDirectExecution) {
  try {
    const validationResult = validateStorefrontBuild();
    console.log(
      `Storefront build smoke validation passed for ${path.relative(process.cwd(), validationResult.indexHtmlPath)}.`,
    );
    console.log(
      `Checked ${validationResult.checkedTokens} storefront smoke tokens across ${path.relative(process.cwd(), validationResult.indexHtmlPath)}, ${path.relative(process.cwd(), validationResult.scriptAssetPath)}, and ${path.relative(process.cwd(), validationResult.styleAssetPath)}.`,
    );
  } catch (error) {
    console.error('Storefront build smoke validation failed.');
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}

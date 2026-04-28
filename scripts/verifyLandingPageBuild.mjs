import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const buildSmokeTokens = [
  'Menu highlights that make the room feel worth reserving.',
  'Location, hours, and contact details that remove first-visit friction.',
  'Give launch-week traffic one booking target and a confident reason to use it.',
  'Reserve a table',
  'https://reserve.harborandhearth.cafe',
];

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

export function validateLandingPageBuild(rootDirectory = process.cwd()) {
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
  assertContains(styleAsset, '.mobile-booking-bar', styleAssetPath);

  for (const token of buildSmokeTokens) {
    assertContains(scriptAsset, token, scriptAssetPath);
  }

  return {
    checkedTokens: buildSmokeTokens.length,
    indexHtmlPath,
    scriptAssetPath,
    styleAssetPath,
  };
}

const commandPath = process.argv[1];
const isDirectExecution = Boolean(commandPath) && import.meta.url === pathToFileURL(commandPath).href;

if (isDirectExecution) {
  try {
    const validationResult = validateLandingPageBuild();
    console.log(
      `Landing page build smoke validation passed for ${path.relative(process.cwd(), validationResult.indexHtmlPath)}.`,
    );
    console.log(
      `Checked ${validationResult.checkedTokens} landing-page smoke tokens in ${path.relative(process.cwd(), validationResult.scriptAssetPath)}.`,
    );
  } catch (error) {
    console.error('Landing page build smoke validation failed.');
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}

import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const htmlPath = fileURLToPath(new URL('../../../outputs/冻土回声官网候选上线版.html', import.meta.url));
const html = fs.readFileSync(htmlPath, 'utf8');
const queuedFrames = [];
const dom = new JSDOM(html, {
  url: `file:///${htmlPath.replaceAll('\\', '/')}`,
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  beforeParse(window) {
    window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} });
    window.requestAnimationFrame = (callback) => { queuedFrames.push(callback); return queuedFrames.length; };
    window.cancelAnimationFrame = () => {};
    window.scrollTo = () => {};
  },
});

const { window } = dom;
const { document } = window;
const wait = () => new Promise((resolve) => window.setTimeout(resolve, 30));

async function navigate(route) {
  window.location.hash = route;
  window.dispatchEvent(new window.HashChangeEvent('hashchange'));
  await wait();
}

const checks = {};
checks.homeTitle = document.querySelector('main h1')?.textContent?.trim() || '';
checks.reviewArtifactsAbsent = !document.body.textContent.includes('审阅清单');
checks.homeImagesAreEmbedded = [...document.querySelectorAll('main img')].every((image) => image.src.startsWith('data:image/'));

await navigate('/zh/activities');
checks.activitiesContainSSCA21 = document.querySelector('main')?.textContent?.includes('SSCA21') || false;
checks.activityImages = document.querySelectorAll('.activity-media__image').length;
checks.activityCards = document.querySelectorAll('.activity-media').length;

await navigate('/zh/partners');
checks.partnerNodes = document.querySelectorAll('.partner-orbit-node').length;
checks.partnerTransforms = [...document.querySelectorAll('.partner-orbit-node')].filter((node) => node.style.transform.includes('translate3d')).length;

await navigate('/zh/about');
checks.aboutHasBusinessCopy = document.querySelector('main')?.textContent?.includes('GameJam活动策划与站点运营') || false;

await navigate('/zh/articles/industry-observation-after-the-show');
checks.articleFigures = document.querySelectorAll('.article-content figure').length;
checks.articleImagesAreEmbedded = [...document.querySelectorAll('.article-content figure img')]
  .every((image) => image.src.startsWith('data:image/'));
checks.articleHasReadingTime = document.querySelector('main')?.textContent?.includes('本文总字数约1.2万字') || false;
checks.articleAuthorProfileAbsent = !document.querySelector('main')?.textContent?.includes('作者简介：一路从翻盖手机');

const languageButton = document.querySelector('button[aria-label="切换语言"],button[aria-label="Switch language"]');
languageButton?.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
checks.languageOptions = document.querySelectorAll('#offline-language-menu a').length;

const result = {
  bytes: Buffer.byteLength(html),
  queuedAnimationFrames: queuedFrames.length,
  ...checks,
};
console.log(JSON.stringify(result, null, 2));

dom.window.close();

if (
  !checks.homeTitle ||
  !checks.reviewArtifactsAbsent ||
  !checks.homeImagesAreEmbedded ||
  !checks.activitiesContainSSCA21 ||
  checks.activityImages < 9 ||
  checks.activityCards < 4 ||
  checks.partnerNodes !== 11 ||
  checks.partnerTransforms !== 11 ||
  !checks.aboutHasBusinessCopy ||
  checks.articleFigures !== 6 ||
  !checks.articleImagesAreEmbedded ||
  !checks.articleHasReadingTime ||
  !checks.articleAuthorProfileAbsent ||
  checks.languageOptions !== 6
) {
  process.exitCode = 1;
}

import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const htmlPath = fileURLToPath(
  new URL('../../../outputs/冻土回声官网离线审阅版.html', import.meta.url),
);
const html = fs.readFileSync(htmlPath, 'utf8');
const queuedFrames = [];

const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  beforeParse(window) {
    window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {} });
    window.requestAnimationFrame = (callback) => {
      queuedFrames.push(callback);
      return queuedFrames.length;
    };
    window.cancelAnimationFrame = () => {};
  },
});

const { document } = dom.window;
const result = {
  title: document.title,
  partnerNodes: document.querySelectorAll('.pnode').length,
  activityCards: document.querySelectorAll('#activityCards .card').length,
  embeddedImages: [...document.images].filter((image) => image.src.startsWith('data:image/')).length,
  activityCarouselDots: document.querySelectorAll('#activityCards .dots button').length,
  sphereCardsWithTransforms: [...document.querySelectorAll('.pnode')].filter(
    (node) => node.style.transform.includes('translate3d'),
  ).length,
  externalHttpReferences: (html.match(/https?:\/\//g) || []).length,
  queuedAnimationFrames: queuedFrames.length,
};

console.log(JSON.stringify(result, null, 2));
dom.window.close();

if (
  result.partnerNodes !== 11 ||
  result.activityCards !== 4 ||
  result.embeddedImages < 20 ||
  result.sphereCardsWithTransforms !== 11 ||
  result.externalHttpReferences !== 0
) {
  process.exitCode = 1;
}

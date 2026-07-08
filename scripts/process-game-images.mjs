/**
 * 批量处理 CIGA GameJam 2026 作品图片
 * 重命名 + 压缩为 webp（max 1200px, q=80）
 */
import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = '/Users/w/WorkBuddy/冻土回声/website/docs/ciga-gamejam-2026-shenyang';
const DST = join(__dirname, '..', 'public/images/activities/ciga-gamejam-2026-shenyang/games');

if (!existsSync(DST)) mkdirSync(DST, { recursive: true });

// MD 文件中的目录号 -> 作品序号
const dirToGameNum = {
  27: 1, 26: 2, 25: 3, 24: 4, 23: 5, 22: 6, 21: 7,
  20: 8, 19: 9, 18: 10, 17: 11, 15: 12, 14: 13,
  13: 14, 12: 15, 11: 16, 10: 17, 9: 18, 8: 19,
  7: 20, 6: 21, 5: 22, 4: 23, 3: 24, 2: 25, 1: 26,
};

let totalOriginal = 0;
let totalCompressed = 0;

for (const [dirNum, gameNum] of Object.entries(dirToGameNum)) {
  const srcDir = join(SRC, dirNum);
  if (!existsSync(srcDir)) {
    console.log(`  [跳过] 目录 ${dirNum} 不存在`);
    continue;
  }

  const files = readdirSync(srcDir).filter(f => !f.startsWith('.'));
  if (files.length === 0) {
    console.log(`  [跳过] 目录 ${dirNum} 为空`);
    continue;
  }

  const srcFile = join(srcDir, files[0]);
  const dstFile = join(DST, `game-${String(gameNum).padStart(2, '0')}.webp`);

  try {
    const srcStat = statSync(srcFile);
    totalOriginal += srcStat.size;

    await sharp(srcFile)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(dstFile);

    const dstStat = statSync(dstFile);
    totalCompressed += dstStat.size;

    const ratio = ((1 - dstStat.size / srcStat.size) * 100).toFixed(1);
    console.log(`  [OK] 作品${String(gameNum).padStart(2, '0')} (目录${dirNum}) -> game-${String(gameNum).padStart(2, '0')}.webp (${(srcStat.size/1024).toFixed(0)}KB -> ${(dstStat.size/1024).toFixed(0)}KB, -${ratio}%)`);
  } catch (err) {
    console.error(`  [FAIL] 作品${gameNum} (目录${dirNum}): ${err.message}`);
  }
}

console.log(`\n总计: ${(totalOriginal/1024/1024).toFixed(1)}MB -> ${(totalCompressed/1024/1024).toFixed(1)}MB (${((1-totalCompressed/totalOriginal)*100).toFixed(1)}% 压缩)`);
console.log('完成！');

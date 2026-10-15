import { mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const [command, ...args] = process.argv.slice(2);

if (!command) {
  throw new Error('Usage: node scripts/run-with-local-temp.mjs <command> [...args]');
}

const tempDirectory = path.resolve(process.cwd(), '.tmp');
mkdirSync(tempDirectory, { recursive: true });

const result = spawnSync(command, args, {
  cwd: process.cwd(),
  env: {
    ...process.env,
    TEMP: tempDirectory,
    TMP: tempDirectory,
    TMPDIR: tempDirectory,
  },
  shell: process.platform === 'win32',
  stdio: 'inherit',
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);

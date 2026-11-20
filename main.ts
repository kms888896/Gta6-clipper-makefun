/**
 * make.fun entry point for the GTA 6 clip submission.
 * Copies VIDEO.json from MAKEFUN_BOT_DIR (default /bot) into
 * MAKEFUN_OUTPUT_DIR (default /output), creating the output dir.
 * Node 22, standard library only.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
} catch (error) {
  process.stderr.write(`VIDEO.json could not be copied from ${botDir}: ${(error as Error).message}\n`);
  process.exit(1);
}

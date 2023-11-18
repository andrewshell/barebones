import 'dotenv/config';
import { readFile } from 'node:fs/promises';

let pkg = { name: 'unknown', 'version': '0.0.0' };

try {
  pkg = JSON.parse(
    await readFile(
      new URL('./package.json', import.meta.url),
      { encoding: 'utf8' },
    )
  );
} catch (err) {
  console.error(err.message);
}

export default {
    generator: `${pkg.name} ${pkg.version}`,
    port: process.env.PORT || 3000,
};

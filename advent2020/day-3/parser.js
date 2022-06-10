import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const parser = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString().split('\n').map((row) => row.split(''));


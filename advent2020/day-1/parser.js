import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const parser = fs.readFileSync(path.join(__dirname, "input.txt"), 'utf8').toString().trim().split("\n").map((number) => parseInt(number, 10));
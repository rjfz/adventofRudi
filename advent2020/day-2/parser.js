import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const parser = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString().trim().split('\n')
	.map((line) => {
		let [, low, high, char, pass] = /(\d+)-(\d+) (\w): (.+)/.exec(line);
		low = parseInt(low, 10);
		high = parseInt(high, 10);
		return { low, high, char, pass };
	});

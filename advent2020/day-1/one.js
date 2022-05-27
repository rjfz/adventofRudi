// const { input } = require ('./parser');

import { parser } from './parser.js';

const output = () => {
    for (let i = 0; i <= parser.length; i++) {
        let a = 2020 - parser[i];
        let b = parser.filter(number => number == a);

        if (parser.filter(number => number == a).length == 1) { 
            return parser[i] * b;
        }
    }
}
console.log(output());
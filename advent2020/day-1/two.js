import { parser } from './parser.js';

const output = () => {

    for(let i = 0; i < parser.length; i++ ) {
        let num1 = parser[i];

        for(let o = 0; o < parser.length; o++){
            const num2 = parser[o];

            for(let p = 0; p < parser.length; p++){
                const num3 = parser[p];

                if ((num1 + num2 + num3) === 2020) {
                    return num1 * num2 * num3;
                }
            }
        }
    }
}
console.log(output())
const fs = require('fs');
const path = require('path');

const line = fs.readFileSync(path.join(__dirname,"input.txt"), 'urf8').toString().trim().split("\n").map((number) => parseInt(number, 10));


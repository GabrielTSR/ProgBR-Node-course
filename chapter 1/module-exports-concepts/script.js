const calc = require('./calc');

const args = process.argv.slice(2);

const operation = args[0];

const a = Number(args[1]);
const b = Number(args[2]);
const c = operation === 's' ? calc.sum(a, b) : calc.mult(a, b);

console.log(c);

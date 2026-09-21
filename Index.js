const _ = require("lodash");
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
console.log("Argumentos:", args);
console.log("Ordenado:", _.sortBy([3, 1, 2]));

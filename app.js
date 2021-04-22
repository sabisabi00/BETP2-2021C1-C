const chalk = require('chalk');
const validator = require('validator');
const utils = require('./utils');

console.log(chalk.magenta("Hola mundo!"));
console.log([16,5,6,7,8].sort((a,b)=> a -b));

//[45,55,4,1].forEach(num => console.log(num));

console.log(validator.isEmail("pablof@tecnoshare"));

console.log(utils.suma(9,5));

// VOLVEMOS 20:14
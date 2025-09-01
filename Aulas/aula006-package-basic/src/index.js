import chalk from 'chalk';

const warnig = chalk.italic.hex('#FFA500')
const error = chalk.bold.red

console.log(error("[ERROR]"))
console.log(warnig('Warning!'))
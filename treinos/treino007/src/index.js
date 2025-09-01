import logSymbols from 'log-symbols';
import chalk from 'chalk';

console.log('\n')
console.log(logSymbols.error, chalk.red.bold ("[ERRO] O sistema está com algum problema!"))
console.log(logSymbols.success, chalk.green.italic("Sistema está rodando!"))
console.log('\n')
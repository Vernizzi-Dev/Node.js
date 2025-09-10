import chalk from"chalk";
import logSymbols from"log-symbols"

console.log(chalk.cyan.italic.bold("Hello Word!!"))

/* Formas de executar um NPM Script:

 1º npm run script;

 2º dentro do arquivo package.json você vai passar o mouse por cima do nome do seu script e vai clicar em Executar Script or Run Script.

 3º habilitar os Npm Scripts nos 3 pontinhos que ficam no canto superior esquerdo do VsCode. Logo após vai surgir um campo escrito Scripts NPM no canto inferior esquerdo do seu VsCode.

  */

console.log(chalk.bgCyan.yellow.italic("Rodando via Script"))
console.log(chalk.yellow.bold.underline(logSymbols.success ,"Iniciando servidor..."))
console.log("\n")
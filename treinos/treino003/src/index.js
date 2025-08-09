let opera = require("./services/operacoes")

async function main(){
    console.log("\n")
    console.log("🧮____________OPERAÇÕES MATEMÁTICAS____________🧮")

    opera.somar(10, 5);
    opera.multiplicar(10, 5);
    opera.dividir(10, 5);
    opera.subtrair(30, 10);
}

main();
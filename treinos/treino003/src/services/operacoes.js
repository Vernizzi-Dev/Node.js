async function somar(a, b){
    console.log("\n")
    console.log("A soma dos valores " + a + " + " + b + " = " + (a + b))
    console.log("______________________________________________")
}
async function subtrair(a, b){
    console.log("\n")
    console.log("A subtração dos valores " + a + " - " + b + " = " + (a - b))
    console.log("______________________________________________")
}
async function multiplicar(a, b){
    console.log("\n")
    console.log("A multiplicação dos valores " + a + " x " + b + " = " + (a * b))
    console.log("______________________________________________")
}
async function dividir(a, b){
    console.log("\n")
    console.log("A divisão dos valores " + a + " / " + b + " = " + (a / b))
    console.log("______________________________________________")
}



module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
}
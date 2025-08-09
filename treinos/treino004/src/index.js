const {validarCpf} = require("./services/verification")         // assim que codifica uma destructuring ou desestruturação
const banco = require("./services/database")

async function main(){
console.log("\n")

    console.log("______VERIFICADOR DE CPF______")

    validarCpf("2939495960188")
    validarCpf("29394596011")              // esse é o destructuring! aqui eu chamo apenas o que eu quero usar, e não o barco todo!
    validarCpf("2939596011")
}

main()

console.log("\n")

async function data(){
    console.log("______DATA BASE CONECT______")

    banco.conectDataBase("Alunos")
    banco.desconectDataBase("Professores")      // aqui eu podeira chamar todas as funções que estão dentro do arquivo "database"
}

data()
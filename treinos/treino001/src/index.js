const usu = require("./services/usuarios")

async function main(){
    console.log("__________Usuários_________")

    usu.users("Victor Vernizzi", 33598382, "(11)997048551")
    usu.users("Eduardo Vernizzi", 33598382, "(11)997048551")
    usu.users("Carlos Alberto", 33598382, "(11)997048551")
    usu.users("Fabio Luis", 33598382, "(11)997048551")
}

main();
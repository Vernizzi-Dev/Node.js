const fs = require('fs');

console.log("📚__________MEU DIÁRIO_________📚")

function addTexto(texto){
    fs.appendFileSync("ex03.txt", texto + "\n")
    console.log(texto)
    console.log("Texto adicionado!")
}

addTexto("Essa é a minha Primeira mensagem;")
addTexto("Essa é a minha Segunda mensagem;")
addTexto("Essa é a minha Terceira mensagem;")
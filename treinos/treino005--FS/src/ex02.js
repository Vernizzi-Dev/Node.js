const fs = require("fs")

fs.writeFileSync("ex02.txt", "Avante Palestra")

const conteudo = fs.readFileSync("ex02.txt", "utf-8")
console.log(conteudo)
let saudar = require("./services/saudacao")

async function main(){
    console.log("SAUDAÇÕES")
    console.log("________________")

    saudar.saudacao("Victor Vernizzi")
    saudar.saudacao("Eduardo Vernizzi")
    saudar.saudacao("Thiago Vernizzi")
}

main()
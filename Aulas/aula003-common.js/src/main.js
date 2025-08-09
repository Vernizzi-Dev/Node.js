
const pro = require("./services/products")    // require (solicitando o conteúdo de outro arquivo / requerendo)

async function main(){
    console.log("🛒  CARINHO DE COMPRAS  🛒")
    console.log("______________________")
    pro.getFullName(5578, "Iphone 16 Pro Max")
    pro.getFullName(3482, "Carregador")
    pro.getFullName(1948, "Ipods")
    pro.getFullName(8894, "Teclado Gamer")
}

main()
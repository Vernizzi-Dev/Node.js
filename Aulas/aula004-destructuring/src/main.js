const {myProducts} = require("./services/produtos")         // Código de como fazer!!

async function main(){
    console.log("🛒_______________CARRINHO DE COMPRAS_______________🛒")

    myProducts("Carregador tipo C", 114873, "R$ 29,90")
    myProducts("Playstation 5", 223874, "R$ 3.950,90")
    myProducts("Mouse Pad", 442894, "R$ 49,90")                // isso é um exemplo de Destructuring ou Desestruturação
    myProducts("Lâmpada LED", 947225, "R$ 35,00")
}

main()
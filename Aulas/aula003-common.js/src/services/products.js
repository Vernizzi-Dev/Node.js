//Arquivo que mexe com os products

const productType = {
    version: "Fisíca",
    area: "Tech",
}

async function getFullName(codeId, productName){
    console.log("🛍️ - Product: " + codeId + "--" + productName);
    console.log("______________________")
}


module.exports = {
    getFullName,                // Tudo que estiver dentro de module.exports pode ser exportado!
    productType,
}   
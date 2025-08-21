const {serviceVehicle, verification} = require("./veiculos/veiculos.js")

async function main() {
    console.log("-------------------------MECÂNICA DO SEU JORGE------------------------")
    await serviceVehicle()
    await verification()
}
main()
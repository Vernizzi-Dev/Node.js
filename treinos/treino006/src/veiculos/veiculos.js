const prompt = require("prompt-sync")();
exports.serviceVehicle = async () =>{
    let nomeDono = prompt("Digite o seu nome: ")
    let modeloVeiculo = prompt("Digite o modelo do seu veíuculo: ")
    let placaVeiculo = prompt("Digite a placa do seu veículo: ")
    let tipoService = prompt("Digite qual serviço você quer realizar conosco: ")
    console.log('\n')
    console.log(`Cliente: ${nomeDono}  --  Modelo do Veículo: ${modeloVeiculo}  --  Placa: ${placaVeiculo}  --  Serviço Requerido: ${tipoService}`)
    console.log("_________________________________________________________________________________________________________")
}
exports.verification = async () =>{
    let veri = prompt("Deseja cadastrar mais um cliente? ") 
    let contador = 1

    while(veri === "S" || veri === "s" || veri === "sim" || veri === "SIM"){
        this.serviceVehicle()
        contador++
        veri = prompt("Deseja cadastrar mais um cliente? ") 
    } 
    if(contador == 1){
        console.log(`Ok! Foi cadastrado ${contador} novo cliente!! \n`)
    } else{
        console.log(`Ok! Foram cadastrados ${contador} novos clientes!! \n`)
    }
}
import * as dataBase from "./ultils/database.mjs"  // No tipo ESM é preciso colocar a extenção do arquivo! ex: .js  || ex: .mjs
import * as api from "./ultils/api.mjs"


/* import { connectDataBase, desconectDatabase } from "./ultils/database.mjs";   isso está desestruturado*/

dataBase.connectDataBase("Santander");
dataBase.desconectDatabase("Santander");
console.log(`Tipo de Usuário do Banco de Dados: ${dataBase.dataBaseType.userType}`)
console.log(`Tipo do Banco de Dados: ${dataBase.dataBaseType.dataType}`)
api.getDataFromApi("API do banco Santander")
console.log(`Código da API: ${api.key.value}`)
console.log(`Tipo da API: ${api.key.apiType}`)
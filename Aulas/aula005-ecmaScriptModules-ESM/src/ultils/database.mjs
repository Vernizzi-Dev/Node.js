const dataBaseType = {
    userType: "adim",
    dataType: "dataBase Local"
}


async function connectDataBase(dataName){
    // Lógica para conectar

    console.log(`Sistema conectado ao banco ${dataName}`)
}


async function desconectDatabase(dataName){
    console.log(`Desconectando do banco ${dataName}`)
}

export {
    connectDataBase,
    desconectDatabase,
    dataBaseType
}


// export default connectDataBase;    isso deixa essa função exportável no tipo do ESM
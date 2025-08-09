async function validarCpf(cpf){
    if(cpf.length !== 11){
        console.log(`❌ ERRO! O CPF [${cpf}] está inválido! tente novamente `)
    } else{
        console.log(`✅ VERIFICADO! O CPF [${cpf}] está correto! Contém 11 digitos`)
    }
}


module.exports = {
    validarCpf,
}
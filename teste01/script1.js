// function acharNumero2(numeros) {
//     for(guardar of numeros) {
//         if (guardar === 2) {
//               console.log(`Esse é o número ${guardar}`)
//         } else {
//               console.log(`O número é ${guardar} e algo deu errado`)
//         }
//     }

// }

// acharNumero2([1, 3, 2])

function acharNumero3(numeros) {
    return new Promise((resolve, reject) => {
        const encontrarNumero = numeros.find((dois) => dois === 2)
        if (encontrarNumero) {
            resolve(`numero ${encontrarNumero}, deu certo!`)
        } else {
            reject(`o número nao foi encontrado!`)
        }
    })
}
acharNumero3([2])
.then((resultadoPositivo) => {
    console.log(resultadoPositivo)
}).catch((resultadoNegativo) => {
    console.log(resultadoNegativo)
})
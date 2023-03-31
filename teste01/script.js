let p = new Promise((resolve, reject) => {
    let a = "Eduarda"
    if(a == "Matheus") {
        resolve(`O usuário Matheus foi encontrado!`)
    } else {
        reject(`O usuário Matheus não foi encontrado`)
    }
}

)

p.then((data) => {
    return data.toLowerCase()
}).then((StringModificada) => {
    console.log(StringModificada)
}).catch((err) => {
    console.log(err)
})



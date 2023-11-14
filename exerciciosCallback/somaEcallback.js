function somaAssincrona (x, y, callback) {
    setTimeout(()=> {
        const resultado = x + y
        callback(resultado)
    }, 1000)
}

somaAssincrona(4, 5, (resultado)=>{
    console.log(`a soma é ${resultado}`)
})

console.log('fazendo sua soma...')
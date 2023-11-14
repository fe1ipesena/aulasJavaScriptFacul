function processarNomes (nomes, callback) {
    const nomesMaiusculo = nomes.map(nome=>nome.toUpperCase())
    callback(nomesMaiusculo)
}

processarNomes(['felope', 'vilao', 'jp'], (nomesMaiusculo)=>{
    console.log(`os nomes em maiusculas sao ${nomesMaiusculo}`)
})

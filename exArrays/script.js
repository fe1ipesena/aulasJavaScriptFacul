
let numeros = [10, 2, 11, 35, 20];
let soma = 0;

function somaElementos(array){
    for(let i = 0; i<numeros.length; i++){
        soma += numeros[i];
    }
}
//rodando a funcao de soma
somaElementos(numeros)

//segunda atividade
function encontrarMaiorElemento(array){
}
const valorMax = numeros.reduce(function somaElementos(anterior, atual){
    return anterior > atual ? anterior : atual;
});

function filtrarNumerosPares(array){
    for(let i = 0; i<numeros.length; i++){
        if(numeros[i]%2 == 0){
            console.log('o numero ', numeros[i], ' é par')
        }
    }
}

console.log('a soma dos numeros é: ', soma)
console.log('o maior numero é: ', valorMax)
filtrarNumerosPares(numeros)
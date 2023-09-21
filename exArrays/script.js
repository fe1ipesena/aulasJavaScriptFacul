
let numeros = [10, 2, 12, 30, 20];
let soma = 0;

function somaElementos(array){
    for(let i = 0; i<numeros.length; i++){
        soma += numeros[i];
    }
}

//segunda atividade
function encontrarMaiorElemento(array){
}
const valorMax = numeros.reduce(function somaElementos(anterior, atual){
    return anterior > atual ? anterior : atual;
});

function 


console.log('a soma dos numeros é: ', soma)
console.log('o maior numero é: ', valorMax)
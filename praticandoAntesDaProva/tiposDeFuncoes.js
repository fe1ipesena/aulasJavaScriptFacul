
//ex1
function retornaPares () {
    let inteiros = [2, 3, 4, 5, 6, 9, 10]

    let pares = []

    for(let i = 0; i < inteiros.length; i++){
        if(inteiros[i] % 2 === 0){
            pares.push(inteiros[i])
        }
    }

    console.log(pares)

}

//ex2
let anonima = function () {
    let inteiros = [2, 3, 4, 5, 6, 9, 10]

    let impares = []

    for(let i = 0; i < inteiros.length; i++){
        if(inteiros[i] % 2 !== 0){
            impares.push(inteiros[i])
        }
    }

    console.log(impares)
}

//ex3
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }

}


//executando
retornaPares()
anonima()
console.log(fatorial(5))
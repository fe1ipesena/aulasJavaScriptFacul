//ex 1
let arr = [3, 4, 1, 9, 10]

let modifiedArr = arr.map(function(element){
    return element *2
})

console.log(modifiedArr)

//ex 2
let pares = [4, 11, 12, 3, 8] 
pares = pares.filter((num) => num % 2 === 0)
console.log(pares) 

//ex 3
let achar = [2, 1, 5, 7]
achar = achar.find((num) => num > 5)
console.log(achar)

//ex 4
const nomes = ['jose', 'ednaldo', 'malaquias', 'alfredo']
console.log(nomes.indexOf('malaquias'))

//ex 5 
let fila = new Array(5).fill(0)
console.log(fila)

//ex 6
let algum = [5, 4, 3 , 2, 1]
const possui = (element) => element % 2 === 0 
console.log(algum.some(possui))

//ex 7
let lessThanTen = [9, 5, 4, 8, 3, 11]
const isLess = (element) => element < 10
console.log(lessThanTen.every(isLess))
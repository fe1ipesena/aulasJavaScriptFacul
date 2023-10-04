//1
let car = {
    model: 'Uno Mille EP', year: '1996', color: 'green',
}
//2
console.log(car.year)

//3
car.model = 'Fiat'

//4

let livro = '{"Livro": "Sherlock Holmes", "Páginas": "211"}'
JSON.parse(livro)
console.log(livro)

//5
let fruta = 'abacaxi'
JSON.stringify(fruta)
console.log(fruta)

//6
let media = 0

let aluno1 = {
    nome: 'joao',
    notas: 10
}

let aluno2 = {
    nome: 'mike',
    notas: 8
}

let aluno3 = {
    nome: 'josefina',
    notas: 8
}

mediaGeral = (aluno1.notas + aluno2.notas + aluno3.notas) / 3
console.log(`A média das notas dos alunos ${aluno1.nome}, ${aluno2.nome}
e ${aluno3.nome} é: ${mediaGeral.toFixed(1)}`)

//7
let chafariz = {
    agua1: 'water',
    agua2: 'walter',
    agua3: 'wutter'
}

chafariz = JSON.stringify(chafariz)
console.log(chafariz)

//8
let listaTarefas = {
    estudar: { status: 'concluida' },
    comer: { status: 'naoConcluida' },
    jogar: { status: 'concluida' }
}

console.log('LISTA DE TAREFAS')
for (const property in listaTarefas) {

    console.log(`${property}->${listaTarefas[property].status}`)

}


//9

const deepCopyFunction = (inObject) => {
    let outObject, value, key

    if (typeof inObject !== "object" || inObject === null) {
        // retorna o valor de entrada se inObject não é objeto
        return inObject
    }

    // Cria um objeto ou array para armazenar os valores
    outObject = Array.isArray(inObject) ? [] : {}

    for (key in inObject) {
        value = inObject[key]

        // Cópia recursiva (profunda) para objetos aninhados
        outObject[key] = deepCopyFunction(value)
    }

    return outObject
}

let originalArray = [37, 3700, { hello: "world" }]
// 37 3700 Object { hello: "world" }
console.log("Original array:", ...originalArray)

let shallowCopiedArray = originalArray.slice()
let deepCopiedArray = deepCopyFunction(originalArray)

// vai afetar somente o array original
originalArray[1] = 0
console.log(`originalArray[1] = 0 // vai afetar somente o array original`)
// vai afetar o array original e a cópia superficial
originalArray[2].hello = "moon"
console.log(`originalArray[2].hello = "moon" // vai afetar o array original e a cópia superficial`)

// 37 0 Object { hello: "moon" }
console.log("Original array:", ...originalArray)
// 37 3700 Object { hello: "moon" }
console.log("Shallow copy:", ...shallowCopiedArray)
// 37 3700 Object { hello: "world" }
console.log("Deep copy:", ...deepCopiedArray)

//10
function filterObjectsByProperty(array, key) {
    return array.filter(obj => obj.hasOwnProperty(key));
}

// Exemplo de uso:
const arrayDeObjetos = [
    { name: "Alice", age: 30 },
    { name: "Bob", city: "Exampleville" },
    { name: "Charlie", age: 25, country: "Exampleland" },
];

const chaveFiltrada = "age";
const objetosFiltrados = filterObjectsByProperty(arrayDeObjetos, chaveFiltrada);

console.log(objetosFiltrados);

//desafio
const pessoa1 = {
    nome: "Alice",
    idade: 30,
    profissao: "Engenheira",
};

const pessoa2 = {
    nome: "Bob",
    idade: 25,
    profissao: "Designer",
};

const pessoa3 = {
    nome: "Charlie",
    idade: 35,
    profissao: "Professor",
};

const pessoas = [pessoa1, pessoa2, pessoa3];

function gerarTabela(pessoas) {
    let tabelaHTML = '<table><tr><th>Nome</th><th>Idade</th><th>Profissão</th></tr>';

    for (const pessoa of pessoas) {
        tabelaHTML += `<tr><td>${pessoa.nome}</td><td>${pessoa.idade}</td><td>${pessoa.profissao}</td></tr>`;
    }

    tabelaHTML += '</table>';

    return tabelaHTML;
}

document.body.innerHTML = gerarTabela(pessoas);

document.getElementById('idTexto').innerHTML = 'Tchau'

var element = document.getElementsByClassName('classText')
for (let i = 0; i < element.length; i++){
    element[i].innerHTML = 'Tchau'
}

let divFather = document.getElementById('divFather')
let divSon = document.createElement('div')
divSon.textContent = 'hello sir'

divFather.appendChild(divSon)

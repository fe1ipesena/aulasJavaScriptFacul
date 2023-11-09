
function before1sec(){
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
})
}

async function sayIt(){

    for(let i=10; i>0; i--){
        console.log(i)
        await before1sec()
    }
    console.log('foguete lançado!')
}

sayIt()
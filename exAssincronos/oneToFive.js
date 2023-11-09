
function before1sec(){
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
})
}

async function sayIt(){

    console.log('inicio')
    for(let i=0; i<=5; i++){
        console.log(i)
        await before1sec()
    }
    console.log('fim')
}

sayIt()
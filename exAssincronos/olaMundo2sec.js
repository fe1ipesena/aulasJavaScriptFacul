
function before2sec(resolve) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Olá, Mundo!')
            resolve()
        }, 2000);
    });
}

async function sayIt(){
    console.log('inicio')
    await before2sec()
    console.log('fim')
}

sayIt()
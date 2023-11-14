function filtrarPares (nums, callback) {
    const pares = nums.filter(num=>num%2===0)
    callback(pares)
}

filtrarPares([10, 1, 3, 2, 4], (pares)=>{
    console.log(`os numeros pares sao ${pares}`)
})

function calculadoraAsync(num1, num2, operador, callback) {
    setTimeout(() => {
        let resultado;
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    throw new Error("Não é possível dividir por zero");
                }
                break;
            default:
                throw new Error("Operador inválido");
        }
        callback(resultado);
    }, 1000);
}

calculadoraAsync(5, 3, '+', (resultado) => {
    console.log(resultado); 
});

const fs = require('fs');

function leituraAsync(caminho, callback) {
    fs.readFile(caminho, 'utf8', (erro, dados) => {
        if (erro) {
            throw erro;
        }
        callback(dados);
    });
}

leituraAsync('./ex.txt', (conteudo) => {
    console.log(conteudo);
});

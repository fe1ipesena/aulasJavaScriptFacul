class EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.codigo = codigo;
        this.emprestado = false;
        this.usuarioEmprestimo = null;
    }

    emprestar(usuario) {
        if (this.emprestado == true) {
            console.log('este livro já está emprestado');
        }
        else {
            this.emprestado = true;
            this.usuarioEmprestimo = usuario;
            console.log('livro emprestado com sucesso');
        }
    }

    devolver() {
        if (this.emprestado == false) {
            console.log('este livro nao foi emprestado');
        } else {
            this.emprestado = false;
            this.usuarioEmprestimo = null;
            console.log('livro foi devolvido');
        }
    }
}

class usuario {
    constructor(nome, registroAcademico, dataNascimento){
        this.nome = nome
        this.registroAcademico = registroAcademico
        this.dataNascimento = new Date(dataNascimento) //formata em formato de data
    }
}

const generoLivro = {
    ACAO : 'Acao',
    SUSPENSE: 'Suspense',
    PORNO: 'Porno',
    COMEDIA: 'Comedia'
}

class Livro extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, genero){
        super(titulo, autor, anoPublicacao, codigo);
        this.genero = genero;
    }
}

class Revista extends EntidadeBibliografica {
    constructor(titulo, autor, anoPublicacao, codigo, genero){
        super(titulo, autor, anoPublicacao, codigo);
        this.genero = genero;
    }
}

const log = console.log;

let pessoa = {
    nome: 'Lucas',
    idade: '34',
    
    falar: function() {
        log('Olá ,tudo bem? ' + 'Eu sou o ' + this.nome + '.');
    },

    soma: function(a, b) {
        return a + b;
    }
};

log(pessoa);

log(pessoa.nome);

log(pessoa.idade);

pessoa.falar();


var somaUm = pessoa.soma(2, 2);

log(somaUm);
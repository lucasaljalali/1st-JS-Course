const log = console.log;

log(window);
log(this); 

let pessoa = {
    nome: 'Lucas',
    idade: 34,
    
    falar: function() {
        log('Olá ,tudo bem? ');
    },

    dizerNome: function() {
        log('Eu sou o ' + this.nome + '.');
    },

    aniversario: function() {
        this.idade += 1;
    },

    saudacao: function() {
        return 'Olá Sr. ' + this.nome;
    }
};

pessoa.falar();

pessoa.dizerNome();

log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

log(pessoa.idade);

log(pessoa.saudacao());

var sdc = pessoa.saudacao();

log(sdc);



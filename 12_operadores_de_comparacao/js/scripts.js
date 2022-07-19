const log = console.log

var idade = 15;
var possuiCarro = 1;

if(idade >=18) {
    log("Pode fazer carteira");
}

if(idade <18) {
    log("Não pode fazer carteira");
}

if(possuiCarro) {
    log("Pode andar de carro");
}

var nome = "Pedro";

if(nome == "Lucas") {
    log("O nome é Lucas");
}

if(nome != "Lucas") {
    log("O nome não é Lucas");
}

if(20 > 10) {
    log("Passou");
}

if(10 < 20) {
    log("Passou 2");
}


//brincando
var obj = {
    nome: undefined,
    idade: undefined,
    possuiCarro: undefined,
};

function showInfoLog() {
    if (obj.idade >= 18) {
        log(obj.nome + " pode tirar carteira");
    }

    if (obj.possuiCarro) {
        log(obj.nome + " pode andar de carro");
    }
}

obj.nome = "Lucas";
obj.idade = 35;
obj.possuiCarro = 1;

showInfoLog();




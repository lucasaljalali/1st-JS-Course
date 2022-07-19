var idade = 16;
var idadeMinima = 18;
const log = console.log;

log("Antes do if");

if(idade >= idadeMinima) {
    log("Pode tirar Carteira")
}

if(idade < idadeMinima) {
    log("Ainda não pode tirar carteira, precisa esperar " + (idadeMinima - idade) + "anos!")
}

log("Depois do if");
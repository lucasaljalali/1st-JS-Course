var idade = 35;
var nome = 'Lucas';

if(nome == 'Lucas' && idade == 16) {
    console.log('O Lucas pode entrar');
} else {
    console.log("Não pode entrar");
}

if(1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if((1 == 1 && 3 > 3) && true) {
    console.log('Passou');
} else if(nome === 'Lucas' && idade >=14) {
    console.log('Aqui passa');
}
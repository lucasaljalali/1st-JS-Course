var idade = 15;
var nome = 'Lucas';
const log = console.log;

if(nome == 'Lucas' || idade > 14) {
    log('Pode entrar na aula');
} else {
    log('Não pode entrar');
}

if(nome == 'Lucas' && (30 >20 || 10 == 10)) {
    log('Testando');
} else {
    log('Não entrou');
}
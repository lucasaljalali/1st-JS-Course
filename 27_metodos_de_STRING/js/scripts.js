const log = console.log;

// length

var nome = 'Lucas';

log(nome.length);

var obj = 'bola';

log(obj.length);

//indexOf

log(nome[2]);

var frase = 'O rato roeu a roupa do rei de Roma';

log(frase.indexOf('roeu'));

//slice

var roeu = frase.slice(7, 11);

log(roeu);

//replace

var novaFrase = frase.replace('roeu', 'teste');

log(novaFrase);
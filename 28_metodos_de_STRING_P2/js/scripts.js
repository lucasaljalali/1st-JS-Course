const log = console.log;

//toLowerCase e toUpperCase

var frase = 'Esta é a frase que vamos manipular';

var fraseCaixaAlta = frase.toUpperCase();

log(fraseCaixaAlta);

log(fraseCaixaAlta.toLowerCase());


//trim

var nome = '            Lucas               ';

var nomeTrim = nome.trim();

log(nome);
log(nomeTrim);

//split

log(frase.split(' '))

var tags = "PHP, JavaScript, HTML, CSS";

log(tags.split(', '));

//lastIndexOf

var fraseDois = 'Eu quero a última palavra teste desta frase teste.'

log(fraseDois.indexOf('teste'));

log(fraseDois.lastIndexOf('teste'));


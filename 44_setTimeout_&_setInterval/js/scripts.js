const log = console.log;

//setTimeout

log('Antes do setTimeout')

setTimeout(function() {

    log('Testando o setTimeout');

}, 2000);

log('Depois do setTimeout');


//setInterval

setInterval(function() {

    log('Testando setInterval');

}, 3000);
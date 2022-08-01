const log = console.log;

//clearTimeout

var x = 0;

var myTimer = setTimeout(function() {
    log('O x é 0');
}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(myTimer);
    log('O Timeout foi anulado');
}


//clearInterval

var myInterval = setInterval(function() {
    log('imprimindo interval');
}, 1000);

setTimeout (function() {
    clearInterval(myInterval);
    log('Parou de imprimir inteval');
}, 5000);

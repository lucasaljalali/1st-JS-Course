const log = console.log;

for(var i = 10; i > 0; i--) {

    log(i);

    if(i === 5) {
        break;
    }

}

log("Deu o break");

var x = 10;

while(x < 100) {

    x += 10;

    if(x === 60 || x === 90) {
        log("Continue")
        continue;
    }

    log("Testando continue " + x);
}
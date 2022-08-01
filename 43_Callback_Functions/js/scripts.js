const log = console.log;

function exibir(num) {
    log("O resultado é: " + num);
}

function soma(a, b, callback) {
    var op = a + b;
    callback(op);
}

function multi(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(2, 3, exibir);

multi(2, 5, exibir);
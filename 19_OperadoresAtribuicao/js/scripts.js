const log = console.log;

var x = 1;
var y = 2;

//soma
log(x = x + y);
log(x += y);

//subtracao
log(x -= y);

//multiplicação
log( x *= y); 

//divisão
log( x/= y);

//loops
log(x++);
log(x--);

while(x <= 100) {

    log(x);

    x *= 2;

}


log(x); 


var j = 10;

while(x > 0) {
    
    log(x);

    x -= j;
}
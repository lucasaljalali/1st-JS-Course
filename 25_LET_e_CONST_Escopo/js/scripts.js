const log = console.log;

let x = 5; 

const y = 10;

x = 12;  //alterou x pq está no mesmo escopo

log(x);

log('const ' + y);

if(true) {

    let x = 20; //não altera x principal pq está em "let" dentro de outro escopo

    log(x); 

    const y = 50;

    log('const if ' + y);  //altera pois é outra const dentro de outro escopo

}

log(x); 

log(y);


if(20 > 10) {

    const y = 100;

    log('const if 2 ' + y);

}

for(let x = 0; x < 10; x++) {

    log(x);

}


log('x do escopo principal cotinua ' + x);

log('y do escopo principal cotinua ' + y);

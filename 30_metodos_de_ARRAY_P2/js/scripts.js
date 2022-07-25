const log = console.log;

// splice

var arr = [1,2,3,4,5];

log(arr);

arr.splice(2, 0, 'adicionei isto');

log(arr);

arr.splice(4, 1, 'removi o original e adicionei isto');

log(arr);


//indexOf

log(arr.indexOf(5));


//join

var arr2 = ['O', 'rato', 'roeu', 'a', 'roupa'];

log(arr2);

log(arr2.join(' '));


//reverse

log(arr2.reverse());
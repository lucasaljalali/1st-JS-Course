const log = console.log;


//lenght

var arr = [1,2,3,4,5];

log(arr.length);


//push

arr.push(6);

log(arr);

arr.push('Qualquer coisa no fim');

log(arr);


//pop

arr.pop();

log(arr);


//unshift

arr.unshift('qualquer coisa no inicio');

log(arr);


//shift

arr.shift()

log(arr);


//acessar o último elemento

log(arr[arr.length - 1]);


//isArray

log(Array.isArray(5));

log(Array.isArray(arr));

log(!Array.isArray(arr));

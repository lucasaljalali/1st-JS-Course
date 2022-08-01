const log = console.log;

//criar elemento

var el = document.createElement('div');

el.classList = 'divCriada';

log(el);

var container = document.querySelector('#container');


//inserir elemento filho

container.appendChild(el);


//inserir elemento antes (inserBefore)

var el2 = document.createElement('div');

el2.classList = 'divBefore';

var el3 = document.querySelector('#container .divCriada');

log(el3);

container.insertBefore(el2, el3);
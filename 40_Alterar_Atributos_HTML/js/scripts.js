const log = console.log;

//adicionar atributo

var title = document.querySelector('#title');

title.setAttribute('class', 'testandoAtributo');

log(title);

var btn = document.querySelector('#btn');

btn.setAttribute('disabled', 'disabled');

var subtitle = document.querySelector('#subtitle')

subtitle.setAttribute('class', 'titulo2')


//remover atributo

var lista = document.querySelector('#lista');

lista.removeAttribute('id');
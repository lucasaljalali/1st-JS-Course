const log = console.log;

//inserir o elemento no body

var novoParagrafo = document.createElement('p');

var texto = document.createTextNode('Texto criado com createTextNode')

novoParagrafo.appendChild(texto);

log(novoParagrafo);

var body = document.querySelector('body');

log(body);

body.appendChild(novoParagrafo);


//inserir em um container ou div

var textNodeContainer = document.getElementById('textNodeContainer');

log(textNodeContainer);

var el = document.createElement('span');

el.appendChild(document.createTextNode('texto do Span no JS'));

log(el);

textNodeContainer.appendChild(el);
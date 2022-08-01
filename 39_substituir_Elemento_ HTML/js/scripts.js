const log = console.log;

//criar elemento

var el = document.createElement('h3');

el.classList = 'classeAdicionada';

var texto = document.createTextNode('Texto adicionado no JS');

el.appendChild(texto);

log(el);


//selecionar elemento que quero trocar

var title = document.querySelector('#title');

log(title);


//selecionar pai do elemento

var pai = title.parentNode;

log(pai);


//trocar elementos

pai.replaceChild(el, title);


//adicionar estilos

el.style.color = 'blue';
el.style.fontSize = '2rem'
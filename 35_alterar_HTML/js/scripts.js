const log = console.log;

//selecionar elemento

var title = document.querySelector('#title');


//innerHTML

title.innerHTML = 'Testando o título alterado pelo JS!';


//textContent -> mais utilizado e recomendado.

var subtitle = document.querySelector('#subtitle');

log(subtitle);

subtitle.textContent = 'Testando o textContent';
